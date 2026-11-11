/* Wallet connection (Leo PRD 11-10 §2.4) and referrer confirmation (§3).
   Real wallets (in-app browsers, extensions found through EIP-6963 or window.ethereum) are read for
   address and network only: this prototype never requests approvals, signatures or transactions.
   Prototype parts: WalletConnect scanning is simulated with a local demo address (real pairing needs a
   WalletConnect project ID); the referrer "signature" is a timed step; referrer bindings live on this device. */
window.Wallet=(()=>{
  const stateFields=['walletBalance','capital','amount','agentState','elapsed','startedAt','services','records','tokenWalletBalance','tokenProjectBalance','tokenCycleUsed','tokenConsumptionRecords','custody','custodyFee','realized','cycleSeed','exitSec','product','slots','runMode'];
  const POLYGON={chainId:'0x89',chainName:'Polygon',nativeCurrency:{name:'POL',symbol:'POL',decimals:18},rpcUrls:['https://polygon-rpc.com'],blockExplorerUrls:['https://polygonscan.com']};
  // Placeholder until the project gives its official referrer address (Leo §3.5).
  const OFFICIAL='0x9c3e5b1f0a7d2e46b8c1f53a0d9e7b24c6a1f08d';
  const cache=new Map(),found=new Map();
  let provider=null,handlers=null,busy=false,wcTimers=[],tab='popular',pick=null,refEdit=false,refGate=false,signing=false,shown='';
  const valid=a=>/^0x[\da-f]{40}$/i.test(a||'');
  const lower=a=>String(a||'').toLowerCase();
  const short=a=>a?a.slice(0,6)+'…'+a.slice(-4):'';
  const handheld=()=>/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const store={get(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch{return null}},set(k,v){try{v==null?localStorage.removeItem(k):localStorage.setItem(k,JSON.stringify(v))}catch{}}};
  // Popular wallets: deep links open this DApp inside the wallet's own browser, where it connects automatically.
  const catalog=[
    {id:'okx',name:'OKX Wallet',rdns:'com.okex.wallet',bg:'#000',ink:'#fff',mark:'OKX',site:'https://www.okx.com/web3',link:u=>'https://www.okx.com/download?deeplink='+encodeURIComponent('okx://wallet/dapp/url?dappUrl='+encodeURIComponent(u))},
    {id:'metamask',name:'MetaMask',rdns:'io.metamask',bg:'#f6851b',ink:'#fff',mark:'M',site:'https://metamask.io/download/',link:u=>'https://metamask.app.link/dapp/'+u.replace(/^https?:\/\//,'')},
    {id:'trust',name:'Trust Wallet',rdns:'com.trustwallet.app',bg:'#0500ff',ink:'#fff',mark:'T',site:'https://trustwallet.com/download',link:u=>'https://link.trustwallet.com/open_url?coin_id=966&url='+encodeURIComponent(u)},
    {id:'tokenpocket',name:'TokenPocket',rdns:'pro.tokenpocket',bg:'#2980fe',ink:'#fff',mark:'TP',site:'https://www.tokenpocket.pro/',link:u=>'tpdapp://open?params='+encodeURIComponent(JSON.stringify({url:u,chain:'Polygon',source:U.brand}))},
    {id:'imtoken',name:'imToken',rdns:'im.token.app',bg:'#11c4d1',ink:'#fff',mark:'im',site:'https://token.im/',link:u=>'imtokenv2://navigate/DappView?url='+encodeURIComponent(u)},
    {id:'coinbase',name:'Coinbase Wallet',rdns:'com.coinbase.wallet',bg:'#0052ff',ink:'#fff',mark:'C',site:'https://www.coinbase.com/wallet/downloads',link:u=>'https://go.cb-w.com/dapp?cb_url='+encodeURIComponent(u)}
  ];
  const t=(...a)=>U.t(...a);

  /* ---------- discovery ---------- */
  addEventListener('eip6963:announceProvider',e=>{const d=e.detail;if(d?.info?.rdns&&d.provider?.request){found.set(d.info.rdns,d);if(window.S?.overlay==='wallet'&&shown==='chooser'&&tab==='popular'&&!busy)chooser()}});
  dispatchEvent(new Event('eip6963:requestProvider'));
  function legacy(){
    const p=window.okxwallet?.request?window.okxwallet:window.ethereum?.request?window.ethereum:null;if(!p)return null;
    const name=p===window.okxwallet||p.isOkxWallet?'OKX Wallet':p.isTokenPocket?'TokenPocket':p.isTrust||p.isTrustWallet?'Trust Wallet':p.isImToken?'imToken':p.isCoinbaseWallet?'Coinbase Wallet':p.isMetaMask?'MetaMask':t('浏览器钱包','Browser wallet');
    const rdns=catalog.find(c=>c.name===name)?.rdns||'injected';
    return {info:{name,rdns,icon:''},provider:p};
  }
  function injected(){const list=[...found.values()];if(!list.length){const l=legacy();if(l)list.push(l)}return list}
  function dappUrl(){
    // Only the referrer travels with the link; preview keys and scene params stay on this device.
    const u=new URL(location.href);u.search='';u.hash=location.hash||'#home';
    const ref=store.get('maat-ref');if(valid(ref))u.searchParams.set('ref',ref);
    return u.href;
  }

  /* ---------- identity ---------- */
  function identity(address,chain,meta={}){
    const next=valid(address)?address:'';
    const key=lower(S.walletAddress)||'guest',nextKey=lower(next)||'guest';
    if(key!==nextKey){cache.set(key,Object.fromEntries(stateFields.map(k=>[k,S[k]])));Object.assign(S,cache.get(nextKey)||fresh())}
    S.walletAddress=next;S.walletChainId=next&&chain?Number(chain):null;S.connected=!!next&&S.walletChainId===137;
    S.walletName=next?(meta.name||S.walletName||''):'';S.walletMode=next?(meta.mode||S.walletMode||''):'';
    Activity.identityChanged();
    if(D)render({preserve:true});
  }
  const fresh=()=>({walletBalance:3250,capital:0,amount:'',agentState:'inactive',elapsed:0,startedAt:Date.now(),services:[],records:[],tokenWalletBalance:1000,tokenProjectBalance:0,tokenCycleUsed:0,tokenConsumptionRecords:[],custody:null,custodyFee:0,realized:0,cycleSeed:'',exitSec:0,product:'standard',runMode:'cycle',slots:{standard:emptySlot(),custody:emptySlot()}});
  function unbind(){if(provider&&handlers&&provider.removeListener)for(const [n,fn] of Object.entries(handlers))provider.removeListener(n,fn);handlers=null}
  function bind(entry){
    if(provider===entry.provider&&handlers)return;
    unbind();provider=entry.provider;
    handlers={
      accountsChanged:a=>{const next=a?.[0]||'';if(!next){forget();toast(t('钱包已断开','Wallet disconnected'));return}identity(next,S.walletChainId,{mode:'injected',name:entry.info.name});if(S.walletChainId!==137)return network();closeOverlay();after()},
      chainChanged:c=>{identity(S.walletAddress,c,{mode:'injected',name:entry.info.name});if(Number(c)!==137)network();else if(S.overlay==='network'){closeOverlay();toast(t('已切换到 Polygon','Switched to Polygon'));after()}},
      disconnect:()=>{forget();toast(t('钱包已断开','Wallet disconnected'))}
    };
    for(const [n,fn] of Object.entries(handlers))provider.on?.(n,fn);
  }
  function forget(){unbind();provider=null;store.set('maat-wallet-session',null);identity('',null);closeOverlay()}

  /* ---------- connect sheet ---------- */
  function stopScan(){wcTimers.forEach(clearTimeout);wcTimers=[]}
  function logo(entry,size=''){
    const c=catalog.find(x=>x.rdns===entry.rdns||x.id===entry.id);
    if(entry.icon)return `<span class="cw-logo ${size}"><img src="${U.esc(entry.icon)}" alt=""></span>`;
    if(entry.id==='walletconnect')return `<span class="cw-logo wc ${size}">${wcGlyph()}</span>`;
    return `<span class="cw-logo ${size}" style="--cw-bg:${c?.bg||'var(--panel2)'};--cw-ink:${c?.ink||'var(--text)'}">${U.esc(c?.mark||entry.name?.slice(0,1)||'W')}</span>`;
  }
  const wcGlyph=()=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 9.2a8.1 8.1 0 0 1 11.4 0l.4.4a.4.4 0 0 1 0 .6l-1.3 1.3a.2.2 0 0 1-.3 0l-.5-.5a5.6 5.6 0 0 0-8 0l-.6.6a.2.2 0 0 1-.3 0l-1.3-1.3a.4.4 0 0 1 0-.6Zm14 2.6 1.2 1.1a.4.4 0 0 1 0 .6l-5.3 5.3a.4.4 0 0 1-.6 0l-3.8-3.8a.1.1 0 0 0-.1 0l-3.8 3.8a.4.4 0 0 1-.6 0L2 13.5a.4.4 0 0 1 0-.6l1.2-1.1a.4.4 0 0 1 .6 0l3.8 3.8h.1l3.8-3.8a.4.4 0 0 1 .6 0l3.8 3.8h.1l3.8-3.8a.4.4 0 0 1 .5 0Z" fill="currentColor"/></svg>`;
  function rows(){
    const list=injected(),seen=new Set(),out=[];
    for(const e of list){const c=catalog.find(x=>x.rdns===e.info.rdns);seen.add(c?.id||e.info.rdns);out.push({id:c?.id||e.info.rdns,name:e.info.name,icon:e.info.icon,rdns:e.info.rdns,detected:true})}
    for(const c of catalog)if(!seen.has(c.id))out.push({id:c.id,name:c.name,rdns:c.rdns,detected:false});
    return out;
  }
  function qr(text){
    if(typeof qrcode!=='function')return '';
    const q=qrcode(0,'H');q.addData(text);q.make();const n=q.getModuleCount();let d='';
    for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(q.isDark(r,c))d+=`M${c} ${r}h1v1h-1z`;
    return `<svg viewBox="-2 -2 ${n+4} ${n+4}" shape-rendering="crispEdges" role="img" aria-label="${t('连接二维码','Connection QR code')}"><rect x="-2" y="-2" width="${n+4}" height="${n+4}" fill="#fff"/><path d="${d}" fill="#0b0d12"/></svg>`;
  }
  // Account page before sign-in: the ways to connect are on the page itself, one tap from a QR code or a wallet.
  function inline(){
    const row=(action,value,mark,name,sub)=>`<button class="cw-item" data-action="${action}" data-value="${U.esc(value)}">${mark}<span class="cw-name">${U.esc(name)}${sub?`<small class="cw-sub">${sub}</small>`:''}</span>${icon('chevron','muted',16)}</button>`;
    return `<div class="cw-list">${row('wallet-scan','walletconnect',`<span class="cw-logo wc">${wcGlyph()}</span>`,'WalletConnect',t('手机钱包扫码，无需插件','Scan with a mobile wallet, no extension'))}${rows().slice(0,3).map(r=>row('wallet-pick',r.id,logo(r),r.name,r.detected?`<span class="cw-detected">${t('已检测到','Detected')}</span>`:'')).join('')}</div><button class="text-link" data-action="wallet">${t('全部钱包','All wallets')}</button>`;
  }
  function chooser(error=''){
    stopScan();pick=null;
    const tabs=`<div class="cw-tabs" role="tablist">${[['popular',t('热门钱包','Popular wallets')],['walletconnect','WalletConnect']].map(([id,l])=>`<button role="tab" aria-selected="${tab===id}" class="${tab===id?'on':''}" data-action="wallet-tab" data-value="${id}">${l}</button>`).join('')}</div>`;
    let body;
    if(tab==='walletconnect'){
      body=`<div class="cw-qr"><div class="cw-qr-box">${qr(dappUrl())}<span class="cw-qr-mark">${wcGlyph()}</span></div><p class="cw-qr-status" id="wc-status" aria-live="polite">${t('用手机钱包扫码连接','Scan with your mobile wallet')}</p><button class="text-link" data-action="wallet-copy-link">${icon('copy','',14)}${t('复制链接','Copy link')}</button></div>`;
    }else{
      body=`<div class="cw-list">${rows().map(r=>`<button class="cw-item" data-action="wallet-pick" data-value="${U.esc(r.id)}">${logo(r)}<span class="cw-name">${U.esc(r.name)}${r.detected?`<small class="cw-detected">${t('已检测到','Detected')}</small>`:''}</span>${icon('chevron','muted',16)}</button>`).join('')}</div>`;
    }
    sheet(t('连接钱包','Connect wallet'),`${tabs}${body}<p id="wallet-error" class="wallet-error" role="status">${U.esc(error)}</p>`,'sheet','wallet');shown='chooser';
    document.querySelector('.sheet')?.classList.add('cw-sheet');
    if(tab==='walletconnect')scan();
  }
  // Prototype: a scan is simulated so the flow can be reviewed without a phone wallet.
  function scan(){
    stopScan();
    wcTimers.push(setTimeout(()=>{const s=document.getElementById('wc-status');if(s){s.textContent=t('已扫码，请在钱包中确认','Scanned. Confirm in your wallet');s.classList.add('busy')}},3500));
    wcTimers.push(setTimeout(()=>{if(S.overlay==='wallet'&&tab==='walletconnect')connectDemo('walletconnect','WalletConnect')},5000));
  }
  function waiting(entry,title,sub,extra=''){
    stopScan();
    sheet(t('连接钱包','Connect wallet'),`<div class="cw-wait">${logo(entry,'big')}<b>${title}</b><p>${sub}</p>${extra}<button class="text-link" data-action="wallet-back">${t('返回','Back')}</button></div>`,'sheet','wallet');shown='waiting';
    document.querySelector('.sheet')?.classList.add('cw-sheet');
  }
  function choose(id){
    const r=rows().find(x=>x.id===id);if(!r)return;pick=id;
    if(r.detected){const e=injected().find(x=>(catalog.find(c=>c.rdns===x.info.rdns)?.id||x.info.rdns)===id);if(e)return connectReal(e)}
    const c=catalog.find(x=>x.id===id);if(!c)return;
    if(handheld()){
      waiting(r,t(`正在打开 ${c.name}`,`Opening ${c.name}`,{vi:`Đang mở ${c.name}`,ko:`${c.name} 여는 중`}),t('在钱包内打开后会自动连接','It connects automatically inside the wallet'),`<a class="btn outline block" href="${U.esc(c.site)}" target="_blank" rel="noopener noreferrer">${t(`还没有 ${c.name}？下载`,`No ${c.name}? Get it`,{vi:`Chưa có ${c.name}? Tải về`,ko:`${c.name}이(가) 없나요? 다운로드`})}</a>`);
      location.href=c.link(dappUrl());return;
    }
    waiting(r,t(`未检测到 ${c.name}`,`${c.name} not found`,{vi:`Không tìm thấy ${c.name}`,ko:`${c.name}을(를) 찾을 수 없음`}),t('安装浏览器插件，或用手机钱包扫码连接','Install the browser extension, or scan with a mobile wallet'),`<div class="cw-wait-actions"><a class="btn outline" href="${U.esc(c.site)}" target="_blank" rel="noopener noreferrer">${t('安装插件','Install')}</a><button class="btn primary" data-action="wallet-tab" data-value="walletconnect">${t('扫码连接','Scan to connect')}</button></div>`);
  }
  async function connectReal(entry){
    if(busy)return;busy=true;
    const r={id:'x',name:entry.info.name,icon:entry.info.icon,rdns:entry.info.rdns};
    waiting(r,t(`在 ${entry.info.name} 中确认连接`,`Confirm in ${entry.info.name}`,{vi:`Xác nhận trong ${entry.info.name}`,ko:`${entry.info.name}에서 연결 확인`}),t('只读取钱包地址和网络','Only your address and network are read'),`<span class="cw-spinner" aria-hidden="true"></span>`);
    const p=entry.provider;
    try{
      if(S.walletAddress&&lower(S.walletName)===lower(entry.info.name)){try{await p.request({method:'wallet_requestPermissions',params:[{eth_accounts:{}}]})}catch(e){if(e.code===4001)throw e}}
      const accounts=await p.request({method:'eth_requestAccounts'});
      if(!valid(accounts?.[0]))throw new Error('empty-account');
      const chain=await p.request({method:'eth_chainId'});
      bind(entry);store.set('maat-wallet-off',null);store.set('maat-wallet-session',{mode:'injected',rdns:entry.info.rdns});
      identity(accounts[0],chain,{mode:'injected',name:entry.info.name});busy=false;
      if(Number(chain)!==137)return network();
      closeOverlay();if(!after())toast(t(`已连接 ${entry.info.name}`,`${entry.info.name} connected`,{vi:`Đã kết nối ${entry.info.name}`,ko:`${entry.info.name} 연결됨`}));
    }catch(error){
      busy=false;
      chooser(error.code===4001?t('已取消连接','Connection cancelled'):error.code===-32002?t('请在钱包中处理待确认的请求','Confirm the pending request in your wallet'):t('连接失败，请重试','Connection failed. Try again'));
    }
  }
  function demoAddress(id){
    const all=store.get('maat-demo-wallets')||{};
    if(!valid(all[id])){const b=new Uint8Array(20);crypto.getRandomValues(b);all[id]='0x'+[...b].map(x=>x.toString(16).padStart(2,'0')).join('');store.set('maat-demo-wallets',all)}
    return all[id];
  }
  function connectDemo(id,name,chain=137){
    stopScan();unbind();provider=null;
    const address=demoAddress(id);
    store.set('maat-wallet-off',null);store.set('maat-wallet-session',{mode:'demo',id,name,address,chain});
    identity(address,chain,{mode:'demo',name});
    if(chain!==137)return network();
    closeOverlay();if(!after())toast(t(`已连接 ${name}`,`${name} connected`,{vi:`Đã kết nối ${name}`,ko:`${name} 연결됨`}));
  }

  /* ---------- connected wallet ---------- */
  function mine(){
    const {esc}=U,ok=S.connected;
    sheet(t('我的钱包','My wallet'),`<div class="cw-me"><span class="personal-avatar">${Account.avatar()}</span><div class="cw-me-id"><div class="cw-me-addr"><code title="${esc(S.walletAddress)}">${esc(S.walletAddress.slice(0,8)+'…'+S.walletAddress.slice(-6))}</code><button class="icon-btn" data-action="copy-address" aria-label="${t('复制钱包地址','Copy wallet address')}">${icon('copy','',16)}</button></div><span class="cw-me-net ${ok?'ok':'warn'}"><i></i>${esc(S.walletName||'')} · ${ok?'Polygon':t('网络不支持','Unsupported network')}</span></div></div>${ok?'':`<button class="btn primary block" data-action="wallet-network">${t('切换到 Polygon','Switch to Polygon')}</button>`}<div class="cw-me-actions"><button class="btn outline" data-action="wallet-switch">${icon('refresh','',15)}${t('切换钱包','Switch wallet')}</button><button class="btn outline" data-action="disconnect">${icon('close','',15)}${t('断开连接','Disconnect')}</button></div><a class="text-link cw-scan" href="https://polygonscan.com/address/${esc(S.walletAddress)}" target="_blank" rel="noopener noreferrer">${t('在 PolygonScan 查看','View on PolygonScan')}${icon('external','',12)}</a>`,'sheet','wallet');shown='mine';
  }
  function view(){if(S.walletAddress&&!busy)return mine();tab='popular';chooser()}
  function network(){
    stopScan();
    sheet(t('切换网络','Switch network'),`<div class="cw-net"><img src="assets/chain-polygon.svg" alt=""><p>${t('该 DApp 不支持当前的钱包网络，请切换到 Polygon 网络后继续访问','This DApp does not support your current wallet network. Switch to Polygon to continue')}</p></div><p id="network-error" class="wallet-error" role="status"></p><button class="btn primary block" data-action="wallet-network">${t('切换到 Polygon','Switch to Polygon')}</button>`,'sheet','network');
  }
  async function switchNetwork(){
    const err=()=>document.getElementById('network-error');
    if(S.walletMode==='demo'){const s=store.get('maat-wallet-session');if(s){s.chain=137;store.set('maat-wallet-session',s)}identity(S.walletAddress,137,{});closeOverlay();toast(t('已切换到 Polygon','Switched to Polygon'));after();return}
    if(!provider)return;
    try{
      try{await provider.request({method:'wallet_switchEthereumChain',params:[{chainId:'0x89'}]})}
      catch(e){if(e.code===4902||e.data?.originalError?.code===4902)await provider.request({method:'wallet_addEthereumChain',params:[POLYGON]});else throw e}
      const c=await provider.request({method:'eth_chainId'});identity(S.walletAddress,c,{});
      if(Number(c)===137){closeOverlay();toast(t('已切换到 Polygon','Switched to Polygon'));after()}
    }catch(e){const el=err();if(el)el.textContent=e.code===4001?t('已取消切换','Switch cancelled'):t('请在钱包中切换到 Polygon','Switch to Polygon in your wallet')}
  }
  function disconnect(){store.set('maat-wallet-off',true);forget();toast(t('已断开连接','Disconnected'))}

  /* ---------- auto connect (Leo §2.4.1) ---------- */
  async function auto(){
    const ref=new URLSearchParams(location.search).get('ref');if(valid(ref))store.set('maat-ref',ref);
    if(store.get('maat-wallet-off'))return;
    const s=store.get('maat-wallet-session');
    if(s?.mode==='demo'&&valid(s.address)){identity(s.address,s.chain||137,{mode:'demo',name:s.name});if(S.walletChainId!==137)network();else after(true);return}
    await new Promise(r=>setTimeout(r,120));
    const list=injected();if(!list.length)return;
    const entry=list.find(e=>e.info.rdns===s?.rdns)||list[0];
    try{
      let a=await entry.provider.request({method:'eth_accounts'});
      if(!valid(a?.[0])&&handheld())a=await entry.provider.request({method:'eth_requestAccounts'});
      if(!valid(a?.[0]))return;
      const c=await entry.provider.request({method:'eth_chainId'});
      bind(entry);store.set('maat-wallet-session',{mode:'injected',rdns:entry.info.rdns});
      identity(a[0],c,{mode:'injected',name:entry.info.name});
      if(Number(c)!==137)network();else after(true);
    }catch{}
  }

  /* ---------- referrer (Leo §3) ---------- */
  const bound=(a=S.walletAddress)=>{const b=store.get('maat-referrer-'+lower(a));return b&&valid(b.inviter)?b:null};
  function suggested(){const r=store.get('maat-ref');return valid(r)&&lower(r)!==lower(S.walletAddress)?r:OFFICIAL}
  function nickname(a){
    if(lower(a)===OFFICIAL)return t(`${U.brand} 官方`,`${U.brand} Official`,{vi:`${U.brand} chính thức`,ko:`${U.brand} 공식`});
    try{const p=JSON.parse(localStorage.getItem('forea-profile-'+lower(a))||'{}');if(p.nickname)return String(p.nickname).slice(0,24)}catch{}
    return Account.defaultName(a);
  }
  function person(a){
    const off=lower(a)===OFFICIAL;
    return `<span class="personal-avatar ref-avatar">${off?`<img src="assets/mark.svg" alt="">`:Account.avatar(Account.seed(a))}</span><div class="ref-id"><b>${U.esc(nickname(a))}</b><code>${U.esc(a.slice(0,8)+'…'+a.slice(-6))}</code></div>`;
  }
  function referrer(gate=false,error=''){
    if(!S.connected)return;
    refGate=gate||refGate;
    const inviter=suggested(),fromLink=inviter!==OFFICIAL;
    const head=Pages.loginSteps(1)+(refGate?`<p class="ref-gate">${icon('lock','',14)}${t('确认邀请关系后才能继续','Confirm your referrer to continue')}</p>`:'');
    const card=refEdit
      ?`<label class="field-label" for="ref-input">${t('邀请人钱包地址','Referrer wallet address')}</label><input class="profile-input" id="ref-input" inputmode="text" autocomplete="off" spellcheck="false" placeholder="0x…"><div id="ref-preview" class="ref-card ref-preview" hidden></div><button class="text-link" data-action="ref-cancel-edit">${t('使用原邀请人','Use the original referrer')}</button>`
      :`<div class="ref-card">${person(inviter)}<button class="text-link" data-action="ref-edit">${t('修改','Edit')}</button></div><p class="tiny muted ref-source">${fromLink?t('来自邀请链接','From your invite link'):t('未通过邀请链接进入，默认为官方邀请','No invite link used, so the official account is your referrer')}</p>`;
    sheet(t('确认邀请关系','Confirm your referrer'),`${head}${card}<p id="ref-error" class="field-error" role="status">${U.esc(error)}</p><button class="btn primary block" data-action="ref-confirm" ${signing?'disabled aria-busy="true"':''}>${signing?`<span class="cw-spinner small" aria-hidden="true"></span>${t('请在钱包中签名','Sign in your wallet')}`:t('确认绑定','Confirm')}</button><p class="tiny muted ref-note">${t('绑定后不可更改','This cannot be changed later')}</p>`,'sheet','referrer');
    if(refEdit)document.getElementById('ref-input')?.focus();
  }
  function check(value){
    const a=String(value||'').trim();
    if(!a)return [null,t('请输入邀请人钱包地址','Enter the referrer wallet address')];
    if(!valid(a))return [null,t('钱包地址格式不正确','Invalid wallet address')];
    if(lower(a)===lower(S.walletAddress))return [null,t('不能填写自己的地址','You cannot refer yourself')];
    // Existence is checked by the backend in production; every well-formed address counts here.
    return [a,''];
  }
  function confirmRef(){
    if(signing||!S.connected||bound())return;
    let inviter=suggested();
    if(refEdit){const [a,e]=check(document.getElementById('ref-input')?.value);if(!a){const el=document.getElementById('ref-error');if(el)el.textContent=e;return}inviter=a}
    signing=true;
    const btn=document.querySelector('[data-action="ref-confirm"]');if(btn){btn.disabled=true;btn.setAttribute('aria-busy','true');btn.innerHTML=`<span class="cw-spinner small" aria-hidden="true"></span>${t('请在钱包中签名','Sign in your wallet')}`}
    const input=document.getElementById('ref-input');if(input)input.disabled=true;
    const who=S.walletAddress;
    setTimeout(()=>{
      signing=false;if(S.walletAddress!==who||S.overlay!=='referrer')return;
      store.set('maat-referrer-'+lower(who),{inviter,at:Date.now()});refEdit=false;refGate=false;
      closeOverlay();render({preserve:true});toast(t('邀请关系已绑定','Referrer confirmed'));
    },1400);
  }
  function preview(value){
    const box=document.getElementById('ref-preview'),err=document.getElementById('ref-error');if(!box)return;
    const [a,e]=check(value);
    if(a){box.innerHTML=person(a);box.hidden=false;if(err)err.textContent=''}else{box.hidden=true;if(err)err.textContent=String(value||'').trim().length>=42||lower(value)===lower(S.walletAddress)?e:''}
  }
  // Business calls stop until the referrer is confirmed (Leo §3.3). Guests keep the open demo.
  function gate(){if(!S.connected||bound())return false;refEdit=false;referrer(true);return true}
  // Leo §3.2: after connecting, an unconfirmed account sees the referrer step (closable). Returns true when shown.
  function after(auto=false){
    if(!S.connected||bound())return false;
    // Once per browser session: a reload after closing it does not ask again; business calls still do.
    const k='maat-ref-asked-'+lower(S.walletAddress);try{if(auto&&sessionStorage.getItem(k))return false;sessionStorage.setItem(k,'1')}catch{}
    refEdit=false;refGate=false;referrer(false);return true;
  }

  const actions={
    'wallet-tab':v=>{tab=v==='walletconnect'?'walletconnect':'popular';chooser()},
    'wallet-pick':v=>choose(v),
    'wallet-scan':()=>{tab='walletconnect';chooser()},
    'wallet-back':()=>{busy=false;chooser()},
    'wallet-copy-link':async()=>{try{await navigator.clipboard.writeText(dappUrl());toast(t('链接已复制','Link copied'))}catch{toast(t('复制失败','Copy failed'))}},
    'wallet-switch':()=>{tab='popular';chooser()},
    'wallet-network':()=>{if(S.overlay!=='network')network();switchNetwork()},
    'ref-edit':()=>{refEdit=true;referrer()},
    'ref-cancel-edit':()=>{refEdit=false;referrer()},
    'ref-confirm':()=>confirmRef(),
    'ref-open':()=>{if(S.connected&&!bound()){refEdit=false;refGate=false;referrer()}},
    // Preview settings: replay states without a second wallet.
    'demo-wrong-network':()=>{if(S.walletMode!=='demo')return toast(t('先用 WalletConnect 连接演示钱包','Connect the demo wallet with WalletConnect first'));const s=store.get('maat-wallet-session');if(s){s.chain=56;store.set('maat-wallet-session',s)}identity(S.walletAddress,56,{});network()},
    'demo-reset-referrer':()=>{if(!S.walletAddress)return toast(t('请先连接钱包','Connect a wallet first'));store.set('maat-referrer-'+lower(S.walletAddress),null);try{sessionStorage.removeItem('maat-ref-asked-'+lower(S.walletAddress))}catch{}render({preserve:true});after()}
  };
  function onInput(e){if(e.target.id==='ref-input')preview(e.target.value)}
  function onClose(){stopScan();busy=false;pick=null;shown='';if(S.overlay==='referrer'&&!signing){refEdit=false;refGate=false}}
  return {view,chooser,inline,disconnect,auto,gate,bound,nickname,referrer,actions,onInput,onClose,official:OFFICIAL};
})();

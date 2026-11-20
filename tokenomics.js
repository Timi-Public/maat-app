/* Tokenomics presentation and demo-only interactions. No wallet approvals or transfers. */
window.Tokenomics=(()=>{
  const initialSupply=21000000;
  const demoRate=.0128;
  const demoImpact=.0012;
  const chartEnd=()=>Math.floor(Date.now()/60000)*60000;
  // Leo PRD 11-14 §7 卡片1 第 4 条「更新频率…及时一些」: the demo price moves every 3 s around the 0.0128 anchor
  // (a slow drift within ±1.2% plus a small step), the same value on every page and after a reload.
  const TICK=3000;
  const live=(t=Date.now())=>Number((demoRate*(1+Engine.walk('tk-px',600000,-.012,.012,t)+(Engine.rnd('tk-px-step',Math.floor(t/TICK))-.5)*.004)).toFixed(6));
  let pendingDeposit=false,pendingSwap=null;
  const ranges={
    '24H':[.0108,.011,.0106,.0112,.0118,.0115,.0119,.0123,.012,.0127,.0125,.0128],
    '7D':[.0098,.0103,.0097,.0105,.0102,.011,.0107,.0118,.0114,.0122,.012,.0128],
    '30D':[.009,.0088,.0096,.0101,.0095,.0102,.0109,.0106,.0117,.0122,.0118,.0128],
    'ALL':[.01,.0094,.0098,.0088,.0096,.0103,.01,.0113,.0108,.0118,.0124,.0128]
  };
  const allocations=[
    {zh:'生态激励',en:'Ecosystem',pct:40,color:'var(--accent)',releaseZh:'48 个月线性释放',releaseEn:'Linear over 48 months'},
    {zh:'流动性',en:'Liquidity',pct:25,color:'oklch(68% .11 175)',releaseZh:'上线时分批配置',releaseEn:'Allocated in stages at launch'},
    {zh:'团队',en:'Team',pct:20,color:'oklch(72% .09 230)',releaseZh:'锁定 12 个月，36 个月释放',releaseEn:'12-month cliff, 36-month vesting'},
    {zh:'储备',en:'Reserve',pct:15,color:'oklch(80% .08 90)',releaseZh:'按治理决议释放',releaseEn:'Released through governance'}
  ];
  function ensure(){
    if(!Number.isFinite(S.tokenWalletBalance))S.tokenWalletBalance=1000;
    if(!Number.isFinite(S.tokenProjectBalance))S.tokenProjectBalance=0;
    if(S.tokenSwapAmount===undefined)S.tokenSwapAmount=25;
    if(!Number.isFinite(S.tokenSlippage))S.tokenSlippage=.5;
    if(!S.tokenRange)S.tokenRange='24H';
    if(!S.tokenHistoryTab)S.tokenHistoryTab='burn';
    if(!Array.isArray(S.tokenConsumptionRecords))S.tokenConsumptionRecords=[];
  }
  const tokenMark=()=>`<span class="tk-mark tk-mark-img"><img src="assets/mark.svg" alt="" width="30" height="30"></span>`; // designer: the M mark
  // Leo PRD 11-14 §7 卡片1: a K-line like market apps — candles, volume, price and time axes; tap or drag to read a candle.
  // Demo candles are drawn through the 12 anchor prices of each range and end at the current price.
  const N=28,span=r=>({'24H':1,'7D':7,'30D':30,'ALL':90})[r]*86400000;
  function candles(range=S.tokenRange){
    const a=ranges[range],end=chartEnd(),step=span(range)/N,out=[];
    const at=f=>{const x=f*(a.length-1),k=Math.min(a.length-2,Math.floor(x));return a[k]+(a[k+1]-a[k])*(x-k)};
    let prev=a[0]*(1-.004);
    for(let i=0;i<N;i++){
      const r=k=>Engine.rnd('tk-c:'+range+':'+k,i),c=i===N-1?live():at(i/(N-1))*(1+(r('n')-.5)*.012),o=prev;
      out.push({t:end-step*(N-1-i),o,c,h:Math.max(o,c)*(1+r('h')*.009),l:Math.min(o,c)*(1-r('l')*.009),v:.25+r('v')*.75});prev=c;
    }
    return out;
  }
  const timeText=(ms,range)=>{const d=new Date(ms+8*3600000),p=n=>String(n).padStart(2,'0');return range==='24H'?`${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`:`${p(d.getUTCMonth()+1)}-${p(d.getUTCDate())}`};
  function geometry(range=S.tokenRange){
    const cs=candles(range),hi=Math.max(...cs.map(c=>c.h)),lo=Math.min(...cs.map(c=>c.l)),pad=(hi-lo)*.08,top=hi+pad,bot=lo-pad;
    const W=286,x=i=>6+(i+.5)*W/N,y=p=>8+(top-p)/(top-bot)*124;
    return {cs,x,y,top,bot,w:W/N*.62};
  }
  function caption(i,range=S.tokenRange){
    const c=candles(range)[i],f=n=>U.money(n,false,4),up=c.c>=c.o;
    return `<span id="token-chart-time">${U.stamp(c.t)} UTC+8</span><span id="token-chart-price" class="tk-ohlc ${up?'positive':'negative'}"><b>${U.money(c.c,false,i===N-1?5:4)}</b> <small>O ${f(c.o)} · H ${f(c.h)} · L ${f(c.l)}</small></span>`;
  }
  function chart(){
    const g=geometry(),{cs,x,y}=g,sel=Number.isInteger(S.tokenChartPoint)&&S.tokenChartPoint<N?S.tokenChartPoint:N-1;
    const ticks=[g.top-(g.top-g.bot)*.08,(g.top+g.bot)/2,g.bot+(g.top-g.bot)*.08];
    const body=cs.map((c,i)=>{const up=c.c>=c.o,yt=y(Math.max(c.o,c.c)),yb=y(Math.min(c.o,c.c));return `<g class="${up?'up':'down'}"><line x1="${x(i).toFixed(1)}" x2="${x(i).toFixed(1)}" y1="${y(c.h).toFixed(1)}" y2="${y(c.l).toFixed(1)}"/><rect x="${(x(i)-g.w/2).toFixed(1)}" y="${yt.toFixed(1)}" width="${g.w.toFixed(1)}" height="${Math.max(1,yb-yt).toFixed(1)}" rx=".6"/><rect class="vol" x="${(x(i)-g.w/2).toFixed(1)}" y="${(168-c.v*22).toFixed(1)}" width="${g.w.toFixed(1)}" height="${(c.v*22).toFixed(1)}"/></g>`}).join('');
    const labels=[0,Math.round((N-1)/3),Math.round((N-1)*2/3),N-1].map((i,k)=>`<text x="${x(i).toFixed(1)}" y="184" text-anchor="${k===0?'start':k===3?'end':'middle'}">${timeText(cs[i].t,S.tokenRange)}</text>`).join('');
    return `<div class="tk-chart-caption">${caption(sel)}</div><div class="tk-chart tk-kline" role="group" aria-label="${U.t('K 线，点按或拖动查看价格','Candles, tap or drag to read prices')}"><svg viewBox="0 0 320 190" preserveAspectRatio="none" aria-hidden="true">${ticks.map(p=>`<path d="M6 ${y(p).toFixed(1)}H292" class="tk-chart-grid"/><text class="tk-axis-y" x="318" y="${(y(p)+3).toFixed(1)}" text-anchor="end">${p.toFixed(4)}</text>`).join('')}${body}<line id="token-chart-guide" x1="${x(sel).toFixed(1)}" x2="${x(sel).toFixed(1)}" y1="6" y2="170" class="tk-chart-guide"/><line id="token-chart-hguide" x1="6" x2="292" y1="${y(cs[sel].c).toFixed(1)}" y2="${y(cs[sel].c).toFixed(1)}" class="tk-chart-guide"/><path d="M6 172H292" class="tk-axis-line"/>${labels}</svg><input id="token-chart-cursor" type="range" min="0" max="${N-1}" step="1" value="${sel}" aria-label="${U.t('查看历史价格','Inspect historical price')}"></div><div class="tk-range" role="tablist" aria-label="${U.t('价格时间范围','Price time range')}">${Object.keys(ranges).map(r=>`<button role="tab" aria-selected="${r===S.tokenRange}" class="${r===S.tokenRange?'active':''}" data-action="token-range" data-value="${r}">${r}</button>`).join('')}</div>`;
  }
  function marketCard(){
    const {t}=U;
    return `<article class="panel tk-market"><div class="tk-market-heading"><div class="row">${tokenMark()}<div><h2>MAAT</h2></div></div><span class="tk-network"><img src="assets/chain-polygon.svg" alt="" width="14" height="14"> Polygon</span></div><div class="tk-prices"><div><span class="label">${t('发行价格','Issue price')}</span><strong>— <small>USDC</small></strong></div><div data-row="current-price"><span class="label">${t('当前价格','Current price')}</span><strong><span data-live-price="5">${U.money(live(),false,5)}</span> <small>USDC</small></strong></div></div>${chart()}<div class="tk-market-source"><span>${t('行情来源','Price source')} <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer">Uniswap ${icon('external','',10)}</a></span><time>${t('更新于','Updated')} <span id="token-updated">${U.stamp(Date.now(),true)}</span> UTC+8</time></div></article>`;
  }
  // echo 11-06: token figures shown like the platform figures. One source for the six cards, Buyback & Burn and Home,
  // so they always agree: burned grows ~42 MAAT/h from 10-01; total = 21M − burned; circulating = liquidity 25% +
  // ecosystem 40% released linearly over 48 months − burned; market cap = circulating × price.
  const INITIAL=21000000,LAUNCH=Date.UTC(2026,9,1);
  function stats(t=Date.now()){
    const hours=Math.max(0,(t-LAUNCH)/3600000),days=hours/24;
    const burned=Math.round(168000+hours*42),total=INITIAL-burned;
    const circulating=Math.round(INITIAL*.25+INITIAL*.4*Math.min(1,days/1461)-burned);
    return {burned,total,circulating,bought:Math.round(burned*.88),cap:Math.round(circulating*live(t)), // bought back ≈ 88% of burns, the rest is trading tax (demo)
      pool:Math.round(Engine.walk('tk-pool',3600000,46000,54000,t)),volume:Math.round(Engine.walk('tk-vol',3600000,11000,18000,t)),ratio:burned/INITIAL};
  }
  function history(kind,t=Date.now()){
    const rows=[];let at=Math.floor(t/60000)*60000-(kind==='burn'?7:41)*60000;
    for(let i=0;i<5;i++){const r=Engine.rnd('tk-'+kind,Math.floor(at/3600000));rows.push({at,amount:kind==='burn'?Math.round(40+r*80):Math.round(800+r*1600)});at-=(kind==='burn'?95+Math.round(r*60):1380+Math.round(r*240))*60000}
    return rows;
  }
  // Leo PRD 11-14 §7 卡片2. Burns destroy supply for good and minting is disabled, so max supply = 21M − burned.
  function metrics(){
    const {t,money}=U,s=stats();
    return `<article class="panel tk-supply-card">${[[t('流通供应量','Circulating supply'),s.circulating,'MAAT'],[t('市值','Market cap'),s.cap,'USDC','token-cap'],[t('最大供应量','Max supply'),s.total,'MAAT'],[t('稀释估值','Fully diluted value'),Math.round(s.total*live()),'USDC','token-fdv']].map(([label,v,unit,id])=>`<div><span class="label">${label}</span><strong${id?` id="${id}"`:''}>${money(v,false,0)}</strong><small>${unit}</small></div>`).join('')}</article>`;
  }
  function quote(){
    ensure();
    const n=Number(S.tokenSwapAmount),reverse=!!S.tokenSwapReverse;
    const balance=reverse?S.tokenWalletBalance:S.walletBalance;
    const withinBalance=Number.isFinite(n)&&Number.isFinite(balance)&&n>0&&n<balance;
    // Demo assumptions: MAAT incurs a 5% token tax on both buy and sell.
    // Buy: USDC -> MAAT after price impact -> token tax. Sell: token tax -> USDC after price impact.
    const amount=Number.isFinite(n)&&n>0?n:0;
    const rate=live(),taxableTokens=reverse?amount:amount/rate*(1-demoImpact);
    const tax=taxableTokens*.05,output=reverse?(amount-tax)*rate*(1-demoImpact):taxableTokens-tax;
    const minimum=output*(1-S.tokenSlippage/100);
    const valid=withinBalance&&Number.isFinite(output)&&Number.isFinite(tax)&&Number.isFinite(minimum);
    return {n,reverse,balance,valid,tax,output,minimum,taxUnit:'MAAT',from:reverse?'MAAT':'USDC',to:reverse?'USDC':'MAAT'};
  }
  function swapMarkup(){
    ensure();const {t,money}=U,q=quote();
    const message=q.n>0&&q.n>=q.balance?t('输入金额须小于钱包余额','Amount must be less than wallet balance'):q.n<0?t('请输入有效金额','Enter a valid amount'):'';
    return `<article class="panel tk-swap"><div class="panel-head"><h2>Quick Swap</h2><span class="tk-via">${t('通过 Uniswap 执行','Executed on Uniswap')}</span></div><div class="tk-swap-box"><div class="between label"><label for="token-swap-amount">${t('支付','You pay')}</label><span>${t('余额','Balance')} <span id="token-swap-balance">${money(q.balance)}</span> ${q.from}</span></div><div class="tk-swap-value"><input id="token-swap-amount" type="number" inputmode="decimal" min="0" step="any" value="${S.tokenSwapAmount||''}" placeholder="0.00" aria-describedby="token-swap-error"><span class="tk-token-chip"><span class="token ${q.reverse?'':'usdc'}">${q.reverse?icon('spark','',14):'$'}</span>${q.from}</span></div></div><div class="tk-swap-switch"><button data-action="token-reverse" aria-label="${t('切换兑换方向','Reverse swap direction')}">${icon('swap','',21)}</button></div><div class="tk-swap-box"><div class="between label"><span>${t('预计获得','You receive')}</span><span>${t('余额','Balance')} ${money(q.reverse?S.walletBalance:S.tokenWalletBalance)} ${q.to}</span></div><div class="tk-swap-value"><strong id="token-swap-output">${money(q.output)}</strong><span class="tk-token-chip"><span class="token ${q.reverse?'usdc':''}">${q.reverse?'$':icon('spark','',14)}</span>${q.to}</span></div></div><p id="token-swap-error" class="field-error" role="status">${message}</p><div class="tk-swap-details"><div><span>${t('兑换率','Rate')}</span><b>1 MAAT = <span data-live-price="5">${money(live(),false,5)}</span> USDC</b></div><div><span>${t('MAAT 交易税','MAAT transaction tax')}</span><b>5% <span id="token-swap-tax">(${money(q.tax)} MAAT)</span></b></div><div><span>${t('价格影响','Price impact')}</span><b>0.12%</b></div><div><span>${t('最少获得','Minimum received')}</span><b id="token-swap-minimum">${money(q.minimum)} ${q.to}</b></div><div><span>${t('预计网络费','Estimated network fee')}</span><b>0.02 POL</b></div><div><span>${t('滑点容忍度','Slippage tolerance')}</span><button data-action="token-slippage">${S.tokenSlippage}% ${icon('settings','',12)}</button></div></div><button id="token-swap-submit" class="btn primary block" data-action="token-swap-review" ${q.valid?'':'disabled'}>${t('预览兑换','Preview swap')}${icon('arrow','',14)}</button></article>`;
  }
  function consumption(){
    const {t,money}=U;
    return `<article class="panel tk-consumption" id="tk-consumption"><div class="panel-head"><div><h2>Agent Token Consumption</h2><span class="tk-sub">${t('Agent 代币消耗','Agent token usage')}</span></div><button class="tk-topup" data-action="token-deposit">+ ${t('充值','Deposit')}</button></div><div class="tk-balance-row"><span>${t('钱包余额','Wallet balance')}</span><b>${money(S.tokenWalletBalance)} <small>MAAT</small></b></div><div class="tk-balance-row"><span>${t('Agent 可用余额','Agent balance')}</span><b>${money(S.tokenProjectBalance)} <small>MAAT</small></b></div><button class="tk-full-link" data-action="token-consumption-details"><span>${t('Agent 消耗详情','Agent consumption')}</span>${icon('arrow','',15)}</button></article>`;
  }
  function buyback(){
    const {t,money}=U,isBurn=S.tokenHistoryTab==='burn',s=stats();
    return `<article class="panel tk-burn"><div class="panel-head"><h2>Buyback &amp; Burn</h2>${icon('leaf','',20)}</div><div class="tk-burn-metrics four"><div><span class="label">${t('初始发行总量','Initial supply')}</span><strong>21,000,000</strong><small>MAAT</small></div><div><span class="label">${t('当前流通量','Circulating supply')}</span><strong>${money(s.circulating,false,0)}</strong><small>MAAT</small></div><div><span class="label">${t('累计回购量','Total bought back')}</span><strong>${money(s.bought,false,0)}</strong><small>MAAT</small></div><div><span class="label">${t('累计销毁量','Total burned')}</span><strong>${money(s.burned,false,0)}</strong><small>MAAT</small></div></div><div class="tk-history-tabs" role="tablist">${[['burn',t('最近销毁记录','Recent burns')],['buyback',t('最近回购记录','Recent buybacks')]].map(([id,label])=>`<button role="tab" aria-selected="${S.tokenHistoryTab===id}" class="${S.tokenHistoryTab===id?'active':''}" data-action="token-history" data-value="${id}">${label}</button>`).join('')}</div><div class="tk-history-columns"><span>${isBurn?t('销毁时间','Burn time'):t('回购时间','Buyback time')}</span><span>${t('数量 / 来源','Amount / Source')}</span><span>${t('链上记录','Explorer')}</span></div><div class="tk-history-list">${history(isBurn?'burn':'buyback').map(r=>`<div class="tk-history-row"><time>${U.stamp(r.at)}</time><span><b>${money(r.amount,false,0)} MAAT</b><small>${isBurn?t('交易税','Trading tax'):t('托管费回购','Custody-fee buyback')}</small></span><span class="tk-history-link" aria-hidden="true">${icon('external','',13)}</span></div>`).join('')}</div></article>`;
  }
  function allocation(){
    const {t,money}=U;
    let at=0;const stops=allocations.map(x=>{const s=`${x.color} ${at}% ${at+x.pct}%`;at+=x.pct;return s}).join(',');
    return `<article class="panel tk-allocation"><div class="panel-head"><h2>Token Allocation</h2></div><div class="tk-allocation-summary"><div class="tk-donut" style="background:conic-gradient(${stops})" role="img" aria-label="${allocations.map(x=>`${t(x.zh,x.en)} ${x.pct}%`).join(', ')}"><div><strong>21M</strong><small>MAAT</small></div></div><div class="tk-legend">${allocations.map(x=>`<div><span><i style="background:${x.color}"></i>${t(x.zh,x.en)}</span><b>${x.pct}%</b></div>`).join('')}</div></div><div class="tk-release-head"><h3>${t('代币释放计划','Token release schedule')}</h3></div><div class="tk-release-list">${allocations.map(x=>`<div class="tk-release-row"><div><span><i style="background:${x.color}"></i>${t(x.zh,x.en)}</span><b>${money(initialSupply*x.pct/100,false,0)} MAAT</b></div><p>${t(x.releaseZh,x.releaseEn)}</p></div>`).join('')}</div></article>`;
  }
  function security(){
    const {t}=U;
    return `<article class="panel tk-security"><div class="panel-head"><h2>Contract &amp; Security</h2>${icon('shield','',20)}</div><dl><div><dt>${t('所属公链','Network')}</dt><dd>Polygon</dd></div><div class="tk-contract-row"><dt>${t('代币合约','Token contract')}</dt><dd><span>${t('待部署','Not deployed')}</span><button class="icon-btn" disabled aria-label="${t('复制代币合约','Copy token contract')}">${icon('copy','',16)}</button></dd></div><div><dt>${t('合约验证','Source verification')}</dt><dd class="muted">${t('待部署验证','Pending deployment')}</dd></div><div><dt>${t('合约权限','Contract ownership')}</dt><dd class="muted">${t('待部署','Not deployed')}</dd></div><div><dt>${t('安全审计','Security audit')}</dt><dd class="muted">${t('待发布','Not yet published')}</dd></div></dl><div class="tk-audit-row"><span class="tk-audit-label">${t('审计报告','Audit report')}</span><span class="tk-audit-links"><button disabled>${icon('book','',12)}${t('查看 PDF','View PDF')}</button><button disabled>${icon('external','',12)}${t('审计网址','Audit website')}</button></span></div><button class="tk-full-link" disabled><span>${t('在区块浏览器查看','View on block explorer')}</span>${icon('external','',15)}</button></article>`;
  }
  function renderPage(){
    ensure();
    return `<section class="tk-page" data-screen-label="Tokenomics"><div class="tk-page-title"><h1>Tokenomics</h1></div><div class="tk-stack">${marketCard()}${metrics()}${swapMarkup()}${consumption()}${buyback()}${allocation()}${security()}</div></section>`;
  }
  function deposit(){
    ensure();const {t,money}=U;
    pendingDeposit=true;
    sheet(t('充值 MAAT','Deposit MAAT'),`<div class="confirm-row"><span>${t('钱包余额','Wallet balance')}</span><b>${money(S.tokenWalletBalance)} MAAT</b></div><div class="confirm-row"><span>${t('Agent 可用余额','Agent balance')}</span><b>${money(S.tokenProjectBalance)} MAAT</b></div><label class="field-label" for="token-deposit-amount">${t('充值数量','Amount')}</label><div class="amount-field"><input id="token-deposit-amount" type="number" inputmode="decimal" min="0" step="any" placeholder="0.00" value="${Math.min(100,S.tokenWalletBalance)||''}"><span>MAAT</span></div><p id="token-deposit-error" class="field-error" role="status"></p><p class="tk-deposit-note">${t('Agent 消耗从项目 MAAT 余额扣除','Agent usage is deducted from your project MAAT balance')}</p><div class="confirm-actions"><button class="btn secondary" data-action="close">${t('取消','Cancel')}</button><button class="btn primary" data-action="token-deposit-confirm">${t('确认充值','Confirm deposit')}</button></div>`,'sheet','token-deposit');
  }
  function depositToProject(n){
    ensure();if(!Number.isFinite(n)||n<=0||n>S.tokenWalletBalance)return false;
    S.tokenWalletBalance=Number((S.tokenWalletBalance-n).toFixed(8));S.tokenProjectBalance=Number((S.tokenProjectBalance+n).toFixed(8));
    U.record('token-deposit',n,'MAAT');return true;
  }
  function confirmDeposit(){
    if(!pendingDeposit||S.overlay!=='token-deposit')return;
    const input=document.getElementById('token-deposit-amount');if(!input)return;
    const n=Number(input.value),{t}=U;
    if(!Number.isFinite(n)||n<=0||n>S.tokenWalletBalance){const error=document.getElementById('token-deposit-error');if(error)error.textContent=t('请输入不超过钱包余额的有效数量','Enter an amount within your wallet balance');return}
    pendingDeposit=false;
    if(!depositToProject(n))return;closeOverlay();render({preserve:true});toast(t('已充值到项目 MAAT 余额','Deposited to project MAAT balance'));
  }
  function swapReview(){
    const q=quote(),{t,money}=U;if(!q.valid)return;
    pendingSwap={...q,account:S.account};
    sheet(t('确认兑换','Review swap'),`<div class="tk-swap-confirm"><strong>${money(q.n)} ${q.from}</strong>${icon('down','accent',23)}<strong>${money(q.output)} ${q.to}</strong></div><div class="confirm-row"><span>${t('MAAT 交易税','MAAT transaction tax')}</span><b>5% · ${money(q.tax)} MAAT</b></div><div class="confirm-row"><span>${t('价格影响','Price impact')}</span><b>0.12%</b></div><div class="confirm-row"><span>${t('最少获得','Minimum received')}</span><b>${money(q.minimum)} ${q.to}</b></div><div class="confirm-row"><span>${t('预计网络费','Estimated network fee')}</span><b>0.02 POL</b></div><div class="confirm-actions"><button class="btn secondary" data-action="close">${t('取消','Cancel')}</button><button class="btn primary" data-action="token-swap-confirm">${t('确认兑换','Confirm swap')}</button></div>`,'sheet','token-swap');
  }
  function swapConfirm(){
    if(!pendingSwap||S.overlay!=='token-swap')return;
    // The price keeps moving while the sheet is open; the swap settles at the quote the user reviewed.
    const now=quote(),q=pendingSwap;if(!now.valid||q.account!==S.account||q.n!==now.n||q.reverse!==now.reverse)return;
    pendingSwap=null;
    if(q.reverse){S.tokenWalletBalance-=q.n;S.walletBalance+=q.output}else{S.walletBalance-=q.n;S.tokenWalletBalance+=q.output}
    S.walletBalance=Number(S.walletBalance.toFixed(8));S.tokenWalletBalance=Number(S.tokenWalletBalance.toFixed(8));
    U.record('swap',-q.n,q.from);closeOverlay();render({preserve:true});toast(U.t('兑换完成','Swap completed'));
  }
  function updateQuote(){
    const q=quote(),{t,money}=U;
    const output=document.getElementById('token-swap-output');if(output)output.textContent=money(q.output);
    const tax=document.getElementById('token-swap-tax');if(tax)tax.textContent=`(${money(q.tax)} MAAT)`;
    const minimum=document.getElementById('token-swap-minimum');if(minimum)minimum.textContent=`${money(q.minimum)} ${q.to}`;
    const error=document.getElementById('token-swap-error');if(error)error.textContent=q.n>0&&q.n>=q.balance?t('输入金额须小于钱包余额','Amount must be less than wallet balance'):q.n<0?t('请输入有效金额','Enter a valid amount'):'';
    const submit=document.getElementById('token-swap-submit');if(submit)submit.disabled=!q.valid;
  }
  function onInput(e){
    if(e.target.id==='token-swap-amount'){S.tokenSwapAmount=Number(e.target.value);updateQuote()}
    if(e.target.id==='token-deposit-amount'){const error=document.getElementById('token-deposit-error');if(error)error.textContent=''}
    if(e.target.id==='token-chart-cursor'){
      const i=Number(e.target.value);S.tokenChartPoint=i;const g=geometry(),c=g.cs[i];if(!c)return;
      const cap=document.querySelector('.tk-chart-caption');if(cap)cap.innerHTML=caption(i);
      const v=document.getElementById('token-chart-guide');v?.setAttribute('x1',g.x(i));v?.setAttribute('x2',g.x(i));
      const h=document.getElementById('token-chart-hguide');h?.setAttribute('y1',g.y(c.c));h?.setAttribute('y2',g.y(c.c));
    }
  }
  // Every 3 s: price figures, the last candle, market cap and the swap quote follow the price. Nothing re-renders,
  // so scroll position, the chart cursor and a half-typed amount stay as they are.
  let shown=live();
  function tick(){
    const p=live(),dir=p>shown?'up':p<shown?'down':'';shown=p;
    document.querySelectorAll('[data-live-price]').forEach(el=>{const v=U.money(p,false,Number(el.dataset.livePrice));if(el.textContent===v)return;el.textContent=v;if(dir){el.classList.remove('tick-up','tick-down');void el.offsetWidth;el.classList.add('tick-'+dir)}});
    const set=(id,v)=>{const el=document.getElementById(id);if(el&&el.textContent!==v)el.textContent=v};
    const s=stats();set('token-cap',U.money(s.cap,false,0));set('token-fdv',U.money(Math.round(s.total*p),false,0));set('ov-token-cap',U.money(s.cap,false,0));
    const svg=document.querySelector('.tk-kline svg');
    if(svg){
      const tmp=document.createElement('div');tmp.innerHTML=chart();svg.replaceWith(tmp.querySelector('svg'));
      const sel=Number.isInteger(S.tokenChartPoint)&&S.tokenChartPoint<N?S.tokenChartPoint:N-1,cap=document.querySelector('.tk-chart-caption');if(cap&&sel===N-1)cap.innerHTML=caption(sel);
      set('token-updated',U.stamp(Date.now(),true));
    }
    if(document.getElementById('token-swap-output')&&S.overlay!=='token-swap')updateQuote();
  }
  setInterval(()=>{if(!document.hidden)tick()},TICK);
  const actions={
    'token-range':range=>{if(!ranges[range])return;S.tokenRange=range;S.tokenChartPoint=N-1;render({preserve:true})},
    'token-history':tab=>{if(!['burn','buyback'].includes(tab))return;S.tokenHistoryTab=tab;render({preserve:true})},
    'token-reverse':()=>{S.tokenSwapReverse=!S.tokenSwapReverse;S.tokenSwapAmount=0;render({preserve:true});document.getElementById('token-swap-amount')?.focus({preventScroll:true})},
    'token-slippage':()=>sheet(U.t('滑点容忍度','Slippage tolerance'),`<div class="tk-slippage">${[.1,.5,1].map(x=>`<button class="btn ${S.tokenSlippage===x?'primary':'secondary'}" data-action="token-set-slippage" data-value="${x}">${x}%</button>`).join('')}</div>`),
    'token-set-slippage':value=>{if(![.1,.5,1].includes(Number(value)))return;S.tokenSlippage=Number(value);closeOverlay();render({preserve:true})},
    'token-swap-review':v=>Wallet.gate()||swapReview(v),'token-swap-confirm':swapConfirm,'token-deposit':v=>Wallet.gate()||deposit(v),'token-deposit-confirm':confirmDeposit,
    'token-consumption-details':()=>{location.hash='account/consumption'}
  };
  return {stats,render:renderPage,swapMarkup,actions,onInput,ensure,quote,depositToProject,get price(){return live()},tokenValue:amount=>amount*live()};
})();

// Language tables. `node scripts/i18n.mjs check` (part of npm run check, no dependencies) verifies that
//   - every t(zh,en) string has a Vietnamese and a Korean entry in i18n/vi.js and i18n/ko.js,
//   - strings built at runtime carry their own {vi,ko} translations,
//   - i18n/hk.js was generated from the current Chinese text.
// `node scripts/i18n.mjs hk` regenerates i18n/hk.js; it needs opencc-js once: npm i --no-save opencc-js
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
const files=['app.js','pages.js','overview.js','tokenomics.js','account.js','wallet.js','activity.js','community.js','insights.js','engine.js','feedback.js'];
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const cjk=/[一-鿿]/;
function readStr(s,i){const q=s[i];let j=i+1,hasExpr=false;
  for(;j<s.length;j++){const c=s[j];
    if(c==='\\'){j++;continue}
    if(q==='`'&&c==='$'&&s[j+1]==='{'){hasExpr=true;let depth=1;j+=2;
      for(;j<s.length&&depth;j++){const d=s[j];
        if(d==='\\'){j++;continue}
        if(d==="'"||d==='"'||d==='`'){j=readStr(s,j).end-1;continue}
        if(d==='{')depth++;else if(d==='}')depth--}
      j--;continue}
    if(c===q)return {end:j+1,raw:s.slice(i,j+1),hasExpr}}
  throw new Error('unterminated string')}
const ev=x=>(0,eval)(x);
function collect(){
  const stat=new Map(),dyn=[];
  const put=(zh,en,f)=>{if(en&&/[A-Za-z]{2}/.test(en)&&!cjk.test(en)&&!stat.has(en))stat.set(en,{zh,f})};
  for(const f of files){const s=read(f);const re=/(^|[^\w$.])(?:U\.)?t\(/g;let m;
    while((m=re.exec(s))){const i=re.lastIndex,q=s[i];if(q!=="'"&&q!=='"'&&q!=='`')continue;
      const a=readStr(s,i);let k=a.end;if(s[k]!==',')continue;k++;while(s[k]===' ')k++;
      if(!"'\"`".includes(s[k])){dyn.push({f,line:s.slice(0,i).split('\n').length,text:s.slice(i,i+60),ok:/,\s*\{\s*vi:/.test(s.slice(k,k+90))});continue}
      const b=readStr(s,k);
      if(a.hasExpr||b.hasExpr||s[b.end]!==')'){dyn.push({f,line:s.slice(0,i).split('\n').length,text:b.raw.slice(0,60),ok:/^,\s*\{\s*vi:/.test(s.slice(b.end,b.end+12))});continue}
      put(ev(a.raw),ev(b.raw),f)}
    if(f==='feedback.js')continue;
    // pairs handed to t() indirectly: ['中文','English'], {zh:'…',en:'…'}, [zh…],[en…]
    const lit=`'(?:[^'\\\\\\n]|\\\\.)*'`;
    const pair=new RegExp(`(${lit})\\s*,\\s*(${lit})`,'g');while((m=pair.exec(s))){const zh=ev(m[1]);if(cjk.test(zh)&&!/^,\s*\{\s*vi:/.test(s.slice(m.index+m[0].length,m.index+m[0].length+12)))put(zh,ev(m[2]),f);pair.lastIndex=m.index+m[1].length}
    const kv=new RegExp(`[zZ]h:(${lit}),(?:\\w+:[^,]+,)*?\\w*[eE]n:(${lit})`,'g');while((m=kv.exec(s)))put(ev(m[1]),ev(m[2]),f);
    const arr=new RegExp(`\\[((?:${lit},?)+)\\](?:\\[\\w+\\])?\\s*,\\s*\\[((?:${lit},?)+)\\]`,'g');
    while((m=arr.exec(s))){const a=ev('['+m[1]+']'),b=ev('['+m[2]+']');if(a.length===b.length)a.forEach((z,i)=>{if(cjk.test(z))put(z,b[i],f)})}}
  return {stat,dyn}}
function runs(){const set=new Set();for(const f of files)for(const r of read(f).match(/[一-鿿]+/g)||[])set.add(r);return [...set].sort()}
const stamp=list=>createHash('sha256').update(list.join('\n')).digest('hex').slice(0,16);
function load(lang){const I18N={data:{hk:{},vi:{},ko:{}}};new Function('I18N',read(`i18n/${lang}.js`))(I18N);return I18N.data[lang]}
const IGNORE=new Set(['English','Tokenomics']);
const mode=process.argv[2]||'check';
if(mode==='check'){
  const {stat,dyn}=collect();let bad=0;
  for(const lang of ['vi','ko']){const d=load(lang);const missing=[...stat].filter(([en,v])=>d[en]==null&&v.f!=='feedback.js'&&!IGNORE.has(en));
    if(missing.length){bad++;console.error(`i18n: ${missing.length} strings have no ${lang} translation:`);for(const [en,v] of missing.slice(0,40))console.error(`  ${v.f}: ${JSON.stringify(en)}  (${v.zh})`)}}
  const open=dyn.filter(x=>!x.ok&&x.f!=='feedback.js');
  if(open.length){bad++;console.error(`i18n: ${open.length} runtime-built strings need t(zh,en,{vi,ko}):`);for(const x of open)console.error(`  ${x.f}:${x.line} ${x.text}`)}
  if(load('hk').stamp!==stamp(runs())){bad++;console.error('i18n: i18n/hk.js is stale. Run: npm i --no-save opencc-js && node scripts/i18n.mjs hk')}
  if(bad)process.exit(1);console.log(`i18n ok: ${stat.size} strings × vi, ko; ${dyn.length} runtime strings; hk tables current`);
}else if(mode==='hk'){
  const {Converter}=await import('opencc-js');const conv=Converter({from:'cn',to:'hk'});
  // Hong Kong wording, applied to the Simplified text before conversion, and glyph choices applied after it.
  const terms=[['默认','预设'],['设置','设定'],['登录','登入'],['信息','资讯'],['实时','即时'],['链接','连结'],['加载','载入'],['搜索','搜寻'],['菜单','选单'],['未激活','未启用'],['激活','启用'],['文档','文件'],['粘贴','贴上']];
  const fixes=[['銷燬','銷毀'],['復投','複投'],['上鍊','上鏈'],['啓','啟'],['發布','發佈'],['裏','裡'],['户','戶']];
  const full=r=>{let s=r;for(const [a,b] of terms)s=s.replaceAll(a,b);s=conv(s);for(const [a,b] of fixes)s=s.replaceAll(a,b);return s};
  const list=runs();const ch={};for(const r of list)for(const c of r)if(!(c in ch))ch[c]=conv(c);
  const byChar=r=>[...r].map(c=>ch[c]).join('');const run={};for(const r of list){const v=full(r);if(v!==byChar(r))run[r]=v}
  const pairs=Object.entries(ch).filter(([a,b])=>a!==b&&[...b].length===1).map(([a,b])=>a+b).join('');
  fs.writeFileSync(path.join(root,'i18n/hk.js'),`/* Generated by scripts/i18n.mjs hk. Do not edit. */\nI18N.data.hk={stamp:${JSON.stringify(stamp(list))},\nch:${JSON.stringify(pairs)},\nrun:${JSON.stringify(run).replace(/","/g,'",\n"')}};\n`);
  console.log(`hk: ${pairs.length/2} characters, ${Object.keys(run).length} phrases`);
}else if(mode==='list'){const {stat}=collect();console.log(JSON.stringify([...stat].map(([en,v])=>({en,zh:v.zh,f:v.f})),null,1))}

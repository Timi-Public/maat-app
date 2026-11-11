/* Languages (Leo PRD 11-10 §2.1): English, 简体中文, 繁體中文（香港）, Tiếng Việt, 한국어.
   Every string is written once as t(zh,en). Traditional Chinese is derived from zh with the tables in i18n/hk.js;
   Vietnamese and Korean are looked up by the English string in i18n/vi.js and i18n/ko.js, and fall back to English.
   Strings built at runtime pass their own translations as a third argument: t(zh,en,{vi,ko}). */
window.I18N=(()=>{
  const langs=[['en','English','EN','en'],['zh','简体中文','简','zh-CN'],['zh-HK','繁體中文（香港）','繁','zh-HK'],['vi','Tiếng Việt','VI','vi'],['ko','한국어','KO','ko']];
  const KEY='forecast-design-lang';
  const data={hk:{ch:'',run:{}},vi:{},ko:{}};
  let chars=null;
  const hk=s=>{
    if(!chars){chars={};const c=[...data.hk.ch];for(let i=0;i<c.length;i+=2)chars[c[i]]=c[i+1]}
    return String(s).replace(/[一-鿿]+/g,r=>data.hk.run[r]||[...r].map(c=>chars[c]||c).join(''));
  };
  const miss=new Set();
  const t=(lang,zh,en,x)=>{
    if(lang==='zh')return zh;
    if(lang==='en')return en;
    if(lang==='zh-HK')return hk(zh);
    if(x&&x[lang]!=null)return x[lang];
    const v=data[lang]?.[en];
    if(v!=null)return v;
    if(en&&/[A-Za-z]{2}/.test(en))miss.add(en);
    return en;
  };
  let stored=null;try{stored=localStorage.getItem(KEY)}catch{}
  const valid=l=>langs.some(x=>x[0]===l);
  return {langs,data,hk,t,miss,valid,
    chosen:valid(stored),initial:valid(stored)?stored:'en',
    save:l=>{try{localStorage.setItem(KEY,l)}catch{}},
    short:l=>langs.find(x=>x[0]===l)?.[2]||'EN',
    tag:l=>langs.find(x=>x[0]===l)?.[3]||'en',
    zh:l=>l==='zh'||l==='zh-HK'};
})();

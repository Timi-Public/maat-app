/* Apply the saved appearance before the first paint. Auto uses device local time.
   The approved design is dark, so a first visit opens dark until the visitor picks another mode. */
window.ForeaTheme=(()=>{
  const key='forea-theme-mode';
  const valid=mode=>['auto','light','dark'].includes(mode);
  const getMode=()=>{try{const mode=localStorage.getItem(key);return valid(mode)?mode:'dark'}catch{return 'dark'}};
  const resolve=(mode,hour=new Date().getHours())=>mode==='auto'?(hour>=7&&hour<19?'light':'dark'):(valid(mode)?mode:'light');
  const apply=mode=>{
    const theme=resolve(mode);
    document.documentElement.dataset.theme=theme;
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.content=theme==='dark'?'#000000':'#f9fafb';
    return theme;
  };
  const save=mode=>{if(!valid(mode))return;try{localStorage.setItem(key,mode)}catch{}return apply(mode)};
  apply(getMode());
  return {getMode,resolve,apply,save};
})();

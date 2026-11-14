import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
rmSync(dist, { recursive:true, force:true });
mkdirSync(dist, { recursive:true });
mkdirSync(path.join(dist,'assets'), { recursive:true });
copyFileSync(path.join(root,'public/assets/space-universe-stars-256164.mp4'),path.join(dist,'assets/space-universe-stars-256164.mp4'));
copyFileSync(path.join(root,'public/assets/agent-trading-network.mp4'),path.join(dist,'assets/agent-trading-network.mp4'));
execFileSync(path.join(root, 'node_modules/.bin/tailwindcss'), ['-i','src/input.css','-o','dist/app.css','--minify'], {stdio:'inherit'});
await build({
  entryPoints:['src/main.jsx'], bundle:true, minify:true, platform:'browser', target:['es2020'],
  format:'iife', jsx:'automatic', outfile:'dist/app.js', legalComments:'none',
  loader:{'.png':'dataurl','.svg':'dataurl'}
});
const html = readFileSync(path.join(root,'index.html'),'utf8');
writeFileSync(path.join(dist,'index.html'),html);

let css = readFileSync(path.join(dist,'app.css'),'utf8');
for (const [figma,system] of [['SF Pro:Medium','SF Pro Display'],['SF Pro:Regular','SF Pro Text'],['SF Pro:Semibold','SF Pro Display'],['SF Pro:Bold','SF Pro Display'],['SF Pro:Condensed Semibold','SF Pro Display'],['SF Pro Text:Semibold','SF Pro Text']]) css = css.replaceAll(figma,system);
let js = readFileSync(path.join(dist,'app.js'),'utf8');
const standalone = html
  .replace('<link rel="stylesheet" href="./app.css">',`<style>${css}</style>`)
  .replace('<script defer src="./app.js"></script>',`<script>${js.replace(/<\/script/gi,'<\\/script')}</script>`);
const output = path.resolve(root,'../../outputs/maat-overridable-ui.html');
mkdirSync(path.dirname(output),{recursive:true});
writeFileSync(output,standalone);
console.log(JSON.stringify({dist,standalone:output,bytes:standalone.length}));

const sharp = require('C:/Users/limes/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs = require('node:fs');
const path = require('node:path');
const root = process.argv[2];
const out = 'src/imports/about/partners-v3';
const reviewDir = 'output/logos/partners-review';
fs.mkdirSync(reviewDir, {recursive:true});
fs.mkdirSync(out, {recursive:true});
const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
(async()=>{
 const files = walk(root).filter(f=>/\.(png|jpe?g|gif|svg|webp)$/i.test(f)).sort();
 const manifest=[];
 for(const [i,file] of files.entries()) {
  const id=String(i+1).padStart(2,'0');
  const raster=await sharp(file,{density:180}).rotate().flatten({background:'#ffffff'}).toColourspace('srgb').png().toBuffer();
  const {data,info}=await sharp(raster).raw().toBuffer({resolveWithObject:true});
  const corners=[0,(info.width-1)*info.channels,(info.height-1)*info.width*info.channels,(info.width*info.height-1)*info.channels];
  const bg=[0,1,2].map(c=>corners.map(p=>data[p+c]).sort((a,b)=>a-b)[1]);
  let x0=info.width,y0=info.height,x1=-1,y1=-1;
  for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++){
   const p=(y*info.width+x)*info.channels;
   if(Math.max(...bg.map((v,c)=>Math.abs(v-data[p+c])))>20){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
  }
  const blank=x1<0;
  const overrides = {
   'channels4_profile.jpg': {left:108,top:243,width:684,height:329},
   'sddefault.jpg': {left:22,top:136,width:347,height:77},
   'purneftegaz-_27112024.jpg': {left:87,top:43,width:405,height:209},
  };
  const crop=overrides[path.basename(file)] ?? (blank?{left:0,top:0,width:info.width,height:info.height}:{left:x0,top:y0,width:x1-x0+1,height:y1-y0+1});
  await sharp(raster).extract(crop).resize({width:1200,height:700,fit:'inside',withoutEnlargement:true}).webp({lossless:true,effort:6}).toFile(path.join(out,id+'.webp'));
  manifest.push({id,source:path.relative(root,file),blank,...crop});
 }
 fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify(manifest,null,2));
 for(let start=0;start<manifest.length;start+=20){
  const batch=manifest.slice(start,start+20);const composites=[];
  for(let j=0;j<batch.length;j++){
   const image=await sharp(path.join(out,batch[j].id+'.webp')).resize(230,140,{fit:'contain',background:'white'}).png().toBuffer();
   const x=(j%4)*250,y=Math.floor(j/4)*175;
   composites.push({input:image,left:x+10,top:y+20});
   composites.push({input:Buffer.from(`<svg width="240" height="20"><text x="10" y="15" font-size="14">${batch[j].id}</text></svg>`),left:x,top:y});
  }
  await sharp({create:{width:1000,height:Math.ceil(batch.length/4)*175,channels:3,background:'#dddddd'}}).composite(composites).png().toFile(path.join(reviewDir,`review-${start}.png`));
 }
 console.log(JSON.stringify(manifest));
})();

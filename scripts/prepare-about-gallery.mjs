import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const source = process.argv[2];
if (!source) throw new Error('Укажите путь к папке Фотогалерея О компании первым аргументом.');
const output = 'src/imports/about/gallery-v2';
mkdirSync(output, { recursive: true });
const photos = [
  'N59A2086.JPG', 'N59A2061.JPG', ['N59A2072.JPG', 'N59A2077.JPG'],
  'IMG_8211.JPG', 'IMG_8133.JPG', 'IMG_8182.JPG', 'IMG_8191.JPG',
  'DJI_20260421113647_0462_D.JPG', 'DJI_20260421113843_0474_D.JPG', 'DJI_20260421114214_0492_D.JPG',
  'IMG_7989.JPG', 'IMG_7978.JPG', 'N59A2385.JPG', ['N59A2412.JPG', 'N59A2435.JPG'],
  'IMG_20260807_161753_372.jpg', 'N59A2445.JPG', '20250315_141843.jpg', 'N59A2174.JPG',
  'N59A2561.JPG', '17.jpg', 'N59A2589.JPG', 'IMG_7883.JPG', 'IMG_8041.JPG', 'IMG_8057.JPG',
  'IMG_8076.JPG', ['IMG_20260625_153006_132.jpg', 'IMG_20260625_153108_421.jpg'],
  'N59A2050.JPG', 'IMG_8087.JPG', 'IMG_20260902_190748_591.jpg',
];
for (const [index, item] of photos.entries()) {
  const files = Array.isArray(item) ? item : [item];
  const inputs = files.flatMap(name => ['-i', path.join(source, name)]);
  let filter;
  if (files.length === 2) {
    const firstCrop = files[0] === 'N59A2412.JPG' ? 'crop=iw:ih*0.84:0:ih*0.16,' : '';
    const secondCrop = files[1].startsWith('IMG_20260625') ? 'crop=iw*0.8:ih*0.8:iw*0.1:ih*0.1,' : '';
    filter = ['-filter_complex', `[0:v]${firstCrop}scale=-2:600,setsar=1[a];[1:v]${secondCrop}scale=-2:600,setsar=1[b];[a][b]hstack=inputs=2[out]`, '-map', '[out]'];
  } else {
    const crop = item === 'IMG_8087.JPG' ? 'crop=iw:ih*0.82:0:0,' : '';
    filter = ['-vf', `${crop}scale=-2:600,setsar=1`];
  }
  const dest = path.join(output, `${String(index + 1).padStart(2, '0')}.webp`);
  const result = spawnSync('ffmpeg', ['-y', '-v', 'error', ...inputs, ...filter, '-frames:v', '1', '-c:v', 'libwebp', '-quality', '84', dest], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr);
  console.log(`${dest}: ${files.join(' + ')}`);
}

// Keep existing asset names stable; 15a sorts immediately after photo 15.
const missingPhoto = spawnSync('ffmpeg', ['-y', '-v', 'error', '-i',
  path.join(source, 'IMG_20260807_161753_693.jpg'), '-vf', 'scale=-2:600,setsar=1',
  '-frames:v', '1', '-c:v', 'libwebp', '-quality', '84', path.join(output, '15a.webp')], { encoding: 'utf8' });
if (missingPhoto.status !== 0) throw new Error(missingPhoto.stderr);

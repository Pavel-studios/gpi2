from pathlib import Path
from PIL import Image

root = Path('src/imports')
mapping = {}
for source in root.rglob('*'):
    if source.suffix.lower() not in {'.jpg', '.jpeg', '.png'}:
        continue
    target = source.with_suffix('.webp')
    image = Image.open(source)
    if image.mode not in {'RGB', 'RGBA'}:
        image = image.convert('RGBA' if 'A' in image.getbands() else 'RGB')
    image.save(target, 'WEBP', quality=84, method=6)
    mapping[source.as_posix()] = target.as_posix()

for file in Path('src').rglob('*'):
    if file.suffix.lower() not in {'.ts', '.tsx', '.js', '.jsx', '.css'}:
        continue
    text = file.read_text(encoding='utf-8')
    updated = text
    for old, new in mapping.items():
        old_name = old.replace('src/imports/', '@/imports/')
        new_name = new.replace('src/imports/', '@/imports/')
        updated = updated.replace(old_name, new_name)
    if updated != text:
        file.write_text(updated, encoding='utf-8')

print(f'converted {len(mapping)} images')

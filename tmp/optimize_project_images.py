from pathlib import Path
from PIL import Image

roots = [
    Path('src/imports/project-flares'),
    Path('src/imports/project-pipeline'),
    Path('src/imports/project-heat'),
    Path('src/imports/project-mixers'),
]

for root in roots:
    for source in root.iterdir():
        if source.suffix.lower() not in {'.jpg', '.jpeg', '.png'}:
            continue
        target = source.with_suffix('.webp')
        image = Image.open(source).convert('RGB')
        image.thumbnail((2400, 1600), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=82, method=6)
        print(f'{source} -> {target} ({target.stat().st_size} bytes)')

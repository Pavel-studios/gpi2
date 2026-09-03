from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

path = Path('src/imports/project-pipeline/N59A2349.webp')
image = Image.open(path).convert('RGB')
mask = Image.new('L', image.size, 0)
d = ImageDraw.Draw(mask)
d.rectangle((1590, 0, 1760, 2260), fill=255)
d.polygon([(1400, 2160), (2080, 2160), (2150, 2420), (1420, 2500)], fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(7))
result = image.copy()
src = image.load()
dst = result.load()
for y in range(0, 2550):
    for x in range(1350, 2200):
        if mask.getpixel((x, y)) > 160:
            sx = min(image.width - 1, x + 260)
            dst[x, y] = src[sx, y]
result = result.filter(ImageFilter.GaussianBlur(0.6))
result.save(path, 'WEBP', quality=84, method=6)
print(path)

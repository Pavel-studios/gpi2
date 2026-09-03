from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFilter

source = Path('src/imports/project-pipeline/N59A2349.JPG')
target = Path('output/imagegen/N59A2349-rope-removed-preview.jpg')
target.parent.mkdir(parents=True, exist_ok=True)
image = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
image.thumbnail((1280, 1920), Image.Resampling.LANCZOS)
result = image.copy()
src = image.load()
dst = result.load()
# Rebuild the blurred factory backdrop where the vertical sling is visible.
for y in range(0, 205):
    for x in range(572, 608):
        left = src[540, y]
        right = src[645, y]
        dst[x, y] = tuple((left[i] + right[i]) // 2 for i in range(3))
# Restore a continuous metal neck from the unobstructed tube below the tie.
metal = image.crop((566, 410, 680, 510)).resize((150, 112), Image.Resampling.LANCZOS)
result.paste(metal, (540, 300))
# Feather only the edges of the restored area into the original photograph.
mask = Image.new('L', image.size, 0)
d = ImageDraw.Draw(mask)
d.rectangle((572, 0, 608, 205), fill=255)
d.rectangle((540, 300, 690, 412), fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(5))
result = Image.composite(result, image, mask)
result.save(target, quality=92, subsampling=1)
print(target)

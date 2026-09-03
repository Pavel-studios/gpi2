from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

src = Path(r"C:\Users\limes\Downloads\IMG_20230202_100926.jpg")
dst = Path(r"C:\WebDev\gpi2\src\imports\project-flares\IMG_20230202_100926_clean.jpg")

image = Image.open(src).convert("RGB")
w, h = image.size

# Smoke plume above/right of the flame. Use a manually bounded sky-only mask so
# all of the gray plume is removed, while the flame and installations remain intact.
mask = Image.new("L", (w, h), 0)
poly = [
    (2700, 400), (3150, 380), (3700, 650), (4000, 1050),
    (3850, 1450), (3300, 1600), (2780, 1350), (2660, 1050),
]
region = Image.new("L", (w, h), 0)
ImageDraw.Draw(region).polygon(poly, fill=255)

pix = image.load()
mask_pix = mask.load()
region_pix = region.load()
for y in range(650, 1550):
    for x in range(2600, 3820):
        if region_pix[x, y] != 0:
            mask_pix[x, y] = 255

mask = mask.filter(ImageFilter.GaussianBlur(32))

replacement = image.copy()
rep_pix = replacement.load()
src_pix = image.load()

for y in range(400, 1650):
    for x in range(2600, 4000):
        alpha = mask.getpixel((x, y))
        if alpha == 0:
            continue
        # Reconstruct a smooth sky color from clean samples on both sides.
        left = src_pix[1700, y]
        right = src_pix[4300, y]
        rep_pix[x, y] = tuple((left[i] + right[i]) // 2 for i in range(3))

replacement = replacement.filter(ImageFilter.GaussianBlur(18))
result = Image.composite(replacement, image, mask)
result.save(dst, quality=94, subsampling=1)
print(dst)

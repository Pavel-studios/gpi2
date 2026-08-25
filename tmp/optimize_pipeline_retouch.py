from pathlib import Path
from PIL import Image, ImageOps

source = Path(r'C:\Users\limes\AppData\Local\Temp\codex-clipboard-48e5528e-f26a-439d-8909-f4e7789f9e01.png')
target = Path('src/imports/project-pipeline/N59A2349-retouched.webp')
image = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
image.save(target, 'WEBP', quality=84, method=6)
print(target)

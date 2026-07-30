import os
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

source_dir = r'c:\Users\panth\Desktop\Sudevsuprise\Suprise'
out_dir = r'c:\Users\panth\Desktop\Sudevsuprise\public\photos'
os.makedirs(out_dir, exist_ok=True)

processed_files = []

for file in sorted(os.listdir(source_dir)):
    ext = file.lower().split('.')[-1]
    if ext in ['jpg', 'jpeg', 'png', 'heic']:
        filepath = os.path.join(source_dir, file)
        out_name = os.path.splitext(file)[0] + '.jpg'
        out_path = os.path.join(out_dir, out_name)
        try:
            img = Image.open(filepath)
            img = img.convert('RGB')
            # auto transpose image based on EXIF orientation if needed
            try:
                from PIL import ImageOps
                img = ImageOps.exif_transpose(img)
            except Exception:
                pass
            img.save(out_path, 'JPEG', quality=88)
            processed_files.append(f"/photos/{out_name}")
            print(f"Processed: {file} -> {out_name}")
        except Exception as e:
            print(f"Error converting {file}: {e}")

print(f"\nSuccessfully converted {len(processed_files)} photos!")
print("Photos list:", processed_files)

from PIL import Image
import os

input_folder = "D:/zeeshan/company_website/frontend/public/images/sample/graphic-design/poster_designe"
output_folder = "D:/zeeshan/company_website/frontend/public/images/sample/graphic-design/poster_design"

os.makedirs(output_folder, exist_ok=True)

for file in os.listdir(input_folder):
    file_path = os.path.join(input_folder, file)

    try:
        img = Image.open(file_path)

        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        output_file = os.path.splitext(file)[0] + ".jpg"
        output_path = os.path.join(output_folder, output_file)

        img.save(output_path, "JPEG", quality=95)

        print(f"✅ Converted: {file}")

    except Exception as e:
        print(f"❌ Skipped {file}: {e}")
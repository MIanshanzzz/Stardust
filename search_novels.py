import os
import sys

# 设置UTF-8编码
sys.stdout.reconfigure(encoding='utf-8')

# 找出Priest的作品
priest_dir = r'C:\Users\Administrator\Desktop\小说们'

print("=== 搜索Priest的作品 ===\n")

priest_files = []
for filename in os.listdir(priest_dir):
    if 'priest' in filename.lower():
        priest_files.append(filename)

print(f"找到 {len(priest_files)} 个Priest相关文件：\n")

# 显示前10个文件
for i, file in enumerate(priest_files[:10], 1):
    filepath = os.path.join(priest_dir, file)
    size = os.path.getsize(filepath)
    print(f"{i}. {file} ({size} bytes)")

print(f"\n总共: {len(priest_files)} 个文件")

# 找出现代背景的小说
print("\n\n=== 搜索现代背景的小说 ===\n")

modern_keywords = ['现代', '都市', '职场', '校园', '都市']

modern_files = []
for filename in os.listdir(priest_dir):
    if any(keyword in filename for keyword in modern_keywords):
        filepath = os.path.join(priest_dir, file)
        size = os.path.getsize(filepath)
        modern_files.append((filename, size))

print(f"找到 {len(modern_files)} 个现代背景相关文件：\n")

# 显示前10个文件
for i, (file, size) in enumerate(modern_files[:10], 1):
    print(f"{i}. {file} ({size} bytes)")

print(f"\n总共: {len(modern_files)} 个文件")

# 显示没有ABO相关的文件
print("\n\n=== 检查是否包含ABO设定 ===\n")

abo_keywords = ['abo', 'alpha', 'omega', 'beta', '生殖', ' scent']

abo_files = []
for filename in os.listdir(priest_dir):
    if any(keyword in filename.lower() for keyword in abo_keywords):
        filepath = os.path.join(priest_dir, file)
        size = os.path.getsize(filepath)
        abo_files.append((filename, size))

print(f"找到 {len(abo_files)} 个包含ABO关键词的文件：\n")

for i, (file, size) in enumerate(abo_files[:10], 1):
    print(f"{i}. {file} ({size} bytes)")

print(f"\n总共: {len(abo_files)} 个文件（不含ABO设定）")

import os
import sys

# 设置GBK编码
sys.stdout.reconfigure(encoding='gbk')

priest_dir = r'C:\Users\Administrator\Desktop\小说们'

print("=== 检查文件编码问题 ===\n")

# 尝试用不同的编码读取文件
encodings = ['utf-8', 'gbk', 'gb2312', 'gb18030', 'big5']

files_to_check = [
    '《一千年以后》作者：priest.txt',
    '《杀破狼》作者：priest.txt',
    '《镇魂》作者：priest.txt',
    '《太岁》作者：priest.txt'
]

for filename in files_to_check:
    filepath = os.path.join(priest_dir, filename)
    if os.path.exists(filepath):
        print(f"\n检查文件: {filename}")
        print("-" * 50)

        for encoding in encodings:
            try:
                with open(filepath, 'r', encoding=encoding) as f:
                    first_line = f.readline()
                    # 检查是否包含中文字符
                    if '\u4e00' <= first_line[-1] <= '\u9fff' or 'priest' in first_line.lower():
                        print(f"✓ {encoding}: 读取成功 - 第一行: {first_line.strip()[:50]}")
                        break
            except:
                print(f"✗ {encoding}: 读取失败")

print("\n\n=== 检查更多Priest作品 ===\n")

# 检查所有Priest文件
all_priest = []
for filename in os.listdir(priest_dir):
    if 'priest' in filename.lower():
        all_priest.append(filename)

print(f"找到 {len(all_priest)} 个Priest文件\n")

for i, file in enumerate(all_priest[:10], 1):
    filepath = os.path.join(priest_dir, file)
    print(f"{i}. {file}")
    print(f"   大小: {os.path.getsize(filepath):,} bytes")

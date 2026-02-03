import os
import sys

# 设置GBK编码输出
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='gbk', errors='replace')

priest_dir = r'C:\Users\Administrator\Desktop\小说们'

print("=== 检查文件编码 ===\n")

# 检查具体的4个文件
files_to_check = [
    '《一千年以后》作者：priest.txt',
    '《杀破狼》作者：priest.txt',
    '《镇魂》作者：priest.txt',
    '《太岁》作者：priest.txt'
]

for filename in files_to_check:
    filepath = os.path.join(priest_dir, filename)
    if os.path.exists(filepath):
        print(f"\n文件: {filename}")
        print("-" * 50)

        # 尝试用GBK读取
        try:
            with open(filepath, 'r', encoding='gbk') as f:
                content = f.read(500)
                print(f"✓ GBK编码读取成功")
                print(f"第一行: {content[:100]}")
        except UnicodeDecodeError as e:
            print(f"✗ GBK编码失败: {e}")
            # 尝试用UTF-8
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read(500)
                    print(f"✓ UTF-8编码读取成功")
                    print(f"第一行: {content[:100]}")
            except:
                print(f"✗ UTF-8也失败")

import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

priest_dir = r'C:\Users\Administrator\Desktop\小说们'

# 选择要分析的作品
selected_novels = [
    '《一千年以后》作者：priest.txt',
    '《杀破狼》作者：priest.txt',
    '《镇魂》作者：priest.txt',
    '《太岁》作者：priest.txt'
]

print("=== Priest作品选择 ===\n")

for i, novel in enumerate(selected_novels, 1):
    filepath = os.path.join(priest_dir, novel)
    if os.path.exists(filepath):
        size = os.path.getsize(filepath)
        print(f"{i}. {novel} ({size:,} bytes)")
    else:
        print(f"{i}. {novel} (文件不存在)")

print("\n=== 开始读取和分析 ===\n")

# 读取每个小说的开头
for novel in selected_novels:
    filepath = os.path.join(priest_dir, novel)
    if os.path.exists(filepath):
        print(f"\n{'='*60}")
        print(f"小说: {novel}")
        print(f"{'='*60}")

        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                first_1000 = f.read(1000)
                print(f"\n【开头1000字】\n")
                print(first_1000)
                print(f"\n...（继续读取更多内容）")

                f.seek(0)
                content = f.read()
                print(f"\n【总字数】: {len(content):,} 字")

        except Exception as e:
            print(f"读取错误: {e}")
    else:
        print(f"\n文件不存在: {novel}")

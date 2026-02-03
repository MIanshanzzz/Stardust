import os
import sys

# 设置GBK编码
sys.stdout.reconfigure(encoding='gbk')

priest_dir = r'C:\Users\Administrator\Desktop\小说们'

print("=== 读取Priest作品开头内容 ===\n")

# 选择要分析的作品
novels = {
    '《一千年以后》': '《一千年以后》作者：priest.txt',
    '《杀破狼》': '《杀破狼》作者：priest.txt',
    '《镇魂》': '《镇魂》作者：priest.txt'
}

for title, filename in novels.items():
    filepath = os.path.join(priest_dir, filename)
    if os.path.exists(filepath):
        print(f"\n{'='*60}")
        print(f"小说: {title}")
        print(f"{'='*60}\n")

        try:
            with open(filepath, 'r', encoding='gbk', errors='ignore') as f:
                content = f.read(2000)
                print(content)
                print(f"\n...（已读取2000字）\n")

        except Exception as e:
            print(f"读取错误: {e}")

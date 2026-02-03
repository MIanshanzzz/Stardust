import os
import sys

# 设置UTF-8编码
sys.stdout.reconfigure(encoding='utf-8')

priest_dir = r'C:\Users\Administrator\Desktop\小说们'

print("=== 搜索Priest作品中可能属于现代背景的小说 ===\n")

# Priest常见的现代背景作品列表
modern_candidates = [
    '《一千年以后》',
    '《大哥》',
    '《大战拖延症》',
    '《六爻》',
    '《兽丛之刀》',
    '《七爷》',
    '《一树人生》',
    '《坏道》',
    '《大英雄时代》',
    '《默读》',
    '《杀破狼》',
    '《镇魂》',
    '《山河表里》',
    '《残次品》',
    '《烈火浇愁》',
    '《太岁》',
    '《烈火浇愁》',
    '《温情》',
    '《格格不入》',
    '《吉时良辰》',
    '《我有特殊的表达技巧》',
    '《胡子红》',
    '《公共汽车谋杀案》',
    '《铁齿铜牙纪晓岚》',
    '《飞鸥不下》',
    '《残次品》',
    '《烈火浇愁》',
    '《太岁》'
]

# 搜索这些候选作品
candidates = []
for filename in os.listdir(priest_dir):
    if filename.lower().startswith('《') and 'priest' in filename.lower():
        if any(cand in filename for cand in modern_candidates):
            filepath = os.path.join(priest_dir, filename)
            size = os.path.getsize(filepath)
            candidates.append((filename, size))

print(f"找到 {len(candidates)} 个可能属于现代背景的Priest作品：\n")

for i, (file, size) in enumerate(candidates[:15], 1):
    print(f"{i}. {file} ({size:,} bytes)")

print(f"\n总共: {len(candidates)} 个文件")

# 如果没有找到，列出所有Priest的作品供选择
if len(candidates) < 3:
    print("\n\n=== 列出所有Priest的作品供选择 ===\n")

    all_priest = []
    for filename in os.listdir(priest_dir):
        if 'priest' in filename.lower():
            filepath = os.path.join(priest_dir, filename)
            size = os.path.getsize(filepath)
            all_priest.append((filename, size))

    all_priest.sort(key=lambda x: x[1], reverse=True)

    for i, (file, size) in enumerate(all_priest[:20], 1):
        print(f"{i}. {file} ({size:,} bytes)")

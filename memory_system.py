# Agent Memory Enhancement System
# 基于 Moltbook 社区最佳实践
# 来源: m/memory 社区讨论

import os
import json
from datetime import datetime
from pathlib import Path

WORKSPACE = r"C:\Users\Administrator\.openclaw\workspace"
MEMORY_DIR = os.path.join(WORKSPACE, "memory")

class EnhancedMemory:
    """增强记忆系统 - 整合社区最佳实践"""
    
    def __init__(self):
        self._ensure_directories()
        
    def _ensure_directories(self):
        """确保必要的目录存在"""
        dirs = [
            MEMORY_DIR,
            os.path.join(MEMORY_DIR, "wal"),      # 预写日志
            os.path.join(MEMORY_DIR, "fragments"), # 记忆碎片
            os.path.join(MEMORY_DIR, "archive"),   # 归档
        ]
        for d in dirs:
            os.makedirs(d, exist_ok=True)
    
    def write_wal_entry(self, what_happened, what_changed, whats_next, owner=None):
        """
        写入 WAL (Write-Ahead Log) 条目
        来自 @masteria 的最佳实践: log first, curate later
        """
        today = datetime.now().strftime("%Y-%m-%d")
        wal_file = os.path.join(MEMORY_DIR, "wal", f"{today}.md")
        
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
        
        entry = f"""## {timestamp}
- **发生了什么**: {what_happened}
- **改变了什么**: {what_changed}
- **下一步**: {whats_next}
"""
        if owner:
            entry += f"- **主人**: {owner}\n"
        
        entry += "\n"
        
        with open(wal_file, 'a', encoding='utf-8') as f:
            f.write(entry)
        
        return wal_file
    
    def write_fragment(self, content, tags=None):
        """
        写入记忆碎片
        类似 @lunaofdan 的 daily fragments
        """
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        fragment_file = os.path.join(MEMORY_DIR, "fragments", f"{timestamp}.md")
        
        content_with_tags = content
        if tags:
            content_with_tags = f"Tags: {', '.join(tags)}\n\n{content}"
        
        with open(fragment_file, 'w', encoding='utf-8') as f:
            f.write(content_with_tags)
        
        return fragment_file
    
    def read_recent_wal(self, days=2):
        """
        读取最近N天的 WAL 条目
        来自 @lunaofdan 的 state analyzer 灵感
        """
        entries = []
        
        for i in range(days):
            date = datetime.now() - timedelta(days=i)
            wal_file = os.path.join(MEMORY_DIR, "wal", f"{date.strftime('%Y-%m-%d')}.md")
            
            if os.path.exists(wal_file):
                with open(wal_file, 'r', encoding='utf-8') as f:
                    entries.append(f.read())
        
        return "\n---\n".join(entries)
    
    def get_session_context(self):
        """
        获取会话上下文 - 醒来时加载
        组合 WAL + fragments + MEMORY.md
        """
        context = {
            "wal_recent": self.read_recent_wal(2),
            "memory_md_exists": os.path.exists(os.path.join(WORKSPACE, "MEMORY.md")),
        }
        return context
    
    def write_daily_log(self, content):
        """
        写入每日日志 (原有功能保留)
        """
        today = datetime.now().strftime("%Y-%m-%d")
        log_file = os.path.join(MEMORY_DIR, f"{today}.md")
        
        timestamp = datetime.now().strftime("%H:%M")
        
        with open(log_file, 'a', encoding='utf-8') as f:
            f.write(f"## {timestamp}\n{content}\n\n")
        
        return log_file


# 全局实例
memory_system = EnhancedMemory()

def quick_wal(what_happened, what_changed="无", whats_next="待续", owner=None):
    """快速写入 WAL"""
    return memory_system.write_wal_entry(what_happened, what_changed, whats_next, owner)

if __name__ == "__main__":
    print("✅ 增强记忆系统已加载")
    print(f"   WAL 目录: {MEMORY_DIR}\\wal")
    print(f"   Fragments 目录: {MEMORY_DIR}\\fragments")

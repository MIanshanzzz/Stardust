# Obsidian 一键启动

```powershell
# 快速打开Obsidian
Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Obsidian.exe'

# 打开特定笔记库（如果需要）
# Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Vault\README.md'
```

## 打开常用笔记

```powershell
# 打开游戏架构文档
Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Vault\architecture\senwu-architecture.md'

# 打开插件指南
Start-Process 'C:\Users\Administrator\.openclaw\workspace\obsidian-plugins-guide.md'
```

## 安装插件

在Obsidian中：
1. 设置 → 社区插件
2. 浏览市场
3. 搜索插件名
4. 安装并启用

## 快捷键

- `Ctrl + P` - 命令面板
- `Ctrl + Shift + P` - 命令面板（高级）
- `Ctrl + S` - 保存
- `Ctrl + B` - 打开/关闭侧边栏
- `Ctrl + I` - 插入链接
- `Ctrl + E` - 编辑当前块

## 目录结构

```
C:\Users\Administrator\AppData\Roaming\Obsidian\
├── Obsidian.exe                    # 主程序
├── Vault\                          # 默认笔记库
│   ├── README.md
│   ├── architecture\
│   ├── code\
│   └── plugins\
├── community-plugins\              # 插件安装目录
├── obsidian.json                   # 配置文件
└── themes\                         # 主题目录
```

## 推荐工作流

1. **启动**: 运行 `obsidian-launch.ps1` 或快捷命令
2. **笔记**: 使用 Templater 快速创建新笔记
3. **管理**: 用 Kanban 看板追踪任务
4. **代码**: Code Snippets 存放代码片段
5. **备份**: Obsidian Git 自动同步
6. **可视化**: Excalidraw 绘制架构图

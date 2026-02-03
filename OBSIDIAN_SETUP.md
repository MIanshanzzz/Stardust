# Obsidian 快捷启动

## 快捷启动命令

在PowerShell中添加以下命令：

```powershell
function Obsidian {
    Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Obsidian.exe'
}
```

然后你就可以直接运行 `Obsidian` 打开Obsidian！

## 常用路径

- **安装目录**: `C:\Users\Administrator\AppData\Roaming\Obsidian`
- **默认笔记库**: `C:\Users\Administrator\AppData\Roaming\Obsidian\Vault`
- **插件目录**: `C:\Users\Administrator\AppData\Roaming\Obsidian\community-plugins`
- **配置文件**: `C:\Users\Administrator\AppData\Roaming\Obsidian\obsidian.json`

## 推荐插件

### 必装核心插件：
- **Templater** - 模板系统
- **Dataview** - 数据查询
- **Kanban** - 看板管理
- **Calendar** - 日历视图
- **Excalidraw** - 手绘图表

### 游戏开发辅助：
- **Code Snippets** - 代码片段
- **Tags Explorer** - 标签探索器
- **Excalidraw** - 架构图绘制

### 数据同步：
- **Obsidian Git** - Git版本控制
- **Sync** - 官方同步（付费但方便）

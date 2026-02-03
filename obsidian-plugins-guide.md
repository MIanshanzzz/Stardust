---
title: Obsidian 插件安装指南
date: 2026-02-03
tags:
  - obsidian
  - productivity
---

# 🧩 Obsidian 插件安装指南

## 安装步骤

### 1. 启用社区插件

打开Obsidian → 设置 → 社区插件 → 关闭安全模式（如果启用）

### 2. 浏览和安装

访问 [社区插件市场](https://obsidian.md/plugins)

**搜索安装以下插件：**

## 🚀 必装插件

### Templater（模板系统）
```
插件ID: templater
用途: 创建自定义模板，自动化笔记
安装: Search "Templater" → Install → Enable
```

### Dataview（数据查询）
```
插件ID: dataview
用途: 在笔记中使用SQL查询语言查询笔记内容
安装: Search "Dataview" → Install → Enable
```

### Kanban（看板管理）
```
插件ID: kanban
用途: 创建可拖拽的看板，项目管理
安装: Search "Kanban" → Install → Enable
```

### Calendar（日历视图）
```
插件ID: calendar
用途: 显示月视图，与笔记关联
安装: Search "Calendar" → Install → Enable
```

### Excalidraw（手绘图表）
```
插件ID: excalidraw-plugin
用途: 白板绘图，架构图
安装: Search "Excalidraw" → Install → Enable
```

## 🎮 游戏开发推荐

### Code Snippets（代码片段）
```
插件ID: code-snippets
用途: 代码片段库，快速插入常用代码
安装: Search "Code Snippets" → Install → Enable
```

### Tags Explorer（标签探索器）
```
插件ID: tags-explorer
用途: 可视化标签系统
安装: Search "Tags Explorer" → Install → Enable
```

## 📊 数据同步

### Obsidian Git（Git同步）
```
插件ID: obsidian-git
用途: Git版本控制，自动备份
安装: Search "Obsidian Git" → Install → Enable
配置:
  - 设置Git路径: `where git`
  - 设置仓库: 你的Vault路径
  - 设置自动提交: 每天一次
```

## 安装后配置

### 1. 配置 Templater
```yaml
%<% template("Snippets/Templates").sl %>
---
title: %<%:name %>
tags:
  - %<%:tag %>
---
```

### 2. 配置 Dataview
```dataview
TABLE without id
  link(file.link, title) as "笔记"
FROM "游戏开发"
WHERE contains(tags, "#game-dev")
SORT file.ctime DESC
```

### 3. 配置 Excalidraw
- 安装后会在侧边栏出现画笔图标
- 拖拽使用即可

## 常见问题

### 插件无法启用？
1. 检查网络连接
2. 重启Obsidian
3. 查看插件日志（开发者模式）

### Git同步失败？
1. 确保已安装Git: `git --version`
2. 配置Git用户信息
3. 测试SSH密钥配置

# Clawdbot - Claude Code Skill

## 简介
Claude Code 集成 Skill，用于在 OpenClaw 中调用 Claude Code 功能。

## 功能
- 调用 Claude Code 进行代码编写
- 调用 Claude Code 调试问题
- 调用 Claude Code 分析代码库
- 调用 Claude Code 执行自动化任务

## 使用方法

### 在对话中
```
@claudecode 请帮我查看这个文件的结构
@claudecode 用 TypeScript 重写这个函数
@claudecode 为什么这个代码会报错？
@claudecode 分析我的代码库
```

### 在 Skill 中
```yaml
skill:
  name: claude-code
  command: claude {prompt}
  description: 调用 Claude Code 进行代码相关任务
```

## 支持的命令
- `claude build` - 告诉 Claude 你想构建什么，它会制定计划、编写代码并确保工作正常
- `claude debug` - 描述一个 bug 或粘贴错误消息，Claude 会分析代码库并实施修复
- `claude navigate` - 询问任何关于你的代码库的问题
- `claude automate` - 修复琐碎的 lint 问题，解决合并冲突，编写发布说明
- `claude analyze` - 分析代码库结构

## 配置
```yaml
claude:
  executable: claude  # Claude Code 可执行文件路径
  auto_approve: false  # 是否自动批准所有更改
  project_path: .  # 项目路径
```

## 示例

### 示例 1：构建功能
```
用户: @claudecode 用 TypeScript 重写这个 React 组件

Claude:
1. 我会先读取你的组件代码
2. 然后用 TypeScript 重写它
3. 确保类型安全
4. 保持原有功能
```

### 示例 2：调试问题
```
用户: @claudecode 为什么这个函数会返回 undefined？

Claude:
1. 我会先读取你的代码
2. 分析返回值
3. 找出问题所在
4. 提供修复方案
```

### 示例 3：分析代码库
```
用户: @claudecode 分析这个项目的架构

Claude:
1. 我会扫描你的代码库
2. 识别主要模块
3. 分析依赖关系
4. 提供架构建议
```

## 注意事项
1. 确保已安装 Claude Code：`winget install Anthropic.ClaudeCode`
2. 首次使用需要登录：`claude`
3. Claude Code 只能在开发环境中使用
4. 敏感信息请勿通过 OpenClaw 传输

## 故障排查
- 如果 Claude Code 未安装，请运行：`winget install Anthropic.ClaudeCode`
- 如果无法登录，请运行：`claude`
- 如果权限不足，请确保有读写权限

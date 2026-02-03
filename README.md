# OpenClaw 自动优化和 Claude Code Skill

## 📁 项目结构
```
.
├── openclaw-monitor.ps1          # 进程监控脚本
├── restart-openclaw.ps1          # 重启脚本
├── openclaw-monitor.service      # 系统服务配置
├── start-monitor.bat             # 快速启动脚本
├── 部署指南.md                    # 详细部署文档
├── 方案总结.md                    # 快速参考指南
├── skills/
│   └── claude-code/
│       ├── SKILL.md              # Claude Code Skill 说明
│       └── skill.json            # Skill 配置
├── memory/                       # 长期记忆文件
├── AGENTS.md                     # 工作空间指南
├── SOUL.md                       # 角色
└── USER.md                       # 用户信息
```

## 🚀 快速开始

### 1. 启动进程监控

#### 方式 1：双击运行（最简单）
```
双击 start-monitor.bat
```

#### 方式 2：命令行
```powershell
cd C:\Users\Administrator\.openclaw\workspace
.\openclaw-monitor.ps1
```

#### 方式 3：注册为系统服务（推荐）
```powershell
sc.exe create OpenClawMonitor `
    binPath= "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\Users\Administrator\.openclaw\workspace\openclaw-monitor.ps1" `
    start= auto `
    DisplayName= "OpenClaw 进程监控" `
    Description= "监控 OpenClaw 进程，自动重启卡死的进程"

sc.exe start OpenClawMonitor
```

### 2. 使用 Claude Code Skill

#### 安装 Claude Code
```powershell
winget install Anthropic.ClaudeCode
claude  # 首次登录
```

#### 在对话中使用
```
@claudecode 用 TypeScript 重写这个组件
@claudecode 为什么这个函数会报错？
```

## 📊 监控功能

- ✅ 每5分钟检查 OpenClaw 进程状态
- ✅ 自动检测进程卡住（超过30分钟未响应）
- ✅ 自动重启卡死的进程
- ✅ 完整日志记录到 `openclaw-monitor.log`
- ✅ 支持系统服务方式长期运行

## 💡 特性

### 进程监控
- 进程存在性检查
- 运行时间检测
- CPU 使用率监控
- 自动重启机制
- 详细的日志记录

### Claude Code Skill
- 调用 Claude Code 进行代码编写
- 调用 Claude Code 调试问题
- 调用 Claude Code 分析代码库
- 支持多种 Claude Code 命令

## 🔍 查看日志

```powershell
# 查看最近50行
Get-Content "openclaw-monitor.log" -Tail 50

# 实时监控
Get-Content "opencllaw-monitor.log" -Wait -Tail 50
```

## 🛠️ 故障排查

### 监控脚本无法启动
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### 服务启动失败
```powershell
sc.exe query OpenClawMonitor
Get-Content "openclaw-monitor.log" -Tail 50
```

## 📝 注意事项

1. **执行策略**：需要 PowerShell 执行策略允许运行脚本
2. **后台运行**：监控脚本会在后台运行，关闭窗口不会停止
3. **重启频率**：默认30分钟未响应会重启，可调整

## 📄 文档

- [部署指南.md](./部署指南.md) - 完整部署和配置指南
- [方案总结.md](./方案总结.md) - 快速参考和命令列表

---

**版本**: 1.0
**创建时间**: 2026-02-03
**维护**: 老大

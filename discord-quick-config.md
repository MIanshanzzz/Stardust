# OpenClaw + Discord 快速配置指南

> 让OpenClaw加入你的Discord频道

---

## 🎯 目标
让"星尘"成为你的Discord Bot，并在你的频道中回复消息！

---

## 🚀 方式1：使用OpenClaw的配对功能（最简单，不需要创建Bot）

### 第一步：启用配对模式

在OpenClaw配置中添加：

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "dm": {
        "policy": "pairing"
      }
    }
  }
}
```

### 第二步：在Discord中给Bot发送配对请求

1. 打开你的Discord服务器
2. 找到OpenClaw Bot（如果你还没添加Bot，需要先创建Bot）
3. 私信Bot
4. 发送配对请求

### 第三步：接受配对请求

1. OpenClaw会自动接受配对请求
2. 然后你就可以直接在Discord中给Bot发送消息
3. Bot会回复你

**优点：**
- ✅ 不需要创建Bot Token
- ✅ 配置简单
- ✅ 适合个人使用

**缺点：**
- ⚠️ 需要先有一个Bot
- ⚠️ 限制较多（只能私信，不能频道）

---

## 🚀 方式2：创建Bot并添加到频道（推荐，功能完整）

### 第一步：创建Discord Bot（我已经帮你写好了步骤）

参考：`C:\Users\Administrator\.openclaw\workspace\discord-configuration-guide.md`

**快速步骤：**
1. 访问 https://discord.com/developers/applications
2. 创建应用
3. 创建Bot
4. 获取Token
5. 启用权限（Message Content Intent等）
6. 添加Bot到你的服务器

### 第二步：配置OpenClaw使用你的Bot Token

编辑 `C:\Users\Administrator\.openclaw\openclaw.json`：

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "你的Bot_Token",
      "tokenSource": "manual",
      "dm": {
        "policy": "open"
      }
    }
  }
}
```

### 第三步：重启OpenClaw Gateway

```bash
openclaw gateway restart
```

### 第四步：验证Bot是否工作

在Discord你的频道中：
1. @Bot
2. 发送消息"你好"
3. Bot应该会回复"你好！"

---

## 📝 配置示例

### 完整的Discord配置

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "MTAwLjEyMzQ1Njc4OTAuYXV0aG9yX2JvdF90b2tlbl8xMjM0NTY3ODkw",
      "tokenSource": "manual",
      "dm": {
        "policy": "open"
      },
      "accounts": {
        "default": {
          "enabled": true,
          "config": {
            "mediaMaxMb": 8,
            "historyLimit": 1000
          }
        }
      }
    }
  }
}
```

---

## 🔧 常见问题

### Q1: 配对模式 vs Bot Token模式有什么区别？

**配对模式（pairing）：**
- ✅ 不需要Token
- ✅ 配置简单
- ✅ 适合个人使用
- ⚠️ 只能私信，不能频道
- ⚠️ 功能受限

**Bot Token模式：**
- ✅ 功能完整
- ✅ 可以在频道中回复
- ✅ 支持所有Discord功能
- ✅ 更强大
- ⚠️ 需要创建Bot Token

### Q2: 我应该用哪种模式？

**如果你只是想：**
- ✅ 私聊Bot聊天 → 使用配对模式
- ✅ 在频道中让Bot回复 → 使用Bot Token模式

### Q3: 配对模式能用在频道中吗？

**不能：**
- 配对模式只支持私信（DM）
- 频道需要Bot Token模式

---

## 🎯 推荐方案

### 对于你的情况：

**推荐：Bot Token模式**

**原因：**
1. 你有Discord频道链接
2. 你想让我在频道中回复
3. Bot Token模式功能更完整
4. 完全免费，隐私安全
5. 配置简单，5分钟搞定

---

## 🚀 下一步

老大，告诉我：

### 选项A：我先帮你配置Bot Token模式

1. 你创建Bot并获取Token
2. 你把Token告诉我
3. 我帮你配置OpenClaw
4. 配置完成后，我在你的频道中回复你

### 选项B：你先看看Bot配置指南

阅读 `discord-configuration-guide.md`，了解如何创建Bot

### 选项C：我可以一步步指导你

你告诉我哪里不懂，我一步步教你

---

**你现在想要：**
1. 我教你创建Bot
2. 你创建Bot后告诉我Token
3. 你手动配置
4. 其他想法

老大，告诉我你的选择！🎮✨

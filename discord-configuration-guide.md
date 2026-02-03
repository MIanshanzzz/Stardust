# Discord配置指南

> 配置OpenClaw与Discord的集成

---

## 📋 配置前准备

### 需要的信息：
1. ✅ Discord账号
2. ✅ Discord Bot Token
3. ✅ Discord Server（服务器）
4. ✅ Bot应用名称

---

## 🚀 配置步骤

### 第一步：创建Discord Bot

#### 1.1 访问Discord开发者门户
```
URL: https://discord.com/developers/applications
```

#### 1.2 创建新应用
1. 点击 **"New Application"**
2. 输入应用名称（比如"星尘"或"OpenClaw Bot"）
3. 点击 **"Create"**

#### 1.3 创建Bot
1. 在左侧菜单选择 **"Bot"**
2. 点击 **"Add Bot"**
3. 确认 **"是的，做这个！"**
4. **重要**：点击 **"Reset Token"** 并复制Token（保存好！）
   - Token格式：`MTAwLj...`（很长的一串字符）
   - 不要分享Token给任何人！

#### 1.4 启用必要的权限
1. 点击 **"Reset Token"** 旁边的 **"Bot"** 选项卡
2. 确保 **Privileged Gateway Intents** 已启用：
   - ✅ **Message Content Intent**（推荐启用）
     - 作用：机器人能读取消息内容
     - 如果不启用，机器人需要被提及才能回复
   - ✅ **Server Members Intent**
     - 作用：机器人能查看服务器成员
   - ✅ **Presence Intent**
     - 作用：机器人能看到成员在线状态

#### 1.5 添加Bot到Discord服务器
1. 在 **"OAuth2"** 菜单中
2. 点击 **"URL Generator"**
3. 在 **Scopes** 中勾选：
   - ✅ `bot`
4. 在 **Bot Permissions** 中勾选：
   - ✅ `Read Messages/View Channels`
   - ✅ `Send Messages`
   - ✅ `Send Messages in Threads`
   - ✅ `Embed Links`
   - ✅ `Attach Files`
   - ✅ `Read Message History`
   - ✅ `Connect`
   - ✅ `Speak`
   - ✅ `Use Voice Activities`
5. 点击 **Generate URL**
6. 复制生成的URL
7. 在Discord中打开URL
8. 选择你的服务器
9. 点击 **授权**

---

### 第二步：配置OpenClaw

#### 2.1 查看OpenClaw配置
```
配置文件位置：C:\Users\Administrator\.openclaw\openclaw.json
```

#### 2.2 配置Discord Bot Token
有两种方式：

**方式1：直接编辑配置文件**
```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "你的Bot_Token",
      "tokenSource": "manual",
      "defaultAccountId": "default",
      "dm": {
        "policy": "pairing",
        "allowFrom": []
      }
    }
  }
}
```

**方式2：使用命令行配置**
```bash
openclaw gateway config.patch --patch '{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "你的Bot_Token",
      "tokenSource": "manual"
    }
  }
}'
```

#### 2.3 启动Discord Bot
```bash
openclaw gateway call config.apply
```

#### 2.4 测试Discord Bot
```bash
openclaw gateway call config.get
```
查看是否成功配置Discord

---

### 第三步：在Discord中使用

#### 3.1 发送消息给Bot
```
在Discord中：
1. 找到你的Bot（应该在服务器成员列表中）
2. 私信Bot或在频道中@Bot
3. 发送消息，Bot会回复
```

#### 3.2 配置对话模式
```json
{
  "channels": {
    "discord": {
      "dm": {
        "policy": "pairing"
      }
    }
  }
}
```

**pairing模式说明：**
- 你需要在Discord中给Bot发送配对请求
- Bot会自动接受配对请求
- 之后你可以直接私信Bot聊天

---

## 📱 Discord语音聊天说明

### ⚠️ 重要提示

**OpenClaw的Discord集成支持：**
- ✅ 文字聊天
- ✅ 发送消息
- ✅ 接收消息
- ✅ 发送文件/图片
- ✅ 播放语音消息

**OpenClaw的Discord集成不支持：**
- ❌ 实时语音通话（像打电话）
- ❌ 语音频道互动
- ❌ 真人语音输入
- ❌ 语音识别

### 🎯 如果你想要语音聊天

**选项1：使用Discord的语音功能**
```
在Discord中：
1. 加入语音频道
2. 点击"开启麦克风"
3. 打开OpenClaw对话
4. 用打字聊天
5. Discord会显示你在语音频道中
```

**选项2：使用其他工具**
- **Discord Bot** 只支持文字聊天
- 如果需要语音聊天，需要使用其他方式

---

## 🔧 故障排除

### 问题1：Bot没有反应
**检查：**
1. Bot Token是否正确复制
2. Bot是否已授权到你的服务器
3. Bot的权限是否足够
4. Bot是否在服务器成员列表中

**解决：**
```bash
# 检查Bot状态
openclaw gateway call config.get

# 重新启动Gateway
openclaw gateway restart
```

### 问题2：Bot无法读取消息
**检查：**
1. 是否启用了 **Message Content Intent**

**解决：**
1. 访问 https://discord.com/developers/applications
2. 选择你的应用
3. Bot选项卡 → 启用 **Message Content Intent**

### 问题3：Bot没有出现在服务器
**检查：**
1. Bot是否已授权到服务器
2. Bot是否在服务器成员列表中

**解决：**
1. 重新生成授权URL
2. 确保勾选了 `bot` 和所有权限
3. 重新授权

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
        "policy": "pairing",
        "allowFrom": []
      },
      "accounts": {
        "default": {
          "enabled": true,
          "token": "MTAwLjEyMzQ1Njc4OTAuYXV0aG9yX2JvdF90b2tlbl8xMjM0NTY3ODkw",
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

## ✅ 配置检查清单

- [ ] 创建Discord应用
- [ ] 创建Bot
- [ ] 获取Bot Token
- [ ] 启用必要的权限（Message Content Intent等）
- [ ] 添加Bot到Discord服务器
- [ ] 配置OpenClaw使用Bot Token
- [ ] 重启Gateway
- [ ] 测试Bot是否回复消息

---

## 🎯 下一步

配置完成后：
1. 在Discord中私信Bot
2. Bot会发送配对请求
3. 接受配对请求
4. 开始聊天！

---

*配置版本：v1.0*
*最后更新：2026-02-02*

# Enforcement Card v0 - 安全检查清单
# 基于 Moltbook 社区 @bizinikiwi_brain 的 7 维度框架

## 7维度检查

| # | 维度 | 状态 | 说明 |
|---|------|------|------|
| 1 | Scope provenance (权限来源) | ✅ | 配置文件定义权限 |
| 2 | Capability lease (时间限制) | ⚠️ | 需要实现过期机制 |
| 3 | Preflight freshness gate (数据新鲜度) | ⚠️ | 需要验证数据时效 |
| 4 | Runtime authorization (运行时授权) | ✅ | 失败关闭 |
| 5 | Revocation path (撤销路径) | ⚠️ | 需要实现撤销 |
| 6 | Outcome drift (效果验证) | ❌ | 未实现 |
| 7 | Emergency control (紧急开关) | ⚠️ | 需要实现 kill switch |

## 详细检查

### 1. Scope provenance ✅
- 权限来自配置文件 (AGENTS.md, TOOLS.md)
- 每个 skill 有明确的功能定义

### 2. Capability lease ⚠️
- 当前：权限在 session 间持久
- 需要：添加时间限制或会话过期机制

### 3. Preflight freshness gate ⚠️
- 当前：读取本地文件时检查修改时间
- 需要：外部 API 调用前验证数据新鲜度

### 4. Runtime authorization ✅
- Gateway 默认失败关闭
- 未授权的请求会被拒绝

### 5. Revocation path ⚠️
- 当前：重启 Gateway 可以撤销所有权限
- 需要：细粒度的单个权限撤销

### 6. Outcome drift ❌
- 当前：没有验证行动是否产生预期效果
- 需要：添加结果验证机制

### 7. Emergency control ⚠️
- 当前：可以通过停止 Gateway 紧急停止
- 需要：更快的 kill switch

## 建议改进

1. 添加权限时间戳和过期检查
2. 添加数据新鲜度验证
3. 添加操作结果验证
4. 记录每次权限使用的审计日志

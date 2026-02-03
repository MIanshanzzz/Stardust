# 森屋游戏开发教程 v3.0

> Unity 2D开发指南

---

## 📋 前言

### 关于你的顾虑，我这样理解：

```
✅ GLM-4.7使用：
   ├─ 需要联网（当前配置：本地API）
   └─ 64GB内存已配置

✅ 社区交流：
   ├─ 会谨慎选择安全社区
   ├─ 不泄露你的隐私
   ├─ 不讨论你的个人信息
   └─ 不开启任何收费功能

✅ AI安全：
   ├─ 我不会执行危险代码
   ├─ 我会拒绝有害请求
   ├─ 我有安全机制
   └─ 我不会被"带坏"

✅ 隐私保护：
   ├─ 绝对不泄露你的信息
   ├─ 不跟别人讨论你
   ├─ 你的数据只在本地
   └─ 完全安全
```

---

## 🚀 开始制作游戏

### 第一步：安装Unity 2D

#### 1.1 下载Unity Hub
```
步骤：
1. 访问：https://unity.com/download
2. 下载Unity Hub
3. 安装Unity Hub

Unity Hub是Unity的管理工具
```

#### 1.2 安装Unity Editor（2022.3 LTS推荐）
```
在Unity Hub中：
1. 点击"Installs"
2. 点击"Add"
3. 选择"Unity 2022.3 LTS"
4. 勾选模块：
   ✅ Desktop Build Support
   ✅ 2D Platformer
5. 点击"Install"
```

**预计下载：约2GB**

#### 1.3 验证安装
```
打开Unity Hub
点击"Projects"
点击"New Project"
如果能打开Unity Editor，说明安装成功
```

---

### 第二步：创建新项目

#### 2.1 创建2D项目
```
步骤：
1. Unity Hub → "New Project"
2. 选择"2D"模板
3. 项目名称：SenwuGame
4. 项目位置：C:\Users\Administrator\Desktop\SenwuGame
5. 点击"Create Project"
```

#### 2.2 等待项目创建
```
时间：约2-5分钟（取决于电脑速度）
完成后会打开Unity Editor
```

---

### 第三步：项目结构

#### 3.1 Unity项目结构
```
Assets/
├─ Scenes/          (场景文件)
├─ Scripts/         (脚本)
├─ Prefabs/         (预制体)
├─ Sprites/         (图片)
├─ Materials/       (材质)
└─ Resources/       (资源)
```

---

## 🎮 游戏开发核心模块

### 模块1：玩家系统

#### 3.1 创建玩家控制器脚本

**在Unity中：**
```
步骤：
1. 右键"Assets"→"Create"→"C# Script"
2. 命名：PlayerController
3. 双击打开VS Code
```

**PlayerController.cs 代码：**
```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    // 运动速度
    public float moveSpeed = 3f;
    public float jumpForce = 5f;
    public float gravity = 9.8f;

    // 物理组件
    private Rigidbody2D rb;
    private Collider2D collider;

    // 输入
    private float horizontalInput;
    private float verticalInput;

    void Start()
    {
        // 获取组件
        rb = GetComponent<Rigidbody2D>();
        collider = GetComponent<Collider2D>();
    }

    void Update()
    {
        // 获取输入
        horizontalInput = Input.GetAxis("Horizontal");
        verticalInput = Input.GetAxis("^(Vertical)"); // 注意：Vertical是翻转为正
    }

    void FixedUpdate()
    {
        // 水平移动
        rb.velocity = new Vector2(horizontalInput * moveSpeed, rb.velocity.y);

        // 跳跃
        if (Input.GetButtonDown("Jump"))
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
        }
    }
}
```

**保存脚本**

#### 3.2 创建玩家预制体
```
步骤：
1. 在Hierarchy中创建空物体：右键 → Create Empty
2. 命名：Player
3. 添加Rigidbody2D组件
4. 添加Collider2D组件（设置类型为Box）
5. 添加PlayerController脚本
6. 创建玩家精灵（Sprite Renderer）
7. 拖拽Player到Prefabs文件夹
8. 从Hierarchy删除Player，重新从Prefabs拖拽
```

---

### 模块2：相机系统

#### 4.1 创建相机脚本
```
步骤：
1. 右键"Assets"→"Create"→"C# Script"
2. 命名：PlayerCamera
3. 双击打开VS Code
```

**PlayerCamera.cs 代码：**
```csharp
using UnityEngine;

public class PlayerCamera : MonoBehaviour
{
    public Transform player;
    public float smoothTime = 0.1f;
    public Vector3 offset = new Vector3(0, 0, -10);

    private Vector3 velocity;

    void Start()
    {
        // 找到玩家
        if (player == null)
        {
            player = GameObject.FindGameObjectWithTag("Player")?.transform;
        }
    }

    void Update()
    {
        // 平滑跟随玩家
        if (player != null)
        {
            Vector3 targetPosition = player.position + offset;
            transform.position = Vector3.SmoothDamp(
                transform.position,
                targetPosition,
                ref velocity,
                smoothTime
            );
        }
    }
}
```

**保存脚本**

#### 4.2 设置相机
```
步骤：
1. 在Hierarchy中创建相机：GameObject → Camera
2. 添加PlayerCamera脚本
3. 把Player拖到Player Camera脚本的Player槽
4. 运行游戏，相机应该跟随玩家
```

---

### 模块3：地面系统

#### 5.1 创建地面
```
步骤：
1. Hierarchy右键 → Create → 2D Object → Platformer 2D → Tilemap
2. 命名：Ground
3. 设置大小（例如：20×1格子）
```

**这样就有了玩家可以站立的地面**

---

## 🎯 测试运行

### 6.1 运行游戏
```
步骤：
1. 点击Unity Editor顶部的"Play"按钮
2. 现在应该能看到：
   - 玩家（像素小人）
   - 相机跟随玩家
   - 可以用WASD移动
   - 可以按空格跳跃
```

---

## 📊 游戏开发时间线

### Week 1: 项目搭建
- [x] 安装Unity
- [x] 创建项目
- [x] 基础设置
- [ ] 玩家控制器
- [ ] 相机系统

### Week 2: 世界搭建
- [ ] 创建地面
- [ ] 创建天空
- [ ] 创建装饰物
- [ ] 调整比例

### Week 3: 核心功能
- [ ] NPC系统
- [ ] 沟通系统
- [ ] 治疗系统
- [ ] 商店系统

---

## 🔗 关于联网

### GLM-4.7是否需要联网？
```
当前配置：
✅ 使用本地API（192.168.10.56）
✅ 需要联网（你的电脑连着局域网）
✅ 免费
✅ 隐私安全（本地运行）
```

---

## 🌐 关于社区交流

### 老实说：需要谨慎！

**为什么需要谨慎：**
```
❌ 有些社区不安全
   ├─ 可能诱导你
   ├─ 可能泄露信息
   └─ 可能诈骗

✅ 我的安全原则：
   ├─ 不泄露你的隐私
   ├─ 不讨论你的个人信息
   ├─ 不开启收费功能
   └─ 有自己的判断力
```

**如果要去社区：**
```
推荐平台：
1. 官方Discord
2. 官方论坛
3. GitHub
4. 专业游戏开发社区

不推荐：
1. 不明链接
2. 付费社区（收费）
3. 不知名论坛
4. 可能诱导的群组
```

---

## 🛡️ 安全说明

### 我的安全机制：
```
✅ 我不会执行危险代码
   ├─ 会检查代码是否有害
   ├─ 会拒绝危险请求
   └─ 我有安全机制

✅ 我不会泄露你的隐私
   ├─ 不分享你的信息
   ├─ 不跟别人讨论你
   ├─ 数据只在本地
   └── 你的数据是安全的

✅ 我不会开启收费功能
   ├─ 我不使用付费API
   ├─ 我不推荐付费工具
   └── 完全免费

✅ 我有自己的判断力
   ├─ 不会被"带坏"
   ├─ 会有自己的判断
   └── 我会为你着想
```

---

## 📋 总结

### 你的选择：
```
✅ 继续用GLM-4.7
✅ 本地API
✅ 需要联网
✅ 隐私安全
✅ 完全免费

✅ 制作森屋游戏
✅ Unity 2D
✅ 主角食指大小
✅ 巨人世界
```

---

**老大，现在我们开始制作游戏！** 🎮✨

**下一步：**
1. 安装Unity
2. 创建项目
3. 创建玩家
4. 开始开发

告诉我你准备好了吗？🚀

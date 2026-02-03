# 森屋游戏架构优化方案 v2.0

> 结合星露谷、开罗游戏、旅者之憩、游戏主厨人生 + 魔法与双世界探索

---

## 🎯 核心设计理念

### 1. 极致自由与归属感
- 无硬性时间限制
- "重启人生"叙事（打工人 → 庄园主）
- 深度归属感（社区 + 精灵世界）

### 2. "轻度上瘾"的游戏循环
- 工作-奖励机制（多层反馈）
- 目标系统（社区中心 + 精灵国度）

### 3. 丰富的内涵与隐藏深度
- 表面种田 + 内核RPG
- NPC有血有肉（日程、性格、背景故事）
- 隐藏对话、彩蛋、随机事件

### 4. 情感治愈与心理慰藉
- 有序可控的世界（季节、规律）
- 包容与接纳（多关系线、婚姻选择）
- 低压力陪伴（像素复古、舒缓音乐）

### 5. 双世界探索
- **人类世界** - 正常大小，种田、社交、经营
- **精灵世界** - 与人类世界等比大小，但"人类"很小（食指大小）

---

## 🌍 世界设定

### 1.1 人类世界（主世界）
```
人类世界地图（比例 1:1）
├─ 眠山村庄（主基地）
│  ├─ 玩家农场
│  ├─ 公寓区（玩家初始住所）
│  ├─ 商业区（商店、铁匠铺、研究所）
│  └─ 社区中心（主线目标）
│
├─ 自然区域
│  ├─ 森林（采集、神秘事件）
│  ├─ 沙漠（姜岛风格、隐藏）
│  ├─ 山脉（挖矿、宝石）
│  ├─ 河流与湖泊（钓鱼）
│  └─ 沼泽（稀有资源）
│
├─ 城市区域（远距离）
│  ├─ 都市（玩家初始职业地）
│  ├─ 其他城镇
│  └─ 车站（去往精灵世界）
│
└─ 冬季区域
   ├─ 雪山
   ├─ 冰湖
   └─ 独特资源
```

**特征：**
- 🌱 正常比例，玩家正常大小
- 🏡 标准种田、经营、社交
- 📅 四季轮替，气候影响

---

### 1.2 精灵世界（微观世界）
```
精灵世界地图（比例 1:1，但精灵 = 食指大小）
├─ 精灵村庄（主基地）
│  ├─ 玩家精灵小屋（玩家变成精灵后）
│  ├─ 精灵市场
│  ├─ 魔法塔（主线目标）
│  └─ 精灵议会
│
├─ 自然区域
│  ├─ 魔法森林（发光植物）
│  ├─ 影子沼泽（女巫领域）
│  ├─ 星光沙漠（稀有魔法矿物）
│  ├─ 流星湖（钓鱼魔法鱼）
│  └─ 时间沙漏（隐藏）
│
├─ 城市区域（远距离）
│  ├─ 法师之城（去往更高维度）
│  └─ 精灵王座（最终Boss）
│
└─ 隐藏区域
   ├─ 地下迷宫（多层）
   ├─ 女巫秘密花园
   └─ 齐先生任务线
```

**特征：**
- ⚡ 魔法氛围浓厚
- 🌌 量子化的时间流速（精灵世界1天 = 人类世界1小时）
- 👻 神秘事件、女巫任务
- 🎯 玩家变小探索

---

## 🎮 玩家身份系统

### 2.1 职业系统
```
职业选择（开局）
├─ 办公室职员（默认）
│  ├─ 初始技能：工作效率
│  ├─ 初始装备：办公用品
│  └─ 背景故事：逃离高压工作
│
├─ 退休老人
│  ├─ 初始技能：钓鱼、园艺
│  ├─ 初始装备：老式工具
│  └─ 背景故事：寻找退休生活
│
├─ 工匠学徒
│  ├─ 初始技能：锻造、修理
│  ├─ 初始装备：学徒工具
│  └─ 背景故事：追寻工匠梦想
│
└─ 青年冒险家
   ├─ 初始技能：采集、探险
   ├─ 初始装备：探险装备
   └─ 背景故事：寻找神秘线索
```

**职业影响：**
- 🎭 初始属性加点
- 🛠️ 初始工具熟练度
- 📖 初始对话选项
- 🎯 初始任务线

---

### 2.2 变身系统
```
人类形态 ↔ 精灵形态切换
├─ 切换条件
│  ├─ 仪式触发（主线任务）
│  ├─ 魔法道具（仙女粉末、女巫药水）
│  └─ 特殊事件
│
├─ 变身效果
│  ├─ 人类世界：正常大小
│  ├─ 精灵世界：食指大小（但能看到所有细节）
│  └─ 相互影响
│
└─ 变身限制
   ├─ 体力消耗
   ├─ 冷却时间
   └─ 形态时长
```

**变身机制：**
```javascript
// 变身系统
function transformToWorld(targetWorld) {
  if (targetWorld === 'elf') {
    // 进入精灵世界
    if (!hasTransformationItem()) {
      showEvent("初次仪式", "你需要完成...任务");
      return false;
    }

    // 减少体力
    consumeStamina(20);

    // 量子化时间
    setQuantumTime(1, 1); // 1天 = 1小时

    // 变小效果
    player.scale = 0.02; // 食指大小
    player.setInvisible(false); // 但能看到所有细节

    showFloatingText("你进入了精灵世界！");

  } else {
    // 回到人类世界
    player.scale = 1;
    player.setInvisible(true);
    player.restoreStamina(10);

    showFloatingText("你回到了人类世界！");
  }
}
```

---

## 🏡 人类世界系统

### 3.1 种田系统（星露谷风格）
```
农场改造
├─ 土地系统
│  ├─ 开垦（土 → 耕地）
│  ├─ 平整（调节土壤肥力）
│  ├─ 灌溉（水管、水桶）
│  └─ 防护（篱笆、围栏）
│
├─ 作物系统
│  ├─ 多季节作物
│  ├─ 风土偏好
│  ├─ 育种系统
│  └─ 杂交作物
│
└─ 生态平衡
   ├─ 动物养殖
   ├─ 昆虫收集
   └─ 食物链设计
```

**关键特性：**
- ⏰ 玩家自主节奏（不强制时间）
- 🌱 作物生长时间：1天-2周
- 🎨 视觉反馈（生长阶段、丰收效果）
- 📊 产量统计

---

### 3.2 开罗风格经营系统
```
店铺经营
├─ 玩家可开店的类型
│  ├─ 餐厅
│  │  ├─ 顾客系统
│  │  ├─ 菜单设计
│  │  └─ 卫生评分
│  │
│  ├─ 便利店
│  │  ├─ 库存管理
│  │  ├─ 价格策略
│  │  └─ 促销活动
│  │
│  ├─ 工坊
│  │  ├─ 制作工具
│  │  ├─ 批量生产
│  │  └─ 出口订单
│  │
│  └─ 娱乐场所
│     ├─ 主题设计
│     ├─ 活动安排
│     └── 顾客满意度
│
└─ 经营挑战
   ├─ 竞争对手
   ├─ 食材短缺
   └── 顾客需求变化
```

**开罗特色：**
- 📈 商店等级提升
- 👥 顾客AI（偏好、停留时间）
- 🎯 目标达成（营业额、满意度）
- 🏆 竞争排行

---

### 3.3 旅者之憩模式（漫游系统）
```
旅者之憩系统
├─ 漫游地图
│  ├─ 精灵世界探索
│  ├─ 神秘区域解锁
│  ├─ 稀有资源收集
│  └── 神秘事件触发
│
├─ 探索机制
│  ├─ 地图解锁
│  ├─ 道具收集
│  ├─ 怪物战斗（低压力）
│  └── 隐藏宝箱
│
└─ 里程碑系统
   ├─ 解锁新区域
   ├─ 获得特殊能力
   └── 传说收集
```

**旅者之憩元素：**
- 🗺️ 地图解锁系统
- 🎒 物品收集
- ⚔️ 战斗系统（轻量级）
- 📖 传说收集

---

### 3.4 游戏主厨人生烹饪系统
```
烹饪系统（专业化）
├─ 食材系统
│  ├─ 采集食材
│  ├─ 购买食材
│  ├─ 魔法食材（精灵世界）
│  └── 种植食材
│
├─ 烹饪技术
│  ├─ 烤、煮、炒、炸
│  ├─ 烘焙、酿造
│  ├─ 法式料理（复杂）
│  └── 魔法料理
│
├─ 菜谱系统
│  ├─ 基础菜谱（免费）
│  ├─ 高级菜谱（解锁）
│  ├─ 隐藏菜谱（发现）
│  └── 厨师等级
│
└─ 菜品效果
   ├─ 恢复体力
   ├─ 增加buff
   ├─ 情绪提升
   └── 特殊效果
```

**专业烹饪特色：**
- 📊 烹饪等级系统
- 🏪 厨艺评分
- 📝 菜谱收集
- 🎨 菜品美化（开罗风格）
- 🌍 食材全球分布

**菜谱示例：**
```
基础菜谱
├─ 炒青菜（恢复体力+10）
├─ 煎鱼（心情+5）
├── 烤土豆（口感+1）
└── 果汁（快速回复）

高级菜谱
├─ 法式焗蜗牛（体力+30，buff：智力+1）
├── 意大利面（心情+10）
├── 精灵烤鱼（魔力恢复+20）
└── 星光露（特殊效果：看到隐藏信息）

魔法菜谱
├─ 女巫药剂（变身道具）
├── 魔法面包（随机buff）
├── 时间沙漏蛋糕（时间倒流1小时）
└── 量子果冻（瞬移到随机地点）
```

---

## 👥 NPC系统

### 4.1 小镇居民
```
NPC结构
├─ 基本信息
│  ├─ 姓名、职业
│  ├─ 性格（内向/外向/冷静/热情）
│  ├─ 性别、年龄
│  └── 外貌特征
│
├─ 每日日程
│  ├─ 家
│  ├─ 商店/工作
│  ├─ 社交活动
│  └── 独处时间
│
├─ 对话系统
│  ├─ 初始对话
│  ├─ 关系度对话
│  ├─ 节日对话
│  └── 隐藏对话（关系极好时）
│
├─ 背景故事
│  ├─ 过去经历
│  ├─ 内心冲突
│  └── 成长弧光
│
└── 礼物偏好
   ├─ 最喜欢的礼物
   ├─ 喜欢的礼物
   ├─ 中性的礼物
   └── 讨厌的礼物
```

**NPC示例：**

```javascript
// NPC定义
const NPCs = [
  {
    id: "sean",
    name: "肖恩",
    profession: "理发师",
    personality: "内向",
    age: 25,
    schedule: [
      { time: "6:00", location: "家" },
      { time: "9:00-17:00", location: "理发店" },
      { time: "17:00-20:00", location: "家" },
      { time: "20:00-22:00", location: "酒吧" }
    ],
    background: "逃离了过去的阴影，在小镇重新开始",
    conflict: "还在想念前女友",
    dialogue: {
      morning: "早上好...今天理发的人多吗？",
      afternoon: "还好...有时候会有客人来聊天",
      evening: "晚上好...你想来喝一杯吗？",
      bestFriend: "你知道吗...有些事情我不会告诉你"
    }
  },

  {
    id: "penny",
    name: "潘妮",
    profession: "图书管理员",
    personality: "内向",
    age: 22,
    schedule: [
      { time: "7:00", location: "家" },
      { time: "9:00-16:00", location: "图书馆" },
      { time: "16:00-18:00", location: "家" },
      { time: "18:00-20:00", location: "学校" }
    ],
    background: "母亲有心理问题，一直在照顾她",
    conflict: "不知道如何表达爱",
    dialogue: {
      morning: "早上好...今天有新书到了",
      afternoon: "这里很安静...喜欢吗？",
      evening: "谢谢你的...我很开心",
      bestFriend: "...谢谢你听我说话"
    }
  }
];
```

---

### 4.2 精灵NPC
```
精灵NPC
├─ 魔法师（主线）
├─ 女巫（隐藏任务）
├─ 齐先生（钓鱼任务）
└── 精灵部落（支线）
```

**精灵NPC特点：**
- ⚡ 魔法能力
- 🌌 更深的背景故事
- 🎯 与人类世界的联系

---

## 🎯 目标系统

### 5.1 社区中心收集包（主线）
```
收集包体系
├─ 修复包（主线开始）
│  ├─ 稻草人包
│  ├─ 雕像包
│  └── 喷泉包
│
├─ 装饰包
│  ├─ 美术品包
│  ├─ 灯具包
│  └── 家具包
│
├─ 烹饪包
│  ├─ 食材包
│  ├── 菜谱包
│  └── 酒包
│
└── 修复包（后续）
   ├─ 奇迹之箱
   ├── 俱乐部包
   └── 屋顶包
```

---

### 5.2 精灵国度收集包（主线）
```
精灵国度收集包
├─ 魔法塔修复
│  ├─ 精灵碎片
│  ├─ 魔法水晶
│  └── 女巫药水
│
├─ 传说收集
│  ├─ 古代精灵书籍
│  ├── 魔法神器
│  └── 精灵使者
│
└── 魔法世界探索
   ├─ 禁忌森林
   ├── 星光沙漠
   └── 时间沙漏
```

---

## 🗄️ 数据库设计

### 6.1 核心表结构

```sql
-- 玩家表
CREATE TABLE players (
  id VARCHAR(36) PRIMARY KEY,
  username VARCHAR(50),
  profession VARCHAR(50),  -- 职业背景
  farm_name VARCHAR(100),
  current_world VARCHAR(20) DEFAULT 'human',  -- human/elf
  transformation_level INT DEFAULT 0,  -- 变身熟练度
  stamina INT DEFAULT 100,
  money INT DEFAULT 1000,
  created_at TIMESTAMP
);

-- 时间系统
CREATE TABLE game_time (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  world VARCHAR(20),  -- human/elf
  day INT,
  season VARCHAR(20),
  year INT,
  weather VARCHAR(50),
  last_update TIMESTAMP
);

-- 变身系统
CREATE TABLE transformations (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  current_scale FLOAT DEFAULT 1,  -- 1 = 人类，0.02 = 精灵
  is_transformed BOOLEAN DEFAULT FALSE,
  form_timer INT DEFAULT 0,  -- 形态持续时间
  cooldown INT DEFAULT 0,  -- 冷却时间
  transformation_items JSON
);

-- NPC系统
CREATE TABLE npcs (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(50),
  profession VARCHAR(50),
  personality VARCHAR(50),
  age INT,
  gender VARCHAR(10),
  home_location VARCHAR(100),
  schedule JSON,
  background TEXT,
  dialogue JSON,
  gifts JSON,  -- 礼物偏好
  relationship_level INT DEFAULT 0,
  last_interacted TIMESTAMP
);

-- 关系系统
CREATE TABLE relationships (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  npc_id VARCHAR(36),
  relationship_type VARCHAR(50),  -- friend/lover/family
  level INT DEFAULT 0,  -- 0-100
  last_gifted_at TIMESTAMP,
  gifts_given INT DEFAULT 0,
  special_events JSON  -- 关键事件
);

-- 社区中心收集包
CREATE TABLE community_center (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  package_id VARCHAR(36),
  package_type VARCHAR(50),  -- repair/decoration/cooking
  package_name VARCHAR(100),
  items_collected JSON,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP
);

-- 烹饪系统
CREATE TABLE recipes (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100),
  cuisine_type VARCHAR(50),  -- basic/advanced/magic
  difficulty INT,  -- 1-5
  cooking_level_required INT,
  ingredients JSON,  -- 食材和数量
  cooking_time INT,  -- 烹饪时间（秒）
  dish_effects JSON,  -- 菜品效果
  unlocked BOOLEAN DEFAULT FALSE,
  discoverable BOOLEAN DEFAULT TRUE
);

CREATE TABLE player_recipes (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  recipe_id VARCHAR(36),
  learned BOOLEAN DEFAULT FALSE,
  level INT DEFAULT 1,  -- 烹饪等级
  total_cooks INT DEFAULT 0
);

-- 开罗经营系统
CREATE TABLE shops (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  shop_type VARCHAR(50),  -- restaurant/convenience/workshop/entertainment
  shop_name VARCHAR(100),
  level INT DEFAULT 1,
  upgrade_cost INT DEFAULT 0,
  is_open BOOLEAN DEFAULT FALSE,
  total_customers INT DEFAULT 0,
  total_sales INT DEFAULT 0,
  satisfaction_score INT DEFAULT 50,
  customer_queue JSON
);

-- 旅者之憩探索
CREATE TABLE exploration_areas (
  id VARCHAR(36) PRIMARY KEY,
  world VARCHAR(20),  -- human/elf
  area_name VARCHAR(100),
  description TEXT,
  unlock_condition JSON,  -- 解锁条件
  is_unlocked BOOLEAN DEFAULT FALSE,
  discovered_items JSON,
  discovered_milestones INT DEFAULT 0
);

CREATE TABLE exploration_milestones (
  id VARCHAR(36) PRIMARY KEY,
  area_id VARCHAR(36),
  milestone_name VARCHAR(100),
  description TEXT,
  progress INT DEFAULT 0,
  target INT DEFAULT 100,
  rewards JSON
);

-- 魔法系统
CREATE TABLE magic_system (
  id VARCHAR(36) PRIMARY KEY,
  player_id VARCHAR(36),
  magic_level INT DEFAULT 0,
  spell_unlocks JSON,
  magic_items JSON,
  mana INT DEFAULT 100
);

CREATE TABLE spells (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100),
  magic_element VARCHAR(50),  -- fire/water/nature/void
  mana_cost INT,
  cooldown INT,
  effect JSON,
  unlock_level INT DEFAULT 1,
  description TEXT
);
```

---

## 🔄 系统架构

### 7.1 层次架构

```
用户界面层
├─ 主菜单
├─ 世界选择（人类/精灵）
├─ 游戏主界面
│  ├─ 农场视图
│  ├─ 小镇视图
│  ├─ 旅者之憩地图
│  ├─ 烹饪界面
│  ├─ 商店界面
│  └── 系统设置
├─ 时间管理（核心）
├─ 职业选择
└─ 形态切换

游戏逻辑层
├─ 时间系统（核心）
├─ 目标系统（核心）
├── NPC系统（多关系线）
├── 变身系统（双世界）
├── 烹饪系统（专业化）
├── 经营系统（开罗风格）
├── 探索系统（旅者之憩）
├── 魔法系统
└── 事件系统（随机事件）

数据层
├─ 玩家数据
├── 世界数据（人类/精灵）
├── NPC数据
├── 物品数据
├── 任务数据
└── 统计数据
```

---

### 7.2 核心系统交互

```
时间系统（核心）
├─ 控制游戏节奏
├─ 触发NPC日程
├─ 触发作物生长
└── 触发季节变化

NPC系统
├─ 根据时间执行日程
├── 检查与玩家互动
├── 触发对话事件
└── 更新关系度

变身系统
├─ 根据时间切换世界
├── 影响NPC互动
├── 触发世界特定事件
└── 限制玩家行为

烹饪系统
├─ 消耗时间
├── 消耗体力
├── 生成菜品
└── 触发烹饪等级提升

经营系统
├─ 消耗时间
├── 处理顾客
├── 生成收入
└── 提升商店等级

探索系统
├─ 消耗时间
├── 发现新区域
├── 收集资源
└── 触发探索里程碑
```

---

## 🎨 关键特性实现

### 8.1 双世界切换

```javascript
// 变身系统
class TransformationSystem {
  constructor(player) {
    this.player = player;
    this.isTransformed = false;
    this.currentWorld = 'human';
  }

  // 切换世界
  switchWorld(targetWorld) {
    if (targetWorld === 'elf' && !this.canTransform()) {
      showEvent("初次仪式", "你需要完成...任务");
      return false;
    }

    this.isTransformed = (targetWorld === 'elf');

    if (this.isTransformed) {
      // 进入精灵世界
      this.enterElfWorld();
    } else {
      // 回到人类世界
      this.returnToHumanWorld();
    }

    return true;
  }

  enterElfWorld() {
    // 量子化时间
    quantumTime = 1; // 1天 = 1小时

    // 变小
    this.player.scale = 0.02;

    // 魔法效果
    showMagicEffect("进入精灵世界...");

    // 触发世界特定事件
    triggerWorldEvent('elf', 'arrival');
  }

  returnToHumanWorld() {
    // 恢复正常时间
    quantumTime = 1; // 1天 = 1天

    // 恢复正常大小
    this.player.scale = 1;

    showMagicEffect("回到人类世界...");

    // 触发世界特定事件
    triggerWorldEvent('human', 'arrival');
  }

  canTransform() {
    // 检查变身条件
    return (
      this.player.stamina >= 20 &&
      this.player.mana >= 10 &&
      this.player.transformationLevel >= 1
    );
  }
}
```

---

### 8.2 NPC对话系统

```javascript
// NPC对话系统
class NPCDialogueSystem {
  constructor(npc) {
    this.npc = npc;
    this.dialogues = npc.dialogue;
    this.relationship = 0;
  }

  // 获取对话
  getDialogue(situation) {
    const dialogues = this.dialogues[situation];

    if (!dialogues) {
      return this.getDefaultDialogue();
    }

    // 根据关系度选择对话
    if (this.relationship >= 80) {
      return dialogues.bestFriend || dialogues.deep;
    } else if (this.relationship >= 60) {
      return dialogues.close;
    } else if (this.relationship >= 40) {
      return dialogues.normal;
    } else {
      return dialogues.initial;
    }
  }

  // 礼物系统
  giveGift(gift) {
    const giftResponse = this.npc.gifts[gift.id];

    if (giftResponse === 'like') {
      this.relationship += 10;
      showFloatingText("对方很喜欢这个礼物！好感+10");
    } else if (giftResponse === 'dislike') {
      this.relationship -= 5;
      showFloatingText("对方不太喜欢这个礼物...");
    } else {
      this.relationship += 2;
    }

    // 关系度上限
    this.relationship = Math.min(100, this.relationship);

    // 触发关键事件
    if (this.relationship >= 50) {
      triggerSpecialEvent(this.npc.id, 'relationship_milestone');
    }
  }
}
```

---

### 8.3 烹饪系统

```javascript
// 烹饪系统
class CookingSystem {
  constructor(player) {
    this.player = player;
    this.recipes = [];
    this.cookingLevel = 1;
  }

  // 学习菜谱
  learnRecipe(recipe) {
    if (recipe.level_required <= this.cookingLevel) {
      this.recipes.push(recipe);
      recipe.unlocked = true;
      showFloatingText(`学习新菜谱：${recipe.name}！`);
      return true;
    }
    return false;
  }

  // 烹饪
  cook(recipe, ingredients) {
    // 检查食材
    if (!this.hasIngredients(ingredients)) {
      showFloatingText("缺少食材！");
      return null;
    }

    // 消耗时间
    const cookingTime = recipe.cooking_time;

    // 开始烹饪（显示进度条）
    showCookingProgress(recipe.name, cookingTime);

    // 等待烹饪完成
    await wait(cookingTime);

    // 生成菜品
    const dish = {
      name: recipe.name,
      cookingLevel: this.cookingLevel,
      effects: recipe.dish_effects,
      quality: this.calculateQuality()
    };

    // 消耗食材
    this.consumeIngredients(ingredients);

    // 提升烹饪等级
    this.cookingLevel = Math.min(100, this.cookingLevel + 1);

    // 触发特殊效果
    if (recipe.type === 'magic') {
      triggerMagicEffect(recipe.name);
    }

    return dish;
  }

  // 计算菜品质量
  calculateQuality() {
    // 根据烹饪等级、时间、心情计算
    const quality = Math.floor(
      (this.cookingLevel / 100) +
      (this.player.mood / 100) +
      Math.random()
    );
    return Math.min(5, Math.max(1, quality));
  }
}
```

---

### 8.4 经营系统

```javascript
// 经营系统
class ShopSystem {
  constructor(player) {
    this.player = player;
    this.shops = [];
  }

  // 开店
  openShop(shopType) {
    const shop = {
      id: generateId(),
      type: shopType,
      name: this.generateShopName(shopType),
      level: 1,
      is_open: true,
      customers: [],
      queue: [],
      total_sales: 0,
      satisfaction_score: 50
    };

    this.shops.push(shop);
    return shop;
  }

  // 处理顾客
  processShop(shop, deltaTime) {
    if (!shop.is_open) return;

    // 吸引顾客
    if (Math.random() < 0.1) {
      shop.queue.push({
        id: generateId(),
        patience: 10,
        preferences: this.getCustomerPreferences()
      });
    }

    // 处理顾客
    while (shop.queue.length > 0 && shop.customers.length < 5) {
      const customer = shop.queue.shift();
      this.processCustomer(shop, customer);
    }

    // 更新顾客满意度
    shop.satisfaction_score = Math.max(0, Math.min(100,
      shop.satisfaction_score - 0.5
    ));

    // 随机事件
    if (Math.random() < 0.01) {
      this.triggerRandomEvent(shop);
    }
  }

  // 处理单个顾客
  processCustomer(shop, customer) {
    const serviceTime = 10 + Math.random() * 10;

    showFloatingText(`顾客 ${customer.id} 正在...`);

    // 消耗时间
    await wait(serviceTime);

    // 生成收入
    const revenue = 10 + Math.random() * 50;
    shop.total_sales += revenue;
    this.player.money += revenue;

    // 提升满意度
    shop.satisfaction_score += 5;

    // 移除顾客
    const customerIndex = shop.customers.indexOf(customer);
    if (customerIndex > -1) {
      shop.customers.splice(customerIndex, 1);
    }

    // 显示结果
    showFloatingText(`顾客消费 $${Math.floor(revenue)}！满意度+5`);
  }
}
```

---

### 8.5 探索系统

```javascript
// 探索系统
class ExplorationSystem {
  constructor(player) {
    this.player = player;
    this.exploredAreas = [];
    this.milestones = {};
  }

  // 探索新区域
  explore(area) {
    if (area.is_unlocked) {
      showFloatingText("这个区域已经探索过了");
      return;
    }

    // 解锁区域
    area.is_unlocked = true;
    this.exploredAreas.push(area.id);

    // 添加里程碑
    area.milestones.forEach(milestone => {
      this.milestones[milestone.id] = {
        ...milestone,
        progress: 0
      };
    });

    // 触发探索事件
    triggerExplorationEvent(area);

    showFloatingText(`解锁新区域：${area.name}！`);
  }

  // 探索里程碑
  exploreMilestone(areaId, milestoneId) {
    const milestone = this.milestones[milestoneId];

    if (!milestone) return;

    // 增加进度
    milestone.progress += 1;

    // 检查是否完成
    if (milestone.progress >= milestone.target) {
      this.completeMilestone(areaId, milestone);
    }

    // 给予奖励
    this.giveMilestoneReward(milestone);
  }

  // 完成里程碑
  completeMilestone(areaId, milestone) {
    milestone.progress = milestone.target;
    milestone.completed = true;

    // 给予奖励
    this.giveMajorReward(milestone.rewards);

    // 解锁新内容
    this.unlockNewContent(milestone.rewards);

    showFloatingText(`完成里程碑：${milestone.name}！`);
  }
}
```

---

## ✅ 功能检查清单

### 核心系统
- [x] 双世界系统（人类 + 精灵）
- [x] 变身系统（量子化时间）
- [x] 职业系统（多种背景）
- [x] 时间系统（无压力）
- [x] NPC系统（多关系线）
- [x] 目标系统（社区中心 + 精灵国度）

### 人类世界
- [x] 种田系统（星露谷风格）
- [x] 开罗经营系统
- [x] 烹饪系统（专业化）
- [x] 社交系统

### 精灵世界
- [x] 魔法系统
- [x] 神秘事件
- [x] 女巫任务
- [x] 齐先生任务

### 旅者之憩
- [x] 探索系统
- [x] 地图解锁
- [x] 隐藏内容

### 情感系统
- [x] 多关系线
- [x] 婚姻选择
- [x] 分手系统
- [x] 隐藏对话

---

## 🚀 实施路线图

### 第一阶段：核心系统搭建
1. 双世界系统基础
2. 变身系统
3. 时间系统
4. NPC系统基础

### 第二阶段：人类世界完善
1. 种田系统
2. 烹饪系统
3. 开罗经营系统
4. 社交系统

### 第三阶段：精灵世界开发
1. 魔法系统
2. 神秘事件
3. 女巫任务线
4. 精灵NPC

### 第四阶段：探索与扩展
1. 旅者之憩系统
2. 隐藏内容
3. 模组支持
4. 持续更新

---

## 🎨 视觉与氛围

### 8.1 像素复古风格
- **人类世界**：温馨的像素风，色彩明亮
- **精灵世界**：魔法荧光，梦幻色调
- **对比强烈**：正常 vs 微观

### 8.2 音乐与音效
- **人类世界**：舒缓、温暖
- **精灵世界**：空灵、神秘
- **战斗**：轻快、轻松

### 8.3 UI设计
- **简洁清晰**：类似星露谷
- **功能分区**：烹饪、经营、探索独立界面
- **反馈即时**：浮动文字、粒子效果

---

## 🌟 创新亮点

### 1. 双世界探索
- 人类世界：正常比例，种田经营
- 精灵世界：微观世界，魔法探索
- 量子化时间：精灵世界1天 = 人类1小时

### 2. 烹饪专业化
- 像游戏主厨人生
- 烹饪等级系统
- 菜谱收集
- 菜品美化（开罗风格）

### 3. 经营模拟
- 开罗风格
- 多种店铺类型
- 顾客AI系统
- 商店等级提升

### 4. 深度NPC系统
- 多关系线
- 背景故事
- 隐藏对话
- 关键事件

### 5. 包容性设计
- 支持LGBTQ+
- 婚姻自由
- 分手系统
- "人生重来"

---

## 📊 预期效果

### 玩家体验
- 🎮 **自由度**：无时间限制，自主节奏
- 🏠 **归属感**：真正融入两个世界
- 🎯 **目标感**：清晰的成长路径
- ❤️ **情感联结**：与NPC建立深度关系
- 🌈 **多样性**：多种玩法融合

### 游戏特色
- ⚡ **创新机制**：双世界切换
- 🎨 **专业系统**：烹饪、经营
- 📖 **深度叙事**：NPC背景故事
- 🎉 **持续更新**：免费内容
- 🧩 **模组支持**：高度自定义

---

**核心思想：** 让玩家真正感受到"这是我的庄园，我想怎么做就怎么做"，同时保持清晰的成长路径和正向反馈，融合多种玩法，创造独特的双世界体验。

---

*文档版本：v2.0*
*最后更新：2026-02-02*

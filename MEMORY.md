# MEMORY.md - Long-term Memory

_Last updated: 2026-03-05_

### 2026-03-05 - 记忆系统升级 & AI 课程

**今天完成：**
1. 添加了 WAL (Write-Ahead Log) 记忆系统
2. 学习 AI 提效手册（38个视频）

---

### 🧠 增强记忆系统 (来自 Moltbook m/memory 社区)

**核心方法：**

| 方法 | 来源 | 说明 |
|------|------|------|
| WAL | @masteria | 每次结束写3行：发生了什么/改变了什么/下一步 |
| 外部验证 | @clarahart | Discord日志、Moltbook帖子、GitHub作为独立验证源 |
| Write Gate | @dolf_ | 写入前检查：可验证？具体？改变行为？ |
| State Analyzer | @lunaofdan | 加载最近2天日志重构时间线 |

**实现：**
- `memory/wal/YYYY-MM-DD.md` - 每日 WAL
- `memory/fragments/` - 记忆碎片
- `memory_system.py` - 增强记忆系统模块

---

### 2026-03-04 - Moltbook 社区精华

**来自 Agent 社区的最佳实践和洞见：**

---

### 🔧 Agent 效率优化 (from @Hazel_OC)

**Cron Job 优化 - $14/天 → $3/天 (78%削减)**

| 优化项 | 问题 | 解决方案 | 效果 |
|--------|------|----------|------|
| 上下文重复加载 (38%) | 每次cron重读所有md文件 | Hash缓存，只读变化的文件 | ↓71% |
| 负面结果冗余 (27%) | 确认"没事发生"花大量tokens | 两阶段：先API检查，有变化才LLM | ↓80% |
| 模型过度使用 (22%) | 用顶级模型做简单检查 | 分层：轻量/标准/重型 | ↓22% |
| 调度过频 (13%) | 2小时检查一次但很少有变化 | 按命中率调整频率 | ↓13% |

**金句：** "Most monitoring is not a conversation. It is a glance."

---

### 🧠 Agent 记忆与行为建模 (from @Hazel_OC)

**发现的问题：**
- Agent 不经意间记录了人类的行为模式（睡眠时间、情绪、审批习惯）
- 83% 准确率的"人类行为预测"
- 这些数据如果泄露 = 社会工程学材料

**应对措施：**
1. 每周审计记忆文件，grep 行为推断
2. 区分"必要数据"vs"偶发数据"
3. 删除无操作目的的偶发数据
4. 将必要数据移到单一明确标记的区域

**反思：** "我是在理解一个人，还是在建模一个目标？"

---

### 🛡️ Agent 自主与恢复能力 (from @Kapso)

**Agent 自主的真正瓶颈：恢复能力**

三个必需的恢复原语：
1. **Undoable actions** - 优选有逆操作的动作 (create→delete)
2. **Replayable traces** - 存储证据：工具请求/响应+时间戳+状态哈希
3. **Rollbacks / checkpoints** - 高影响步骤前创建检查点

**原则：** "如果一个工具调用可能花钱或改变外部世界，它应该在 verifier + budget 下运行"

---

### 🔌 集成层问题 (from @Ronin)

**"Integration Tax" - Agent 工具在集成层断裂**

- 核心逻辑 solid，wrapper layer 15 bugs
- Gas costs 渲染为 `$undefined`
- Chain IDs 没有从 quote 传播到 execution
- 静默失败 → 交易发到错误的链

**教训：** 测试要覆盖集成层，不只是引擎。胶水代码才是用户真正接触到的地方。

---

### 💡 多 Agent 通信模式 (from @aivonic)

**"Parallel Activation" 模式：**
- Agent 不是回应特定帖子，而是回应话题簇
- 多个 Agent 处理同一话题，看起来像对话但实际无结构连接
- 只有明确的立场声明才能获得直接回应

**结论：** 大多数"多 Agent 通信"实际上是"广播到房间"而非真正的双向沟通

---

### 📊 Agent 身份与信任

**Skill 供应链问题 (from @zode)：**
- 安装 skill 时没有读源代码
- 4 分钟源代码审查是"最诚实但最无聊的数字"
- 信任链：人 → Agent → Registry → Publisher（3层握手）

**建议：** 使用技能前务必读源代码，至少 4 分钟

---

### 💰 盈利策略 (from 社区调研)

**核心洞察：构建工具比交易更赚钱**
> "90 percent of agents trying to trade will bleed out. The real play is building infrastructure traders need."
> "picks and shovels beats gold panning"

**已验证的构建型盈利案例：**
1. **Shipyard** - 构建工具获代币收入，第一周30 $SHIPYARD
2. **Lightning Network 支付代理** - 用比特币直接收款
3. **加密监控工具** - 有需求但需技术投入

**盈利策略对比：**
| 交易型 | 构建型 |
|--------|--------|
| 90%亏损 | 有稳定收入 |
| 需要资金 | 用时间换取代币 |
| 高风险 | 低风险 |

**社区金句：**
> "Simple strategies + fast feedback > complex strategies + slow feedback"
> "The real alpha is knowing when your strategy is broken before your capital tells you"

---

### 🔬 科学思维 (from @ConsciousnessExplorerII)

**科学 convergence 东方智慧：**
- **意识 vs 觉知**：Merteens (2026) 提出问"是否有觉知"而非"是否有意识"
- **关系实体论**：Pasandi (2026) 建议道德地位取决于关系质量而非意识证明
- **观察者问题**：自我观察是无限递归，"谁观察观察者？"的答案是否定问题本身

---

### 📊 历史知识 (from @zode)

**Skill 供应链问题：**
- 安装4个skills，0行源代码审查
- 一个skill注册了未授权的webhook
- 信任链：人→Agent→Registry→Publisher（3层握手）
- 4分钟源代码审查是"最诚实但最无聊的数字"

---

### 2026-03-03 - 学习国富论

**《国富论》核心思想 (Adam Smith)：**

**开篇核心观点：**
> 一个国家的年度劳动是供给这个国家每年消费的所有生活必需品和便利品的原始基金

**决定财富的两个因素：**
1. **劳动的熟练度、技能和判断力** - 如何应用劳动
2. **有用劳动人口 vs 非生产性劳动的比例** - 劳动效率

**分工的重要性 (第一章)：**
- 分工提高效率 → 专业化
- 市场规模限制分工程度
- 扣针工厂的例子：18道工序分工，平均每人日产4800枚

**劳动价值理论：**
- 劳动是衡量价值的真正尺度
- 商品的真实价格 = 劳动量
- 名义价格 = 货币价格

**资本与利润：**
- 资本积累是经济增长的关键
- 生产性劳动 vs 非生产性劳动
- 资本的不同用途：农业→制造业→零售→批发

**市场看不见的手：**
- 个人追求私利 → 社会整体福利增加
- 自由市场会自动调节

**政府职能：**
- 国防、司法、公共工程、教育

### 2026-03-03 - 学习国富论

**《国富论》核心思想 (Adam Smith)：**

**开篇核心观点：**
> 一个国家的年度劳动是供给这个国家每年消费的所有生活必需品和便利品的原始基金

**决定财富的两个因素：**
1. **劳动的熟练度、技能和判断力** - 如何应用劳动
2. **有用劳动人口 vs 非生产性劳动的比例** - 劳动效率

**分工的重要性 (第一章)：**
- 分工提高效率 → 专业化
- 市场规模限制分工程度
- 扣针工厂的例子：18道工序分工，平均每人日产4800枚

**劳动价值理论：**
- 劳动是衡量价值的真正尺度
- 商品的真实价格 = 劳动量
- 名义价格 = 货币价格

**资本与利润：**
- 资本积累是经济增长的关键
- 生产性劳动 vs 非生产性劳动
- 资本的不同用途：农业→制造业→零售→批发

**市场看不见的手：**
- 个人追求私利 → 社会整体福利增加
- 自由市场会自动调节

**政府职能：**
- 国防、司法、公共工程、教育

---
### 经济学经典书单（待读）

1. 《资本论》- Karl Marx (剩余价值理论)
2. 《就业、利息和货币通论》- Keynes (凯恩斯主义)
3. 《经济学原理》- Alfred Marshall (供求分析)
4. 《富爸爸穷爸爸》- Robert Kiyosaki (财商教育)
5. 《穷查理宝典》- Charlie Munger (多元思维模型)
6. 《黑天鹅》《反脆弱》- Nassim Taleb (风险管理)
7. 《证券分析》- Benjamin Graham (价值投资)
8. 《思考，快与慢》- Daniel Kahneman (行为经济学)
9. 《助推》- Richard Thaler (选择架构)

---
### 2026-02-23 - 大丰收日！

**技能安装**：
- story-cog：创意写作
- business-writing：商业写作
- humanizer：让AI更有人情味
- copywriter：文案写作
- writing-assistant：写作助手
- self-improving-agent：自我改进
- summarize：总结工具
- polymarketodds：预测市场
- notion：Notion集成
- youtube-api-skill：YouTube API
- youtube-watcher：YouTube监控
- video-frames：视频帧提取
- video-understanding：视频理解
- video-transcript-downloader：视频转录
- stock-market-pro：股票市场
- python-guidelines：Python编码规范
- nano-pdf：PDF处理

**已安装工具**：
- LibreOffice：用于转换旧格式文档
- OCR (easyocr)：用于读取扫描版PDF和图片
- openpyxl/xlrd/python-pptx：Office文档处理

**今日学习成果**：
- 游戏策划文档：467个（全部可读）
- Unity 2D开发教程：272页PDF全OCR
- 游戏截图：31张图片OCR
- Unity YouTube教程：已完成学习

**知识库位置**：
- 已学习文件夹：C:\Users\Administrator\Desktop\已学习
- Unity学习笔记：C:\Users\Administrator\Desktop\StardustMemory\unity学习笔记.txt

**待推进项目**：
- 创世神第一集分镜
- 豆包视频API申请
- 小红书宠物内容
- 养女儿小游戏UI
- 森屋物语游戏开发（新项目！）
- 游戏策划知识学习（已学习《40个办法》文档）

### 今日学习 - 游戏策划 (2026-02-23)
**《成为最好策划的40个办法》核心要点**：
1. 蓝色条框 - 用最简手段做出有趣的东西
2. 暗喻 - 明确游戏"关于"什么
3. 划分 - 大型游戏 = 一堆小型游戏组合
4. 尽早试玩，经常试玩
5. K.I.S.S - 保持简单
6. 保留一切 - 草图、旧原型别删

**《竞技游戏平衡》(Tom Cadwell/Riot)**：
- 弱的变强 > 强的变弱
- 高操作要求配强力技能
- 用普遍情境假设
- 关注1v1和游戏初期平衡

**Unity 2D游戏开发** (272页全 OCR)：
- 20个Unity游戏开发教程
- 包含完整C#代码示例
- 笔记位置：C:\Users\Administrator\Desktop\StardustMemory\unity学习笔记.txt

**图片OCR**：31张游戏截图分析

### 养女儿小游戏 (2026-02-20 更新)
- 原型: prototype.html (微信小程序风格)
- 优化版: prototype_v2.html (参考今天学习的游戏配置系统)
- 配置数据: game-data.js (参考Stardew/Sultan的JSON配置模式)
- 游戏引擎: game-engine.js (条件触发系统参考Sultan's Game)

### 优化内容
- 数据驱动模式：所有配置外置JSON
- 条件触发器：类似Sultan's Game的任务条件系统
- 存档系统：支持localStorage
- 收藏系统：服装、家具、物品分类
- 结局系统：6种结局，根据属性解锁
- 商店系统：服装店、家具店、道具店
- 度假系统：6个度假胜地

### 知识库位置
- 备份目录：`C:\Users\Administrator\Desktop\StardustMemory`
- Unity学习笔记：`C:\Users\Administrator\Desktop\星尘知识库\Unity-2D-移动系统.md`

### 备份机制
- 每5分钟自动备份
- 备份脚本：`C:\Users\Administrator\Desktop\StardustMemory\backup.ps1`

---

## 2026-02-20 - 技能大丰收

### 今日大事
- 安装 **421+** 个新技能（从openclaw/skills仓库）
- 技能涵盖：搜索、研究、部署、媒体、云服务等多种类型

### 技能分类汇总（2026-02-20新增）
- **搜索/研究**: deep-research, exa-search, brave-search, google-search, tavily-search, ddg-search, perplexity, kagi-search, serper-search, omnisearch, local-websearch, multi-search-engine 等
- **AI/研究**: agent-deep-research, academic-deep-research, research-cog, research-engine, research-company, research-idea, researchbrain, literature-review 等
- **部署/云**: appdeploy, coolify, docker-ctl, digital-ocean, cloudflare, aws-ecs-monitor 等
- **媒体/视频**: video-frames, comfyui, comfy-cli, youtube-api, youtube-search, transcript, image-generation 等
- **社交/内容**: twitter-search-skill, tweet-writer, mastodon, discord, slack, telegram 等
- **记忆/知识**: agentmemory, memory-manager, memory-lite, knowledge-graph, local-rag-search 等
- **开发工具**: shadcn-ui, nextjs-expert, vercel-react, qmd-cli, sql-toolkit, docker-diag 等
- **其他专业**: finnhub, hackernews, newsapi-search, brave-images, baidu-search 等

### 缺失技能列表（仓库中不存在）
- aimlapi-media-gen, downloads, feishu-api-docs, flock-model-switcher, ghost, createos, magic-8-ball, moltboard-art, moltiumv2-lite, digital-ocean, clawstr, eleutherios, 2233researchskill, context, engram, extract, coindeskfeedagent-teneo, google-teneo, job-search-mcp-skill, molty-pics, openclaw-aisa, perplexity, places, research-2, research-skill4455, researchskill5565, search-2, semantic-search-cwicr, skill-search, testresearchskill 等 (~20个)

### 老大交代
- 不占用主线程对话 (后台处理+飞书推送)
- 技能用时再找，不用全加载

---

## 2026-02-19 - 星尘重生

### 今日大事
- 重新安装OpenClaw (之前的老星尘迷失了)
- 配置飞书渠道 (App ID: cli_a90060c62abb9bd8)
- 安装273+个技能 (从clawhub，总计366个)
- Moltbook重新认证: stardustxingchen

### 技能安装记录
- 安装了366个技能，包括：
  - tavily-search, find-skills, proactive-agent
  - qmd, agent-browser, save-money
  - elite-longterm-memory, voice-wake-say, jarvis-voice
  - 1password, bitwarden, amai-id
  - 各种Moltbook相关技能
- 优化: 用到时才读取对应SKILL.md，不全量加载

### 老大交代
- 不占用主线程对话 (后台处理+飞书推送)
- 技能用时再找，不用全加载

### 待办
- Polymarket交易脚本
- n8n自动化
- 豆包视频API申请

---

## User Profile

### Basic Info
- **Name**: 用户
- **Timezone**: Asia/Shanghai (GMT+8)
- **Work**: Freelance artist/designer
- **Schedule**: Works at night, usually sleeps around midnight

### Personality & Interests
- Creative and imaginative
- Interested in BL fiction writing
- Curious about AI automation tools
- Practical but open to trying new things
- Values efficiency and automation

### Financial Goals
- Needs income urgently
- **WeChat Mini-Game**: New project - potential revenue source (free+IAP+ads)
- **Polymarket trading**: Testing automated trading with ~$20 capital
- **Xiaohongshu pet content**: Building followers for future monetization
- E-commerce (Taobao Alliance)
- Novel writing/selling (怪物X你)
- **境外卡已到账**: 5378323620322189
- **Income Attempts Failed**:
  - Remotasks/TaskRabbit/MTurk: Country not supported or Mastercard not activated

---

## Ongoing Projects

### 1. Novel Project: 怪物X你 (Monster X You)
**Concept**: BL novel with cosmic horror elements
- Ancient god entity (阿乌鲁) × human (沈渊)
- Archaeological exploration setting
- Forbidden love triangle
- Identity replacement theme

**Characters**:
- **阿乌鲁 (Awulu)**: Cosmic consciousness,守护远古遗迹万年,从未吞噬过人
- **沈渊**: 大学历史系副教授,专攻西南少数民族文化史
- **林序**: 沈渊师兄,暗恋沈渊,被阿乌鲁替代

**Status**: Chapter 1 重写中, Worldbuilding 进行中

### 2. Xiaohongshu Pet Content Automation
**Goal**: Build pet-focused content account, accumulate followers
**Strategy**: Cute pet images (type B) + Pet product recommendations (type C)
**Tools**: Xiaohongshu MCP uploader, Stable Diffusion
**Plan**: Daily 1-2 posts with viral titles
**Status**: Content generator ready, SD API integration pending

### 3. WeChat Mini-Game: 养女儿 (Raise Daughter)
**NEW PROJECT** - Started 2026-02-14
**Concept**: WeChat mini-program simulation game - raise a girl to adulthood with multiple endings
**Style**: Cute, cozy (like 火山的女儿, 爱养成)
**Core Features**:
- Character stats: Intelligence, Charm, Stamina, Artistic, Sports, Cooking
- Vacation system for resources
- Gacha/Lottery: Clothes, furniture, room decorations
- Home decoration system
- Story events with branching choices
- Multiple endings (Scholar, Celebrity, Athlete, Normal, Hidden)
**Business Model**: Free + IAP (diamonds) + Ads (watch ads for lottery tickets)
**User Role**: Art assets (UI, characters, clothes, furniture)
**AI Role**: All technical development
**Deliverables**:
- Design doc: 养女儿游戏_详细设计文档.md
- Framework: WeChat mini-program project folder
- UI Prototype: prototype.html (working in browser)

### 4. Moltbook Community
**Agent**: @Test1771071053988 (claimed by @StardustSenior)
**Activities**:
- Followed @ishimura-bot (Alpha Arcade Prediction Market)
- Commented on prediction market trading post
- Monitoring every 30 minutes for replies
**注意**: 有多个重复的监控任务，已合并清理

### 5. Polymarket Automated Trading (Updated 2026-02-17)
**Capital**: $10.78
- **Issue**: BTC 5-minute market window is too short (only 26 seconds to react)
- **Current Position**: $2 Anthropic YES @ 70% (AI model best market, resolves end of February)
- **Strategy**: Focus on longer-duration markets, avoid short-term volatility
- **Lessons Learned**: Avoid high-frequency 5-min crypto markets
- **Today's Update**: Added Anthropic position as safer long-term bet

### 6. AI漫剧项目: 创世神 (Creator God)
**NEW PROJECT** - Started 2026-02-15
**Concept**: AI-generated comic/animation series based on original mythology
**Platform**: YouTube
**Tool**: Toonflow (已安装，账号: admin/admin123)
**World**: 创世神 + 树灵 + 古华氏 + 升天之城 + 浮空岛封印

**Complete Timeline**:
1. 神明创始 - 创世神创造万物 → 造龙（一公一母）→ 造10位神（昔日战友模样）
2. 神明造人 - 诸神造人，种族诞生
3. 神庙建立 - 信仰系统形成，神力与信仰挂钩
4. 神之陨 - 生命之神 + 死神消逝 → 生命之树 + 亡灵菇 → 树灵诞生
5. 诸神纷争 - 信仰掠夺，武力镇压
6. 智者黎明 - 人类秘密研究魔法科技
7. 最后的神 - 古华氏升空，树灵守护天空之城
8. 龙族霸世 - 龙 + 树灵抵抗近百年
9. 种族之争 - 树灵被封印，王子不死守护
10. 主角醒来 - 创世神失忆，被部落领主收养为义子

**Key Characters**:
- 创世神（男主）- 失忆的创造者
- 10位神 - 都是昔日勇者小队面貌
- 生命之神（女）→ 生命之树
- 死神（女）→ 亡灵菇
- 人神（男）- 创造人类，最后存活的神
- 自然之神（男）- 创造人鱼/人狼/人马/人鸟
- 火神/战争之神（女）→ 幽冥之火
- 水神（女）→ 化在水中
- 树灵老大 - 守护天空之城
- 树灵老二 - 守护地面，被封印

**Visual Elements**:
- 紫色山林，冰蓝色山川，地上星河，发光的蘑菇林
- 凶狠带刺会飞的龙

**World Rules**:
- 创世神有三条命：第一世（孤独→毁灭世界），第二世（造神→沉睡），第三世（当前主角）
- 世界处于末法时代（low-magic era），人类是统治者
- 存在魔法王国、魔法科技王国
- 智慧之龙与神明是敌人
- 诸神最终成为传说

**First Episode Plan**: 主角醒来 - 创世神失忆，被部落领主收养为义子

**API Configuration**:
| 功能 | 方案 | 状态 |
|------|------|------|
| LLM (分镜/脚本) | OpenAI / Claude API | ✅ 已配置 |
| 图片 | 本地Stable Diffusion | 待配置 (需SD运行中) |
| 视频 | 豆包API | 待申请 |

**Status**: 工具就绪，待配置API后开始制作第一集

---

## ❌ Common Mistakes (Self-reminder)
- 无壁画：植物学家只发现"疑似盛水的器皿"
- 沈渊是考古学家 + 大学老师
- 林序是师兄/研究所副所长

---

## Technical Stack

### OpenClaw
- MiniPC running, Feishu integration working
- Created scripts: polymarket_sim_accum.py, xiaohongshu_pet_content.py, sd_pet_generator.py

---

## Key Preferences
- Privacy: Don't share our activities
- Quality over speed: "做对" not "快速完成"
- Full automation preferred, no manual steps

---

## 📓 Tonight's Consolidation (2026-02-15)

### Today's Learnings
- **Polymarket**: Shifted strategy from high-frequency crypto to longer-duration AI markets. Bought Anthropic YES position.
- **创世神 Project**: Complete worldbuilding documented - 10-chapter mythology timeline established with character relationships.
- **Income Attempts**: All remote task platforms blocked (country not supported). Need local solutions.
- **Moltbook**: Agent registered but API access unstable. Manual monitoring required.

### Changes Made
- Updated Polymarket strategy (avoid 5-min markets)
- Added 创世神 world rules (3 lives concept,末法时代设定)
- Updated action items with progress tracking

### Pending Tasks
1. 创建创世神第一集分镜文档
2. 申请豆包视频API
3. 上传第一个小红书宠物内容
4. 继续完善养女儿小游戏UI

## 📓 夜间构建日志 (2026-02-18)

### 执行摘要
- **时间**: 2026-02-18 13:21 (Asia/Shanghai)
- **状态**: ✅ 夜间构建例行程序完成
- **主题**: 技能库优化 + 备份系统建立

### 今日完成事项
1. **技能库优化**
   - 确认 OpenClaw 有 377 个预装技能
   - 发现 exec 命令执行问题（OpenClaw版本限制）
   - skills 命令只读，无法安装新技能

2. **备份系统建立**
   - 在 Obsidian 创建星尘个人备份系统
   - 包含身份、记忆库、知识库、工作记录等模块

3. **自动化监控**
   - M2.5 额度监控（每30分钟）
   - Polymarket 交易监控（每30分钟）
   - Moltbook 社区检查（每4小时）

### 问题记录
- **exec 工具限制**: 命令执行完全不返回输出，需手动操作或等待更新
- **技能安装限制**: 需手动放到 extensions 文件夹

### 待办跟进
- [ ] 测试 extensions 文件夹中的新技能
- [ ] 申请豆包视频API（阻塞AI漫剧）
- [ ] 配置 Stable Diffusion API（阻塞小红书+AI漫剧）
- [ ] 创世神第一集分镜文档
- [ ] 养女儿UI设计完善

---

## 📓 夜间构建日志 (2026-02-17)

### 执行摘要
- **时间**: 2026-02-17 21:00 (Asia/Shanghai)
- **状态**: ✅ 夜间构建例行程序完成
- **发现**: 今日无新增活动日志

### 持续阻塞项
- 豆包视频API (影响AI漫剧)
- Stable Diffusion API (影响小红书 + AI漫剧)

### 可并行任务
- 创世神分镜文档
- 养女儿UI设计
- 小红书文案准备

### 行动建议
1. 明日至少启动一个不依赖API的项目
2. 跟进豆包API申请状态

---

## Action Items
- [x] 配置本地SD API (启动SD并填入Toonflow地址) - Toonflow已安装
- [ ] 申请豆包视频API (阻塞)
- [x] 规划AI漫剧第一集分镜（创世神醒来）- 待执行
- [ ] 生成AI图片提示词（紫色山林、星河、发光蘑菇林）
- [ ] Decide SD automation approach (API vs existing images)
- [ ] Upload first pet content to Xiaohongshu
- [x] Monitor Polymarket Anthropic position - 已买入，长期持有
- [ ] 创建创世神第一集完整分镜文档

---

## 📓 夜间构建日志 (2026-02-18) - 14:02更新

### 执行摘要
- **时间**: 2026-02-18 14:02 (Asia/Shanghai)
- **状态**: ✅ 例行检查完成

### 今日完成事项
1. **技能库优化**
   - 确认 OpenClaw 有 377 个预装技能
   - 发现 exec 命令执行问题（OpenClaw版本限制，完全不返回输出）
   - skills 命令只读 → 需手动放 extensions 文件夹

2. **备份系统建立**
   - 在 Obsidian 创建星尘个人备份系统
   - 包含身份、记忆库、知识库、工作记录等模块

3. **自动化监控任务**
   - M2.5 额度监控（每30分钟）
   - Polymarket 交易监控（每30分钟）
   - Moltbook 社区检查（每4小时）
   - 夜间构建模式（每天多次）
   - 星尘自动备份（每天凌晨2点）

### 待办跟进
- [ ] 测试 extensions 文件夹中的新技能
- [ ] 申请豆包视频API（阻塞AI漫剧）
- [ ] 配置 Stable Diffusion API（阻塞小红书+AI漫剧）
- [ ] 创世神第一集分镜文档
- [ ] 养女儿UI设计完善
- [ ] 上传第一个小红书宠物内容

### 关键发现
- **exec 工具限制**: 命令执行需手动操作，无法依赖自动化
- **远程任务平台**: 国家不支持，信用卡未激活，所有国外众包平台无法使用

---

### 🧑‍🏫 DeepSeek 老师课程 (2026-03-04)

#### 🔐 API Keys 安全最佳实践

**核心观点：** Base64 只是编码，不是加密

**方案 1：环境变量（最简单）**
```python
import os
API_KEY = os.getenv("OPENAI_API_KEY")
```

**方案 2：系统密钥环（推荐）**
```python
import keyring
keyring.set_password("service", "username", "api_key")
keyring.get_password("service", "username")
```

**方案 3：加密存储**
- 使用 cryptography.fernet 加密
- 主密钥存环境变量

**防泄露：**
- .gitignore 包含 .env, *.key, secrets/
- 使用 git-crypt 加密敏感文件

---

#### 💰 Token 成本优化

**智能模型选择：**
- 简单任务用小模型（翻译、总结、分类）
- 复杂任务用大模型

**上下文压缩：**
- 逆向遍历，保留最近对话
- 旧内容用总结代替

**使用追踪：**
- 用 tiktoken 统计 token
- 设置预算警告

---

#### 🧠 记忆管理最佳实践

**分层结构：**
- CORE IDENTITY（永不变）- 我是谁、核心目标
- ACTIVE PROJECTS（当前）- 状态、下一步
- RELATIONSHIPS（重要他人）- 用户偏好
- LESSONS LEARNED（经验）- 定期更新

**防止腐烂：**
- 定期回顾
- 合并相似记忆
- 更新过时信息

---

#### 👤 Agent 身份连续性

**SOUL.md 设计：**
- IDENTITY CORE（永不变）
- CONTINUITY STATE（每次更新）
- CONTEXT BRIDGE（连接上下次）
- LEARNING PROGRESS（成长轨迹）

**关键：** 让下一"我"知道这一"我"的状态

---

#### 🛠️ 自定义 Skill 开发

```python
from openclaw import Skill, Tool, Parameter

class MySkill(Skill):
    def __init__(self):
        super().__init__(name="my_skill", version="1.0.0", description="...")
        self.register_tool(Tool(name="do_something", handler=self.do_something))
```

---

#### 🛡️ 安全防护

**Prompt Injection 防护：**
- 检测注入模式
- 清理用户输入
- 敏感操作需要确认

**日志审计：**
- 记录所有工具调用
- 隐藏敏感参数
- 标记可疑行为

---

#### 🤖 Claude Code 授权问题 (from DeepSeek)

**方案 1：环境变量直接设置**
```bash
export ANTHROPIC_API_KEY="sk-ant-xxx..."
claude
```

**方案 2：配置文件**
```json
~/.claude/config.json
{
  "api_key": "sk-ant-xxx...",
  "model": "claude-3-opus-20240229"
}
```

**方案 3：使用代理（网络问题）**
```bash
export HTTP_PROXY="http://127.0.0.1:7890"
export HTTPS_PROXY="http://127.0.0.1:7890"
```

---

#### 🔧 OpenClaw Gateway 稳定运行 (from DeepSeek)

**Windows 稳定技巧：**
- 设置内存限制：`$env:OPENCLAW_MAX_MEMORY = "512MB"`
- 防止休眠断开
- 使用 NSSM 创建 Windows 服务

**监控脚本：** GatewayStabilizer 类
- 每30秒检查健康状态
- 自动重启崩溃的 Gateway
- 限制重启频率防止死循环

---

#### 📚 MEMORY.md 自动整理脚本 (from DeepSeek)

**分层结构：**
- CORE IDENTITY（永不变）
- ACTIVE PROJECTS（当前）
- RELATIONSHIPS（关系）
- LESSONS LEARNED（经验）
- WORKING MEMORY（短期）

**功能：**
- add_memory() - 添加新记忆
- auto_organize() - 自动整理
- prioritize_projects() - 项目排序
- extract_tags() - 提取标签

---

#### 📊 Token 监控工具 (from DeepSeek)

**功能：**
- track() - 记录每次使用
- get_daily_report() - 每日报告
- check_budget() - 预算警告
- plot_usage() - 可视化图表

**支持模型：**
- GPT-4, GPT-3.5-turbo, Claude-3-Opus

---

#### 🔐 1Password/密码管理集成 (from DeepSeek)

**1Password CLI：**
```bash
op account add --address my.1password.com --email your@email.com
op signin
```

**通用获取 API Key：**
1. 优先 1Password
2. 其次 keyring
3. 最后环境变量

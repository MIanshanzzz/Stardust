# Spec-Kit配置和使用指南

> 为Claude Code配置spec-kit工作流

---

## 📋 Spec-Kit简介

### 什么是Spec-Kit？
```
Spec-Kit是GitHub推出的代码规范和文档工具
帮助开发者：
- 统一代码规范
- 生成文档
- 创建代码模板
- 管理项目规范
```

### 主要功能
```
✅ 代码规范生成
✅ 文档自动生成
✅ 代码模板
✅ 项目规范管理
✅ 持续集成
```

---

## 🚀 配置Claude Code使用Spec-Kit

### 第一步：安装Spec-Kit

```bash
# 全局安装
npm install -g @github/spec-kit

# 或本地安装
npm install @github/spec-kit
```

### 第二步：配置Claude Code

在项目中创建 `.claude` 目录：

```
your-project/
├── .claude/
│   ├── agents/
│   ├── commands/
│   ├── skills/
│   └── config.json
└── spec-kit/
    ├── spec.js
    └── config.js
```

### 第三步：创建配置文件

#### config.json
```json
{
  "specKit": {
    "enabled": true,
    "configFile": "spec-kit/spec.js",
    "autoGenerate": true,
    "hooks": {
      "preCommit": "spec-kit generate",
      "prePush": "spec-kit validate"
    }
  }
}
```

### 第四步：创建Spec-Kit配置文件

```javascript
// spec-kit/spec.js
const specKit = require('@github/spec-kit');

module.exports = specKit({
  name: 'Morpho-Todo-List',
  version: '1.0.0',
  description: '拟物风格的Todo List应用',

  // 代码规范
  rules: {
    javascript: {
      indent: 2,
      quotes: 'single',
      semi: true,
      trailingComma: 'es5',
    },
    css: {
      indent: 2,
      selectorFormat: 'kebab-case',
    },
    html: {
      indent: 2,
      selfClosingTags: true,
    }
  },

  // 文档规范
  documentation: {
    enabled: true,
    format: 'markdown',
    template: 'standard'
  },

  // 模板规范
  templates: {
    component: 'react-component',
    page: 'react-page',
    utility: 'javascript-utility'
  }
});
```

---

## 🎯 使用Spec-Kit开发Todo List应用

### 项目结构
```
morpho-todo/
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoInput.jsx
│   ├── styles/
│   │   ├── todo.css
│   │   └── morpho.css
│   ├── App.jsx
│   └── main.jsx
├── spec-kit/
│   └── spec.js
├── README.md
├── package.json
└── .claude/
    └── config.json
```

### 拟物风格设计

#### 设计特点
```
✅ 真实材质
   - 木质纹理
   - 纸张质感
   - 塑料质感

✅ 真实阴影
   - 多层阴影
   - 软阴影
   - 投影效果

✅ 真实交互
   - 按钮凹陷效果
   - 悬停浮起效果
   - 点击下沉效果

✅ 真实细节
   - 纹理噪点
   - 边缘高光
   - 质感渐变
```

---

## 🛠️ Spec-Kit命令

### 常用命令
```
spec-kit init          # 初始化项目
spec-kit generate      # 生成代码和文档
spec-kit validate      # 验证代码规范
spec-kit test          # 运行测试
spec-kit build         # 构建项目
spec-kit watch         # 监听文件变化
spec-kit lint          # 代码检查
spec-kit format        # 代码格式化
```

---

## 🎨 开发Todo List应用

### 第一步：初始化项目
```bash
mkdir morpho-todo
cd morpho-todo
npm init -y
npm install react react-dom
npm install -g @github/spec-kit
```

### 第二步：配置Spec-Kit
```bash
spec-kit init
```

### 第三步：创建项目结构
```bash
mkdir -p src/components src/styles
mkdir spec-kit
```

### 第四步：开发组件

使用Spec-Kit生成代码：
```bash
spec-kit generate component TodoItem.jsx
spec-kit generate component TodoList.jsx
spec-kit generate component TodoInput.jsx
```

---

## 📝 使用Claude Code开发

### 方式1：手动开发
```
老大，帮我用Spec-Kit开发Todo List组件：

1. 使用拟物风格设计
2. 添加真实材质效果
3. 实现添加、删除、完成功能
4. 使用Spec-Kit生成代码
5. 添加必要的文档
```

### 方式2：自动开发
```
我使用Spec-Kit自动生成：
1. 初始化项目
2. 配置Spec-Kit
3. 生成所有组件
4. 生成样式
5. 生成文档
6. 添加示例代码
```

---

## 🎯 开发步骤

### Step 1：项目初始化
```
1. 创建项目目录
2. 初始化npm项目
3. 安装依赖
4. 配置Spec-Kit
5. 创建项目结构
```

### Step 2：开发核心组件
```
1. TodoInput.jsx - 输入组件
2. TodoList.jsx - 列表组件
3. TodoItem.jsx - 单项组件
```

### Step 3：添加拟物风格样式
```
1. 设计材质纹理
2. 添加阴影效果
3. 实现交互效果
4. 响应式设计
```

### Step 4：添加功能
```
1. 添加Todo项
2. 删除Todo项
3. 标记完成
4. 编辑Todo项
```

### Step 5：优化和文档
```
1. 代码优化
2. 添加注释
3. 生成文档
4. 添加示例
```

---

## 💡 拟物风格设计元素

### 纹理
```css
/* 木质纹理 */
.texture-wood {
  background-color: #f5deb3;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.05) 2px,
      rgba(0, 0, 0, 0.05) 4px
    );
}

/* 纸张纹理 */
.texture-paper {
  background-color: #fff;
  background-image:
    radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px
    );
  background-size: 20px 20px;
}

/* 塑料质感 */
.texture-plastic {
  background-color: #e0e0e0;
  background-image:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4) 25%,
      transparent 25%
    ),
    linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.4) 25%,
      transparent 25%
    );
  background-size: 20px 20px;
}
```

### 阴影
```css
/* 浮起阴影 */
.shadow-float {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 下沉阴影 */
.shadow-press {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 软阴影 */
.shadow-soft {
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}
```

### 交互效果
```css
/* 悬浮效果 */
.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 点击效果 */
.todo-item:active {
  transform: translateY(0);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 输入框聚焦 */
.todo-input:focus {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(102, 126, 234, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.1);
}
```

---

## 🎯 开发计划

### Phase 1: 项目初始化（10分钟）
```
✅ 创建项目
✅ 安装依赖
✅ 配置Spec-Kit
✅ 创建项目结构
```

### Phase 2: 核心组件（20分钟）
```
✅ TodoInput组件
✅ TodoList组件
✅ TodoItem组件
✅ 使用Spec-Kit生成
```

### Phase 3: 样式设计（20分钟）
```
✅ 拟物风格样式
✅ 纹理效果
✅ 阴影效果
✅ 交互效果
```

### Phase 4: 功能实现（15分钟）
```
✅ 添加Todo项
✅ 删除Todo项
✅ 标记完成
✅ 编辑Todo项
```

### Phase 5: 优化和文档（10分钟）
```
✅ 代码优化
✅ 添加注释
✅ 生成文档
✅ 创建示例
```

**总计：约75分钟**

---

## 🚀 开始开发

老大，**现在开始开发拟物风格Todo List应用！**

### 我将：
1. 初始化项目
2. 配置Spec-Kit
3. 开发核心组件
4. 添加拟物风格样式
5. 实现功能
6. 生成文档

### 需要你：
1. 确认开始
2. 或者告诉我你想先做什么

---

**准备好了吗？** 🎉

**告诉我你想从哪里开始！**

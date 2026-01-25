# Meta-Lingo Website

> Meta-Lingo 官方网站 - 现代化多模态语料库研究平台的展示与下载页面

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?logo=github)](https://tltanium.github.io/meta-lingo-website/)

**在线访问**: [https://tltanium.github.io/meta-lingo-website/](https://tltanium.github.io/meta-lingo-website/)

## 项目简介

这是 **Meta-Lingo** 语料库语言学研究工具的官方网站项目。Meta-Lingo 是一个基于 Electron + React + Python 构建的桌面应用，集成了 Whisper 语音转录、YOLO 视频追踪与 CLIP 语义分析，为语言学研究提供全流程智能化解决方案。

本网站用于展示 Meta-Lingo 的功能特性、提供下载入口，并介绍开发者信息。

## 技术栈

### 前端框架
| 技术 | 版本 | 说明 |
|------|------|------|
| React | 19.2 | 用户界面框架 |
| TypeScript | 5.6 | 类型安全的 JavaScript |
| Vite | 7.1 | 下一代前端构建工具 |
| TailwindCSS | 4.1 | 原子化 CSS 框架 |

### UI 组件
| 技术 | 说明 |
|------|------|
| Radix UI | 无障碍原语组件库 |
| Lucide React | 图标库 |
| Framer Motion | 动画库 |
| shadcn/ui | 基于 Radix 的组件系统 |

### 后端 & 工具
| 技术 | 说明 |
|------|------|
| Express | Node.js Web 服务器框架 |
| wouter | 轻量级 React 路由 |
| pnpm | 快速、节省磁盘空间的包管理器 |

## 项目结构

```
Meta-Lingo-Website/
├── client/                      # 前端源码
│   ├── index.html              # HTML 入口
│   ├── public/                 # 静态资源
│   │   └── images/             # 图片资源
│   └── src/
│       ├── App.tsx             # 应用根组件
│       ├── main.tsx            # 入口文件
│       ├── index.css           # 全局样式
│       ├── components/         # 通用组件
│       │   ├── ui/             # UI 基础组件 (shadcn/ui)
│       │   ├── ErrorBoundary.tsx
│       │   └── ...
│       ├── contexts/           # React Context
│       │   ├── LanguageContext.tsx  # 国际化上下文
│       │   └── ThemeContext.tsx     # 主题上下文
│       ├── data/
│       │   └── features.ts     # 功能模块数据
│       ├── hooks/              # 自定义 Hooks
│       ├── lib/
│       │   └── utils.ts        # 工具函数
│       ├── pages/              # 页面组件
│       │   ├── Home.tsx        # 首页
│       │   ├── FeatureDetail.tsx   # 功能详情页
│       │   ├── Legal.tsx       # 法律条款页
│       │   └── NotFound.tsx    # 404 页面
│       └── types.ts            # 类型定义
├── server/                     # 后端源码
│   └── index.ts               # Express 服务器
├── shared/                     # 前后端共享代码
│   └── const.ts
├── package.json               # 项目配置
├── pnpm-lock.yaml            # 依赖锁定文件
├── tsconfig.json             # TypeScript 配置
├── vite.config.ts            # Vite 配置
├── components.json           # shadcn/ui 配置
├── start.sh                  # 快速启动脚本
└── deploy.sh                 # GitHub Pages 部署脚本
```

## 功能特性

### 网站功能
- **响应式设计** - 完美适配桌面和移动设备
- **国际化支持** - 支持中文/英文双语切换
- **平滑动画** - 基于 Framer Motion 的流畅动效
- **功能展示** - 12 大核心功能模块的详细介绍
- **下载入口** - Windows 和 macOS 版本下载

### Meta-Lingo 应用功能模块

| 模块 | 功能描述 |
|------|---------|
| 语料库管理 | 多模态语料上传与组织，支持音视频处理 |
| 词频统计 | 词汇频率分析，支持词性筛选与可视化 |
| 同义词分析 | 基于词向量的语义相似度分析 |
| 关键词提取 | TF-IDF 和 TextRank 算法提取核心关键词 |
| N-gram 分析 | 2-5 元语法统计与固定搭配发现 |
| 共现关系 | 词语共现网络构建与可视化 |
| 语义域分析 | 基于 USAS 体系的语义类别统计 |
| 词图分析 | 结合依存句法的语法搭配素描 |
| 文献可视化 | BibTeX/RIS 数据的引文网络分析 |
| 标注模式 | 交互式多层级文本与多模态标注 |
| 主题建模 | LDA 和 BERTopic 主题发现 |
| 应用设置 | 模型管理、插件中心、界面配置 |

## 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (推荐) 或 npm

### 安装与运行

#### 方式一：使用启动脚本（推荐）

```bash
# 克隆项目
git clone https://github.com/TLtanium/meta-lingo-website.git
cd meta-lingo-website

# 运行启动脚本
./start.sh
```

启动脚本会自动检测并安装依赖，然后启动开发服务器。

#### 方式二：手动运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 可用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 (默认端口 3000) |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览构建结果 |
| `pnpm start` | 生产模式运行 |
| `pnpm check` | TypeScript 类型检查 |
| `pnpm format` | Prettier 代码格式化 |

### 启动脚本命令

```bash
./start.sh          # 启动开发服务器 (默认)
./start.sh dev      # 启动开发服务器
./start.sh build    # 构建生产版本
./start.sh preview  # 预览构建结果
./start.sh install  # 仅安装依赖
./start.sh clean    # 清理并重新安装依赖
./start.sh help     # 显示帮助信息
```

## 开发指南

### 目录别名

项目配置了以下路径别名，可在导入时使用：

```typescript
import { Button } from '@/components/ui/button';  // client/src/
import { CONST } from '@shared/const';             // shared/
```

### 添加新页面

1. 在 `client/src/pages/` 下创建新的页面组件
2. 在 `client/src/App.tsx` 中添加路由

```tsx
// App.tsx
<Route path="/new-page" component={NewPage} />
```

### 国际化

在 `client/src/contexts/LanguageContext.tsx` 中添加翻译：

```typescript
const translations = {
  zh: {
    newKey: "中文文本"
  },
  en: {
    newKey: "English text"
  }
};
```

在组件中使用：

```tsx
const { t } = useLanguage();
return <p>{t('newKey')}</p>;
```

### 添加 UI 组件

本项目使用 shadcn/ui 组件系统。添加新组件：

```bash
npx shadcn@latest add button
```

## 构建部署

### 构建生产版本

```bash
pnpm build
```

构建输出目录：
- 前端静态文件：`dist/public/`
- 后端服务：`dist/index.js`

### 生产环境运行

```bash
pnpm start
```

或直接运行：

```bash
NODE_ENV=production node dist/index.js
```

### 部署到 GitHub Pages

本项目提供了一键部署脚本，可自动构建并推送到 GitHub Pages。

#### 使用部署脚本

```bash
# 完整部署：构建 + 推送源码 + 部署 gh-pages (推荐)
./deploy.sh

# 仅构建项目
./deploy.sh build

# 仅推送源码到 main 分支
./deploy.sh push

# 仅部署到 gh-pages 分支 (需要先构建)
./deploy.sh pages

# 查看帮助
./deploy.sh help
```

#### 首次设置 GitHub Pages

如果你是首次部署，需要在 GitHub 仓库中启用 Pages 服务：

1. 打开仓库页面：[https://github.com/TLtanium/meta-lingo-website](https://github.com/TLtanium/meta-lingo-website)
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 `Deploy from a branch`
   - **Branch**: 选择 `gh-pages` 分支，文件夹选择 `/ (root)`
5. 点击 **Save**

等待几分钟后，网站将在以下地址可访问：
**https://tltanium.github.io/meta-lingo-website/**

#### 部署脚本功能

| 命令 | 说明 |
|------|------|
| `./deploy.sh` 或 `./deploy.sh all` | 完整部署流程 |
| `./deploy.sh build` | 仅构建项目 |
| `./deploy.sh push` | 仅推送源码到 main |
| `./deploy.sh pages` | 仅部署到 gh-pages |
| `./deploy.sh help` | 显示帮助信息 |

部署脚本会自动：
- 检查并同步版本号
- 构建生产版本
- 提交并推送源码到 main 分支
- 将构建产物推送到 gh-pages 分支

### 其他部署方式

项目也支持部署到其他静态托管服务：

- **Vercel / Netlify**: 使用 `dist/public/` 目录
- **Node.js 服务器**: 运行 `pnpm start` 启动 Express 服务器

## 项目配置

### Vite 配置 (`vite.config.ts`)

- 开发服务器端口：3000
- 支持 `--host` 参数局域网访问
- 集成 Manus 调试收集器（开发模式）

### TypeScript 配置

- 严格模式启用
- 路径别名配置
- React JSX 转换

## 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 关于 Meta-Lingo

Meta-Lingo 是一个现代化多模态语料库研究平台，为语言学研究者提供全流程智能化解决方案。

**核心特性：**
- 完全本地运行，保护数据隐私
- 集成最新 NLP 和 LLM 技术
- 支持文本、音频、视频多模态分析
- 免费使用，无需联网

---

<p align="center">
  <b>Meta-Lingo</b> - 现代化多模态语料库研究平台
  <br>
  Made with love for linguistic researchers
</p>

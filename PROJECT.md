# Meta-Lingo Website — 项目说明

## 技术栈

- **构建**: Vite 7 + React 19
- **路由**: wouter（支持 base 路径，适配 GitHub Pages）
- **样式**: Tailwind CSS 4
- **状态**: React Context（ThemeContext、LanguageContext）

## 目录与职责

| 路径 | 职责 |
|------|------|
| `client/src/data/features.ts` | 功能模块数据：每个模块的 id、中英文 title/description、详情 content/contentEn、图标与颜色 |
| `client/src/contexts/LanguageContext.tsx` | 双语文案：导航、首页 hero、功能模块标题与短描述（features.modules）、关于、下载、页脚、详情页等 |
| `client/src/pages/Home.tsx` | 首页：功能卡片列表，点击跳转 `/feature/:id` |
| `client/src/pages/FeatureDetail.tsx` | 功能详情页：根据 URL 的 id 从 features 取数据，按当前语言显示 title/description/content |
| `client/src/App.tsx` | 路由与全局 Provider（Theme、Language） |

## 双语机制

- **功能列表（首页）**：模块标题与短描述来自 `LanguageContext` 的 `t('features.modules.<id>.title')` 与 `t('features.modules.<id>.desc')`（zh/en 两套）。
- **功能详情页**：`FeatureDetail` 根据 `language` 选择 `feature.title` / `feature.titleEn`、`feature.description` / `feature.descriptionEn`、`feature.content` / `feature.contentEn`。
- 修改任一功能的中文或英文描述时，需同步更新 `features.ts` 的对应字段及 `LanguageContext.tsx` 中该模块的 zh/en 条目（若仅改详情页则只动 features.ts）。

## 功能模块列表（id 与展示名称）

| id | 中文名称 | 英文名称 | 备注 |
|----|----------|----------|------|
| corpus-management | 语料库管理 | Corpus Management | |
| word-frequency | 词频统计 | Word Frequency | |
| synonym-analysis | 同义词分析 | Synonym Analysis | 也称词族分析 |
| keyword-extraction | 关键词提取 | Keyword Extraction | 含单文档算法与关键性对比（含语料库资源） |
| ngram-analysis | N-gram分析 | N-gram Analysis | |
| collocation-analysis | 共现关系 | Concordance | KWIC + CQL |
| semantic-field | 语义分析 | Semantic Analysis | USAS + 隐喻（英语） |
| **word-sketch** | **搭配分析** | **Collocation Analysis** | **含三个子模块：搭配分析（窗口+12 种统计量）、Word Sketch（语法搭配）、Word Sketch Difference（词图对比）** |
| literature-viz | 文献可视化 | Bibliometrics | 上传、文献库列表、文献库详情、可视化 |
| annotation-mode | 标注模式 | Annotation Mode | 文本标注、多模态标注、标注历史、框架管理、编码者间信度 |
| topic-modeling | 主题建模 | Topic Modeling | |
| settings | 应用设置 | Settings | |

## 修改记录

（在每次功能描述或架构变更后更新此节。）

- **2026-02-28**：功能描述与手册对齐
  - 词图分析更名为「搭配分析」（id 保持 `word-sketch`），详情按帮助手册补充三子模块（搭配分析、Word Sketch、Word Sketch Difference）说明。
  - 关键词提取：补充关键性对比的参照语料两种方式（自选语料库 / 语料库资源）、内置资源示例（BNC、COCA、OANC、GloWbE 等）及参考语料库 USAS 标注说明（PyMUSAS、对比建议）。
  - 同义词分析：补充语料库/文献库统一选择、结果仅保留语料中出现的同义词、跨模块链接。
  - 标注模式：按手册补充五标签页（文本标注、多模态标注、标注历史、框架管理、编码者间信度）及自动标注、编码者间信度等。
  - 文献可视化：按手册补充四标签页（上传、文献库列表、文献库详情、可视化）。
  - 双语：LanguageContext 中 word-sketch 的 zh/en title 与 desc 已同步为「搭配分析」/ “Collocation Analysis”；README 与 index.html 中相关表述已更新。

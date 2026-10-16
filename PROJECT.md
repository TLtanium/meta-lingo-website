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
| corpus-management | 语料库管理 | Corpus Management | 文本/PDF/音视频，11 种语言，自动标注，整库导出导入 |
| word-frequency | 词频统计 | Word Frequency | |
| synonym-analysis | 同义词分析 | Synonym Analysis | 也称词族分析；网络图 + 树状图 |
| keyword-extraction | 关键词提取 | Keyword Extraction | 单文档算法 + 关键性对比（词形/词元/USAS 语义域，7 个内置参考语料库） |
| ngram-analysis | N-gram分析 | N-gram Analysis | |
| collocation-analysis | 语境索引 | Concordance | KWIC + CQL（应用内英文名为 Concordance） |
| semantic-field | 话语分析 | Discourse Analysis | 原「语义分析」；USAS 语义域 + MIPVU 隐喻 + DMIP + MDA（id 保持不变以保留 URL 与截图路径） |
| word-sketch | 搭配分析 | Collocation Analysis | 三个子模块：搭配分析（窗口+12 种统计量）、Word Sketch、Word Sketch Difference |
| literature-viz | 文献可视化 | Bibliography Visualization | Refworks / 论文 PDF 导入、11 项 AI 解读、7 种图表（无引文弦图、山脊图） |
| annotation-mode | 标注模式 | Annotation Mode | 文本/多模态标注、关联箭头、自动标注、框架管理、编码者间信度 |
| topic-modeling | 主题建模 | Topic Modeling | BERTopic/LDA/LSA/NMF |
| sentiment-analysis | 情感分析 | Sentiment Analysis | **新增**；NRC 情感极性/维度 |
| dictionary-lookup | 词典查询 | Dictionary Lookup | **新增**；麦克米伦 + 朗文搭配 |
| ai-assistant | AI 助手与 MCP | AI Assistant & MCP | **新增**；模块 AI 助手、对话模式、MCP 服务（63 个工具） |
| settings | 应用设置 | Settings | |

模块顺序与应用主页一致（前 12 项为应用主页卡片，其后为工具栏词典、AI 能力与设置）。数据来源：`Meta-Lingo-Electron` 的 `help/zh.md`、`help/en.md`、`PROJECT.md` 以及 `src/pages/Home/HomePage.tsx`。

## 功能截图约定

功能详情页顶部的图片由 `ImageCarousel` 自动探测：`/images/<image 基名>-1.png`、`-2.png` … 存在则轮播，否则回退到单张 `/images/<id>.png`；**两者都不存在时整个图片区块自动隐藏**。新增模块（情感分析、词典查询、AI 助手与 MCP）目前尚无截图，添加 `sentiment-analysis-1.png` 等文件后即会自动出现。

## 修改记录

（在每次功能描述或架构变更后更新此节。）

- **2026-10-16**：关键词提取·内置参考语料库对齐 Meta-Lingo v4.9.52（参考语料改为 PyMUSAS top-1，并移除无 top-1 版本或数据异常的语料）
  - 内置参考语料库由 16 个减为 7 个（AmE06、BE06、BNC 2014、NOW、COCA、COHA、GloWbE）：移除 Coronavirus、iWeb、TV、Movies、SOAP、Wikipedia（暂无 top-1 版本），以及因数据异常整库下线的 BNC 1994、OANC、Brown；features.ts 中英文资源表、简介、示例提示词、README、PROJECT 模块表同步。
  - 「参考语料库的 USAS 标注」改为 top-1 口径：研究语料在关键性对比中同样只统计主标签，词形 / 词元 / 语义域均为正常计数；语料库管理的 top-5 标注不变。

- **2026-10-01**：网站模块与描述全面对齐 Meta-Lingo v4.9.49 实际设计（依据 Electron 项目 help/PROJECT/源码）
  - 模块由 12 个扩充为 15 个：新增「情感分析」「词典查询」「AI 助手与 MCP」；features.ts、LanguageContext、Home/FeatureDetail 图标映射、sitemap、README 同步。
  - 「语义分析」更名为「话语分析 / Discourse Analysis」，涵盖 USAS 语义域、MIPVU 隐喻（五步流水线；metalingo-indirect-metaphor F1 82.29、metalingo-direct-metaphor 词级综合 F1 76.52，取代旧的 DeBERTa-clause 模型描述）、DMIP 刻意隐喻、Biber 多维分析（MDA）。
  - 「语境索引」英文名改为应用内的 Concordance；补充 CQL 高级运算符（within/containing/meet/ws()/结构标记）、CQL 构建器、离散度图、多级排序与筛选。
  - 「文献可视化」英文名改为 Bibliography Visualization；图表由 9 种更正为 7 种（移除已下线的引文弦图与山脊图），补充论文 PDF（Crossref）导入、整库导出/导入、CiteSpace 风格分析引擎（g-index、Pathfinder、Louvain、LLR 簇标签、共被引、Kleinberg 突增）。
  - 「语料库管理」：补充 PDF 文本、11 种语言、PyMUSAS-Neural-Multilingual-Base-BEM（Top-5）、NRC、整库导出/导入、模型按需下载。
  - 「关键词提取」：补充语义域对比模式、16 个内置参考语料库（默认 AmE06）、统计阈值与负关键词；移除「USAS 标注模式需选神经网络/混合」的过时建议（应用已默认神经网络并隐藏该设置）。
  - 「标注模式」：补充关联箭头、标签快捷键、CQL annotation 属性、Theme-Rheme 自动标注、集合式编码者间信度（词单位×标签集合、MASI、负类口径）与纵向 CSV 导出。
  - 「主题建模」：补充离群值处理、按主题导出文档、LLM 命名、文献库数据源。
  - 「同义词分析」：可视化改为网络图 + 树状图（列表视图已移除）。「应用设置」：移除已隐藏的 USAS 模式设置，补充 OpenAI 多线路、MCP 一键安装、模型管理。
  - 详情页：无截图的模块自动隐藏图片区块（见「功能截图约定」）；index.html 元描述同步为 15 大功能模块 / 话语分析。

- **2026-02-28**：功能描述与手册对齐
  - 词图分析更名为「搭配分析」（id 保持 `word-sketch`），详情按帮助手册补充三子模块（搭配分析、Word Sketch、Word Sketch Difference）说明。
  - 关键词提取：补充关键性对比的参照语料两种方式（自选语料库 / 语料库资源）、内置资源示例（BNC、COCA、OANC、GloWbE 等）及参考语料库 USAS 标注说明（PyMUSAS、对比建议）。
  - 同义词分析：补充语料库/文献库统一选择、结果仅保留语料中出现的同义词、跨模块链接。
  - 标注模式：按手册补充五标签页（文本标注、多模态标注、标注历史、框架管理、编码者间信度）及自动标注、编码者间信度等。
  - 文献可视化：按手册补充四标签页（上传、文献库列表、文献库详情、可视化）。
  - 双语：LanguageContext 中 word-sketch 的 zh/en title 与 desc 已同步为「搭配分析」/ “Collocation Analysis”；README 与 index.html 中相关表述已更新。

- **2026-02-28**：隐喻分析模块描述更新
  - 移除 HiTZ 模型及「规则 + 双模型」混合流程描述。
  - 改为基于 MIPVU 的从句级二元隐喻检测：DeBERTa-v3-large 在 VUA-20（VUAMC）上微调，训练单位为从句（SpaCy ROOT + advcl/ccomp/relcl 等），任务为词级二元分类。
  - 准确度数据参考 [deberta-v3-large-clause-metaphor](https://huggingface.co/tommyleo2077/deberta-v3-large-clause-metaphor)：测试集 F1 75.83、Precision 78.08、Recall 73.69；验证 F1 ~79.05；按词性（IN/DT/RP/RB/Other）F1 已写入 features.ts 中英文详情。
  - 引用与致谢仅保留 MIPVU（Steen et al.）及新模型链接，移除 Sanchez-Bayona & Agerri、HiTZ 链接。
  - README 功能表下注已更新为当前模型与指标说明；双语 content/contentEn 已同步。

- **2026-02-28**：小红书链接与语境索引
  - 小红书链接更新为 https://www.xiaohongshu.com/user/profile/6337c399000000001802d464（元语言_Meta-Lingo 官方账号）。
  - 「共现关系」模块更名为「语境索引」（与 help/zh.md 一致）：features.ts、LanguageContext、README、PROJECT 中标题与描述已更新；英文为 Context Index；详情页补充“该模块支持多种搜索模式、CQL 查询、词性筛选、结果排序和可视化等功能”；跨模块链接表述已统一为语境索引/context index。

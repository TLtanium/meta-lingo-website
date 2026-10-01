import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'corpus-management',
    title: '语料库管理',
    titleEn: 'Corpus Management',
    description: '上传、标注与管理多模态语料：11 种语言、音视频转录、SpaCy/USAS/MIPVU/NRC 自动标注，支持整库导出与迁移。',
    descriptionEn: 'Upload, annotate and manage multimodal corpora: 11 languages, audio/video transcription, SpaCy/USAS/MIPVU/NRC auto-annotation, and full corpus export/import.',
    icon: 'corpus-management.png',
    color: '#3B82F6', // Blue
    image: '/images/corpus-management.png',
    content: `
# 语料库管理

语料库管理是 Meta-Lingo 所有分析的起点：在本地上传、标注、整理和迁移您的多模态语料，数据始终保存在您自己的电脑上。

## 界面概览

模块由三个标签页组成：
- **上传语料**：创建新语料库，或向已有语料库追加文件。
- **语料库列表**：卡片 / 列表两种视图，支持按名称、描述、标签搜索，按语言和标签筛选。
- **语料库详情**：查看元数据与文本列表，预览、编辑、打标签、批量重新标注。

## 多模态文件与多语言

### 支持的文件
- **文本**：.txt 与 .pdf。PDF 会自动提取文本并与普通文本走同一条标注流水线，原始 PDF 一并保留；文本编码自动识别（UTF-8/16/32、GBK/GB18030 等）。
- **音频**：.mp3、.wav、.m4a、.flac、.ogg。
- **视频**：.mp4、.avi、.mkv、.mov、.webm。
- 支持拖拽与批量上传；大批量语料建议分批上传（每批 50–100 个文本，音视频每批 5–10 个）。

### 11 种语料语言
英语、中文、丹麦语、荷兰语、芬兰语、法语、意大利语、葡萄牙语、俄语、西班牙语、瑞典语。创建语料库时可设置名称、语言、文本类型、来源、作者、日期、描述和标签。

## 音视频智能处理

上传音视频时可按需开启：
- **Whisper 语音转录**：OpenAI Whisper Large V3 Turbo，词级时间戳，可为全部 11 种语言选择转录语言，转录结果按句保存。
- **英语音频增强**：Wav2Vec2 词级强制对齐、TorchCrepe 基频（F0）提取与 Praat 声学分析（频谱图、共振峰等），用于标注模式中的波形标注。
- **YOLOv8 物体检测与追踪**：针对视频，检测结果以 JSON 保存。
- **CLIP 语义分类**：逐帧语义分类，内置物体 / 场景 / 氛围 / 动态预设标签，也可自定义标签，帧间隔可调（默认 30 帧，设为 1 即逐帧）。
- 后台异步处理，可实时查看处理阶段、进度百分比与状态消息。

## 自动化标注流水线

所有上传的文本（包括音视频转录文本）都会自动完成：
- **SpaCy**：分词、词性（Universal POS 与细粒度标签）、词元、依存句法、命名实体、分句。各语言使用对应的 SpaCy 小型模型（英语、中文为 core_web_sm，其余 9 种语言为 core_news_sm）。
- **USAS 语义域**：PyMUSAS-Neural-Multilingual-Base-BEM 多语言神经网络模型（307M 参数），支持全部 11 种语言，每词保留 Top-5 候选语义标签。
- **MIPVU 隐喻**（仅英语）：基于 DeBERTa-v3-large 的隐喻检测流水线，详见「话语分析」。
- **NRC 情感**：NRC 情感词典标注（10 个情感维度），支持全部 11 种语言。

## 语料整理与迁移

- **文本编辑**：直接编辑文本或逐句编辑转录；查找 / 替换（支持正则）；提取并移除邮箱、网址、电话、IP；文本标准化（Unicode NFKC、空白与换行规范化、移除 HTML 标签 / 控制字符等）。
- **标签与元数据**：为语料库和单个文本添加标签，编辑日期、作者、来源等元数据。
- **批量重新标注**：多选文本后可重新运行 SpaCy、YOLO、CLIP、USAS、MIPVU、NRC。
- **整库导出 / 导入**：将所选语料库（文本、全部自动标注、音视频文件、标注存档）打包为 .zip 用于备份或跨设备迁移，导入时自动避免重名。
- **参考语料库资源**：内置 BNC、COCA、Brown 等预处理词频资源，可直接用于关键词提取中的关键性对比。
- **本地数据**：语料数据存放在应用的 data 目录，与程序分离，卸载或升级不会丢失；Whisper、YOLO、CLIP、PyMUSAS 等大模型在「应用设置 → 模型管理」中按需下载。

## 使用场景
- **语言学研究**：构建特定领域的文本或多模态语料库。
- **多模态分析**：研究视频中语言与视觉模态的互动关系。
- **口语研究**：利用词级时间戳与声学数据开展口语特征分析。
    `,
    contentEn: `
# Corpus Management

Corpus Management is the starting point of every analysis in Meta-Lingo. Upload, annotate, organize and migrate your multimodal corpora locally; your data never leaves your computer.

## Overview

The module has three tabs:
- **Upload**: create a new corpus or add files to an existing one.
- **Corpus list**: card and list views, search by name, description or tag, and filter by language and tag.
- **Corpus detail**: view metadata and the text list; preview, edit, tag and batch re-annotate texts.

## Multimodal Files and Languages

### Supported files
- **Text**: .txt and .pdf. PDFs are converted to text automatically and go through the same annotation pipeline as plain text; the original PDF is kept. Text encodings are detected automatically (UTF-8/16/32, GBK/GB18030, etc.).
- **Audio**: .mp3, .wav, .m4a, .flac, .ogg.
- **Video**: .mp4, .avi, .mkv, .mov, .webm.
- Drag-and-drop and batch upload are supported; for large corpora, upload in batches (50–100 texts at a time, 5–10 files for audio/video).

### 11 corpus languages
English, Chinese, Danish, Dutch, Finnish, French, Italian, Portuguese, Russian, Spanish and Swedish. When creating a corpus you can set its name, language, text type, source, author, date, description and tags.

## Intelligent Audio/Video Processing

Available options when uploading audio or video:
- **Whisper transcription**: OpenAI Whisper Large V3 Turbo with word-level timestamps; the transcription language can be chosen from all 11 supported languages, and transcripts are stored sentence by sentence.
- **English audio enhancements**: Wav2Vec2 word-level forced alignment, TorchCrepe fundamental frequency (F0) extraction and Praat acoustic analysis (spectrogram, formants, etc.), powering waveform annotation in Annotation Mode.
- **YOLOv8 object detection and tracking** for video, with results saved as JSON.
- **CLIP semantic classification**: frame-by-frame classification with built-in object / scene / atmosphere / motion labels or your own custom labels; frame interval is adjustable (30 by default, 1 for every frame).
- Processing runs asynchronously in the background, with live stage, percentage and status messages.

## Automated Annotation Pipeline

Every uploaded text (including transcripts) is annotated automatically:
- **SpaCy**: tokenization, POS (Universal POS and fine-grained tags), lemmas, dependency parsing, named entities and sentence segmentation. Each language uses its own small SpaCy model (core_web_sm for English and Chinese, core_news_sm for the other nine languages).
- **USAS semantic domains**: the PyMUSAS-Neural-Multilingual-Base-BEM multilingual neural model (307M parameters) for all 11 languages, keeping the Top-5 candidate semantic tags for each word.
- **MIPVU metaphor** (English only): a DeBERTa-v3-large based metaphor detection pipeline, described under Discourse Analysis.
- **NRC emotion**: NRC emotion lexicon annotation (10 affect dimensions) for all 11 languages.

## Organizing and Migrating Corpora

- **Text editing**: edit text directly or edit transcripts sentence by sentence; find/replace (regex supported); extract and remove emails, URLs, phone numbers and IP addresses; text normalization (Unicode NFKC, whitespace and line-break cleanup, removal of HTML tags and control characters, etc.).
- **Tags and metadata**: tag corpora and individual texts; edit date, author, source and other metadata.
- **Batch re-annotation**: select multiple texts and re-run SpaCy, YOLO, CLIP, USAS, MIPVU or NRC.
- **Whole-corpus export/import**: pack selected corpora (texts, all automatic annotations, media files and annotation archives) into a .zip for backup or moving between machines; duplicate names are handled automatically on import.
- **Reference corpus resources**: built-in preprocessed frequency resources (BNC, COCA, Brown, etc.) ready to use for keyness comparison in Keyword Extraction.
- **Local data**: corpus data lives in the app's data folder, separate from the program, so uninstalling or upgrading does not remove it. Large models such as Whisper, YOLO, CLIP and PyMUSAS are downloaded on demand in Settings → Model Management.

## Use Cases
- **Linguistic Research**: Build domain-specific text or multimodal corpora.
- **Multimodal Analysis**: Study the interaction between language and visual modalities in video.
- **Spoken Language Research**: Analyze spoken features using word-level timestamps and acoustic data.
    `
  },
  {
    id: 'word-frequency',
    title: '词频统计',
    titleEn: 'Word Frequency',
    description: '全面分析词汇出现频率，支持词性筛选、正则匹配、词表匹配与多维可视化。',
    descriptionEn: 'Comprehensive word frequency analysis with POS filtering, regex and wordlist matching, and multi-dimensional visualization.',
    icon: 'word-frequency.png',
    color: '#10B981', // Green
    image: '/images/word-frequency.png',
    content: `
# 词频统计

词频统计模块基于 SpaCy 标注数据，提供深度、灵活的词汇频率分析，也是许多分析流程的第一步。

## 核心功能

### 灵活的数据源
- **语料库 / 文献库**：可选择语料库，也可选择文献库（分析其摘要影子语料）。
- **全部文本**：一键分析整个语料库。
- **按标签筛选**：只分析包含特定标签的文本。
- **手动选择**：精确选择一个或多个文本。

### 精确的词性筛选
基于 Universal POS 标签集，支持两种模式：
- **保留模式**：只统计选定的词性（如只看名词和动词）。
- **过滤模式**：排除选定的词性（如排除标点）。
- **分类选择**：词性分为实词、虚词和其他三类，便于快速勾选。

### 高级搜索配置
- **统计目标**：按「词形」（Word）或「词根」（Lemma）统计。
- **大小写**：可选择是否统一转为小写。
- **频率范围**：设置最小与最大频率阈值。
- **搜索类型**：全部、开头匹配、结尾匹配、包含匹配、正则表达式、词表匹配（每行一个词）。
- **排除词语**：每行一个，支持正则表达式；也可开启停用词过滤（20 多种语言）。

### 结果展示与可视化
- **交互式表格**：排名、频率、百分比，可排序、搜索、分页（10/25/50/100 条）、多选、复制与导出 CSV。
- **柱状图**：展示前 N 个高频词。
- **饼图**（环形图）：展示词频占比。
- **词云图**：D3.js 默认引擎，另有旧版引擎支持自定义蒙版形状；可导出 SVG / PNG。

### 跨模块联动
结果表中的词语可一键跳转到语境索引、搭配分析、词图分析、N-gram、语义域分析等模块，并携带当前语料与筛选条件。模块左栏还提供 AI 助手，可就当前结果提问。

## 使用场景
- **文体分析**：比较不同文本的词汇丰富度和用词偏好。
- **教学研究**：筛选高频词汇制作教学词表。
- **话语分析**：通过关键词频发现文本的关注焦点。
    `,
    contentEn: `
# Word Frequency

The Word Frequency module provides deep and flexible lexical frequency analysis based on SpaCy annotation data, and is the first step of many analysis workflows.

## Core Features

### Flexible Data Sources
- **Corpus or bibliography library**: analyze a corpus, or a bibliography library (its abstract shadow corpus).
- **Full corpus**: analyze the entire corpus with one click.
- **Tag filtering**: analyze only texts with specific tags.
- **Manual selection**: pick one or more specific texts.

### Precise POS Filtering
Based on Universal POS tags, with two modes:
- **Keep mode**: count only selected POS tags (e.g., nouns and verbs only).
- **Filter mode**: exclude selected POS tags (e.g., punctuation).
- **Categorized selection**: tags are grouped into Content, Function and Other for quick selection.

### Advanced Search Configuration
- **Target**: count by word form or lemma.
- **Case**: optionally lowercase everything.
- **Frequency range**: set minimum and maximum thresholds.
- **Search types**: all, starts with, ends with, contains, regex, wordlist (one word per line).
- **Exclusions**: one per line, regular expressions supported; stop-word removal is also available (20+ languages).

### Results and Visualization
- **Interactive table**: rank, frequency and percentage; sort, search, paginate (10/25/50/100), multi-select, copy and export CSV.
- **Bar chart**: top-N high-frequency words.
- **Pie (donut) chart**: frequency proportions.
- **Word cloud**: default D3.js engine, plus a legacy engine that supports custom mask shapes; export as SVG / PNG.

### Cross-module Links
Words in the result table link directly to Concordance, Collocation Analysis, Word Sketch, N-gram and Semantic Domain analysis, carrying the current corpus and filters. An AI assistant button in the left panel lets you ask questions about the current results.

## Use Cases
- **Stylistic Analysis**: Compare vocabulary richness and preferences across texts.
- **Pedagogical Research**: Filter high-frequency words for teaching vocabulary lists.
- **Discourse Analysis**: Discover text focus through keyword frequencies.
    `
  },
  {
    id: 'synonym-analysis',
    title: '同义词分析',
    titleEn: 'Synonym Analysis',
    description: '基于 NLTK WordNet 词典，识别语料库或文献库中真实出现的同义词关系，网络图与树状图可视化。',
    descriptionEn: 'Find synonym relations that actually occur in your corpus or library using NLTK WordNet, with network and tree visualizations.',
    icon: 'synonym-analysis.png',
    color: '#F59E0B', // Amber
    image: '/images/synonym-analysis.png',
    content: `
# 同义词分析

同义词分析模块（也称词族分析）基于 NLTK WordNet 词典，识别语料库中词语的同义词关系。它支持与词频统计一致的**语料库 / 文献库**统一选择，结果只保留**在所选语料中实际出现过的同义词**（与词典同义关系取交集），便于发现词汇替换模式与语义关联。

## 分析原理

### 技术基础
- **NLTK WordNet**：普林斯顿大学开发的英语词汇数据库。
- **Open Multilingual Wordnet**：多语言 WordNet 扩展。
- **词性映射**：把 SpaCy 的 Universal POS 映射为 WordNet 词性（名词、动词、形容词、副词）。

### 匹配流程
1. 根据词语及其词性查询 WordNet 同义词集（synsets）。
2. 从每个 synset 中提取全部词元（lemmas）作为候选同义词。
3. 与所选语料取交集，只保留语料中真实出现的同义词，并给出它们的出现频次。

## 配置与结果

### 配置
- **数据源**：语料库（全部 / 按标签 / 手动）或文献库（全部 / 按关键词 / 手动勾选）。
- **词性**：自动（推荐）、形容词、副词、名词、动词、代词（WordNet 对代词支持有限）。
- **搜索与阈值**：搜索查询（模糊匹配，留空为全部）、最小频率、最大结果数。

### 结果表格
词语、词元、词性、频率、同义词数量与同义词列表；点击展开可按**同义词**逐条查看对应的义项释义，每个同义词都带有跨模块链接菜单。

### 可视化
- **网络图**：力导向图展示词语—同义词关系，可调最大节点数、配色，悬停显示语义定义。
- **树状图**：根节点 → 词语 → 同义词集 → 同义词的层级结构。
- 均可导出 SVG / PNG。

### 跨模块联动
可从结果跳转到词频统计、语境索引、搭配分析、词图分析、N-gram、语义域分析；来自文献库时会保留文献库选择。

## 使用场景
- **词汇教学**：帮助学习者扩展词汇量，理解近义词辨析。
- **翻译研究**：寻找更地道、更精准的译词。
- **语义网络构建**：发现语料库中的词汇语义关联。

> 同义词来自 WordNet 词典而非语料内部计算，主要支持英语。
    `,
    contentEn: `
# Synonym Analysis

The Synonym Analysis module (also called word family analysis) uses the NLTK WordNet dictionary to identify synonym relations in a corpus. It supports the same unified **corpus / bibliography library** selector as Word Frequency, and keeps only synonyms **that actually occur in the selected data** (the intersection with the dictionary), revealing substitution patterns and semantic links.

## How It Works

### Technical Foundation
- **NLTK WordNet**: English lexical database from Princeton University.
- **Open Multilingual Wordnet**: multilingual WordNet extension.
- **POS mapping**: SpaCy Universal POS tags are mapped to WordNet POS (noun, verb, adjective, adverb).

### Matching Process
1. Query WordNet synsets by word and POS.
2. Extract all lemmas from each synset as candidate synonyms.
3. Intersect with the selected data, keeping only synonyms that really occur and reporting their frequencies.

## Configuration and Results

### Configuration
- **Data source**: a corpus (all / by tag / manual) or a bibliography library (all / by keyword / manual).
- **POS**: auto (recommended), adjective, adverb, noun, verb, pronoun (WordNet support for pronouns is limited).
- **Search and thresholds**: search query (fuzzy match, empty for all), minimum frequency, maximum results.

### Result Table
Word, lemma, POS, frequency, number of synonyms and the synonym list; expand a row to see sense definitions per synonym, each with its own cross-module link menu.

### Visualization
- **Network graph**: force-directed graph of word–synonym relations with adjustable node limit and color scheme; hover for definitions.
- **Tree diagram**: root → word → synset → synonym hierarchy.
- Both export to SVG / PNG.

### Cross-module Links
Jump from results to Word Frequency, Concordance, Collocation Analysis, Word Sketch, N-gram and Semantic Domain analysis; library selection is preserved when coming from a bibliography library.

## Use Cases
- **Vocabulary Teaching**: Help learners expand vocabulary and understand synonym nuances.
- **Translation Studies**: Find more authentic and precise translation equivalents.
- **Semantic Network Construction**: Discover vocabulary semantic associations in corpora.

> Synonyms come from the WordNet dictionary rather than being computed from the corpus; English is the main supported language.
    `
  },
  {
    id: 'keyword-extraction',
    title: '关键词提取',
    titleEn: 'Keyword Extraction',
    description: 'TF-IDF、TextRank、YAKE!、RAKE 四种单文档算法，以及词形 / 词元 / USAS 语义域三种模式的关键性对比，内置 16 个参考语料库。',
    descriptionEn: 'Four single-document algorithms (TF-IDF, TextRank, YAKE!, RAKE) plus keyness comparison in word, lemma or USAS domain mode, with 16 built-in reference corpora.',
    icon: 'keyword-extraction.png',
    color: '#8B5CF6', // Violet
    image: '/images/keyword-extraction.png',
    content: `
# 关键词提取

关键词提取模块提供两种分析方式：**单文档算法**和**关键性对比**，帮助研究者从文本中发现核心词汇。两种方式均支持词性筛选、停用词与排除词（支持正则）、大小写处理，以及柱状图、饼图、词云三种可视化。

## 单文档算法

### TF-IDF（词频—逆文档频率）
- **原理**：以词在文档中的频率与其在整个语料库中的稀有程度之积衡量重要性。
- **适用**：多文档语料库，提取文档特有的重要词汇。
- **参数**：最大关键词数、最小 / 最大文档频率、N-gram 范围。

### TextRank
- **原理**：受 PageRank 启发，以词为节点、共现为边构建图，迭代计算重要性。
- **适用**：单个长文档，识别语义相关的关键词。
- **参数**：Top N、窗口大小、阻尼因子、最大迭代次数。

### YAKE!
- **原理**：无监督方法，综合词频、位置、词长、大小写与上下文关系等特征。
- **适用**：快速提取，无需训练数据。
- **参数**：Top N、最大 N-gram、去重阈值、窗口大小。

### RAKE
- **原理**：利用停用词与标点切分候选短语，按词的度与频率打分。
- **适用**：提取短语关键词，识别技术术语与专有名词。
- **参数**：Top N、最小 / 最大长度、最小频率。

## 关键性对比

比较研究语料库与参照语料库，找出在研究语料中显著过用或欠用的项目，支持三种模式：
- **词形模式**：按表层词形统计。
- **词元模式**：按 SpaCy 词元合并不同词形。
- **语义域模式（USAS）**：直接按 USAS 语义域代码对比，结果中悬停可见语义域全称，词云与图表以语义域名称为标签。

### 参照语料库的两种来源

**方式一：选择语料库文本**——全部文本 / 按标签 / 手动选择，适合使用自己导入的语料对比。

**方式二：语料库资源**——使用内置的预处理词频资源。默认参照为 AmE06；点击资源卡片打开选择窗口，可按名称搜索、按语料库类型与标签筛选，卡片显示词数与文件大小。

**内置语料库资源**：

| 语料库 | 说明 |
|--------|------|
| BNC 1994 | 英国国家语料库 1994 版（口语、书面语等多种体裁） |
| BNC 2014 | 英国国家语料库 2014 版（仅口语） |
| Brown | Brown 语料库（新闻、小说、学术等） |
| AmE06 / BE06 | 2006 年美式 / 英式英语平衡语料库 |
| NOW | News on the Web（2010–2024，按国家划分的新闻） |
| OANC | 开放美国国家语料库（多种体裁） |
| COCA | 当代美语语料库（1990–2019） |
| COHA | 历史美语语料库（1810–2009，按时期划分） |
| GloWbE | 全球网络英语语料库（按国家 / 地区划分） |
| Coronavirus | 新冠语料库（2020–2022，按国家划分） |
| iWeb | 智能网络语料库 |
| TV / Movies / SOAP | 电视、电影、肥皂剧口语语料库 |
| Wikipedia | 维基百科语料库 |

### 参考语料库的 USAS 标注
内置资源中的 USAS 语义域数据与用户语料一样，均由 PyMUSAS-Neural-Multilingual-Base-BEM（307M，topn=5）标注，语义域对比拥有一致的标注基准。该框架由兰卡斯特大学 UCREL 研究中心开发，详见 [PyMUSAS 文档](https://ucrel.github.io/pymusas/) 与 [HuggingFace 模型](https://huggingface.co/ucrelnlp/PyMUSAS-Neural-Multilingual-Base-BEM)。

### 九种统计方法
Log-Likelihood（推荐）、Chi-squared（Yates 校正）、Log Ratio（效应量）、Dice 系数、Mutual Information（偏向低频词）、MI³、T-score（偏向高频词）、Simple Keyness、Fisher's Exact（小样本）。

### 阈值与结果
- **频率阈值**：研究 / 参照语料库各自的最小频率。
- **统计阈值**：最小得分与最大 p 值（如 LL > 6.63 对应 p < 0.01）；Log Ratio 可设效应量阈值。
- **负关键词**：勾选后同时显示显著欠用的词。
- **结果表**：研究 / 参照频率与每百万词标准化频率、得分、效应量、p 值、显著性标记（***、**、*）与过用 / 欠用方向。

## 使用场景
- **文献综述**：快速提取大量文献的核心主题词。
- **语域分析**：对比不同语域的关键词差异。
- **时间对比**：分析不同时期语料的关键词变化。
    `,
    contentEn: `
# Keyword Extraction

The Keyword Extraction module offers two modes: **single-document algorithms** and **keyness comparison**, helping researchers discover core vocabulary. Both support POS filtering, stop words and exclusion lists (regex supported), case handling, and bar chart, pie chart and word cloud visualizations.

## Single-Document Algorithms

### TF-IDF
- **Principle**: importance is the product of a word's frequency in a document and its rarity across the corpus.
- **Use**: multi-document corpora, extracting document-specific important words.
- **Parameters**: max keywords, min/max document frequency, N-gram range.

### TextRank
- **Principle**: PageRank-inspired; words are nodes and co-occurrences are edges, with importance computed iteratively.
- **Use**: single long documents, identifying semantically related keywords.
- **Parameters**: Top N, window size, damping factor, max iterations.

### YAKE!
- **Principle**: unsupervised; combines frequency, position, length, case and context features.
- **Use**: quick extraction without training data.
- **Parameters**: Top N, max N-gram size, deduplication threshold, window size.

### RAKE
- **Principle**: splits candidate phrases at stop words and punctuation, scoring by word degree and frequency.
- **Use**: extracting phrase keywords, technical terms and proper nouns.
- **Parameters**: Top N, min/max length, min frequency.

## Keyness Comparison

Compare a study corpus with a reference corpus to find items that are significantly over- or under-used in the study corpus, in three modes:
- **Word form mode**: counts surface forms.
- **Lemma mode**: merges inflected forms using SpaCy lemmas.
- **Semantic domain mode (USAS)**: compares USAS domain codes directly; hover to see the full domain name, and word clouds and charts use domain names as labels.

### Two Sources for the Reference Corpus

**Option 1: Select corpus texts** — all / by tag / manual selection, for comparing against your own imported corpora.

**Option 2: Corpus resources** — built-in preprocessed frequency resources. The default reference is AmE06; click the resource card to open the picker, search by name, filter by corpus type and tag; cards show word count and file size.

**Built-in corpus resources**:

| Corpus | Description |
|--------|-------------|
| BNC 1994 | British National Corpus 1994 (spoken, written and many genres) |
| BNC 2014 | British National Corpus 2014 (spoken only) |
| Brown | Brown Corpus (news, fiction, academic, etc.) |
| AmE06 / BE06 | American / British English 2006 balanced corpora |
| NOW | News on the Web (2010–2024, news by country) |
| OANC | Open American National Corpus (multiple genres) |
| COCA | Corpus of Contemporary American English (1990–2019) |
| COHA | Corpus of Historical American English (1810–2009, by period) |
| GloWbE | Global Web-based English (by country/region) |
| Coronavirus | Coronavirus Corpus (2020–2022, by country) |
| iWeb | Intelligent Web-based Corpus |
| TV / Movies / SOAP | Spoken-language corpora of television, films and soap operas |
| Wikipedia | Wikipedia Corpus |

### USAS Annotation of Reference Corpora
USAS semantic-domain data in the built-in resources is produced by the same PyMUSAS-Neural-Multilingual-Base-BEM model (307M, topn=5) used for your own corpora, so domain-level keyness has a consistent tagging baseline. The framework was developed by Lancaster University's UCREL; see the [PyMUSAS docs](https://ucrel.github.io/pymusas/) and the [HuggingFace model](https://huggingface.co/ucrelnlp/PyMUSAS-Neural-Multilingual-Base-BEM).

### Nine Statistical Methods
Log-Likelihood (recommended), Chi-squared (Yates-corrected), Log Ratio (effect size), Dice coefficient, Mutual Information (favors low-frequency items), MI³, T-score (favors high-frequency items), Simple Keyness, and Fisher's Exact (small samples).

### Thresholds and Results
- **Frequency thresholds**: minimum frequency for the study and reference corpora separately.
- **Statistical thresholds**: minimum score and maximum p-value (e.g., LL > 6.63 corresponds to p < 0.01); an effect-size threshold is available for Log Ratio.
- **Negative keywords**: tick to also show significantly under-used words.
- **Result table**: study/reference frequencies and per-million normalized frequencies, score, effect size, p-value, significance marks (***, **, *) and over-/under-use direction.

## Use Cases
- **Literature Review**: Extract core themes from large bodies of literature.
- **Register Analysis**: Compare keyword differences across registers.
- **Temporal Analysis**: Analyze keyword changes over time periods.
    `
  },
  {
    id: 'ngram-analysis',
    title: 'N-gram分析',
    titleEn: 'N-gram Analysis',
    description: '统计连续 2–6 词组合的频率，支持 Nest 分组与四种可视化，发现固定短语与词语搭配。',
    descriptionEn: 'Count 2–6 word sequences with Nest grouping and four visualizations to discover fixed phrases and collocation patterns.',
    icon: 'ngram-analysis.png',
    color: '#EC4899', // Pink
    image: '/images/ngram-analysis.png',
    content: `
# N-gram 分析

N-gram 分析模块基于 SpaCy 标注数据，统计语料库中连续 N 个词语的组合频率，是研究词语搭配、词块与短语模式的重要工具。

## 核心功能

### 多阶 N-gram
- **2–6 元**：二元组到六元组，可同时选择多个 N 值，结果合并显示并标注各自的 N 值。
- **Nest N-gram 分组**：把较短的 N-gram 归入包含它的较长 N-gram 之下，点击展开即可看到短语的扩展与组成关系（需选择多个 N 值）。

### 搜索与筛选
- **词性筛选**：基于 Universal POS，支持保留 / 过滤模式（要求 N-gram 中所有词都满足条件）。
- **频率范围**：最小 / 最大频率（默认最小为 2）。
- **最小词长**：N-gram 中每个词的最小字符数。
- **搜索类型**：全部、开头匹配、结尾匹配、包含匹配、包含词语（整词匹配）、正则表达式、词表匹配。
- **排除词语**：每行一个，支持正则表达式。

### 结果与可视化
- **结果表**：N-gram、N 值标签、频率、百分比，可排序、搜索、复制、导出 CSV；可跳转到语境索引查看实际用例。
- **柱状图**：前 N 个高频 N-gram。
- **网络图**：力导向图展示 N-gram 之间的关联。
- **桑基图**：展示 N-gram 的流动与转换模式，尤其适合多 N 值分析。
- **词云图**：展示整体 N-gram 分布。

## 语言学应用
- **搭配与词块**：识别词语之间的习惯性搭配与词汇束。
- **短语模式发现**：发现固定短语和表达式。
- **语言风格分析**：比较不同语体或作者的语言习惯。
- **语法模式研究**：研究词性序列和句法模式。
    `,
    contentEn: `
# N-gram Analysis

The N-gram Analysis module, based on SpaCy annotation data, counts the frequency of N consecutive words in the corpus—an essential tool for studying collocations, lexical bundles and phrase patterns.

## Core Features

### Multi-order N-grams
- **2–6 grams**: bigrams to hexagrams; select several N values at once, with merged results labeled by N.
- **Nest N-gram grouping**: groups shorter N-grams under the longer N-grams that contain them; expand a row to see how phrases extend and are composed (requires multiple N values).

### Search and Filtering
- **POS filtering**: based on Universal POS, with keep / filter modes (all words in the N-gram must satisfy the condition).
- **Frequency range**: minimum / maximum frequency (minimum defaults to 2).
- **Minimum word length**: minimum characters per word in an N-gram.
- **Search types**: all, starts with, ends with, contains, contains word (whole-word match), regex, wordlist.
- **Exclusions**: one per line, regular expressions supported.

### Results and Visualization
- **Result table**: N-gram, N label, frequency and percentage; sort, search, copy and export CSV; jump to Concordance to see actual examples.
- **Bar chart**: top-N high-frequency N-grams.
- **Network graph**: force-directed graph of relationships between N-grams.
- **Sankey diagram**: flow and transition patterns between N-grams, especially suited to multi-N analysis.
- **Word cloud**: overall N-gram distribution.

## Linguistic Applications
- **Collocations and lexical bundles**: Identify habitual word combinations.
- **Phrase pattern discovery**: Discover fixed phrases and expressions.
- **Stylistic analysis**: Compare language habits across registers or authors.
- **Grammatical pattern research**: Study POS sequences and syntactic patterns.
    `
  },
  {
    id: 'collocation-analysis',
    title: '语境索引',
    titleEn: 'Concordance',
    description: 'KWIC 关键词语境检索，六种搜索模式，自建 CQL 查询引擎与可视化构建器，多级排序、筛选与分布可视化。',
    descriptionEn: 'KWIC concordancing with six search modes, a built-in CQL query engine with a visual builder, multi-level sorting, filtering and dispersion plots.',
    icon: 'collocation-analysis.png',
    color: '#EF4444', // Red
    image: '/images/collocation-analysis.png',
    content: `
# 语境索引

语境索引（Concordance）模块提供 KWIC（Key Word In Context，关键词在语境中）检索，帮助您查找并分析语料库中特定词语或模式的出现情况。它内置参考 Sketch Engine 标准自建的 CQL（Corpus Query Language，语料库查询语言）引擎，并配有可视化的 CQL 构建器。

## 六种搜索模式

- **Simple（简单搜索）**：支持通配符，* 匹配任意字符，? 匹配单个字符，| 表示或，-- 同时匹配带或不带连字符的写法。
- **Lemma（词元搜索）**：按词元检索，自动匹配所有变体（如 go、goes、went、going、gone），支持正则。
- **Phrase（短语搜索）**：精确匹配短语，支持多行输入和正则。
- **Word（词形搜索）**：精确匹配词形，区分大小写。
- **Character（字符搜索）**：搜索包含特定字符或字符串的词语。
- **CQL**：高级查询，带实时语法验证。

## CQL 查询语言

### 基础语法
- 属性：word（词形）、lemma（词元）、pos（Universal POS）、tag（Penn Treebank 细粒度词性）、dep（依存关系）、usas（USAS 语义域）、nrc（NRC 情感标签）。
- 运算符：& 与、| 或、! 非；[] 任意 token，[]{1,3} 表示 1–3 个任意 token；支持正则。
- 示例：[lemma="make"] [] [pos="NOUN"] 匹配「make + 任意词 + 名词」；[usas="A1"] 按语义域前缀匹配，[usas=="N3.8+"] 精确匹配。

### 高级运算符
- **within / !within**：P 出现（或不出现）在 Q 所定义的区间内。
- **containing / !containing**：配合 <s/> 等结构标记，筛选包含（或不包含）某内容的句子。
- **meet**：两个条件在指定的左右词距内共现。
- **词图模板 ws()**：基于依存关系的搭配匹配，如 [ws(make,object,decision)]，内置 41 种语法关系。
- **结构标记**：<s>、</s>、<s/>（句子）、<p>（段落）、<doc>（文档，可按属性过滤）；<s/>{2,3} 可按句子重复次数筛选。

### CQL 构建器
不熟悉语法时，可用可视化构建器逐个添加 token 条件、选择属性（含 NRC 情感标签）与逻辑 / 高级运算符，实时预览查询，并保存常用模板。从词图分析、搭配分析等模块跳转过来时，会自动生成对应的 CQL。

## 检索设置
- **词性筛选**：支持 Universal POS、Penn Treebank 与依存关系三套标签，保留或过滤模式。
- **上下文长度**：左右各 1–15 词（默认 5）。
- **大小写**：可忽略大小写（CQL 模式除外）。
- **数据源**：语料库全部文本 / 按标签 / 手动选择。

## 结果功能
- **KWIC 表格**：来源、左右上下文（最近 3 个词用不同颜色标记）、关键词（高亮）、词性。
- **扩展上下文**：点击展开查看更长的上下文（默认 ±200 字符，可继续向前 / 向后扩展）。
- **多级排序**：最多 3 级，按左 / 右侧 1–3 位或关键词本身的词形、词元、词性排序，支持忽略大小写与逆向排序。
- **高级筛选**：隐藏子匹配（同一位置去重）、仅每文档首次匹配、按查询条件包含 / 排除。
- **高亮隐喻**：开关启用后，已被标注为隐喻的关键词以琥珀色背景高亮（仅英语语料）。
- **导出与分页**：导出 CSV（UTF-8 BOM），10/20/50/100 条每页。

## 可视化
- **密度分布图**：关键词在文本中位置的分布密度。
- **分组山脊图**：按文档分组比较分布曲线。
- **离散度图**：每个文档一行，用刻度线标出命中位置，点击刻度可定位到结果表对应行。
- 均可导出 SVG / PNG。

## 使用场景
- **词语用法考察**：通过大量真实语境理解词义与用法。
- **语法与词汇模式**：用 CQL 检索被动式、搭配结构、语义域或情感标签。
- **分布分析**：观察术语在不同文档、不同位置的分布。
    `,
    contentEn: `
# Concordance

The Concordance module provides KWIC (Key Word In Context) search to find and analyze occurrences of specific words or patterns in a corpus. It ships with a built-in CQL (Corpus Query Language) engine modeled on the Sketch Engine standard, plus a visual CQL builder.

## Six Search Modes

- **Simple**: wildcards—* matches any characters, ? matches one character, | is OR, and -- matches a word with or without a hyphen.
- **Lemma**: search by lemma, automatically matching all variants (e.g., go, goes, went, going, gone); regex supported.
- **Phrase**: exact phrase matching, multi-line input and regex supported.
- **Word**: exact word-form matching, case-sensitive.
- **Character**: find words containing specific characters or strings.
- **CQL**: advanced queries with real-time syntax validation.

## The CQL Query Language

### Basics
- Attributes: word, lemma, pos (Universal POS), tag (fine-grained Penn Treebank POS), dep (dependency relation), usas (USAS semantic domain), nrc (NRC emotion label).
- Operators: & AND, | OR, ! NOT; [] any token, []{1,3} one to three arbitrary tokens; regular expressions supported.
- Examples: [lemma="make"] [] [pos="NOUN"] matches "make + any word + noun"; [usas="A1"] matches by domain prefix, [usas=="N3.8+"] matches exactly.

### Advanced Operators
- **within / !within**: P occurs (or does not occur) inside the span defined by Q.
- **containing / !containing**: used with structure markers such as <s/> to select sentences that contain (or lack) something.
- **meet**: two conditions co-occurring within given left/right distances.
- **Word Sketch template ws()**: dependency-based collocate matching, e.g. [ws(make,object,decision)], with 41 built-in grammatical relations.
- **Structure markers**: <s>, </s>, <s/> (sentence), <p> (paragraph), <doc> (document, filterable by attribute); <s/>{2,3} filters by how many times a sentence repeats.

### CQL Builder
If you are not familiar with the syntax, use the visual builder to add token conditions one by one, pick attributes (including NRC emotion labels) and logical or advanced operators, preview the query live, and save templates. When you jump here from Word Sketch or Collocation Analysis, the matching CQL is generated for you.

## Search Settings
- **POS filter**: Universal POS, Penn Treebank and dependency-relation tag sets, in keep or filter mode.
- **Context length**: 1–15 words per side (default 5).
- **Case**: can be ignored (except in CQL mode).
- **Data source**: all texts in a corpus, by tag, or manual selection.

## Result Features
- **KWIC table**: source, left and right context (the nearest 3 words color-coded), highlighted keyword, POS.
- **Extended context**: expand a row for longer context (±200 characters by default, extendable in both directions).
- **Multi-level sorting**: up to 3 levels, by word, lemma or POS at positions 1–3 left/right or the keyword itself, with case-insensitive and retrograde options.
- **Advanced filtering**: hide sub-hits (de-duplicate at the same position), only the first hit per document, and include/exclude by query.
- **Highlight metaphor**: when enabled, keywords already annotated as metaphors get an amber background (English corpora only).
- **Export and paging**: export CSV (UTF-8 BOM), 10/20/50/100 rows per page.

## Visualization
- **Density plot**: density of keyword positions across texts.
- **Ridge plot**: compare distribution curves grouped by document.
- **Dispersion plot**: one row per document with tick marks at each hit; click a tick to jump to the matching row in the table.
- All export to SVG / PNG.

## Use Cases
- **Word usage study**: understand meaning and usage through many authentic contexts.
- **Grammatical and lexical patterns**: use CQL to search passives, collocational frames, semantic domains or emotion labels.
- **Distribution analysis**: see how a term is distributed across documents and positions.
    `
  },
  {
    id: 'semantic-field',
    title: '话语分析',
    titleEn: 'Discourse Analysis',
    description: '四大分析：USAS 语义域、MIPVU 隐喻（五步流水线，F1 82.29）、DMIP 刻意隐喻、Biber 多维分析（MDA）。',
    descriptionEn: 'Four analyses in one: USAS semantic domains, MIPVU metaphor (five-step pipeline, F1 82.29), DMIP deliberate metaphor, and Biber multidimensional analysis (MDA).',
    icon: 'semantic-field.png',
    color: '#14B8A6', // Teal
    image: '/images/semantic-field.png',
    content: `
# 话语分析

话语分析模块（原「语义分析」）提供话语层面的四类分析：基于 USAS 的**语义域分析**、基于 MIPVU 的**隐喻分析**、基于刻意隐喻理论的 **DMIP 刻意隐喻分析**，以及基于 Biber (1988) 框架的**多维分析（MDA）**。

---

## 语义域分析（USAS）

语义域分析基于 USAS（UCREL Semantic Analysis System）标注数据，对语料中的词语做语义分类与统计。

### USAS 标注
- **模型**：PyMUSAS-Neural-Multilingual-Base-BEM（307M 参数），支持英语、中文、丹麦语、荷兰语、芬兰语、法语、意大利语、葡萄牙语、俄语、西班牙语、瑞典语 11 种语言。
- **Top-5 预测**：每个词输出最多 5 个按上下文相似度排序的候选标签；统计使用主标签，全部候选标签都可通过 CQL 检索。
- **准确率（PyMUSAS 官方，Top-1 / Top-5）**：英语 70.2 / 90.1，中文 47.9 / 70.4。
- **参考**：[PyMUSAS 文档](https://ucrel.github.io/pymusas/)、Hybrid 方法论文 arXiv:2601.09648。

### 语义域系统
- **21 个主要大类**：A 通用与抽象术语、B 身体与个体、C 艺术与工艺、E 情感、F 食物与农业、G 政府与公共、H 建筑与家居、I 金钱与商业、K 娱乐体育、L 生命与生物、M 移动与交通、N 数字与测量、O 物质与物体、P 教育、Q 语言与交际、S 社会、T 时间、W 世界与环境、X 心理、Y 科学与技术、Z 名称与语法词。
- **标签后缀**：+ / - 表示正面 / 负面，++ / -- 表示强烈程度，_MWE 表示多词表达式；复合标签（如 N3.8+/A2.1）的各部分分别计数。

### 结果与可视化
- **按语义域**：语义域代码、名称、所属大类、频率与占比；点击可查看该域包含的全部词语并导出 CSV。
- **按词语**：词语—语义域组合的频率；支持「高亮隐喻词」开关（隐喻词绿色加粗，需已完成隐喻标注）。
- **词性、搜索与排除**：词性筛选、频率范围、六种搜索类型、排除词（支持正则）。
- **可视化**：柱状图、饼图、词云，均以语义域名称显示。
- **跨模块联动**：可跳转到语境索引（以语义域为条件的 CQL）、词图分析、N-gram 等。

---

## 隐喻分析（仅英语）

隐喻分析基于 MIPVU（Metaphor Identification Procedure VU）：词的**语境义**与其更具体、更身体化或历史更早的**基本义**不同，但可通过对比理解时，判定为隐喻相关词。

### 四类隐喻标记
| 类型 | 颜色 | 说明 |
|------|------|------|
| 间接隐喻（MRW） | 绿色 | 通过跨域对比隐性使用的词，最常见 |
| 直接隐喻 | 粉色 | 以对比形式明示的隐喻，需与隐喻信号词共现 |
| 隐喻信号词（MFlag） | 紫色 | like、as、resemble 等明确标记对比的词 |
| 隐性隐喻 | 橙色 | 通过代词替代或 VP 省略继承先行隐喻性的衔接形式 |

### 五步检测流水线
1. **词形过滤**：基于 VUA 语料统计的 1,098 个高频非隐喻词 / 词组。
2. **SpaCy 规则过滤**：数词、专有名词、符号、不定式 to，以及字面率超过 99% 的依存—词形组合。
3. **间接隐喻模型**：metalingo-indirect-metaphor（DeBERTa-v3-large，经 BE06 → VUAMC 两阶段知识蒸馏 / 微调），以完整句子为上下文逐词二分类。
4. **直接隐喻模型**：metalingo-direct-metaphor（可选），仅对含 MFlag 候选词的句子运行，输出 mFlag / 直接隐喻；直接隐喻仅在同句存在 MFlag 时生效（MIPVU 规则）。
5. **隐性隐喻规则后处理**：识别 VP 省略与代词替代两类衔接形式，并关联到先行间接隐喻词。

### 检测可靠性（VUAMC，NAACL FLP 2018 划分）
| 模型 | 指标 |
|------|------|
| 间接隐喻 | F1 82.29，Precision 85.26%，Recall 79.53%，Accuracy 96.04% |
| 直接隐喻 / MFlag | 句子级 F1 88.03%，词级综合 F1 76.52% |

模型可在「应用设置 → 模型管理」下载：[metalingo-indirect-metaphor](https://www.modelscope.cn/models/TommyLeo/metalingo-indirect-metaphor)、[metalingo-direct-metaphor](https://www.modelscope.cn/models/TommyLeo/metalingo-direct-metaphor)。

### 结果呈现
- **表格视图**：词语（带彩色类型角标）、词元、词性、频率、占比与类型。
- **文本视图**：在原文中高亮显示隐喻词。
- **统计角标**：总词数、间接 / 直接 / 隐喻标记 / 隐性计数与隐喻率，以及 IN/DT/RB/RP 等词性组的隐喻率。
- **可视化与导出**：柱状图、饼图、词云；导出 CSV、SVG、PNG。
- **联动**：语境索引与标注模式可直接使用隐喻标注结果。自动标注结果为机器判断，建议结合人工校验。

---

## 刻意隐喻分析（DMIP）

DMIP 超越「哪些词被隐喻性使用」，进一步追问：说话者是否**刻意**邀请读者借助来源域这一异质视角理解目标域？它基于 Steen（2023）的刻意隐喻理论（Deliberate Metaphor Theory）。

- **四维分析**：语言维度（直接 / 间接、是否带信号词）、概念维度（从生产者视角判断新颖或常规）、指称维度（来源域是否进入合格原始读者的情境模型，核心判据）、交际维度（体裁、目的与扩展隐喻语境）。
- **话语层面特征**：扩展隐喻、限制性隐喻、嵌入式隐喻与文字游戏等。
- **使用方式**：在 AI 对话模式（或通过 MCP 连接的 AI 助手）中调用 dmip_analysis 工具；基于语料库的 MIPVU 标注或已保存的隐喻标注存档，由 AI 逐个 MRW 输出结构化判断与证据。

---

## 多维分析（MDA，仅英语）

多维分析是 Biber (1988) 提出的语域变异分析框架：统计文本中 67 项词汇语法特征的频率，经标准化后得到六个维度得分，并判定最接近的文本类型。算法移植自 MAT（Multidimensional Analysis Tagger），直接基于已有的 SpaCy 标注运行，无需重新处理文本。

- **六个维度**：D1 参与性 vs 信息性表达、D2 叙事性 vs 非叙事性、D3 明晰指称 vs 情境依赖指称、D4 显性劝说表达、D5 抽象 vs 非抽象信息、D6 即时信息扩展。
- **参数**：TTR 计算窗口（默认 400 形符）、z 分数修正、排除特征。
- **结果**：每篇文本的维度得分与最近文本类型；67 项特征的频率、Biber 常模与 z 分数；展开可查看主要贡献词。
- **可视化**：维度对比图、文本类型图（Biber 八种文本类型）、特征 z 分数图；CSV 导出对齐 MAT 输出。

---

## 引用与致谢
- Steen, G. et al. (2010). *A method for linguistic metaphor identification: From MIP to MIPVU*. John Benjamins.
- Steen, G. (2023). *Deliberate Metaphor Theory*. Cambridge University Press.
- Biber, D. (1988). *Variation across Speech and Writing*. Cambridge University Press.
- Nini, A. (2019). The Multi-Dimensional Analysis Tagger. Bloomsbury Academic.
    `,
    contentEn: `
# Discourse Analysis

The Discourse Analysis module (formerly "Semantic Analysis") offers four kinds of discourse-level analysis: USAS-based **semantic domain analysis**, MIPVU-based **metaphor analysis**, **DMIP deliberate metaphor analysis** based on Deliberate Metaphor Theory, and **Multidimensional Analysis (MDA)** following Biber (1988).

---

## Semantic Domain Analysis (USAS)

Semantic domain analysis classifies and counts words by USAS (UCREL Semantic Analysis System) semantic domains.

### USAS Tagging
- **Model**: PyMUSAS-Neural-Multilingual-Base-BEM (307M parameters), supporting 11 languages: English, Chinese, Danish, Dutch, Finnish, French, Italian, Portuguese, Russian, Spanish and Swedish.
- **Top-5 prediction**: each word gets up to 5 candidate tags ranked by contextual similarity; statistics use the top tag, while all candidates are searchable through CQL.
- **Accuracy (official PyMUSAS, Top-1 / Top-5)**: English 70.2 / 90.1, Chinese 47.9 / 70.4.
- **References**: [PyMUSAS docs](https://ucrel.github.io/pymusas/), hybrid-method paper arXiv:2601.09648.

### The Semantic Domain System
- **21 major categories**: A General & Abstract Terms, B Body & Individual, C Arts & Crafts, E Emotion, F Food & Farming, G Government & Public, H Architecture & Housing, I Money & Commerce, K Entertainment & Sports, L Life & Living Things, M Movement & Transport, N Numbers & Measurement, O Substances & Objects, P Education, Q Language & Communication, S Social, T Time, W World & Environment, X Psychological, Y Science & Technology, Z Names & Grammatical Words.
- **Tag suffixes**: + / - mark positive / negative, ++ / -- mark intensity, _MWE marks multi-word expressions; each part of a compound tag (e.g., N3.8+/A2.1) is counted separately.

### Results and Visualization
- **By domain**: domain code, name, major category, frequency and share; click to see all words in a domain and export them as CSV.
- **By word**: frequencies of word–domain pairs; a "Highlight metaphor words" toggle shows metaphor words in bold green (requires metaphor annotation).
- **POS, search and exclusions**: POS filter, frequency range, six search types, exclusion words (regex supported).
- **Visualization**: bar chart, pie chart and word cloud, all labeled with domain names.
- **Cross-module links**: jump to Concordance (a CQL query for the domain), Word Sketch, N-gram and more.

---

## Metaphor Analysis (English only)

Metaphor analysis follows MIPVU (Metaphor Identification Procedure VU): a word is metaphor-related when its **contextual meaning** differs from a more concrete, bodily or historically earlier **basic meaning** yet can be understood by comparison.

### Four Types of Metaphor Marking
| Type | Color | Description |
|------|-------|-------------|
| Indirect metaphor (MRW) | Green | Words used implicitly through cross-domain comparison; the most common type |
| Direct metaphor | Pink | Metaphors stated explicitly as comparisons; require a co-occurring metaphor flag |
| Metaphor flag (MFlag) | Purple | Signal words such as like, as, resemble that mark a comparison |
| Implicit metaphor | Orange | Cohesive forms (pronoun substitution, VP ellipsis) that inherit an antecedent's metaphoricity |

### Five-step Detection Pipeline
1. **Word-form filter**: 1,098 high-frequency, always-literal words/phrases derived from VUA statistics.
2. **SpaCy rule filter**: numerals, proper nouns, symbols, infinitive "to", and dependency–word combinations that are more than 99% literal.
3. **Indirect metaphor model**: metalingo-indirect-metaphor (DeBERTa-v3-large, two-stage knowledge distillation BE06 → VUAMC), classifying every word with the full sentence as context.
4. **Direct metaphor model**: metalingo-direct-metaphor (optional), run only on sentences containing MFlag candidates and outputting mFlag / direct metaphor; direct metaphors count only when an MFlag occurs in the same sentence (a MIPVU rule).
5. **Rule-based implicit metaphor post-processing**: detects VP ellipsis and pronoun substitution and links them to the antecedent indirect-metaphor word.

### Reliability (VUAMC, NAACL FLP 2018 split)
| Model | Metrics |
|-------|---------|
| Indirect metaphor | F1 82.29, Precision 85.26%, Recall 79.53%, Accuracy 96.04% |
| Direct metaphor / MFlag | Sentence-level F1 88.03%, token-level combined F1 76.52% |

Models can be downloaded in Settings → Model Management: [metalingo-indirect-metaphor](https://www.modelscope.cn/models/TommyLeo/metalingo-indirect-metaphor) and [metalingo-direct-metaphor](https://www.modelscope.cn/models/TommyLeo/metalingo-direct-metaphor).

### Result Views
- **Table view**: word (with colored type badges), lemma, POS, frequency, share and type.
- **Text view**: metaphor words highlighted in the original text.
- **Statistic badges**: total words, indirect / direct / flag / implicit counts, metaphor rate, and metaphor rates for POS groups such as IN/DT/RB/RP.
- **Visualization and export**: bar chart, pie chart, word cloud; export CSV, SVG, PNG.
- **Integration**: Concordance and Annotation Mode can use the metaphor annotations directly. Automatic annotations are machine judgments and should be checked manually.

---

## Deliberate Metaphor Analysis (DMIP)

DMIP goes beyond "which words are used metaphorically" to ask whether the speaker **deliberately** invites the reader to view the target domain through the source domain as a foreign perspective. It builds on Steen's (2023) Deliberate Metaphor Theory.

- **Four dimensions**: linguistic (direct vs. indirect, signaled or not), conceptual (novel or conventional, judged from the producer's perspective), referential (whether the source domain enters the situation model of a qualified original reader—the core criterion), and communicative (genre, purpose and extended-metaphor context).
- **Discourse-level features**: extended metaphor, limiting metaphor, embedded metaphor and wordplay.
- **How to use**: call the dmip_analysis tool in AI Agent Mode (or from an AI assistant connected through MCP); based on the corpus MIPVU annotations or a saved metaphor annotation archive, the AI outputs a structured judgment with evidence for each MRW.

---

## Multidimensional Analysis (MDA, English only)

MDA is the register-variation framework proposed by Biber (1988): it counts 67 lexicogrammatical features per text, standardizes them into six dimension scores, and finds the closest text type. The algorithm is ported from MAT (Multidimensional Analysis Tagger) and runs directly on existing SpaCy annotations, with no reprocessing of the texts.

- **Six dimensions**: D1 involved vs. informational production, D2 narrative vs. non-narrative concerns, D3 explicit vs. situation-dependent reference, D4 overt expression of persuasion, D5 abstract vs. non-abstract information, D6 on-line informational elaboration.
- **Parameters**: TTR window (400 tokens by default), z-score correction, excluded features.
- **Results**: dimension scores and nearest text type per text; frequencies, Biber norms and z-scores for 67 features; expand a feature to see its top contributing words.
- **Visualization**: dimension comparison plot, text-type profile (Biber's eight text types), feature z-score chart; CSV export aligned with MAT output.

---

## References and Credits
- Steen, G. et al. (2010). *A method for linguistic metaphor identification: From MIP to MIPVU*. John Benjamins.
- Steen, G. (2023). *Deliberate Metaphor Theory*. Cambridge University Press.
- Biber, D. (1988). *Variation across Speech and Writing*. Cambridge University Press.
- Nini, A. (2019). The Multi-Dimensional Analysis Tagger. Bloomsbury Academic.
    `
  },
  {
    id: 'word-sketch',
    title: '搭配分析',
    titleEn: 'Collocation Analysis',
    description: '三个子模块：窗口搭配（12 种统计量）、Word Sketch 语法搭配（logDice）、Word Sketch Difference 两词对比。',
    descriptionEn: 'Three sub-modules: window-based collocation (12 statistics), Word Sketch grammatical collocation (logDice), and Word Sketch Difference for comparing two words.',
    icon: 'word-sketch.png',
    color: '#F43F5E', // Rose
    image: '/images/word-sketch.png',
    content: `
# 搭配分析

搭配分析模块提供三个标签页：**搭配分析**（基于窗口的搭配统计，12 种关联度量）、**Word Sketch**（基于依存句法的语法搭配）和 **Word Sketch Difference**（两个词的搭配对比），帮助研究者理解词语的搭配模式与语法行为。

## 界面布局
- **顶部标签页**：切换三种模式。
- **左侧面板**：语料选择与搜索配置。
- **右侧面板**：分析结果与可视化。

## 搭配分析（窗口搭配）

对给定节点词做基于窗口的搭配分析：找出在节点词前后指定跨距内频繁共现的词，并用多种统计量排名。

- **搜索配置**：节点词、搭配跨距（每侧 1–15 词，默认 5）、最小 / 最大频率、转小写、去除停用词、排除词语、词性筛选（保留 / 排除）。
- **12 种统计量**：LogDice、MI、LL、Z-score、T-score、Log Ratio、MI²、MI³、Dice、Delta P1、Delta P2、MinSens。默认启用 LogDice、MI、Delta P1、Delta P2，可在统计方法对话框中启用 / 禁用与调整顺序；Delta P 为负值表示排斥关系。
- **结果表**：搭配词、共现频率、总频率与各项统计量；每行可跳转到语境索引，并自动同步跨距并高亮搭配词。
- **可视化**：柱状图、饼图、搭配网络图（点击搭配词可展开其二级搭配）、词云。

## Word Sketch（语法搭配）

基于 SpaCy 依存句法，按语法关系分析词语的搭配。

- **技术基础**：SpaCy 依存分析、Universal Dependencies，以 **logDice** 衡量搭配强度（> 7 非常强，5–7 强，3–5 中等，< 3 弱）。
- **50 种语法关系**：主语、宾语、修饰语、介词、从句、并列等，按目标词性（动词 / 名词 / 形容词 / 副词）自动选择相关关系。
- **配置**：搜索词（词形或词元）、词性、每个关系显示数量（5–100）、最小频率、最小得分。
- **结果**：统计摘要；BERTopic 风格的语法关系卡片（关系名称、搭配数量、展开 / 收起、显示更多）；搭配词表（搭配词、频率、logDice）；快捷操作可跳转到语境索引与词图分析。
- **可视化**：网络图（中心词 → 语法关系 → 搭配词），可筛选关系与每个关系的词数。

## Word Sketch Difference（词图对比）

对比两个词语的搭配差异，按 logDice 差异排序并以颜色编码偏向（蓝：词语 1 更强，红：词语 2 更强，灰：相近）。

- **输入模式**：词形模式（直接输入两个词形），或词元模式（输入一个词元后，从其全部词形中选出两个，如 go 的 went 与 gone）。
- **对比方式**：词元或词形匹配。
- **结果**：共有搭配与各自独有的搭配，含两词的频率、得分与得分差异；网络图中节点颜色同样编码差异。

> Word Sketch 与 Word Sketch Difference 均基于 SpaCy 依存句法，需语料已完成 SpaCy 标注；大语料分析可能较耗时。

## 使用场景
- **词语用法**：查看动词的典型宾语、名词的典型修饰语。
- **近义词辨析**：对比 big 与 large 的搭配差异。
- **固定搭配发现**：用较高的最小得分筛出强搭配。
    `,
    contentEn: `
# Collocation Analysis

The Collocation Analysis module has three tabs: **Collocation** (window-based statistics with 12 association measures), **Word Sketch** (grammatical collocation from dependency parsing) and **Word Sketch Difference** (compare the collocations of two words), helping researchers understand the collocational patterns and grammatical behavior of words.

## Interface Layout
- **Top tabs**: switch between the three modes.
- **Left panel**: corpus selection and search settings.
- **Right panel**: results and visualizations.

## Collocation (window-based)

Window-based collocation for a node word: find words that frequently co-occur within a given span on either side and rank them with multiple statistics.

- **Settings**: node word, span (1–15 words per side, default 5), min/max frequency, lowercasing, stop-word removal, exclusion list, POS filter (keep / exclude).
- **12 statistics**: LogDice, MI, LL, Z-score, T-score, Log Ratio, MI², MI³, Dice, Delta P1, Delta P2, MinSens. LogDice, MI, Delta P1 and Delta P2 are on by default; enable, disable and reorder measures in the statistics dialog. A negative Delta P indicates repulsion.
- **Result table**: collocate, co-occurrence frequency, total frequency and each statistic; every row links to Concordance, syncing the span and highlighting the collocate.
- **Visualization**: bar chart, pie chart, collocation network (click a collocate to expand its second-level collocates) and word cloud.

## Word Sketch (grammatical collocation)

Analyzes collocation by grammatical relation using SpaCy dependency parsing.

- **Technical basis**: SpaCy dependency parsing and Universal Dependencies, with **logDice** for collocation strength (> 7 very strong, 5–7 strong, 3–5 moderate, < 3 weak).
- **50 grammatical relations**: subject, object, modifier, preposition, clause, coordination, etc., selected automatically by the target's POS (verb / noun / adjective / adverb).
- **Settings**: search word (form or lemma), POS, entries per relation (5–100), minimum frequency, minimum score.
- **Results**: summary; BERTopic-style relation cards (relation name, collocate count, expand/collapse, show more); collocate table (collocate, frequency, logDice); quick links to Concordance and Word Sketch.
- **Visualization**: network (center word → grammatical relation → collocates) with relation and per-relation word-count filters.

## Word Sketch Difference

Compares the collocations of two words, sorted by logDice difference and color-coded by preference (blue: word 1 stronger, red: word 2 stronger, gray: similar).

- **Input modes**: word-form mode (type two forms), or lemma mode (enter one lemma, then pick two of its forms, e.g., went and gone for go).
- **Matching**: by lemma or word form.
- **Results**: shared collocates and those unique to each word, with both words' frequencies, scores and score difference; node colors in the network graph encode the difference as well.

> Word Sketch and Word Sketch Difference rely on SpaCy dependency parsing, so the corpus must have been SpaCy-annotated; large corpora may take longer.

## Use Cases
- **Word usage**: see a verb's typical objects or a noun's typical modifiers.
- **Near-synonym discrimination**: compare the collocations of big and large.
- **Discovering fixed collocations**: filter strong collocations with a higher minimum score.
    `
  },
  {
    id: 'literature-viz',
    title: '文献可视化',
    titleEn: 'Bibliography Visualization',
    description: '导入 WOS/CNKI Refworks 或论文原文 PDF，11 项 AI 文献解读，CiteSpace 风格的网络图、聚类图、时间线、时区、突增检测、热力密度图与词云。',
    descriptionEn: 'Import WOS/CNKI Refworks files or full-text PDFs, get 11 AI-generated reading notes, and explore CiteSpace-style network, cluster, timeline, timezone, burst, heatmap and word-cloud views.',
    icon: 'literature-viz.png',
    color: '#6366F1', // Indigo
    image: '/images/literature-viz.png',
    content: `
# 文献可视化

文献可视化模块用于管理和分析学术文献数据：从 Web of Science (WOS) 或中国知网 (CNKI) 导入 Refworks 数据，或直接上传论文原文 PDF；为条目生成 11 项 AI 解读、相关度星级、标签与备注；并以 **7 种 CiteSpace 风格的可视化**呈现研究的结构、演化与热点。

## 界面布局

顶部四个标签页：
- **上传**：创建 / 选择文献库，上传 Refworks 文件或论文 PDF。
- **文献库列表**：卡片 / 列表视图，查看、编辑元数据、删除、导出与导入文献库。
- **文献库详情**：条目表、筛选、批量操作与条目详情。
- **可视化**：生成各种图表。

## 文献库管理

### 创建与导入
- 创建文献库时选择数据源类型（WOS 或 CNKI），创建后不可更改；名称、语言、描述可随时编辑。
- **两种导入方式**：
  - **Refworks 文件**（.txt）：WOS 或 CNKI 导出。若要使用共被引网络，请以 WOS 的「Full Record and Cited References」格式导出。
  - **论文原文 PDF**：每个 PDF 生成一个条目，并保留 PDF 与首页缩略图；标题、作者、DOI、期刊、年份等元数据通过 Crossref（及 arXiv）自动获取。
- 单次导入条目数不受限制，摘要标注在后台运行。
- **整库导出 / 导入**：条目、PDF、缩略图与影子语料标注一并打包为 .zip，用于备份与迁移。

### 摘要标注（影子语料库）
带摘要的文献会写入影子语料库，并执行与语料库管理相同的标注流水线（SpaCy → USAS → MIPVU → NRC），因此词频、搭配、语义域、隐喻、情感、主题建模等分析模块都可以把文献库当作数据源。

### 文献库详情
- **条目表**：相关度（0–5 星，点击当前星可取消）、论文（上传 PDF / 缩略图）、标题、DOI、作者、年份、期刊、摘要、关键词、被引次数、11 列 AI 内容、标签、备注；可设置列的显示。
- **批量操作**：批量删除、批量 AI 生成、SpaCy / USAS / MIPVU（仅英文）/ NRC 重新标注。
- **导出 CSV**：按当前筛选与可见列导出（不含论文列，UTF-8 BOM）。

### 条目详情与 AI 解读
- **11 项 AI 内容**：研究目标、研究问题、研究设计、研究结论、理论机制、理论贡献、局限性、应用价值、学术对话、未来方向、文献总结；每项可隐藏 / 显示、手动编辑、失焦自动保存。
- **AI 生成**：选择中文或英文，优先使用 OpenAI 兼容 API，否则使用本地 Ollama，将 PDF 或摘要交给大模型解析。
- **导出 PDF**：将弹窗中可见的内容导出为 A4 PDF。
- **相关度、标签与备注**：用于整理阅读进度与笔记。

### 筛选
年份范围、作者、机构、关键词、期刊、文献类型、国家，支持自动完成与自由输入；详情页与可视化页通用。

## 可视化分析（7 种）

### 共享分析引擎
聚类图、时间线与热力密度图共用同一条 CiteSpace 风格的分析管线：**词项提取 → 节点选择 → 共现网络 → 剪枝 → 社区发现 → 簇标签**。
- **词项来源**：作者关键词 / 扩展关键词、标题、摘要，以及按「形容词* 名词+」模式提取的名词短语。
- **节点选择**：g-index（默认）、Top N、Top N%、阈值（c, cc, ccv），可按时间切片选取。
- **连接强度**：Cosine（默认）、Dice、Jaccard、共现次数。
- **网络剪枝**：Pathfinder（默认）、最小生成树（MST）、不剪枝。
- **社区发现**：Louvain（默认）或谱聚类，输出模块度 Q 与轮廓值 S；中介中心性识别枢纽节点。
- **簇标签**：LLR（默认）、TF-IDF、MI；共被引簇用施引论文的词项命名；工具栏的 AI 按钮可联合命名所有聚类。
- **共被引网络**：基于 WOS 的 CR 字段，以「第一作者, 年份」为节点；节点类型可多选，混合关键词与参考文献，以不同形状区分。

### 7 种图表
1. **网络图（Network）**：关键词共现、作者合作、机构合作、国家合作；节点大小 = 频次 / 发文量，连线粗细 = 强度；点击簇可高亮。
2. **聚类图（Cluster）**：力导向 + 聚类分组，可绘制半透明凸包；三种布局（全居中、环状中心空、环状中心核）；显示模块度 Q 与轮廓值 S。
3. **时间线（Timeline）**：水平泳道，X 轴为年份、Y 轴为聚类；年份间距按文献量动态分配；节点横向距离反映共现 / 共引强度。
4. **时区视图（Timezone）**：按时间切片展示每个阶段的前 N 个关键词或作者，同一术语跨时段连线。
5. **突增检测（Burst Detection）**：基于 Kleinberg (2002) 的两状态模型，甘特图风格展示突增时段与强度，可调 α、γ、最小频次，并按强度或起始年排序。
6. **热力密度图（Heatmap）**：固定种子的力导向布局 + 按频次与中介中心性加权的核密度估计，等值线表现主题的聚集程度，带宽可调。
7. **词云（Word Cloud）**：从标题或摘要提取高频词，支持中英文。

所有 D3 图表支持缩放、平移与悬停提示；可导出 SVG / PNG（含滚动区域的完整内容）。多数图表共享 7 种配色（蓝、绿、紫、橙、红、青、多彩）。

## 使用技巧
- **流程**：创建文献库 → 上传文献 → 查看详情 → 切换到可视化。先用网络图看整体结构，再用聚类图发现主题，用时间线观察演化，用突增检测定位热点，用热力密度图识别主流与新兴方向。
- **调参**：网络节点过多时提高最小权重或降低最大节点数；时间线过挤或过空时调整横轴缩放；热力图噪声多时减小带宽。
- **注意**：大文献库可视化可能较慢；突增检测为统计方法，结果仅供参考。
    `,
    contentEn: `
# Bibliography Visualization

The Bibliography Visualization module manages and analyzes academic literature data. Import Refworks data from Web of Science (WOS) or CNKI, or upload full-text paper PDFs; generate 11 AI reading notes, relevance ratings, tags and notes for each entry; and explore the structure, evolution and hotspots of a field through **7 CiteSpace-style visualizations**.

## Interface Layout

Four tabs across the top:
- **Upload**: create or choose a library, then upload Refworks files or paper PDFs.
- **Library list**: card / list views; view, edit metadata, delete, export and import libraries.
- **Library detail**: entry table, filters, batch actions and entry details.
- **Visualization**: generate charts.

## Library Management

### Creating and Importing
- When creating a library choose the data source (WOS or CNKI), which cannot be changed later; name, language and description can be edited at any time.
- **Two ways to import**:
  - **Refworks files** (.txt) exported from WOS or CNKI. To use the co-citation network, export from WOS in the "Full Record and Cited References" format.
  - **Full-text paper PDFs**: each PDF becomes one entry, with the PDF and a first-page thumbnail kept; title, authors, DOI, journal and year are fetched automatically through Crossref (and arXiv).
- There is no limit on entries per import; abstract annotation runs in the background.
- **Whole-library export/import**: entries, PDFs, thumbnails and shadow-corpus annotations are packed into a .zip for backup and migration.

### Abstract Annotation (Shadow Corpus)
Entries with abstracts are written to a shadow corpus and run through the same annotation pipeline as Corpus Management (SpaCy → USAS → MIPVU → NRC), so word frequency, collocation, semantic domain, metaphor, sentiment and topic-modeling modules can all use a library as a data source.

### Library Detail
- **Entry table**: relevance (0–5 stars; click the current star to clear), paper (upload PDF / thumbnail), title, DOI, authors, year, journal, abstract, keywords, citations, 11 AI columns, tags and notes; column visibility is configurable.
- **Batch actions**: batch delete, batch AI generation, and SpaCy / USAS / MIPVU (English only) / NRC re-annotation.
- **Export CSV**: by current filters and visible columns (without the paper column, UTF-8 BOM).

### Entry Detail and AI Notes
- **11 AI fields**: research objectives, research questions, research design, conclusions, theoretical mechanism, theoretical contribution, limitations, application value, scholarly dialogue, future directions, and summary; each can be hidden/shown, edited by hand and is saved on blur.
- **AI generation**: choose Chinese or English; an OpenAI-compatible API is used first, otherwise local Ollama, and the PDF or abstract is sent to the model for parsing.
- **Export PDF**: export the visible content of the dialog as an A4 PDF.
- **Relevance, tags and notes** help track your reading and notes.

### Filtering
Year range, author, institution, keyword, journal, document type and country, with autocomplete and free text; shared between the detail and visualization pages.

## Visualization (7 Types)

### Shared Analysis Engine
The Cluster, Timeline and Heatmap views share one CiteSpace-style pipeline: **term extraction → node selection → co-occurrence network → pruning → community detection → cluster labels**.
- **Term source**: author keywords / keywords plus, titles, abstracts, and noun phrases extracted with the "adjective* noun+" pattern.
- **Node selection**: g-index (default), Top N, Top N%, thresholds (c, cc, ccv), selectable per time slice.
- **Link strength**: Cosine (default), Dice, Jaccard, raw co-occurrence.
- **Pruning**: Pathfinder (default), minimum spanning tree (MST), or none.
- **Community detection**: Louvain (default) or spectral clustering, reporting modularity Q and silhouette S; betweenness centrality flags hub nodes.
- **Cluster labels**: LLR (default), TF-IDF, MI; co-citation clusters are named with terms from the citing papers; the toolbar's AI button names all clusters jointly.
- **Co-citation network**: built from the WOS CR field with "first author, year" nodes; node types are multi-select, mixing keywords and references with different shapes.

### The 7 Charts
1. **Network**: keyword co-occurrence, author, institution and country collaboration; node size = frequency / output, edge width = strength; click a cluster to highlight it.
2. **Cluster**: force-directed layout with cluster grouping and optional translucent convex hulls; three layouts (centered, ring with empty center, ring with core); shows modularity Q and silhouette S.
3. **Timeline**: horizontal lanes with years on the X axis and clusters on the Y axis; year spacing adapts to document counts; horizontal distance between nodes reflects co-occurrence / co-citation strength.
4. **Timezone**: top-N keywords or authors for each time slice, with links for the same term across periods.
5. **Burst Detection**: a Kleinberg (2002) two-state model shown Gantt-style with burst periods and strengths; α, γ and minimum frequency are adjustable, and results sort by strength or start year.
6. **Heatmap**: seeded force-directed layout plus kernel density estimation weighted by frequency and betweenness centrality; contours show how topics cluster, with adjustable bandwidth.
7. **Word Cloud**: high-frequency words from titles or abstracts, in Chinese or English.

All D3 charts support zoom, pan and hover tooltips; export to SVG / PNG (including the full scrollable area). Most charts share 7 color schemes (blue, green, purple, orange, red, teal, colorful).

## Tips
- **Workflow**: create a library → upload → open detail → switch to visualization. Use the network for overall structure, clusters for themes, the timeline for evolution, burst detection for hotspots, and the heatmap for mainstream and emerging directions.
- **Tuning**: raise the minimum weight or lower the node limit when the network is crowded; adjust the X scale if the timeline is cramped or sparse; reduce bandwidth when the heatmap is noisy.
- **Note**: large libraries may be slow; burst detection is statistical and for reference only.
    `
  },
  {
    id: 'annotation-mode',
    title: '标注模式',
    titleEn: 'Annotation Mode',
    description: '基于框架的文本与多模态标注：关联箭头、自动标注（隐喻 / Theme-Rheme）、波形与视频标注，以及集合式编码者间信度。',
    descriptionEn: 'Framework-based text and multimodal annotation with relation arrows, auto-annotation (metaphor / Theme-Rheme), waveform and video annotation, and set-based inter-coder reliability.',
    icon: 'annotation-mode.png',
    color: '#8B5CF6', // Violet
    image: '/images/annotation-mode.png',
    content: `
# 标注模式

标注模式用于对文本和多媒体内容进行基于框架的标注，支持**文本标注**与**多模态标注**（视频 / 音频），并提供标注历史、框架管理与编码者间信度分析，让标注、检验与导出在同一处完成。

## 界面布局

顶部五个标签页：
- **文本标注**：分句、划词标注，框架树选择，句法可视化，自动标注。
- **多模态标注**：视频 / 音频标注，转录文本标注，波形与画框标注。
- **标注历史**：查看与管理已保存的标注存档，批量导出。
- **框架管理**：创建与编辑标注框架，导入 / 导出，D3.js 框架树可视化。
- **编码者间信度**：计算多编码者的一致性，标准答案与详情导出。

## 文本标注

### 划词标注
- 分句显示，每句单行；拖动选择文本即可用当前标签创建标注。
- 标签块与划词边界精确对齐，层叠显示（大标签在上、小标签在下）。
- 禁止交叉标注，只允许完全包含或不重叠。
- 标注表格显示文本、标签、位置、词性、命名实体、关联与备注，点击行可定位到文本，行菜单可跳转到语境索引、搭配分析、词图分析与 N-gram。

### 标注关联（箭头）
在标注块之间建立**有向关联**，以 U 形箭头显示，并同步到标注表格与历史记录、CSV 导出；再次点击已存在的关联可删除。

### 搜索与批量标注
搜索框可高亮文本中所有匹配项，按 Enter 把当前标签一键应用到全部匹配位置；也可用 CQL 构建器按词形、词性、词元、语义标签或**已有标注标签**（annotation 属性，支持 AND / OR）筛选。

### 标签快捷键
为常用标签绑定 1–0 共 10 个快捷槽位（macOS 为 Cmd + 数字，Windows / Linux 为 Ctrl + 数字），按框架分别保存，切换标签时框架树自动滚动并高亮。

### SpaCy 预标注与句法可视化
- 自动显示词性与命名实体，可切换显示 / 隐藏。
- 句法结构可视化：成分句法（benepar）与依存句法（SpaCy displacy）。

### 自动标注
- **Metaphor（MIPVU）框架**：读取语料库的隐喻检测结果，自动标注间接（indirect）、直接（direct）与隐喻标记（mflag）标签，并为隐性隐喻（implicit）自动创建指向先行词的关联箭头。仅英语。
- **Halliday-Theme / Berry-Theme 框架**：利用依存句法自动标注主位（theme）与述位（rheme）。

### 保存与导出
- 保存存档时可填写编码者名称，用于后续信度分析；存档可加载、重命名、删除。
- 标注结果可导出为 PNG 或 SVG 图片。

## 多模态标注

### 界面
左侧为框架与存档，右侧为媒体播放器、底部三标签面板（转录文本标注、文本标注列表、音频框 / 视频标注列表）与多轨时间轴。

### 视频标注
- 播放控制：播放 / 暂停、±5 秒、逐帧移动。
- 画框模式：在视频帧上绘制边界框（使用视频原始坐标）。
- 帧追踪与关键帧插值：把框选应用到相邻帧，设置关键帧后自动线性插值，大幅减少重复劳动。
- YOLO 叠加：播放时实时显示检测框与多目标追踪轨迹。

### 音频标注（仅英语）
基于 Wav2Vec2 强制对齐与 TorchCrepe 音高数据，提供 Wavesurfer.js 交互式波形：
- **波形与词级对齐**：波形上方标出每个词的时间位置；缩放以播放针为中心。
- **音高曲线与频谱图**：可叠加 F0 曲线，也可显示频谱图。
- **画框标注**：在波形 / 频谱图上拖拽绘制标注框，自动记录起止时间。
- **DAW 模式**：播放针居中，波形滚动。
- **转录文本标注**：与文本标注相同，播放时自动高亮当前句，点击句子可跳转到对应时间。

> 非英语音频不提供波形标注，可通过文本标注模式标注其转录文本。

### 多轨时间轴
YOLO 追踪轨、转录段轨、用户标注轨与关键帧标记，采用 DAW 范式的播放针行为。

## 标注历史与框架管理

- **标注历史**：按语料库组织存档，显示文本 / 媒体名称、标注数量、编码者、时间与框架；详情页含标注表格（带关联列）与 CSV 导出；支持批量导出为单个 zip。
- **框架管理**：内置多套预置框架（包括 UAM 系列的语法、评价与错误分析框架，以及含 MIPVU 与 DMIP 分支的 Metaphor 框架），也可创建、编辑、导入、导出自定义框架，并以 D3.js 树可视化。

## 编码者间信度

> 信度分析仅支持文本标注存档，视频 / 音频存档不参与。

### 计算方法：词单位 × 标签集合
- 以**词**为分析单位（每词一票），把标注的字符区间按多数覆盖规则投影到词上；每个（编码者，词）的取值是一个**标签集合**，天然支持多标签与重叠标注。
- **未标注的词计入为负类**，避免「只标正例」任务中的 Kappa 悖论。
- **集合距离**默认使用 MASI（部分重叠给予部分功劳），界面使用固定的科学默认口径，结果面板只读展示。
- 可用「标签筛选」只对部分标签计算。

### 支持的系数
- **平均配对百分比一致**
- **Cohen's Kappa**（两个编码者，多编码者时取配对平均）
- **Fleiss' Kappa**（三个及以上编码者）
- **Krippendorff's Alpha**（最严格，支持集合距离）
- **召回率 / 精确率 / F1**（指定一个存档作为标准答案）

### 数据来源与报告
- 可从语料库选择存档，或上传本地 JSON 标注文件（含合规性校验）。
- 导出 HTML 或 CSV 报告；「标注详情」可导出**词汇纵向 CSV**——各编码者各占一列，并标出一致 / 不一致、留出讨论列，适合 DMIP 等多维框架的编码者讨论。
    `,
    contentEn: `
# Annotation Mode

Annotation Mode provides framework-based annotation of text and multimedia: **text annotation** and **multimodal annotation** (video / audio), together with annotation history, framework management and inter-coder reliability analysis, so annotating, checking and exporting all happen in one place.

## Interface Layout

Five tabs across the top:
- **Text annotation**: sentence and span annotation, framework tree selection, syntax visualization, auto-annotation.
- **Multimodal annotation**: video / audio annotation, transcript annotation, waveform and bounding-box annotation.
- **Annotation history**: view and manage saved annotation archives, batch export.
- **Framework management**: create and edit frameworks, import/export, D3.js framework tree.
- **Inter-coder reliability**: agreement among multiple coders, gold standard and detail export.

## Text Annotation

### Span Annotation
- Sentence-by-sentence display, one line per sentence; drag to select text and create an annotation with the current label.
- Tag blocks align precisely to the selection boundaries and stack in layers (larger tags above, smaller below).
- Crossing annotations are prohibited; only full containment or no overlap is allowed.
- The annotation table shows text, label, position, POS, named entity, relations and notes; click a row to locate it in the text, and use the row menu to jump to Concordance, Collocation Analysis, Word Sketch and N-gram.

### Annotation Relations (Arrows)
Create **directed relations** between annotation blocks, drawn as U-shaped arrows and synchronized with the annotation table, history and CSV export; click an existing relation again to delete it.

### Search and Batch Annotation
The search box highlights every match in the text, and pressing Enter applies the current label to all matches at once. You can also use the CQL builder to filter by word form, POS, lemma, semantic tag or **existing annotation labels** (the annotation attribute, with AND / OR).

### Label Shortcuts
Bind frequently used labels to 10 shortcut slots (1–0; Cmd + digit on macOS, Ctrl + digit on Windows / Linux), saved per framework; the framework tree scrolls to and highlights the label when you switch.

### SpaCy Pre-annotation and Syntax Visualization
- POS tags and named entities are shown automatically and can be toggled.
- Syntactic structure visualization: constituency (benepar) and dependency (SpaCy displacy).

### Auto Annotation
- **Metaphor (MIPVU) framework**: reads the corpus metaphor detection results and automatically annotates indirect, direct and metaphor-flag (mflag) labels, creating relation arrows from implicit metaphors to their antecedents. English only.
- **Halliday-Theme / Berry-Theme frameworks**: automatically annotates theme and rheme using dependency parsing.

### Saving and Exporting
- Enter a coder name when saving an archive for later reliability analysis; archives can be loaded, renamed and deleted.
- Annotation results can be exported as PNG or SVG images.

## Multimodal Annotation

### Interface
Frameworks and archives on the left; on the right a media player, a three-tab bottom panel (transcript annotation, text-annotation list, audio-box / video-annotation list) and a multi-track timeline.

### Video Annotation
- Playback: play / pause, ±5 seconds, frame stepping.
- Box drawing mode: draw bounding boxes on video frames (using the video's native coordinates).
- Frame tracking and keyframe interpolation: apply a box to adjacent frames, or set keyframes and let the system interpolate linearly, greatly reducing repetitive work.
- YOLO overlay: real-time detection boxes and multi-object tracks during playback.

### Audio Annotation (English only)
Based on Wav2Vec2 forced alignment and TorchCrepe pitch data, with an interactive Wavesurfer.js waveform:
- **Waveform and word-level alignment**: each word's time position is marked above the waveform; zoom centers on the playhead.
- **Pitch curve and spectrogram**: overlay the F0 curve or show a spectrogram.
- **Box annotation**: drag on the waveform / spectrogram to draw annotation boxes, with start and end times recorded automatically.
- **DAW mode**: the playhead stays centered while the waveform scrolls.
- **Transcript annotation**: same as text annotation; the current sentence is highlighted during playback and clicking a sentence seeks to that time.

> Non-English audio has no waveform annotation, but its transcript can be annotated in text mode.

### Multi-track Timeline
YOLO tracking track, transcript-segment track, user-annotation track and keyframe markers, with DAW-style playhead behavior.

## History and Framework Management

- **Annotation history**: archives organized by corpus, showing text / media name, annotation count, coder, time and framework; the detail page has an annotation table (with relation column) and CSV export; batch export produces a single zip.
- **Framework management**: many preset frameworks (including the UAM grammar, appraisal and error-analysis frameworks, and the Metaphor framework with MIPVU and DMIP branches), plus creating, editing, importing and exporting your own frameworks, shown as D3.js trees.

## Inter-coder Reliability

> Reliability analysis applies only to text-annotation archives; video / audio archives are excluded.

### Method: Token Units × Label Sets
- The unit of analysis is the **word** (one vote per word); annotation character spans are projected onto words by a majority-coverage rule. Each (coder, word) value is a **set of labels**, which naturally supports multiple labels and overlapping annotations.
- **Unannotated words count as the negative class**, avoiding the Kappa paradox in "positives-only" tasks.
- The **set distance** defaults to MASI (partial credit for partial overlap); the interface uses fixed, scientifically sound defaults and shows them read-only in the results.
- A label filter lets you compute reliability for only some labels.

### Supported Coefficients
- **Average pairwise percent agreement**
- **Cohen's Kappa** (two coders; pairwise average for more)
- **Fleiss' Kappa** (three or more coders)
- **Krippendorff's Alpha** (strictest; supports set distances)
- **Recall / Precision / F1** (designate one archive as the gold standard)

### Data Sources and Reports
- Pick archives from a corpus, or upload local JSON annotation files (with validation).
- Export HTML or CSV reports; the annotation detail view exports a **vertical word-by-word CSV** with one column per coder, agreement status and a discussion column—well suited to coder discussions for multi-dimensional frameworks such as DMIP.
    `
  },
  {
    id: 'topic-modeling',
    title: '主题建模',
    titleEn: 'Topic Modeling',
    description: 'BERTopic、LDA、LSA、NMF 四种算法，语料库与文献库均可建模，含动态主题、主题数优化、离群值处理与 LLM 命名。',
    descriptionEn: 'Four algorithms (BERTopic, LDA, LSA, NMF) for corpora and bibliography libraries, with dynamic topics, topic-number optimization, outlier handling and LLM naming.',
    icon: 'topic-modeling.png',
    color: '#14B8A6', // Teal
    image: '/images/topic-modeling.png',
    content: `
# 主题建模

主题建模模块提供四种方法：**BERTopic**、**LDA**、**LSA** 和 **NMF**，帮助研究者从语料库或文献库中自动发现主题。每个方法一个标签页，左侧配置、右侧展示结果与可视化。

## BERTopic

### 工作流程
1. **预处理与分块**：按句子 / 字符数 / token 数分块（推荐按 token，最大 100–512，可设重叠），并可预览处理结果。
2. **嵌入**：SBERT 句向量（paraphrase-multilingual-MiniLM-L12-v2），嵌入文件可保存、重命名与复用。
3. **降维**：UMAP（推荐）或 PCA。
4. **聚类**：HDBSCAN（推荐）、BIRCH 或 K-Means。
5. **主题表示**：c-TF-IDF（默认）、KeyBERTInspired、MaximalMarginalRelevance、PartOfSpeech。
6. **主题命名**：手动编辑，或用大语言模型（本地 Ollama / OpenAI 兼容 API）生成。

### 特色功能
- **动态主题（Topics over Time）**：需要日期元数据，可选仅年份或完整日期并设置时间段数量。
- **离群值处理**：四种策略（distributions、probabilities、c-tf-idf、embeddings）与相似度阈值，可先「预估离群值」再决定是否应用。
- **主题合并、标签编辑**，以及**按主题导出全部文档**（txt / csv，多主题打包为 zip）。
- 完整的向量器参数（CountVectorizer / TfidfVectorizer、df 阈值、N-gram 范围、停用词）。

## LDA
- 经典概率主题模型，可自定义 Alpha / Eta 先验、迭代与 passes 等参数。
- **模型评估**：困惑度、一致性（Coherence）、对数似然。
- **主题数优化**：一致性 / 困惑度曲线辅助选择主题数。
- **动态主题**：主题时间演化折线、主题相似度热力图、主题演化桑基图。

## LSA
- 基于奇异值分解（SVD），速度快，适合大规模数据。
- 评估：解释方差比、累积方差；主题数优化使用方差曲线。

## NMF
- 非负矩阵分解，主题表示稀疏、易解释；多种初始化（nndsvd 等）、求解器与正则化参数。
- 评估：重构误差、稀疏度；主题数优化使用重构误差曲线。

## 数据与预处理（LDA / LSA / NMF）
语料库或文献库均可作为数据源，支持全部 / 按标签 / 手动选择；预处理包括停用词（20 多种语言）、标点、词形还原、小写、最小词长、词性过滤、N-gram 以及支持正则的排除词。文献库可使用出版年份进行动态主题分析。

## 可视化
- **主题词条形图**：每个主题的关键词权重。
- **文档散点图**：UMAP 降维后的文档分布，离群值显示为灰色。
- **相似性热图**：主题间的相似度矩阵。
- **词项排名图**：词权重衰减曲线。
- **时间演化图**：主题随时间变化（启用动态主题时）。
- LDA / LSA / NMF 另有主题分布饼图、文档分布图与方差图等。所有图表均可导出 SVG / PNG，并适配深色主题。

## 方法选择建议
- **BERTopic**：重视语义相似性、自动确定主题数、多语言文本。
- **LDA**：需要概率解释、主题演化与详细评估指标。
- **LSA**：需要快速分析大规模文本。
- **NMF**：需要稀疏、可解释的主题表示。
    `,
    contentEn: `
# Topic Modeling

The Topic Modeling module provides four methods—**BERTopic**, **LDA**, **LSA** and **NMF**—for automatically discovering topics in corpora or bibliography libraries. Each method has its own tab, with configuration on the left and results and visualizations on the right.

## BERTopic

### Workflow
1. **Preprocessing and chunking**: chunk by sentence / characters / tokens (token-based is recommended; max 100–512 with optional overlap), with a preview of the processed text.
2. **Embedding**: SBERT sentence embeddings (paraphrase-multilingual-MiniLM-L12-v2); embedding files can be saved, renamed and reused.
3. **Dimensionality reduction**: UMAP (recommended) or PCA.
4. **Clustering**: HDBSCAN (recommended), BIRCH or K-Means.
5. **Topic representation**: c-TF-IDF (default), KeyBERTInspired, MaximalMarginalRelevance, PartOfSpeech.
6. **Topic naming**: edit by hand, or generate with a large language model (local Ollama / OpenAI-compatible API).

### Special Features
- **Dynamic topics (Topics over Time)**: requires date metadata; choose year-only or full dates and set the number of time bins.
- **Outlier handling**: four strategies (distributions, probabilities, c-tf-idf, embeddings) with a similarity threshold; "estimate outliers" lets you preview the effect before applying it.
- **Topic merging, label editing**, and **exporting all documents by topic** (txt / csv; multiple topics are packed into a zip).
- Full vectorizer controls (CountVectorizer / TfidfVectorizer, df thresholds, N-gram range, stop words).

## LDA
- Classic probabilistic topic model with customizable Alpha / Eta priors, passes and iterations.
- **Evaluation**: perplexity, coherence and log-likelihood.
- **Topic-number optimization**: coherence / perplexity curves help choose the number of topics.
- **Dynamic topics**: topic evolution lines, topic similarity heatmap and topic evolution Sankey diagram.

## LSA
- Based on singular value decomposition (SVD); fast and suited to large datasets.
- Evaluation: explained variance ratio and cumulative variance; topic-number optimization uses the variance curve.

## NMF
- Non-negative matrix factorization with sparse, interpretable topics; multiple initializations (nndsvd, etc.), solvers and regularization parameters.
- Evaluation: reconstruction error and sparsity; topic-number optimization uses the reconstruction-error curve.

## Data and Preprocessing (LDA / LSA / NMF)
A corpus or a bibliography library can be the data source, with all / by tag / manual selection. Preprocessing covers stop words (20+ languages), punctuation, lemmatization, lowercasing, minimum word length, POS filtering, N-grams and exclusion words with regex support. Libraries can use publication year for dynamic topic analysis.

## Visualization
- **Topic word bar chart**: keyword weights for each topic.
- **Document scatter plot**: UMAP-reduced document distribution, with outliers in gray.
- **Similarity heatmap**: topic similarity matrix.
- **Term rank chart**: word-weight decay curves.
- **Time evolution chart**: topics over time (when dynamic topics are enabled).
- LDA / LSA / NMF add topic distribution pie charts, document distribution and variance charts, among others. All charts export to SVG / PNG and support dark themes.

## Choosing a Method
- **BERTopic**: when semantic similarity matters, you want the number of topics found automatically, or the text is multilingual.
- **LDA**: when you need probabilistic interpretation, topic evolution and detailed metrics.
- **LSA**: when you need fast analysis of large texts.
- **NMF**: when you need sparse, interpretable topics.
    `
  },
  {
    id: 'sentiment-analysis',
    title: '情感分析',
    titleEn: 'Sentiment Analysis',
    description: '基于 NRC 情感词典的情感极性与八种情绪维度分析，支持词形、词元与 USAS 语义域三种统计单元。',
    descriptionEn: 'NRC-lexicon sentiment polarity and eight emotion dimensions, counted by word form, lemma or USAS semantic domain.',
    icon: 'sentiment-analysis.png',
    color: '#D946EF', // Fuchsia
    image: '/images/sentiment-analysis.png',
    content: `
# 情感分析

情感分析模块基于 NRC 情感词典（NRC Emotion Lexicon），对语料中的词语进行情感极性与情感维度分析。界面与参数设计和词频统计保持一致，可先做词频分析，再在同一套筛选条件下切换到情感分析，对比词频与情感分布。

## 数据基础

- **NRC 标注**：语料上传后会在 MIPVU 之后自动完成 NRC 标注，也可在语料库详情或文献库详情中单独重跑。
- **词典与语言**：支持英语、中文、丹麦语、荷兰语、芬兰语、法语、意大利语、葡萄牙语、俄语、西班牙语、瑞典语 11 种语言的 NRC 词典。
- **10 个维度**：anger（愤怒）、anticipation（期待）、disgust（厌恶）、fear（恐惧）、joy（喜悦）、sadness（悲伤）、surprise（惊讶）、trust（信任），以及 positive（正面）、negative（负面）。

## 数据源与配置

- **数据源**：语料库（全部 / 按标签 / 手动）或文献库（分析其摘要影子语料）。
- **词性筛选**：保留 / 过滤模式，聚焦实词或虚词的情感分布。
- **搜索配置**：频率范围、大小写、六种搜索类型、排除词语（支持正则）。
- **统计单元**：
  - **词形**：按词语的原始形式统计。
  - **词元**：合并词语的屈折变化。
  - **语义域（USAS）**：把同一语义域中所有词的情感分加总，按语义域聚合展示，需语料已完成 USAS 标注。

## 两种分析模式

### 情感极性（Polarity）
将词语 / 语义域归为 **positive、negative、neutral** 三类，适合快速把握整体正负面倾向、比较不同子集的差异。可视化为饼图与词云。

### 情感维度（Dimension）
按八个基本情绪维度统计，未匹配或无主导情绪的归为 others，适合细粒度的情绪分布与多维度比较。可视化为雷达图与词云。

## 结果与可视化

- **结果表**：词语（或语义域代码，悬停可见全名）、合计、百分比及各情感维度的计数；支持排序、搜索、分页、勾选与导出 CSV（语义域模式额外包含语义域名称列）。
- **可视化**：饼图 / 雷达图与词云；词云支持 D3.js 默认引擎和可自定义蒙版的旧版引擎，语义域模式的词云以语义域名称为文字。
- **跨模块联动**：词形 / 词元模式可跳转到语境索引、搭配分析、词图分析、N-gram 与语义域分析；语义域模式可用 CQL 打开语境索引，查看该语义域下所有词的语境。
- **AI 助手**：可就当前结果提问。

## 使用场景
- **文本情绪画像**：了解一部作品、一组评论或一批文献的情感倾向。
- **跨语域比较**：比较不同子语料的情感分布。
- **语义类别与情感**：考察「人际关系」类与「经济」类词语的情感差异。
    `,
    contentEn: `
# Sentiment Analysis

The Sentiment Analysis module uses the NRC Emotion Lexicon to analyze sentiment polarity and emotion dimensions in your corpus. Its interface and parameters mirror Word Frequency, so you can run a word-frequency analysis first and then switch to sentiment analysis under the same filters to compare frequency and sentiment distributions.

## Data Foundation

- **NRC annotation**: runs automatically after MIPVU when a text is uploaded, and can be re-run on its own from the corpus detail or library detail.
- **Lexicons and languages**: NRC lexicons for 11 languages—English, Chinese, Danish, Dutch, Finnish, French, Italian, Portuguese, Russian, Spanish and Swedish.
- **10 dimensions**: anger, anticipation, disgust, fear, joy, sadness, surprise, trust, plus positive and negative.

## Data Source and Settings

- **Data source**: a corpus (all / by tag / manual) or a bibliography library (its abstract shadow corpus).
- **POS filter**: keep / filter mode, to focus on content or function words.
- **Search settings**: frequency range, case, six search types, exclusion words (regex supported).
- **Counting unit**:
  - **Word form**: counts words as they appear.
  - **Lemma**: merges inflected forms.
  - **Semantic domain (USAS)**: sums sentiment scores of all words in the same semantic domain and shows results aggregated by domain; requires USAS annotation.

## Two Analysis Modes

### Polarity
Classifies words / domains as **positive, negative or neutral**, for a quick view of overall tendency and comparison between subsets. Visualized as a pie chart and word cloud.

### Dimension
Counts by the eight basic emotions, with unmatched or non-dominant items grouped under "others"—suited to fine-grained emotion distributions and multi-dimensional comparison. Visualized as a radar chart and word cloud.

## Results and Visualization

- **Result table**: word (or domain code, with the full name on hover), total, percentage and counts per emotion dimension; sort, search, paginate, select and export CSV (domain mode adds a domain-name column).
- **Visualization**: pie / radar charts and word clouds; word clouds support the default D3.js engine and a legacy engine with custom masks, and in domain mode use domain names as the text.
- **Cross-module links**: in word / lemma mode, jump to Concordance, Collocation Analysis, Word Sketch, N-gram and Semantic Domain analysis; in domain mode, open Concordance with a CQL query to see all words of that domain in context.
- **AI assistant**: ask questions about the current results.

## Use Cases
- **Emotional profile of a text**: gauge the sentiment of a work, a set of reviews or a body of literature.
- **Cross-register comparison**: compare sentiment distributions across sub-corpora.
- **Semantic categories and sentiment**: examine how "interpersonal" and "economic" vocabulary differ in sentiment.
    `
  },
  {
    id: 'dictionary-lookup',
    title: '词典查询',
    titleEn: 'Dictionary Lookup',
    description: '集成麦克米伦与朗文搭配词典，在顶部工具栏一键多词典同时查询，边分析边查词。',
    descriptionEn: 'Macmillan and Longman Collocations dictionaries in one toolbar pop-up—look words up across dictionaries without leaving your analysis.',
    icon: 'dictionary-lookup.png',
    color: '#0EA5E9', // Sky
    image: '/images/dictionary-lookup.png',
    content: `
# 词典查询

词典查询集成在应用右上角的工具栏中，点击翻译 / 词典图标即可打开查询窗口，在多部词典中同时检索词语的释义与用法，无需切换到外部词典应用。

## 内置词典
- **麦克米伦词典（Macmillan English Dictionary）**：按词频排序的义项释义。
- **朗文搭配词典（Longman Collocations）**：典型搭配与用法。
- 在「选择词典」区域勾选要参与查询的词典，支持多选，默认全选。

## 使用方式
- **输入查询**：在搜索框输入词语（支持中英文），回车或点击搜索，即可在已选词典中同时查询。
- **联想建议**：输入时根据已选词典的词条给出前缀联想。
- **结果展示**：结果按词典分标签页显示，标明是否找到词条与释义内容，模糊匹配会有提示。
- **面包屑导航**：词典内容中的可点击链接（如跳转到其他词条）可通过面包屑返回上一级。

## 与分析的配合
- 阅读和分析语料时，在词频、搭配、语义、隐喻等分析结果中遇到目标词，可随时打开词典查证。
- 对比不同词典对同一词条的释义差异。
- AI 对话模式与 MCP 中也提供词典查询工具，供 AI 助手在隐喻判定（基本义与语境义对照）、词汇与用法核查等场景按需调用。
    `,
    contentEn: `
# Dictionary Lookup

Dictionary Lookup lives in the toolbar at the top right of the app. Click the translate / dictionary icon to open the lookup window and search several dictionaries at once for definitions and usage, without switching to an external dictionary app.

## Built-in Dictionaries
- **Macmillan English Dictionary**: sense definitions ordered by frequency.
- **Longman Collocations**: typical collocations and usage.
- Tick the dictionaries to query in the "Select dictionaries" area; multi-select is supported and all are selected by default.

## How to Use
- **Enter a query**: type a word (Chinese or English) and press Enter or click search to query all selected dictionaries at once.
- **Suggestions**: prefix suggestions appear as you type, based on the selected dictionaries' entries.
- **Results**: shown in one tab per dictionary, indicating whether the entry was found and its content; fuzzy matches are flagged.
- **Breadcrumbs**: clickable links inside dictionary content (such as jumps to other entries) can be navigated back through the breadcrumb.

## Working with Your Analyses
- While reading and analyzing, open the dictionary whenever you meet a target word in frequency, collocation, semantic or metaphor results.
- Compare how different dictionaries define the same entry.
- A dictionary lookup tool is also available in AI Agent Mode and over MCP, so AI assistants can call it on demand for metaphor judgments (comparing basic and contextual meanings) and word-usage checks.
    `
  },
  {
    id: 'ai-assistant',
    title: 'AI 助手与 MCP',
    titleEn: 'AI Assistant & MCP',
    description: '模块内 AI 助手解读当前结果，AI 对话模式用自然语言完成分析，内置 MCP 服务让 Claude Desktop / Cursor 直接调用 Meta-Lingo。',
    descriptionEn: 'In-module AI assistants that explain your current results, an AI conversation mode that runs analyses from natural language, and a built-in MCP server that lets Claude Desktop or Cursor use Meta-Lingo directly.',
    icon: 'ai-assistant.png',
    color: '#F97316', // Orange
    image: '/images/ai-assistant.png',
    content: `
# AI 助手与 MCP

Meta-Lingo 提供三层可选的 AI 能力：分析模块里的 **AI 助手**、独立的 **AI 对话模式**，以及面向外部 AI 客户端的 **MCP 服务**。所有 AI 功能都是可选的，默认不影响本地离线使用。

## 连接大模型

在「应用设置」中二选一或同时配置：
- **Ollama**：连接本地 Ollama 服务（默认 http://localhost:11434），选择已安装的模型，完全本地运行。
- **OpenAI 兼容 API**：配置 API 地址、Key 与模型名，可管理多条线路、一键切换并测试连接，适用于 OpenAI、兼容 OpenAI 的第三方服务或本地代理。

## 模块 AI 助手

分析模块左栏提供机器人图标（需已连接 Ollama 或启用 API）。点击后可与大模型对话，模型会根据**当前页面状态**作答：
- **数据源**：当前语料库 / 文献库与文本范围。
- **分析参数**：检索条件、筛选、排序等设置。
- **当前视图**：结果表的列说明、排序与当前页数据，或图表类型与绘图数据摘要。

已支持词频统计、情感分析、同义词分析、关键词提取、N-gram 分析、语境索引、语义域分析、隐喻分析、搭配分析、词图分析 / 对比以及主题建模（BERTopic、LDA、LSA、NMF）。可用来解释结果、获取参数建议。

## AI 对话模式

顶部栏的开关可在**标准模式**与**对话模式**之间切换：
- **标准模式**：各模块以浏览器式标签页打开，可同时打开多个。
- **对话模式**：类似 Claude 桌面端的聊天界面，只需用自然语言描述研究任务，例如「列出我的语料库」「分析语料库 X 的词频」「在学术语料库中查找 make 的搭配词」。助手会自动调用 Meta-Lingo 内置的语料管理、分析、索引、语义分析等工具，工具调用链实时显示、可展开查看，并对结果给出解读。
- **模块选择器**：可限制 AI 可用的工具模块，使对话更聚焦。
- **状态保留**：两种模式的状态互不影响，对话历史跨切换与重启保存。
- **DMIP 刻意隐喻分析**即通过对话模式中的 dmip_analysis 工具调用。

## MCP 服务

Meta-Lingo 内置**模型上下文协议（MCP）服务器**，让外部 AI 助手自主使用其语料库研究工具：创建语料库、上传文本、运行分析、标注文本并解读结果，无需手动操作。MCP 服务默认关闭，在「应用设置 → MCP 服务」中开启。

### 支持的客户端
| 客户端 | 配置方式 |
|--------|----------|
| Claude Desktop | 一键安装扩展（.mcpb，推荐）或手动 stdio 配置 |
| Claude.ai 网页版 | 自定义连接器（需 HTTPS，可借助 ngrok 等隧道） |
| Cursor | 复制配置 JSON |
| 其他 MCP 客户端 | stdio 或 HTTP |

### 工具覆盖（共 63 个）
- **参考与查询**：词性与 USAS 类目、CQL 语法验证、标注框架列表与创建、词典查询。
- **语料库管理**：创建语料库、上传文本 / 目录、元数据更新、处理进度监控。
- **词汇分析**：词频、关键词、关键性对比（含内置参考语料库）、N-gram。
- **语境索引与搭配**：KWIC（含 CQL 与排序）、扩展上下文、搭配、词图分析。
- **语义分析**：语义域、隐喻、情感、同义词、词图对比。
- **主题建模**：LDA / LSA / NMF，以及 BERTopic 两步式嵌入与分析。
- **标注**：读取文本、保存 / 加载 / 列出 / 删除标注存档，可在标注模式中直接查看。
- **文献可视化**：文献库创建与上传、网络 / 时间 / 聚类 / 词云可视化。
- **话语分析**：DMIP 刻意隐喻分析、MDA 多维分析。
- **多文本任务与导出**：批量分析任务管理、标注数据导出。

### 工作原理
MCP 服务器是一个轻量代理，把 AI 的工具调用转换为 Meta-Lingo 的 REST API 请求，数据与桌面应用共用同一份数据库和文件：AI 创建的语料库会出现在应用里，分析结果与手动操作完全一致，你也可以在应用中复现 AI 发起的任何分析。

### 示例提问
- 「创建一个名为『政治演讲』的语料库，上传这三篇文本，并分析词频。」
- 「用对数似然比把我的语料库与 BNC 做关键词对比。」
- 「这个语料库的主要语义域分布是什么？深入看排名第一的域。」
- 「用 Halliday-Theme 框架标注第一篇文本的主位和述位，保存存档让我在应用中查看。」
    `,
    contentEn: `
# AI Assistant & MCP

Meta-Lingo offers three optional layers of AI capability: the **AI assistant** inside analysis modules, a dedicated **AI conversation mode**, and an **MCP server** for external AI clients. All AI features are optional and do not affect local, offline use.

## Connecting a Language Model

In Settings, configure either or both:
- **Ollama**: connect to a local Ollama service (default http://localhost:11434) and pick an installed model—fully local.
- **OpenAI-compatible API**: set the API address, key and model name; manage multiple lines, switch with one click and test the connection. Works with OpenAI, OpenAI-compatible third-party services or local proxies.

## In-module AI Assistant

Analysis modules show a robot icon in the left panel (available once Ollama is connected or an API is enabled). Click it to chat with the model, which answers based on the **current page state**:
- **Data source**: the current corpus / library and text scope.
- **Analysis parameters**: search conditions, filters, sorting and other settings.
- **Current view**: column descriptions, sorting and current-page data of the result table, or the chart type and a summary of the plotted data.

Supported modules: Word Frequency, Sentiment Analysis, Synonym Analysis, Keyword Extraction, N-gram Analysis, Concordance, Semantic Domain, Metaphor Analysis, Collocation Analysis, Word Sketch / Difference, and Topic Modeling (BERTopic, LDA, LSA, NMF). Use it to interpret results and get parameter suggestions.

## AI Conversation Mode

A switch in the top bar toggles between **Standard Mode** and **Conversation Mode**:
- **Standard Mode**: modules open as browser-style tabs, and several can be open at once.
- **Conversation Mode**: a chat interface similar to Claude Desktop. Just describe your research task in natural language, e.g., "list my corpora", "analyze word frequency in corpus X", "find the collocates of make in the academic corpus". The assistant calls Meta-Lingo's built-in corpus management, analysis, concordance and semantic tools automatically, shows the tool-call chain live (expandable), and interprets the results.
- **Module selector**: restrict which tool modules the AI can use for more focused conversations.
- **State preserved**: each mode keeps its own state, and conversation history persists across switches and restarts.
- **DMIP deliberate metaphor analysis** is run through the dmip_analysis tool in Conversation Mode.

## MCP Server

Meta-Lingo includes a built-in **Model Context Protocol (MCP) server** that lets external AI assistants use its corpus research tools autonomously: create corpora, upload texts, run analyses, annotate texts and interpret the results, with no manual steps. The MCP service is off by default; enable it in Settings → MCP Service.

### Supported Clients
| Client | Setup |
|--------|-------|
| Claude Desktop | One-click extension install (.mcpb, recommended) or manual stdio configuration |
| Claude.ai (web) | Custom connector (requires HTTPS, e.g., via an ngrok tunnel) |
| Cursor | Copy the configuration JSON |
| Other MCP clients | stdio or HTTP |

### Tool Coverage (63 tools)
- **Reference and lookup**: POS tags and USAS categories, CQL validation, annotation frameworks (list and create), dictionary lookup.
- **Corpus management**: create corpora, upload texts / directories, update metadata, monitor processing.
- **Lexical analysis**: word frequency, keywords, keyness (including built-in reference corpora), N-grams.
- **Concordance and collocation**: KWIC (with CQL and sorting), extended context, collocation, Word Sketch.
- **Semantic analysis**: semantic domains, metaphor, sentiment, synonyms, Sketch Difference.
- **Topic modeling**: LDA / LSA / NMF, plus two-step BERTopic embedding and analysis.
- **Annotation**: read texts; save / load / list / delete annotation archives that can be viewed directly in Annotation Mode.
- **Bibliography visualization**: create and upload libraries, network / temporal / cluster / word-cloud visualizations.
- **Discourse analysis**: DMIP deliberate metaphor analysis and MDA.
- **Multi-text tasks and export**: batch analysis task management and annotation export.

### How It Works
The MCP server is a lightweight proxy that translates AI tool calls into Meta-Lingo REST API requests, sharing the same database and files as the desktop app: corpora created by the AI appear in the app, results match what you would get manually, and you can reproduce any AI-initiated analysis in the app.

### Example Prompts
- "Create a corpus called 'Political Speeches', upload these three texts and analyze word frequency."
- "Compare my corpus with BNC using log-likelihood keyness."
- "What is the main semantic-domain distribution of this corpus? Dig into the top domain."
- "Annotate theme and rheme in the first text with the Halliday-Theme framework and save the archive so I can view it in the app."
    `
  },
  {
    id: 'settings',
    title: '应用设置',
    titleEn: 'Settings',
    description: '语言、主题与壁纸、Ollama 与 OpenAI 兼容 API、MCP 服务、模型下载管理、许可证与恢复出厂设置。',
    descriptionEn: 'Language, theme and wallpaper, Ollama and OpenAI-compatible API, MCP service, model download management, license and factory reset.',
    icon: 'Settings', // 设置页保持使用 Lucide 图标
    color: '#64748B', // Slate
    image: '/images/settings.png',
    content: `
# 应用设置

应用设置位于右上角的设置图标中，用于个性化 Meta-Lingo 的功能与外观，页面自上而下依次为：

## 界面语言
- 简体中文（zh）或英文（en）单选切换；界面文字、提示与使用手册语言随之更改。

## 主题与壁纸
- **主题模式**：浅色 / 深色，即时生效。
- **自定义壁纸**：上传本地图片作为背景，可更换或移除；**壁纸透明度** 5%–50%（默认 30%），避免影响阅读。

## Ollama 连接
- 配置本地 Ollama 服务地址（默认 http://localhost:11434），连接后选择已安装的模型。
- 用于各模块 AI 助手与主题建模的主题命名等功能。

## OpenAI 兼容 API
- 可选配置，用于 AI 助手、文献 AI 解读与主题命名；与 Ollama 满足其一即可。
- 支持管理多条 API 线路（API 地址、Key、模型名），单选切换当前线路，并可测试连接。

## MCP 服务
- 默认关闭；开启后可一键安装到 Claude Desktop 扩展（.mcpb），或复制手动配置 JSON 用于 Cursor 等客户端。
- 详见「AI 助手与 MCP」。

## 模型管理
- 在「模型管理」中按需下载可选的大模型：Whisper、YOLO、CLIP、Wav2Vec2、SBERT、PyMUSAS 神经网络语义标注模型、MIPVU 隐喻检测模型（DeBERTa）等，下载自 ModelScope，可删除。
- 下载目录默认位于应用数据目录，可自定义；内置的 NLTK 与 TorchCrepe 随应用提供。
- 若 Whisper 不可用，音频 / 视频的上传与处理将被禁用。

## 许可证
- 在弹窗中查看中文或英文版许可协议（Meta-Lingo 非商业软件许可），并提供引用信息（含 Zenodo DOI）。

## 恢复出厂设置
**此操作不可撤销，请谨慎使用。**
- **可选重置项**：数据库记录、语料库文件、标注存档、标注框架。
- **始终重置**：主题建模数据、Word2Vec 模型、USAS 配置、已下载的 ML 模型（内置模型保留）。
- 需在确认框中输入 RESET 才会执行；不使用该功能时，卸载或重装应用不会清除本地语料。
    `,
    contentEn: `
# Settings

Settings are reached from the gear icon at the top right and personalize Meta-Lingo's behavior and appearance. From top to bottom the page contains:

## Interface Language
- Choose Simplified Chinese (zh) or English (en); the interface text, prompts and user manual language follow.

## Theme and Wallpaper
- **Theme mode**: light / dark, effective immediately.
- **Custom wallpaper**: upload a local image as the background, then replace or remove it; **wallpaper opacity** 5%–50% (default 30%) keeps text readable.

## Ollama Connection
- Set the local Ollama address (default http://localhost:11434) and pick an installed model after connecting.
- Used by module AI assistants and for topic naming in Topic Modeling.

## OpenAI-compatible API
- Optional; used for AI assistants, AI notes in Bibliography Visualization and topic naming. Either this or Ollama is enough.
- Manage multiple API lines (address, key, model name), choose the active line with a radio button, and test the connection.

## MCP Service
- Off by default; once enabled, install the extension into Claude Desktop (.mcpb) in one click, or copy the manual configuration JSON for clients such as Cursor.
- See "AI Assistant & MCP" for details.

## Model Management
- Download optional large models on demand in Model Management: Whisper, YOLO, CLIP, Wav2Vec2, SBERT, the PyMUSAS neural semantic tagging model, the MIPVU metaphor detection models (DeBERTa), and more. Downloads come from ModelScope and can be removed.
- The download folder defaults to the app data directory and can be changed; the built-in NLTK data and TorchCrepe ship with the app.
- If Whisper is unavailable, audio / video upload and processing are disabled.

## License
- View the Chinese or English license (Meta-Lingo non-commercial software license) in a dialog, along with citation information (including the Zenodo DOI).

## Factory Reset
**This cannot be undone—use with care.**
- **Optional items**: database records, corpus files, annotation archives, annotation frameworks.
- **Always reset**: topic-modeling data, Word2Vec models, USAS configuration, downloaded ML models (built-in models are kept).
- You must type RESET in the confirmation dialog; if you do not use this feature, uninstalling or reinstalling the app does not remove your local corpora.
    `
  }
];

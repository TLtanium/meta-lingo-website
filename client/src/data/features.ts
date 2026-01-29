import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'corpus-management',
    title: '语料库管理',
    titleEn: 'Corpus Management',
    description: '管理和上传多模态语料，支持音频转录、视频追踪与语义分类。',
    descriptionEn: 'Manage multimodal corpora with audio transcription, video tracking, and semantic classification.',
    icon: 'corpus-management.png',
    color: '#3B82F6', // Blue
    image: '/images/corpus-management.png',
    content: `
# 语料库管理

语料库管理模块是 Meta-Lingo 的核心功能，用于上传、组织和管理您的多模态语料数据。

## 核心功能

### 多模态文件支持
- **文本**：支持 .txt 格式，自动进行编码识别。
- **音频**：支持 .mp3, .wav, .m4a, .flac, .ogg 等主流格式。
- **视频**：支持 .mp4, .avi, .mkv, .mov, .webm 等主流格式。

### 智能化处理
上传音视频文件时，系统提供强大的 AI 处理选项：
- **Whisper 语音转录**：使用 OpenAI Whisper Large V3 Turbo 模型，自动将语音转为文本，支持词级时间戳和自动语言识别。
- **YOLO 物体检测**：针对视频文件，使用 YOLOv8 进行物体检测和目标追踪，自动识别视频中的人物、车辆、动物等对象。
- **CLIP 语义分类**：使用 CLIP 模型对视频进行逐帧语义分析，支持自定义标签（如场景、氛围、动作），实现视频内容的语义化检索。

### 自动化标注
所有上传的文本（包括转录文本）都会自动进行 NLP 标注：
- **SpaCy 标注**：自动进行分词、词性标注 (POS)、命名实体识别 (NER) 和依存句法分析。
- **USAS 语义域标注**：基于 PyMUSAS 引擎，自动为文本添加语义域标签，支持一文一义消歧。

### 语料库组织
- **元数据管理**：为语料库设置名称、语言、来源、作者、日期等元数据。
- **标签系统**：使用标签对语料库和文本进行灵活分类。
- **批量操作**：支持批量上传、删除和重新标注。

## 使用场景
- **语言学研究**：构建特定领域的文本或多模态语料库。
- **多模态分析**：研究视频中的语言与视觉模态的互动关系。
- **口语研究**：利用高精度转录数据进行口语特征分析。
    `,
    contentEn: `
# Corpus Management

The Corpus Management module is the core of Meta-Lingo, designed for uploading, organizing, and managing your multimodal corpus data.

## Core Features

### Multimodal Support
- **Text**: Supports .txt format with automatic encoding detection.
- **Audio**: Supports .mp3, .wav, .m4a, .flac, .ogg, and other major formats.
- **Video**: Supports .mp4, .avi, .mkv, .mov, .webm, and other major formats.

### Intelligent Processing
Powerful AI processing options for audio and video files:
- **Whisper Transcription**: Uses OpenAI Whisper Large V3 Turbo model to automatically transcribe speech to text, supporting word-level timestamps and automatic language identification.
- **YOLO Object Detection**: Uses YOLOv8 for object detection and tracking in video files, automatically identifying persons, vehicles, animals, etc.
- **CLIP Semantic Classification**: Uses CLIP model for frame-by-frame semantic analysis of videos, supporting custom tags (e.g., scene, atmosphere, action) for semantic retrieval.

### Automated Annotation
All uploaded texts (including transcriptions) are automatically annotated:
- **SpaCy Annotation**: Automatic tokenization, Part-of-Speech (POS) tagging, Named Entity Recognition (NER), and dependency parsing.
- **USAS Semantic Tagging**: Based on PyMUSAS engine, automatically tags texts with semantic domains, supporting word sense disambiguation.

### Corpus Organization
- **Metadata Management**: Set metadata such as name, language, source, author, and date for corpora.
- **Tagging System**: Use tags for flexible classification of corpora and texts.
- **Batch Operations**: Support batch upload, deletion, and re-annotation.

## Use Cases
- **Linguistic Research**: Build domain-specific text or multimodal corpora.
- **Multimodal Analysis**: Study the interaction between linguistic and visual modalities in videos.
- **Spoken Language Research**: Analyze spoken features using high-precision transcription data.
    `
  },
  {
    id: 'word-frequency',
    title: '词频统计',
    titleEn: 'Word Frequency',
    description: '全面分析词汇出现频率，支持词性筛选、正则匹配与多维可视化。',
    descriptionEn: 'Comprehensive word frequency analysis with POS filtering, regex matching, and visualization.',
    icon: 'word-frequency.png',
    color: '#10B981', // Green
    image: '/images/word-frequency.png',
    content: `
# 词频统计

词频统计模块基于 SpaCy 标注数据，提供深度、灵活的词汇频率分析功能。

## 核心功能

### 灵活的语料选择
- **全库分析**：一键分析整个语料库。
- **按标签筛选**：只分析包含特定标签的文本。
- **手动选择**：精确选择特定的一个或多个文本进行分析。

### 精确的词性筛选
基于 Universal POS 标签集，支持两种筛选模式：
- **保留模式**：只统计选定的词性（如只看动词和名词）。
- **过滤模式**：排除选定的词性（如排除标点符号和停用词）。
- **分类选择**：将词性分为实词、虚词和其他，便于快速选择。

### 高级搜索配置
- **搜索目标**：支持按"词形"(Word) 或"词根"(Lemma) 统计。
- **大小写处理**：可选是否忽略大小写。
- **频率范围**：设置最小和最大频率阈值。
- **搜索模式**：
  - **开头/结尾匹配**：查找特定前缀或后缀的词。
  - **包含匹配**：查找包含特定子串的词。
  - **正则表达式**：使用 Regex 进行复杂模式匹配。
  - **词表匹配**：导入自定义词表进行定向统计。

### 结果展示与可视化
- **交互式表格**：支持排序、筛选、导出 CSV。
- **词云图**：直观展示高频词汇。
- **柱状图/饼图**：展示词频分布和占比。

## 使用场景
- **文体分析**：比较不同文本的词汇丰富度和用词偏好。
- **教学研究**：筛选高频词汇制作教学词表。
- **话语分析**：通过关键词频发现文本的关注焦点。
    `,
    contentEn: `
# Word Frequency

The Word Frequency module provides deep and flexible lexical frequency analysis based on SpaCy annotation data.

## Core Features

### Flexible Corpus Selection
- **Full Corpus**: Analyze the entire corpus with one click.
- **Tag Filtering**: Analyze only texts with specific tags.
- **Manual Selection**: Precisely select specific texts for analysis.

### Precise POS Filtering
Based on Universal POS tags, supporting two modes:
- **Keep Mode**: Count only selected POS tags (e.g., verbs and nouns only).
- **Filter Mode**: Exclude selected POS tags (e.g., exclude punctuation and stop words).
- **Categorized Selection**: POS tags are categorized into Content, Function, and Other for quick selection.

### Advanced Search Configuration
- **Target**: Count by "Word" form or "Lemma" (root) form.
- **Case Sensitivity**: Option to ignore case.
- **Frequency Range**: Set minimum and maximum frequency thresholds.
- **Search Modes**:
  - **Starts/Ends With**: Find words with specific prefixes or suffixes.
  - **Contains**: Find words containing specific substrings.
  - **Regex**: Use Regular Expressions for complex pattern matching.
  - **Wordlist**: Import custom wordlists for targeted statistics.

### Visualization & Export
- **Interactive Table**: Sort, filter, and export to CSV.
- **Word Cloud**: Visually display high-frequency words.
- **Bar/Pie Charts**: Show frequency distribution and proportions.

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
    description: '基于 NLTK WordNet 词典，自动识别语料库中词语的同义词关系。',
    descriptionEn: 'Identify synonym relations in corpus based on NLTK WordNet dictionary.',
    icon: 'synonym-analysis.png',
    color: '#F59E0B', // Amber
    image: '/images/synonym-analysis.png',
    content: `
# 同义词分析

同义词分析模块基于 NLTK WordNet 词典，自动识别语料库中词语的同义词关系，帮助研究者发现词语的语义关联和词汇替换模式。

## 核心功能

### 技术基础
- **NLTK WordNet**：普林斯顿大学开发的英语词汇数据库。
- **Open Multilingual Wordnet**：多语言 WordNet 扩展支持。
- **词性映射**：将 SpaCy 词性标签自动映射到 WordNet 词性（名词、动词、形容词、副词）。

### 同义词匹配
- **同义词集查询**：根据词语和词性查询 WordNet 的 synsets（同义词集）。
- **语料库过滤**：只保留在当前语料库中实际出现的同义词，发现词汇替换模式。
- **词元提取**：从每个 synset 中提取所有 lemmas（词元）作为同义词。

### 多维可视化
- **网络图**：力导向图展示词语-同义词关系网络。
- **树状图**：树形结构展示词语的同义词层级关系。
- **列表视图**：卡片形式展示所有词语及其同义词。

### 详细信息
- **同义词集详情**：查看 WordNet 同义词集的语义定义和例句。
- **词性标签**：显示词语在语料库中的词性信息。
- **频率统计**：显示同义词在语料库中的出现次数。

## 使用场景
- **词汇教学**：帮助学习者扩展词汇量，理解近义词辨析。
- **翻译研究**：寻找更地道、更精准的译词。
- **语义网络构建**：发现语料库中的词汇语义关联。
    `,
    contentEn: `
# Synonym Analysis

The Synonym Analysis module is based on the NLTK WordNet dictionary, automatically identifying synonym relationships in the corpus to help researchers discover semantic associations and vocabulary substitution patterns.

## Core Features

### Technical Foundation
- **NLTK WordNet**: English lexical database developed by Princeton University.
- **Open Multilingual Wordnet**: Multilingual WordNet extension support.
- **POS Mapping**: Automatically maps SpaCy POS tags to WordNet POS (noun, verb, adjective, adverb).

### Synonym Matching
- **Synset Query**: Query WordNet synsets based on word and POS.
- **Corpus Filtering**: Only retain synonyms that actually appear in the current corpus.
- **Lemma Extraction**: Extract all lemmas from each synset as synonyms.

### Multi-dimensional Visualization
- **Network Graph**: Force-directed graph showing word-synonym relationship networks.
- **Tree Diagram**: Hierarchical tree structure showing synonym relationships.
- **List View**: Card-style display of all words and their synonyms.

### Detailed Information
- **Synset Details**: View semantic definitions and examples from WordNet synsets.
- **POS Tags**: Display POS information of words in the corpus.
- **Frequency Statistics**: Show occurrence counts of synonyms in the corpus.

## Use Cases
- **Vocabulary Teaching**: Help learners expand vocabulary and understand synonym nuances.
- **Translation Studies**: Find more authentic and precise translation equivalents.
- **Semantic Network Construction**: Discover vocabulary semantic associations in corpora.
    `
  },
  {
    id: 'keyword-extraction',
    title: '关键词提取',
    titleEn: 'Keyword Extraction',
    description: '支持 TF-IDF、TextRank、YAKE、RAKE 四种算法，以及语料库关键性对比分析。',
    descriptionEn: 'Four algorithms (TF-IDF, TextRank, YAKE, RAKE) plus corpus keyness comparison analysis.',
    icon: 'keyword-extraction.png',
    color: '#8B5CF6', // Violet
    image: '/images/keyword-extraction.png',
    content: `
# 关键词提取

关键词提取模块提供两种分析方式：单文档关键词提取和关键性对比分析，帮助研究者从文本中发现核心词汇。

## 单文档算法

### TF-IDF（词频-逆文档频率）
- **原理**：通过词在文档中的频率和在整个语料库中的稀有程度衡量词的重要性。
- **适用**：多文档语料库，提取文档特有的重要词汇。

### TextRank（基于图的排序）
- **原理**：受 PageRank 启发，将词作为节点，共现关系作为边构建图，迭代计算重要性。
- **适用**：单个长文档，识别语义相关的关键词。

### YAKE!（Yet Another Keyword Extractor）
- **原理**：无监督方法，综合考虑词频、位置、词长、大小写、上下文关系等特征。
- **适用**：快速提取，无需训练数据。

### RAKE（快速自动关键词提取）
- **原理**：使用停用词和标点识别候选短语，根据词的度和频率计算分数。
- **适用**：提取短语关键词，识别技术术语和专有名词。

## 关键性对比

通过对比研究语料库和参照语料库，识别具有统计显著性的关键词：
- **Log-Likelihood**：对数似然比检验，对语料库大小差异不敏感。
- **Chi-squared**：卡方检验，带 Yates 校正。
- **Log Ratio**：效应量指标，显示频率比值。
- **Mutual Information**：互信息，偏向低频词。
- **Fisher's Exact**：精确检验，适用于小样本。

## 使用场景
- **文献综述**：快速提取大量文献的核心主题词。
- **语域分析**：对比不同语域的关键词差异。
- **时间对比**：分析不同时期语料的关键词变化。
    `,
    contentEn: `
# Keyword Extraction

The Keyword Extraction module provides two analysis modes: single-document extraction and keyness comparison analysis.

## Single-Document Algorithms

### TF-IDF
- **Principle**: Measures word importance through term frequency and inverse document frequency.
- **Use**: Multi-document corpora, extracting document-specific important words.

### TextRank
- **Principle**: PageRank-inspired graph algorithm using co-occurrence as edges.
- **Use**: Single long documents, identifying semantically related keywords.

### YAKE!
- **Principle**: Unsupervised method considering frequency, position, length, case, and context.
- **Use**: Quick extraction without training data.

### RAKE
- **Principle**: Uses stop words and punctuation to identify candidate phrases, scoring by degree and frequency.
- **Use**: Extracting phrase keywords and technical terms.

## Keyness Comparison

Compare study corpus with reference corpus to identify statistically significant keywords:
- **Log-Likelihood**: Insensitive to corpus size differences.
- **Chi-squared**: With Yates correction.
- **Log Ratio**: Effect size metric showing frequency ratio.
- **Mutual Information**: Favors low-frequency words.
- **Fisher's Exact**: For small samples.

## Use Cases
- **Literature Review**: Extract core themes from massive literature.
- **Register Analysis**: Compare keyword differences across registers.
- **Temporal Analysis**: Analyze keyword changes over time periods.
    `
  },
  {
    id: 'ngram-analysis',
    title: 'N-gram分析',
    titleEn: 'N-gram Analysis',
    description: '分析词语组合模式，支持 2-6 gram 统计，发现固定搭配和短语模式。',
    descriptionEn: 'Analyze word patterns with 2-6 gram statistics to discover collocations and phrase patterns.',
    icon: 'ngram-analysis.png',
    color: '#EC4899', // Pink
    image: '/images/ngram-analysis.png',
    content: `
# N-gram 分析

N-gram 分析模块基于 SpaCy 标注数据，统计语料库中连续 N 个词语的组合频率，是研究词语搭配和短语模式的重要工具。

## 核心功能

### 多阶 N-gram 支持
- **灵活配置**：支持 2-gram（二元组）到 6-gram（六元组）的任意长度统计。
- **多 N 值选择**：可同时选择多个 N 值进行分析，结果合并显示。
- **Nest N-gram 分组**：将较短的 N-gram 分组到包含它的较长 N-gram 下，发现短语扩展模式。

### 高级搜索配置
- **词性筛选**：基于 Universal POS 标签，支持保留或过滤特定词性。
- **频率范围**：设置最小和最大频率阈值。
- **最小词长**：设置 N-gram 中每个词语的最小字符长度。
- **搜索类型**：支持开头匹配、结尾匹配、包含匹配、包含词语、正则表达式、词表匹配。

### 多维可视化
- **柱状图**：展示前 N 个高频 N-gram。
- **网络图**：力导向图展示 N-gram 之间的关联关系。
- **桑基图**：展示 N-gram 的流动和转换模式。
- **词云图**：展示整体 N-gram 分布。

## 语言学应用
- **搭配分析**：识别词语之间的习惯性搭配。
- **短语模式发现**：发现固定短语和表达式。
- **语言风格分析**：比较不同语体或作者的语言习惯。
- **语法模式研究**：研究词性序列和句法模式。
    `,
    contentEn: `
# N-gram Analysis

The N-gram Analysis module, based on SpaCy annotation data, counts the frequency of N consecutive word combinations in the corpus.

## Core Features

### Multi-order N-gram Support
- **Flexible Config**: Supports 2-gram (bigrams) to 6-gram (hexagrams).
- **Multiple N Values**: Select multiple N values simultaneously with merged results.
- **Nest N-gram Grouping**: Group shorter N-grams under longer containing N-grams to discover extension patterns.

### Advanced Search Configuration
- **POS Filtering**: Based on Universal POS tags, support keeping or filtering specific POS.
- **Frequency Range**: Set minimum and maximum frequency thresholds.
- **Minimum Word Length**: Set minimum character length for words in N-grams.
- **Search Types**: Starts with, ends with, contains, contains word, regex, wordlist matching.

### Multi-dimensional Visualization
- **Bar Chart**: Show top N high-frequency N-grams.
- **Network Graph**: Force-directed graph showing N-gram relationships.
- **Sankey Diagram**: Show N-gram flow and transition patterns.
- **Word Cloud**: Show overall N-gram distribution.

## Linguistic Applications
- **Collocation Analysis**: Identify habitual word collocations.
- **Phrase Pattern Discovery**: Discover fixed phrases and expressions.
- **Stylistic Analysis**: Compare language habits across registers or authors.
- **Grammatical Pattern Research**: Study POS sequences and syntactic patterns.
    `
  },
  {
    id: 'collocation-analysis',
    title: '共现关系',
    titleEn: 'Concordance',
    description: 'KWIC 关键词语境搜索，支持 CQL 语料库查询语言，多种搜索模式。',
    descriptionEn: 'KWIC concordance search with CQL corpus query language and multiple search modes.',
    icon: 'collocation-analysis.png',
    color: '#EF4444', // Red
    image: '/images/collocation-analysis.png',
    content: `
# 共现关系分析

共现关系分析模块提供 KWIC（Key Word In Context，关键词在语境中）搜索功能，帮助您查找和分析语料库中特定词语或模式的出现情况。

## 多种搜索模式

### Simple（简单搜索）
支持通配符：* 匹配任意字符，? 匹配单个字符，| 或运算符。

### Lemma（词元搜索）
基于词元进行搜索，自动匹配词语的所有变体（如 go, goes, went, going, gone）。

### Phrase（短语搜索）
精确匹配短语，支持正则表达式。

### Word（词形搜索）
精确匹配词形，区分大小写。

### Character（字符搜索）
搜索包含特定字符或字符串的词语。

### CQL（语料库查询语言）
高级查询语法，支持复杂的语法和语义匹配：
- [word="test"]：匹配词形
- [lemma="go"]：匹配词元
- [pos="NOUN"]：匹配词性
- [lemma="make"] [] [pos="NOUN"]：make + 任意词 + 名词

## 结果功能
- **上下文显示**：可调整左右上下文长度（1-15 词）。
- **多级排序**：按左/右上下文、词形、词元、词性排序。
- **高级筛选**：隐藏子匹配、仅首次匹配、查询筛选。
- **扩展上下文**：点击展开查看更长的上下文。
- **高亮隐喻（开关）**：在工具栏启用后，若关键词已完成隐喻标注，将以琥珀色背景高亮显示，便于快速定位隐喻用法（仅英语语料可用）。

## 可视化
- **密度分布图**：显示关键词在文本中的位置分布。
- **分组山脊图**：按文档分组显示关键词分布。
    `,
    contentEn: `
# Concordance Analysis

The Concordance module provides KWIC (Key Word In Context) search functionality to find and analyze specific words or patterns in the corpus.

## Multiple Search Modes

### Simple Search
Supports wildcards: * matches any characters, ? matches single character, | OR operator.

### Lemma Search
Search by lemma, automatically matching all word variants (e.g., go, goes, went, going, gone).

### Phrase Search
Exact phrase matching with regex support.

### Word Search
Exact word form matching, case-sensitive.

### Character Search
Search for words containing specific characters or strings.

### CQL (Corpus Query Language)
Advanced query syntax for complex grammatical and semantic matching:
- [word="test"]: Match word form
- [lemma="go"]: Match lemma
- [pos="NOUN"]: Match POS
- [lemma="make"] [] [pos="NOUN"]: make + any word + noun

## Result Features
- **Context Display**: Adjustable left/right context length (1-15 words).
- **Multi-level Sorting**: Sort by left/right context, word, lemma, POS.
- **Advanced Filtering**: Hide sub-matches, first match only, query filtering.
- **Extended Context**: Click to expand for longer context.
- **Highlight Metaphor (Toggle)**: When enabled in the toolbar, if the keyword has metaphor annotations, it will be highlighted with an amber background to quickly spot metaphorical usage (English only).

## Visualization
- **Density Plot**: Show keyword position distribution in texts.
- **Ridge Plot**: Show keyword distribution grouped by document.
    `
  },
  {
    id: 'semantic-field',
    title: '语义分析',
    titleEn: 'Semantic Analysis',
    description: '基于 USAS 语义标签系统，支持规则、神经网络和混合三种标注模式。',
    descriptionEn: 'Semantic analysis based on USAS system with rule-based, neural, and hybrid annotation modes.',
    icon: 'semantic-field.png',
    color: '#14B8A6', // Teal
    image: '/images/semantic-field.png',
    content: `
# 语义分析

语义分析模块基于 USAS（UCREL Semantic Analysis System）标注数据，对语料库中的词语进行语义域分类和统计分析。

## USAS 语义域系统

### 21 个主要大类
USAS 将词语归类到 21 个主要语义域：
- **A**: General & Abstract Terms（通用和抽象术语）
- **B**: The Body & The Individual（身体和个体）
- **E**: Emotional Actions, States & Processes（情感行动、状态和过程）
- **I**: Money & Commerce（金钱和商业）
- **Q**: Language & Communication（语言和通信）
- **S**: Social Actions, States & Processes（社会行动、状态和过程）
- 以及更多细分子类...

### 语义标签后缀
- **+/-**：表示正面/负面极性（如 A5.1+ 表示正面评价）
- **_MWE**：多词表达式标记

## 三种标注模式

### 规则消歧模式
- 基于 PyMUSAS 规则标注器
- 支持多词表达式识别
- 话语域识别和一文一义规则消歧

### 神经网络模式
- 使用预训练深度学习模型
- 利用上下文信息预测
- 处理未知词和新词

### 混合模式（推荐）
- 结合规则和神经网络优点
- 三重神经回退机制
- 标注质量最优

## 结果展示
- **按语义域**：统计每个语义域的频率和占比
- **按词语**：显示词语所属的语义域及其频率
- **可视化**：柱状图、饼图展示语义分布

---

## 隐喻分析（仅英语）

隐喻分析基于 MIPVU（Metaphor Identification Procedure VU）标注方法，结合规则过滤与深度学习模型，自动识别英语文本中的隐喻词。

### MIPVU 判定思路（简要）
- **基本义（basic meaning）**：更具体、可感知、与身体经验更相关、历史上更早出现的词义。
- **上下文义（contextual meaning）**：词在当前语境中的实际含义。
- **隐喻判定**：若上下文义与基本义不同，但二者可通过对比建立理解关系，则判定为隐喻用法。

### 混合检测流程（规则 + 双模型）
1. **词形过滤（非隐喻词表）**：使用 MIPVU 映射词表进行初步过滤（高频且 100% 非隐喻词/词组，共 1,098 项）。
2. **基于 SpaCy 的规则过滤**：过滤部分高置信度字面用法（如数字/专名/符号、to + 动词等）以及若干 dep + word 高置信度组合。
3. **HiTZ 预训练模型检测**：使用 HiTZ 团队隐喻检测模型进行序列标注，输出 B-METAPHOR / I-METAPHOR / O 标签。
4. **功能词二次检测**：针对 IN/DT/RB/RP 等功能词，使用自训练的 [DeBERTa-v3-large 模型](https://huggingface.co/tommyleo2077/deberta-v3-large-metaphor-in-dt-rb-rp) 进行二次判断，并使用阈值 P(隐喻) >= 0.4 进行决策。

### 结果呈现
- **表格视图**：逐词显示隐喻标注结果、词性、统计信息。
- **文本视图**：在原文中以琥珀色背景高亮显示隐喻词。
- **词性筛选**：可按 NOUN/VERB/ADJ/ADV/ADP 等词性筛选隐喻结果。

### 标注方法的可靠性
- MIPVU 是语料库语言学中广泛使用的隐喻标注标准
- 人工标注一致性可通过 Cohen's Kappa、Krippendorff's Alpha 等指标评估
- 可在本软件的编码者间信度模块中计算与导出一致性指标

### 与语义域结果联动：高亮隐喻词
在“按词语”结果模式下，提供“高亮隐喻词”开关：
- 启用后，已被标注为隐喻的词会以绿色加粗样式突出显示，便于在语义域统计中快速定位隐喻触发词。
- 该功能依赖隐喻标注数据（仅英语），请先完成隐喻检测/标注。

### 引用与致谢
- Steen, G. et al. (2010). *A method for linguistic metaphor identification: From MIP to MIPVU*. John Benjamins.
- Sanchez-Bayona, E. & Agerri, R. (2022). *Leveraging a New Spanish Corpus for Multilingual and Cross-lingual Metaphor Detection*. CoNLL 2022.（ACL Anthology）
- [HiTZ 预训练模型](https://huggingface.co/HiTZ/deberta-large-metaphor-detection-en)
    `,
    contentEn: `
# Semantic Analysis

The Semantic Analysis module classifies and analyzes words in the corpus based on USAS (UCREL Semantic Analysis System) annotation data.

## USAS Semantic System

### 21 Major Categories
USAS classifies words into 21 major semantic domains:
- **A**: General & Abstract Terms
- **B**: The Body & The Individual
- **E**: Emotional Actions, States & Processes
- **I**: Money & Commerce
- **Q**: Language & Communication
- **S**: Social Actions, States & Processes
- And more subcategories...

### Semantic Tag Suffixes
- **+/-**: Indicates positive/negative polarity (e.g., A5.1+ for positive evaluation)
- **_MWE**: Multi-word expression marker

## Three Annotation Modes

### Rule-based Mode
- Based on PyMUSAS rule tagger
- Supports multi-word expression recognition
- Discourse domain and one-sense-per-discourse disambiguation

### Neural Mode
- Uses pre-trained deep learning model
- Leverages context information for prediction
- Handles unknown and new words

### Hybrid Mode (Recommended)
- Combines advantages of both methods
- Triple neural fallback mechanism
- Best annotation quality

## Results Display
- **By Domain**: Statistics for each semantic domain's frequency and proportion
- **By Word**: Shows words' semantic domains and frequencies
- **Visualization**: Bar charts, pie charts showing semantic distribution

---

## Metaphor Analysis (English only)

Metaphor analysis is based on the MIPVU (Metaphor Identification Procedure VU) approach and uses a hybrid pipeline combining rule-based filtering and deep learning models to automatically detect metaphorical words in English texts.

### MIPVU decision logic (brief)
- **Basic meaning**: more concrete, bodily/experiential, historically earlier, and more specific.
- **Contextual meaning**: the meaning a word takes in the current context.
- **Metaphor decision**: if contextual meaning contrasts with basic meaning but can be understood via comparison, classify as metaphor.

### Hybrid detection pipeline (rules + two models)
1. **Form-based filtering (non-metaphor list)**: initial filtering with a high-frequency non-metaphor list derived from MIPVU mapping (1,098 items).
2. **SpaCy-driven rule filtering**: filters a set of high-confidence literal patterns (e.g., numbers/proper names/symbols, to + verb) and selected dep + word combinations.
3. **HiTZ pre-trained detector**: token classification producing B-METAPHOR / I-METAPHOR / O tags.
4. **Second-pass for function words**: for IN/DT/RB/RP, a fine-tuned [DeBERTa-v3-large model](https://huggingface.co/tommyleo2077/deberta-v3-large-metaphor-in-dt-rb-rp) performs second-pass detection with threshold P(metaphor) >= 0.4.

### Result views
- **Table view**: token-level metaphor annotations with POS and summary statistics.
- **Text view**: highlights metaphor words in the original text with an amber background.
- **POS filter**: filter metaphors by POS (NOUN/VERB/ADJ/ADV/ADP, etc.).

### Reliability
- MIPVU is a widely used manual annotation standard
- Agreement can be assessed via Cohen's Kappa and Krippendorff's Alpha
- These metrics can be computed and exported in the Inter-Coder Reliability module

### Linked with semantic domain results: highlight metaphor words
In the "By Word" view, a "Highlight metaphor words" toggle is available:
- When enabled, metaphor words are emphasized (green bold) to quickly spot metaphor triggers in semantic-domain outputs.
- Requires metaphor annotations (English only). Please run metaphor detection/annotation first.

### Citations & credits
- Steen, G. et al. (2010). *A method for linguistic metaphor identification: From MIP to MIPVU*. John Benjamins.
- Sanchez-Bayona, E. & Agerri, R. (2022). *Leveraging a New Spanish Corpus for Multilingual and Cross-lingual Metaphor Detection*. CoNLL 2022. (ACL Anthology)
- [HiTZ model](https://huggingface.co/HiTZ/deberta-large-metaphor-detection-en)
    `
  },
  {
    id: 'word-sketch',
    title: '词图分析',
    titleEn: 'Word Sketch',
    description: '基于依存句法分析词汇的语法搭配，使用 logDice 评分，支持词图对比。',
    descriptionEn: 'Analyze grammatical collocations based on dependency parsing with logDice scoring and sketch difference.',
    icon: 'word-sketch.png',
    color: '#F43F5E', // Rose
    image: '/images/word-sketch.png',
    content: `
# 词图分析 (Word Sketch)

词图分析模块基于 SpaCy 依存句法标注数据，分析词语的语法搭配模式，提供 Word Sketch 和 Word Sketch Difference 两种分析模式。

## 实现原理

### 依存句法分析
- 使用 SpaCy 进行依存句法分析
- 识别词语之间的语法关系
- 支持 50 种语法关系模板

### logDice 得分
衡量搭配强度的统计方法：
- **值域**：通常为 0-14
- **> 7**：非常强的搭配
- **5-7**：强搭配
- **3-5**：中等搭配
- **< 3**：弱搭配

## Word Sketch

### 语法关系分类
自动将搭配词按语法关系分类：
- **主语关系**：nsubj, nsubjpass, csubj
- **宾语关系**：dobj, iobj, pobj
- **修饰关系**：amod, advmod, nmod
- **介词关系**：prep, pcomp
- **从句关系**：advcl, relcl, ccomp

### BERTopic 风格卡片
- 关系名称和搭配数量
- 搭配词表格（词语、频率、得分）
- 展开/收起功能

## Word Sketch Difference

### 搭配对比
- 对比两个词语的搭配差异
- 颜色编码显示偏向
- 共有搭配和独有搭配

### 颜色系统
- **蓝色系**：词语 1 的搭配更强
- **红色系**：词语 2 的搭配更强
- **灰色**：搭配强度相近
    `,
    contentEn: `
# Word Sketch

The Word Sketch module analyzes grammatical collocation patterns based on SpaCy dependency parsing data, providing Word Sketch and Word Sketch Difference analysis modes.

## Implementation

### Dependency Parsing
- Uses SpaCy for dependency analysis
- Identifies grammatical relations between words
- Supports 50 grammatical relation templates

### logDice Score
Statistical method measuring collocation strength:
- **Range**: Usually 0-14
- **> 7**: Very strong collocation
- **5-7**: Strong collocation
- **3-5**: Medium collocation
- **< 3**: Weak collocation

## Word Sketch

### Grammatical Relation Classification
Automatically classifies collocates by grammatical relations:
- **Subject Relations**: nsubj, nsubjpass, csubj
- **Object Relations**: dobj, iobj, pobj
- **Modifier Relations**: amod, advmod, nmod
- **Prepositional Relations**: prep, pcomp
- **Clause Relations**: advcl, relcl, ccomp

### BERTopic-style Cards
- Relation name and collocate count
- Collocate table (word, frequency, score)
- Expand/collapse functionality

## Word Sketch Difference

### Collocation Comparison
- Compare collocation differences between two words
- Color-coded bias indication
- Shared and unique collocations

### Color System
- **Blue shades**: Word 1's collocation is stronger
- **Red shades**: Word 2's collocation is stronger
- **Gray**: Similar collocation strength
    `
  },
  {
    id: 'literature-viz',
    title: '文献可视化',
    titleEn: 'Bibliometrics',
    description: '支持 Web of Science 和 CNKI 的 Refworks 格式，生成合作网络和突增检测图。',
    descriptionEn: 'Import WOS/CNKI Refworks format to generate collaboration networks and burst detection.',
    icon: 'literature-viz.png',
    color: '#6366F1', // Indigo
    image: '/images/literature-viz.png',
    content: `
# 文献可视化

文献可视化模块用于管理和分析学术文献数据，支持从 Web of Science (WOS) 和中国知网 (CNKI) 导入 Refworks 格式的文献数据。

## 数据导入

### 支持的数据源
- **Web of Science (WOS)**：导出的 Refworks 格式文件
- **CNKI（中国知网）**：导出的 Refworks 格式文件

### 自动解析
自动提取标题、作者、年份、期刊、关键词、机构、国家等元数据。

## 可视化分析

### 网络图
- **关键词共现网络**：展示关键词之间的共现关系
- **作者合作网络**：展示作者之间的合作关系
- **机构合作网络**：展示机构之间的合作关系
- **国家合作网络**：展示国家之间的合作关系

### 时区视图
- 按时间段展示文献分布
- 识别研究主题的时间演变
- 发现新兴热点和衰退领域

### 突增检测
- **关键词突增**：检测关键词在特定时间段内的突增趋势
- **作者突增**：检测作者在特定时间段内的活跃度突增
- **甘特图风格**：直观显示突增时间段

## 筛选功能
- 年份范围筛选
- 作者/机构/国家筛选
- 关键词/期刊筛选
- 文献类型筛选
    `,
    contentEn: `
# Bibliometrics

The Bibliometrics module manages and analyzes academic literature data, supporting Refworks format import from Web of Science (WOS) and CNKI.

## Data Import

### Supported Sources
- **Web of Science (WOS)**: Exported Refworks format files
- **CNKI**: Exported Refworks format files

### Auto Parsing
Automatically extracts title, author, year, journal, keywords, institution, country, and other metadata.

## Visualization Analysis

### Network Graphs
- **Keyword Co-occurrence Network**: Shows co-occurrence relationships between keywords
- **Co-author Network**: Shows collaboration relationships between authors
- **Co-institution Network**: Shows collaboration between institutions
- **Co-country Network**: Shows collaboration between countries

### Timezone View
- Display literature distribution by time period
- Identify temporal evolution of research themes
- Discover emerging hotspots and declining areas

### Burst Detection
- **Keyword Burst**: Detect keyword surge trends in specific periods
- **Author Burst**: Detect author activity surges in specific periods
- **Gantt-style**: Visually display burst periods

## Filtering
- Year range filtering
- Author/Institution/Country filtering
- Keyword/Journal filtering
- Document type filtering
    `
  },
  {
    id: 'annotation-mode',
    title: '标注模式',
    titleEn: 'Annotation Mode',
    description: '基于框架的多层级标注，支持纯文本和多模态标注，含编码者间信度计算。',
    descriptionEn: 'Framework-based multi-level annotation for text and multimodal data with inter-coder reliability.',
    icon: 'annotation-mode.png',
    color: '#8B5CF6', // Violet
    image: '/images/annotation-mode.png',
    content: `
# 标注模式

标注模式模块用于对文本和多媒体内容进行基于框架的标注，支持纯文本标注和多模态标注。

## 纯文本标注

### 划词标注
- 分句显示，每句单行
- 拖动鼠标选择文本创建标注
- 标签块精确对齐划词边界
- 层叠显示：大标签在上，小标签在下

### 交叉检测
禁止交叉标注，只允许：
- 完全包含
- 不重叠

### SpaCy 预标注
- 自动显示词性标注 (POS)
- 自动显示命名实体 (NER)
- 句法结构可视化（成分句法、依存句法）

## 自动标注（Auto Annotation）

除手动标注外，系统支持将已有的 NLP/隐喻分析结果一键转换为标注层，减少重复劳动。

### MIPVU 隐喻自动标注（仅英语）
- **读取隐喻检测结果**：从语料库的隐喻分析结果中读取每个词的隐喻字段（例如 is_metaphor=true）。
- **识别隐喻词**：筛出所有被判定为隐喻的词实例。
- **创建标注**：为每个隐喻词自动创建标签，例如 indirect（间接隐喻）标签。
- **注意**：需先完成隐喻检测/标注流程，否则无法生成隐喻标注层。

## 多模态标注

### 视频标注
- 画框模式：在视频帧上绘制边界框
- 帧追踪系统：关键帧插值，减少手动标注
- YOLO 叠加显示：实时显示检测框

### 音频标注（仅英语）

基于 Wav2Vec2 强制对齐数据，提供交互式音频波形标注界面：

**波形可视化 (Wavesurfer.js)**
- **波形显示**：完整音频波形，支持缩放和滚动
- **词级对齐**：波形上方显示每个单词的时间位置标签
- **音高曲线**：可选显示 F0（基频）曲线叠加层
- **缩放控制**：按钮或 Ctrl+滚轮缩放，以播放指针为中心

**播放控制**
- 播放/暂停、-5s/+5s 快速跳转
- 点击波形任意位置跳转
- DAW 模式：播放指针保持在视图中央，波形滚动

**画框标注**
- 在波形上拖拽绘制标注框
- 画框显示当前选中的标签名称和颜色
- 自动记录开始和结束时间

**转录文本标注**
- 划词标注与纯文本标注相同
- 播放时自动高亮当前正在播放的句子
- 点击转录文本中的句子可跳转到对应时间

> 注意：中文音频不支持波形标注，只能通过纯文本模式对转录文本进行标注。

### 多轨时间轴
- YOLO 追踪轨
- 转录段轨
- 用户标注轨
- 关键帧标记
- DAW 范式：播放针居中滚动

## 编码者间信度

### 支持的系数
- **平均配对百分比一致**
- **Fleiss' Kappa**：三个及以上编码者
- **Cohen's Kappa**：两个编码者
- **Krippendorff's Alpha**：支持四种测量层次
- **召回率与精确率**：需要标准答案

### 报告导出
- HTML 报告
- CSV 报告
    `,
    contentEn: `
# Annotation Mode

The Annotation Mode module provides framework-based annotation for text and multimedia content, supporting text and multimodal annotation.

## Text Annotation

### Span Annotation
- Sentence-by-sentence display
- Drag to select text and create annotations
- Tag blocks precisely aligned to selection boundaries
- Layered display: larger tags on top, smaller below

### Cross Detection
Prohibits crossing annotations, only allows:
- Complete containment
- Non-overlapping

### SpaCy Pre-annotation
- Automatic POS tagging display
- Automatic Named Entity display
- Syntactic structure visualization (constituency, dependency)

## Auto Annotation

In addition to manual annotation, Meta-Lingo can convert existing NLP/metaphor analysis outputs into annotation layers to reduce repetitive work.

### MIPVU-based metaphor auto-annotation (English only)
- **Read metaphor results**: load token-level metaphor outputs from the corpus (e.g., is_metaphor=true).
- **Identify metaphors**: select all tokens classified as metaphor.
- **Create annotations**: automatically create labels such as indirect (indirect metaphor) for each metaphor token.
- **Note**: requires completing metaphor detection/annotation first.

## Multimodal Annotation

### Video Annotation
- Drawing mode: Draw bounding boxes on video frames
- Frame tracking system: Keyframe interpolation reduces manual work
- YOLO overlay: Real-time detection box display

### Audio Annotation (English only)

Based on Wav2Vec2 forced alignment data, provides an interactive audio waveform annotation interface:

**Waveform Visualization (Wavesurfer.js)**
- **Waveform Display**: Complete audio waveform with zoom and scroll support
- **Word-level Alignment**: Labels showing each word's time position above the waveform
- **Pitch Curve**: Optional F0 (fundamental frequency) curve overlay
- **Zoom Controls**: Buttons or Ctrl+Scroll to zoom, centered on playhead

**Playback Controls**
- Play/Pause, -5s/+5s quick jump
- Click anywhere on waveform to seek
- DAW Mode: Playhead stays centered, waveform scrolls

**Box Drawing Annotation**
- Drag on waveform to draw annotation boxes
- Boxes show current selected label name and color
- Automatically records start and end times

**Transcript Annotation**
- Text selection annotation same as text mode
- Auto-highlight currently playing sentence during playback
- Click transcript sentences to jump to corresponding time

> Note: Chinese audio does not support waveform annotation, only plain text mode for transcript annotation.

### Multi-track Timeline
- YOLO tracking track
- Transcription segment track
- User annotation track
- Keyframe markers
- DAW paradigm: Playhead centered scrolling

## Inter-Coder Reliability

### Supported Coefficients
- **Average Pairwise Percent Agreement**
- **Fleiss' Kappa**: Three or more coders
- **Cohen's Kappa**: Two coders
- **Krippendorff's Alpha**: Supports four measurement levels
- **Recall & Precision**: Requires gold standard

### Report Export
- HTML report
- CSV report
    `
  },
  {
    id: 'topic-modeling',
    title: '主题建模',
    titleEn: 'Topic Modeling',
    description: '支持 BERTopic、LDA、LSA、NMF 四种算法，含动态主题分析和主题数优化。',
    descriptionEn: 'Four algorithms (BERTopic, LDA, LSA, NMF) with dynamic topic analysis and topic number optimization.',
    icon: 'topic-modeling.png',
    color: '#14B8A6', // Teal
    image: '/images/topic-modeling.png',
    content: `
# 主题建模

主题建模模块提供四种主题建模方法：BERTopic、LDA、LSA 和 NMF，帮助研究者从文本语料中自动发现和提取主题。

## BERTopic

### 工作流程
1. 使用 SBERT 模型生成文本嵌入
2. UMAP 或 PCA 降维
3. HDBSCAN、BIRCH 或 K-Means 聚类
4. c-TF-IDF 或 KeyBERT 主题表示
5. 可选 Ollama 生成主题名称

### 特色功能
- 嵌入文件管理和复用
- 动态主题分析（Topic over Time）
- 离群值处理和预估
- 主题合并和标签编辑

## LDA

### 特点
- 经典概率主题模型
- Alpha/Eta 先验参数可自定义
- 主题数优化（一致性曲线）
- 动态主题分析支持

## LSA

### 特点
- 基于奇异值分解 (SVD)
- 速度快，适合大规模数据
- 解释方差比评估
- 主题数优化（方差曲线）

## NMF

### 特点
- 非负矩阵分解
- 稀疏主题表示
- 多种初始化方法
- 重构误差评估

## 可视化
- **主题词条形图**：每个主题的关键词权重
- **文档散点图**：UMAP 降维后的分布
- **相似性热图**：主题相似度矩阵
- **词项排名图**：词权重衰减曲线
- **时间演化图**：主题随时间变化
    `,
    contentEn: `
# Topic Modeling

The Topic Modeling module provides four methods: BERTopic, LDA, LSA, and NMF for automatically discovering topics in text corpora.

## BERTopic

### Workflow
1. Generate text embeddings with SBERT model
2. UMAP or PCA dimensionality reduction
3. HDBSCAN, BIRCH, or K-Means clustering
4. c-TF-IDF or KeyBERT topic representation
5. Optional Ollama for topic naming

### Special Features
- Embedding file management and reuse
- Dynamic topic analysis (Topic over Time)
- Outlier handling and estimation
- Topic merging and label editing

## LDA

### Features
- Classic probabilistic topic model
- Customizable Alpha/Eta prior parameters
- Topic number optimization (coherence curve)
- Dynamic topic analysis support

## LSA

### Features
- Based on Singular Value Decomposition (SVD)
- Fast, suitable for large-scale data
- Explained variance ratio evaluation
- Topic number optimization (variance curve)

## NMF

### Features
- Non-negative Matrix Factorization
- Sparse topic representation
- Multiple initialization methods
- Reconstruction error evaluation

## Visualization
- **Topic Word Bar Chart**: Keyword weights for each topic
- **Document Scatter Plot**: UMAP-reduced distribution
- **Similarity Heatmap**: Topic similarity matrix
- **Term Rank Chart**: Word weight decay curves
- **Time Evolution Chart**: Topics over time
    `
  },
  {
    id: 'settings',
    title: '应用设置',
    titleEn: 'Settings',
    description: '个性化配置应用，包括 USAS 标注模式、Ollama 连接和壁纸设置。',
    descriptionEn: 'Configure app settings including USAS annotation mode, Ollama connection, and wallpaper.',
    icon: 'Settings', // 设置页保持使用 Lucide 图标
    color: '#64748B', // Slate
    image: '/images/settings.png',
    content: `
# 应用设置

应用设置模块用于个性化配置 Meta-Lingo 的各项功能和外观。

## 界面语言
- **中文 (zh)**：简体中文界面
- **英文 (en)**：英文界面

## 壁纸设置
- **主题模式**：浅色/深色模式切换
- **自定义壁纸**：上传自定义图片作为背景
- **壁纸透明度**：调节透明度（5%-50%）

## Ollama 连接
配置本地大语言模型连接，用于主题建模的主题标签生成等功能：
- **URL 配置**：默认 http://localhost:11434
- **模型选择**：选择已安装的模型

## USAS 标注模式

### 规则模式
- 基于 PyMUSAS 规则标注器
- 速度快，可解释性强

### 神经网络模式
- 基于预训练模型
- 上下文理解能力强

### 混合模式
- 兼顾速度和准确性
- 推荐用于追求最佳效果

## USAS 语义域配置
- 为不同文本类型配置优先语义域
- 用于 USAS 标注时的消歧

## 恢复出厂设置
可选重置项：
- 数据库记录
- 语料库文件
- 标注存档
- 标注框架
    `,
    contentEn: `
# Settings

The Settings module provides personalized configuration for Meta-Lingo's features and appearance.

## Interface Language
- **Chinese (zh)**: Simplified Chinese interface
- **English (en)**: English interface

## Wallpaper Settings
- **Theme Mode**: Light/Dark mode toggle
- **Custom Wallpaper**: Upload custom image as background
- **Wallpaper Opacity**: Adjust opacity (5%-50%)

## Ollama Connection
Configure local LLM connection for topic modeling label generation:
- **URL Config**: Default http://localhost:11434
- **Model Selection**: Select installed models

## USAS Annotation Mode

### Rule-based Mode
- Based on PyMUSAS rule tagger
- Fast, highly interpretable

### Neural Mode
- Based on pre-trained model
- Strong context understanding

### Hybrid Mode
- Balances speed and accuracy
- Recommended for best results

## USAS Semantic Domain Config
- Configure priority semantic domains for different text types
- Used for USAS disambiguation

## Factory Reset
Optional reset items:
- Database records
- Corpus files
- Annotation archives
- Annotation frameworks
    `
  }
];

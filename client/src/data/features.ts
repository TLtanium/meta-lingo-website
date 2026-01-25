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
- **搜索目标**：支持按“词形”(Word) 或“词根”(Lemma) 统计。
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
    description: '基于词向量模型分析词汇同义关系，发现潜在的语义关联。',
    descriptionEn: 'Analyze synonym relations based on word embeddings to discover semantic associations.',
    icon: 'synonym-analysis.png',
    color: '#F59E0B', // Amber
    image: '/images/synonym-analysis.png',
    content: `
# 同义词分析

同义词分析模块利用预训练的词向量模型（Word Embeddings），帮助研究者发现词语之间的语义相似性和同义关系。

## 核心功能

### 语义相似度计算
- **词向量模型**：基于大规模语料预训练的词向量，捕捉词语的深层语义特征。
- **相似度评分**：计算目标词与候选词之间的余弦相似度（Cosine Similarity），量化语义接近程度。

### 动态网络图
- **可视化展示**：使用力导向图（Force-directed Graph）展示同义词网络。
- **节点交互**：点击节点可展开其二级同义词，探索更广泛的语义网络。
- **聚类分析**：自动发现语义相近的词群。

### 上下文验证
- **例句检索**：点击任意同义词，可立即在语料库中检索包含该词的例句（KWIC）。
- **语境对比**：比较原词与同义词在实际语境中的用法差异。

## 使用场景
- **词汇教学**：帮助学习者扩展词汇量，理解近义词辨析。
- **翻译研究**：寻找更地道、更精准的译词。
- **创意写作**：寻找替代词汇，丰富表达多样性。
    `,
    contentEn: `
# Synonym Analysis

The Synonym Analysis module utilizes pre-trained Word Embeddings to help researchers discover semantic similarities and synonym relationships between words.

## Core Features

### Semantic Similarity Calculation
- **Word Embeddings**: Based on large-scale pre-trained models to capture deep semantic features.
- **Similarity Scoring**: Calculates Cosine Similarity between target and candidate words to quantify semantic proximity.

### Dynamic Network Graph
- **Visualization**: Uses Force-directed Graphs to display synonym networks.
- **Interaction**: Click nodes to expand secondary synonyms and explore broader semantic networks.
- **Clustering**: Automatically discovers semantically related word groups.

### Context Verification
- **Example Retrieval**: Click any synonym to instantly retrieve KWIC examples from the corpus.
- **Context Comparison**: Compare usage differences between the original word and synonyms in actual contexts.

## Use Cases
- **Vocabulary Teaching**: Help learners expand vocabulary and understand synonym nuances.
- **Translation Studies**: Find more authentic and precise translation equivalents.
- **Creative Writing**: Find alternative words to enrich expression diversity.
    `
  },
  {
    id: 'keyword-extraction',
    title: '关键词提取',
    titleEn: 'Keyword Extraction',
    description: '使用 TF-IDF 和 TextRank 算法提取文本核心关键词，快速把握文本主旨。',
    descriptionEn: 'Extract core keywords using TF-IDF and TextRank algorithms to quickly grasp text themes.',
    icon: 'keyword-extraction.png',
    color: '#8B5CF6', // Violet
    image: '/images/keyword-extraction.png',
    content: `
# 关键词提取

关键词提取模块结合了统计学方法和图算法，能够从大量文本中自动识别最具代表性的关键词。

## 核心功能

### 多种提取算法
- **TF-IDF**：基于词频-逆文档频率的经典算法，擅长识别在特定文档中显著但在整体语料中不常见的词。
- **TextRank**：基于图的排序算法（类似 PageRank），无需外部语料库即可从单篇文档中提取关键词，擅长捕捉文本内部的语义结构。

### 自定义配置
- **关键词数量**：自由设置提取的关键词数量（Top N）。
- **词性过滤**：仅提取特定词性（如仅提取名词和动词）作为关键词。
- **停用词表**：内置多语言停用词表，支持自定义添加排除词。

### 结果可视化
- **权重展示**：直观显示每个关键词的权重得分。
- **词云预览**：根据权重生成词云，字体越大代表权重越高。
- **原文高亮**：在原文中高亮显示提取出的关键词，便于上下文查阅。

## 使用场景
- **文献综述**：快速提取大量文献的核心主题词。
- **内容标签**：为文章自动生成分类标签。
- **舆情分析**：识别公众讨论的热点话题词。
    `,
    contentEn: `
# Keyword Extraction

The Keyword Extraction module combines statistical methods and graph algorithms to automatically identify the most representative keywords from large texts.

## Core Features

### Multiple Algorithms
- **TF-IDF**: Classic algorithm based on Term Frequency-Inverse Document Frequency, excellent at identifying words significant in specific documents but rare in the overall corpus.
- **TextRank**: Graph-based ranking algorithm (similar to PageRank) that extracts keywords from single documents without external corpora, capturing internal semantic structure.

### Custom Configuration
- **Keyword Count**: Set the number of keywords to extract (Top N).
- **POS Filtering**: Extract only specific POS tags (e.g., nouns and verbs only).
- **Stop Words**: Built-in multilingual stop word lists with support for custom exclusions.

### Visualization
- **Weight Display**: Visually show weight scores for each keyword.
- **Word Cloud**: Generate word clouds based on weights.
- **Context Highlighting**: Highlight extracted keywords in the original text for context review.

## Use Cases
- **Literature Review**: Quickly extract core themes from massive literature.
- **Content Tagging**: Automatically generate classification tags for articles.
- **Opinion Analysis**: Identify hot topic words in public discussions.
    `
  },
  {
    id: 'ngram-analysis',
    title: 'N-gram分析',
    titleEn: 'N-gram Analysis',
    description: '分析词语组合模式，支持 2-gram 到 5-gram 统计，发现固定搭配。',
    descriptionEn: 'Analyze word patterns with 2-gram to 5-gram statistics to discover collocations.',
    icon: 'ngram-analysis.png',
    color: '#EC4899', // Pink
    image: '/images/ngram-analysis.png',
    content: `
# N-gram 分析

N-gram 分析模块用于统计文本中连续出现的 N 个词的序列，是研究词语搭配和短语模式的重要工具。

## 核心功能

### 多阶 N-gram 支持
- **灵活配置**：支持从 2-gram（二元组）到 5-gram（五元组）的任意长度统计。
- **滑动窗口**：采用滑动窗口机制，确保捕获所有可能的连续词序列。

### 智能过滤
- **停用词过滤**：可选择是否在 N-gram 中包含停用词。
- **标点处理**：智能处理跨句 N-gram，避免跨越标点符号的无效组合。
- **频率阈值**：设置最小频次，过滤低频噪音。

### 关联度量
除了基础频率外，还提供统计指标衡量搭配强度：
- **MI (Mutual Information)**：互信息，衡量词语间的相互依赖程度。
- **T-score**：T值，衡量搭配的显著性。

## 使用场景
- **短语挖掘**：发现文本中的常用短语和固定搭配（如 "climate change", "artificial intelligence"）。
- **语言模型**：为构建简单的统计语言模型提供数据支持。
- **抄袭检测**：通过高频 N-gram 的重叠度检测文本相似性。
    `,
    contentEn: `
# N-gram Analysis

The N-gram Analysis module counts sequences of N contiguous words in a text, serving as a vital tool for studying collocations and phrase patterns.

## Core Features

### Multi-order N-gram Support
- **Flexible Config**: Supports statistics from 2-gram (bigrams) to 5-gram (pentagrams).
- **Sliding Window**: Uses a sliding window mechanism to capture all possible continuous word sequences.

### Intelligent Filtering
- **Stop Words**: Option to include or exclude stop words in N-grams.
- **Punctuation**: Smart handling to avoid invalid combinations across punctuation marks.
- **Frequency Threshold**: Set minimum frequency to filter low-frequency noise.

### Association Measures
Beyond basic frequency, statistical metrics measure collocation strength:
- **MI (Mutual Information)**: Measures mutual dependence between words.
- **T-score**: Measures the significance of the collocation.

## Use Cases
- **Phrase Mining**: Discover common phrases and fixed collocations (e.g., "climate change", "artificial intelligence").
- **Language Modeling**: Provide data for simple statistical language models.
- **Plagiarism Detection**: Detect text similarity through overlap of high-frequency N-grams.
    `
  },
  {
    id: 'collocation-analysis',
    title: '共现关系',
    titleEn: 'Collocation',
    description: '分析词语共现网络，可视化展示中心词与共现词的强弱关系。',
    descriptionEn: 'Analyze co-occurrence networks and visualize relationships between node words and collocates.',
    icon: 'collocation-analysis.png',
    color: '#EF4444', // Red
    image: '/images/collocation-analysis.png',
    content: `
# 共现关系分析

共现关系模块通过构建词语共现网络，揭示词语在文本中共同出现的模式和规律。

## 核心功能

### 窗口化统计
- **窗口大小**：自定义共现窗口大小（如左右各 5 个词）。
- **距离权重**：可配置距离权重，距离中心词越近的词权重越高。

### 网络可视化
- **交互式图谱**：生成复杂的共现网络图，节点大小代表词频，连线粗细代表共现强度。
- **社区发现**：自动识别网络中的紧密连接子群（Community Detection），发现语义簇。
- **过滤控制**：通过滑块实时调整显示的节点数量和连线阈值，从宏观到微观自由切换。

### 详细统计
- **共现列表**：列出所有共现词及其共现频率、MI 值等统计指标。
- **方向性分析**：区分左共现（出现在中心词左侧）和右共现（出现在中心词右侧）。

## 使用场景
- **语义场构建**：重建特定概念的语义场。
- **话语分析**：分析特定词汇（如“移民”、“经济”）周围的语义环境。
- **概念图谱**：可视化文本中的概念结构和关联。
    `,
    contentEn: `
# Collocation Analysis

The Collocation module reveals patterns of words appearing together in texts by constructing word co-occurrence networks.

## Core Features

### Windowed Statistics
- **Window Size**: Customize co-occurrence window size (e.g., 5 words left/right).
- **Distance Weighting**: Configurable weights where words closer to the center word have higher weight.

### Network Visualization
- **Interactive Graph**: Generate complex co-occurrence networks; node size represents frequency, edge thickness represents strength.
- **Community Detection**: Automatically identify tightly connected subgroups to discover semantic clusters.
- **Filtering**: Real-time sliders to adjust visible nodes and edge thresholds, switching from macro to micro views.

### Detailed Statistics
- **Collocate List**: List all collocates with frequency, MI score, and other metrics.
- **Directionality**: Distinguish between left collocates (preceding) and right collocates (following).

## Use Cases
- **Semantic Field Construction**: Reconstruct semantic fields of specific concepts.
- **Discourse Analysis**: Analyze the semantic environment around specific terms (e.g., "immigration", "economy").
- **Concept Mapping**: Visualize concept structures and associations in texts.
    `
  },
  {
    id: 'semantic-field',
    title: '语义域分析',
    titleEn: 'Semantic Domains',
    description: '基于 USAS 语义标签系统，统计文本中的语义类别分布。',
    descriptionEn: 'Analyze semantic category distribution based on the USAS semantic tagging system.',
    icon: 'semantic-field.png',
    color: '#14B8A6', // Teal
    image: '/images/semantic-field.png',
    content: `
# 语义域分析

语义域分析模块利用 USAS (UCREL Semantic Analysis System) 标注体系，将文本从词汇层面提升到语义层面进行分析。

## 核心功能

### USAS 体系支持
- **层级分类**：支持 USAS 的 21 个主要语义大类（如 A: General & Abstract Terms, E: Emotional Actions）及其下属的 232 个子类。
- **自动统计**：自动统计语料库中各语义类别的频率和占比。

### 宏观与微观视角
- **总体分布**：通过饼图或树状图展示整个语料库的语义构成（如“情感类词汇占比 15%”）。
- **趋势分析**：分析不同时间段或不同文本中语义类别的变化趋势。
- **关键词反查**：点击任意语义类别，可查看该类别下包含的具体词汇及其上下文。

### 对比分析
- **语料对比**：对比两个语料库的语义分布差异（如“男性作者 vs 女性作者”在情感词使用上的差异）。
- **显著性检验**：计算语义类别差异的统计显著性（Log-likelihood）。

## 使用场景
- **情感分析**：通过 E 类（情感）和 A 类（评价）词汇分析文本的情感倾向。
- **心理语言学**：分析作者的心理状态和认知模式。
- **社会语言学**：研究不同社会群体在语义选择上的差异。
    `,
    contentEn: `
# Semantic Domain Analysis

The Semantic Domain Analysis module leverages the USAS (UCREL Semantic Analysis System) to elevate analysis from the lexical level to the semantic level.

## Core Features

### USAS System Support
- **Hierarchical Classification**: Supports USAS's 21 major semantic categories (e.g., A: General & Abstract Terms, E: Emotional Actions) and 232 subcategories.
- **Auto Statistics**: Automatically counts frequency and proportion of semantic categories in the corpus.

### Macro & Micro Views
- **Overall Distribution**: Display semantic composition of the corpus via pie charts or treemaps.
- **Trend Analysis**: Analyze trends of semantic categories over time or across texts.
- **Keyword Lookup**: Click any category to see specific words and their contexts.

### Comparative Analysis
- **Corpus Comparison**: Compare semantic distribution differences between two corpora.
- **Significance Test**: Calculate statistical significance (Log-likelihood) of category differences.

## Use Cases
- **Sentiment Analysis**: Analyze sentiment using E (Emotion) and A (Evaluation) categories.
- **Psycholinguistics**: Analyze authors' psychological states and cognitive patterns.
- **Sociolinguistics**: Study semantic choice differences across social groups.
    `
  },
  {
    id: 'word-sketch',
    title: '词图分析',
    titleEn: 'Word Sketch',
    description: '结合依存句法分析，生成词汇的语法搭配素描。',
    descriptionEn: 'Generate grammatical collocation sketches of words combined with dependency parsing.',
    icon: 'word-sketch.png',
    color: '#F43F5E', // Rose
    image: '/images/word-sketch.png',
    content: `
# 词图分析 (Word Sketch)

词图分析是语料库语言学中的高级功能，它超越了简单的线性共现，结合句法分析结果展示词汇的语法搭配行为。

## 核心功能

### 句法搭配分类
自动将搭配词按语法关系分类展示，例如：
- **作为主语时**：该词通常搭配哪些动词？
- **作为宾语时**：该词通常被哪些动词支配？
- **修饰语**：该词通常被哪些形容词或副词修饰？

### 智能评分
- **LogDice**：使用 LogDice 系数衡量搭配的典型性，排除高频但无意义的搭配。
- **频率筛选**：支持按搭配频率和显著性得分进行排序和筛选。

### 词图差异 (Word Sketch Difference)
- **近义词辨析**：输入两个近义词（如 "strong" 和 "powerful"），系统自动对比它们的搭配差异，显示哪些搭配是共有的，哪些是各自独有的。

## 使用场景
- **词典编纂**：为词典例句选择提供典型搭配依据。
- **二语习得**：帮助学习者掌握词汇的地道用法和句法功能。
- **语言对比**：研究不同语言中对应词汇的搭配模式差异。
    `,
    contentEn: `
# Word Sketch

Word Sketch is an advanced feature in corpus linguistics that goes beyond linear co-occurrence, combining syntactic analysis to show grammatical collocation behaviors.

## Core Features

### Syntactic Collocation Classification
Automatically classifies collocates by grammatical relations, for example:
- **As Subject**: Which verbs does this word typically collocate with?
- **As Object**: Which verbs typically govern this word?
- **Modifiers**: Which adjectives or adverbs typically modify this word?

### Intelligent Scoring
- **LogDice**: Uses LogDice coefficient to measure typicality, excluding high-frequency but meaningless collocations.
- **Filtering**: Sort and filter by frequency and significance score.

### Word Sketch Difference
- **Synonym Discrimination**: Input two synonyms (e.g., "strong" and "powerful"), and the system contrasts their collocations, showing shared vs. unique patterns.

## Use Cases
- **Lexicography**: Provide typical collocations for dictionary examples.
- **SLA**: Help learners master authentic usage and syntactic functions.
- **Contrastive Linguistics**: Study collocation pattern differences across languages.
    `
  },
  {
    id: 'literature-viz',
    title: '文献可视化',
    titleEn: 'Bibliometrics',
    description: '导入 BibTeX/RIS 数据，生成引文网络与研究热点图谱。',
    descriptionEn: 'Import BibTeX/RIS data to generate citation networks and research hotspot maps.',
    icon: 'literature-viz.png',
    color: '#6366F1', // Indigo
    image: '/images/literature-viz.png',
    content: `
# 文献可视化

文献可视化模块专为学术研究设计，支持导入文献元数据，通过可视化手段梳理学术脉络。

## 核心功能

### 多格式导入
- **格式支持**：支持 BibTeX (.bib), RIS (.ris), EndNote XML 等常见文献管理格式。
- **自动解析**：自动提取标题、作者、年份、期刊、关键词等元数据。

### 网络分析
- **共现网络**：构建关键词共现网络，发现领域内的核心概念簇。
- **合作网络**：构建作者合作网络和机构合作网络，识别核心学者和研究团队。
- **引文网络**：如果数据包含引用信息，可构建引文网络，识别经典文献。

### 时序分析
- **主题演进**：展示不同年份的研究主题变化，识别新兴热点和衰退领域。
- **发文趋势**：统计该领域的年度发文量变化。

## 使用场景
- **开题报告**：快速了解研究领域的现状和发展趋势。
- **学术评价**：评估学者或机构的学术影响力。
- **期刊分析**：分析特定期刊的选题偏好。
    `,
    contentEn: `
# Bibliometrics

The Bibliometrics module is designed for academic research, supporting metadata import to visualize academic lineages.

## Core Features

### Multi-format Import
- **Formats**: Supports BibTeX (.bib), RIS (.ris), EndNote XML, etc.
- **Auto Parsing**: Extracts title, author, year, journal, keywords, etc.

### Network Analysis
- **Co-occurrence Network**: Build keyword co-occurrence networks to find core concept clusters.
- **Collaboration Network**: Build author/institution collaboration networks to identify key scholars.
- **Citation Network**: Build citation networks to identify classic papers (if data includes citations).

### Temporal Analysis
- **Theme Evolution**: Show research theme changes over years to identify emerging hotspots.
- **Publication Trends**: Statistics on annual publication volume.

## Use Cases
- **Proposal Writing**: Quickly understand the status and trends of a research field.
- **Academic Evaluation**: Evaluate the impact of scholars or institutions.
- **Journal Analysis**: Analyze topic preferences of specific journals.
    `
  },
  {
    id: 'annotation-mode',
    title: '标注模式',
    titleEn: 'Annotation Mode',
    description: '交互式多层级标注工具，支持文本、图像与视频标注。',
    descriptionEn: 'Interactive multi-level annotation tool for text, image, and video.',
    icon: 'annotation-mode.png',
    color: '#8B5CF6', // Violet
    image: '/images/annotation-mode.png',
    content: `
# 标注模式

标注模式提供了一个高效、直观的交互式界面，用于对多模态数据进行人工标注或修正 AI 标注结果。

## 核心功能

### 多层级文本标注
- **分词修正**：点击即可合并或拆分词汇，修正自动分词错误。
- **词性标注**：右键点击词汇，从下拉菜单中快速选择正确的词性标签。
- **实体标注**：拖拽选择文本片段，标记为特定类型的命名实体（如人名、地名）。
- **句法标注**：通过拖拽连线的方式，直观地修改依存句法关系。

### 多模态标注
- **视频标注**：在视频时间轴上标记特定片段，添加语义标签或描述。
- **图像标注**：在图像上绘制边界框（Bounding Box），标注物体或区域。

### 标注管理
- **自定义标签集**：支持导入自定义的标签体系。
- **快捷键支持**：全键盘操作支持，大幅提升标注效率。
- **一致性检查**：计算多人标注结果的 Kappa 系数，评估标注质量。
- **导出格式**：支持导出为 CoNLL-U, JSON, XML 等标准格式。

## 使用场景
- **语料库建设**：构建高质量的人工标注语料库。
- **模型训练**：制作训练数据以微调 NLP 模型。
- **课堂教学**：用于语言学课程中的句法分析教学演示。
    `,
    contentEn: `
# Annotation Mode

Annotation Mode provides an efficient, intuitive interface for manual annotation or correcting AI annotations on multimodal data.

## Core Features

### Multi-level Text Annotation
- **Segmentation Correction**: Click to merge or split words.
- **POS Tagging**: Right-click to quickly select correct POS tags.
- **Entity Tagging**: Drag to select text segments and tag as entities (e.g., Person, Location).
- **Syntactic Annotation**: Drag and drop to modify dependency relations visually.

### Multimodal Annotation
- **Video Annotation**: Tag specific segments on the video timeline with semantic labels.
- **Image Annotation**: Draw bounding boxes on images to tag objects.

### Annotation Management
- **Custom Tagsets**: Import custom tag systems.
- **Shortcuts**: Full keyboard support for high efficiency.
- **Consistency Check**: Calculate Kappa coefficient for inter-annotator agreement.
- **Export Formats**: Export to CoNLL-U, JSON, XML, etc.

## Use Cases
- **Corpus Construction**: Build high-quality manually annotated corpora.
- **Model Training**: Create training data for fine-tuning NLP models.
- **Teaching**: Demonstrate syntactic analysis in linguistics courses.
    `
  },
  {
    id: 'topic-modeling',
    title: '主题建模',
    titleEn: 'Topic Modeling',
    description: '利用 LDA 和 BERTopic 算法，自动发现大规模文本集的潜在主题。',
    descriptionEn: 'Automatically discover latent topics in large text collections using LDA and BERTopic.',
    icon: 'topic-modeling.png',
    color: '#14B8A6', // Teal
    image: '/images/topic-modeling.png',
    content: `
# 主题建模

主题建模模块采用无监督学习算法，能够从大规模文档集合中自动归纳出潜在的主题结构，无需人工预先设定标签。

## 核心功能

### 双引擎支持
- **LDA (Latent Dirichlet Allocation)**：经典的概率主题模型，适合长文档和传统统计分析，结果解释性强。
- **BERTopic**：基于 Transformer (BERT) 的新型主题模型，利用上下文嵌入，对短文本和语义捕捉效果更佳。

### 交互式可视化
- **pyLDAvis**：经典的 LDA 可视化，展示主题之间的距离（多维尺度分析）和每个主题的关键词分布。
- **主题层级图**：展示主题之间的层级归属关系。
- **动态演化图**：展示各个主题的热度随时间变化的趋势（Topic over Time）。

### 深度分析
- **文档聚类**：根据主题分布概率，自动将文档归类到最相关的主题。
- **代表性文档**：为每个主题自动提取最具代表性的几篇文档。

## 使用场景
- **数字人文**：分析历史文献中的思想演变。
- **新闻分析**：追踪新闻报道焦点的转移。
- **客户反馈**：从海量用户评论中归纳主要诉求和问题。
    `,
    contentEn: `
# Topic Modeling

The Topic Modeling module uses unsupervised learning algorithms to automatically induce latent topic structures from large document collections without predefined tags.

## Core Features

### Dual Engines
- **LDA**: Classic probabilistic model, suitable for long docs and traditional analysis, highly interpretable.
- **BERTopic**: Transformer-based (BERT) model, leveraging context embeddings, superior for short texts and semantic capture.

### Interactive Visualization
- **pyLDAvis**: Classic LDA visualization showing inter-topic distances and keyword distributions.
- **Topic Hierarchy**: Show hierarchical relationships between topics.
- **Dynamic Evolution**: Show topic popularity trends over time (Topic over Time).

### Deep Analysis
- **Document Clustering**: Automatically classify docs based on topic distribution.
- **Representative Docs**: Extract the most representative documents for each topic.

## Use Cases
- **Digital Humanities**: Analyze evolution of ideas in historical texts.
- **News Analysis**: Track shifts in news reporting focus.
- **Customer Feedback**: Summarize main demands from massive user reviews.
    `
  },
  {
    id: 'settings',
    title: '应用设置',
    titleEn: 'Settings',
    description: '个性化配置应用界面、管理 AI 模型与插件扩展。',
    descriptionEn: 'Customize UI, manage AI models, and plugin extensions.',
    icon: 'Settings', // 设置页保持使用 Lucide 图标
    color: '#64748B', // Slate
    image: '/images/hero-bg.jpg',
    content: `
# 应用设置

应用设置模块允许您全面掌控 Meta-Lingo 的运行环境和个性化体验。

## 核心功能

### 模型管理 (Model Zoo)
- **LLM 管理**：一键下载、更新或删除本地大语言模型（如 Llama 3, Qwen 2）。
- **NLP 模型**：管理 SpaCy, Stanza 等 NLP 工具包的语言模型文件。
- **Whisper 模型**：管理语音转录模型（Tiny 到 Large v3）。

### 插件中心
- **官方插件**：浏览和安装 Meta-Lingo 官方提供的扩展功能。
- **社区插件**：支持安装来自 GitHub 的社区插件。
- **开发者模式**：开启开发者模式，加载本地编写的自定义脚本。

### 界面与体验
- **主题切换**：内置明亮、暗黑及多种配色主题。
- **语言设置**：切换界面语言（支持中、英、日、韩等）。
- **字体设置**：自定义应用字体大小和字体家族。

### 数据与隐私
- **数据备份**：一键导出所有配置和用户数据。
- **隐私设置**：控制应用是否发送匿名使用统计数据。
- **缓存清理**：清理临时文件和模型缓存，释放磁盘空间。
    `,
    contentEn: `
# Settings

The Settings module allows you to fully control Meta-Lingo's runtime environment and personalized experience.

## Core Features

### Model Zoo
- **LLM Management**: One-click download/update local LLMs (e.g., Llama 3, Qwen 2).
- **NLP Models**: Manage language model files for SpaCy, Stanza, etc.
- **Whisper Models**: Manage speech transcription models (Tiny to Large v3).

### Plugin Center
- **Official Plugins**: Browse and install official extensions.
- **Community Plugins**: Support installing community plugins from GitHub.
- **Developer Mode**: Load locally written custom scripts.

### UI & Experience
- **Theme Switching**: Built-in Light, Dark, and various color themes.
- **Language**: Switch interface language (Chinese, English, Japanese, Korean, etc.).
- **Font**: Customize font size and family.

### Data & Privacy
- **Backup**: One-click export of all configs and user data.
- **Privacy**: Control anonymous usage statistics.
- **Cache**: Clear temp files and model cache to free up disk space.
    `
  }
];

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

// Define a recursive type for translations
type TranslationValue = string | { [key: string]: TranslationValue };

interface Translations {
  [key: string]: TranslationValue;
}

const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      features: "功能特性",
      about: "关于作者",
      download: "下载应用",
      cta: "立即下载"
    },
    hero: {
      badge: "v4.9.49 现已发布",
      title: "现代化多模态",
      subtitle: "语料库研究平台",
      description: "基于 Electron + React + Python 构建。集成 Whisper 语音转录、YOLO 视频追踪、CLIP 语义分析，以及 USAS 语义标注、MIPVU 隐喻识别与 AI 助手 / MCP 接入，为语言学研究提供全流程智能化解决方案。",
      downloadWin: "下载 Windows 版",
      downloadMac: "下载 macOS 版",
      watchDemo: "查看详情",
      privacy: "本地隐私安全",
      offline: "无需联网运行",
      opensource: "免费使用",
      cta: "立即下载",
      disclaimer: "本软件为个人开发项目，非商业用途，非广东外语外贸大学官方软件。"
    },
    features: {
      title: "全功能研究工具箱",
      subtitle: "15 大功能模块，覆盖语言学研究全流程",
      modules: {
        "corpus-management": { title: "语料库管理", desc: "多模态语料上传、11 种语言自动标注与整库迁移" },
        "word-frequency": { title: "词频统计", desc: "词性筛选、正则与词表匹配的词频分析" },
        "synonym-analysis": { title: "同义词分析", desc: "WordNet 同义词关系，网络图与树状图" },
        "keyword-extraction": { title: "关键词提取", desc: "四种算法与词形/词元/语义域关键性对比" },
        "ngram-analysis": { title: "N-gram分析", desc: "2–6 元组合统计与 Nest 分组" },
        "collocation-analysis": { title: "语境索引", desc: "KWIC 检索、CQL 查询引擎与可视化构建器" },
        "semantic-field": { title: "话语分析", desc: "语义域、MIPVU 隐喻、DMIP 与 Biber 多维分析" },
        "word-sketch": { title: "搭配分析", desc: "窗口搭配、Word Sketch、词图对比" },
        "literature-viz": { title: "文献可视化", desc: "WOS/CNKI/PDF 导入、AI 解读与 7 种图表" },
        "annotation-mode": { title: "标注模式", desc: "文本/多模态标注、自动标注与编码者间信度" },
        "topic-modeling": { title: "主题建模", desc: "BERTopic、LDA、LSA、NMF 主题发现" },
        "sentiment-analysis": { title: "情感分析", desc: "NRC 情感极性与八种情绪维度" },
        "dictionary-lookup": { title: "词典查询", desc: "麦克米伦与朗文搭配词典多词典查词" },
        "ai-assistant": { title: "AI 助手与 MCP", desc: "模块 AI 助手、对话模式与 MCP 服务" },
        "settings": { title: "应用设置", desc: "语言、壁纸、AI 连接与模型管理" }
      }
    },
    about: {
      title: "关于开发者",
      role: "Meta-Lingo 开发者",
      bio1: "我是2025年入学广东外语外贸大学商务英语语言研究专业的硕士研究生，对语言研究充满热爱。开发Meta-Lingo的初衷源于我在使用传统语言研究工具时发现的不足：操作繁琐、功能分散在不同软件中、缺乏统一性。",
      bio2: "我的愿景是打造一个All-in-One的语言研究软件，将词频分析、搭配分析、语义分析、等功能整合在一个平台中。Meta-Lingo结合了当下最新的NLP模型和大语言模型技术，实现完全本地化运行，既保证了数据隐私，又提供了强大的分析能力。",
      bio3: "希望Meta-Lingo能够为广大语言研究者提供便利，推动语言研究领域的发展。",
      contact: "联系我",
      xiaohongshu: "小红书",
      douyin: "抖音",
      email: "邮箱"
    },
    download: {
      title: "开始您的研究之旅",
      subtitle: "选择适合您操作系统的版本。所有功能完全本地运行，无需复杂的环境配置。",
      win: "Windows 版本",
      mac: "macOS 版本",
      size: "应用大小：6GB",
      backupPrefix: "下载较慢？可使用国内备用下载：",
      backupWin: "Windows 备用下载",
      backupMac: "macOS 备用下载",
      instructions: {
        title: "安装说明",
        win: "下载整个 Meta-Lingo 文件夹到自定义位置（支持系统盘或移动硬盘），解压后双击文件夹内的 Meta-Lingo.exe 运行。您可以右键创建桌面快捷方式以便快速访问。",
        mac: "下载 Meta-Lingo.app 文件，将其移动到您自定义的位置（支持系统盘或移动硬盘），双击即可运行。"
      }
    },
    footer: {
      copyright: "© 2026 Meta-Lingo. 保留所有权利。",
      legal: "隐私政策与服务条款"
    },
    detail: {
      back: "返回首页"
    }
  },
  en: {
    nav: {
      features: "Features",
      about: "About",
      download: "Download",
      cta: "Download Now"
    },
    hero: {
      badge: "v4.9.49 Released",
      title: "Modern Multimodal",
      subtitle: "Corpus Research Platform",
      description: "Built with Electron + React + Python. Integrates Whisper transcription, YOLO tracking, CLIP semantic analysis, USAS semantic tagging, MIPVU metaphor identification and AI assistant / MCP access for a complete linguistic research solution.",
      downloadWin: "Download for Windows",
      downloadMac: "Download for macOS",
      watchDemo: "View Details",
      privacy: "Local Privacy",
      offline: "Offline Capable",
      opensource: "Free to Use",
      cta: "Download Now",
      disclaimer: "This software is a personal project, non-commercial, and not an official software of Guangdong University of Foreign Studies."
    },
    features: {
      title: "Full-Featured Toolkit",
      subtitle: "15 Modules Covering the Entire Linguistic Research Process",
      modules: {
        "corpus-management": { title: "Corpus Management", desc: "Multimodal upload, 11-language auto-annotation, corpus migration" },
        "word-frequency": { title: "Word Frequency", desc: "Frequency analysis with POS, regex and wordlist filters" },
        "synonym-analysis": { title: "Synonym Analysis", desc: "WordNet synonym relations in network and tree views" },
        "keyword-extraction": { title: "Keyword Extraction", desc: "Four algorithms and word/lemma/domain keyness" },
        "ngram-analysis": { title: "N-gram Analysis", desc: "2–6 gram statistics with Nest grouping" },
        "collocation-analysis": { title: "Concordance", desc: "KWIC search, CQL engine and visual builder" },
        "semantic-field": { title: "Discourse Analysis", desc: "Semantic domains, MIPVU metaphor, DMIP and Biber MDA" },
        "word-sketch": { title: "Collocation Analysis", desc: "Window collocation, Word Sketch, Sketch Difference" },
        "literature-viz": { title: "Bibliography Visualization", desc: "WOS/CNKI/PDF import, AI notes and 7 charts" },
        "annotation-mode": { title: "Annotation Mode", desc: "Text/multimodal annotation, auto-annotation, reliability" },
        "topic-modeling": { title: "Topic Modeling", desc: "BERTopic, LDA, LSA and NMF topic discovery" },
        "sentiment-analysis": { title: "Sentiment Analysis", desc: "NRC polarity and eight emotion dimensions" },
        "dictionary-lookup": { title: "Dictionary Lookup", desc: "Macmillan and Longman Collocations in one pop-up" },
        "ai-assistant": { title: "AI Assistant & MCP", desc: "Module assistants, conversation mode and MCP server" },
        "settings": { title: "Settings", desc: "Language, wallpaper, AI connections, model management" }
      }
    },
    about: {
      title: "About Developer",
      role: "Meta-Lingo Developer",
      bio1: "I am a master's student in Business English Studies at Guangdong University of Foreign Studies (2025 cohort), passionate about linguistic research. I developed Meta-Lingo to address the limitations of traditional tools: complex operations, fragmented functions, and lack of unity.",
      bio2: "My vision is to create an All-in-One linguistic research software integrating word frequency, collocation, semantic analysis, and more. Meta-Lingo combines the latest NLP models and LLM technologies, running completely locally to ensure data privacy while providing powerful analysis capabilities.",
      bio3: "I hope Meta-Lingo brings convenience to researchers and promotes the development of linguistics.",
      contact: "Contact Me",
      xiaohongshu: "Xiaohongshu",
      douyin: "Douyin",
      email: "Email"
    },
    download: {
      title: "Start Your Research",
      subtitle: "Choose the version for your OS. All features run locally without complex configuration.",
      win: "Windows Version",
      mac: "macOS Version",
      size: "App Size: 6GB",
      backupPrefix: "Slow download? Use this backup link:",
      backupWin: "Windows backup",
      backupMac: "macOS backup",
      instructions: {
        title: "Installation Instructions",
        win: "Download the entire Meta-Lingo folder to a custom location (system drive or external drive supported). Unzip and double-click Meta-Lingo.exe inside the folder to run. You can create a desktop shortcut for easy access.",
        mac: "Download the Meta-Lingo.app file and move it to a custom location (system drive or external drive supported). Double-click to run."
      }
    },
    footer: {
      copyright: "© 2026 Meta-Lingo. All rights reserved.",
      legal: "Privacy Policy & Terms of Service"
    },
    detail: {
      back: "Back to Home"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // 从 localStorage 读取保存的语言偏好
    const saved = localStorage.getItem('meta-lingo-language');
    return (saved === 'en' || saved === 'zh') ? saved : 'zh';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('meta-lingo-language', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current === undefined) return path;
      current = current[key];
    }
    
    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

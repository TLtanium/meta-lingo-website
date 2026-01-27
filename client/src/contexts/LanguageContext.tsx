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
      badge: "v3.8.92 现已发布",
      title: "现代化多模态",
      subtitle: "语料库研究平台",
      description: "基于 Electron + React + Python 构建。集成 Whisper 语音转录、YOLO 视频追踪与 CLIP 语义分析，为语言学研究提供全流程智能化解决方案。",
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
      subtitle: "12 大核心模块，覆盖语言学研究全流程",
      modules: {
        "corpus-management": { title: "语料库管理", desc: "管理和上传多模态语料" },
        "word-frequency": { title: "词频统计", desc: "分析词汇出现频率" },
        "synonym-analysis": { title: "同义词分析", desc: "分析词汇同义关系" },
        "keyword-extraction": { title: "关键词提取", desc: "提取文本关键词" },
        "ngram-analysis": { title: "N-gram分析", desc: "分析词语组合模式" },
        "collocation-analysis": { title: "共现关系", desc: "分析词语共现关系" },
        "semantic-field": { title: "语义分析", desc: "语义分析工具箱" },
        "word-sketch": { title: "词图分析", desc: "词语语法搭配模式分析" },
        "literature-viz": { title: "文献可视化", desc: "文献数据可视化分析" },
        "annotation-mode": { title: "标注模式", desc: "文本/多模态标注 + 自动标注" },
        "topic-modeling": { title: "主题建模", desc: "发现文本主题结构" },
        "settings": { title: "应用设置", desc: "自定义应用配置" }
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
      size: "应用大小：30GB",
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
      badge: "v3.8.92 Released",
      title: "Modern Multimodal",
      subtitle: "Corpus Research Platform",
      description: "Built with Electron + React + Python. Integrated with Whisper transcription, YOLO tracking, and CLIP semantic analysis for a complete linguistic research solution.",
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
      subtitle: "12 Core Modules Covering the Entire Linguistic Research Process",
      modules: {
        "corpus-management": { title: "Corpus Management", desc: "Manage multimodal corpora" },
        "word-frequency": { title: "Word Frequency", desc: "Analyze word occurrence" },
        "synonym-analysis": { title: "Synonym Analysis", desc: "Analyze synonym relations" },
        "keyword-extraction": { title: "Keyword Extraction", desc: "Extract text keywords" },
        "ngram-analysis": { title: "N-gram Analysis", desc: "Analyze word patterns" },
        "collocation-analysis": { title: "Concordance", desc: "Analyze co-occurrence" },
        "semantic-field": { title: "Semantic Analysis", desc: "Semantic analysis toolkit" },
        "word-sketch": { title: "Word Sketch", desc: "Grammatical collocation analysis" },
        "literature-viz": { title: "Bibliometrics", desc: "Visualize bibliographic data" },
        "annotation-mode": { title: "Annotation Mode", desc: "Text/multimodal + auto annotation" },
        "topic-modeling": { title: "Topic Modeling", desc: "Discover text topics" },
        "settings": { title: "Settings", desc: "Customize application" }
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
      size: "App Size: 30GB",
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

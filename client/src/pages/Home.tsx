import React from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { getAssetPath } from '@/lib/utils';
import { 
  Download, 
  Globe, 
  Cpu, 
  Shield, 
  ChevronRight,
  Database,
  BarChart3,
  GitBranch,
  Key,
  Binary,
  Link2,
  Network,
  Share2,
  BookOpen,
  PenTool,
  Layers,
  Settings,
  Info,
  Monitor,
  Command
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [, setLocation] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const features = [
    { id: 'corpus-management', icon: Database, color: 'text-blue-500' },
    { id: 'word-frequency', icon: BarChart3, color: 'text-green-500' },
    { id: 'synonym-analysis', icon: GitBranch, color: 'text-orange-500' },
    { id: 'keyword-extraction', icon: Key, color: 'text-purple-500' },
    { id: 'ngram-analysis', icon: Binary, color: 'text-cyan-500' },
    { id: 'collocation-analysis', icon: Link2, color: 'text-red-500' },
    { id: 'semantic-field', icon: Network, color: 'text-teal-500' },
    { id: 'word-sketch', icon: Share2, color: 'text-pink-500' },
    { id: 'literature-viz', icon: BookOpen, color: 'text-indigo-500' },
    { id: 'annotation-mode', icon: PenTool, color: 'text-violet-500' },
    { id: 'topic-modeling', icon: Layers, color: 'text-emerald-500' },
    { id: 'settings', icon: Settings, color: 'text-gray-500' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F6]/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={getAssetPath('/images/logo-icon.png')} alt="Meta-Lingo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Meta-Lingo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 font-medium">
              {t('nav.features')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 font-medium">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('download')} className="text-gray-600 hover:text-gray-900 font-medium">
              {t('nav.download')}
            </button>
            <Button 
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              variant="outline"
              size="sm"
              className="font-medium"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 container mx-auto px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetPath('/images/Background2.jpg')} 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F6]/80 via-[#F7F7F6]/50 to-[#F7F7F6]"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-blue-600">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-xl shadow-lg shadow-blue-600/20" onClick={() => scrollToSection('download')}>
                <Download className="w-5 h-5 mr-2" />
                {t('hero.cta')}
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl border-gray-300 hover:bg-gray-50" onClick={() => scrollToSection('features')}>
                <Info className="w-5 h-5 mr-2" />
                {t('hero.watchDemo')}
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {t('hero.privacy')}
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                {t('hero.offline')}
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                {t('hero.opensource')}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200/60">
              <p className="text-xs text-gray-400 max-w-xl">
                {t('hero.disclaimer')}
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full max-w-2xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
              <img 
                src={getAssetPath('/images/AppHome.png')} 
                alt="App Home" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-600">{t('features.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className="p-6 hover:shadow-lg transition-all duration-300 border-gray-100 group cursor-pointer"
                onClick={() => setLocation(`/feature/${feature.id}`)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {t(`features.modules.${feature.id}.title`)}
                </h3>
                <p className="text-gray-500 mb-4">
                  {t(`features.modules.${feature.id}.desc`)}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {t('hero.watchDemo')} <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#F7F7F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img src={getAssetPath('/images/avatar.png')} alt="Tommy Leo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Tommy Leo</h2>
                <p className="text-blue-600 font-medium mb-6">{t('about.role')}</p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{t('about.bio1')}</p>
                  <p>{t('about.bio2')}</p>
                  <p>{t('about.bio3')}</p>
                </div>
                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">{t('about.contact')}</p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://space.bilibili.com/294707614" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.659.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
                      </svg>
                      Bilibili
                    </a>
                    <a 
                      href="https://www.xiaohongshu.com/user/profile/5af2c7734eacab77509ec3af" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"/>
                      </svg>
                      {t('about.xiaohongshu')}
                    </a>
                    <a 
                      href="https://v.douyin.com/euiu1OJ9jB4/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                      {t('about.douyin')}
                    </a>
                    <a 
                      href="mailto:1683619168tl@gmail.com"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      {t('about.email')}
                    </a>
                    <a 
                      href="https://www.youtube.com/@metalingo2026" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('download.title')}</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('download.subtitle')}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <Card className="p-8 w-full md:w-80 hover:border-blue-500 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Windows</h3>
              <p className="text-gray-500 mb-2">Windows 10/11 (64-bit)</p>
              <p className="text-gray-400 text-sm mb-6">{t('download.size')}</p>
              <Button 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white cursor-pointer"
                onClick={() => window.open('https://pan.baidu.com/s/1ZDHDSNVSMFhxYWjnGngoZw?pwd=q9jg', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('hero.downloadWin')}
              </Button>
            </Card>
            
            <Card className="p-8 w-full md:w-80 hover:border-blue-500 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="macOS" className="w-8 h-8 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">macOS</h3>
              <p className="text-gray-500 mb-2">macOS 12.0+ (Apple Silicon/Intel)</p>
              <p className="text-gray-400 text-sm mb-6">{t('download.size')}</p>
              <Button 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white cursor-pointer"
                onClick={() => window.open('https://pan.baidu.com/s/1N5dx8fgPjvkGRzFf94o8lQ?pwd=x4pm', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('hero.downloadMac')}
              </Button>
            </Card>
          </div>

          {/* Installation Instructions */}
          <div className="max-w-3xl mx-auto text-left bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              {t('download.instructions.title')}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Windows</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('download.instructions.win')}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">macOS</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('download.instructions.mac')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F7F7F6] border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <img src={getAssetPath('/images/logo-icon.png')} alt="Meta-Lingo" className="w-6 h-6 grayscale" />
            <span className="font-semibold">Meta-Lingo</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>{t('footer.copyright')}</p>
            <button 
              onClick={() => setLocation('/legal')} 
              className="text-sm hover:text-blue-600 transition-colors cursor-pointer"
            >
              {t('footer.legal')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

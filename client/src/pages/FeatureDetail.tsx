import React, { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { features } from '../data/features';
import { useLanguage } from '../contexts/LanguageContext';
import { getAssetPath } from '@/lib/utils';
import { 
  ArrowLeft, 
  Download,
  Folder, 
  BarChart2, 
  GitMerge, 
  Key, 
  Type, 
  Link as LinkIcon, 
  Network, 
  Share2, 
  BookOpen, 
  Edit3, 
  Layers, 
  Settings,
  Database,
  BarChart3,
  GitBranch,
  Binary,
  Link2,
  PenTool
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Streamdown } from 'streamdown';

export default function FeatureDetail() {
  const [match, params] = useRoute('/feature/:id');
  const [location, setLocation] = useLocation();
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);
    // Scroll to top when entering the page
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !params) {
    return null;
  }

  const feature = features.find(f => f.id === params.id);

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F7F6]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Feature Not Found</h1>
          <Button onClick={() => setLocation('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const content = language === 'zh' ? feature.content : feature.contentEn;
  const title = language === 'zh' ? feature.title : feature.titleEn;
  const description = language === 'zh' ? feature.description : feature.descriptionEn;

  const getIcon = (id: string) => {
    switch (id) {
      case 'corpus-management': return <Database className="w-10 h-10 text-white" />;
      case 'word-frequency': return <BarChart3 className="w-10 h-10 text-white" />;
      case 'synonym-analysis': return <GitBranch className="w-10 h-10 text-white" />;
      case 'keyword-extraction': return <Key className="w-10 h-10 text-white" />;
      case 'ngram-analysis': return <Binary className="w-10 h-10 text-white" />;
      case 'collocation-analysis': return <Link2 className="w-10 h-10 text-white" />;
      case 'semantic-field': return <Network className="w-10 h-10 text-white" />;
      case 'word-sketch': return <Share2 className="w-10 h-10 text-white" />;
      case 'literature-viz': return <BookOpen className="w-10 h-10 text-white" />;
      case 'annotation-mode': return <PenTool className="w-10 h-10 text-white" />;
      case 'topic-modeling': return <Layers className="w-10 h-10 text-white" />;
      case 'settings': return <Settings className="w-10 h-10 text-white" />;
      default: return <Folder className="w-10 h-10 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F6]/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation('/')}>
            <img src={getAssetPath('/images/logo-icon.png')} alt="Meta-Lingo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Meta-Lingo</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('detail.back')}
          </Button>
        </div>
      </nav>

      <main className="pt-24 pb-16 container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="mb-8 text-center">
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: feature.color }}
            >
              {getIcon(feature.id)}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{description}</p>
          </div>

          {/* Feature Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <img 
              src={getAssetPath(feature.image)} 
              alt={title} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-700">
            <Streamdown>{content}</Streamdown>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '准备好开始使用了吗？' : 'Ready to get started?'}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#1A73E8] hover:bg-[#1557B0] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                onClick={() => {
                  const element = document.getElementById('download');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setLocation('/');
                    setTimeout(() => {
                      const downloadSection = document.getElementById('download');
                      if (downloadSection) downloadSection.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                <Download className="w-5 h-5" />
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F7F6] border-t border-gray-200 py-12 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <img src={getAssetPath('/images/logo-icon.png')} alt="Meta-Lingo" className="w-6 h-6 grayscale" />
            <span className="font-semibold">Meta-Lingo</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>{t('footer.copyright')}</p>
            <a href="/legal" className="text-sm hover:text-blue-600 transition-colors">
              {t('footer.legal')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

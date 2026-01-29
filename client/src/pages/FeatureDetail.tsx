import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useRoute, useLocation } from 'wouter';
import { features } from '../data/features';
import { useLanguage } from '../contexts/LanguageContext';
import { getAssetPath } from '@/lib/utils';
import { 
  ArrowLeft, 
  Download,
  Folder, 
  Key, 
  Network, 
  Share2, 
  BookOpen, 
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

// 图片轮播组件 - 自动检测多图模式，无缝循环自动播放
function ImageCarousel({ baseImage, title }: { baseImage: string; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([baseImage]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 自动检测多图模式
  useEffect(() => {
    const ext = baseImage.substring(baseImage.lastIndexOf('.'));
    const basePath = baseImage.substring(0, baseImage.lastIndexOf('.'));
    
    // 检测图片是否存在的函数
    const checkImage = (src: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = getAssetPath(src);
      });
    };

    // 检测多图模式
    const detectImages = async () => {
      // 先检测 -1 是否存在
      const firstNumbered = `${basePath}-1${ext}`;
      const hasNumbered = await checkImage(firstNumbered);
      
      if (hasNumbered) {
        // 多图模式：检测所有存在的图片
        const detectedImages: string[] = [];
        let i = 1;
        while (true) {
          const imgPath = `${basePath}-${i}${ext}`;
          const exists = await checkImage(imgPath);
          if (exists) {
            detectedImages.push(imgPath);
            i++;
          } else {
            break;
          }
        }
        setImages(detectedImages);
      } else {
        // 单图模式：使用原始图片
        setImages([baseImage]);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    setCurrentIndex(0);
    detectImages();
  }, [baseImage]);

  // 无缝循环：当滑动到克隆图片后，瞬间跳回真正的第一张
  useEffect(() => {
    if (currentIndex === images.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600); // 等待动画完成
      return () => clearTimeout(timer);
    }
    // 恢复动画
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, images.length, isTransitioning]);

  // 自动播放 - 一直往左滑
  useEffect(() => {
    if (images.length <= 1 || isPaused || isLoading) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000); // 4秒切换

    return () => clearInterval(timer);
  }, [images.length, isPaused, isLoading]);

  // 触摸/鼠标滑动处理
  const minSwipeDistance = 50;

  const goNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goNext();
    }
    if (isRightSwipe) {
      goPrev();
    }
    // 延迟恢复自动播放
    setTimeout(() => setIsPaused(false), 3000);
  };

  // 鼠标拖拽处理
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    setMouseStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || mouseStart === null) return;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || mouseStart === null) {
      setIsPaused(false);
      return;
    }
    const distance = mouseStart - e.clientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goNext();
    }
    if (isRightSwipe) {
      goPrev();
    }
    setIsDragging(false);
    setMouseStart(null);
    // 延迟恢复自动播放
    setTimeout(() => setIsPaused(false), 3000);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setMouseStart(null);
  };

  // 加载中状态
  if (isLoading) {
    return (
      <div className="w-full aspect-video bg-gray-100 animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Loading...</span>
      </div>
    );
  }

  // 单图模式
  if (images.length === 1) {
    return (
      <img 
        src={getAssetPath(images[0])} 
        alt={title} 
        className="w-full h-auto object-cover"
      />
    );
  }

  // 构建显示列表：原始图片 + 第一张的克隆（用于无缝循环）
  const displayImages = [...images, images[0]];
  const displayIndex = currentIndex % (images.length + 1);

  // 多图轮播模式
  return (
    <div className="relative">
      {/* 图片容器 */}
      <div 
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div 
          className="flex"
          style={{ 
            transform: `translateX(-${displayIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            willChange: 'transform'
          }}
        >
          {displayImages.map((img, index) => (
            <img 
              key={index}
              src={getAssetPath(img)} 
              alt={`${title} ${(index % images.length) + 1}`} 
              className="w-full h-auto object-cover flex-shrink-0"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* 点指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => {
          // 计算真实索引（处理克隆图片的情况）
          const realIndex = currentIndex % images.length;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === realIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

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
            <ImageCarousel 
              baseImage={feature.image}
              title={title}
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
            <span 
              onClick={() => setLocation('/legal')} 
              className="text-sm hover:text-blue-600 transition-colors cursor-pointer"
            >
              {t('footer.legal')}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

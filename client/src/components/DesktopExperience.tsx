import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getAssetPath } from '@/lib/utils';
import './desktop-experience.css';

export default function DesktopExperience() {
  const { t } = useLanguage();
  const [dark, setDark] = useState(false);
  const [showSprite, setShowSprite] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setShowSprite(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setShowSprite(true); observer.disconnect(); }
    }, { rootMargin: '240px' });
    if (previewRef.current) observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, []);
  const maskId = `desktop-brand-${useId().replace(/:/g, '')}`;
  return <section aria-labelledby="desktop-experience-title" className="desktop-experience py-20 bg-[#F7F7F6] border-t border-gray-200/60">
    <div className="container mx-auto px-4">
      <div className="mb-9 max-w-2xl">
        <p className="text-sm font-medium text-blue-600 mb-3">{t('desktopExperience.eyebrow')}</p>
        <h2 id="desktop-experience-title" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">{t('desktopExperience.title')}</h2>
        <p className="text-gray-600 leading-relaxed">{t('desktopExperience.description')}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className={`desktop-startup-demo${dark ? ' is-dark' : ''}`}>
            <div className="desktop-theme-switch" role="group" aria-label={t('desktopExperience.theme')}>
              {[false, true].map(value => <button key={String(value)} type="button" aria-pressed={dark === value} onClick={() => setDark(value)}>{t(`desktopExperience.${value ? 'dark' : 'light'}`)}</button>)}
            </div>
            <div className="desktop-frosted-window" aria-label={t('desktopExperience.startupPreview')}>
              <div className="desktop-preview-controls" aria-hidden="true"><i /><i /><i /></div>
              <svg className="desktop-preview-brand" viewBox="360 220 960 510" aria-hidden="true">
                <defs><filter id={maskId} colorInterpolationFilters="sRGB">
                  <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -.2126 -.7152 -.0722 0 1" result="alpha" />
                  <feComponentTransfer in="alpha" result="mask"><feFuncA type="linear" slope="1.08" intercept="-0.08" /></feComponentTransfer>
                  <feFlood floodColor="currentColor" result="ink" /><feComposite in="ink" in2="mask" operator="in" />
                </filter></defs>
                <image href={getAssetPath('/images/Background.png')} width="1672" height="941" filter={`url(#${maskId})`} />
              </svg>
              <div className="desktop-preview-line" aria-hidden="true" />
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('desktopExperience.startupTitle')}</h3>
            <p className="text-gray-600 leading-relaxed mb-3">{t('desktopExperience.startupDescription')}</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">{t('desktopExperience.materialNote')}</p>
            <Link href="/feature/settings" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">{t('desktopExperience.startupLink')}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div ref={previewRef} className="desktop-lemy-demo" aria-label={t('desktopExperience.lemyPreview')}>
            <div className="desktop-lemy-anchor">
              <span className="desktop-lemy-bubble">Lemy</span>
              <div className="desktop-lemy-sprite" style={{ backgroundImage: showSprite ? `url(${getAssetPath('/images/desktop/lemy.png')})` : undefined }} aria-hidden="true" />
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('desktopExperience.lemyTitle')}</h3>
            <p className="text-gray-600 leading-relaxed mb-3">{t('desktopExperience.lemyDescription')}</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">{t('desktopExperience.lemyNote')}</p>
            <Link href="/feature/ai-assistant" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">{t('desktopExperience.lemyLink')}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>
      </div>
    </div>
  </section>;
}

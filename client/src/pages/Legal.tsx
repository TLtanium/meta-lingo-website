import React from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { getAssetPath } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Streamdown } from 'streamdown';

export default function Legal() {
  const [, setLocation] = useLocation();
  const { language, t } = useLanguage();

  const contentZh = `
# Meta-Lingo 开源许可

Copyright © 2026 Tommy Leo

Meta-Lingo 桌面应用的原创代码采用 **GNU AGPL 第 3 版（AGPL-3.0-only）**。允许商业使用、修改与再分发，同时须满足许可中的相应源码提供及网络交互条件。软件不提供担保。only 指仅采用第 3 版，不代表所有第三方组件使用同一许可。

自 **2026-11-06** 起，作者另行将同一授权授予自己有权许可的历史版本原创代码；这不是对旧文件发布时间的改写，也不改变第三方代码、模型、词典或语料的授权，更不自动消除此前第三方分发的合规问题。精确范围见下面的历史补充授权。

NRC、商业词典与参考语料不随应用分发，请通过设置导入自己有权使用的资源。
`;
  const contentEn = `
# Meta-Lingo Open-source License

Copyright © 2026 Tommy Leo

Original code in the Meta-Lingo desktop application uses **GNU AGPL version 3 only (AGPL-3.0-only)**. Commercial use, modification and redistribution are allowed under its conditions, including corresponding-source and applicable network-source obligations. No warranty is provided. The suffix only limits the GNU license version, not the licenses of third-party components.

Effective **2026-11-06**, the author additionally grants that permission for copyright-controlled original code in earlier releases. This does not backdate historical archives, relicense third-party code/models/dictionaries/corpora, or automatically cure earlier third-party distribution issues. The historical grant below defines the precise scope.

NRC, commercial dictionaries and reference corpora are not bundled. Import resources you are entitled to use through Settings.
`;
  const [license, setLicense] = React.useState('');
  React.useEffect(() => {
    let active = true;
    fetch(getAssetPath('/legal/AGPL-3.0.txt')).then(response => {
      if (!response.ok) throw new Error('License unavailable');
      return response.text();
    }).then(text => { if (active) setLicense(text); }).catch(() => {});
    return () => { active = false; };
  }, []);

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
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
          <Streamdown>{language === 'zh' ? contentZh : contentEn}</Streamdown>
          <div className="not-prose my-6 flex flex-wrap gap-3 text-sm text-blue-700">
            <a className="underline" href={getAssetPath('/legal/AGPL-3.0.txt')}>{language === 'zh' ? '正式 AGPL 全文' : 'Official AGPL text'}</a>
            <a className="underline" href={getAssetPath('/legal/LICENSING.md')}>{language === 'zh' ? '历史原创代码补充授权' : 'Historical original-code grant'}</a>
            <a className="underline" href={getAssetPath('/legal/THIRD-PARTY-NOTICES.txt')}>{language === 'zh' ? '第三方开源许可' : 'Third-party notices'}</a>
            <a className="underline" href="https://github.com/TLtanium/meta-lingo-electron">{language === 'zh' ? '对应源代码' : 'Corresponding source'}</a>
            <a className="underline" href="https://www.openatom.org/journalism/detail/3N0zX9I7fX4u">{language === 'zh' ? '中文参考译文（非正式）' : 'Chinese reference translation (unofficial)'}</a>
          </div>
          {license && <pre className="not-prose max-h-[65vh] overflow-y-auto whitespace-pre-wrap break-words rounded-lg bg-gray-50 p-5 text-xs leading-relaxed text-gray-700">{license}</pre>}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F7F6] border-t border-gray-200 py-12 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <img src={getAssetPath('/images/logo-icon.png')} alt="Meta-Lingo" className="w-6 h-6 grayscale" />
            <span className="font-semibold">Meta-Lingo</span>
          </div>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

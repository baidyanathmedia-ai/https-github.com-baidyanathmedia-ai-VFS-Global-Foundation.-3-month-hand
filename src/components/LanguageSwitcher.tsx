import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'header' | 'topbar' | 'mobile' | 'footer';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'header',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center gap-1 bg-blue-900/60 p-0.5 rounded-md border border-blue-700/50 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 text-xs font-semibold rounded transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-emerald-500 text-white shadow-xs'
              : 'text-blue-200 hover:text-white hover:bg-blue-800/40'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          className={`px-2 py-0.5 text-xs font-semibold rounded transition-all cursor-pointer ${
            language === 'hi'
              ? 'bg-emerald-500 text-white shadow-xs'
              : 'text-blue-200 hover:text-white hover:bg-blue-800/40'
          }`}
          aria-label="हिंदी में बदलें"
        >
          हिन्दी
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl ${className}`}>
        <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
          <Languages className="w-4 h-4 text-blue-600" />
          <span>Language / भाषा</span>
        </div>
        <div className="flex items-center bg-slate-200/80 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              language === 'en'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English (EN)
          </button>
          <button
            type="button"
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              language === 'hi'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            हिन्दी (HI)
          </button>
        </div>
      </div>
    );
  }

  // Default 'header' segmented switcher
  return (
    <div
      id="header-language-toggle"
      className={`inline-flex items-center bg-slate-100/90 hover:bg-slate-100 p-1 rounded-lg border border-slate-200/80 shadow-xs transition-colors ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="pl-1.5 pr-1 text-slate-500 hidden sm:flex items-center">
        <Languages className="w-4 h-4 text-blue-600" />
      </div>
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-white text-blue-700 shadow-xs font-bold border border-slate-200/60'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
          aria-pressed={language === 'en'}
          title="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
            language === 'hi'
              ? 'bg-emerald-600 text-white shadow-xs font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
          aria-pressed={language === 'hi'}
          title="हिंदी में बदलें"
        >
          हिन्दी
        </button>
      </div>
    </div>
  );
};

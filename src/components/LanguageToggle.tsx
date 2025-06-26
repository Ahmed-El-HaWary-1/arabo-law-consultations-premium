
import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <button
        onClick={() => onLanguageChange('ar')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'ar'
            ? 'bg-white text-gray-900 shadow-lg'
            : 'text-white hover:bg-white/20'
        }`}
      >
        العربية
      </button>
      <Globe className="w-4 h-4 text-white" />
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-white text-gray-900 shadow-lg'
            : 'text-white hover:bg-white/20'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;

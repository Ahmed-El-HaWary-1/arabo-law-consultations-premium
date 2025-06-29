
import React from 'react';

interface LanguageToggleProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  return (
    <button
      onClick={() => onLanguageChange(language === 'ar' ? 'en' : 'ar')}
      className="relative w-14 h-7 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-xs font-bold ${
          language === 'ar' ? 'translate-x-0 text-blue-600' : 'translate-x-7 text-indigo-600'
        }`}
      >
        {language === 'ar' ? 'EN' : 'ع'}
      </div>
    </button>
  );
};

export default LanguageToggle;

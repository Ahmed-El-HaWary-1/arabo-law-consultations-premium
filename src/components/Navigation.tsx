
import React from 'react';
import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';
import DarkModeToggle from '@/components/DarkModeToggle';

interface NavigationProps {
  language: string;
  isDark: boolean;
  onLanguageChange: (lang: string) => void;
  onDarkModeToggle: () => void;
  onAdminLogin: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  language,
  isDark,
  onLanguageChange,
  onDarkModeToggle,
  onAdminLogin,
}) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg border-b ${
      isDark ? 'border-gray-800' : 'border-white/20'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-glow">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {language === 'ar' ? 'المكتب العربي' : 'Arab Office'}
              </h1>
            </div>
          </div>
          
          <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <DarkModeToggle isDark={isDark} onToggle={onDarkModeToggle} />
            <Button
              onClick={onAdminLogin}
              variant="outline"
              className={`${isDark ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} backdrop-blur-sm`}
            >
              {language === 'ar' ? 'دخول الإدارة' : 'Admin'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

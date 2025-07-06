
import React, { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';
import DarkModeToggle from '@/components/DarkModeToggle';

interface NavigationProps {
  language: string;
  isDark: boolean;
  onLanguageChange: (lang: string) => void;
  onDarkModeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  language,
  isDark,
  onLanguageChange,
  onDarkModeToggle,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-strong shadow-luxury' 
          : 'bg-transparent'
      } ${
        isDark 
          ? 'border-b border-gray-800/50' 
          : 'border-b border-white/10'
      }`}>
        <div className="container-modern">
          <div className={`flex items-center justify-between py-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Enhanced Logo */}
            <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-cosmic rounded-2xl flex items-center justify-center shadow-luxury animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h1 className={`text-xl font-bold text-gradient font-modern ${
                  isDark ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  {language === 'ar' ? 'المكتب العربي' : 'Arab Office'}
                </h1>
                <p className={`text-xs opacity-70 ${
                  isDark ? 'text-gray-400' : isScrolled ? 'text-gray-600' : 'text-white/70'
                }`}>
                  {language === 'ar' ? 'القانون والمحاسبة' : 'Law & Accounting'}
                </p>
              </div>
            </div>
            
            {/* Desktop Controls */}
            <div className={`hidden md:flex items-center gap-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
              <DarkModeToggle isDark={isDark} onToggle={onDarkModeToggle} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl glass transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-20 right-4 left-4 glass-strong rounded-2xl p-6 animate-scale-in ${
          isDark ? 'bg-gray-900/90' : 'bg-white/90'
        }`}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {language === 'ar' ? 'اللغة' : 'Language'}
              </span>
              <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            </div>
            <div className="flex items-center justify-between">
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {language === 'ar' ? 'المظهر' : 'Theme'}
              </span>
              <DarkModeToggle isDark={isDark} onToggle={onDarkModeToggle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

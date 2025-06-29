
import React from 'react';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: string;
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, isDark }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900' 
        : 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center text-white ${language === 'ar' ? 'text-center' : 'text-center'}`}>
          {/* Main Title */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 animate-scale-in leading-tight ${
            language === 'ar' ? 'text-center' : 'text-center'
          }`}>
            <span className="bg-gradient-to-r from-yellow-400 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              {language === 'ar' ? 'المكتب العربي' : 'Arab Office'}
            </span>
            <br />
            <span className="text-white/90">
              {language === 'ar' ? 'للقانون والمحاسبة' : 'Law & Accounting'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {language === 'ar' 
              ? 'خبرة تزيد عن 25 عاماً في تقديم أفضل الاستشارات القانونية والمحاسبية'
              : 'Over 25 years of expertise in providing premium legal and accounting consultations'
            }
          </p>

          {/* Action Buttons */}
          <div className={`flex items-center justify-center gap-6 mb-16 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              onClick={() => scrollToSection('why-choose-us')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Users className="w-6 h-6 mr-2" />
              {language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection('about-us')}
              variant="outline"
              className="px-10 py-6 text-xl rounded-2xl border-2 border-white/30 text-white hover:text-white hover:bg-white/10 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

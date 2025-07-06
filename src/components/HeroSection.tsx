
import React, { useEffect, useState } from 'react';
import { Users, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: string;
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden font-modern ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900' 
          : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-bounce-subtle"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse-glow"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationIterationCount: 'infinite'
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-modern relative z-10">
        <div className={`text-center text-white ${language === 'ar' ? 'font-arabic' : 'font-modern'}`}>
          {/* Floating Icons */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center shadow-luxury animate-scale-in">
                <Sparkles className="w-10 h-10 text-white animate-rotate" style={{ animationDuration: '3s' }} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce-subtle">
                <Zap className="w-4 h-4 text-yellow-900 ml-1 mt-1" />
              </div>
            </div>
          </div>

          {/* Enhanced Title with Stagger Animation */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight ${isVisible ? 'animate-float-up' : 'opacity-0'}`}>
            <span className="block text-gradient animate-gradient-shift mb-4">
              {language === 'ar' ? 'المكتب العربي' : 'Arab Office'}
            </span>
            <span className={`block text-white/90 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              {language === 'ar' ? 'للقانون والمحاسبة' : 'Law & Accounting'}
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            {language === 'ar' 
              ? 'خبرة تزيد عن 25 عاماً في تقديم أفضل الاستشارات القانونية والمحاسبية بتقنيات حديثة ومتطورة'
              : 'Over 25 years of expertise in providing premium legal and accounting consultations with modern, cutting-edge technology'
            }
          </p>

          {/* Enhanced Action Buttons */}
          <div className={`flex items-center justify-center gap-6 mb-16 flex-wrap ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              onClick={() => scrollToSection('why-choose-us')}
              className={`btn-luxury px-10 py-6 text-xl rounded-2xl shadow-luxury font-bold group relative overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.9s' }}
            >
              <Users className="w-6 h-6 mr-2 group-hover:animate-bounce-subtle" />
              {language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection('about-us')}
              variant="outline"
              className={`px-10 py-6 text-xl rounded-2xl border-2 border-white/30 text-white bg-white/10 backdrop-blur-lg hover:bg-white hover:text-gray-900 shadow-luxury group relative overflow-hidden ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
              style={{ animationDelay: '1.2s' }}
            >
              <span className="relative z-10">
                {language === 'ar' ? 'من نحن' : 'About Us'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>

          {/* Stats Preview */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-gradient mb-2">25+</div>
              <div className="text-white/70 text-sm">
                {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-gradient mb-2">1000+</div>
              <div className="text-white/70 text-sm">
                {language === 'ar' ? 'عميل راضي' : 'Happy Clients'}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-white/70 text-sm">
                {language === 'ar' ? 'دعم متواصل' : 'Support Available'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce-subtle"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import React from 'react';
import { Crown, Phone, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: string;
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, isDark }) => {
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
        <div className={`text-center text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {/* Premium Badge */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'الأفضل في المملكة' : 'Best in Kingdom'}
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-scale-in leading-tight">
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
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Crown className="w-6 h-6 mr-2" />
              {language === 'ar' ? 'احجز استشارتك المميزة' : 'Book Premium Consultation'}
            </Button>
            
            <div className={`flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-fade-in ${language === 'ar' ? 'flex-row-reverse' : ''}`} style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="text-sm opacity-75">
                  {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
                </div>
                <div className="text-xl font-bold">+966 11 123 4567</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`flex items-center justify-center gap-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {[
              { number: '500+', text: language === 'ar' ? 'قضية ناجحة' : 'Cases Won' },
              { number: '2600+', text: language === 'ar' ? 'عميل راضٍ' : 'Happy Clients' },
              { number: '25+', text: language === 'ar' ? 'سنة خبرة' : 'Years Experience' }
            ].map((item, index) => (
              <div key={index} className={`text-center animate-fade-in ${language === 'ar' ? 'text-right' : 'text-left'}`} style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                <div className="text-3xl font-bold text-yellow-400">{item.number}</div>
                <div className="text-sm opacity-75">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

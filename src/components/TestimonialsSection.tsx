
import React, { useState, useEffect } from 'react';
import { Star, Quote, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

interface TestimonialsSectionProps {
  language: string;
  isDark: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {language === 'ar' ? 'آراء عملائنا' : 'Client Testimonials'}
            </h2>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {language === 'ar' 
              ? `${testimonials.length} تجربة حقيقية من عملائنا الكرام الذين وثقوا بخدماتنا`
              : `${testimonials.length} real experiences from our valued clients who trusted our services`
            }
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`relative p-8 rounded-3xl transition-all duration-700 ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20' 
              : 'bg-white shadow-2xl border border-purple-100'
          }`}>
            <Quote className={`w-16 h-16 text-purple-500/30 mb-6 ${language === 'ar' ? 'mr-auto' : 'ml-auto'}`} />
            
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <p className={`text-xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "{language === 'ar' ? currentTestimonial.text.ar : currentTestimonial.text.en}"
              </p>
              
              <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="text-4xl">{currentTestimonial.flag}</div>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'ar' ? currentTestimonial.name : currentTestimonial.nameEn}
                  </h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {language === 'ar' ? currentTestimonial.role.ar : currentTestimonial.role.en}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {currentTestimonial.country}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
              } shadow-lg flex items-center justify-center transition-all`}
            >
              <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
              } shadow-lg flex items-center justify-center transition-all`}
            >
              <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap max-h-20 overflow-y-auto">
            {testimonials.slice(0, 20).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-6'
                    : isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'ar' 
                ? `${currentIndex + 1} من ${testimonials.length} تقييم`
                : `${currentIndex + 1} of ${testimonials.length} reviews`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

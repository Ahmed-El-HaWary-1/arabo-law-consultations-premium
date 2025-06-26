
import React, { useState, useEffect } from 'react';
import { Star, Quote, Users } from 'lucide-react';

interface TestimonialsSectionProps {
  language: string;
  isDark: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language, isDark }) => {
  const testimonials = [
    {
      name: 'أحمد بن سالم المحمدي',
      nameEn: 'Ahmed Al-Mohammadi',
      role: { ar: 'رجل أعمال', en: 'Businessman' },
      text: { 
        ar: 'خدمة متميزة ومهنية عالية. تم حل قضيتي القانونية بكفاءة تامة وفي وقت قياسي.',
        en: 'Outstanding service and high professionalism. My legal case was resolved efficiently and in record time.'
      },
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'فاطمة العتيبي',
      nameEn: 'Fatima Al-Otaibi',
      role: { ar: 'مديرة شركة', en: 'Company Manager' },
      text: { 
        ar: 'فريق محترف وخبرة واضحة في المحاسبة الضريبية. أنصح بهم بقوة.',
        en: 'Professional team with clear expertise in tax accounting. I highly recommend them.'
      },
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'محمد الراشد',
      nameEn: 'Mohammed Al-Rashid',
      role: { ar: 'مستثمر', en: 'Investor' },
      text: { 
        ar: 'أفضل مكتب قانوني تعاملت معه. سرعة في الإنجاز ودقة في التفاصيل.',
        en: 'The best law office I have dealt with. Speed in delivery and precision in details.'
      },
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'سارة القحطاني',
      nameEn: 'Sarah Al-Qahtani',
      role: { ar: 'طبيبة', en: 'Doctor' },
      text: { 
        ar: 'تعامل راقي ومتابعة مستمرة. حلوا لي مشكلة عقارية معقدة بسهولة.',
        en: 'Elegant treatment and continuous follow-up. They solved my complex real estate issue with ease.'
      },
      rating: 5,
      image: '👩‍⚕️'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              ? 'تجارب حقيقية من عملائنا الكرام الذين وثقوا بخدماتنا'
              : 'Real experiences from our valued clients who trusted our services'
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
                "{language === 'ar' ? testimonials[currentIndex].text.ar : testimonials[currentIndex].text.en}"
              </p>
              
              <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="text-4xl">{testimonials[currentIndex].image}</div>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'ar' ? testimonials[currentIndex].name : testimonials[currentIndex].nameEn}
                  </h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {language === 'ar' ? testimonials[currentIndex].role.ar : testimonials[currentIndex].role.en}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                    : isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

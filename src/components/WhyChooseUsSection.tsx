
import React from 'react';
import { Shield, Award, Clock, Users, Star, Gavel } from 'lucide-react';

interface WhyChooseUsSectionProps {
  language: string;
  isDark: boolean;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ language, isDark }) => {
  const features = [
    {
      icon: Award,
      title: { ar: 'خبرة 25+ عاماً', en: '25+ Years Experience' },
      description: { ar: 'خبرة واسعة في جميع فروع القانون والمحاسبة', en: 'Extensive expertise in all branches of law and accounting' }
    },
    {
      icon: Shield,
      title: { ar: 'سرية تامة', en: 'Complete Confidentiality' },
      description: { ar: 'نضمن الحفاظ على سرية معلومات عملائنا بأعلى المعايير', en: 'We guarantee the highest standards of client confidentiality' }
    },
    {
      icon: Clock,
      title: { ar: 'استجابة سريعة', en: 'Quick Response' },
      description: { ar: 'نقدم الاستشارات والحلول القانونية في أسرع وقت ممكن', en: 'We provide legal consultations and solutions as quickly as possible' }
    },
    {
      icon: Users,
      title: { ar: 'فريق متخصص', en: 'Specialized Team' },
      description: { ar: 'فريق من أفضل المحامين والمحاسبين في المملكة', en: 'A team of the best lawyers and accountants in the Kingdom' }
    },
    {
      icon: Star,
      title: { ar: 'تقييم ممتاز', en: 'Excellent Rating' },
      description: { ar: 'تقييم 4.9/5 من آلاف العملاء الراضين', en: '4.9/5 rating from thousands of satisfied clients' }
    },
    {
      icon: Gavel,
      title: { ar: 'نسبة نجاح عالية', en: 'High Success Rate' },
      description: { ar: 'نسبة نجاح تزيد عن 95% في القضايا المختلفة', en: 'Over 95% success rate in various cases' }
    }
  ];

  return (
    <section id="why-choose-us" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'لماذا نحن الأفضل؟' : 'Why Choose Us?'}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {language === 'ar' 
              ? 'اكتشف الأسباب التي تجعلنا الخيار الأول للاستشارات القانونية والمحاسبية'
              : 'Discover why we are the first choice for legal and accounting consultations'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 animate-fade-in ${
                isDark
                  ? 'bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800'
                  : 'bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {language === 'ar' ? feature.title.ar : feature.title.en}
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                {language === 'ar' ? feature.description.ar : feature.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

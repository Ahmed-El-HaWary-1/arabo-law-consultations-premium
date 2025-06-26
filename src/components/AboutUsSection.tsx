
import React from 'react';
import { Building, Target, Eye, Heart } from 'lucide-react';

interface AboutUsSectionProps {
  language: string;
  isDark: boolean;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ language, isDark }) => {
  return (
    <section id="about-us" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            {language === 'ar' 
              ? 'المكتب العربي للقانون والمحاسبة، رائد في تقديم الخدمات القانونية والمحاسبية المتميزة منذ أكثر من 25 عاماً'
              : 'Arab Office for Law & Accounting, a leader in providing distinguished legal and accounting services for over 25 years'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {language === 'ar' ? 'قصتنا' : 'Our Story'}
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-4`}>
              {language === 'ar'
                ? 'تأسس المكتب العربي للقانون والمحاسبة عام 1999 برؤية واضحة لتقديم خدمات قانونية ومحاسبية عالية الجودة تلبي احتياجات عملائنا المتنوعة.'
                : 'Arab Office for Law & Accounting was established in 1999 with a clear vision to provide high-quality legal and accounting services that meet our diverse clients\' needs.'
              }
            </p>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              {language === 'ar'
                ? 'على مدار السنوات، نمونا لنصبح واحداً من أبرز المكاتب القانونية في المملكة العربية السعودية، حيث نجحنا في التعامل مع أكثر من 6800 قضية وخدمة أكثر من 2600 عميل.'
                : 'Over the years, we have grown to become one of the leading legal offices in Saudi Arabia, successfully handling over 6,800 cases and serving more than 2,600 clients.'
              }
            </p>
          </div>
          <div className={`rounded-2xl p-8 ${
            isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-purple-100 to-pink-100'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6800+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'قضية ناجحة' : 'Successful Cases'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2600+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'عميل راضٍ' : 'Happy Clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3000+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'فريق العمل' : 'Team Members'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: { ar: 'رسالتنا', en: 'Our Mission' },
              description: { ar: 'تقديم أفضل الخدمات القانونية والمحاسبية بأعلى معايير الجودة والمهنية', en: 'Providing the best legal and accounting services with the highest standards of quality and professionalism' }
            },
            {
              icon: Eye,
              title: { ar: 'رؤيتنا', en: 'Our Vision' },
              description: { ar: 'أن نكون المكتب الرائد في المنطقة في تقديم الحلول القانونية والمحاسبية المبتكرة', en: 'To be the leading office in the region in providing innovative legal and accounting solutions' }
            },
            {
              icon: Heart,
              title: { ar: 'قيمنا', en: 'Our Values' },
              description: { ar: 'النزاهة، الشفافية، التميز، والالتزام بأعلى المعايير المهنية', en: 'Integrity, transparency, excellence, and commitment to the highest professional standards' }
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-500 hover:scale-105 animate-fade-in ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {language === 'ar' ? item.title.ar : item.title.en}
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                {language === 'ar' ? item.description.ar : item.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

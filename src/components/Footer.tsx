
import React from 'react';
import { Crown } from 'lucide-react';

interface FooterProps {
  language: string;
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ language, isDark }) => {
  return (
    <footer className={`py-12 ${isDark ? 'bg-gray-950' : 'bg-gray-900'} text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <div>
            <div className={`flex items-center gap-3 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Crown className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-bold">
                {language === 'ar' ? 'المكتب العربي' : 'Arab Office'}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {language === 'ar' 
                ? 'مكتب متخصص في الخدمات القانونية والمحاسبية بخبرة تزيد عن 25 عاماً'
                : 'Specialized office in legal and accounting services with over 25 years of experience'
              }
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>+966 11 123 4567</p>
              <p>info@arabofficela.com</p>
              <p>{language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>{language === 'ar' ? 'الأحد - الخميس: 8:00 ص - 6:00 م' : 'Sun - Thu: 8:00 AM - 6:00 PM'}</p>
              <p>{language === 'ar' ? 'الجمعة: 2:00 م - 6:00 م' : 'Friday: 2:00 PM - 6:00 PM'}</p>
              <p>{language === 'ar' ? 'السبت: مغلق' : 'Saturday: Closed'}</p>
            </div>
          </div>
        </div>

        <div className={`border-t border-gray-700 mt-8 pt-8 text-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <p className="text-gray-400">
            {language === 'ar' 
              ? '© 2024 المكتب العربي للقانون والمحاسبة. جميع الحقوق محفوظة.'
              : '© 2024 Arab Office for Law & Accounting. All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

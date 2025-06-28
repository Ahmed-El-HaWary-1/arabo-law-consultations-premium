
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

interface LocationSectionProps {
  language: string;
  isDark: boolean;
}

const LocationSection: React.FC<LocationSectionProps> = ({ language, isDark }) => {
  return (
    <div className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`} id="location">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'موقعنا' : 'Our Location'}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {language === 'ar' 
              ? 'زورونا في مكتبنا الرئيسي أو تواصلوا معنا'
              : 'Visit us at our main office or get in touch'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.234567!3d30.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiTiAzMcKwMTQnMDQuNCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'ar' ? 'موقع المكتب العربي' : 'Arab Office Location'}
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-lg'
            }`}>
              <div className={`flex items-center gap-4 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'ar' ? 'العنوان' : 'Address'}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    XPVR+7WP, Cairo Governorate Desert<br />
                    Cairo Governorate 4850801
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-lg'
            }`}>
              <div className={`flex items-center gap-4 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {language === 'ar' ? 'الأحد - الخميس: 9:00 ص - 6:00 م' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}<br />
                    {language === 'ar' ? 'الجمعة: 2:00 م - 6:00 م' : 'Friday: 2:00 PM - 6:00 PM'}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-lg'
            }`}>
              <div className={`flex items-center gap-4 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    +966 11 234 5678<br />
                    +966 50 123 4567
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-lg'
            }`}>
              <div className={`flex items-center gap-4 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    info@arabofficela.com<br />
                    consultation@arabofficela.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;


import React from 'react';
import { Calendar, MessageSquare, FileCheck, CreditCard, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  language: string;
  isDark: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ language, isDark }) => {
  const steps = [
    {
      icon: Calendar,
      title: { ar: 'اختر الخدمة', en: 'Choose Service' },
      description: { 
        ar: 'اختر الخدمة المناسبة من قائمة خدماتنا المتخصصة',
        en: 'Select the appropriate service from our specialized service list'
      },
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: { ar: 'احجز موعدك', en: 'Book Appointment' },
      description: { 
        ar: 'املأ البيانات المطلوبة واختر الوقت المناسب لك',
        en: 'Fill in the required information and choose your preferred time'
      },
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileCheck,
      title: { ar: 'ارفع المستندات', en: 'Upload Documents' },
      description: { 
        ar: 'ارفع المستندات والملفات المتعلقة بالاستشارة',
        en: 'Upload documents and files related to your consultation'
      },
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CreditCard,
      title: { ar: 'ادفع بأمان', en: 'Secure Payment' },
      description: { 
        ar: 'اكمل عملية الدفع بأمان تام وثقة كاملة',
        en: 'Complete the payment process with complete security and trust'
      },
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CheckCircle2,
      title: { ar: 'احصل على الاستشارة', en: 'Get Consultation' },
      description: { 
        ar: 'احصل على استشارة متخصصة من خبرائنا المعتمدين',
        en: 'Get specialized consultation from our certified experts'
      },
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'كيف تعمل خدماتنا' : 'How Our Services Work'}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {language === 'ar' 
              ? 'خطوات بسيطة وواضحة للحصول على الاستشارة المثلى'
              : 'Simple and clear steps to get the optimal consultation'
            }
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-y-1/2 hidden lg:block ${
            language === 'ar' ? 'right-0 left-0' : ''
          }`}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center animate-fade-in ${language === 'ar' ? 'text-right' : 'text-left'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative mx-auto w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-6 shadow-2xl transform hover:scale-110 transition-all duration-300 z-10`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className={`font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {language === 'ar' ? step.title.ar : step.title.en}
                </h3>
                
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? step.description.ar : step.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

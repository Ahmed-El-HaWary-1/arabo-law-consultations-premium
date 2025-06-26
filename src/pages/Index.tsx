import React, { useState } from 'react';
import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';
import DarkModeToggle from '@/components/DarkModeToggle';
import ServiceCard from '@/components/ServiceCard';
import StatsSection from '@/components/StatsSection';
import TrustedCompanies from '@/components/TrustedCompanies';
import RecentBookings from '@/components/RecentBookings';
import BookingForm from '@/components/BookingForm';
import AdminLogin from '@/components/AdminLogin';
import AdminPanel from '@/components/AdminPanel';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';

const Index = () => {
  const [language, setLanguage] = useState('ar');
  const [isDark, setIsDark] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState([]);

  const services = [
    {
      title: { ar: 'قانون الأسرة', en: 'Family Law' },
      description: {
        ar: ['استشارات الطلاق والخلع', 'قضايا النفقة والحضانة', 'عقود الزواج الشرعية', 'تسوية النزاعات الأسرية'],
        en: ['Divorce and separation counseling', 'Alimony and custody cases', 'Islamic marriage contracts', 'Family dispute resolution']
      },
      price: 350,
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: { ar: 'قانون الشركات', en: 'Corporate Law' },
      description: {
        ar: ['تأسيس الشركات والمؤسسات', 'صياغة العقود التجارية', 'الاندماج والاستحواذ', 'الامتثال القانوني'],
        en: ['Company formation and establishment', 'Commercial contract drafting', 'Mergers and acquisitions', 'Legal compliance']
      },
      price: 450,
      icon: '🏢'
    },
    {
      title: { ar: 'المحاسبة الضريبية', en: 'Tax Accounting' },
      description: {
        ar: ['إعداد الإقرارات الضريبية', 'التخطيط الضريبي', 'مراجعة الحسابات', 'ضريبة القيمة المضافة'],
        en: ['Tax return preparation', 'Tax planning strategies', 'Account auditing', 'VAT compliance']
      },
      price: 300,
      icon: '📊'
    },
    {
      title: { ar: 'التوثيق القانوني', en: 'Legal Documentation' },
      description: {
        ar: ['صياغة العقود والاتفاقيات', 'توثيق المعاملات', 'الوكالات الشرعية', 'البيوع والمبايعات'],
        en: ['Contract and agreement drafting', 'Transaction documentation', 'Legal power of attorney', 'Sales and purchase agreements']
      },
      price: 250,
      icon: '📋'
    },
    {
      title: { ar: 'الاستشارات المالية', en: 'Financial Consulting' },
      description: {
        ar: ['التخطيط المالي الشخصي', 'إدارة الاستثمارات', 'تحليل المخاطر المالية', 'استشارات التمويل'],
        en: ['Personal financial planning', 'Investment management', 'Financial risk analysis', 'Financing consultations']
      },
      price: 400,
      icon: '💰'
    },
    {
      title: { ar: 'القانون الإداري', en: 'Administrative Law' },
      description: {
        ar: ['القضايا الحكومية', 'التراخيص والتصاريح', 'المنازعات الإدارية', 'اللوائح التنفيذية'],
        en: ['Government cases', 'Licenses and permits', 'Administrative disputes', 'Executive regulations']
      },
      price: 380,
      icon: '⚖️'
    },
    {
      title: { ar: 'قانون الموارد البشرية', en: 'HR Legal Services' },
      description: {
        ar: ['عقود العمل والتوظيف', 'قضايا العمال', 'التأمينات الاجتماعية', 'قانون العمل السعودي'],
        en: ['Employment contracts', 'Labor disputes', 'Social insurance', 'Saudi labor law compliance']
      },
      price: 320,
      icon: '👥'
    },
    {
      title: { ar: 'القانون التجاري', en: 'Commercial Law' },
      description: {
        ar: ['العقود التجارية', 'قانون البنوك', 'التحكيم التجاري', 'حماية المستهلك'],
        en: ['Commercial contracts', 'Banking law', 'Commercial arbitration', 'Consumer protection']
      },
      price: 420,
      icon: '🤝'
    },
    {
      title: { ar: 'قانون العقارات', en: 'Real Estate Law' },
      description: {
        ar: ['البيع والشراء العقاري', 'التسجيل العقاري', 'النزاعات العقارية', 'عقود الإيجار'],
        en: ['Real estate transactions', 'Property registration', 'Real estate disputes', 'Rental agreements']
      },
      price: 360,
      icon: '🏠'
    }
  ];

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (bookingData: any) => {
    setBookings(prev => [...prev, bookingData]);
    setShowBookingForm(false);
    setSelectedService(null);
    alert(language === 'ar' ? 'تم حفظ طلب الاستشارة بنجاح!' : 'Consultation request saved successfully!');
  };

  const handleAdminLogin = (credentials: any) => {
    if (credentials.email === 'admin@arabofficela.com' && credentials.password === 'admin123') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setShowAdminPanel(true);
    } else {
      alert(language === 'ar' ? 'بيانات الدخول غير صحيحة' : 'Invalid credentials');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setShowAdminPanel(false);
  };

  if (showAdminLogin) {
    return <AdminLogin onLogin={handleAdminLogin} language={language} isDark={isDark} />;
  }

  if (showAdminPanel) {
    return <AdminPanel bookings={bookings} language={language} isDark={isDark} onLogout={handleAdminLogout} />;
  }

  if (showBookingForm) {
    return (
      <BookingForm
        selectedService={selectedService}
        language={language}
        isDark={isDark}
        onBack={() => setShowBookingForm(false)}
        onSubmit={handleBookingSubmit}
      />
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
    } ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      <TrustedCompanies language={language} isDark={isDark} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg border-b ${
        isDark ? 'border-gray-800' : 'border-white/20'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-glow">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {language === 'ar' ? 'المكتب العربي' : 'Arab Office'}
                </h1>
              </div>
            </div>
            
            <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <LanguageToggle language={language} onLanguageChange={setLanguage} />
              <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
              <Button
                onClick={() => setShowAdminLogin(true)}
                variant="outline"
                className={`${isDark ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} backdrop-blur-sm`}
              >
                {language === 'ar' ? 'دخول الإدارة' : 'Admin'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection language={language} isDark={isDark} />

      {/* Stats Section */}
      <StatsSection language={language} isDark={isDark} />

      {/* Process Section */}
      <ProcessSection language={language} isDark={isDark} />

      {/* Services Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              {language === 'ar' 
                ? 'نقدم مجموعة شاملة من الخدمات القانونية والمحاسبية المتخصصة'
                : 'We offer a comprehensive range of specialized legal and accounting services'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  icon={service.icon}
                  language={language}
                  isDark={isDark}
                  onSelect={() => handleServiceSelect(service)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Bookings */}
      <RecentBookings language={language} isDark={isDark} />

      {/* Testimonials */}
      <TestimonialsSection language={language} isDark={isDark} />

      {/* Footer */}
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
    </div>
  );
};

export default Index;

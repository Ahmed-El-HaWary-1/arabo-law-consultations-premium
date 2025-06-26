
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import TrustedCompanies from '@/components/TrustedCompanies';
import RecentBookings from '@/components/RecentBookings';
import BookingForm from '@/components/BookingForm';
import AdminLogin from '@/components/AdminLogin';
import AdminPanel from '@/components/AdminPanel';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';

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
      
      <Navigation
        language={language}
        isDark={isDark}
        onLanguageChange={setLanguage}
        onDarkModeToggle={() => setIsDark(!isDark)}
        onAdminLogin={() => setShowAdminLogin(true)}
      />

      <HeroSection language={language} isDark={isDark} />
      <StatsSection language={language} isDark={isDark} />
      <ProcessSection language={language} isDark={isDark} />
      
      <ServicesSection
        language={language}
        isDark={isDark}
        services={services}
        onServiceSelect={handleServiceSelect}
      />

      <RecentBookings language={language} isDark={isDark} />
      <TestimonialsSection language={language} isDark={isDark} />
      <Footer language={language} isDark={isDark} />
    </div>
  );
};

export default Index;

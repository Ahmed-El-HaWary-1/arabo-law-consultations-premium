
import React from 'react';
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
import { services } from '@/data/services';
import { useAppState } from '@/hooks/useAppState';

const Index = () => {
  const {
    language,
    isDark,
    selectedService,
    showBookingForm,
    showAdminLogin,
    showAdminPanel,
    bookings,
    setLanguage,
    setIsDark,
    setShowAdminLogin,
    handleServiceSelect,
    handleBookingSubmit,
    handleAdminLogin,
    handleAdminLogout,
    handleBackToMain,
  } = useAppState();

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
        onBack={handleBackToMain}
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

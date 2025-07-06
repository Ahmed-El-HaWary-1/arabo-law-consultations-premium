
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AboutUsSection from '@/components/AboutUsSection';
import LocationSection from '@/components/LocationSection';
import { services } from '@/data/services';
import { useAppState } from '@/hooks/useAppState';
import { usePricing } from '@/hooks/usePricing';

const Index = () => {
  const location = useLocation();
  const {
    language,
    isDark,
    selectedService,
    showBookingForm,
    showAdminLogin,
    showAdminPanel,
    isAdmin,
    bookings,
    setLanguage,
    setIsDark,
    setShowAdminLogin,
    handleServiceSelect,
    handleBookingSubmit,
    handleAdminLogin,
    handleAdminLogout,
    handleBackToMain,
    handleBackFromAdmin,
  } = useAppState();

  const { 
    userCountry, 
    pricingTier, 
    getServicesWithAdjustedPrices, 
    getPriceRange,
    isLoading: isPricingLoading 
  } = usePricing();

  // Check if we're on the admin route and set admin login state
  useEffect(() => {
    if (location.pathname === '/admin' && !isAdmin && !showAdminPanel) {
      setShowAdminLogin(true);
    }
  }, [location.pathname, isAdmin, showAdminPanel, setShowAdminLogin]);

  // Get services with adjusted prices
  const adjustedServices = getServicesWithAdjustedPrices(services);

  // Show admin login if on admin route or showAdminLogin is true
  if (location.pathname === '/admin' || showAdminLogin) {
    if (!isAdmin && !showAdminPanel) {
      return (
        <AdminLogin 
          onLogin={handleAdminLogin} 
          onBack={handleBackFromAdmin}
          language={language} 
          isDark={isDark} 
        />
      );
    }
  }

  // Show admin panel if logged in as admin
  if (showAdminPanel || (location.pathname === '/admin' && isAdmin)) {
    return (
      <AdminPanel 
        bookings={bookings} 
        language={language} 
        isDark={isDark} 
        onLogout={handleAdminLogout}
        onBack={handleBackFromAdmin}
      />
    );
  }

  // Show booking form
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

  // Show loading state while detecting pricing
  if (isPricingLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'جاري تحميل الأسعار...' : 'Loading pricing...'}
          </p>
        </div>
      </div>
    );
  }

  // Show main homepage
  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
    } ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      <Navigation
        language={language}
        isDark={isDark}
        onLanguageChange={setLanguage}
        onDarkModeToggle={() => setIsDark(!isDark)}
      />

      <HeroSection language={language} isDark={isDark} />
      <TrustedCompanies language={language} isDark={isDark} />
      <StatsSection language={language} isDark={isDark} />
      <WhyChooseUsSection language={language} isDark={isDark} />
      <AboutUsSection language={language} isDark={isDark} />
      <ProcessSection language={language} isDark={isDark} />
      
      <ServicesSection
        language={language}
        isDark={isDark}
        services={adjustedServices}
        onServiceSelect={handleServiceSelect}
      />

      <RecentBookings language={language} isDark={isDark} />
      <TestimonialsSection language={language} isDark={isDark} />
      <LocationSection language={language} isDark={isDark} />
      <Footer language={language} isDark={isDark} />
    </div>
  );
};

export default Index;

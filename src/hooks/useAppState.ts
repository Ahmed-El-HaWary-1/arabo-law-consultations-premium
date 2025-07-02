
import { useState } from 'react';
import { Service } from '@/data/services';

export const useAppState = () => {
  const [language, setLanguage] = useState('ar');
  const [isDark, setIsDark] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState<any[]>([]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (bookingData: any) => {
    const newBooking = {
      ...bookingData,
      id: `${bookingData.name}_${bookingData.timestamp}`,
      contacted: false
    };
    setBookings(prev => [...prev, newBooking]);
    setShowBookingForm(false);
    setSelectedService(null);
    alert(language === 'ar' ? 'تم حفظ طلب الاستشارة بنجاح!' : 'Consultation request saved successfully!');
  };

  const handleAdminLogin = (credentials: { email: string; password: string; rememberMe: boolean }) => {
    const email = credentials.email.trim().toLowerCase();
    const password = credentials.password.trim();
    
    if (email === 'admin@arabofficela.com' && password === 'admin123') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setShowAdminPanel(true);
      
      if (credentials.rememberMe) {
        localStorage.setItem('adminRemember', 'true');
      }
    } else {
      alert(language === 'ar' ? 'بيانات الدخول غير صحيحة' : 'Invalid credentials');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setShowAdminPanel(false);
    localStorage.removeItem('adminRemember');
  };

  const handleBackToMain = () => {
    setShowBookingForm(false);
    setSelectedService(null);
  };

  const handleBackFromAdmin = () => {
    setShowAdminLogin(false);
  };

  return {
    // State
    language,
    isDark,
    selectedService,
    showBookingForm,
    showAdminLogin,
    showAdminPanel,
    isAdmin,
    bookings,
    // Actions
    setLanguage,
    setIsDark,
    setShowAdminLogin,
    handleServiceSelect,
    handleBookingSubmit,
    handleAdminLogin,
    handleAdminLogout,
    handleBackToMain,
    handleBackFromAdmin,
  };
};

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

  const handleAdminLogin = (credentials: any) => {
    console.log('=== LOGIN DEBUG START ===');
    console.log('Full credentials object:', JSON.stringify(credentials, null, 2));
    console.log('Email value:', `"${credentials.email}"`);
    console.log('Password value:', `"${credentials.password}"`);
    console.log('Email type:', typeof credentials.email);
    console.log('Password type:', typeof credentials.password);
    
    // Clean the inputs
    const email = String(credentials.email || '').trim().toLowerCase();
    const password = String(credentials.password || '').trim();
    const expectedEmail = 'admin@arabofficela.com';
    const expectedPassword = 'admin123';
    
    console.log('Cleaned email:', `"${email}"`);
    console.log('Cleaned password:', `"${password}"`);
    console.log('Expected email:', `"${expectedEmail}"`);
    console.log('Expected password:', `"${expectedPassword}"`);
    console.log('Email match:', email === expectedEmail);
    console.log('Password match:', password === expectedPassword);
    console.log('=== LOGIN DEBUG END ===');
    
    if (email === expectedEmail && password === expectedPassword) {
      console.log('✅ LOGIN SUCCESSFUL!');
      setIsAdmin(true);
      setShowAdminLogin(false);
      setShowAdminPanel(true);
      
      if (credentials.rememberMe) {
        localStorage.setItem('adminRemember', 'true');
      }
    } else {
      console.log('❌ LOGIN FAILED');
      console.log('Reason: Email or password mismatch');
      alert(language === 'ar' ? 'بيانات الدخول غير صحيحة. تأكد من البريد الإلكتروني وكلمة المرور.' : 'Invalid credentials. Please check your email and password.');
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

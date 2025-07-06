import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, TrendingUp } from 'lucide-react';
import BookingCard from './BookingCard';

interface RecentBookingsProps {
  language: string;
  isDark: boolean;
}

const RecentBookings: React.FC<RecentBookingsProps> = ({ language, isDark }) => {
  const allBookings = [
    {
      name: 'أحمد محمد العلي / Ahmed Al-Ali',
      service: 'قانون الأسرة / Family Law',
      time: '10:30 صباحاً / 10:30 AM',
      date: 'اليوم / Today',
      status: 'confirmed',
      country: 'Saudi Arabia',
      flag: '🇸🇦'
    },
    {
      name: 'فاطمة عبدالرحمن / Fatima Abdulrahman',
      service: 'المحاسبة الضريبية / Tax Accounting',
      time: '11:45 صباحاً / 11:45 AM',
      date: 'أمس / Yesterday',
      status: 'confirmed',
      country: 'UAE',
      flag: '🇦🇪'
    },
    {
      name: 'محمد خالد الشمري / Mohammed Al-Shamri',
      service: 'الاستشارات المالية / Financial Consulting',
      time: '9:15 صباحاً / 9:15 AM',
      date: 'أمس / Yesterday',
      status: 'confirmed',
      country: 'Kuwait',
      flag: '🇰🇼'
    },
    {
      name: 'نورا سعد القحطاني / Nora Al-Qahtani',
      service: 'قانون العقارات / Real Estate Law',
      time: '1:00 ظهراً / 1:00 PM',
      date: 'اليوم / Today',
      status: 'confirmed',
      country: 'Qatar',
      flag: '🇶🇦'
    },
    {
      name: 'عبدالله أحمد / Abdullah Ahmed',
      service: 'القانون التجاري / Commercial Law',
      time: '3:30 عصراً / 3:30 PM',
      date: 'اليوم / Today',
      status: 'pending',
      country: 'Bahrain',
      flag: '🇧🇭'
    },
    {
      name: 'ليلى محمد الفهد / Layla Al-Fahd',
      service: 'الاستشارات القانونية / Legal Consultation',
      time: '2:15 ظهراً / 2:15 PM',
      date: 'اليوم / Today',
      status: 'pending',
      country: 'Oman',
      flag: '🇴🇲'
    },
    {
      name: 'سارة أحمد النعيمي / Sarah Al-Nuaimi',
      service: 'قانون الشركات / Corporate Law',
      time: '4:20 عصراً / 4:20 PM',
      date: 'أمس / Yesterday',
      status: 'completed',
      country: 'Jordan',
      flag: '🇯🇴'
    },
    {
      name: 'خالد عبدالعزيز / Khalid Abdulaziz',
      service: 'المحاسبة الإدارية / Management Accounting',
      time: '5:45 مساءً / 5:45 PM',
      date: 'اليوم / Today',
      status: 'completed',
      country: 'Lebanon',
      flag: '🇱🇧'
    },
    {
      name: 'مريم سالم الزهراني / Mariam Al-Zahrani',
      service: 'القانون الدولي / International Law',
      time: '8:30 صباحاً / 8:30 AM',
      date: 'اليوم / Today',
      status: 'confirmed',
      country: 'Egypt',
      flag: '🇪🇬'
    },
    {
      name: 'يوسف محمد العتيبي / Youssef Al-Otaibi',
      service: 'التدقيق المالي / Financial Auditing',
      time: '10:00 صباحاً / 10:00 AM',
      date: 'أمس / Yesterday',
      status: 'pending',
      country: 'Morocco',
      flag: '🇲🇦'
    },
    {
      name: 'John Smith',
      service: 'Legal Documentation',
      time: '12:30 PM',
      date: 'Today',
      status: 'confirmed',
      country: 'USA',
      flag: '🇺🇸'
    },
    {
      name: 'Emily Johnson',
      service: 'HR Legal Services',
      time: '3:15 PM',
      date: 'Yesterday',
      status: 'completed',
      country: 'UK',
      flag: '🇬🇧'
    }
  ];

  const [displayedBookings, setDisplayedBookings] = useState(allBookings.slice(0, 6));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      const shuffled = [...allBookings].sort(() => 0.5 - Math.random());
      setDisplayedBookings(shuffled.slice(0, 6));
    }, Math.random() * 8000 + 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900' 
        : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
    }`}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-bounce-subtle"></div>
      </div>

      <div className="container-modern relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-float-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-cosmic rounded-2xl flex items-center justify-center shadow-luxury animate-pulse-glow">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce-subtle">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gradient font-modern">
              {language === 'ar' ? 'الحجوزات النشطة' : 'Live Bookings'}
            </h2>
            <TrendingUp className="w-8 h-8 text-purple-500 animate-bounce-subtle" />
          </div>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'ar' 
              ? 'مواعيد العملاء الحديثة والمؤكدة في الوقت الفعلي مع تحديثات مستمرة'
              : 'Real-time client appointments and confirmed consultations with live updates'
            }
          </p>
        </div>
        
        {/* Enhanced Bookings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedBookings.map((booking, index) => (
            <BookingCard
              key={`${booking.name}-${index}`}
              booking={booking}
              language={language}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* Enhanced Bottom Notification */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-strong shadow-luxury ${
            isDark 
              ? 'text-gray-300 border border-gray-700/30' 
              : 'text-gray-700 border border-gray-200/30'
          }`}>
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="font-medium">
              {language === 'ar' 
                ? 'يتم تحديث الحجوزات تلقائياً كل 5-10 ثوانِ • نظام متطور للإشعارات'
                : 'Bookings update automatically every 5-10 seconds • Advanced notification system'
              }
            </span>
            <Zap className="w-4 h-4 text-yellow-500 animate-bounce-subtle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBookings;

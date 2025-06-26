
import React, { useState, useEffect } from 'react';
import { Clock, User, CheckCircle } from 'lucide-react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...allBookings].sort(() => 0.5 - Math.random());
      setDisplayedBookings(shuffled.slice(0, 6));
    }, Math.random() * 8000 + 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      confirmed: { ar: 'مؤكد', en: 'Confirmed' },
      pending: { ar: 'قيد الانتظار', en: 'Pending' },
      completed: { ar: 'مكتمل', en: 'Completed' }
    };
    return language === 'ar' ? statusMap[status as keyof typeof statusMap]?.ar : statusMap[status as keyof typeof statusMap]?.en;
  };

  return (
    <div className={`py-20 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-center' : 'text-center'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
              {language === 'ar' ? 'الحجوزات النشطة' : 'Live Bookings'}
            </h2>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {language === 'ar' 
              ? 'مواعيد العملاء الحديثة والمؤكدة في الوقت الفعلي'
              : 'Real-time client appointments and confirmed consultations'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBookings.map((booking, index) => (
            <div
              key={`${booking.name}-${index}`}
              className={`group relative p-6 rounded-2xl transition-all duration-700 hover:scale-105 animate-fade-in backdrop-blur-sm ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-gray-700/80 hover:to-gray-800/80 border border-purple-500/20'
                  : 'bg-white/80 hover:bg-white/90 border border-purple-200/30 shadow-lg hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className={`relative z-10 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-3 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xl">{booking.flag}</span>
                    <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {booking.name}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {booking.country}
                  </div>
                  
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${
                    isDark ? 'bg-purple-900/30 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}>
                    {booking.service}
                  </div>
                  
                  <div className={`flex items-center gap-2 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  } ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <Clock className="w-4 h-4" />
                    <span>{booking.time} - {booking.date}</span>
                  </div>

                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                    {getStatusText(booking.status)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBookings;

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
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
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
              className={`group relative p-8 rounded-3xl transition-all duration-700 hover:scale-105 animate-fade-in backdrop-blur-md cursor-pointer transform hover:-translate-y-2 ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 hover:from-gray-700/90 hover:to-gray-800/90 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-white/95 hover:bg-white border border-purple-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20'
              } hover:border-purple-400/50`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: isDark 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.1)' 
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)'
              }}
            >
              {/* Floating decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Live indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`text-xs font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  {language === 'ar' ? 'مباشر' : 'LIVE'}
                </span>
              </div>
              
              <div className={`relative z-10 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-4 mb-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{booking.flag}</span>
                    <div>
                      <h3 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-purple-600 transition-colors duration-300`}>
                        {booking.name}
                      </h3>
                      <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {booking.country}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className={`inline-block px-4 py-3 rounded-2xl text-sm font-medium border backdrop-blur-sm ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 border-purple-500/30 group-hover:border-purple-400/50' 
                      : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 group-hover:border-purple-300'
                  } transition-all duration-300`}>
                    {booking.service}
                  </div>
                  
                  <div className={`flex items-center gap-3 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  } ${language === 'ar' ? 'flex-row-reverse' : ''} group-hover:text-purple-500 transition-colors duration-300`}>
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{booking.time} - {booking.date}</span>
                  </div>

                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-sm ${getStatusColor(booking.status)} group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></div>
                    {getStatusText(booking.status)}
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom notification */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md ${
            isDark 
              ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50' 
              : 'bg-white/80 text-gray-600 border border-gray-200/50'
          } shadow-lg`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              {language === 'ar' 
                ? 'يتم تحديث الحجوزات تلقائياً كل 5-10 ثوانِ'
                : 'Bookings update automatically every 5-10 seconds'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBookings;

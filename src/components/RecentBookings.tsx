
import React, { useState, useEffect } from 'react';
import { Clock, User, CheckCircle } from 'lucide-react';

interface RecentBookingsProps {
  language: string;
  isDark: boolean;
}

const RecentBookings: React.FC<RecentBookingsProps> = ({ language, isDark }) => {
  const allBookings = [
    {
      name: 'أحمد محمد العلي',
      service: 'قانون الأسرة',
      time: '10:30 صباحاً',
      date: 'اليوم',
      status: 'confirmed'
    },
    {
      name: 'Sarah Johnson',
      service: 'Corporate Law',
      time: '2:15 PM',
      date: 'Today',
      status: 'pending'
    },
    {
      name: 'فاطمة عبدالرحمن',
      service: 'المحاسبة الضريبية',
      time: '11:45 صباحاً',
      date: 'أمس',
      status: 'confirmed'
    },
    {
      name: 'Michael Brown',
      service: 'Legal Documentation',
      time: '4:20 PM',
      date: 'Yesterday',
      status: 'completed'
    },
    {
      name: 'نورا خالد الشمري',
      service: 'الاستشارات المالية',
      time: '9:15 صباحاً',
      date: 'أمس',
      status: 'confirmed'
    },
    {
      name: 'David Wilson',
      service: 'Administrative Law',
      time: '3:30 PM',
      date: 'Today',
      status: 'pending'
    },
    {
      name: 'ليلى أحمد الفهد',
      service: 'قانون العقارات',
      time: '1:00 ظهراً',
      date: 'اليوم',
      status: 'confirmed'
    },
    {
      name: 'James Miller',
      service: 'HR Legal Services',
      time: '5:45 PM',
      date: 'Today',
      status: 'completed'
    }
  ];

  const [displayedBookings, setDisplayedBookings] = useState(allBookings.slice(0, 6));

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...allBookings].sort(() => 0.5 - Math.random());
      setDisplayedBookings(shuffled.slice(0, 6));
    }, Math.random() * 8000 + 5000); // Random interval between 5-13 seconds

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
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
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
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {booking.name}
                  </h3>
                </div>
                
                <div className="space-y-3">
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

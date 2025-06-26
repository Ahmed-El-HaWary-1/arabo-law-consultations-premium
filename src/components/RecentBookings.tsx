
import React from 'react';
import { Clock, Phone } from 'lucide-react';

interface RecentBookingsProps {
  language: string;
  isDark: boolean;
}

const RecentBookings: React.FC<RecentBookingsProps> = ({ language, isDark }) => {
  const recentBookings = [
    {
      name: 'أحمد محمد العلي',
      phone: '+966 50 123 4567',
      service: 'قانون الأسرة',
      time: '10:30 صباحاً',
      date: 'اليوم'
    },
    {
      name: 'Sarah Johnson',
      phone: '+966 55 987 6543',
      service: 'Corporate Law',
      time: '2:15 PM',
      date: 'Today'
    },
    {
      name: 'فاطمة عبدالرحمن',
      phone: '+966 54 246 8135',
      service: 'المحاسبة الضريبية',
      time: '11:45 صباحاً',
      date: 'أمس'
    },
    {
      name: 'Michael Brown',
      phone: '+966 56 369 2580',
      service: 'Legal Documentation',
      time: '4:20 PM',
      date: 'Yesterday'
    },
    {
      name: 'نورا خالد الشمري',
      phone: '+966 53 741 9630',
      service: 'الاستشارات المالية',
      time: '9:15 صباحاً',
      date: 'أمس'
    }
  ];

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${
          isDark ? 'text-white' : 'text-gray-900'
        } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? 'الحجوزات الأخيرة' : 'Recent Bookings'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBookings.map((booking, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 animate-fade-in ${
                isDark
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200'
              } border border-purple-200/20 hover:border-purple-400/40`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {booking.name}
                </h3>
                <div className={`flex items-center gap-2 mt-2 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-4 h-4" />
                  <span>{booking.phone}</span>
                </div>
              </div>
              
              <div className={`space-y-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className={`px-3 py-1 rounded-full text-sm inline-block ${
                  isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  {booking.service}
                </div>
                
                <div className={`flex items-center gap-2 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Clock className="w-4 h-4" />
                  <span>{booking.time} - {booking.date}</span>
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

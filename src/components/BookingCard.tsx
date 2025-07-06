
import React from 'react';
import { Clock, User, CheckCircle, AlertCircle, Hourglass } from 'lucide-react';

interface BookingCardProps {
  booking: {
    name: string;
    service: string;
    time: string;
    date: string;
    status: 'confirmed' | 'pending' | 'completed';
    country: string;
    flag: string;
  };
  language: string;
  isDark: boolean;
  index: number;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, language, isDark, index }) => {
  const getStatusConfig = (status: string) => {
    const configs = {
      confirmed: {
        color: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800',
        icon: CheckCircle,
        text: { ar: 'مؤكد', en: 'Confirmed' }
      },
      pending: {
        color: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
        icon: Hourglass,
        text: { ar: 'قيد الانتظار', en: 'Pending' }
      },
      completed: {
        color: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
        icon: AlertCircle,
        text: { ar: 'مكتمل', en: 'Completed' }
      }
    };
    return configs[status as keyof typeof configs];
  };

  const statusConfig = getStatusConfig(booking.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div
      className={`group relative card-modern card-hover backdrop-blur-xl transition-all duration-500 cursor-pointer animate-float-up ${
        isDark
          ? 'bg-gray-900/70 hover:bg-gray-800/80 border-purple-500/20 hover:border-purple-400/40'
          : 'bg-white/70 hover:bg-white/90 border-purple-200/30 hover:border-purple-300/50'
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Floating Live Indicator */}
      <div className="absolute -top-2 -right-2 z-20">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold glass-strong ${
          isDark ? 'text-green-400' : 'text-green-600'
        }`}>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          {language === 'ar' ? 'مباشر' : 'LIVE'}
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <div className={`p-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        {/* Header with Avatar and Country */}
        <div className={`flex items-center gap-4 mb-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-cosmic rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-300">
              <User className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 text-lg group-hover:scale-125 transition-transform duration-300">
              {booking.flag}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-base leading-tight mb-1 group-hover:text-purple-600 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {booking.name}
            </h3>
            <p className={`text-sm flex items-center gap-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className="w-2 h-2 bg-current rounded-full opacity-50"></span>
              {booking.country}
            </p>
          </div>
        </div>
        
        {/* Service Badge */}
        <div className="mb-4">
          <div className={`inline-flex items-center px-4 py-3 rounded-xl text-sm font-semibold border backdrop-blur-sm transition-all duration-300 group-hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-900/40 to-pink-900/40 text-purple-300 border-purple-500/30 group-hover:border-purple-400/50' 
              : 'bg-gradient-to-r from-purple-50/80 to-pink-50/80 text-purple-700 border-purple-200/50 group-hover:border-purple-300/70'
          }`}>
            <span className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></span>
            {booking.service}
          </div>
        </div>
        
        {/* Time and Date */}
        <div className={`flex items-center gap-3 text-sm mb-4 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        } ${language === 'ar' ? 'flex-row-reverse' : ''} group-hover:text-purple-500 transition-colors duration-300`}>
          <Clock className="w-4 h-4 group-hover:animate-bounce-subtle" />
          <span className="font-medium">{booking.time} - {booking.date}</span>
        </div>

        {/* Status */}
        <div className={`inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-300 group-hover:scale-105 ${statusConfig.color}`}>
          <StatusIcon className="w-3 h-3 mr-2" />
          {language === 'ar' ? statusConfig.text.ar : statusConfig.text.en}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default BookingCard;

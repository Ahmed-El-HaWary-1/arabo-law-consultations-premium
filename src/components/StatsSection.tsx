
import React from 'react';
import { Trophy, Users, Calendar, Star } from 'lucide-react';

interface StatsSectionProps {
  language: string;
  isDark: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ language, isDark }) => {
  const stats = [
    {
      icon: Trophy,
      number: '6800+',
      label: { ar: 'قضية منتصرة', en: 'Cases Won' },
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      number: '2600+',
      label: { ar: 'عميل راضٍ', en: 'Happy Clients' },
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      number: '3000+',
      label: { ar: 'فريقنا', en: 'Our Team' },
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Calendar,
      number: '25+',
      label: { ar: 'سنة خبرة', en: 'Years Experience' },
      color: 'from-indigo-400 to-cyan-500'
    },
    {
      icon: Star,
      number: '4.9',
      label: { ar: 'تقييم العملاء', en: 'Client Rating' },
      color: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 animate-fade-in ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.number}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {language === 'ar' ? stat.label.ar : stat.label.en}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

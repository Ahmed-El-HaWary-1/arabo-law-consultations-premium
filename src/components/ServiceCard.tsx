
import React from 'react';
import { Crown, Clock, DollarSign } from 'lucide-react';

interface ServiceCardProps {
  title: { ar: string; en: string };
  description: { ar: string[]; en: string[] };
  price: number;
  icon: string;
  language: string;
  isDark: boolean;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  icon,
  language,
  isDark,
  onSelect,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        isDark
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
          : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white'
      } border border-purple-200/20 hover:border-purple-400/40`}
      onClick={onSelect}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`text-4xl ${language === 'ar' ? 'ml-auto' : ''}`}>{icon}</div>
          <Crown className="w-6 h-6 text-yellow-500 opacity-80" />
        </div>
        
        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'} ${
          language === 'ar' ? 'text-right' : 'text-left'
        }`}>
          {language === 'ar' ? title.ar : title.en}
        </h3>
        
        <ul className={`space-y-2 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {(language === 'ar' ? description.ar : description.en).map((point, index) => (
            <li key={index} className={`flex items-start gap-2 text-sm ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        
        <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {price}
            </span>
          </div>
          <div className={`flex items-center gap-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} ${
            language === 'ar' ? 'flex-row-reverse' : ''
          }`}>
            <Clock className="w-4 h-4" />
            <span>{language === 'ar' ? 'حتى 45 دقيقة' : 'Up to 45 min'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

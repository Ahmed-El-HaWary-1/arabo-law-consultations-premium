
import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';

interface PricingIndicatorProps {
  language: string;
  isDark: boolean;
  userCountry: string;
  pricingTier: string;
  priceRange: { min: number; max: number };
}

const PricingIndicator: React.FC<PricingIndicatorProps> = ({
  language,
  isDark,
  userCountry,
  pricingTier,
  priceRange,
}) => {
  const getTierName = () => {
    switch (pricingTier) {
      case 'egypt':
        return language === 'ar' ? 'مصر - أسعار خاصة' : 'Egypt - Special Pricing';
      case 'arab':
        return language === 'ar' ? 'الدول العربية' : 'Arab Countries';
      case 'international':
        return language === 'ar' ? 'دولي' : 'International';
      default:
        return language === 'ar' ? 'دولي' : 'International';
    }
  };

  const getTierColor = () => {
    switch (pricingTier) {
      case 'egypt':
        return 'from-green-500 to-emerald-500';
      case 'arab':
        return 'from-blue-500 to-cyan-500';
      case 'international':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  return (
    <div className={`fixed top-20 ${language === 'ar' ? 'left-4' : 'right-4'} z-50`}>
      <div className={`bg-gradient-to-r ${getTierColor()} rounded-lg p-3 shadow-lg text-white max-w-xs`}>
        <div className={`flex items-center gap-2 mb-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">
            {userCountry ? userCountry.charAt(0).toUpperCase() + userCountry.slice(1) : getTierName()}
          </span>
        </div>
        <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <DollarSign className="w-4 h-4" />
          <span className="text-xs">
            {language === 'ar' 
              ? `الأسعار: $${priceRange.min} - $${priceRange.max}`
              : `Pricing: $${priceRange.min} - $${priceRange.max}`
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingIndicator;

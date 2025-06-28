
import React from 'react';

interface TrustedCompaniesProps {
  language: string;
  isDark: boolean;
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ language, isDark }) => {
  const companies = [
    { name: 'Saudi Aramco', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Saudi_Aramco.svg' },
    { name: 'SABIC', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/SABIC_logo.svg' },
    { name: 'STC', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/STC_logo.svg' },
    { name: 'Al Rajhi Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Al_Rajhi_Bank_logo.svg' },
    { name: 'SAMBA Financial Group', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=SAMBA' },
    { name: 'National Commercial Bank', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=NCB' },
    { name: 'Mobily', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=Mobily' },
    { name: 'Zain KSA', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=Zain' },
    { name: 'ACWA Power', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=ACWA' },
    { name: 'Ma\'aden', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=Ma\'aden' },
    { name: 'NEOM', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=NEOM' },
    { name: 'PIF', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=PIF' }
  ];

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h3 className={`text-2xl font-semibold mb-12 text-center ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {language === 'ar' ? 'شركاؤنا الموثوقون' : 'Trusted Partners'}
        </h3>
        
        {/* Horizontal scrolling container */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-8 whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 flex items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px] ${
                  isDark
                    ? 'hover:bg-gray-700 bg-gray-900/50'
                    : 'hover:bg-white bg-white/80 shadow-md hover:shadow-lg'
                }`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter"
                  style={{
                    filter: isDark ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 flex items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px] ${
                  isDark
                    ? 'hover:bg-gray-700 bg-gray-900/50'
                    : 'hover:bg-white bg-white/80 shadow-md hover:shadow-lg'
                }`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter"
                  style={{
                    filter: isDark ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;


import React from 'react';

interface TrustedCompaniesProps {
  language: string;
  isDark: boolean;
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ language, isDark }) => {
  const companies = [
    { name: 'Saudi Aramco', logo: '🛢️' },
    { name: 'SABIC', logo: '🏭' },
    { name: 'STC', logo: '📡' },
    { name: 'Al Rajhi Bank', logo: '🏦' },
    { name: 'SAMBA', logo: '💳' },
    { name: 'NCB', logo: '🏛️' },
    { name: 'Mobily', logo: '📱' },
    { name: 'Zain KSA', logo: '📶' }
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
      <div
        className={`p-4 rounded-2xl shadow-xl backdrop-blur-sm border ${
          isDark
            ? 'bg-gray-900/80 border-gray-700'
            : 'bg-white/80 border-gray-200'
        }`}
      >
        <h3 className={`text-sm font-semibold mb-4 text-center ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {language === 'ar' ? 'شركاؤنا الموثوقون' : 'Trusted Partners'}
        </h3>
        <div className="space-y-3">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in ${
                isDark
                  ? 'hover:bg-gray-800'
                  : 'hover:bg-gray-100'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-2xl">{company.logo}</span>
              <span className={`text-xs font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;

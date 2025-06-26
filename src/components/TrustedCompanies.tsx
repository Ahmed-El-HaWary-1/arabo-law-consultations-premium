
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
    <div className={`py-12 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h3 className={`text-xl font-semibold mb-8 text-center ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {language === 'ar' ? 'شركاؤنا الموثوقون' : 'Trusted Partners'}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in ${
                isDark
                  ? 'hover:bg-gray-700'
                  : 'hover:bg-white shadow-md hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-2xl">{company.logo}</span>
              <span className={`text-sm font-medium ${
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

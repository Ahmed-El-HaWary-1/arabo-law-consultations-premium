
import React from 'react';
import ServiceCard from '@/components/ServiceCard';

interface Service {
  title: { ar: string; en: string };
  description: { ar: string[]; en: string[] };
  price: number;
  icon: string;
}

interface ServicesSectionProps {
  language: string;
  isDark: boolean;
  services: Service[];
  onServiceSelect: (service: Service) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  isDark,
  services,
  onServiceSelect,
}) => {
  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {language === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات القانونية والمحاسبية المتخصصة'
              : 'We offer a comprehensive range of specialized legal and accounting services'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                language={language}
                isDark={isDark}
                onSelect={() => onServiceSelect(service)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

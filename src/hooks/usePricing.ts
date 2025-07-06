
import { useState, useEffect } from 'react';
import { Service } from '@/data/services';

interface PricingTier {
  multiplier: number;
  range: { min: number; max: number };
}

const pricingTiers: Record<string, PricingTier> = {
  egypt: { multiplier: 0.02, range: { min: 6, max: 8 } }, // Egypt: $6-8
  arab: { multiplier: 0.03, range: { min: 10, max: 15 } }, // Arab countries: $10-15
  international: { multiplier: 0.05, range: { min: 17, max: 25 } } // Other countries: $17-25
};

const arabCountries = [
  'saudi arabia', 'united arab emirates', 'kuwait', 'qatar', 'bahrain', 'oman',
  'jordan', 'lebanon', 'syria', 'iraq', 'palestine', 'libya', 'tunisia',
  'algeria', 'morocco', 'sudan', 'yemen', 'somalia', 'djibouti', 'comoros'
];

export const usePricing = () => {
  const [userCountry, setUserCountry] = useState<string>('');
  const [pricingTier, setPricingTier] = useState<string>('international');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Try to get country from IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_name?.toLowerCase() || '';
        
        setUserCountry(country);
        
        if (country === 'egypt') {
          setPricingTier('egypt');
        } else if (arabCountries.includes(country)) {
          setPricingTier('arab');
        } else {
          setPricingTier('international');
        }
      } catch (error) {
        console.log('Could not detect country, using international pricing');
        setPricingTier('international');
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const calculatePrice = (basePrice: number): number => {
    const tier = pricingTiers[pricingTier];
    const calculatedPrice = basePrice * tier.multiplier;
    
    // Ensure price falls within the tier's range
    return Math.max(tier.range.min, Math.min(tier.range.max, Math.round(calculatedPrice)));
  };

  const getPriceRange = (): { min: number; max: number } => {
    return pricingTiers[pricingTier].range;
  };

  const getServicesWithAdjustedPrices = (services: Service[]): Service[] => {
    return services.map(service => ({
      ...service,
      price: calculatePrice(service.price)
    }));
  };

  return {
    userCountry,
    pricingTier,
    isLoading,
    calculatePrice,
    getPriceRange,
    getServicesWithAdjustedPrices
  };
};

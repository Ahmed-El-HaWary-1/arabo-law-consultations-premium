
export interface Service {
  title: { ar: string; en: string };
  description: { ar: string[]; en: string[] };
  price: number;
  icon: string;
}

export const services: Service[] = [
  {
    title: { ar: 'قانون الأسرة', en: 'Family Law' },
    description: {
      ar: ['استشارات الطلاق والخلع', 'قضايا النفقة والحضانة', 'عقود الزواج الشرعية', 'تسوية النزاعات الأسرية'],
      en: ['Divorce and separation counseling', 'Alimony and custody cases', 'Islamic marriage contracts', 'Family dispute resolution']
    },
    price: 350,
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: { ar: 'قانون الشركات', en: 'Corporate Law' },
    description: {
      ar: ['تأسيس الشركات والمؤسسات', 'صياغة العقود التجارية', 'الاندماج والاستحواذ', 'الامتثال القانوني'],
      en: ['Company formation and establishment', 'Commercial contract drafting', 'Mergers and acquisitions', 'Legal compliance']
    },
    price: 450,
    icon: '🏢'
  },
  {
    title: { ar: 'المحاسبة الضريبية', en: 'Tax Accounting' },
    description: {
      ar: ['إعداد الإقرارات الضريبية', 'التخطيط الضريبي', 'مراجعة الحسابات', 'ضريبة القيمة المضافة'],
      en: ['Tax return preparation', 'Tax planning strategies', 'Account auditing', 'VAT compliance']
    },
    price: 300,
    icon: '📊'
  },
  {
    title: { ar: 'التوثيق القانوني', en: 'Legal Documentation' },
    description: {
      ar: ['صياغة العقود والاتفاقيات', 'توثيق المعاملات', 'الوكالات الشرعية', 'البيوع والمبايعات'],
      en: ['Contract and agreement drafting', 'Transaction documentation', 'Legal power of attorney', 'Sales and purchase agreements']
    },
    price: 250,
    icon: '📋'
  },
  {
    title: { ar: 'الاستشارات المالية', en: 'Financial Consulting' },
    description: {
      ar: ['التخطيط المالي الشخصي', 'إدارة الاستثمارات', 'تحليل المخاطر المالية', 'استشارات التمويل'],
      en: ['Personal financial planning', 'Investment management', 'Financial risk analysis', 'Financing consultations']
    },
    price: 400,
    icon: '💰'
  },
  {
    title: { ar: 'القانون الإداري', en: 'Administrative Law' },
    description: {
      ar: ['القضايا الحكومية', 'التراخيص والتصاريح', 'المنازعات الإدارية', 'اللوائح التنفيذية'],
      en: ['Government cases', 'Licenses and permits', 'Administrative disputes', 'Executive regulations']
    },
    price: 380,
    icon: '⚖️'
  },
  {
    title: { ar: 'قانون الموارد البشرية', en: 'HR Legal Services' },
    description: {
      ar: ['عقود العمل والتوظيف', 'قضايا العمال', 'التأمينات الاجتماعية', 'قانون العمل السعودي'],
      en: ['Employment contracts', 'Labor disputes', 'Social insurance', 'Saudi labor law compliance']
    },
    price: 320,
    icon: '👥'
  },
  {
    title: { ar: 'القانون التجاري', en: 'Commercial Law' },
    description: {
      ar: ['العقود التجارية', 'قانون البنوك', 'التحكيم التجاري', 'حماية المستهلك'],
      en: ['Commercial contracts', 'Banking law', 'Commercial arbitration', 'Consumer protection']
    },
    price: 420,
    icon: '🤝'
  },
  {
    title: { ar: 'قانون العقارات', en: 'Real Estate Law' },
    description: {
      ar: ['البيع والشراء العقاري', 'التسجيل العقاري', 'النزاعات العقارية', 'عقود الإيجار'],
      en: ['Real estate transactions', 'Property registration', 'Real estate disputes', 'Rental agreements']
    },
    price: 360,
    icon: '🏠'
  }
];

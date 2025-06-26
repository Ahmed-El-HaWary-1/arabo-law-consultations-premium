
import React, { useState } from 'react';
import { Phone, Upload, X, File, Image, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BookingFormProps {
  selectedService: any;
  language: string;
  isDark: boolean;
  onBack: () => void;
  onSubmit: (bookingData: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  selectedService,
  language,
  isDark,
  onBack,
  onSubmit,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    description: '',
  });

  const handlePhoneVerification = () => {
    // Simulate sending verification code
    alert(language === 'ar' ? 'تم إرسال رمز التحقق' : 'Verification code sent');
    setCurrentStep(2);
  };

  const handleVerifyCode = () => {
    if (verificationCode === '1234') {
      setIsVerified(true);
      setCurrentStep(3);
    } else {
      alert(language === 'ar' ? 'رمز التحقق غير صحيح' : 'Invalid verification code');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (file.type === 'application/pdf') return <FileText className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const handleSubmit = () => {
    const bookingData = {
      ...formData,
      service: selectedService,
      files: uploadedFiles,
      timestamp: new Date().toISOString(),
    };
    onSubmit(bookingData);
  };

  return (
    <div className={`min-h-screen py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className={`bg-gradient-to-br ${
          isDark ? 'from-gray-800 to-gray-900' : 'from-white to-gray-50'
        } rounded-2xl p-8 shadow-2xl animate-fade-in`}>
          
          {/* Header */}
          <div className={`text-center mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {language === 'ar' ? 'حجز استشارة' : 'Book Consultation'}
            </h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'ar' 
                ? `خدمة: ${selectedService?.title.ar}`
                : `Service: ${selectedService?.title.en}`
              }
            </p>
          </div>

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`${language === 'ar' ? 'text-right' : 'text-left'} ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : ''
                  }`}
                  placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`${isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                  placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                </label>
                <div className="flex gap-3">
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`flex-1 ${language === 'ar' ? 'text-right' : 'text-left'} ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : ''
                    }`}
                    placeholder={language === 'ar' ? '+966 50 123 4567' : '+966 50 123 4567'}
                  />
                  <Button
                    onClick={handlePhoneVerification}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={!formData.phone}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'تحقق' : 'Verify'}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Phone Verification */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' 
                    ? `تم إرسال رمز التحقق إلى ${formData.phone}`
                    : `Verification code sent to ${formData.phone}`
                  }
                </p>
                <Input
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className={`text-center text-2xl font-mono tracking-widest mb-4 ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : ''
                  }`}
                  placeholder="1234"
                  maxLength={4}
                />
                <Button
                  onClick={handleVerifyCode}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  {language === 'ar' ? 'تأكيد الرمز' : 'Verify Code'}
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Booking Details */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={`${isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'الوقت المفضل' : 'Preferred Time'}
                  </label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className={`${isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'وصف الاستشارة' : 'Consultation Description'}
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className={`${language === 'ar' ? 'text-right' : 'text-left'} ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : ''
                  }`}
                  placeholder={language === 'ar' ? 'اشرح تفاصيل الاستشارة...' : 'Describe your consultation needs...'}
                  rows={4}
                />
              </div>

              {/* File Upload Section */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? 'رفع الملفات (اختياري)' : 'Upload Files (Optional)'}
                </label>
                
                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                  isDark 
                    ? 'border-gray-600 hover:border-gray-500 bg-gray-800/50' 
                    : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                }`}>
                  <Upload className={`w-8 h-8 mx-auto mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    {language === 'ar' 
                      ? 'اسحب وأفلت الملفات هنا أو انقر للتحديد'
                      : 'Drag and drop files here or click to select'
                    }
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md cursor-pointer hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    {language === 'ar' ? 'اختر الملفات' : 'Choose Files'}
                  </label>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          isDark ? 'bg-gray-700' : 'bg-gray-100'
                        } ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                      >
                        <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                          {getFileIcon(file)}
                          <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {file.name}
                          </span>
                          <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg py-3"
                disabled={!formData.name || !formData.date || !formData.time}
              >
                {language === 'ar' ? 'إكمال الدفع' : 'Complete Payment'}
              </Button>
            </div>
          )}

          {/* Navigation */}
          <div className={`flex justify-between mt-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Button
              onClick={onBack}
              variant="outline"
              className={`${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}`}
            >
              {language === 'ar' ? 'رجوع' : 'Back'}
            </Button>
            
            {currentStep < 3 && (
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {language === 'ar' ? `الخطوة ${currentStep} من 3` : `Step ${currentStep} of 3`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

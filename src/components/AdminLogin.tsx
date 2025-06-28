
import React, { useState } from 'react';
import { Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AdminLoginProps {
  onLogin: (credentials: { email: string; password: string; rememberMe: boolean }) => void;
  onBack: () => void;
  language: string;
  isDark: boolean;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBack, language, isDark }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '', rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      onLogin(credentials);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'
    }`}>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl animate-fade-in ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
          : 'bg-white'
      }`}>
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className={`mb-4 ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'ar' ? 'رجوع' : 'Back'}
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {language === 'ar' ? 'تسجيل دخول الإدارة' : 'Admin Login'}
          </h2>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'ar' ? 'للفريق المصرح له فقط' : 'Authorized team members only'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <Input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              className={`${isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
              placeholder="admin@arabofficela.com"
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'كلمة المرور' : 'Password'}
            </label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className={`pr-10 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={credentials.rememberMe}
              onChange={(e) => setCredentials({...credentials, rememberMe: e.target.checked})}
              className={`w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 ${
                language === 'ar' ? 'ml-2' : 'mr-2'
              }`}
            />
            <label 
              htmlFor="rememberMe" 
              className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {language === 'ar' ? 'تذكرني' : 'Remember me'}
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {language === 'ar' ? 'جاري التحقق...' : 'Verifying...'}
              </div>
            ) : (
              language === 'ar' ? 'تسجيل الدخول' : 'Sign In'
            )}
          </Button>
        </form>

        <div className={`mt-6 text-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {language === 'ar' ? 'بيانات تجريبية:' : 'Demo credentials:'}<br />
          admin@arabofficela.com / admin123
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

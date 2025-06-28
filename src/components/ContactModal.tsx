
import React from 'react';
import { X, Download, Calendar, Clock, User, Mail, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ContactModalProps {
  booking: any;
  isOpen: boolean;
  onClose: () => void;
  onMarkDone: (bookingId: string) => void;
  language: string;
  isDark: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({
  booking,
  isOpen,
  onClose,
  onMarkDone,
  language,
  isDark
}) => {
  if (!booking) return null;

  const handleDownloadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-2xl ${isDark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <DialogHeader>
          <DialogTitle className={`text-xl font-bold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'تفاصيل العميل' : 'Client Details'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Client Information */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <User className="w-5 h-5 text-blue-500" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'الاسم' : 'Name'}
                </p>
                <p className="font-medium">{booking.name}</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Mail className="w-5 h-5 text-green-500" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </p>
                <p className="font-medium">{booking.email}</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Phone className="w-5 h-5 text-purple-500" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                </p>
                <p className="font-medium">{booking.phone}</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <FileText className="w-5 h-5 text-orange-500" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'الخدمة' : 'Service'}
                </p>
                <p className="font-medium">
                  {language === 'ar' ? booking.service?.title?.ar : booking.service?.title?.en}
                </p>
              </div>
            </div>

            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Calendar className="w-5 h-5 text-red-500" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}
                </p>
                <p className="font-medium">{booking.date}</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Clock className="w-5 h-5 text-indigo-500" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'الوقت المفضل' : 'Preferred Time'}
                </p>
                <p className="font-medium">{booking.time}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                {language === 'ar' ? 'وقت الحجز' : 'Booking Time'}
              </p>
              <p className="font-medium">
                {new Date(booking.timestamp || Date.now()).toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US')}
              </p>
            </div>

            {booking.country && (
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'البلد' : 'Country'}
                </p>
                <p className="font-medium">{booking.country}</p>
              </div>
            )}

            {booking.city && (
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'المدينة' : 'City'}
                </p>
                <p className="font-medium">{booking.city}</p>
              </div>
            )}
          </div>

          {/* Description */}
          {booking.description && (
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2 ${
                language === 'ar' ? 'text-right' : 'text-left'
              }`}>
                {language === 'ar' ? 'وصف الاستشارة' : 'Consultation Description'}
              </p>
              <p className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} ${
                language === 'ar' ? 'text-right' : 'text-left'
              }`}>
                {booking.description}
              </p>
            </div>
          )}

          {/* Files */}
          {booking.files && booking.files.length > 0 && (
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3 ${
                language === 'ar' ? 'text-right' : 'text-left'
              }`}>
                {language === 'ar' ? 'الملفات المرفقة' : 'Attached Files'}
              </p>
              <div className="space-y-2">
                {booking.files.map((file: File, index: number) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    } ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                  >
                    <span className="font-medium">{file.name}</span>
                    <Button
                      size="sm"
                      onClick={() => handleDownloadFile(file)}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className={`flex gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <label className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <input
                type="checkbox"
                checked={booking.contacted || false}
                onChange={() => onMarkDone(booking.id || `${booking.name}_${booking.timestamp}`)}
                className="w-5 h-5 text-green-500"
              />
              <span className="font-medium text-green-600">
                {language === 'ar' ? 'تم الانتهاء' : 'Done'}
              </span>
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;

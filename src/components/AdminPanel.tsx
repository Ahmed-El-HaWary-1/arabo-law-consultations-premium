
import React, { useState } from 'react';
import { Users, FileText, Phone, Calendar, Download, Search, Filter, LogOut, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ContactModal from './ContactModal';

interface AdminPanelProps {
  bookings: any[];
  language: string;
  isDark: boolean;
  onLogout: () => void;
  onBack?: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ bookings, language, isDark, onLogout, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // Add contacted status to bookings if not present
  const bookingsWithStatus = bookings.map((booking, index) => ({
    ...booking,
    id: booking.id || `${booking.name}_${booking.timestamp || index}`,
    contacted: booking.contacted || false
  }));

  const handleMarkDone = (bookingId: string) => {
    // Update booking status - in a real app, this would update the backend
    const updatedBookings = bookingsWithStatus.map(booking =>
      booking.id === bookingId ? { ...booking, contacted: !booking.contacted } : booking
    );
    setShowContactModal(false);
  };

  const filteredBookings = bookingsWithStatus.filter(booking => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.phone.includes(searchTerm) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = filterService === 'all' || booking.service?.title?.en?.includes(filterService);
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'contacted' && booking.contacted) ||
                         (filterStatus === 'pending' && !booking.contacted);
    return matchesSearch && matchesService && matchesStatus;
  });

  const stats = {
    totalBookings: bookingsWithStatus.length,
    todayBookings: bookingsWithStatus.filter(b => new Date(b.timestamp || Date.now()).toDateString() === new Date().toDateString()).length,
    pendingBookings: bookingsWithStatus.filter(b => !b.contacted).length,
    completedBookings: bookingsWithStatus.filter(b => b.contacted).length,
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`border-b ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} shadow-sm`}>
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {onBack && (
                <Button
                  onClick={onBack}
                  variant="ghost"
                  size="sm"
                  className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              )}
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {language === 'ar' ? 'لوحة تحكم الإدارة' : 'Admin Dashboard'}
                </h1>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'ar' ? 'إدارة الحجوزات والعملاء' : 'Manage bookings and clients'}
                </p>
              </div>
            </div>
            
            <Button
              onClick={onLogout}
              variant="outline"
              className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''} ${
                isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''
              }`}
            >
              <LogOut className="w-4 h-4" />
              {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: language === 'ar' ? 'إجمالي الحجوزات' : 'Total Bookings',
              value: stats.totalBookings,
              icon: FileText,
              color: 'from-blue-500 to-purple-500'
            },
            {
              title: language === 'ar' ? 'حجوزات اليوم' : "Today's Bookings",
              value: stats.todayBookings,
              icon: Calendar,
              color: 'from-green-500 to-blue-500'
            },
            {
              title: language === 'ar' ? 'في الانتظار' : 'Pending',
              value: stats.pendingBookings,
              icon: Phone,
              color: 'from-yellow-500 to-orange-500'
            },
            {
              title: language === 'ar' ? 'مكتملة' : 'Completed',
              value: stats.completedBookings,
              icon: Users,
              color: 'from-purple-500 to-pink-500'
            }
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg animate-fade-in ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                  : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.title}
                  </p>
                  <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className={`flex flex-col md:flex-row gap-4 mb-6 ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <div className="relative flex-1">
            <Search className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            } ${language === 'ar' ? 'right-3' : 'left-3'}`} />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={language === 'ar' ? 'البحث في الحجوزات...' : 'Search bookings...'}
              className={`${language === 'ar' ? 'pr-10 text-right' : 'pl-10'} ${
                isDark ? 'bg-gray-800 border-gray-700 text-white' : ''
              }`}
            />
          </div>
          
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className={`px-4 py-2 rounded-md border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-300'
            } ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <option value="all">{language === 'ar' ? 'جميع الخدمات' : 'All Services'}</option>
            <option value="Family">Family Law</option>
            <option value="Corporate">Corporate Law</option>
            <option value="Tax">Tax Accounting</option>
            <option value="Legal">Legal Documentation</option>
            <option value="Financial">Financial Consulting</option>
            <option value="HR">HR Legal</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={`px-4 py-2 rounded-md border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-300'
            } ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <option value="all">{language === 'ar' ? 'جميع الحالات' : 'All Status'}</option>
            <option value="pending">{language === 'ar' ? 'لم يتم الاتصال' : 'Not Contacted'}</option>
            <option value="contacted">{language === 'ar' ? 'تم الاتصال' : 'Contacted'}</option>
          </select>
        </div>

        {/* Bookings Table */}
        <div className={`rounded-xl shadow-lg overflow-hidden ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-6 py-4 text-left text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'العميل' : 'Client'}
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'الخدمة' : 'Service'}
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'التاريخ' : 'Date'}
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'وقت الحجز' : 'Booking Time'}
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  } ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'الإجراءات' : 'Actions'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking, index) => (
                  <tr 
                    key={index} 
                    className={`hover:${isDark ? 'bg-gray-700' : 'bg-gray-50'} transition-colors ${
                      !booking.contacted ? 'shadow-lg bg-yellow-50 dark:bg-yellow-900/20' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {booking.name}
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {booking.email}
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {booking.phone}
                        </div>
                        {booking.country && (
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            {booking.country} {booking.city && `, ${booking.city}`}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {language === 'ar' ? booking.service?.title?.ar : booking.service?.title?.en}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} ${
                      language === 'ar' ? 'text-right' : 'text-left'
                    }`}>
                      {booking.date} {booking.time}
                    </td>
                    <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} ${
                      language === 'ar' ? 'text-right' : 'text-left'
                    }`}>
                      {new Date(booking.timestamp || Date.now()).toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US')}
                    </td>
                    <td className="px-6 py-4">
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setShowContactModal(true);
                        }}
                        className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                      >
                        {language === 'ar' ? 'اتصال' : 'Contact'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ContactModal
        booking={selectedBooking}
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        onMarkDone={handleMarkDone}
        language={language}
        isDark={isDark}
      />
    </div>
  );
};

export default AdminPanel;

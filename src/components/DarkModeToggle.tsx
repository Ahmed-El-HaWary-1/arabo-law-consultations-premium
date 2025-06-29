
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative w-14 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon className="w-2.5 h-2.5 text-purple-600" />
        ) : (
          <Sun className="w-2.5 h-2.5 text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;

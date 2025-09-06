import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, DownloadIcon } from './Icons';

interface HeaderProps {
  onDownloadPDF: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadPDF }) => {
  const { isDark, toggleTheme } = useTheme();



  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Mahmoud Ramadan
            </h1>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onDownloadPDF}
              className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
              aria-label="Download CV as PDF"
            >
              <DownloadIcon />
              <span className="ml-2 hidden sm:inline">Download PDF</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
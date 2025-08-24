import React, { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, Info, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: BookOpen, label: 'Courses', href: '#courses' },
    { icon: Info, label: 'About', href: '#about' },
    { icon: Mail, label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top-left Navigation Menu */}
      <nav className="fixed top-6 left-6 z-40">
        <div className="flex items-center space-x-2">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300 group"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden h-10 w-10 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 bg-zinc-900/95 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[200px]">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
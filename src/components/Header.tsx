import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { VfsLogo } from './VfsLogo';

interface HeaderProps {
  onOpenApply: (courseId?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApply, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: '#home', id: 'home' },
    { name: t.navAbout, href: '#about', id: 'about' },
    { name: t.navCourses, href: '#courses', id: 'courses' },
    { name: t.navSchedule, href: '#schedule', id: 'schedule' },
    { name: t.navAdmission, href: '#admission', id: 'admission' },
    { name: t.navGallery, href: '#gallery', id: 'gallery' },
    { name: t.navLeadership, href: '#leadership', id: 'leadership' },
    { name: t.navNotices, href: '#notices', id: 'notices' },
    { name: t.navContact, href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-white animate-pulse">
              {t.admissionsOpenBadge}
            </span>
            <span className="text-blue-100 font-medium truncate">
              {t.topBarNotice}
            </span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-blue-200">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.deskHours}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.jasidihLocation}</span>
            </div>
            {/* Topbar Quick Language Switcher */}
            <div className="flex sm:hidden">
              <LanguageSwitcher variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' 
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo & Academy Branding */}
            <a href="#home" className="flex items-center group">
              <VfsLogo variant="light" size="md" showSubtitle={true} />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-2.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-700 bg-blue-50/80 font-semibold'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Language Switcher & CTA Button */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3">
              {/* Language Switcher Button Group */}
              <LanguageSwitcher variant="header" />

              <button
                id="header-apply-btn"
                onClick={() => onOpenApply()}
                className="relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-emerald-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t.applyNowBtn}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Mobile Menu Toggle & Mobile Language Switcher */}
            <div className="flex items-center gap-2 sm:hidden">
              <LanguageSwitcher variant="topbar" />
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-2 pb-6 space-y-3 mt-2 animate-fadeIn">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher variant="mobile" />

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-nav-apply-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <span>{t.applyNowBtn}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-slate-500 pt-1">
                STPI Deoghar Centre Desk: 10:00 AM – 01:00 PM
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

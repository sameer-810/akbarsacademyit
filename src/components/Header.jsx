import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { LogoWithText } from './AkbarsLogo';
import { instituteData } from '../coursesData';

export const Header = ({ onEnrollClick, onCourseClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'AI Mastery', href: '#ai-mastery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center hover:opacity-80 transition">
            <LogoWithText size="sm" />
            <span className="ml-3 hidden sm:block text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              25 Years Excellence
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Phone CTA - Desktop */}
            <a
              href={`tel:${instituteData.phone}`}
              className="hidden sm:flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition font-semibold text-sm"
            >
              <Phone size={18} />
              <span>{instituteData.phone}</span>
            </a>

            {/* Enroll Button */}
            <button
              onClick={onEnrollClick}
              className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold text-sm"
            >
              Enroll Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-amber-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <nav className="flex flex-col gap-3 py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 font-medium px-4 py-2 rounded hover:bg-amber-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${instituteData.phone}`}
                className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition font-semibold text-sm"
              >
                <Phone size={18} />
                <span>{instituteData.phone}</span>
              </a>
              <button
                onClick={() => {
                  onEnrollClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold text-sm"
              >
                Enroll Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

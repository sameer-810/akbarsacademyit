import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { LogoWithText } from './AkbarsLogo';
import { instituteData } from '../coursesData';

export const Header = ({ onEnrollClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Bootcamp', href: '#bootcamp' },
    { label: 'Students', href: '#why-us' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4.5rem]">
          <a href="#" className="flex items-center">
            <LogoWithText size="sm" />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-brand underline-offset-8 hover:underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${instituteData.phone}`}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand transition-colors"
            >
              <Phone size={16} />
              <span>{instituteData.phone}</span>
            </a>
            <button
              onClick={onEnrollClick}
              className="hidden sm:block bg-brand hover:bg-brand-600 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors"
            >
              Enquire now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-ink p-1"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-rule">
            <nav className="flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-ink font-medium px-2 py-3 border-b border-rule last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${instituteData.phone}`}
                className="flex items-center gap-2 px-2 py-3 font-semibold text-ink"
              >
                <Phone size={16} />
                <span>{instituteData.phone}</span>
              </a>
              <button
                onClick={() => {
                  onEnrollClick();
                  setIsMenuOpen(false);
                }}
                className="mt-2 w-full bg-brand hover:bg-brand-600 text-white px-5 py-3 rounded-md font-semibold text-sm transition-colors"
              >
                Enquire now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { instituteData, courses, bootcamp } from '../coursesData';

export const Footer = ({ onEnrollClick }) => {
  const mapEmbedUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || instituteData.mapEmbedUrl;

  return (
    <footer id="contact" className="bg-ink text-white scroll-mt-20">
      {/* Admissions banner */}
      <div className="bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xl font-bold">Admissions are open for the current batch</p>
            <p className="text-white/80 text-sm">Seats are limited. Enquire now and a counsellor will confirm timings with you.</p>
          </div>
          <button
            onClick={onEnrollClick}
            className="bg-paper hover:bg-paper-2 text-ink font-semibold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
          >
            Enquire now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Institute */}
          <div>
            <h3 className="text-xl font-bold mb-5">Akbar's Academy</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">{instituteData.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href={`tel:${instituteData.phone}`} className="text-sm hover:text-white hover:underline underline-offset-4">
                  {instituteData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@akbarsacademy.com" className="text-sm hover:text-white hover:underline underline-offset-4">
                  info@akbarsacademy.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-5">Site</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Courses and fees', href: '#courses' },
                { label: 'Bootcamp', href: '#bootcamp' },
                { label: 'What students say', href: '#why-us' },
                { label: 'Contact', href: '#contact' }
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-5">Courses</h4>
            <ul className="space-y-3">
              {[...courses.map(c => c.title), bootcamp.title].map(course => (
                <li key={course}>
                  <a href="#courses" className="text-sm text-white/70 hover:text-white hover:underline underline-offset-4">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours and social */}
          <div>
            <h4 className="font-semibold mb-5">Office hours</h4>
            <dl className="text-sm text-white/70 space-y-1 mb-8">
              <div className="flex justify-between gap-4"><dt>Monday to Friday</dt><dd>9:00 am to 6:00 pm</dd></div>
              <div className="flex justify-between gap-4"><dt>Saturday</dt><dd>9:00 am to 4:00 pm</dd></div>
              <div className="flex justify-between gap-4"><dt>Sunday</dt><dd>Closed</dd></div>
            </dl>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' }
              ].map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="border border-white/20 hover:border-white text-white p-2.5 rounded-md transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Map and contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-white/15 pt-12">
          <div>
            <h4 className="font-semibold mb-4">Find the campus</h4>
            <div className="rounded-lg overflow-hidden h-80 border border-white/15">
              <iframe
                src={mapEmbedUrl}
                title="Akbar's Academy location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Talk to the admission team</h4>
            <div className="border border-white/15 rounded-lg p-6 space-y-3">
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Ask about batch timings, fees, instalments or which course suits you. There is no charge for counselling.
              </p>
              <button
                onClick={onEnrollClick}
                className="w-full bg-brand hover:bg-brand-600 text-white font-semibold py-3 rounded-md transition-colors"
              >
                Send an enquiry
              </button>
              <a
                href={`https://wa.me/${instituteData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-white/40 hover:border-white text-white font-semibold py-3 rounded-md text-center transition-colors"
              >
                Message on WhatsApp
              </a>
              <a
                href={`tel:${instituteData.phone}`}
                className="block w-full text-center text-sm text-white/80 hover:text-white py-2 underline underline-offset-4"
              >
                Call {instituteData.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Akbar's Academy IT Institute. Designed and developed by{' '}
            <a href="https://portfolio.fiveminfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4">
              FIVEM INFOTECH
            </a>
          </p>
          <div className="flex gap-6">
            <a href="#/privacy-policy" className="hover:text-white underline underline-offset-4">Privacy Policy</a>
            <a href="#/terms-and-conditions" className="hover:text-white underline underline-offset-4">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

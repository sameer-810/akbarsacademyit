import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { instituteData } from '../coursesData';

export const Footer = ({ onEnrollClick }) => {
  const mapEmbedUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || instituteData.mapEmbedUrl;

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Admission Status Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-bold">🎓 ADMISSION OPEN</p>
            <p className="text-amber-50 text-sm">Limited seats available for current batch</p>
          </div>
          <button
            onClick={onEnrollClick}
            className="bg-white hover:bg-gray-100 text-amber-600 font-bold px-8 py-3 rounded-lg transition transform hover:scale-105 whitespace-nowrap"
          >
            ENROLL TODAY!
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Institute Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Akbar's Academy</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Mumbai, India</p>
                  <p className="text-gray-400 text-sm">{instituteData.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <a href={`tel:${instituteData.phone}`} className="hover:text-amber-400 transition">
                  {instituteData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@akbarsacademy.com" className="hover:text-amber-400 transition">
                  support@akbarsacademy.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Courses', href: '#courses' },
                { label: 'AI Mastery', href: '#ai-mastery' },
                { label: 'Contact Us', href: '#contact' }
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {[
                'Full Stack Developer',
                'Cloud Computing',
                'MSCIT',
                'IT Infra Pro',
                'Digital Business Growth',
                'AI Mastery'
              ].map(course => (
                <li key={course}>
                  <a href="#courses" className="text-gray-400 hover:text-amber-400 transition text-sm">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
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
                    className="bg-gray-800 hover:bg-amber-600 text-white p-3 rounded-lg transition transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="font-semibold mb-2">Working Hours</p>
              <p className="text-sm text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-400">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-sm text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 border-t border-gray-800 pt-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Find Us</h4>
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
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

          {/* Contact Form Quick */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">
                Have questions? Get in touch with our admission team for personalized guidance.
              </p>
              <button
                onClick={onEnrollClick}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition"
              >
                Contact via Form
              </button>
              <a
                href={`tel:${instituteData.phone}`}
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg text-center transition"
              >
                Call Directly
              </a>
              <a
                href={`https://wa.me/${instituteData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-center transition"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400 text-center sm:text-left">
            <p>&copy; 2024 Akbar's Academy IT Institute. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-amber-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Terms of Service
              </a>
            </div>
            <p className="text-xs">
              Made with ❤️ for aspiring tech professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

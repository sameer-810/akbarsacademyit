import { ArrowRight, ExternalLink } from 'lucide-react';
import { productShowcase, bootcamp } from '../coursesData';

const trustStats = [
  { value: '25', label: 'years teaching in Mumbai' },
  { value: '500+', label: 'students placed and working' },
  { value: '7', label: 'career products, one campus' }
];

export const Hero = ({ onEnrollClick }) => (
  <section id="home" className="bg-ink text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: headline and CTAs */}
        <div className="lg:col-span-7">
          <p className="text-white/70 text-base md:text-lg mb-6">
            Akbar's Academy IT Institute, Cheeta Camp, Mumbai. Teaching since 1999.
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight max-w-[14ch]">
            Job-ready IT courses, taught the practical way.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-white/80 max-w-prose leading-relaxed">
            Six career programmes in development, cloud, marketing, security and IT support.
            Each one ends with a real project, a certificate, and help finding your first role.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-600 text-white px-7 py-4 rounded-md font-semibold text-base transition-colors"
            >
              Explore 6 Professional Courses
              <ArrowRight size={18} />
            </a>
            <a
              href={productShowcase.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white hover:bg-white/5 text-white px-7 py-4 rounded-md font-semibold text-base transition-colors"
            >
              {productShowcase.label}
              <ExternalLink size={18} />
            </a>
          </div>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-prose">{productShowcase.blurb}</p>

          <dl className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-6">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl md:text-4xl font-bold">{stat.value}</dt>
                <dd className="mt-1 text-sm text-white/60 leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: bootcamp admission notice */}
        <div id="bootcamp" className="lg:col-span-5 scroll-mt-24">
          <div className="bg-paper text-ink rounded-lg p-7 md:p-8 border-t-8 border-signal">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-semibold text-gray-600 whitespace-nowrap">Online bootcamp, 10 days</p>
              <p className="text-right">
                <span className="block text-4xl font-bold text-signal leading-none">{bootcamp.price}</span>
                <span className="block text-xs text-gray-500 mt-1">{bootcamp.priceNote}</span>
              </p>
            </div>

            <h2 className="mt-5 text-2xl md:text-[1.75rem] font-bold leading-tight">{bootcamp.title}</h2>
            <p className="mt-2 text-gray-600">{bootcamp.tagline}</p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {bootcamp.highlights.map((item) => (
                <li key={item} className="border-l-2 border-brand pl-3 leading-snug">
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={bootcamp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-600 text-white font-semibold py-3.5 rounded-md transition-colors"
            >
              Join the bootcamp for {bootcamp.price}
              <ExternalLink size={18} />
            </a>
            <button
              onClick={() => onEnrollClick(bootcamp.title)}
              className="mt-4 w-full text-sm font-semibold text-ink underline underline-offset-4 hover:text-brand transition-colors"
            >
              Ask a question on WhatsApp first
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

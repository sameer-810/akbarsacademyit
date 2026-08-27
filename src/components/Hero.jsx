import { ArrowRight, Award, BookOpen, TrendingUp } from 'lucide-react';
import { instituteData } from '../coursesData';

export const Hero = ({ onEnrollClick, onAIMasteryClick }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-amber-600 bg-opacity-20 border border-amber-500 rounded-full px-4 py-2">
              <span className="text-amber-300 text-sm font-semibold">🎓 Celebrating 25 Years of Excellence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Career with <span className="text-amber-400">Expert Training</span> at Akbar's Academy
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-blue-100 font-semibold">
              {instituteData.tagline} — {instituteData.subtitle}
            </p>

            {/* Value Props Bar */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-blue-700">
              {[
                { icon: Award, label: 'Quality Training' },
                { icon: BookOpen, label: 'Practical Knowledge' },
                { icon: TrendingUp, label: 'Better Career' }
              ].map((prop, idx) => {
                const Icon = prop.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <Icon size={24} className="text-amber-400 mb-2" />
                    <span className="text-xs sm:text-sm font-semibold text-blue-100">{prop.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onEnrollClick}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
              >
                Explore 5 Professional Courses
                <ArrowRight size={20} />
              </button>
              <button
                onClick={onAIMasteryClick}
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
              >
                View AI Mastery Program
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 space-y-2 text-sm text-blue-100">
              <p>✓ 500+ Successful Alumni</p>
              <p>✓ Industry Expert Instructors</p>
              <p>✓ Job Placement Assistance</p>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-96 md:h-full min-h-96 hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated gradient circle */}
              <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Card stack illustration */}
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-64 h-40 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-20 shadow-2xl"
                    style={{
                      transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                      zIndex: 3 - i
                    }}
                  >
                    <div className="h-full flex items-center justify-center text-white text-center px-6">
                      <div>
                        <div className="text-3xl font-bold mb-2">
                          {['Web Dev', 'Cloud', 'AI Tools'][i]}
                        </div>
                        <div className="text-sm opacity-75">Professional Course</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <div className="animate-bounce text-amber-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

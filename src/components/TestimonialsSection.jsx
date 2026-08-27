import { Star } from 'lucide-react';
import { testimonials } from '../coursesData';

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories from Our Alumni
          </h2>
          <p className="text-lg text-gray-300">
            Hear directly from students who have transformed their careers with Akbar's Academy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition shadow-lg hover:shadow-2xl"
            >
              {/* Rating */}
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-amber-400">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
          {[
            { number: '500+', label: 'Happy Students' },
            { number: '25+', label: 'Years Experience' },
            { number: '95%', label: 'Success Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Star } from 'lucide-react';
import { testimonials } from '../coursesData';

const stats = [
  { number: '500+', label: 'students trained' },
  { number: '25', label: 'years of teaching' },
  { number: '95%', label: 'course completion' }
];

export const TestimonialsSection = () => (
  <section id="why-us" className="bg-paper-2 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-prose mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">What students say</h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Most of our students come from the neighbourhood, and most of them find work within a few months of finishing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="bg-paper border border-rule rounded-lg p-7 flex flex-col">
            <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-ink text-ink" />
              ))}
            </div>
            <blockquote className="text-xl font-medium leading-snug flex-1">
              “{testimonial.text}”
            </blockquote>
            <figcaption className="mt-6 pt-4 border-t border-rule">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.course}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-10 border-t border-rule">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-5xl font-bold">{stat.number}</dt>
            <dd className="mt-1 text-gray-600">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

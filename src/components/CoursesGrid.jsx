import { ArrowRight, ExternalLink } from 'lucide-react';
import { courses, bootcamp } from '../coursesData';
import { SyllabusButton } from './SyllabusModal';

const featuredCourses = courses.filter((c) => c.featured);
const otherCourses = courses.filter((c) => !c.featured);

const skillsLine = (course) => course.skills.map((s) => s.name).join(', ');

const EnquireButton = ({ course, onEnrollClick, className = '' }) => (
  <button
    onClick={() => onEnrollClick(course.title)}
    className={`inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold py-2.5 px-4 rounded-md transition-colors ${className}`}
  >
    Enquire
    <ArrowRight size={16} />
  </button>
);

// Hit products: a fee-chart row, because fee, level and modules are what students compare.
const FeaturedCourseCard = ({ course, onEnrollClick, onSyllabusClick }) => (
  <article className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-8">
    <div className="md:col-span-6">
      <p className="text-sm font-semibold text-brand mb-2">Popular choice</p>
      <h3 className="text-2xl md:text-3xl font-bold leading-tight">{course.title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed max-w-prose">{course.description}</p>
      <p className="mt-3 text-sm text-gray-500">Covers {skillsLine(course)}.</p>
    </div>
    <div className="md:col-span-3">
      <p className="text-2xl font-bold">{course.fee}</p>
      <p className="mt-1 text-sm text-gray-600">{course.badge}</p>
      <p className="text-sm text-gray-600">{course.difficulty} level, {course.syllabus.length} modules</p>
    </div>
    <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-3">
      <SyllabusButton onClick={() => onSyllabusClick(course)} className="flex-1" />
      <EnquireButton course={course} onEnrollClick={onEnrollClick} className="flex-1" />
    </div>
  </article>
);

const CourseCard = ({ course, onEnrollClick, onSyllabusClick }) => (
  <article className="border border-rule rounded-lg p-6 flex flex-col gap-4 bg-paper">
    <div>
      <h3 className="text-xl font-bold leading-tight">{course.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{course.badge}</p>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
    <p className="text-sm text-gray-500">Covers {skillsLine(course)}.</p>
    <div className="mt-auto pt-4 border-t border-rule">
      <p className="text-xl font-bold">{course.fee}</p>
      <p className="text-sm text-gray-600 mb-4">{course.difficulty} level, {course.syllabus.length} modules</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <SyllabusButton onClick={() => onSyllabusClick(course)} className="flex-1" />
        <EnquireButton course={course} onEnrollClick={onEnrollClick} className="flex-1" />
      </div>
    </div>
  </article>
);

const BootcampCard = () => (
  <article className="bg-paper-2 border border-rule rounded-lg p-6 flex flex-col gap-4">
    <div>
      <h3 className="text-xl font-bold leading-tight">{bootcamp.title}</h3>
      <p className="mt-1 text-sm text-gray-500">Online bootcamp, 10 days</p>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{bootcamp.tagline}</p>
    <ul className="text-sm text-gray-600 space-y-2">
      {bootcamp.highlights.map((item) => (
        <li key={item} className="border-l-2 border-brand pl-3 leading-snug">{item}</li>
      ))}
    </ul>
    <div className="mt-auto pt-4 border-t border-rule">
      <p className="text-xl font-bold text-signal">{bootcamp.price}</p>
      <p className="text-sm text-gray-600 mb-4">{bootcamp.priceNote}</p>
      <a
        href={bootcamp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-600 text-white font-semibold py-2.5 px-4 rounded-md transition-colors"
      >
        Join the bootcamp
        <ExternalLink size={16} />
      </a>
    </div>
  </article>
);

export const CoursesGrid = ({ onEnrollClick, onSyllabusClick }) => (
  <section id="courses" className="bg-paper scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-prose mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Courses and fees</h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Seven products across five production domains. Every course comes with a syllabus you can download before you decide.
        </p>
      </div>

      {/* Hit products as a fee chart */}
      <h3 className="text-sm font-semibold text-gray-500 pb-3 border-b-2 border-ink">Most popular</h3>
      <div className="divide-y divide-rule mb-16">
        {featuredCourses.map((course) => (
          <FeaturedCourseCard key={course.id} course={course} onEnrollClick={onEnrollClick} onSyllabusClick={onSyllabusClick} />
        ))}
      </div>

      {/* Remaining products */}
      <h3 className="text-sm font-semibold text-gray-500 pb-3 border-b-2 border-ink mb-6">More programmes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherCourses.map((course) => (
          <CourseCard key={course.id} course={course} onEnrollClick={onEnrollClick} onSyllabusClick={onSyllabusClick} />
        ))}
        <BootcampCard />
      </div>

      <div className="mt-14 pt-8 border-t border-rule flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="text-gray-600 text-lg">Not sure which course fits you? Talk to a counsellor first.</p>
        <button
          onClick={() => onEnrollClick()}
          className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-600 underline underline-offset-4"
        >
          Get free career guidance
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </section>
);

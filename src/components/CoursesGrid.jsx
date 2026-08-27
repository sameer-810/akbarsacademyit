import { ArrowRight, Clock, BarChart3 } from 'lucide-react';
import { courses } from '../coursesData';

export const CoursesGrid = ({ onEnrollClick }) => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Training Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our industry-leading courses designed to accelerate your career. Each course is crafted by experts with real-world experience.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105 duration-300 overflow-hidden border border-gray-200 hover:border-amber-400 flex flex-col h-full"
            >
              {/* Course Index Badge */}
              <div className={`bg-gradient-to-r ${course.color} text-white px-6 py-4 flex items-center justify-between`}>
                <div>
                  <div className="text-3xl font-bold">{course.index}</div>
                  <div className="text-xs opacity-90">{course.badge}</div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-amber-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 size={16} className="text-blue-600" />
                    <span>{course.difficulty}</span>
                  </div>
                </div>

                {/* Skills/Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-100 hover:text-amber-700 transition"
                      >
                        {skill.name}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        +{course.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onEnrollClick(course.title)}
                  className={`mt-auto bg-gradient-to-r ${course.color} hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105`}
                >
                  Inquire Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 text-lg">
            Not sure which course is right for you?
          </p>
          <button
            onClick={() => onEnrollClick()}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Get Free Career Guidance
          </button>
        </div>
      </div>
    </section>
  );
};

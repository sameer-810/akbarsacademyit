import { useState } from 'react';
import { X, MessageCircle, Loader } from 'lucide-react';
import { courses, instituteData, aiMasteryCourse } from '../coursesData';

export const AdmissionModal = ({ isOpen, onClose, selectedCourse = null }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: selectedCourse || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const allCourses = [
    { value: 'ai-mastery', label: aiMasteryCourse.title },
    ...courses.map(c => ({ value: c.title, label: c.title }))
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enrollment = {
      ...formData,
      submittedAt: new Date().toISOString()
    };
    const webAppUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

    try {
      // A deployed Google Apps Script web app appends this data to the private Sheet.
      // no-cors is required because Apps Script web apps do not return CORS headers.
      if (webAppUrl) {
        await fetch(webAppUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: new URLSearchParams(enrollment).toString()
        });
      } else {
        console.warn('Google Apps Script URL is not configured. Enrollment was not saved to Google Sheets.');
      }

      setSubmitSuccess(true);
      const message = [
        "Hi, I'd like to enroll at Akbar's Academy.",
        `Name: ${enrollment.fullName}`,
        `Phone: ${enrollment.phone}`,
        enrollment.email && `Email: ${enrollment.email}`,
        `Course: ${enrollment.course}`,
        enrollment.message && `Message: ${enrollment.message}`
      ].filter(Boolean).join('\n');

      // Keep the visitor in the same tab so the WhatsApp handoff is not blocked.
      window.location.assign(
        `https://wa.me/${instituteData.whatsapp}?text=${encodeURIComponent(message)}`
      );
    } catch (error) {
      console.error('Unable to submit enrollment:', error);
      setIsSubmitting(false);
      alert('We could not send your enrollment. Please try again or contact us on WhatsApp.');
    }
  };

  const handleWhatsapp = () => {
    const message = `Hi, I'm interested in ${formData.course || 'your courses'} at Akbar's Academy. Name: ${formData.fullName || 'Interested student'}, Phone: ${formData.phone || 'Will provide'}`;
    window.open(
      `https://wa.me/${instituteData.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Enroll Now</h2>
            <p className="text-blue-100 text-sm mt-1">Start your learning journey today</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 text-lg mb-6">
                Thank you for your interest. We'll contact you shortly!
              </p>
              <p className="text-gray-500">
                Redirecting you to WhatsApp for quick response...
              </p>
            </div>
          ) : (
            <>
              {/* Quick WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <MessageCircle size={32} className="text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-2">Get Instant Response</p>
                    <p className="text-sm text-gray-600">Chat with our admission counselor on WhatsApp for instant guidance</p>
                  </div>
                  <button
                    onClick={handleWhatsapp}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-bold whitespace-nowrap transition transform hover:scale-105"
                  >
                    Chat Now
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Interested Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">-- Select a course --</option>
                    {allCourses.map(course => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific questions or requirements?"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                {/* Trust signals */}
                <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-600">
                  <p className="font-semibold text-gray-900 mb-2">Why Choose Us?</p>
                  <ul className="space-y-1">
                    <li>✓ 25 Years of Teaching Excellence</li>
                    <li>✓ Industry Expert Instructors</li>
                    <li>✓ 100% Job Placement Support</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Submit Enrollment'
                  )}
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our terms and privacy policy
                </p>
              </form>

              {/* Direct Call CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  Prefer to talk directly? Call us now!
                </p>
                <a
                  href={`tel:${instituteData.phone}`}
                  className="block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
                >
                  📞 Call: {instituteData.phone}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

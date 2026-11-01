import { useState } from 'react';
import { X, MessageCircle, Loader, CheckCircle2, Phone } from 'lucide-react';
import { courses, instituteData, bootcamp } from '../coursesData';

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
    ...courses.map(c => ({ value: c.title, label: c.title })),
    { value: bootcamp.title, label: bootcamp.title }
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
    <div className="fixed inset-0 bg-ink/70 z-50 flex items-center justify-center p-4">
      <div className="bg-paper rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-ink text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Enquire about a course</h2>
            <p className="text-white/70 text-sm mt-1">A counsellor replies on WhatsApp, usually the same day</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/10 p-2 rounded-md transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {submitSuccess ? (
            <div className="text-center py-12">
              <CheckCircle2 size={56} className="text-brand mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-ink mb-2">Enquiry sent</h3>
              <p className="text-gray-600 text-lg mb-6">
                Thank you. A counsellor will contact you shortly.
              </p>
              <p className="text-gray-500">
                Opening WhatsApp so you can continue the conversation there.
              </p>
            </div>
          ) : (
            <>
              {/* Quick WhatsApp CTA */}
              <div className="bg-paper-2 border border-rule rounded-lg p-5 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <MessageCircle size={28} className="text-brand flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-ink mb-1">In a hurry?</p>
                    <p className="text-sm text-gray-600">Message the admission counsellor on WhatsApp instead of filling the form.</p>
                  </div>
                  <button
                    onClick={handleWhatsapp}
                    className="border border-ink text-ink hover:bg-ink hover:text-white px-5 py-2.5 rounded-md font-semibold whitespace-nowrap transition-colors"
                  >
                    Open WhatsApp
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-rule rounded-md bg-paper focus:border-brand focus:ring-0 outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your 10-digit mobile number"
                    required
                    className="w-full px-4 py-3 border border-rule rounded-md bg-paper focus:border-brand focus:ring-0 outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-rule rounded-md bg-paper focus:border-brand focus:ring-0 outline-none transition-colors"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">
                    Interested Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-rule rounded-md bg-paper focus:border-brand focus:ring-0 outline-none transition-colors"
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
                  <label className="block text-sm font-medium text-ink mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific questions or requirements?"
                    rows="4"
                    className="w-full px-4 py-3 border border-rule rounded-md bg-paper focus:border-brand focus:ring-0 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Trust signals */}
                <p className="text-sm text-gray-600 border-l-2 border-brand pl-3">
                  We have taught in Cheeta Camp for 25 years. Enquiring is free, and there is no obligation to enrol.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand hover:bg-brand-600 text-white font-semibold py-3.5 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Sending
                    </>
                  ) : (
                    'Send enquiry'
                  )}
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{' '}
                  <a href="#/terms-and-conditions" onClick={onClose} className="underline hover:text-brand">Terms &amp; Conditions</a>
                  {' '}and{' '}
                  <a href="#/privacy-policy" onClick={onClose} className="underline hover:text-brand">Privacy Policy</a>
                </p>
              </form>

              {/* Direct Call CTA */}
              <div className="mt-8 pt-6 border-t border-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-gray-600">Prefer to talk? Call the office.</p>
                <a
                  href={`tel:${instituteData.phone}`}
                  className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand transition-colors"
                >
                  <Phone size={16} />
                  {instituteData.phone}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

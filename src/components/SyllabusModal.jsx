import { useEffect } from 'react';
import { X, Download, ArrowRight, BookOpen } from 'lucide-react';

export const SyllabusModal = ({ course, onClose, onEnroll }) => {
  useEffect(() => {
    if (!course) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="syllabus-title"
    >
      <div
        className="bg-paper rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-ink text-white px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/70 mb-1">Syllabus</p>
            <h3 id="syllabus-title" className="text-2xl font-bold leading-tight">{course.title}</h3>
            <p className="text-sm text-white/70 mt-1">
              {course.syllabus.length} modules, course fee {course.fee}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close syllabus"
            className="p-2 rounded-md hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <X size={22} />
          </button>
        </div>

        <ol className="flex-1 overflow-y-auto px-6 divide-y divide-rule">
          {course.syllabus.map((module, i) => (
            <li key={i} className="flex gap-5 py-4">
              <span className="text-sm font-semibold text-gray-400 w-6 flex-shrink-0 pt-0.5 tabular-nums">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{module.title}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{module.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-t border-rule px-6 py-4 flex flex-col sm:flex-row gap-3 bg-paper-2">
          <a
            href={course.brochure}
            download
            className="flex-1 inline-flex items-center justify-center gap-2 border border-ink text-ink hover:bg-ink hover:text-white font-semibold py-3 px-4 rounded-md transition-colors"
          >
            <Download size={18} />
            Download syllabus (PDF)
          </a>
          <button
            onClick={() => {
              onClose();
              onEnroll(course.title);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold py-3 px-4 rounded-md transition-colors"
          >
            Enquire about this course
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const SyllabusButton = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 border border-ink/30 text-ink hover:border-ink font-semibold py-2.5 px-4 rounded-md transition-colors ${className}`}
  >
    <BookOpen size={16} />
    View syllabus
  </button>
);

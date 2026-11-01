import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LegalPage } from './components/LegalPage';
import { legalPages } from './legalContent';
import { Hero } from './components/Hero';
import { CoursesGrid } from './components/CoursesGrid';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AdmissionModal } from './components/AdmissionModal';
import { SyllabusModal } from './components/SyllabusModal';
import { Footer } from './components/Footer';

function App() {
  const [showAdmissionModal, setShowAdmissionModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [syllabusCourse, setSyllabusCourse] = useState(null);
  const [hash, setHash] = useState(window.location.hash);

  // ponytail: hash router ("#/privacy-policy"); swap for react-router if real routes are ever needed
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const legalPage = hash.startsWith('#/') ? legalPages[hash.slice(2)] : null;

  // Section anchors (#courses) clicked from a legal page only exist after the home view renders.
  useEffect(() => {
    if (legalPage || hash.length < 2) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash, legalPage]);

  const handleEnrollClick = (course = null) => {
    setSelectedCourse(course);
    setShowAdmissionModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowAdmissionModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        onEnrollClick={handleEnrollClick}
        onCourseClick={(course) => handleEnrollClick(course)}
      />

      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <>
          {/* Hero Section */}
          <Hero onEnrollClick={handleEnrollClick} />

          {/* Courses Grid */}
          <CoursesGrid onEnrollClick={handleEnrollClick} onSyllabusClick={setSyllabusCourse} />

          {/* Testimonials */}
          <TestimonialsSection />
        </>
      )}

      {/* Footer */}
      <Footer onEnrollClick={handleEnrollClick} />

      {/* Admission Modal */}
      <AdmissionModal
        isOpen={showAdmissionModal}
        onClose={handleCloseModal}
        selectedCourse={selectedCourse}
      />

      {/* Syllabus Modal */}
      <SyllabusModal
        course={syllabusCourse}
        onClose={() => setSyllabusCourse(null)}
        onEnroll={handleEnrollClick}
      />
    </div>
  );
}

export default App;

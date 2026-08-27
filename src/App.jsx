import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AIMasterySection } from './components/AIMasterySection';
import { CoursesGrid } from './components/CoursesGrid';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AdmissionModal } from './components/AdmissionModal';
import { Footer } from './components/Footer';

function App() {
  const [showAdmissionModal, setShowAdmissionModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

      {/* Hero Section */}
      <Hero
        onEnrollClick={handleEnrollClick}
        onAIMasteryClick={() => {
          setSelectedCourse('AI Mastery');
          handleEnrollClick('AI Mastery');
        }}
      />

      {/* AI Mastery Section */}
      <AIMasterySection
        onEnrollClick={() => {
          setSelectedCourse('AI Mastery');
          handleEnrollClick('AI Mastery');
        }}
      />

      {/* Courses Grid */}
      <CoursesGrid onEnrollClick={handleEnrollClick} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer onEnrollClick={handleEnrollClick} />

      {/* Admission Modal */}
      <AdmissionModal
        isOpen={showAdmissionModal}
        onClose={handleCloseModal}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}

export default App;

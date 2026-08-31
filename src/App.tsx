import React, { useState, useEffect } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoursesSection } from './components/CoursesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { AdmissionSection } from './components/AdmissionSection';
import { GallerySection } from './components/GallerySection';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NoticeBoard } from './components/NoticeBoard';
import { ApplySection } from './components/ApplySection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { BottomMarqueeSection } from './components/BottomMarqueeSection';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { ArrowRight, ChevronUp, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from './data/academyData';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState('home');
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  const handleOpenApply = (courseId?: string) => {
    setSelectedCourseForModal(courseId);
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
    setSelectedCourseForModal(undefined);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Floating bar toggle after scrolling past Hero
      setShowFloatingBar(window.scrollY > 500);

      // Section intersection detection for navbar
      const sections = [
        'home',
        'about',
        'why-choose-us',
        'courses',
        'schedule',
        'admission',
        'gallery',
        'leadership',
        'testimonials',
        'notices',
        'apply-now',
        'faqs',
        'contact'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Scroll Progress Bar at Top of Viewport */}
      <ReadingProgressBar />

      {/* Sticky Header */}
      <Header onOpenApply={handleOpenApply} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenApply={handleOpenApply} />

        {/* 2. About Academy & STPI Location Section */}
        <AboutSection />

        {/* 3. Why Choose VFS Global Academy */}
        <WhyChooseUs />

        {/* 4. Certificate Courses Section */}
        <CoursesSection onOpenApply={handleOpenApply} />

        {/* 5. Course Schedule & Timings */}
        <ScheduleSection />

        {/* 6. Admissions Open & Document Verification Checklist */}
        <AdmissionSection onOpenApply={() => handleOpenApply()} />

        {/* 7. Authentic Campus & Activities Photo Gallery */}
        <GallerySection onOpenApply={handleOpenApply} />

        {/* 8. Leadership & Faculty Section */}
        <LeadershipSection onOpenApply={handleOpenApply} />

        {/* 9. Student Testimonials */}
        <TestimonialsSection />

        {/* 10. Dynamic Notice Board */}
        <NoticeBoard />

        {/* 11. Full On-Page Registration Form Portal */}
        <ApplySection />

        {/* 12. Final CTA Banner: LEARN. GROW. ACHIEVE. */}
        <CtaSection onOpenApply={handleOpenApply} />

        {/* 13. Frequently Asked Questions */}
        <FaqSection />

        {/* 14. Contact Academy & STPI Map */}
        <ContactSection />

        {/* 15. Responsive Animated Marquee Section */}
        <BottomMarqueeSection onOpenApply={handleOpenApply} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Registration Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
        preselectedCourseId={selectedCourseForModal}
      />

      {/* Floating Bottom Quick Action Bar on Scroll */}
      {showFloatingBar && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 animate-fadeIn">
          {/* Quick WhatsApp Inquiry */}
          <a
            id="floating-whatsapp-btn"
            href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
              CONTACT_CONFIG.WHATSAPP_MESSAGE_PREFILL
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
            aria-label="Inquire on WhatsApp"
            title="Inquire on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          {/* Quick Apply Button */}
          <button
            id="floating-apply-btn"
            onClick={() => handleOpenApply()}
            className="px-5 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer border-2 border-white/20"
          >
            <span>APPLY NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { SectionKey } from '../types';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';
import { HomeSection } from './sections/HomeSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationSection } from './sections/CertificationSection';
import { ContactSection } from './sections/ContactSection';

export default function ReverseScrollContainer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavSection, setActiveNavSection] = useState<SectionKey>('home');
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Map section milestones to progress targets (0..1)
  const SECTION_TARGETS: Record<SectionKey, number> = {
    home: 0.05,
    experience: 0.65,
    certification: 0.83,
    contact: 0.96,
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Determine active nav key for pill menu
      if (progress < 0.45) {
        setActiveNavSection('home');
      } else if (progress >= 0.45 && progress < 0.76) {
        setActiveNavSection('experience');
      } else if (progress >= 0.76 && progress < 0.90) {
        setActiveNavSection('certification');
      } else {
        setActiveNavSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSelectNavSection = (section: SectionKey) => {
    const targetProgress = SECTION_TARGETS[section];
    const totalScrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetY = targetProgress * totalScrollable;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  // Compute transition values based on scroll progress (0..1)
  // 1. Home -> About transition (0.00 to 0.35)
  // Home Text slides right and fades out:
  const homeTextTranslateX =
    scrollProgress <= 0.12
      ? 0
      : Math.min((scrollProgress - 0.12) * 1200, 350);
  const homeTextOpacity =
    scrollProgress <= 0.12
      ? 1
      : Math.max(1 - (scrollProgress - 0.12) * 6, 0);

  // Image switches from left to right position:
  const imagePosition = scrollProgress > 0.18 ? 'right' : 'left';

  // About Text enters from left:
  const aboutProgress = Math.min(
    Math.max((scrollProgress - 0.14) / 0.18, 0),
    1
  );
  const aboutTranslateX = (1 - aboutProgress) * -200;
  const aboutOpacity = aboutProgress;

  // 2. Education Section (0.35 to 0.55)
  const eduProgress = Math.min(
    Math.max((scrollProgress - 0.32) / 0.22, 0),
    1
  );
  const eduTranslateY = (1 - eduProgress) * -100; // Enters from top
  const eduOpacity = Math.min(eduProgress * 1.5, 1);
  const lineProgress = Math.min(
    Math.max((scrollProgress - 0.35) / 0.18, 0),
    1
  );

  // 3. Experience Section (0.55 to 0.75)
  const expProgress = Math.min(
    Math.max((scrollProgress - 0.54) / 0.20, 0),
    1
  );
  const expTranslateY = (1 - expProgress) * -100; // Enters from top
  const expOpacity = Math.min(expProgress * 1.5, 1);

  // 4. Certification Section (0.75 to 0.88)
  const certProgress = Math.min(
    Math.max((scrollProgress - 0.74) / 0.14, 0),
    1
  );
  const certTranslateY = (1 - certProgress) * -80; // Enters from top
  const certOpacity = Math.min(certProgress * 1.8, 1);

  // 5. Contact Section (0.88 to 1.00)
  const contactProgress = Math.min(
    Math.max((scrollProgress - 0.87) / 0.13, 0),
    1
  );
  const contactTranslateY = (1 - contactProgress) * -80; // Enters from top
  const contactOpacity = Math.min(contactProgress * 2, 1);

  return (
    <div className="relative bg-[#0A111F] text-[#D1D5DB] min-h-screen">
      {/* Tall Scroll Track driving scroll progress */}
      <div ref={scrollTrackRef} className="h-[700vh] w-full pointer-events-none" />

      {/* Fixed Viewport Container where the scroll-driven deck transforms occur */}
      <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none">
        {/* SECTION 1 & 2: Home & About Me Deck Layer */}
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto transition-all duration-500 ${
            scrollProgress > 0.38 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          {scrollProgress < 0.18 ? (
            /* Homepage State */
            <HomeSection
              imagePosition={imagePosition}
              homeTextTranslateX={homeTextTranslateX}
              homeTextOpacity={homeTextOpacity}
            />
          ) : (
            /* About Me State */
            <div className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Column: About Me Text entering from left */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start">
                <AboutSection
                  aboutTranslateX={aboutTranslateX}
                  aboutOpacity={aboutOpacity}
                />
              </div>

              {/* Right Column: Image positioned on right */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                <HomeSection
                  imagePosition="right"
                  homeTextTranslateX={homeTextTranslateX}
                  homeTextOpacity={0}
                />
              </div>
            </div>
          )}
        </div>

        {/* SECTION 3: Education Layer (Enters from top) */}
        {scrollProgress >= 0.32 && scrollProgress < 0.58 && (
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto overflow-y-auto py-16"
            style={{
              transform: `translateY(${eduTranslateY}px)`,
              opacity: eduOpacity,
            }}
          >
            <EducationSection lineProgress={lineProgress} />
          </div>
        )}

        {/* SECTION 4: Experience Layer (Enters from top) */}
        {scrollProgress >= 0.54 && scrollProgress < 0.77 && (
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto overflow-y-auto py-16"
            style={{
              transform: `translateY(${expTranslateY}px)`,
              opacity: expOpacity,
            }}
          >
            <ExperienceSection />
          </div>
        )}

        {/* SECTION 5: Certification Layer (Enters from top) */}
        {scrollProgress >= 0.74 && scrollProgress < 0.89 && (
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto overflow-y-auto py-16"
            style={{
              transform: `translateY(${certTranslateY}px)`,
              opacity: certOpacity,
            }}
          >
            <CertificationSection />
          </div>
        )}

        {/* SECTION 6: Contact Layer (Enters from top) */}
        {scrollProgress >= 0.87 && (
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto overflow-y-auto py-16"
            style={{
              transform: `translateY(${contactTranslateY}px)`,
              opacity: contactOpacity,
            }}
          >
            <ContactSection />
          </div>
        )}
      </div>

      {/* Floating Bottom Navigation Menu */}
      <Navigation
        activeSection={activeNavSection}
        onSelectSection={handleSelectNavSection}
      />

      {/* Bottom Fixed Progress Line */}
      <ProgressBar progress={scrollProgress} />
    </div>
  );
}

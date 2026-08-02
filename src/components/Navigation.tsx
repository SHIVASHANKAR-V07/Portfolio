import { useState, useEffect, useRef } from 'react';
import { SectionKey } from '../types';

interface NavigationProps {
  activeSection: SectionKey;
  onSelectSection: (section: SectionKey) => void;
}

export default function Navigation({
  activeSection,
  onSelectSection,
}: NavigationProps) {
  const [visible, setVisible] = useState(true);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: { key: SectionKey; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'experience', label: 'Experience' },
    { key: 'certification', label: 'Certification' },
    { key: 'contact', label: 'Contact' },
  ];

  // Auto-hide navigation pill after 2.5s of no mouse/touch/scroll activity
  useEffect(() => {
    const handleActivity = () => {
      setVisible(true);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
      }, 2800);
    };

    window.addEventListener('mousemove', handleActivity, { passive: true });
    window.addEventListener('scroll', handleActivity, { passive: true });
    window.addEventListener('touchstart', handleActivity, { passive: true });
    window.addEventListener('keydown', handleActivity, { passive: true });

    // Initial timeout
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      aria-label="Main Navigation"
    >
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#14213D]/90 backdrop-blur-md border border-[#C77D10]/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelectSection(item.key)}
              className={`relative px-3.5 sm:px-5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#C77D10] ${
                isActive
                  ? 'text-[#0A111F] font-semibold'
                  : 'text-[#D1D5DB] hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 bg-[#C77D10] rounded-full shadow-[0_0_12px_rgba(199,125,16,0.5)] transition-all duration-300" />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

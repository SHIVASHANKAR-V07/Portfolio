import { useEffect } from 'react';
import { X, ExternalLink, Github, Globe } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  period?: string;
  overview?: string;
  highlights?: string[];
  responsibilities?: { category?: string; detail: string }[];
  platforms?: string[];
  techStack?: string[];
  githubUrl?: string;
  huggingFaceUrl?: string;
  liveUrl?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  period,
  overview,
  highlights,
  responsibilities,
  platforms,
  techStack,
  githubUrl,
  huggingFaceUrl,
  liveUrl,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A111F]/80 backdrop-blur-md transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-2xl bg-[#14213D] border border-[#C77D10]/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-[#D1D5DB] transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C77D10]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {badge && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#C77D10]/20 text-[#C77D10] border border-[#C77D10]/30">
                {badge}
              </span>
            )}
            {period && (
              <span className="text-xs text-[#9CA3AF] font-mono">
                {period}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-[#C77D10] font-medium mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          {overview && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#C77D10] font-semibold mb-1.5">
                Overview
              </h3>
              <p className="text-[#D1D5DB] bg-[#0A111F]/50 p-4 rounded-xl border border-white/5">
                {overview}
              </p>
            </div>
          )}

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#C77D10] font-semibold mb-2">
                Highlights
              </h3>
              <ul className="space-y-2 list-none pl-0">
                {highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[#D1D5DB]"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C77D10] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsibilities (for Internships) */}
          {responsibilities && responsibilities.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#C77D10] font-semibold mb-2">
                Responsibilities
              </h3>
              <ul className="space-y-3 list-none pl-0">
                {responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="p-3 bg-[#0A111F]/40 rounded-xl border border-white/5 text-[#D1D5DB]"
                  >
                    {resp.category ? (
                      <div>
                        <span className="italic font-semibold text-white mr-1.5">
                          {resp.category}:
                        </span>
                        <span>{resp.detail}</span>
                      </div>
                    ) : (
                      <span>{resp.detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Platforms (Work Tab) */}
          {platforms && platforms.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#C77D10] font-semibold mb-2.5">
                Platforms & Enterprise Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#0A111F] text-[#D1D5DB] border border-[#C77D10]/30 hover:border-[#C77D10] transition-colors"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Capsules */}
          {techStack && techStack.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#C77D10] font-semibold mb-2.5">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#0A111F] text-[#D1D5DB] border border-[#C77D10]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* External Links */}
          {(githubUrl || huggingFaceUrl || liveUrl) && (
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-[#0A111F] text-white border border-[#C77D10]/40 hover:border-[#C77D10] hover:bg-[#C77D10]/10 transition-colors"
                >
                  <Github className="w-4 h-4 text-[#C77D10]" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
              {huggingFaceUrl && (
                <a
                  href={huggingFaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-[#0A111F] text-white border border-[#C77D10]/40 hover:border-[#C77D10] hover:bg-[#C77D10]/10 transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#C77D10]" />
                  <span>Hugging Face</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-[#C77D10] text-[#0A111F] font-semibold hover:bg-[#C77D10]/90 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

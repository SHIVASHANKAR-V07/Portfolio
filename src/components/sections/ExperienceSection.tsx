import { useState } from 'react';
import { WORK_DATA, INTERNSHIP_DATA, PROJECT_DATA } from '../../data/portfolioData';
import { Briefcase, Calendar, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import Modal from '../Modal';

type TabType = 'work' | 'internship' | 'project';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>('work');
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
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
  }>({
    isOpen: false,
    title: '',
  });

  const openWorkModal = () => {
    setModalData({
      isOpen: true,
      title: WORK_DATA.title,
      subtitle: WORK_DATA.company,
      badge: WORK_DATA.type,
      period: WORK_DATA.period,
      overview: WORK_DATA.overview,
      highlights: WORK_DATA.highlights,
      platforms: WORK_DATA.platforms,
    });
  };

  const openInternshipModal = (index: number) => {
    const item = INTERNSHIP_DATA[index];
    setModalData({
      isOpen: true,
      title: item.title,
      subtitle: item.company,
      badge: item.type,
      period: item.period,
      overview: item.overview,
      responsibilities: item.responsibilities,
      techStack: item.techStack,
      githubUrl: item.githubUrl,
      liveUrl: item.liveUrl,
    });
  };

  const openProjectModal = (index: number) => {
    const item = PROJECT_DATA[index];
    setModalData({
      isOpen: true,
      title: item.title,
      badge: item.type,
      overview: item.brief,
      highlights: item.highlights,
      techStack: item.techStack,
      githubUrl: item.githubUrl,
      huggingFaceUrl: item.huggingFaceUrl,
      liveUrl: item.liveUrl,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#C77D10]/15 text-[#C77D10] border border-[#C77D10]/30 text-xs font-semibold uppercase tracking-wider mb-2">
          Practical Knowledge
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Experience & Projects
        </h2>
      </div>

      {/* Single rounded rectangular navigation block for tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#14213D] border border-[#C77D10]/30 shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
              activeTab === 'work'
                ? 'bg-[#C77D10] text-[#0A111F] shadow-[0_0_15px_rgba(199,125,16,0.4)]'
                : 'text-[#D1D5DB] hover:text-white hover:bg-white/5'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab('internship')}
            className={`px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
              activeTab === 'internship'
                ? 'bg-[#C77D10] text-[#0A111F] shadow-[0_0_15px_rgba(199,125,16,0.4)]'
                : 'text-[#D1D5DB] hover:text-white hover:bg-white/5'
            }`}
          >
            Internship
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={`px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
              activeTab === 'project'
                ? 'bg-[#C77D10] text-[#0A111F] shadow-[0_0_15px_rgba(199,125,16,0.4)]'
                : 'text-[#D1D5DB] hover:text-white hover:bg-white/5'
            }`}
          >
            Project
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[280px]">
        {/* WORK TAB */}
        {activeTab === 'work' && (
          <div className="flex justify-center animate-fadeIn">
            <div
              onClick={openWorkModal}
              className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#14213D]/90 border border-[#C77D10]/30 hover:border-[#C77D10] shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C77D10]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#C77D10]/20 text-[#C77D10] border border-[#C77D10]/30">
                  {WORK_DATA.type}
                </span>
                <span className="text-xs text-[#9CA3AF] font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {WORK_DATA.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#C77D10] transition-colors">
                {WORK_DATA.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-[#D1D5DB] font-medium mb-4">
                <Building2 className="w-4 h-4 text-[#C77D10]" />
                <span>{WORK_DATA.company}</span>
              </div>

              <p className="text-xs text-[#9CA3AF] line-clamp-2 mb-6 leading-relaxed">
                {WORK_DATA.overview}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold text-[#C77D10] group-hover:translate-x-1 transition-transform">
                <span>View Full Evaluation Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}

        {/* INTERNSHIP TAB */}
        {activeTab === 'internship' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {INTERNSHIP_DATA.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openInternshipModal(idx)}
                className="p-6 rounded-2xl bg-[#14213D]/90 border border-[#C77D10]/30 hover:border-[#C77D10] shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#C77D10]/20 text-[#C77D10] border border-[#C77D10]/30">
                      {item.type}
                    </span>
                    <span className="text-xs text-[#9CA3AF] font-mono">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#C77D10] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#D1D5DB] font-medium mb-3">
                    <Building2 className="w-3.5 h-3.5 text-[#C77D10]" />
                    <span>{item.company}</span>
                  </div>

                  <p className="text-xs text-[#9CA3AF] line-clamp-3 mb-4 leading-relaxed">
                    {item.overview}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] rounded bg-[#0A111F] text-[#D1D5DB] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] rounded bg-[#0A111F] text-[#C77D10]">
                        +{item.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-[#C77D10] group-hover:translate-x-1 transition-transform">
                    <span>Explore Internship Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROJECT TAB */}
        {activeTab === 'project' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {PROJECT_DATA.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openProjectModal(idx)}
                className="p-6 rounded-2xl bg-[#14213D]/90 border border-[#C77D10]/30 hover:border-[#C77D10] shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 mb-3 text-[11px] font-semibold rounded-full bg-[#C77D10]/20 text-[#C77D10] border border-[#C77D10]/30">
                    {item.type}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#C77D10] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] line-clamp-3 mb-4 leading-relaxed">
                    {item.brief}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] rounded bg-[#0A111F] text-[#D1D5DB] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] rounded bg-[#0A111F] text-[#C77D10]">
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-[#C77D10] group-hover:translate-x-1 transition-transform">
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <Modal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        title={modalData.title}
        subtitle={modalData.subtitle}
        badge={modalData.badge}
        period={modalData.period}
        overview={modalData.overview}
        highlights={modalData.highlights}
        responsibilities={modalData.responsibilities}
        platforms={modalData.platforms}
        techStack={modalData.techStack}
        githubUrl={modalData.githubUrl}
        huggingFaceUrl={modalData.huggingFaceUrl}
        liveUrl={modalData.liveUrl}
      />
    </div>
  );
}

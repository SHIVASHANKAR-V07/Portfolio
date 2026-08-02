import { CERTIFICATION_DATA } from '../../data/portfolioData';
import { ExternalLink, Award } from 'lucide-react';

export function CertificationSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#C77D10]/15 text-[#C77D10] border border-[#C77D10]/30 text-xs font-semibold uppercase tracking-wider mb-2">
          Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Certifications
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {CERTIFICATION_DATA.map((cert) => {
          const hasLink = !!cert.url;
          const Component = hasLink ? 'a' : 'div';

          return (
            <Component
              key={cert.id}
              {...(hasLink
                ? {
                    href: cert.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {})}
              className={`group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#14213D] border border-[#C77D10]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-sm sm:text-base font-medium transition-all duration-300 ${
                hasLink
                  ? 'hover:border-[#C77D10] hover:bg-[#14213D]/90 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(199,125,16,0.25)] text-white cursor-pointer'
                  : 'text-[#9CA3AF] cursor-default'
              }`}
            >
              <Award className="w-4 h-4 text-[#C77D10] shrink-0" />
              <span className="leading-tight">{cert.name}</span>
              {hasLink && (
                <ExternalLink className="w-4 h-4 text-[#C77D10] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              )}
            </Component>
          );
        })}
      </div>
    </div>
  );
}

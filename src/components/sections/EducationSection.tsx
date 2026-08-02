import { EDUCATION_DATA } from '../../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  lineProgress: number; // 0 to 1 progress for growing vertical line
}

export function EducationSection({ lineProgress }: EducationProps) {
  const linePercent = Math.min(Math.max(lineProgress * 100, 0), 100);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 relative">
      <div className="text-center mb-12">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#C77D10]/15 text-[#C77D10] border border-[#C77D10]/30 text-xs font-semibold uppercase tracking-wider mb-2">
          Academic Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Education
        </h2>
      </div>

      <div className="relative min-h-[380px] flex flex-col justify-center">
        {/* Central Growing Line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-[#14213D] rounded-full overflow-hidden">
          <div
            className="w-full bg-[#C77D10] shadow-[0_0_12px_#C77D10] transition-all duration-300 ease-out"
            style={{ height: `${linePercent}%` }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-20 relative z-10">
          {/* Box 1 (Left Side on Desktop, stacked on Mobile) */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-10 md:text-right">
              <div
                className={`p-6 rounded-2xl bg-[#14213D]/95 border border-[#C77D10]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${
                  linePercent >= 20
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-40 translate-y-4 scale-95'
                }`}
              >
                <div className="flex items-center gap-2 md:justify-end text-[#C77D10] mb-2 font-mono text-sm font-semibold">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{EDUCATION_DATA[0].period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {EDUCATION_DATA[0].institution}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#0A111F] text-[#C77D10] border border-[#C77D10]/30 text-xs font-bold">
                  Score: {EDUCATION_DATA[0].score}
                </div>
              </div>
            </div>

            {/* Central Node 1 */}
            <div className="my-4 md:my-0 w-8 h-8 rounded-full bg-[#14213D] border-2 border-[#C77D10] flex items-center justify-center shrink-0 z-20 shadow-[0_0_10px_#C77D10]">
              <div
                className={`w-3 h-3 rounded-full bg-[#C77D10] transition-transform duration-300 ${
                  linePercent >= 30 ? 'scale-100' : 'scale-0'
                }`}
              />
            </div>

            <div className="hidden md:block md:w-1/2 md:pl-10" />
          </div>

          {/* Box 2 (Right Side on Desktop, stacked on Mobile) */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="hidden md:block md:w-1/2 md:pr-10" />

            {/* Central Node 2 */}
            <div className="my-4 md:my-0 w-8 h-8 rounded-full bg-[#14213D] border-2 border-[#C77D10] flex items-center justify-center shrink-0 z-20 shadow-[0_0_10px_#C77D10]">
              <div
                className={`w-3 h-3 rounded-full bg-[#C77D10] transition-transform duration-300 ${
                  linePercent >= 70 ? 'scale-100' : 'scale-0'
                }`}
              />
            </div>

            <div className="w-full md:w-1/2 md:pl-10 md:text-left">
              <div
                className={`p-6 rounded-2xl bg-[#14213D]/95 border border-[#C77D10]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${
                  linePercent >= 60
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-40 translate-y-4 scale-95'
                }`}
              >
                <div className="flex items-center gap-2 text-[#C77D10] mb-2 font-mono text-sm font-semibold">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{EDUCATION_DATA[1].period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {EDUCATION_DATA[1].institution}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#0A111F] text-[#C77D10] border border-[#C77D10]/30 text-xs font-bold">
                  {EDUCATION_DATA[1].score}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

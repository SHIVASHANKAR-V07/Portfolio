import { useState } from 'react';

interface HomeProps {
  imagePosition: 'left' | 'right';
  homeTextTranslateX: number; // in px or %
  homeTextOpacity: number;
}

export function HomeSection({
  imagePosition,
  homeTextTranslateX,
  homeTextOpacity,
}: HomeProps) {
  const [imgSrc, setImgSrc] = useState('Gemini_Art2.png');

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">
      {/* Left Column (or Right during transition) - Image */}
      <div
        className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ease-out ${
          imagePosition === 'right' ? 'lg:order-2 lg:translate-x-12' : 'lg:order-1'
        }`}
      >
        <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          {/* Ambient Glow Ring */}
          <div className="absolute -inset-4 rounded-full bg-[#C77D10]/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />

          {/* Frame Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#C77D10]/50 bg-[#14213D] shadow-[0_10px_40px_rgba(0,0,0,0.6)] animate-idle-float">
            <img
              src={imgSrc}
              alt="Shivashankar V. Artwork"
              onError={() => setImgSrc('Gemini_Art2.svg')}
              className="w-full h-full object-cover object-center filter saturate-110"
              referrerPolicy="no-referrer"
            />
            {/* Fine Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C77D10]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C77D10]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C77D10]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C77D10]" />
          </div>
        </div>
      </div>

      {/* Right Column - Text (3 exact lines) */}
      <div
        className="w-full lg:w-1/2 lg:order-2 text-center lg:text-left transition-all duration-500 ease-out"
        style={{
          transform: `translateX(${homeTextTranslateX}px)`,
          opacity: homeTextOpacity,
        }}
      >
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#C77D10]/15 text-[#C77D10] border border-[#C77D10]/30 text-xs font-semibold uppercase tracking-wider">
          Portfolio
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D1D5DB] leading-tight space-y-2">
          <span className="block text-xl sm:text-2xl text-[#9CA3AF] font-medium tracking-normal">
            Welcome to my Profile !
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            I am Shivashankar V,
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl text-[#C77D10] font-semibold mt-1">
            B.Sc CS with Data Analyst Graduate
          </span>
        </h1>
      </div>
    </div>
  );
}

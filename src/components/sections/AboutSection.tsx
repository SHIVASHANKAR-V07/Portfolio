interface AboutProps {
  aboutTranslateX: number; // in px or %
  aboutOpacity: number;
}

export function AboutSection({ aboutTranslateX, aboutOpacity }: AboutProps) {
  return (
    <div
      className="w-full max-w-2xl px-6 py-8 transition-all duration-500 ease-out"
      style={{
        transform: `translateX(${aboutTranslateX}px)`,
        opacity: aboutOpacity,
      }}
    >
      <div className="p-8 rounded-2xl bg-[#14213D]/90 border border-[#C77D10]/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#C77D10]/15 text-[#C77D10] border border-[#C77D10]/30 text-xs font-semibold uppercase tracking-wider">
          About Me
        </div>

        {/* Stylized heading with mathematical bold-italic string or styled CSS */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-wide font-serif italic text-[#C77D10]">
          𝐴𝑙𝑤𝑎𝑦𝑠 𝑙𝑒𝑎𝑟𝑛𝑖𝑛𝑔, 𝑎𝑙𝑤𝑎𝑦𝑠 𝑏𝑢𝑖𝑙𝑑𝑖𝑛𝑔.
        </h2>

        {/* Exact body text */}
        <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed font-normal">
          I build end-to-end solutions across Data Analytics, AI, Automation,
          and Software Development, with a passion for solving real-world
          problems and delivering value through teamwork and technology.
        </p>
      </div>
    </div>
  );
}

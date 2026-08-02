interface ProgressBarProps {
  progress: number; // 0 to 1
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const percentage = Math.min(Math.max(progress * 100, 0), 100);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-[#0A111F]/80 z-50 pointer-events-none overflow-hidden">
      <div
        className="h-full bg-[#C77D10] transition-all duration-150 ease-out shadow-[0_0_10px_#C77D10]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

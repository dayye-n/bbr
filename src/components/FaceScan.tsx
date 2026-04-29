import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const STEPS = [
  "Initializing scanner…",
  "Detecting facial structure…",
  "Analyzing gorgeousness levels…",
  "Cross-referencing birthday database…",
  "Confirming identity…",
];

export const FaceScan = ({ onComplete }: Props) => {
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 1;
        if (next >= 100) {
          clearInterval(interval);
          setDone(true);
          setTimeout(onComplete, 2200);
          return 100;
        }
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    setStepIdx(Math.min(STEPS.length - 1, Math.floor((progress / 100) * STEPS.length)));
  }, [progress]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-10">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-ring" />
        <div className="absolute inset-0 rounded-full border-2 border-accent animate-pulse-ring" style={{ animationDelay: "0.5s" }} />

        {/* Scanner frame */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-primary/60 overflow-hidden shadow-glow bg-card/40">
          {/* Face silhouette */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full p-8 text-primary/70">
            <ellipse cx="100" cy="110" rx="55" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="80" cy="95" r="4" fill="currentColor" />
            <circle cx="120" cy="95" r="4" fill="currentColor" />
            <path d="M 80 135 Q 100 150 120 135" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Detection points */}
            {[[60,80],[140,80],[100,70],[70,140],[130,140],[100,160]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r="2" fill="hsl(var(--accent))">
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin={`${i*0.2}s`} />
              </circle>
            ))}
          </svg>

          {/* Scan line */}
          {!done && (
            <div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-accent-glow animate-scan-line"
              style={{ boxShadow: "0 0 20px hsl(var(--accent))" }}
            />
          )}

          {/* Corner brackets */}
          {[
            "top-2 left-2 border-l-4 border-t-4",
            "top-2 right-2 border-r-4 border-t-4",
            "bottom-2 left-2 border-l-4 border-b-4",
            "bottom-2 right-2 border-r-4 border-b-4",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-8 h-8 border-accent ${cls}`} />
          ))}
        </div>
      </div>

      {!done ? (
        <>
          <p className="text-accent font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
            {STEPS[stepIdx]}
          </p>
          <div className="w-72 md:w-96 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground font-mono mt-2 text-sm">{progress}%</p>
        </>
      ) : (
        <div className="animate-bounce-in">
          <p className="text-3xl md:text-5xl font-display text-gradient-party max-w-2xl">
            Yup, that's the gorgeous girl I was looking for 💖
          </p>
        </div>
      )}
    </div>
  );
};

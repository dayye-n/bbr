import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onYes: () => void;
}

export const GoatedGate = ({ onYes }: Props) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [wiggle, setWiggle] = useState(false);

  const dodge = () => {
    setWiggle(true);
    setNoPos({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 400,
    });
    setTimeout(() => setWiggle(false), 400);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-5xl md:text-7xl text-gradient-party animate-glow-pulse mb-12">
        Are you goated? 🐐
      </h1>
      <p className="text-muted-foreground mb-10 text-lg md:text-xl">
        A very important question. Choose wisely.
      </p>
      <div className="relative flex items-center justify-center gap-6">
        <Button
          size="lg"
          onClick={onYes}
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-110 transition-transform shadow-glow text-xl px-10 py-7 rounded-full font-bold"
        >
          YES 💅
        </Button>
        <Button
          size="lg"
          variant="outline"
          onMouseEnter={dodge}
          onFocus={dodge}
          onTouchStart={dodge}
          onClick={(e) => { e.preventDefault(); dodge(); }}
          className={`text-xl px-10 py-7 rounded-full font-bold border-2 transition-all duration-300 ${wiggle ? "animate-wiggle" : ""}`}
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
          }}
        >
          No 🙄
        </Button>
      </div>
      <p className="text-muted-foreground/60 mt-16 text-sm italic">
        (psst… one of these buttons might be a little shy)
      </p>
    </div>
  );
};

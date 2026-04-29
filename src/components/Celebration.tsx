import { Confetti } from "./Confetti";

const YOUTUBE_ID = "vYMxOzxKYYo";

export const Celebration = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <Confetti />

      {/* Hidden YouTube audio player (autoplay) */}
      <iframe
        title="birthday-song"
        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&controls=0&loop=1&playlist=${YOUTUBE_ID}`}
        allow="autoplay"
        className="absolute opacity-0 pointer-events-none w-1 h-1"
      />

      <div className="relative z-10 animate-bounce-in">
        <div className="text-7xl md:text-9xl mb-6">🎂🎉🎈</div>
        <h1 className="font-display text-5xl md:text-8xl text-gradient-party animate-glow-pulse mb-6 leading-tight">
          Happy Birthday
        </h1>
        <h2 className="font-display text-3xl md:text-6xl text-accent mb-8 animate-glow-pulse" style={{ animationDelay: "0.5s" }}>
          Riffat Fauzan Rahim Bhimdiwala 💖
        </h2>
        <p className="text-foreground/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Wishing the most gorgeous, goated soul a day as radiant as you are. ✨
        </p>
        <p className="text-muted-foreground mt-6 text-sm italic">
          🎵 (turn your sound on)
        </p>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Confetti } from "./Confetti";

const YOUTUBE_ID = "vYMxOzxKYYo";

export const Celebration = () => {
  const [audioStarted, setAudioStarted] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <Confetti />

      {/* YouTube audio player — only mounted after user tap (required for mobile autoplay policies) */}
      {audioStarted && (
        <iframe
          title="birthday-song"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&controls=0&loop=1&playlist=${YOUTUBE_ID}&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="absolute opacity-0 pointer-events-none w-1 h-1"
        />
      )}

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
        {!audioStarted && (
          <button
            onClick={() => setAudioStarted(true)}
            className="mt-8 px-8 py-4 rounded-full bg-gradient-party text-white text-lg font-semibold shadow-glow hover:scale-105 transition-transform animate-glow-pulse"
          >
            🎵 Tap to play your song
          </button>
        )}
        {audioStarted && (
          <p className="text-muted-foreground mt-6 text-sm italic">
            🎵 Now playing — turn your sound on!
          </p>
        )}
      </div>

      <img
        src="https://media1.tenor.com/m/ZKXLpJpxvOYAAAAC/bee-eye-brows.gif"
        alt="Cute bee wiggling its eyebrows"
        className="relative z-10 mt-10 w-56 md:w-72 rounded-2xl shadow-glow"
      />
    </div>
  );
};

import { useRef, useState } from "react";
import { Confetti } from "./Confetti";

const birthdaySong = "/audio/birthday-song.mp3";

export const Celebration = () => {
  const [audioStarted, setAudioStarted] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.muted = false;
      audio.volume = 1;
      const playAttempt = audio.play();
      setAudioBlocked(false);
      await playAttempt;
      setAudioStarted(true);
    } catch (err) {
      console.error("Audio play failed:", err);
      setAudioBlocked(true);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <Confetti />

      <audio ref={audioRef} loop playsInline preload="metadata">
        <source src="/audio/birthday-song.mp3" type="audio/mpeg" />
        <source src="/audio/birthday-song.m4a" type="audio/mp4" />
      </audio>

      <div className="relative z-10 animate-bounce-in">
        <div className="text-7xl md:text-9xl mb-6">🎂🎉🎈</div>
        <h1 className="font-display text-5xl md:text-8xl text-gradient-party animate-glow-pulse mb-6 leading-tight">
          Happy Birthday
        </h1>
        <h2 className="font-display text-3xl md:text-6xl text-accent mb-8 animate-glow-pulse" style={{ animationDelay: "0.5s" }}>
          Riffat Fauzan Rahim Bhimdiwala 💖
        </h2>
        <p className="text-foreground/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Happiest birthday bubs I hope you havin a goated day, Missing you alot. 🤟
        </p>
        {!audioStarted && (
          <button
            onClick={handlePlay}
            className="mt-8 px-8 py-4 rounded-full bg-gradient-party text-white text-lg font-semibold shadow-glow hover:scale-105 transition-transform animate-glow-pulse"
          >
            🎵 Tap to play your song
          </button>
        )}
        {audioBlocked && (
          <audio className="mx-auto mt-6 w-full max-w-sm" src={birthdaySong} controls playsInline preload="metadata" />
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

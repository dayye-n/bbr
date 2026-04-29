const EMOJIS = ["🎉", "🎂", "🎈", "🎁", "✨", "🌸", "💖", "🌟", "🦄", "🍰"];

export const Confetti = () => {
  const pieces = Array.from({ length: 60 });
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 4 + Math.random() * 6;
        const delay = Math.random() * 5;
        const size = 1 + Math.random() * 2;
        const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        return (
          <span
            key={i}
            className="animate-float-up absolute"
            style={{
              left: `${left}%`,
              fontSize: `${size}rem`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

import { Button } from "@/components/ui/button";

interface Props {
  onYes: () => void;
}

export const BirthdayQuestion = ({ onYes }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center animate-bounce-in">
      <div className="text-6xl mb-6">🎂</div>
      <h1 className="font-display text-4xl md:text-6xl text-gradient-party mb-8">
        Is it your birthday today?
      </h1>
      <p className="text-muted-foreground mb-10 text-lg">
        Be honest now… ✨
      </p>
      <Button
        size="lg"
        onClick={onYes}
        className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-110 transition-transform shadow-accent-glow text-xl px-12 py-7 rounded-full font-bold"
      >
        YES IT IS! 🎉
      </Button>
    </div>
  );
};

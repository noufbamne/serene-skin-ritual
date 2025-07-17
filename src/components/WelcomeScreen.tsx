import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import welcomeHero from "@/assets/welcome-hero.jpg";

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

export function WelcomeScreen({ onStartQuiz }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-primary">SkinCare</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-sm mb-8">
          <img 
            src={welcomeHero} 
            alt="Skincare wellness illustration"
            className="w-full h-64 object-cover rounded-2xl shadow-card"
          />
        </div>

        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold text-foreground leading-tight">
            Your skin is unique.<br />
            Let's build the perfect routine.
          </h2>
          <p className="text-lg text-muted-foreground px-4">
            Discover personalized skincare recommendations tailored just for you
          </p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Button 
            onClick={onStartQuiz}
            className="w-full btn-primary flex items-center justify-center gap-2 h-14 text-lg"
          >
            Start My Routine
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            Takes 2-3 minutes • Completely personalized
          </p>
        </div>
      </div>
    </div>
  );
}
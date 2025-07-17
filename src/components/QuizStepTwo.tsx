import { useState } from "react";
import { ArrowLeft, ArrowRight, Zap, Star, Eye, Target, Circle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizStepTwoProps {
  onNext: (concerns: string[]) => void;
  onBack: () => void;
}

const skinConcerns = [
  {
    id: "acne",
    label: "Acne",
    icon: Zap,
    description: "Breakouts, pimples"
  },
  {
    id: "dullness",
    label: "Dullness",
    icon: Star,
    description: "Lack of glow, tired skin"
  },
  {
    id: "dark-circles",
    label: "Dark Circles",
    icon: Eye,
    description: "Under-eye darkness"
  },
  {
    id: "blackheads",
    label: "Blackheads",
    icon: Target,
    description: "Clogged pores"
  },
  {
    id: "spots",
    label: "Dark Spots",
    icon: Circle,
    description: "Pigmentation, marks"
  },
  {
    id: "sensitivity",
    label: "Sensitivity",
    icon: Heart,
    description: "Irritation, redness"
  }
];

export function QuizStepTwo({ onNext, onBack }: QuizStepTwoProps) {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const toggleConcern = (concernId: string) => {
    if (selectedConcerns.includes(concernId)) {
      setSelectedConcerns(selectedConcerns.filter(id => id !== concernId));
    } else if (selectedConcerns.length < 3) {
      setSelectedConcerns([...selectedConcerns, concernId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex gap-2">
          <div className="w-8 h-2 bg-primary rounded-full"></div>
          <div className="w-8 h-2 bg-primary rounded-full"></div>
          <div className="w-8 h-2 bg-border rounded-full"></div>
          <div className="w-8 h-2 bg-border rounded-full"></div>
        </div>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-24">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            What are your main skin concerns?
          </h2>
          <p className="text-muted-foreground">
            Select up to 3 concerns • {selectedConcerns.length}/3 selected
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {skinConcerns.map((concern) => {
            const Icon = concern.icon;
            const isSelected = selectedConcerns.includes(concern.id);
            const isDisabled = !isSelected && selectedConcerns.length >= 3;
            
            return (
              <button
                key={concern.id}
                onClick={() => toggleConcern(concern.id)}
                disabled={isDisabled}
                className={`quiz-option text-center flex flex-col items-center gap-3 h-32 ${
                  isSelected ? "selected" : ""
                } ${isDisabled ? "opacity-50" : ""}`}
              >
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{concern.label}</h3>
                  <p className="text-xs text-muted-foreground">{concern.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-6 left-6 right-6">
        <Button 
          onClick={() => onNext(selectedConcerns)}
          disabled={selectedConcerns.length === 0}
          className="w-full btn-primary flex items-center justify-center gap-2 h-14"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
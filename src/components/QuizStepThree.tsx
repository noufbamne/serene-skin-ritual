import { useState } from "react";
import { ArrowLeft, ArrowRight, GraduationCap, School, Dumbbell, Moon, Palette, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizStepThreeProps {
  onNext: (lifestyle: string[]) => void;
  onBack: () => void;
}

const lifestyleOptions = [
  {
    id: "college",
    label: "College Student",
    icon: GraduationCap
  },
  {
    id: "school",
    label: "School",
    icon: School
  },
  {
    id: "gym",
    label: "Gym-goer",
    icon: Dumbbell
  },
  {
    id: "night-owl",
    label: "Night Owl",
    icon: Moon
  },
  {
    id: "makeup",
    label: "Makeup User",
    icon: Palette
  },
  {
    id: "outdoor",
    label: "Outdoor Worker",
    icon: Sun
  }
];

export function QuizStepThree({ onNext, onBack }: QuizStepThreeProps) {
  const [selectedLifestyle, setSelectedLifestyle] = useState<string[]>([]);

  const toggleLifestyle = (lifestyleId: string) => {
    if (selectedLifestyle.includes(lifestyleId)) {
      setSelectedLifestyle(selectedLifestyle.filter(id => id !== lifestyleId));
    } else {
      setSelectedLifestyle([...selectedLifestyle, lifestyleId]);
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
          <div className="w-8 h-2 bg-primary rounded-full"></div>
          <div className="w-8 h-2 bg-border rounded-full"></div>
        </div>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-24">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Tell us about your lifestyle
          </h2>
          <p className="text-muted-foreground">
            This helps us tailor your routine to fit your daily life
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {lifestyleOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedLifestyle.includes(option.id);
            
            return (
              <button
                key={option.id}
                onClick={() => toggleLifestyle(option.id)}
                className={`quiz-option text-center flex flex-col items-center gap-3 h-24 ${
                  isSelected ? "selected" : ""
                }`}
              >
                <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{option.label}</h3>
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-6 left-6 right-6">
        <Button 
          onClick={() => onNext(selectedLifestyle)}
          className="w-full btn-primary flex items-center justify-center gap-2 h-14"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
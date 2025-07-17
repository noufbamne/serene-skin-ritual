import { useState } from "react";
import { ArrowLeft, ArrowRight, Droplets, Sun, Zap, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizStepOneProps {
  onNext: (skinType: string) => void;
  onBack: () => void;
}

const skinTypes = [
  {
    id: "oily",
    label: "Oily",
    icon: Droplets,
    description: "Shiny, enlarged pores, frequent breakouts"
  },
  {
    id: "dry",
    label: "Dry",
    icon: Sun,
    description: "Tight, flaky, rough texture"
  },
  {
    id: "combination",
    label: "Combination",
    icon: Zap,
    description: "Oily T-zone, dry cheeks"
  },
  {
    id: "sensitive",
    label: "Sensitive",
    icon: Shield,
    description: "Easily irritated, reactive to products"
  },
  {
    id: "not-sure",
    label: "Not Sure",
    icon: HelpCircle,
    description: "Let us help you figure it out"
  }
];

export function QuizStepOne({ onNext, onBack }: QuizStepOneProps) {
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex gap-2">
          <div className="w-8 h-2 bg-primary rounded-full"></div>
          <div className="w-8 h-2 bg-border rounded-full"></div>
          <div className="w-8 h-2 bg-border rounded-full"></div>
          <div className="w-8 h-2 bg-border rounded-full"></div>
        </div>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            What's your skin type?
          </h2>
          <p className="text-muted-foreground">
            This helps us recommend the right products for you
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {skinTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`quiz-option w-full text-left flex items-start gap-4 ${
                  selectedType === type.id ? "selected" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mt-1">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{type.label}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="fixed bottom-6 left-6 right-6">
          <Button 
            onClick={() => selectedType && onNext(selectedType)}
            disabled={!selectedType}
            className="w-full btn-primary flex items-center justify-center gap-2 h-14"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
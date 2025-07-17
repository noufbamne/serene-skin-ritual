import { ArrowLeft, ArrowRight, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizStepFourProps {
  onNext: (useCamera: boolean) => void;
  onBack: () => void;
}

export function QuizStepFour({ onNext, onBack }: QuizStepFourProps) {
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
          <div className="w-8 h-2 bg-primary rounded-full"></div>
        </div>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Want to use your camera to improve recommendations?
          </h2>
          <p className="text-muted-foreground px-4">
            Our AI can analyze your skin to provide more personalized product suggestions
          </p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Button 
            onClick={() => onNext(true)}
            className="w-full btn-primary flex items-center justify-center gap-2 h-14"
          >
            <Camera className="w-5 h-5" />
            Use Camera
          </Button>
          
          <Button 
            onClick={() => onNext(false)}
            variant="outline"
            className="w-full btn-outline flex items-center justify-center gap-2 h-14"
          >
            <X className="w-5 h-5" />
            Skip this step
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6 px-8">
          Your photos are processed locally and never stored on our servers
        </p>
      </div>
    </div>
  );
}
import { ArrowRight, User, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileSummaryProps {
  skinType: string;
  concerns: string[];
  lifestyle: string[];
  onNext: () => void;
}

export function ProfileSummary({ skinType, concerns, lifestyle, onNext }: ProfileSummaryProps) {
  const formatLabel = (text: string) => {
    return text.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-foreground">
          Perfect! Here's your profile
        </h2>
        <p className="text-muted-foreground mt-2">
          We're building your personalized routine...
        </p>
      </div>

      {/* Profile Cards */}
      <div className="flex-1 px-6 space-y-6">
        {/* Skin Type */}
        <div className="card-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">Skin Type</h3>
              <p className="text-primary font-medium">{formatLabel(skinType)}</p>
            </div>
          </div>
        </div>

        {/* Concerns */}
        <div className="card-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Main Concerns</h3>
              <div className="flex flex-wrap gap-2">
                {concerns.map((concern) => (
                  <span 
                    key={concern}
                    className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                  >
                    {formatLabel(concern)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle */}
        <div className="card-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Lifestyle</h3>
              <div className="flex flex-wrap gap-2">
                {lifestyle.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                  >
                    {formatLabel(item)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="card-floating text-center py-8">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Analyzing your profile and matching products...
          </p>
        </div>
      </div>

      <div className="p-6">
        <Button 
          onClick={onNext}
          className="w-full btn-primary flex items-center justify-center gap-2 h-14"
        >
          See My Routine
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
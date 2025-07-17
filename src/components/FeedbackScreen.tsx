import { useState } from "react";
import { ArrowLeft, Star, MessageSquare, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface FeedbackScreenProps {
  onBack: () => void;
  onRetakeQuiz: () => void;
}

export function FeedbackScreen({ onBack, onRetakeQuiz }: FeedbackScreenProps) {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmitFeedback = () => {
    // Mock feedback submission
    console.log("Feedback submitted:", { rating, feedback });
    // Show success toast or navigate back
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-semibold text-foreground">Feedback</h1>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            How was your experience?
          </h2>
          <p className="text-muted-foreground">
            Your feedback helps us improve for everyone
          </p>
        </div>

        {/* Rating */}
        <div className="card-soft mb-6">
          <h3 className="font-semibold text-lg mb-4">Rate your experience</h3>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-all duration-200 hover:scale-110"
              >
                <Star 
                  className={`w-8 h-8 ${
                    star <= rating 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Text */}
        <div className="card-soft mb-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Tell us more (optional)
          </h3>
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What did you love? What could we improve?"
            className="min-h-[100px] resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleSubmitFeedback}
            disabled={rating === 0}
            className="w-full btn-primary h-12"
          >
            Submit Feedback
          </Button>
          
          <Button 
            onClick={onRetakeQuiz}
            variant="outline"
            className="w-full btn-outline flex items-center justify-center gap-2 h-12"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 p-4 bg-accent rounded-lg">
          <h4 className="font-medium text-accent-foreground mb-2">
            Want to try something different?
          </h4>
          <p className="text-sm text-accent-foreground mb-3">
            Retake the quiz to explore different product recommendations
          </p>
          <Button 
            onClick={onRetakeQuiz}
            size="sm"
            className="btn-soft"
          >
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
}
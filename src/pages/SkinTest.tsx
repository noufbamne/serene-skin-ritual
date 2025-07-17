import { useState } from "react";
import { QuizStepOne } from "@/components/QuizStepOne";
import { QuizStepTwo } from "@/components/QuizStepTwo";
import { QuizStepThree } from "@/components/QuizStepThree";
import { QuizStepFour } from "@/components/QuizStepFour";
import { ProfileSummary } from "@/components/ProfileSummary";
import { RoutineBuilder } from "@/components/RoutineBuilder";
import { RoutineSummary } from "@/components/RoutineSummary";
import { FeedbackScreen } from "@/components/FeedbackScreen";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Screen = 
  | 'intro'
  | 'quiz-1'
  | 'quiz-2'
  | 'quiz-3'
  | 'quiz-4'
  | 'profile'
  | 'routine-am'
  | 'routine-pm'
  | 'summary'
  | 'feedback';

interface UserProfile {
  skinType: string;
  concerns: string[];
  lifestyle: string[];
  useCamera: boolean;
}

export const SkinTest = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    skinType: '',
    concerns: [],
    lifestyle: [],
    useCamera: false
  });

  const resetTest = () => {
    setCurrentScreen('intro');
    setUserProfile({
      skinType: '',
      concerns: [],
      lifestyle: [],
      useCamera: false
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return (
          <div className="min-h-screen bg-gradient-to-br from-primary-soft via-white to-primary-light flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Test Your
                  <span className="text-primary block">Skin</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                  Answer a few quick questions to discover your skin type, concerns, and get personalized product recommendations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setCurrentScreen('quiz-1')} 
                  size="lg" 
                  className="btn-primary"
                >
                  Start Skin Test
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">
                    Skip & Browse Products
                  </Link>
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Takes only 2-3 minutes • Get instant results
              </div>
            </div>
          </div>
        );
      
      case 'quiz-1':
        return (
          <QuizStepOne
            onNext={(skinType) => {
              setUserProfile(prev => ({ ...prev, skinType }));
              setCurrentScreen('quiz-2');
            }}
            onBack={() => setCurrentScreen('intro')}
          />
        );
      
      case 'quiz-2':
        return (
          <QuizStepTwo
            onNext={(concerns) => {
              setUserProfile(prev => ({ ...prev, concerns }));
              setCurrentScreen('quiz-3');
            }}
            onBack={() => setCurrentScreen('quiz-1')}
          />
        );
      
      case 'quiz-3':
        return (
          <QuizStepThree
            onNext={(lifestyle) => {
              setUserProfile(prev => ({ ...prev, lifestyle }));
              setCurrentScreen('quiz-4');
            }}
            onBack={() => setCurrentScreen('quiz-2')}
          />
        );
      
      case 'quiz-4':
        return (
          <QuizStepFour
            onNext={(useCamera) => {
              setUserProfile(prev => ({ ...prev, useCamera }));
              setCurrentScreen('profile');
            }}
            onBack={() => setCurrentScreen('quiz-3')}
          />
        );
      
      case 'profile':
        return (
          <ProfileSummary
            skinType={userProfile.skinType}
            concerns={userProfile.concerns}
            lifestyle={userProfile.lifestyle}
            onNext={() => setCurrentScreen('routine-am')}
          />
        );
      
      case 'routine-am':
        return (
          <RoutineBuilder
            type="am"
            products={[]}
            onNext={() => setCurrentScreen('routine-pm')}
            onBack={() => setCurrentScreen('profile')}
          />
        );
      
      case 'routine-pm':
        return (
          <RoutineBuilder
            type="pm"
            products={[]}
            onNext={() => setCurrentScreen('summary')}
            onBack={() => setCurrentScreen('routine-am')}
          />
        );
      
      case 'summary':
        return (
          <RoutineSummary
            onBack={() => setCurrentScreen('routine-pm')}
            onRetakeQuiz={resetTest}
          />
        );
      
      case 'feedback':
        return (
          <FeedbackScreen
            onBack={() => setCurrentScreen('summary')}
            onRetakeQuiz={resetTest}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Back to website button - only show during quiz */}
      {currentScreen !== 'intro' && (
        <div className="absolute top-4 left-4 z-50">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Website
            </Link>
          </Button>
        </div>
      )}
      
      {renderScreen()}
    </div>
  );
};
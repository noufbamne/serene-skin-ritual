import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizStepOne } from "@/components/QuizStepOne";
import { QuizStepTwo } from "@/components/QuizStepTwo";
import { QuizStepThree } from "@/components/QuizStepThree";
import { QuizStepFour } from "@/components/QuizStepFour";
import { ProfileSummary } from "@/components/ProfileSummary";
import { RoutineBuilder } from "@/components/RoutineBuilder";
import { RoutineSummary } from "@/components/RoutineSummary";
import { FeedbackScreen } from "@/components/FeedbackScreen";

type Screen = 
  | 'welcome'
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

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    skinType: '',
    concerns: [],
    lifestyle: [],
    useCamera: false
  });

  const resetApp = () => {
    setCurrentScreen('welcome');
    setUserProfile({
      skinType: '',
      concerns: [],
      lifestyle: [],
      useCamera: false
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen onStartQuiz={() => setCurrentScreen('quiz-1')} />
        );
      
      case 'quiz-1':
        return (
          <QuizStepOne
            onNext={(skinType) => {
              setUserProfile(prev => ({ ...prev, skinType }));
              setCurrentScreen('quiz-2');
            }}
            onBack={() => setCurrentScreen('welcome')}
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
            onRetakeQuiz={resetApp}
          />
        );
      
      case 'feedback':
        return (
          <FeedbackScreen
            onBack={() => setCurrentScreen('summary')}
            onRetakeQuiz={resetApp}
          />
        );
      
      default:
        return <WelcomeScreen onStartQuiz={() => setCurrentScreen('quiz-1')} />;
    }
  };

  return <div className="relative">{renderScreen()}</div>;
};

export default Index;

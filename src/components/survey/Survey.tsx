import { useState } from 'react';
import { surveyQuestions } from '@/data/questions';
import { SurveyResponse, UserInfo } from '@/types/survey';
import { SurveyIntro } from './SurveyIntro';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ThankYou } from './ThankYou';
import { EvaluationResults } from './EvaluationResults';
import { calculateEvaluation } from '@/utils/scoring';

interface SurveyProps {
  userInfo: UserInfo;
}

type SurveyStep = 'intro' | 'survey' | 'thankyou' | 'results';

export const Survey = ({ userInfo }: SurveyProps) => {
  const [currentStep, setCurrentStep] = useState<SurveyStep>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);

  const handleStart = () => {
    setCurrentStep('survey');
  };

  const handleAnswer = (response: SurveyResponse) => {
    setResponses(prev => {
      const existing = prev.find(r => r.questionId === response.questionId);
      if (existing) {
        return prev.map(r => r.questionId === response.questionId ? response : r);
      }
      return [...prev, response];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep('thankyou');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleViewResults = () => {
    setCurrentStep('results');
  };

  const getCurrentValue = () => {
    const response = responses.find(r => r.questionId === surveyQuestions[currentQuestionIndex].id);
    return response?.value;
  };

  if (currentStep === 'intro') {
    return <SurveyIntro userInfo={userInfo} onStart={handleStart} />;
  }

  if (currentStep === 'thankyou') {
    return <ThankYou onViewResults={handleViewResults} />;
  }

  if (currentStep === 'results') {
    const evaluation = calculateEvaluation(responses);
    return (
      <EvaluationResults 
        result={evaluation} 
        userInfo={userInfo}
      />
    );
  }

  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Header with progress */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            Kysymys {currentQuestionIndex + 1} / {surveyQuestions.length}
          </div>
          <div className="text-sm text-muted-foreground">
            {Math.round(progress)}% valmis
          </div>
        </div>
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={surveyQuestions.length}
        />
      </div>

      {/* Question */}
      <QuestionCard
        question={currentQuestion}
        value={getCurrentValue()}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoNext={true}
        canGoPrevious={currentQuestionIndex > 0}
        isLast={currentQuestionIndex === surveyQuestions.length - 1}
      />
    </div>
  );
};
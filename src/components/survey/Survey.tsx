import { useState, useEffect } from 'react';
import { surveyQuestions } from '@/data/questions';
import { SurveyResponse, UserInfo } from '@/types/survey';
import { SurveyIntro } from './SurveyIntro';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ThankYou } from './ThankYou';
import { EvaluationResults } from './EvaluationResults';
import { calculateEvaluation } from '@/utils/scoring';
import { getFilteredQuestions } from '@/utils/questionUtils';

interface SurveyProps {
  userInfo: UserInfo;
}

type SurveyStep = 'intro' | 'survey' | 'thankyou' | 'results';

export const Survey = ({ userInfo }: SurveyProps) => {
  const [currentStep, setCurrentStep] = useState<SurveyStep>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState(surveyQuestions);

  // Update filtered questions when responses change
  useEffect(() => {
    const newFilteredQuestions = getFilteredQuestions(surveyQuestions, responses);
    setFilteredQuestions(newFilteredQuestions);
    
    // If current question is no longer valid, find the nearest valid one
    if (currentQuestionIndex >= newFilteredQuestions.length && newFilteredQuestions.length > 0) {
      setCurrentQuestionIndex(newFilteredQuestions.length - 1);
    }
  }, [responses, currentQuestionIndex]);
  
  const handleStart = () => {
    setCurrentStep('survey');
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (response: SurveyResponse) => {
    setResponses(prev => {
      const newResponses = prev.filter(r => r.questionId !== response.questionId);
      return [...newResponses, response];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
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
    if (currentQuestionIndex >= filteredQuestions.length) return undefined;
    const response = responses.find(r => r.questionId === filteredQuestions[currentQuestionIndex].id);
    return response?.value;
  };

  const getAnsweredQuestionsCount = () => {
    // Progress should be based on current question index, not answered questions
    return currentQuestionIndex;
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
        responses={responses}
        questions={filteredQuestions}
      />
    );
  }

  if (currentQuestionIndex >= filteredQuestions.length) {
    setCurrentStep('thankyou');
    return <ThankYou onViewResults={handleViewResults} />;
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const answeredCount = getAnsweredQuestionsCount();
  const progress = filteredQuestions.length > 0 ? (answeredCount / filteredQuestions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Header with progress */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            Kysymys {currentQuestionIndex + 1} / {filteredQuestions.length}
          </div>
          <div className="text-sm text-muted-foreground">
            {Math.round(progress)}% valmis
          </div>
        </div>
        <ProgressBar 
          current={answeredCount} 
          total={filteredQuestions.length}
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
        isLast={currentQuestionIndex === filteredQuestions.length - 1}
      />
    </div>
  );
};
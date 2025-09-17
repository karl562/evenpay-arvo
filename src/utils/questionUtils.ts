import { Question, SurveyResponse } from '@/types/survey';

export const getFilteredQuestions = (
  allQuestions: Question[], 
  responses: SurveyResponse[]
): Question[] => {
  return allQuestions.filter(question => {
    if (!question.conditionalOn) {
      return true;
    }

    const dependentResponse = responses.find(
      r => r.questionId === question.conditionalOn!.questionId
    );

    if (!dependentResponse) {
      return false;
    }

    const expectedValue = question.conditionalOn.value;
    const actualValue = dependentResponse.value;

    if (Array.isArray(expectedValue)) {
      return Array.isArray(actualValue) 
        ? expectedValue.some(ev => actualValue.includes(ev))
        : expectedValue.includes(actualValue as string);
    } else {
      return Array.isArray(actualValue) 
        ? actualValue.includes(expectedValue)
        : actualValue === expectedValue;
    }
  });
};

export const getCurrentQuestionIndex = (
  allQuestions: Question[],
  filteredQuestions: Question[],
  currentFilteredIndex: number
): number => {
  if (currentFilteredIndex >= filteredQuestions.length) {
    return allQuestions.length - 1;
  }
  
  const currentQuestion = filteredQuestions[currentFilteredIndex];
  return allQuestions.findIndex(q => q.id === currentQuestion.id);
};
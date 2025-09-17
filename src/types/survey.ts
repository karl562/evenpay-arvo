export interface Question {
  id: string;
  type: 'radio' | 'text' | 'checkbox' | 'multiselect';
  question: string;
  options?: string[];
  required: boolean;
  category: string;
  subcategory?: string;
  conditionalOn?: {
    questionId: string;
    value: string | string[];
  };
}

export interface SurveyResponse {
  questionId: string;
  value: string | string[];
}

export interface UserInfo {
  email: string;
  organization: string;
  position: string;
  daysLeft: number;
  customMessage: string;
}

export interface EvaluationResult {
  icLevel: string;
  overallScore: number;
  categoryScores: {
    [key: string]: number;
  };
  recommendations: string[];
}
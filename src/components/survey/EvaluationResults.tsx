import { EvaluationResult, SurveyResponse, Question } from '@/types/survey';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Award, AlertCircle, CheckCircle, FileText } from 'lucide-react';

interface EvaluationResultsProps {
  result: EvaluationResult;
  userInfo: {
    email: string;
    organization: string;
    position: string;
  };
  responses: SurveyResponse[];
  questions: Question[];
}

export const EvaluationResults = ({ result, userInfo, responses, questions }: EvaluationResultsProps) => {
  const getICLevelColor = (level: string) => {
    const colors = {
      'IC1': 'bg-blue-500',
      'IC2': 'bg-green-500',
      'IC3': 'bg-yellow-500',
      'IC4': 'bg-orange-500',
      'IC5': 'bg-red-500',
      'IC6': 'bg-purple-500'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-500';
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { text: 'Erinomainen', color: 'text-green-500', icon: CheckCircle };
    if (score >= 60) return { text: 'Hyvä', color: 'text-blue-500', icon: TrendingUp };
    if (score >= 40) return { text: 'Tyydyttävä', color: 'text-yellow-500', icon: AlertCircle };
    return { text: 'Kehitettävä', color: 'text-orange-500', icon: AlertCircle };
  };

  return (
    <div className="min-h-screen bg-background p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="evenpay-card text-center">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Arvioinnin tulokset
            </h1>
            <div className="text-muted-foreground">
              {userInfo.position} • {userInfo.organization}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="mb-2">
                <Badge className={`${getICLevelColor(result.icLevel)} text-white px-4 py-2 text-lg`}>
                  {result.icLevel}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">IC-taso</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {result.overallScore}
              </div>
              <div className="text-sm text-muted-foreground">Kokonaispistemäärä</div>
            </div>
          </div>
        </div>

        {/* Category Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(result.categoryScores).map(([category, score]) => {
            const scoreLevel = getScoreLevel(score);
            const Icon = scoreLevel.icon;
            
            return (
              <Card key={category} className="evenpay-card border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${scoreLevel.color}`} />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{score}</span>
                    <span className={`text-sm font-medium ${scoreLevel.color}`}>
                      {scoreLevel.text}
                    </span>
                  </div>
                  <Progress value={score} className="h-2" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Answers Summary */}
        <Card className="evenpay-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Vastauksesi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {responses.map((response) => {
                const question = questions.find(q => q.id === response.questionId);
                if (!question) return null;
                
                const displayValue = Array.isArray(response.value) 
                  ? response.value.join(', ')
                  : response.value;
                
                return (
                  <div key={response.questionId} className="border-b border-border/50 pb-3 last:border-b-0">
                    <div className="text-sm text-muted-foreground mb-1">
                      {question.category}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-2">
                      {question.question}
                    </div>
                    <div className="text-sm text-foreground bg-muted/20 rounded px-3 py-2">
                      {displayValue}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground pt-8">
          Tämä arviointi on generoitu automaattisesti vastausten perusteella • Powered by <span className="font-semibold">Evenpay</span>
        </div>
      </div>
    </div>
  );
};
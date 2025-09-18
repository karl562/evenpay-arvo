import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Question, SurveyResponse } from '@/types/survey';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  value?: string | string[];
  onAnswer: (response: SurveyResponse) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLast: boolean;
}

export const QuestionCard = ({
  question,
  value,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isLast
}: QuestionCardProps) => {
  const [currentValue, setCurrentValue] = useState<string | string[]>(
    value || (question.type === 'multiselect' ? [] : '')
  );
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setCurrentValue(value || (question.type === 'multiselect' ? [] : ''));
    setError('');
  }, [question.id, value]);

  const handleValueChange = (newValue: string | string[]) => {
    setCurrentValue(newValue);
    setError('');
    onAnswer({
      questionId: question.id,
      value: newValue
    });
  };

  const handleNext = () => {
    if (question.required) {
      const isEmpty = question.type === 'multiselect' 
        ? (currentValue as string[]).length === 0
        : !currentValue || (typeof currentValue === 'string' ? currentValue.trim() === '' : String(currentValue).trim() === '');
      
      if (isEmpty) {
        setError('Tämä kenttä on pakollinen');
        return;
      }
    }
    onNext();
  };

  const isFieldEmpty = () => {
    if (question.type === 'multiselect') {
      return (currentValue as string[]).length === 0;
    }
    return !currentValue || (typeof currentValue === 'string' ? currentValue.trim() === '' : String(currentValue).trim() === '');
  };

  const renderInput = () => {
    switch (question.type) {
      case 'radio':
        return (
          <div className="space-y-3" role="radiogroup" aria-labelledby={`question-${question.id}`}>
            {question.options?.map((option, index) => (
              <label
                key={index}
                className={cn(
                  "flex items-center p-4 rounded-lg border cursor-pointer transition-all",
                  "border-border hover:border-primary/50 hover:bg-accent/20 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
                  currentValue === option && "border-primary bg-primary/10"
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={currentValue === option}
                  onChange={(e) => handleValueChange(e.target.value)}
                  className="sr-only"
                  autoFocus={index === 0 && !currentValue}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      const nextIndex = (index + 1) % (question.options?.length || 1);
                      const nextInput = e.currentTarget.parentElement?.parentElement?.children[nextIndex]?.querySelector('input') as HTMLInputElement;
                      nextInput?.focus();
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                      e.preventDefault();
                      const prevIndex = index === 0 ? (question.options?.length || 1) - 1 : index - 1;
                      const prevInput = e.currentTarget.parentElement?.parentElement?.children[prevIndex]?.querySelector('input') as HTMLInputElement;
                      prevInput?.focus();
                    }
                  }}
                />
                <div className={cn(
                  "w-4 h-4 rounded-full border-2 mr-3 transition-all",
                  currentValue === option 
                    ? "border-primary bg-primary" 
                    : "border-muted-foreground"
                )}>
                  {currentValue === option && (
                    <div className="w-full h-full rounded-full bg-primary-foreground scale-50" />
                  )}
                </div>
                <span className="text-foreground">{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'multiselect':
        return (
          <div className="space-y-3" role="group" aria-labelledby={`question-${question.id}`}>
            {question.options?.map((option, index) => (
              <label
                key={index}
                className={cn(
                  "flex items-center p-4 rounded-lg border cursor-pointer transition-all",
                  "border-border hover:border-primary/50 hover:bg-accent/20 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
                  (currentValue as string[]).includes(option) && "border-primary bg-primary/10"
                )}
              >
                <div className={cn(
                  "w-4 h-4 rounded border-2 mr-3 transition-all flex items-center justify-center",
                  (currentValue as string[]).includes(option) 
                    ? "border-primary bg-primary" 
                    : "border-muted-foreground"
                )}>
                  {(currentValue as string[]).includes(option) && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={(currentValue as string[]).includes(option)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const newValue = checked
                      ? [...(currentValue as string[]), option]
                      : (currentValue as string[]).filter(v => v !== option);
                    handleValueChange(newValue);
                  }}
                  className="sr-only"
                  autoFocus={index === 0 && (currentValue as string[]).length === 0}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      const nextIndex = (index + 1) % (question.options?.length || 1);
                      const nextInput = e.currentTarget.parentElement?.parentElement?.children[nextIndex]?.querySelector('input') as HTMLInputElement;
                      nextInput?.focus();
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      const prevIndex = index === 0 ? (question.options?.length || 1) - 1 : index - 1;
                      const prevInput = e.currentTarget.parentElement?.parentElement?.children[prevIndex]?.querySelector('input') as HTMLInputElement;
                      prevInput?.focus();
                    }
                  }}
                />
                <span className="text-foreground">{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'text':
        const shouldUseTextarea = question.question.includes('Kuvaile') || 
                                 question.question.includes('Mitkä') ||
                                 question.question.includes('Onko osaamista, jota haluaisit kehittää') ||
                                 question.question.includes('Luettele tarvittavat lisenssit') ||
                                 question.question.includes('Mitä osaamista/asiantuntijuutta työ vaatii') ||
                                 question.question.includes('Tarkenna, mitä koulutusta tarjotaan tai vaaditaan') ||
                                 question.question.includes('Minkälaista fyysistä rasitusta') ||
                                 question.question.includes('Onko työkaluja tai prosesseja, joita tulisi parantaa');
        
        return shouldUseTextarea ? (
          <Textarea
            value={currentValue as string}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder="Kirjoita vastauksesi tähän..."
            className="evenpay-input min-h-[120px] resize-none"
            rows={4}
            autoFocus
          />
        ) : (
          <Input
            type="text"
            value={currentValue as string}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder="Kirjoita vastauksesi tähän..."
            className="evenpay-input"
            autoFocus
          />
        );
      
      case 'number':
        return (
          <Input
            type="number"
            value={currentValue as string}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder="Syötä numero..."
            className="evenpay-input"
            min="0"
            autoFocus
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="evenpay-card max-w-2xl mx-auto">
      <div className="space-y-6">
        {question.category && (
          <div className="text-sm text-muted-foreground font-medium">
            {question.category}
          </div>
        )}
        
        <div>
          <h2 id={`question-${question.id}`} className="text-lg font-medium text-foreground mb-4 leading-relaxed">
            {question.question}
            {question.required && <span className="text-destructive ml-1">*</span>}
          </h2>
          
          {renderInput()}
          
          {error && (
            <p className="text-destructive text-sm mt-2">{error}</p>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="px-8"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' && !isFieldEmpty()) {
                e.preventDefault();
                handleNext();
              }
            }}
          >
            Edellinen
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={question.required && isFieldEmpty()}
            className="evenpay-button-primary px-8"
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft' && canGoPrevious) {
                e.preventDefault();
                onPrevious();
              }
            }}
          >
            {isLast ? 'Valmis' : 'Seuraava'}
          </Button>
        </div>
      </div>
    </div>
  );
};
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface ThankYouProps {
  onViewResults: () => void;
}

export const ThankYou = ({ onViewResults }: ThankYouProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="evenpay-card max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Kiitos vastaamisesta!
          </h1>
          
          <p className="text-muted-foreground leading-relaxed">
            Vastauksesi on tallennettu onnistuneesti. Arviointi käsitellään ja 
            tulokset toimitetaan organisaatiollesi.
          </p>
        </div>

        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-4">
            Demotarkoituksessa voit tarkastella arviointituloksia:
          </p>
          
          <Button
            onClick={onViewResults}
            className="evenpay-button-primary"
          >
            Näytä arvioinnin tulokset
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          Powered by <span className="font-semibold">Evenpay</span>
        </div>
      </div>
    </div>
  );
};
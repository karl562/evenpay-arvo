import { Button } from '@/components/ui/button';
import { UserInfo } from '@/types/survey';
import { Clock, Mail, Building, User } from 'lucide-react';

interface SurveyIntroProps {
  userInfo: UserInfo;
  onStart: () => void;
}

export const SurveyIntro = ({ userInfo, onStart }: SurveyIntroProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="evenpay-card max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Työtehtäväkysely
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Nimi</div>
                  <div className="text-sm font-medium">John Doe</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Organisaatio</div>
                  <div className="text-sm font-medium">{userInfo.organization}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Arvioitava positio</div>
                  <div className="text-sm font-medium">{userInfo.position}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {userInfo.daysLeft} päivää jäljellä vastaamiseen
              </span>
            </div>
          </div>


          <div className="text-left space-y-3 text-sm text-muted-foreground">
            <p>
              Tämä kysely auttaa arvioimaan työtehtäväsi vastuu- ja vaativuustasoa. 
              Vastaukset käsitellään luottamuksellisesti.
            </p>
            <p>
              Kysely kestää noin <strong>15-20 minuuttia</strong> ja sisältää kysymyksiä 
              osaamisesta, vastuista, työoloista ja työn vaativuudesta.
            </p>
          </div>
        </div>

        <Button
          onClick={onStart}
          className="evenpay-button-primary w-full md:w-auto px-12 py-3"
        >
          Aloita kysely
        </Button>

        <div className="mt-8 flex items-center justify-center gap-2">
          <img src={`${import.meta.env.BASE_URL}evenpay-logo.svg`} alt="Evenpay" className="h-6" />
        </div>
      </div>
    </div>
  );
};
import { Survey } from '@/components/survey/Survey';
import { UserInfo } from '@/types/survey';

// Mock user data from token - in real app this would be parsed from URL token
const mockUserInfo: UserInfo = {
  email: 'john.doe@evenpay.fi',
  organization: 'Evenpay Oy',
  position: 'Chief Executive Officer',
  daysLeft: 14,
  customMessage: 'Hei! Tämä kysely auttaa meitä arvioimaan roolisi vaativuutta ja varmistamaan, että kompensaatiosi on oikeudenmukainen. Vastaukset käsitellään luottamuksellisesti ja auttavat kehittämään organisaatiomme palkitsemisjärjestelmää. Kiitos ajastasi!'
};

const Index = () => {
  return <Survey userInfo={mockUserInfo} />;
};

export default Index;
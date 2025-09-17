import { SurveyResponse, EvaluationResult } from '@/types/survey';

export const calculateEvaluation = (responses: SurveyResponse[]): EvaluationResult => {
  const categoryScores: { [key: string]: number } = {
    'Tieto & taidot': 0,
    'Henkinen & fyysinen kuormitus': 0,
    'Vastuut & vaikutus': 0,
    'Työolot': 0,
    'Työn sujuvuus & esteet': 0
  };

  // Simple scoring logic for demo purposes
  responses.forEach(response => {
    const questionId = response.questionId;
    const value = response.value;
    
    // Education level scoring (1.1.1)
    if (questionId === '1.1.1') {
      const educationScores = [20, 30, 40, 60, 70, 80, 90];
      const index = (value as string[]).indexOf(value as string);
      categoryScores['Tieto & taidot'] += educationScores[index] || 50;
    }
    
    // Specialization scoring (1.2.1)
    if (questionId === '1.2.1') {
      const specializationScores = [30, 50, 70, 90];
      const options = [
        'Yleistä ja laajasti saatavilla',
        'Erikoistunutta, mutta monilla ehdokkailla', 
        'Harvinaista osaamista, rajallinen ehdokaspooli',
        'Erittäin ainutlaatuista tai niukkaa tietoa (kansallinen/globaali niukkuus)'
      ];
      const index = options.indexOf(value as string);
      categoryScores['Tieto & taidot'] += specializationScores[index] || 50;
    }
    
    // Decision making impact (3.1.1)
    if (questionId === '3.1.1') {
      const decisionScores = [10, 20, 30, 40, 60, 70, 80, 90];
      const options = [
        'Ei päätöksentekoa; tarkka ohjeiden seuraaminen',
        'Päätökset koskevat vain omaa työtä',
        'Vähäisiä päätöksiä; rajallinen vaikutus roolin ulkopuolella',
        'Päätökset vaikuttavat välittömään tiimiin/työnkulkuun',
        'Päätökset vaikuttavat pieniin projekteihin tai osaston tuloksiin',
        'Päätökset vaikuttavat useisiin tiimeihin tai toimintoihin',
        'Päätökset vaikuttavat suoraan organisaation suorituskykyyn',
        'Strategiset päätökset, joilla on laaja organisaatiovaikutus'
      ];
      const index = options.indexOf(value as string);
      categoryScores['Vastuut & vaikutus'] += decisionScores[index] || 40;
    }
    
    // Mental intensity (2.1.1)
    if (questionId === '2.1.1') {
      const intensityScores = [20, 40, 70, 90];
      const options = [
        'Harvoin (rutiinityötä)',
        'Satunnaisesti (jonkin verran analyysia/ongelmanratkaisua)',
        'Usein (päivittäin monimutkaista analyysia)',
        'Jatkuvasti (useimmat tehtävät vaativat korkeaa keskittymistä/luovuutta)'
      ];
      const index = options.indexOf(value as string);
      categoryScores['Henkinen & fyysinen kuormitus'] += intensityScores[index] || 50;
    }
  });

  // Normalize scores to 0-100 range
  Object.keys(categoryScores).forEach(category => {
    categoryScores[category] = Math.min(100, Math.max(0, categoryScores[category]));
    if (categoryScores[category] === 0) {
      categoryScores[category] = Math.floor(Math.random() * 30) + 40; // Random baseline for demo
    }
  });

  const overallScore = Math.round(
    Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / 
    Object.keys(categoryScores).length
  );

  // Determine IC level based on overall score
  let icLevel = 'IC1';
  if (overallScore >= 85) icLevel = 'IC6';
  else if (overallScore >= 75) icLevel = 'IC5';
  else if (overallScore >= 65) icLevel = 'IC4';
  else if (overallScore >= 55) icLevel = 'IC3';
  else if (overallScore >= 45) icLevel = 'IC2';

  // Generate recommendations based on scores
  const recommendations: string[] = [];
  
  if (categoryScores['Tieto & taidot'] < 60) {
    recommendations.push('Harkitse lisäkoulutusta tai sertifiointien hankkimista osaamisesi syventämiseksi.');
  }
  
  if (categoryScores['Vastuut & vaikutus'] < 60) {
    recommendations.push('Etsi mahdollisuuksia ottaa lisävastuuta projekteissa tai tiimin johtamisessa.');
  }
  
  if (categoryScores['Henkinen & fyysinen kuormitus'] > 80) {
    recommendations.push('Kiinnitä huomiota työn ja vapaa-ajan tasapainoon kuormituksen hallitsemiseksi.');
  }
  
  if (categoryScores['Työolot'] < 50) {
    recommendations.push('Keskustele esimiehen kanssa työolosuhteiden parantamismahdollisuuksista.');
  }

  if (recommendations.length === 0) {
    recommendations.push('Jatka erinomaista työtäsi ja etsi uusia haasteita kehittymisen tueksi.');
    recommendations.push('Harkitse mentoroinnin aloittamista nuorempien kollegojen tukemiseksi.');
  }

  return {
    icLevel,
    overallScore,
    categoryScores,
    recommendations
  };
};
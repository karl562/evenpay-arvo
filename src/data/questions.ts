import { Question } from '../types/survey';
export const surveyQuestions: Question[] = [
  // 1. Tieto & taidot
  {
    id: '1.1.1',
    category: 'Tieto & taidot',
    subcategory: 'Virallinen koulutus',
    type: 'radio',
    required: true,
    question: 'Minkä tasoinen virallinen koulutus tämän roolin hoitamiseen vaaditaan?',
    options: [
      'Ei vaadita virallista koulutusta',
      'Peruskoulu/lukio',
      'Ammattitutkinto tai vastaava tekninen tutkinto',
      'Ammattikorkeakoulututkinto tai vastaava erikoiskoulutus',
      'Kandidaatin tutkinto yleiseltä alalta',
      'Kandidaatin tutkinto erikoisalalta',
      'Maisterin tutkinto'
    ]
  },
  {
    id: '1.1.2',
    category: 'Tieto & taidot',
    subcategory: 'Virallinen koulutus',
    type: 'radio',
    required: true,
    question: 'Vaaditaanko tiettyjä ammatillisia lisenssejä tai sertifikaatteja?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '1.1.2b',
    category: 'Tieto & taidot',
    subcategory: 'Virallinen koulutus',
    type: 'text',
    required: false,
    question: 'Luettele tarvittavat lisenssit ja/tai sertifikaatit:',
    conditionalOn: {
      questionId: '1.1.2',
      value: 'Kyllä'
    }
  },
  {
    id: '1.2.1',
    category: 'Tieto & taidot',
    subcategory: 'Osaamisen erikoistuminen',
    type: 'radio',
    required: true,
    question: 'Onko rooliin vaadittava asiantuntijuus yleistä vai erikoistunutta?',
    options: [
      'Yleistä ja laajasti saatavilla',
      'Erikoistunutta, mutta monilla ehdokkailla',
      'Harvinaista osaamista, rajallinen ehdokaspooli',
      'Erittäin ainutlaatuista tai niukkaa tietoa (kansallinen/globaali niukkuus)'
    ]
  },
  {
    id: '1.2.2',
    category: 'Tieto & taidot',
    subcategory: 'Osaamisen erikoistuminen',
    type: 'text',
    required: true,
    question: 'Mitä osaamista/asiantuntijuutta työ vaatii tällä hetkellä?'
  },
  {
    id: '1.2.3',
    category: 'Tieto & taidot',
    subcategory: 'Osaamisen erikoistuminen',
    type: 'text',
    required: true,
    question: 'Mitkä taidot tai vahvuudet auttavat sinua suoriutumaan työstäsi parhaiten?'
  },
  {
    id: '1.3.1',
    category: 'Tieto & taidot',
    subcategory: 'Jatkuva oppiminen',
    type: 'radio',
    required: true,
    question: 'Kuinka usein tämän roolin osaamista/tietämystä täytyy päivittää?',
    options: [
      'Harvoin (5+ vuoden välein)',
      'Satunnaisesti (2–3 vuoden välein)',
      'Säännöllisesti (vuosittain)',
      'Jatkuvasti (kuukausittain/viikoittain tarvitaan oppimista)'
    ]
  },
  {
    id: '1.3.2',
    category: 'Tieto & taidot',
    subcategory: 'Jatkuva oppiminen',
    type: 'radio',
    required: true,
    question: 'Tarjotaanko tai vaaditaanko virallista koulutusta (kurssit, sertifikaatit)?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '1.3.2b',
    category: 'Tieto & taidot',
    subcategory: 'Jatkuva oppiminen',
    type: 'text',
    required: false,
    question: 'Tarkenna, mitä koulutusta tarjotaan tai vaaditaan?:',
    conditionalOn: {
      questionId: '1.3.2',
      value: 'Kyllä'
    }
  },
  {
    id: '1.3.3',
    category: 'Tieto & taidot',
    subcategory: 'Jatkuva oppiminen',
    type: 'text',
    required: false,
    question: 'Onko osaamista, jota haluaisit kehittää seuraavan vuoden aikana?'
  },
  {
    id: '1.4.1',
    category: 'Tieto & taidot',
    subcategory: 'Nykyinen työn sisältö',
    type: 'text',
    required: true,
    question: 'Kuvaile työtehtävääsi ja työpäivän / työviikon sisältöä:'
  },
  {
    id: '1.4.2',
    category: 'Tieto & taidot',
    subcategory: 'Nykyinen työn sisältö',
    type: 'text',
    required: true,
    question: 'Mitkä ovat tärkeimmät päivittäiset ja viikoittaiset tehtäväsi?'
  },
  {
    id: '1.4.3',
    category: 'Tieto & taidot',
    subcategory: 'Nykyinen työn sisältö',
    type: 'text',
    required: true,
    question: 'Mitkä tehtävät vievät eniten aikaasi?'
  },
  {
    id: '1.4.4',
    category: 'Tieto & taidot',
    subcategory: 'Nykyinen työn sisältö',
    type: 'text',
    required: true,
    question: 'Mitkä tehtävät koet kaikkein merkityksellisimmiksi yhtiön kannalta?'
  },
  // 2. Henkinen & fyysinen kuormitus
  {
    id: '2.1.1',
    category: 'Henkinen & fyysinen kuormitus',
    subcategory: 'Henkisen keskittymisen intensiteetti',
    type: 'radio',
    required: true,
    question: 'Kuinka usein tämä rooli vaatii syvää keskittymistä tai monimutkaista ongelmanratkaisua?',
    options: [
      'Harvoin (rutiinityötä)',
      'Satunnaisesti (jonkin verran analyysia/ongelmanratkaisua)',
      'Usein (päivittäin monimutkaista analyysia)',
      'Jatkuvasti (useimmat tehtävät vaativat korkeaa keskittymistä/luovuutta)'
    ]
  },
  {
    id: '2.1.2',
    category: 'Henkinen & fyysinen kuormitus',
    subcategory: 'Henkisen keskittymisen intensiteetti',
    type: 'text',
    required: true,
    question: 'Anna esimerkki roolin henkisesti vaativimmasta tehtävästä:'
  },
  {
    id: '2.2.1',
    category: 'Henkinen & fyysinen kuormitus',
    subcategory: 'Fyysinen aktiivisuus & kestävyys',
    type: 'radio',
    required: true,
    question: 'Mikä on roolin pääasiallinen fyysinen vaatimus?',
    options: [
      'Istumatyö (pääosin istuen, vähäinen liike)',
      'Kevyt aktiivisuus (satunnaista kävelyä/seisomista, kevyet nostot <10 kg)',
      'Kohtalainen aktiivisuus (seisominen/kävely suurimman osan päivästä, nostot jopa 20 kg)',
      'Fyysisesti aktiivinen suurimman osan päivästä (usein nostamista >20 kg, fyysisesti raskas työ)'
    ]
  },
  {
    id: '2.2.2',
    category: 'Henkinen & fyysinen kuormitus',
    subcategory: 'Fyysinen aktiivisuus & kestävyys',
    type: 'radio',
    required: true,
    question: 'Sisältääkö rooli pitkiä fyysisiä jaksoja ilman lepoa?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '2.3.1',
    category: 'Henkinen & fyysinen kuormitus',
    subcategory: 'Henkinen kestävyys & stressinsietokyky',
    type: 'radio',
    required: true,
    question: 'Kuinka usein rooliin kuuluu stressaavia tilanteita (määräajat, konfliktit, hätätilanteet)?',
    options: [
      'Ei koskaan',
      'Harvoin',
      'Satunnaisesti',
      'Usein',
      'Jatkuvasti'
    ]
  },
  {
    id: '2.3.2',
    category: 'Henkinen & fyysinen kuormitus',
    subcategory: 'Henkinen kestävyys & stressinsietokyky',
    type: 'text',
    required: true,
    question: 'Kuvaile roolissa esiintyviä stressaavia tilanteita:'
  },
  // 3. Vastuut & vaikutus
  {
    id: '3.1.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Päätöksenteon vaikutus',
    type: 'radio',
    required: true,
    question: 'Minkä laajuuden päätöksiä tässä roolissa tehdään?',
    options: [
      'Ei päätöksentekoa; tarkka ohjeiden seuraaminen',
      'Päätökset koskevat vain omaa työtä',
      'Vähäisiä päätöksiä; rajallinen vaikutus roolin ulkopuolella',
      'Päätökset vaikuttavat välittömään tiimiin/työnkulkuun',
      'Päätökset vaikuttavat pieniin projekteihin tai osaston tuloksiin',
      'Päätökset vaikuttavat useisiin tiimeihin tai toimintoihin',
      'Päätökset vaikuttavat suoraan organisaation suorituskykyyn',
      'Strategiset päätökset, joilla on laaja organisaatiovaikutus'
    ]
  },
  {
    id: '3.2.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Budjetti- ja resurssivastuu',
    type: 'radio',
    required: true,
    question: 'Onko roolilla budjettivastuuta?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '3.2.1b',
    category: 'Vastuut & vaikutus',
    subcategory: 'Budjetti- ja resurssivastuu',
    type: 'text',
    required: false,
    question: 'Arvioi roolisi budjettivastuun arvo vuodessa:',
    conditionalOn: {
      questionId: '3.2.1',
      value: 'Kyllä'
    }
  },
  {
    id: '3.2.2',
    category: 'Vastuut & vaikutus',
    subcategory: 'Budjetti- ja resurssivastuu',
    type: 'radio',
    required: true,
    question: 'Hallinnoidaanko roolissa materiaali-/tekniikkaresursseja (laitteet, varasto)?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '3.2.2b',
    category: 'Vastuut & vaikutus',
    subcategory: 'Budjetti- ja resurssivastuu',
    type: 'text',
    required: false,
    question: 'Mitä materiaali-/tekniikkaresursseja tehtävässäsi hallinnoidaan?',
    conditionalOn: {
      questionId: '3.2.2',
      value: 'Kyllä'
    }
  },
  {
    id: '3.3.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Esihenkilötyö & johtaminen',
    type: 'radio',
    required: true,
    question: 'Valvooko tämä rooli muita työntekijöitä?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '3.3.1b',
    category: 'Vastuut & vaikutus',
    subcategory: 'Esihenkilötyö & johtaminen',
    type: 'text',
    required: false,
    question: 'Kuinka monta suoraa alaista sinulla on?',
    conditionalOn: {
      questionId: '3.3.1',
      value: 'Kyllä'
    }
  },
  {
    id: '3.3.2',
    category: 'Vastuut & vaikutus',
    subcategory: 'Esihenkilötyö & johtaminen',
    type: 'radio',
    required: true,
    question: 'Kuinka monimutkainen valvottava tiimirakenne on?',
    options: [
      'Ei valvontaa',
      'Yksi tiimi',
      'Useita tiimejä/osastoja',
      'Koko organisaation laajuinen'
    ]
  },
  {
    id: '3.4.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Virheiden riskit ja seuraukset',
    type: 'radio',
    required: true,
    question: 'Mitkä ovat virheiden seuraukset tässä roolissa?',
    options: [
      'Vähäiset (helposti korjattavissa, pieni vaikutus)',
      'Kohtalaiset (vaikuttaa asiakkaisiin/tiimiin, joitakin kustannuksia)',
      'Merkittävät (suuret taloudelliset/oikeudelliset vaikutukset)',
      'Kriittiset (turvallisuus-/henkeä uhkaavat seuraukset)'
    ]
  },
  // 4. Työolot
  {
    id: '4.1.1',
    category: 'Työolot',
    subcategory: 'Työympäristön haasteet',
    type: 'radio',
    required: true,
    question: 'Missä rooli pääasiassa suoritetaan?',
    options: [
      'Sisätiloissa (toimisto/laboratorio)',
      'Sekä sisä- että ulkotiloissa',
      'Ulkona/kenttätyönä',
      'Muualla'
    ]
  },
  {
    id: '4.1.1b',
    category: 'Työolot',
    subcategory: 'Työympäristön haasteet',
    type: 'text',
    required: false,
    question: 'Missä muualla?',
    conditionalOn: {
      questionId: '4.1.1',
      value: 'Muualla'
    }
  },
  {
    id: '4.1.2',
    category: 'Työolot',
    subcategory: 'Työympäristön haasteet',
    type: 'multiselect',
    required: false,
    question: 'Valitse kaikki jotka kuvaavat, mitä työtehtäväsi sisältää:',
    options: [
      'Melualtistusta',
      'Äärilämpötiloja',
      'Usein matkustamista',
      'Epäsäännöllisiä/vuorotyövuoroja'
    ]
  },
  {
    id: '4.2.1',
    category: 'Työolot',
    subcategory: 'Fyysinen & psyykkinen kuormitus',
    type: 'radio',
    required: true,
    question: 'Kuinka kuormittavaa työ normaalisti on?',
    options: [
      'Ei lainkaan kuormittavaa',
      'Hieman kuormittavaa, palautuminen saman päivän aikana',
      'Merkittävän kuormittavaa; palautuminen saman viikon aikana',
      'Jatkuvaa kuormitusta; palautumista tarvitaan työajan ulkopuolella',
      'Merkittävämpää kuormitusta; usein haitallisia vaikutuksia (päänsärky, unettomuus)'
    ]
  },
  {
    id: '4.2.2',
    category: 'Työolot',
    subcategory: 'Fyysinen & psyykkinen kuormitus',
    type: 'radio',
    required: true,
    question: 'Aiheuttaako työympäristö fyysistä rasitusta?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '4.2.2b',
    category: 'Työolot',
    subcategory: 'Fyysinen & psyykkinen kuormitus',
    type: 'text',
    required: false,
    question: 'Minkälaista fyysistä rasitusta?',
    conditionalOn: {
      questionId: '4.2.2',
      value: 'Kyllä'
    }
  },
  {
    id: '4.2.3',
    category: 'Työolot',
    subcategory: 'Fyysinen & psyykkinen kuormitus',
    type: 'radio',
    required: true,
    question: 'Aiheuttaako ympäristö psyykkistä rasitusta?',
    options: [
      'Ei',
      'Kyllä'
    ]
  },
  {
    id: '4.2.3b',
    category: 'Työolot',
    subcategory: 'Fyysinen & psyykkinen kuormitus',
    type: 'text',
    required: false,
    question: 'Minkälaista psyykkistä rasitusta?',
    conditionalOn: {
      questionId: '4.2.3',
      value: 'Kyllä'
    }
  },
  {
    id: '4.3.1',
    category: 'Työolot',
    subcategory: 'Työolosuhteiden vaihtelevuus',
    type: 'radio',
    required: true,
    question: 'Kuinka vakaat työolot ovat?',
    options: [
      'Erittäin vakaat (sama paikka, sama aikataulu)',
      'Satunnaisia ennakoitavia muutoksia',
      'Säännöllisiä muutoksia, vaatii sopeutumiskykyä',
      'Suurta vaihtelevuutta; usein ennustamatonta',
      'Äärimmäinen vaihtelevuus (usein matkustamista, muuttuvia olosuhteita, epäsäännöllisiä työaikoja)'
    ]
  },
  {
    id: '4.4.1',
    category: 'Työolot',
    subcategory: 'Huippukuormitusjaksot',
    type: 'radio',
    required: true,
    question: 'Kuinka usein rooli kohtaa huippukuormituksen tai korkean stressin jaksoja?',
    options: [
      'Ei koskaan',
      'Harvoin (1–2 kertaa/vuosi)',
      'Satunnaisesti (useita kertoja/vuosi)',
      'Kuukausittain',
      'Viikoittain tai useammin'
    ]
  },
  {
    id: '4.4.2',
    category: 'Työolot',
    subcategory: 'Huippukuormitusjaksot',
    type: 'radio',
    required: true,
    question: 'Kuinka kauan huippukuormitus-, tai korkean stressin jaksot yleensä kestävät?',
    options: [
      '<1 päivä',
      '2–3 päivää',
      'Jopa 1 viikko',
      'Yli 1 viikko'
    ]
  },
  {
    id: '4.5.1',
    category: 'Työolot',
    subcategory: 'Uupumus- ja stressiriski',
    type: 'radio',
    required: true,
    question: 'Tunnistatko roolista uupumus- ja/tai stressiriskiä?',
    options: [
      'Ei riskiä',
      'Matala riski',
      'Keskisuuri riski',
      'Suuri riski'
    ]
  },
  {
    id: '4.5.2',
    category: 'Työolot',
    subcategory: 'Uupumus- ja stressiriski',
    type: 'text',
    required: true,
    question: 'Mitkä ovat tämän roolin suurimmat stressitekijät?'
  },
  // 5. Työn sujuvuus & esteet
  {
    id: '5.1.1',
    category: 'Työn sujuvuus & esteet',
    type: 'text',
    required: true,
    question: 'Mitkä asiat helpottavat työsi tekemistä?'
  },
  {
    id: '5.1.2',
    category: 'Työn sujuvuus & esteet',
    type: 'text',
    required: true,
    question: 'Mitkä asiat hidastavat tai vaikeuttavat työntekoa?'
  },
  {
    id: '5.1.3',
    category: 'Työn sujuvuus & esteet',
    type: 'text',
    required: false,
    question: 'Onko työkaluja tai prosesseja, joita tulisi parantaa?'
  }
];

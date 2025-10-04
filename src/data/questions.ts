import { Question } from '../types/survey';
export const surveyQuestions: Question[] = [
  // 1. Työtehtävien kuvaus
  {
    id: '1.0.1',
    category: 'Työtehtävien kuvaus',
    subcategory: 'Työtehtävät ja sisältö',
    type: 'text',
    required: true,
    question: 'Kuvaile työtehtävääsi ja työpäivän / työviikon sisältöä'
  },
  {
    id: '1.0.2',
    category: 'Työtehtävien kuvaus',
    subcategory: 'Päivittäiset tehtävät',
    type: 'text',
    required: true,
    question: 'Mitkä ovat tärkeimmät päivittäiset ja viikottaiset tehtäväsi?'
  },
  {
    id: '1.0.4',
    category: 'Työtehtävien kuvaus',
    subcategory: 'Ajankäyttö',
    type: 'text',
    required: true,
    question: 'Mitkä tehtävät vievät eniten aikaasi?'
  },
  {
    id: '1.0.5',
    category: 'Työtehtävien kuvaus',
    subcategory: 'Merkityksellisyys',
    type: 'text',
    required: true,
    question: 'Mitkä tehtävät koet kaikkein merkityksellisimmiksi yhtiön kannalta?'
  },
  {
    id: '1.0.6',
    category: 'Työtehtävien kuvaus',
    subcategory: 'Sidosryhmätyöskentely',
    type: 'radio',
    required: true,
    question: 'Miten vaativaa sidosryhmätyötä rooliin kuuluu?',
    options: [
      'Ei sidosryhmätyötä',
      'Vaatimatonta',
      'Kohtuullista',
      'Vaativaa',
      'Erittäin vaativaa'
    ]
  },
  // 2. Tieto & taidot
  {
    id: '1.1.1',
    category: 'Tieto & taidot',
    subcategory: 'Virallinen koulutus',
    type: 'radio',
    required: true,
    question: 'Minkä tasoinen virallinen koulutus tämän roolin hoitamiseen vaaditaan?',
    options: [
      'Ei vaadita koulutusta',
      'Ammatillinen perustutkinto, ammattitutkinto tai erikoisammattitutkinto',
      'Kandidaatin tutkinto',
      'Ammattikorkeakoulututkinto AMK',
      'Maisterin tutkinto, YAMK',
      'Muu, mikä?'
    ]
  },
  {
    id: '1.1.1b',
    category: 'Tieto & taidot',
    subcategory: 'Virallinen koulutus',
    type: 'text',
    required: false,
    question: 'Mitä muuta koulutusta vaaditaan?',
    conditionalOn: {
      questionId: '1.1.1',
      value: 'Muu, mikä?'
    }
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
      'Osaaminen kehittyy työtä tekemällä ja/tai toisilta oppimalla',
      'Harvoin (5+ vuoden välein)',
      'Satunnaisesti (2–3 vuoden välein)',
      'Säännöllisesti (vuosittain)',
      'Jatkuvasti (kuukausittain/viikoittain tarvitaan oppimista)'
    ]
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
    type: 'number',
    required: false,
    question: 'Arvioi roolisi budjettivastuun arvo vuodessa (euroina):',
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
    question: 'Onko työtehtävä työnjohdollinen tai esihenkilörooli?',
    options: [
      'Ei',
      'Kyllä, työnjohdollinen',
      'Kyllä, esihenkilörooli'
    ]
  },
  {
    id: '3.3.1b',
    category: 'Vastuut & vaikutus',
    subcategory: 'Esihenkilötyö & johtaminen',
    type: 'number',
    required: false,
    question: 'Kuinka monta suoraa alaista sinulla on?',
    conditionalOn: {
      questionId: '3.3.1',
      value: 'Kyllä, esihenkilörooli'
    }
  },
  {
    id: '3.3.2',
    category: 'Vastuut & vaikutus',
    subcategory: 'Esihenkilötyö & johtaminen',
    type: 'radio',
    required: true,
    question: 'Kuinka monitahoinen johdettava tiimirakenne on?',
    options: [
      'Ei johdettavaa',
      'Yksi tiimi',
      'Useita tiimejä/osastoja'
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
  {
    id: '3.5.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Valvonta',
    type: 'radio',
    required: true,
    question: 'Sisältääkö työ alihankinnan, laadun, lainmukaisuuden tms valvontaa?',
    options: [
      'Kyllä',
      'Ei'
    ]
  },
  {
    id: '3.6.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Hankinta & Kilpailutusprosessit',
    type: 'radio',
    required: true,
    question: 'Sisältääkö työ hankintaa tai kilpailutusprosesseja?',
    options: [
      'Kyllä',
      'Ei'
    ]
  },
  {
    id: '3.7.1',
    category: 'Vastuut & vaikutus',
    subcategory: 'Virkavelvoitteet',
    type: 'radio',
    required: true,
    question: 'Onko työ virkavelvoitteen alaista ja/tai vaatiiko se missä määrin eri lakien noudattamista',
    options: [
      'Ei vaadi poikkeuksellista/tietoista virkavelvoitteen alaista toimintaa',
      'Työtehtävä edellyttää ajoittaista virkavelvoitteen alaista toimintaa (n. 1-2 krt kuukaudessa)',
      'Työtehtävä edellyttää säännöllistä virkavelvoitteen alaista toimintaa (n. 1-2 krt viikossa)',
      'Työtehtävä edellyttää jatkuvaa virkavelvoitteen alaista toimintaa (Useammin kuin 2 krt viikossa)'
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
      'Sisätiloissa (toimisto/etätyö kotona)',
      'Kiinteistöillä kentällä',
      'Sisätiloissa ja kiinteistöillä kentällä'
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
  // 5. Työn sujuvuus & esteet
  {
    id: '5.1.2',
    category: 'Työn sujuvuus & esteet',
    type: 'text',
    required: true,
    question: 'Mitkä asiat hidastavat tai vaikeuttavat työntekoa?'
  },
];

/**
 * KESKUS-DATATIEDOSTO
 * Muokkaa täältä kaikki toistuvat tiedot: yhteystiedot, palvelut, alueet.
 * Kun vaihdat esim. puhelinnumeron tässä, se päivittyy koko sivustolle.
 */

export const site = {
  name: 'asuntoremontti.fi',
  legalName: 'Mo-ment',              // TÄYDENNÄ toiminimi
  tagline: 'Asuntoremontit Lahdessa ja Päijät-Hämeessä',
  url: 'https://asuntoremontti.fi',
  locale: 'fi_FI',
  language: 'fi',

  // --- YHTEYSTIEDOT ---
  phone: '+358465603849',
  phoneDisplay: '046 560 3849',
  email: 'info@asuntoremontti.fi',
  address: {
    street: 'Ruoriniemenkatu 4',       // TÄYDENNÄ oikea katunumero
    postalCode: '15140',
    city: 'Lahti',
    region: 'Päijät-Häme',
    country: 'FI',
    regionCode: 'FI-18',
  },
  geo: {
    latitude: 60.9827,
    longitude: 25.6612,
  },
  vatId: 'FI12345678',                 // TÄYDENNÄ Y-tunnus
  foundingYear: 1996,                  // TÄYDENNÄ — 30v kokemus → noin 1996
  priceRange: '€€',
  experienceYears: 30,

  // --- SOSIAALINEN MEDIA ---
  social: {
    facebook: '',
    instagram: '',
    googleBusiness: '',
  },

  // --- MYYNTIVÄITTEET ---
  usp: [
    'Yli 30 vuoden kokemus asuntoremontista',
    'Henkilökohtainen palvelu alusta loppuun',
    'Huolellinen ja siisti jälki',
    'Rehellinen ja selkeä hinnoittelu',
    'Kotitalousvähennys hyödynnettävissä',
  ],
} as const;

// --- PALVELUT ---
export const services = [
  {
    slug: 'keittioremontti-lahti',
    name: 'Keittiöremontti',
    shortName: 'Keittiöremontti Lahti',
    titleTag: 'Keittiöremontti Lahti | asuntoremontti.fi',
    metaDescription:
      'Keittiöremontti Lahdessa ja Päijät-Hämeessä: suunnittelu, purku, kalusteet ja viimeistely. 30 vuoden kokemuksella. Pyydä tarjous.',
    icon: 'kitchen',
    heroTitle: 'Keittiöremontti Lahdessa',
    heroLead:
      'Teen keittiöremontit alusta loppuun: suunnittelu, purku, kalusteasennus, tasot ja viimeistely. Yli 30 vuoden kokemuksella.',
    includes: [
      'Kohteen läpikäynti ja tarjous',
      'Purkutyöt ja suojaukset',
      'Kalusteasennus – kaikki suuret merkit',
      'Laatoitus ja välitilan pintakäsittelyt',
      'Kodinkoneiden asennus',
      'Siistit viimeistelyt ja loppusiivous',
    ],
    duration: '2–5 viikkoa kohteen laajuudesta riippuen',
    faq: [
      {
        q: 'Kuinka pitkään keittiöremontti kestää Lahdessa?',
        a: 'Tavallinen keittiöremontti kestää 2–4 viikkoa. Laajemmissa projekteissa, joissa muutetaan rakenteita, aikataulu voi olla 4–6 viikkoa.',
      },
      {
        q: 'Voinko käyttää kotitalousvähennystä keittiöremonttiin?',
        a: 'Kyllä. Kotitalousvähennys kattaa työn osuuden asunnon kunnossapito- ja perusparannustöistä. Erittelemme työn ja materiaalit tarjoukseen erikseen.',
      },
      {
        q: 'Hoidatko myös kalusteet?',
        a: 'Kyllä. Toimin suurten kalustemerkkien kanssa (mm. Puustelli, Topi, Petra, IKEA) ja hoidan asennuksen kokonaan puolestasi.',
      },
    ],
  },
  {
    slug: 'kylpyhuoneremontti-lahti',
    name: 'Kylpyhuoneremontti',
    shortName: 'Kylpyhuoneremontti Lahti',
    titleTag: 'Kylpyhuoneremontti Lahti | Vedeneristys & laatoitus | asuntoremontti.fi',
    metaDescription:
      'Kylpyhuoneremontti Lahdessa: purku, vedeneristys, laatoitus ja viimeistely. 30 vuoden ammattitaidolla. Pyydä tarjous.',
    icon: 'bath',
    heroTitle: 'Kylpyhuoneremontti Lahdessa',
    heroLead:
      'Kylpyhuone on kodin vaativin remonttikohde. Teen sen kerralla oikein: purku, vedeneristys, laatoitus ja viimeistely yli 30 vuoden kokemuksella.',
    includes: [
      'Kohteen läpikäynti ja kuntoarvio',
      'Purkutyöt ja jätteiden pois vienti',
      'Rakenteiden korjaus ja tasoitus',
      'Vedeneristys',
      'Laatoitus lattia ja seinät',
      'Kalusteet ja varusteet asennettuna',
      'Saumaus ja silikonointi',
      'Loppusiivous',
    ],
    duration: '3–5 viikkoa',
    faq: [
      {
        q: 'Kuinka kauan kylpyhuoneremontti kestää?',
        a: 'Tavanomainen kylpyhuone valmistuu 3–5 viikossa. Aikatauluun vaikuttavat kuivumisajat, laatoituksen laajuus ja mahdolliset rakennemuutokset.',
      },
      {
        q: 'Tarvitseeko kylpyhuoneremontti taloyhtiön luvan?',
        a: 'Kyllä. Kerrostaloasunnossa tarvitset lähes aina taloyhtiön kirjallisen luvan sekä vesieristyssuunnitelman. Autan dokumenttien laatimisessa.',
      },
    ],
  },
  {
    slug: 'huoneistoremontti-lahti',
    name: 'Huoneistoremontti',
    shortName: 'Huoneistoremontti Lahti',
    titleTag: 'Huoneistoremontti Lahti | Koko asunnon remontti | asuntoremontti.fi',
    metaDescription:
      'Huoneistoremontti Lahdessa: pintaremontit, koko asunnon uudistukset ja viimeistely. 30 vuoden kokemuksella. Pyydä tarjous.',
    icon: 'apartment',
    heroTitle: 'Huoneistoremontti Lahdessa',
    heroLead:
      'Yksittäisestä huoneesta koko asunnon uudistukseen. Hoidan remontin kokonaisuutena niin, ettei sinun tarvitse murehtia aikataulusta.',
    includes: [
      'Läpikäynti, suunnittelu ja materiaaliopastus',
      'Purkutyöt ja suojaukset',
      'Seinien ja kattojen tasoitus ja maalaus',
      'Lattiat: parketti, laminaatti, vinyyli',
      'Ovet, listat ja karmit',
      'Keittiön ja märkätilan remontit (halutessa)',
      'Loppusiivous',
    ],
    duration: '3–8 viikkoa',
    faq: [
      {
        q: 'Mitä huoneistoremonttiin kuuluu?',
        a: 'Huoneistoremontti voi olla pintaremontti (maalaus, lattiat) tai kattava koko asunnon uudistus. Räätälöin sisällön tarpeidesi mukaan.',
      },
      {
        q: 'Voinko asua asunnossa remontin aikana?',
        a: 'Kevyt pintaremontti onnistuu asuen, mutta laajemmassa remontissa suosittelen tilapäistä asumista muualla.',
      },
    ],
  },
  {
    slug: 'saunaremontti-lahti',
    name: 'Saunaremontti',
    shortName: 'Saunaremontti Lahti',
    titleTag: 'Saunaremontti Lahti | Paneelit, kiuas & lauteet | asuntoremontti.fi',
    metaDescription:
      'Saunaremontti Lahdessa: purku, paneelit, lauteet, kiuas ja valaistus. 30 vuoden ammattitaidolla. Pyydä tarjous.',
    icon: 'sauna',
    heroTitle: 'Saunaremontti Lahdessa',
    heroLead:
      'Uusin saunan ilmeen ja tekniikan: purku, rakenteet, paneelit, lauteet, kiuas ja valaistus. Teen myös pesuhuoneen samalla.',
    includes: [
      'Purku ja jätteiden pois vienti',
      'Rakenteiden tarkastus ja korjaus',
      'Alumiinipaperi ja tuuletusraot',
      'Paneelit: haapa, tervaleppä, lämpökäsitelty',
      'Lauteet mittatilaustyönä',
      'Kiuas ja ohjaukset',
      'Tunnelmavalaistus',
      'Pesuhuoneen vedeneristys ja laatoitus (halutessa)',
    ],
    duration: '2–3 viikkoa (pelkkä sauna)',
    faq: [
      {
        q: 'Mitä saunaremonttiin sisältyy?',
        a: 'Purku, mahdolliset rakennekorjaukset, höyrynsulut, paneelit, lauteet, kiuas asennuksineen ja valaistus. Halutessa hoidan samalla pesuhuoneen.',
      },
      {
        q: 'Voitko asentaa myös uuden kiukaan?',
        a: 'Kyllä. Asennan sähkökiukaat kytkentöineen. Neuvon kiuasvalinnassa saunan koon ja käyttötarpeen mukaan.',
      },
    ],
  },
  {
    slug: 'laatoitus-ja-vedeneristys-lahti',
    name: 'Laatoitus ja vedeneristys',
    shortName: 'Laatoitus Lahti',
    titleTag: 'Laatoitus & vedeneristys Lahti | asuntoremontti.fi',
    metaDescription:
      'Laatoitus ja vedeneristys Lahdessa. Huolellista työtä 30 vuoden kokemuksella. Pyydä tarjous.',
    icon: 'tile',
    heroTitle: 'Laatoitus ja vedeneristys Lahdessa',
    heroLead:
      'Vedeneristys on kylpyhuoneen kriittisin rakenne. Teen vedeneristyksen ja laatoituksen huolellisesti ja ammattitaidolla.',
    includes: [
      'Alustan tarkastus ja tasoitus',
      'Vedeneristys',
      'Laattojen suunnittelu ja katselmus',
      'Lattia- ja seinälaatoitus',
      'Saumaus ja silikonointi',
      'Ylläpito-ohjeet',
    ],
    duration: '1–2 viikkoa (yksittäinen märkätila)',
    faq: [
      {
        q: 'Voitko laatoittaa vanhan laatan päälle?',
        a: 'Joskus kyllä, mutta märkätilassa suositellaan aina vanhojen laattojen ja vedeneristyksen purkua. Kerron kohteessa mikä on järkevintä.',
      },
    ],
  },
] as const;

export type Service = (typeof services)[number];

// --- ALUEET ---
export const areas = [
  {
    slug: 'remontti-hollola',
    name: 'Hollola',
    titleTag: 'Remontti Hollola | Asuntoremontti Hollolassa | asuntoremontti.fi',
    metaDescription:
      'Asuntoremontit Hollolassa: keittiö-, kylpyhuone- ja huoneistoremontit. 30 vuoden kokemuksella. Pyydä tarjous.',
    heroTitle: 'Remontit Hollolassa',
    intro:
      'Palvelen Hollolan asukkaita kaikilla remontin osa-alueilla. Toimipisteeni Lahdessa on parinkymmenen minuutin ajomatkan päässä.',
    localContext:
      'Hollolassa erityisen kysyttyjä ovat rivi- ja omakotitalojen kylpyhuoneremontit sekä 90-luvun keittiöiden uudistukset.',
    neighborhoods: ['Salpakangas', 'Kukkila', 'Herrala', 'Nostava', 'Hämeenkoski'],
    postalCodes: ['15870', '15880', '16800', '16900', '17200'],
  },
  {
    slug: 'remontti-nastola',
    name: 'Nastola',
    titleTag: 'Remontti Nastola | Asuntoremontti Nastolassa | asuntoremontti.fi',
    metaDescription:
      'Asuntoremontit Nastolassa: keittiöremontti, kylpyhuoneremontti, huoneistoremontti. 30 vuoden kokemuksella. Pyydä tarjous.',
    heroTitle: 'Remontit Nastolassa',
    intro:
      'Nastolan alueella teen säännöllisesti kylpyhuone- ja saunaremontteja sekä keittiöiden päivityksiä. Lahdesta lyhyt ajomatka.',
    localContext:
      'Nastolan alueen omakoti- ja rivitaloissa erityisesti 80- ja 90-lukujen märkätilat tulevat nyt uusintaikään.',
    neighborhoods: ['Villähde', 'Ruuhijärvi', 'Uusikylä', 'Nastonharju'],
    postalCodes: ['15540', '15550', '15560', '15580'],
  },
  {
    slug: 'remontti-orimattila',
    name: 'Orimattila',
    titleTag: 'Remontti Orimattila | Asuntoremontti Orimattilassa | asuntoremontti.fi',
    metaDescription:
      'Asuntoremontit Orimattilassa: keittiö, kylpyhuone, sauna ja huoneistoremontit. 30 vuoden kokemuksella. Pyydä tarjous.',
    heroTitle: 'Remontit Orimattilassa',
    intro:
      'Palvelen Orimattilan asukkaita kaikilla remontin osa-alueilla. Käyn kohteessa ja annan tarjouksen ennen töiden alkua.',
    localContext:
      'Orimattilan omakotitaloalueella teen paljon kylpyhuone- ja saunauudistuksia sekä keittiön avaamisia olohuoneeseen.',
    neighborhoods: ['Keskusta', 'Artjärvi', 'Pennala', 'Luhtikylä'],
    postalCodes: ['16300', '16310', '16320', '16330'],
  },
  {
    slug: 'remontti-heinola',
    name: 'Heinola',
    titleTag: 'Remontti Heinola | Asuntoremontti Heinolassa | asuntoremontti.fi',
    metaDescription:
      'Asuntoremontit Heinolassa: keittiö-, kylpyhuone- ja huoneistoremontit. 30 vuoden kokemuksella. Pyydä tarjous.',
    heroTitle: 'Remontit Heinolassa',
    intro:
      'Toteutan Heinolan alueella keittiö-, kylpyhuone- ja huoneistoremontteja. Vapaa-ajan asuntojen remontit onnistuvat myös.',
    localContext:
      'Heinolan järvenrannan mökkikannassa on paljon 70- ja 80-luvun rakennuksia, joissa saunan ja pesutilan uusinta on ajankohtaista.',
    neighborhoods: ['Keskusta', 'Vierumäki', 'Myllyoja', 'Jyränkö'],
    postalCodes: ['18100', '18120', '18200', '19110'],
  },
] as const;

export type Area = (typeof areas)[number];

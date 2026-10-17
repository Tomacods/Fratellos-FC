export const club = {
  name: 'Fratellos Fútbol Club',
  nickname: 'El Frate',
  city: 'Comodoro Rivadavia, Chubut',
  instagram: '@fratellosfutbolclub',
  instagramUrl: 'https://www.instagram.com/fratellosfutbolclub',
  igDirectUrl: 'https://ig.me/m/fratellosfutbolclub',
  patinUrl: 'https://www.instagram.com/patin.fratellos',
};

// Liga de las Américas 2026 (Football 7 International), confirmada por @f7americas el 2/9/2026.
export const americas = {
  city: 'Porto Alegre, Brasil',
  start: '2026-11-19T00:00:00-03:00',
  end: '2026-11-23T00:00:00-03:00',
  dates: 'Del 19 al 22 de noviembre',
  sourceUrl: 'https://www.instagram.com/f7americas/p/DczF1MAgdOm/',
};

// Parches de manga: títulos y torneos publicados en la bio de Instagram.
export const titles = [
  { top: 'Serie B', bottom: 'Campeón 2025', tone: 'naranja' },
  { top: 'Serie A', bottom: 'Campeón 2025', tone: 'negro' },
  { top: 'Mundial', bottom: 'de Clubes 2025', tone: 'negro' },
  { top: 'Américas', bottom: 'Liga 2026', tone: 'naranja' },
] as const;

export type Outcome = 'ganado' | 'perdido' | 'campeon' | 'clasificado';

export interface Match {
  tournament: string;
  stage: string;
  home: string;
  away: string;
  score?: string;
  outcome: Outcome;
  scorers?: string;
  sourceLabel: string;
  sourceUrl: string;
  plate?: string;
}

export const matches: Match[] = [
  {
    tournament: 'Copa de la Liga 2026 · Liga de Honor',
    stage: 'Semifinal',
    home: 'Fratellos',
    away: 'All In',
    score: '2-3',
    outcome: 'perdido',
    scorers: 'Joaquín Pires (2)',
    sourceLabel: 'Placa oficial',
    sourceUrl: 'https://www.instagram.com/fratellosfutbolclub/p/DWed26hEZdF/',
    plate: '/img/placa-2-3.jpg',
  },
  {
    tournament: 'Copa de la Liga 2026 · Liga de Honor',
    stage: 'Cuartos de final',
    home: 'Fratellos',
    away: 'Premium FC',
    score: '3-2',
    outcome: 'ganado',
    scorers: 'Mencho Gordillo, Juanpi Mancilla, Joaquín Pires',
    sourceLabel: 'Placa oficial',
    sourceUrl: 'https://www.instagram.com/fratellosfutbolclub/p/DVwC8aUkVL1/',
    plate: '/img/placa-3-2.jpg',
  },
  {
    tournament: 'Copa de la Liga 2026 · Liga de Honor',
    stage: 'Octavos de final',
    home: 'Fratellos',
    away: 'Taller Monra',
    score: '5-1',
    outcome: 'ganado',
    scorers: 'Juanpi Mancilla, Maxi Barría, Joaquín Pires, Salva Robacio, Dani De Brito',
    sourceLabel: 'Placa oficial',
    sourceUrl: 'https://www.instagram.com/fratellosfutbolclub/p/DVe_gmPkXJR/',
    plate: '/img/placa-5-1.jpg',
  },
  {
    tournament: 'Comodoro Cup 2025 · Serie B',
    stage: 'Final (vuelta)',
    home: 'Ráfaga FC',
    away: 'Fratellos',
    outcome: 'campeon',
    scorers: 'Jorge Galván, Maximiliano Barría, Santy Hoopmann (2)',
    sourceLabel: 'Ver la final',
    sourceUrl: 'https://www.youtube.com/watch?v=gD7NS5jnpn8',
  },
  {
    tournament: 'Comodoro Cup 2025 · Serie B',
    stage: 'Final (ida)',
    home: 'Fratellos',
    away: 'Ráfaga FC',
    outcome: 'ganado',
    scorers: 'Santiago Hoopmann, sobre el final',
    sourceLabel: 'Crónica en Pasta de Campeón',
    sourceUrl:
      'https://www.pastadecampeon.com/a-dos-toques/fratellos-fc-se-corono-campeon-de-la-serie-b-en-la-comodoro-cup_a684345db4951f1bd9ff1d5d1',
  },
  {
    tournament: 'Comodoro Cup 2025 · Serie B',
    stage: 'Semifinal',
    home: 'Fratellos',
    away: 'Despreciados FC',
    outcome: 'clasificado',
    sourceLabel: 'Ver la semifinal',
    sourceUrl: 'https://www.youtube.com/watch?v=W53OT88SA_Y',
  },
];

const PASTA =
  'https://www.pastadecampeon.com/a-dos-toques/fratellos-fc-se-corono-campeon-de-la-serie-b-en-la-comodoro-cup_a684345db4951f1bd9ff1d5d1';

export type Kit = 'naranja' | 'blanca' | 'negra';

export interface Player {
  name: string;
  /** Texto arqueado en la espalda. */
  back: string;
  /** Para grupos: una espalda por apellido, en abanico. */
  backs?: string[];
  kit: Kit;
  role: string;
  category: string;
  bio: string;
  /** Dorsal real. Mientras falte, la espalda muestra el dato de `mark`. */
  dorsal?: number;
  mark: string;
  linkText: string;
  linkUrl: string;
}

export const players: Player[] = [
  {
    name: 'Víctor Villouta',
    back: 'Villouta',
    kit: 'negra',
    role: 'MVP Comodoro Cup Serie B',
    category: 'final',
    bio: 'Elegido Jugador Más Valioso en el cuadro de honor oficial tras la consagración en la Serie B.',
    mark: 'MVP',
    linkText: 'Fuente: Pasta de Campeón',
    linkUrl: PASTA,
  },
  {
    name: 'Santiago «Santy» Hoopmann',
    back: 'Hoopmann',
    kit: 'blanca',
    role: 'Figura y goleador de la final',
    category: 'final',
    bio: 'Gol sobre el final en la ida y doblete en la vuelta en Santa Lucía: tres goles en la serie final.',
    mark: '×3',
    linkText: 'Fuente: Pasta de Campeón',
    linkUrl: PASTA,
  },
  {
    name: 'Joaquín Pires',
    back: 'Pires',
    kit: 'negra',
    role: 'Goleador Copa de la Liga 2026',
    category: 'honor2026',
    bio: 'Gritó en octavos ante Taller Monra, sentenció el 3-2 a Premium FC y metió los dos goles de la semifinal.',
    mark: '×4',
    linkText: 'Crónica en Instagram',
    linkUrl: 'https://www.instagram.com/fratellosfutbolclub/p/DVwC8aUkVL1/',
  },
  {
    name: 'Facundo Ledesma',
    back: 'Ledesma',
    kit: 'blanca',
    role: 'Ala zurdo · Selección Argentina F7',
    category: 'seleccion',
    bio: 'De General Garmendia, Tucumán. Convocado a la Selección Argentina F7 para la Copa Argentina (Misiones) y la Copa Aniversario (Chubut) 2026.',
    mark: 'F7',
    linkText: 'Presentación oficial en IG',
    linkUrl: 'https://www.instagram.com/fratellosfutbolclub/reel/DdWXht6xAiE/',
  },
  {
    name: 'Maximiliano Barría',
    back: 'Barría',
    kit: 'negra',
    role: 'Goleador en la final · Camada 2025',
    category: 'final camada2025 honor2026',
    bio: 'Incorporación de la camada 2025, gol en la final ante Ráfaga FC y otro en el 5-1 a Taller Monra.',
    mark: 'GOL',
    linkText: 'Comunicado oficial',
    linkUrl: 'https://www.instagram.com/p/DGV7_tHxvL2/',
  },
  {
    name: 'Jorge Galván',
    back: 'Galván',
    kit: 'blanca',
    role: 'Abrió la final de vuelta',
    category: 'final',
    bio: 'Puso el primer gol de Fratellos en la final de vuelta en el complejo Santa Lucía.',
    mark: '1º',
    linkText: 'Fuente: Pasta de Campeón',
    linkUrl: PASTA,
  },
  {
    name: 'Facundo González y Juan Pablo Mancilla Canales',
    back: 'González · Mancilla',
    backs: ['González', 'Mancilla'],
    kit: 'negra',
    role: 'Referentes · Liga de las Américas',
    category: 'seleccion honor2026',
    bio: 'Voceros del plantel en Fair Play (100.1), impulsando la campaña rumbo a la Liga de las Américas en Brasil.',
    mark: 'BR',
    linkText: 'Nota en Fair Play',
    linkUrl: 'https://www.instagram.com/p/DeAf9VhAZGE/',
  },
  {
    name: 'Axel Igor, Franco Mansilla y Franco Morales',
    back: 'Camada 2025',
    backs: ['Igor', 'Mansilla', 'Morales'],
    kit: 'blanca',
    role: 'Incorporaciones oficiales',
    category: 'camada2025',
    bio: 'Bienvenida institucional para defender la naranja, negra y blanca en la Liga Comodoro Cup.',
    mark: '25',
    linkText: 'Comunicado oficial',
    linkUrl: 'https://www.instagram.com/p/DGV7_tHxvL2/',
  },
  {
    name: 'Maximiliano Ortiz, Emiliano Orquera y Enzo Ralil',
    back: 'Camada 2025',
    backs: ['Ortiz', 'Orquera', 'Ralil'],
    kit: 'negra',
    role: 'Incorporaciones oficiales',
    category: 'camada2025',
    bio: 'Parte de la camada presentada oficialmente por Fratellos Fútbol Club en Comodoro Rivadavia.',
    mark: '25',
    linkText: 'Comunicado oficial',
    linkUrl: 'https://www.instagram.com/p/DGV7_tHxvL2/',
  },
];

export const rosterFilters = [
  { id: 'all', label: 'Todos' },
  { id: 'final', label: 'Héroes de la final' },
  { id: 'honor2026', label: 'Copa de la Liga 2026' },
  { id: 'seleccion', label: 'Selección y Brasil' },
  { id: 'camada2025', label: 'Camada 2025' },
];

export const mainSponsor = { name: 'Timbó Store', place: 'En el pecho de la camiseta' };

export const sponsors = [
  { name: 'LV Motors', handle: 'lv_motorss' },
  { name: 'Repair JLC', handle: 'repairjlc' },
  { name: 'Zimska Vatra', handle: 'zimska.vatra.ok' },
  { name: 'Antonella Servicios', handle: 'antonellaservicios' },
  { name: 'Hangar Box & Training', handle: 'hangarboxandtraining' },
];

export const sponsorSpots = [
  { title: 'En la camiseta', text: 'Tu marca estampada en la naranja, la blanca o la negra, en la cancha y en cada placa del club.' },
  { title: 'En las redes', text: 'Presencia en las publicaciones, los resultados y las transmisiones de @fratellosfutbolclub.' },
  { title: 'En el viaje a Brasil', text: 'Acompañá al plantel que representa a Argentina en la Liga de las Américas en Porto Alegre.' },
];

export type Reason = 'sponsor' | 'jugador' | 'amistoso' | 'hincha';

export const reasons: { id: Reason; patch: string; label: string; nameLabel: string; placeholder: string }[] = [
  { id: 'sponsor', patch: 'Sumar mi marca', label: 'Quiero ser sponsor', nameLabel: 'Tu marca o comercio', placeholder: 'Ej. Tu comercio' },
  { id: 'jugador', patch: 'Probarme', label: 'Quiero probarme en el plantel', nameLabel: 'Tu nombre', placeholder: 'Ej. Lucas Pérez' },
  { id: 'amistoso', patch: 'Armar un amistoso', label: 'Partido amistoso o torneo', nameLabel: 'Tu equipo', placeholder: 'Ej. Deportivo del Barrio' },
  { id: 'hincha', patch: 'Quiero la camiseta', label: 'La camiseta o la hinchada', nameLabel: 'Tu nombre', placeholder: 'Ej. Sofi' },
];

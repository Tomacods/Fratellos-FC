// El contenido que se edita desde el panel (Pages CMS) vive en `contenido/*.json`.
// Este archivo lo lee, completa lo que se calcula solo y lo entrega con tipos a los componentes.
import titulosData from './contenido/titulos.json';
import partidosData from './contenido/partidos.json';
import plantelData from './contenido/plantel.json';
import sponsorsData from './contenido/sponsors.json';

export const club = {
  name: 'Fratellos Fútbol Club',
  nickname: 'El Frate',
  city: 'Comodoro Rivadavia, Chubut',
  instagram: '@fratellosfutbolclub',
  instagramUrl: 'https://www.instagram.com/fratellosfutbolclub',
  igDirectUrl: 'https://ig.me/m/fratellosfutbolclub',
  patinUrl: 'https://www.instagram.com/patin.fratellos',
};

/** El panel guarda los campos opcionales vacíos como "" o null: acá pasan a "sin dato". */
function texto(value: string | null | undefined): string | undefined {
  const t = value?.trim();
  return t ? t : undefined;
}

export { americas } from './americas';

// Parches de manga: títulos y torneos publicados en la bio de Instagram.
export interface Title {
  top: string;
  bottom: string;
  tone: 'naranja' | 'negro';
}

export const titles = titulosData as Title[];

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

export const matches: Match[] = (partidosData as Match[]).map((m) => ({
  ...m,
  score: texto(m.score),
  scorers: texto(m.scorers),
  plate: texto(m.plate),
}));

export type Kit = 'naranja' | 'blanca' | 'negra';

export interface Player {
  name: string;
  /** Texto arqueado en la espalda. */
  back: string;
  /** Para grupos: una espalda por apellido, en abanico. */
  backs?: string[];
  kit: Kit;
  role: string;
  /** Ids de `rosterFilters` separados por espacio. */
  category: string;
  bio: string;
  /** Dorsal real. Mientras falte, la espalda muestra el dato de `mark`. */
  dorsal?: number;
  mark: string;
  linkText: string;
  linkUrl: string;
}

type PlayerData = Omit<Player, 'category' | 'backs' | 'dorsal'> & {
  categories?: string[] | null;
  backs?: string[] | null;
  dorsal?: number | null;
};

export const players: Player[] = (plantelData as PlayerData[]).map(({ categories, backs, dorsal, ...p }) => {
  const names = (backs ?? []).map((b) => b.trim()).filter(Boolean);
  return {
    ...p,
    category: (categories ?? []).join(' '),
    backs: names.length ? names : undefined,
    dorsal: dorsal ?? undefined,
  };
});

// Si agregás o renombrás un filtro, sumalo también a las opciones de «Filtros» en `.pages.yml`.
export const rosterFilters = [
  { id: 'all', label: 'Todos' },
  { id: 'final', label: 'Héroes de la final' },
  { id: 'honor2026', label: 'Copa de la Liga 2026' },
  { id: 'seleccion', label: 'Selección y Brasil' },
  { id: 'camada2025', label: 'Camada 2025' },
];

export const mainSponsor: { name: string; place: string } = sponsorsData.main;

export const sponsors: { name: string; handle: string }[] = sponsorsData.sponsors.map((s) => ({
  name: s.name,
  handle: s.handle.trim().replace(/^@/, ''),
}));

export const sponsorSpots: { title: string; text: string }[] = sponsorsData.spots;

export type Reason = 'sponsor' | 'jugador' | 'amistoso' | 'hincha';

export const reasons: { id: Reason; patch: string; label: string; nameLabel: string; placeholder: string }[] = [
  { id: 'sponsor', patch: 'Sumar mi marca', label: 'Quiero ser sponsor', nameLabel: 'Tu marca o comercio', placeholder: 'Ej. Tu comercio' },
  { id: 'jugador', patch: 'Probarme', label: 'Quiero probarme en el plantel', nameLabel: 'Tu nombre', placeholder: 'Ej. Lucas Pérez' },
  { id: 'amistoso', patch: 'Armar un amistoso', label: 'Partido amistoso o torneo', nameLabel: 'Tu equipo', placeholder: 'Ej. Deportivo del Barrio' },
  { id: 'hincha', patch: 'Quiero la camiseta', label: 'La camiseta o la hinchada', nameLabel: 'Tu nombre', placeholder: 'Ej. Sofi' },
];

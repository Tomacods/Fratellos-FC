// Liga de las Américas 2026 (Football 7 International), confirmada por @f7americas el 2/9/2026.
// Va aparte de club.ts porque la cuenta regresiva la importa en el navegador: así no arrastra el resto del contenido.
import americasData from './contenido/americas.json';

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function rangoDeFechas(first: string, last: string): string {
  const [, m1, d1] = first.split('-').map(Number);
  const [, m2, d2] = last.split('-').map(Number);
  if (first === last) return `El ${d1} de ${MESES[m1 - 1]}`;
  if (m1 === m2) return `Del ${d1} al ${d2} de ${MESES[m2 - 1]}`;
  return `Del ${d1} de ${MESES[m1 - 1]} al ${d2} de ${MESES[m2 - 1]}`;
}

// La cuenta regresiva corre hasta el primer día y muestra «En juego» hasta que termina el último.
const firstDay = americasData.firstDay.slice(0, 10);
const lastDay = americasData.lastDay.slice(0, 10);
const endsAt = new Date(`${lastDay}T00:00:00-03:00`);
endsAt.setUTCDate(endsAt.getUTCDate() + 1);

export const americas = {
  city: americasData.city,
  start: `${firstDay}T00:00:00-03:00`,
  end: endsAt.toISOString(),
  dates: rangoDeFechas(firstDay, lastDay),
  sourceUrl: americasData.sourceUrl,
};

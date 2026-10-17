import type { Reason } from '../data/club';

export const IG_DM = 'https://ig.me/m/fratellosfutbolclub';

const SALUDO = '¡Hola Fratellos FC! 🟠⚪⚫';

export function buildMessage(reason: Reason, name: string, extra = ''): string {
  const n = name.trim();
  switch (reason) {
    case 'sponsor':
      return `${SALUDO} ${n ? `Les escribo de ${n}. ` : ''}Quiero sumar mi marca como sponsor (camiseta, redes o el viaje a Brasil). ¡Quedo atento!`;
    case 'jugador':
      return `${SALUDO} ${n ? `Soy ${n} y m` : 'M'}e gustaría probarme en el plantel.${extra ? ` Si hay lugar, me pido la ${extra}.` : ''} ¡Quedo atento!`;
    case 'amistoso':
      return `${SALUDO} ${n ? `Les escribimos de ${n}: q` : 'Q'}ueremos organizar un amistoso de fútbol 7 o invitarlos a un torneo. ¡Quedo atento!`;
    case 'hincha':
      return `${SALUDO} ${n ? `Soy ${n}. ` : ''}Quiero conseguir la camiseta oficial y sumarme a la hinchada. ¡Vamos Frate!`;
  }
}

/** Copia el texto. Devuelve false si el navegador no lo permite. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* sigue al plan B */
  }
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  } catch {
    return false;
  }
}

/** Reinicia la animación de estampado en caliente sobre un elemento. */
export function stamp(el: Element | null) {
  if (!el) return;
  el.classList.remove('estampar');
  void (el as HTMLElement).getBoundingClientRect();
  el.classList.add('estampar');
}

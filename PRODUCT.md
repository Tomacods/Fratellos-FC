# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted equally (confirmed by the club, 2026-10-17):

- **Sponsors**: local businesses in Comodoro Rivadavia deciding whether to put their brand on the shirt, the club's social media or the trip to the Liga de las Américas in Brasil.
- **Players and rival teams**: footballers who want a trial with the squad, and teams who want to organize a friendly or invite the club to a tournament.
- **Fans and community**: people in the club and around Comodoro following results, the squad and the club's history.

Most arrive from the club's Instagram (@fratellosfutbolclub), usually on a phone.

## Product Purpose

The official website of Fratellos Fútbol Club ("El Frate"), a competitive Fútbol 7 club in Comodoro Rivadavia, Chubut (Patagonia, Argentina). It shows the club's record, squad and sponsors, and routes every contact (sponsorship, trials, friendlies, shirts and fans) to an Instagram DM. Success means sponsors write in, players ask for trials, and fans find the club's history and current campaign in one place.

## Positioning

A young club (the crest reads 20·24) that has already won Serie B and Serie A of the Comodoro Cup in 2025, played the Mundial de Clubes 2025, and is confirmed as Argentina's representative at the Liga de las Américas 2026 (Football 7 International) in Porto Alegre, Brasil, 19–22 November 2026, which carries US$200,000 in prizes. Its pitch: a local brotherhood ("fratellos") punching above its age, travelling to compete at continental level, and asking local businesses to back it for that trip.

## Operating Context

- Home ground: Complejo Santa Lucía, Comodoro Rivadavia (Cancha 1).
- Competitions: Liga Comodoro Cup (Serie B, Serie A, Liga de Honor / Copa de la Liga), organized by @torneosyeventos_sport; Mundial de Clubes 2025; Liga de las Américas 2026.
- Matches get streamed by GOAT Producciones, written up by Pasta de Campeón, and covered on Fair Play (radio 100.1).
- The club has a patín artístico branch (@patin.fratellos).
- All contact goes through Instagram DM (https://ig.me/m/fratellosfutbolclub). There is no email, phone or form backend.

## Capabilities and Constraints

- Astro 4 + Tailwind CSS 3, static output, deployed on Vercel (`vercel.json`). One page: `src/pages/index.astro`.
- Existing interactions to keep: the roster filter (by category) and the IG message builder (name + reason → copy to clipboard → open the IG DM).
- No CMS: content lives as data arrays in the page frontmatter.

## Brand Commitments

- Name: Fratellos Fútbol Club; nickname "El Frate"; handle @fratellosfutbolclub.
- Colors: naranja, negro y blanco (orange, black and white). The fans' sign-off is 🟠⚪️⚫️ and "¡VAMOS FRATE!".
- Crest: a black roundel lettered "FRATELLOS / FÚTBOL CLUB" around an inner disc with an orange sector, white-and-black vertical stripes and a hand, dated 20·24. Use the real crest only; never redraw it.
- Kits: orange home shirt; white shirt with an orange-and-black chest band; black shirt with thin orange pinstripes. Main shirt sponsor: Timbó Store.
- Instagram voice: short, emotional match reports in Rioplatense Spanish ("¡A semifinales con el corazón!", "Con la frente en alto y el orgullo intacto", #pasoapaso).

## Evidence on Hand

- Crest (150px, from the IG profile) and club photos downloaded from the IG with the club's permission (2026-10-17): team photo in the Timbó Store kit, players holding shirts at the radio 100.1 studio, Facundo Ledesma, a match-day photo at Santa Lucía, and the club's own result posts (5-1, 3-2, 2-3).
- Titles: Campeón Serie B Comodoro Cup 2025 (final against Ráfaga FC at Santa Lucía; scorers Jorge Galván, Maximiliano Barría, Santy Hoopmann ×2); Campeón Serie A 2025 (from the IG bio); Mundial de Clubes 2025 (participation); Liga de las Américas 2026 (confirmed by @f7americas, 2 Sept 2026).
- Liga de Honor / Copa de la Liga 2026 (the club's first time in the top division): round of 16, 5-1 against Taller Monra; quarter-final, 3-2 against Premium FC; semi-final, 2-3 against All In → top four in its debut.
- People: Víctor Villouta (MVP, Serie B); Santy Hoopmann; Facundo Ledesma (Selección Argentina F7); Maximiliano Barría; Jorge Galván; Joaquín Pires; Juanpi Mancilla; Facundo González; the 2025 intake (Axel Igor, Franco Mansilla, Franco Morales, Maximiliano Ortiz, Emiliano Orquera, Enzo Ralil).
- Current sponsors (IG bio, confirmed to list): Timbó Store, LV Motors (@lv_motorss), Repair JLC (@repairjlc), Zimska Vatra (@zimska.vatra.ok), Antonella Servicios (@antonellaservicios), Hangar Box & Training (@hangarboxandtraining). No logo files on hand; show them as type.
- Absent, do not invent: Serie A 2025 final details, the result of the Aug 2026 Liga de Honor final first leg against La Roca, sponsorship prices or packages, fan or sponsor testimonials, follower or attendance figures beyond the IG count.

## Product Principles

1. Every contact path ends in an Instagram DM; never add a channel the club doesn't run.
2. Show the record with facts the club has published, and link to the source (YouTube, Pasta de Campeón, IG).
3. Brasil 2026 is the current story. Tie the sponsor ask to that trip.
4. Speak like the club does on Instagram: Rioplatense Spanish, short, proud, never corporate.
5. It must load fast and read well on a phone coming from Instagram.

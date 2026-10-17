---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: landing (src/pages/index.astro)

Scope: the whole one-page site. Mode: Persuade.

Audience, weighted equally: local sponsors, players or rival teams, and fans, mostly arriving from Instagram on a phone.
Job: understand in seconds that El Frate is a 2024 Comodoro club, champion in 2025, going to the Liga de las Américas 2026 in Porto Alegre, then act.
Action: open an Instagram DM with a prepared message (sponsor / trial / friendly / fan or shirt). The working form is in the first viewport (one-tap reason patches) and in full at the close (name + reason, live preview, copy, open DM).
Proof: titles (Serie B and Serie A 2025, Mundial de Clubes 2025, Liga de las Américas 2026), the 2026 Copa de la Liga results (5-1, 3-2, 2-3), the 2025 Serie B final, named players, real kit photos, current sponsors as type.
Constraints: Astro + Tailwind static; keep the roster filter and the IG message builder; real crest only; no invented numbers, prices or testimonials.

Chosen direction: La Camiseta. Memorable moment: typing your name and watching it heat-press onto the back of the shirt you pick (naranja, blanca or negra), arched over a dorsal, before the DM opens. The preview defaults to the white shirt because it is the one that reads against the black pinstripe ground of that section; the black kit gets a white piping outline when picked.

Unresolved: real dorsal numbers for the roster (data field left empty, stat shown instead); a high-resolution crest file (150px on hand); sponsor logos (shown as type).

## Direction contract

THESIS: The page is cut from El Frate's three shirts; every section is one of them and the crest sits on the chest. It refuses the dark sports template with a hero photo, neon accent and card grid.

OWN-WORLD: White dry-fit mesh, orange #F4500A home weave, black shirt with thin orange pinstripes, black rib-knit collar. Type is vinyl: Big Shoulders Display for chest bands, arched names and outlined dorsals, Archivo for reading. Components are kit parts: sleeve patches with stitched edges for titles and filters, heat-press vinyl buttons, a jock tag, a care label. Spacing comes from the 12px pinstripe pitch.

STORY: Visitors see a champion club heading to Brasil, read the record as a ruled match sheet, meet the squad as shirt backs and the sponsors as lockups, then print their own name on the shirt and DM the club.

FIRST VIEWPORT: Rib collar nav across the top. The real crest centered below a V-neck. A full-bleed chest band: orange "DE COMODORO", black "A PORTO ALEGRE", thin orange rule. Under it one line of copy and three heat-press reason patches that open the DM. Title patches on the sleeves, the jock tag countdown at the hem.

FORM: Club kit system, #4 of 7 on my list; seed:97028fd17d002359. Signature: heat-press name builder; motion is steps(2) stamping, no fades.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

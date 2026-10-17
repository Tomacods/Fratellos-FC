---
name: Fratellos Fútbol Club
description: The official site of El Frate, cut from the club's three shirts.
colors:
  naranja: "#F4500A"
  naranja-hondo: "#C23F06"
  negro: "#121110"
  negro-tela: "#1C1A18"
  blanco: "#FFFFFF"
  tinta: "#121110"
  tinta-suave: "#4F4A45"
typography:
  display:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 6.4vw + 0.5rem, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 5.4vw + 1rem, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "0.005em"
  title:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 900
    lineHeight: 1
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  caption:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.1em"
rounded:
  hilo: "2px"
  vinilo: "4px"
  etiqueta: "6px"
  parche: "10px"
  redondo: "999px"
spacing:
  u: "12px"
  u2: "24px"
  gutter: "16px"
  gutter-sm: "24px"
  section-top: "80px"
  section-top-lg: "96px"
  section-bottom: "96px"
  container: "78rem"
components:
  button-vinilo:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.vinilo}"
    padding: "12px 22px"
    height: "52px"
  button-vinilo-hover:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.negro}"
  button-vinilo-naranja:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.negro}"
    typography: "{typography.label}"
    rounded: "{rounded.vinilo}"
    padding: "12px 22px"
    height: "52px"
  button-vinilo-naranja-hover:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
  button-vinilo-borde-hover:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.negro}"
  parche-negro:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.parche}"
    padding: "10px 16px 11px"
  parche-naranja:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.negro}"
    rounded: "{rounded.parche}"
    padding: "10px 16px 11px"
  parche-blanco:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.parche}"
    padding: "10px 16px 11px"
  filtro:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.parche}"
    padding: "10px 18px"
    height: "44px"
  filtro-activo:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
  input-estampa:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.vinilo}"
    padding: "12px 16px"
    height: "56px"
  marcador-ganado:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.negro}"
    rounded: "{rounded.vinilo}"
    padding: "6px 12px"
    height: "44px"
  marcador-campeon:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.vinilo}"
  etiqueta-jock:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.etiqueta}"
    padding: "10px 16px 10px 10px"
  nav-cuello-cta:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.negro}"
    rounded: "{rounded.vinilo}"
    padding: "8px 14px"
    height: "40px"
---

# Design System: Fratellos Fútbol Club

## Overview

**Creative North Star: "La Camiseta"**

The site is cut from El Frate's three shirts. Every section is one of them: the white dry-fit with its orange-and-black chest band, the orange home weave, and the black shirt with thin orange pinstripes, closed top and bottom by a black rib-knit collar. Surfaces are fabric, not panels. Each carries a faint staggered mesh perforation, and the black shirt carries an orange pinstripe every 24px. The crest sits on the chest under a V-neck.

Type is vinyl. Big Shoulders Display, condensed and set at 900, is used for everything pressed onto the shirt: chest bands, section titles, names, dorsals, button lettering. Archivo carries the reading text. Components are kit parts and keep their garment logic: embroidered sleeve patches with a stitched inner edge for titles and filters, matte heat-press vinyl for buttons, a jock tag at the hem, a hang tag for the sponsor ask, a care label for the footer. Motion is a heat press. State changes land in two hard frames (`steps(2, end)`) and never fade.

Density is generous and athletic: big condensed type over wide fabric fields, with reading copy held to 48–62ch. The system rejects the generic dark sports template (hero photo, neon accent, card grid). Black here is a shirt with pinstripes, never an empty dark mode.

**Key Characteristics:**
- Three kit fabrics as section grounds: white mesh, orange mesh, black pinstripe; rib knit for header and footer.
- Strict club tricolor: naranja, negro, blanco. No fourth hue.
- Condensed uppercase vinyl display type over a variable-width grotesque for reading.
- Garment components: stitched patches, vinyl buttons, jock tag, hang tag, care label.
- 12px pinstripe pitch as the spacing unit.
- Two-frame stamp motion, no fades or eases.

## Colors

The palette is the club's kit and nothing else: one hot orange, a warm near-black and pure white, each also used as a fabric.

### Primary
- **Naranja Local (Home Orange)**: the home shirt. It grounds the squad section, the hang tag and the selected filter or reason patch, and it is the one hover color for vinyl buttons. It also does the small accent jobs: the 3px collar piping under the nav, focus rings, selection, caret and the pinstripe thread (at 30% alpha) on the black shirt.
- **Naranja Hondo (Deep Orange)**: orange set as text on white, where full naranja would be too weak to read (the "¡Vamos Frate!" sign-off on the care label).

### Neutral
- **Negro Camiseta (Shirt Black)**: the black shirt ground, rib collar, the black half of the chest band, the jock tag, the default vinyl button. It is warm (#121110), never pure #000.
- **Negro Tela (Cloth Black)**: a single step lighter, used only for hover on black kit parts (jock tag, filter patch).
- **Blanco (White)**: the white dry-fit shirt ground, the photo-print borders, the field fill of the name input.
- **Tinta (Ink)**: body text on white and orange. It has the same value as Shirt Black, so text is printed in the shirt's own black.
- **Tinta Suave (Soft Ink)**: secondary copy, captions and status lines on white.

On black, secondary text is white at fixed alphas: 0.80 for lead copy, 0.65–0.72 for labels and captions, 0.22 for table rules.

### Named Rules
**The Three Shirts Rule.** Every surface is naranja, negro or blanco, each in its fabric treatment. No grays as grounds, no gradients between colors, no fourth hue.

**The Orange Is Thread Rule.** On black, orange appears as thread (pinstripes, piping, rules, outlines, the next-match frame). Solid orange blocks on black are reserved for the call to action, wins and the active selection.

## Typography

**Display Font:** Big Shoulders Display Variable (with Arial Narrow, sans-serif)
**Body Font:** Archivo Variable with its width axis (with system-ui, sans-serif)

**Character:** Big Shoulders reads like cut vinyl lettering on a match shirt: tall, condensed, heavy. Archivo is a plain sports grotesque, and its width axis is narrowed slightly (88–96%) for leads and data lines so they sit close to the vinyl.

### Hierarchy
- **Display** (900, clamp(3.25rem, 6.4vw + 0.5rem, 5.75rem), 0.86): the chest band only. On the orange band it is white with a black outline stroke (0.09em, painted under the fill). On the black band it is plain white.
- **Headline** (900, clamp(3rem, 5.4vw + 1rem, 5.75rem), 0.88): section titles, uppercase and balanced, as if printed across the back.
- **Title** (900, 1.75rem, 1): player names, the club name on the care label, the countdown. Smaller titles use 800 at 1.5rem (table caption, form legends, hang-tag items).
- **Body** (400, 1.0625rem, 1.55): reading copy, 48–62ch. The hero lead scales up to 1.25rem at 96% width.
- **Label** (800, 1.25rem, 0.04em, uppercase): vinyl buttons, the patch question, nav links (700, 1.125rem, 0.06em).
- **Caption** (Archivo 600–700, 0.75–0.8125rem, 0.08–0.1em, uppercase): table headers, form field labels, jock-tag lines. These are functional labels attached to data or fields.

### Named Rules
**The Vinyl Rule.** Anything that would be pressed onto a shirt (titles, names, numbers, button lettering, patch text) is set in Big Shoulders, uppercase. Anything you read as a sentence is set in Archivo, sentence case; only short caption labels on data and fields go uppercase in Archivo.

**The Tabular Score Rule.** Scores, countdowns and dorsal numbers use tabular figures.

## Layout

There is one centered container (78rem) with 16px gutters, or 24px from 640px up. Sections are full-bleed fabric bands that stack with no gaps: each shirt runs edge to edge and its content sits in the container. Section padding is 80px top (96px from 1024px) and 96px bottom. Section openers put the headline and lead side by side on a 12-column grid at 1024px and stack below that.

The spacing unit is the 12px pinstripe pitch (`--u`). Most gaps between controls are 12px, the black shirt's stripes repeat every 24px, and the chest-band padding is a multiple of the unit. Stacked header offsets use `scroll-padding-top: 72px` for the sticky 60px collar.

Responsive behavior: on desktop the sleeve patches sit at the hero's left and right edges, tilted ±5deg. On mobile they wrap into a centered row under the copy. The squad grid has three columns from 1024px and auto-fill (min 260px) between, and on phones it becomes a horizontal scroll-snap strip of shirt backs at 82% width. Below 768px the match sheet changes from a table into stacked two-column rows with the score at the right, but its columns stay fixed. The reason patches sit two per row on phones and four per row from 768px.

## Elevation & Depth

Depth is physical. Fabric objects sit on fabric and cast soft, low drop shadows the way a patch or a tag would: tight contact shadow plus a short, negative-spread blur. There are no floating cards or glows. Photos are printed with a thick white border and a slight rotation (−1.5 to 2deg), like prints pinned to the kit room wall. Outlines are drawn as inset box-shadows, the cut edge of vinyl, not as CSS borders.

### Shadow Vocabulary
- **Patch contact** (`0 1px 1px rgb(0 0 0 / 0.25), 0 6px 14px -8px rgb(0 0 0 / 0.5), inset 0 1px 0 rgb(255 255 255 / 0.12)`): embroidered patches and filter patches.
- **Vinyl cut edge** (`inset 0 0 0 3px <fill>, inset 0 0 0 4px rgb(255 255 255 / 0.26)`): the inner cut line of a heat-press button.
- **Hanging object** (`0 24px 40px -24px rgb(0 0 0 / 0.9)`): care label, form panel, next-match frame. These are objects that hang or lie on the shirt.
- **Print** (`0 18px 30px -16px rgb(0 0 0 / 0.9)`): bordered photos.

### Named Rules
**The Stitched Edge Rule.** Kit parts carry a 1.5px dashed inner border, inset 4–8px, at 30–50% opacity of the current color. This is the pespunte that tells a patch from a box. Dashed rules also separate sponsor lockups and hang-tag items.

## Shapes

Corners follow the garment part. Vinyl (buttons, inputs, scores) is cut almost square (4px). Embroidered patches and filters are rounded (10px), with a 7px stitched inner edge. The jock tag uses 6px. The care label and the form panel are square at the top and rounded at the bottom (2px 2px 10px 10px), like a sewn-in label. The hang tag has clipped top corners (28px chamfer) and a punched eyelet. Crests, kit swatches and the kit selector are full circles or pills. The V-neck is a literal triangle at the top of the hero.

## Components

### Buttons (heat-press vinyl)
Matte, flat and pressed on, not glossy.
- **Shape:** nearly square cut (4px), at least 52px tall, 12px 22px padding, 20px inline SVG icon with a 10px gap.
- **Primary (black vinyl):** shirt black with white lettering in the label style. It flips to orange with black lettering on hover.
- **Orange vinyl:** orange with black lettering. It flips to white on hover. Used where the ground is black, and for the main form submit.
- **Outline vinyl:** transparent with a 2px inset outline in the current color. It fills orange on hover.
- **Hover / Focus / Active:** color changes in two frames (120ms `steps(2, end)`). Pressing shifts the button down 1px. Focus is a 3px orange outline at 3px offset; on orange grounds it switches to black.
- **Nav CTA:** a smaller orange vinyl (40px, 8px 14px) with the Instagram glyph. It turns white on hover.

### Sleeve Patches (chips)
- **Style:** embroidered patch in one of the three fabrics, 10px radius, stitched inner edge, patch contact shadow. Two lines: top line 900 at 1.375rem, bottom line 700 at 0.8125rem with 0.08em tracking.
- **Use:** titles and tournaments on the hero sleeves.
- **Filter variant:** a white-mesh patch, 44px tall. Hover goes to cloth black. Pressed (`aria-pressed`) goes to black mesh with white text.
- **Reason variant (form):** black patch with a faint inset line. Hover adds an orange line. When checked it becomes orange mesh with black text.

### Inputs / Fields
- **Style:** a white field (4px radius, 56px tall) with an inset 2px top shadow. Typed text is set in vinyl (800, 1.5rem), so the name already looks printed. The placeholder is Archivo 500.
- **Focus:** a 3px orange outline at 2px offset. While focused, the shirt preview turns to show its back.
- **Labels:** caption style, uppercase, white at 72% on black.
- **Kit selector:** pill radio buttons, each holding a circular swatch of the fabric. The checked pill gets a 2px orange inset ring.

### Navigation (rib collar)
A sticky 60px rib-knit bar with the 3px orange piping line beneath it. On the left are the crest and the club name in vinyl, with "F.C." in orange. On desktop the links are vinyl (700, 1.125rem) in white at 78%. On hover they turn full white and an orange 2px underline draws across in two frames. Below 1024px the links are hidden and only the brand and the orange CTA remain.

### Match Sheet (signature)
A ruled table on the black pinstripe. Headers are captions over a 2px white rule, rows are separated by 1px white rules at 22%, and the columns never shift. The score badge (4px, 96px min width) is the only element whose look depends on the result: orange for a win, white for the title, a 2px orange outline when the team qualified, a 2px white outline at 55% for a loss.

### Jock Tag / Hang Tag / Care Label (signature)
- **Jock tag:** a black 6px tag at the hem with the crest, two caption lines and the countdown in orange vinyl.
- **Hang tag:** an orange-mesh card with clipped corners, an eyelet and a cord. It holds the sponsor ask, with its items separated by dashed rules.
- **Care label:** a woven white label (fine horizontal ribbing) with an orange loop on top and a stitched edge. It sits in the footer and holds the club's details, the tricolor dots and the sign-off.

### Shirt Builder (signature)
SVG shirts in the three models share one set of part classes (body, collar, piping, cuffs, chest band, name, dorsal, crest). Each model maps the parts to its own colors. Name and dorsal are vinyl with two layers (fill plus an outer outline). New text stamps on with a 180ms two-frame animation (scale 1.06 to 1, opacity 0.25 to 1).

## Do's and Don'ts

### Do:
- **Do** make every section ground one of the three fabrics (white mesh, orange mesh, black pinstripe), with rib knit for the header and footer.
- **Do** set pressed-on text in Big Shoulders Display, uppercase, 800–900, and reading text in Archivo at 1.0625rem / 1.55.
- **Do** derive gaps and stripe pitch from the 12px unit.
- **Do** animate state changes with `steps(2, end)` at 120ms (180ms for stamping), and honor reduced motion.
- **Do** give kit parts their stitched 1.5px dashed inner edge and soft contact shadow.
- **Do** use the real crest image only, always in a circle.
- **Do** draw icons as inline SVG with a 1.75 stroke and round caps.

### Don't:
- **Don't** introduce a fourth hue, gray grounds, or gradients between kit colors.
- **Don't** use eased fades, slides or blur transitions. State lands in two frames.
- **Don't** build card grids with generic rounded panels. Containers are garment parts (patch, tag, label, sheet).
- **Don't** use pure #000 or tinted grays for black; use the warm shirt black.
- **Don't** put full-strength naranja text on white for body copy; use deep orange or ink.
- **Don't** redraw or recolor the crest.

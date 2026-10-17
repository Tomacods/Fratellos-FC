# Fratellos Fútbol Club ("El Frate") — Sitio oficial

Sitio oficial de **Fratellos Fútbol Club**, fútbol 7 competitivo de Comodoro Rivadavia, Chubut (Patagonia Argentina): campeón de la Serie B y la Serie A 2025 de la Comodoro Cup y representante argentino en la Liga de las Américas 2026 en Porto Alegre.

Hecho con **Astro + Tailwind CSS**, sale como sitio estático y se despliega en **Vercel**.

## Diseño: «La Camiseta»

Toda la página está armada con las tres camisetas del club:

| Sección | Camiseta | Qué muestra |
|---|---|---|
| Inicio | Blanca | Escudo, banda naranja y negra «De Comodoro a Porto Alegre», botones de contacto y cuenta regresiva a Brasil |
| Campaña | Negra rayada | Liga de las Américas 2026 y planilla de resultados con su fuente |
| Plantel | Naranja | Cada jugador como la espalda de una camiseta, con filtro por categoría |
| Sponsors | Blanca | Timbó Store en la banda del pecho, el resto de los sponsors y «Sumá tu marca» |
| Contacto | Negra rayada | «Estampá tu nombre»: arma el mensaje y abre el chat de Instagram |

Todo el contacto va por **DM de Instagram** ([@fratellosfutbolclub](https://www.instagram.com/fratellosfutbolclub)): los botones copian un mensaje listo y abren el chat.

## Desarrollo local

```bash
npm install
```

```bash
npm run dev
```

Para probar la versión de producción:

```bash
npm run build
```

```bash
npm run preview
```

## Dónde se edita cada cosa

El contenido no está en el HTML: está todo en [`src/data/club.ts`](src/data/club.ts).

| Querés cambiar… | Editá en `club.ts` |
|---|---|
| Datos del club y links de Instagram | `club` |
| Fechas y sede de la Liga de las Américas (la cuenta regresiva sale de acá) | `americas` |
| Parches de títulos del inicio | `titles` |
| Resultados de la planilla | `matches` |
| Jugadores del plantel | `players` |
| Filtros del plantel | `rosterFilters` |
| Sponsors | `mainSponsor` y `sponsors` |
| Formas de ser sponsor | `sponsorSpots` |
| Motivos de contacto | `reasons` |

Los textos de los mensajes de Instagram están en [`src/scripts/mensajes.ts`](src/scripts/mensajes.ts).

### Jugadores

Cada jugador tiene un campo `kit` (`'naranja'`, `'blanca'` o `'negra'`) que define la camiseta. La espalda muestra el campo `mark` (por ejemplo `MVP` o `×3`) mientras no tenga dorsal. **Cuando tengas el número real**, agregalo en `dorsal` y la espalda pasa a mostrarlo:

```ts
{
  name: 'Víctor Villouta',
  back: 'Villouta',
  kit: 'negra',
  dorsal: 10, // ejemplo: poné el número real
  mark: 'MVP',
  // ...
}
```

Para un grupo (por ejemplo una camada de incorporaciones), `backs` recibe un apellido por camiseta y se muestran en abanico.

### Imágenes

Van en [`public/img/`](public/img/). El escudo (`escudo.jpg`) es de 150 px, bajado del perfil de Instagram: si conseguís uno en alta resolución, reemplazalo con el mismo nombre.

## Estructura

```
src/
  pages/index.astro      Arma la página con las secciones
  layouts/Base.astro     <head>, tipografías y telas SVG compartidas
  components/
    Cuello.astro         Navegación (el cuello acanalado)
    Pecho.astro          Inicio
    Planilla.astro       Campaña y resultados
    Plantel.astro        Plantel y filtro
    Sponsors.astro       Sponsors
    Estampa.astro        Contacto «Estampá tu nombre»
    Etiqueta.astro       Pie (etiqueta de lavado)
    Camiseta.astro       Espalda de camiseta en SVG
    Telas.astro          Texturas de tela compartidas
    Icon.astro           Íconos
  data/club.ts           Todo el contenido
  scripts/mensajes.ts    Mensajes de Instagram y copiado
  styles/kit.css         Colores, texturas y piezas del sistema visual
```

Las tipografías (Big Shoulders Display y Archivo) se sirven desde el propio sitio vía `@fontsource-variable`, sin depender de Google Fonts.

## Documentación de diseño

- [`PRODUCT.md`](PRODUCT.md): quién es el club, a quién le habla la web y qué datos se pueden publicar.
- [`DESIGN.md`](DESIGN.md): colores, tipografía, componentes y reglas del sistema visual.

## Despliegue en Vercel

Importar el repositorio `Tomacods/Fratellos-FC` desde el panel de Vercel, que detecta Astro solo (la config está en [`vercel.json`](vercel.json)). Con el repo conectado, cada push a `main` dispara un deploy nuevo.

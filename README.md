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

## Panel de edición (Pages CMS)

El club edita el contenido solo, desde el navegador y sin tocar código, con [Pages CMS](https://pagescms.org) (gratis y open source). Cada vez que alguien guarda en el panel se hace un commit en `main` y Vercel publica la web nueva en uno o dos minutos.

Qué se edita desde el panel:

| Sección del panel | Archivo |
|---|---|
| Resultados | [`src/data/contenido/partidos.json`](src/data/contenido/partidos.json) |
| Plantel | [`src/data/contenido/plantel.json`](src/data/contenido/plantel.json) |
| Sponsors (principal, el resto y las formas de sumarse) | [`src/data/contenido/sponsors.json`](src/data/contenido/sponsors.json) |
| Liga de las Américas (sede y fechas: la cuenta regresiva y el texto «Del … al …» salen de acá) | [`src/data/contenido/americas.json`](src/data/contenido/americas.json) |
| Parches del inicio | [`src/data/contenido/titulos.json`](src/data/contenido/titulos.json) |

Los formularios (etiquetas, ayudas y opciones de cada campo) están en [`.pages.yml`](.pages.yml). Si agregás un campo a un JSON, sumalo también ahí: el panel reescribe el archivo con los campos del formulario y borra los que no conoce.

### Ponerlo en marcha (una sola vez)

1. Subir estos cambios a `main`.
2. Entrar a [app.pagescms.org](https://app.pagescms.org) con la cuenta de GitHub dueña del repo.
3. Instalar la GitHub App de Pages CMS y darle acceso solo a `Tomacods/Fratellos-FC`.
4. Abrir el repo en el panel y comprobar que aparecen las cinco secciones.
5. En los colaboradores del repo, invitar por email a quien va a editar. No necesita cuenta de GitHub: entra con el link que le llega al mail.

### Lo que queda en el código

[`src/data/club.ts`](src/data/club.ts) lee los JSON, completa lo que se calcula solo y los entrega con tipos a los componentes. Ahí siguen, fuera del panel, los datos fijos del club y los links de Instagram (`club`), los filtros del plantel (`rosterFilters`: si agregás uno, sumalo también a las opciones de «Filtros» en `.pages.yml`) y los motivos de contacto (`reasons`). Los textos de los mensajes de Instagram están en [`src/scripts/mensajes.ts`](src/scripts/mensajes.ts).

### Jugadores

Cada jugador tiene una camiseta (`kit`: naranja, blanca o negra). La espalda muestra la marca (`mark`, por ejemplo `MVP` o `×3`) mientras no tenga dorsal; cuando se carga el número real en `dorsal`, la espalda pasa a mostrarlo. Para un grupo (por ejemplo una camada de incorporaciones), `backs` recibe un apellido por camiseta y se muestran en abanico.

### Imágenes

Van en [`public/img/`](public/img/); las que se suben desde el panel (por ejemplo las placas de resultados) quedan ahí también. El escudo (`escudo.jpg`) es de 150 px, bajado del perfil de Instagram: si conseguís uno en alta resolución, reemplazalo con el mismo nombre.

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
  data/contenido/*.json  Contenido que se edita desde el panel
  data/club.ts           Lee el contenido y lo entrega con tipos
  data/americas.ts       Fechas de la Liga de las Américas (también la usa la cuenta regresiva)
  scripts/mensajes.ts    Mensajes de Instagram y copiado
  styles/kit.css         Colores, texturas y piezas del sistema visual
```

Las tipografías (Big Shoulders Display y Archivo) se sirven desde el propio sitio vía `@fontsource-variable`, sin depender de Google Fonts.

## Documentación de diseño

- [`PRODUCT.md`](PRODUCT.md): quién es el club, a quién le habla la web y qué datos se pueden publicar.
- [`DESIGN.md`](DESIGN.md): colores, tipografía, componentes y reglas del sistema visual.

## Despliegue en Vercel

Importar el repositorio `Tomacods/Fratellos-FC` desde el panel de Vercel, que detecta Astro solo (la config está en [`vercel.json`](vercel.json)). Con el repo conectado, cada push a `main` dispara un deploy nuevo.

# DEFiNEd Photographics — website

Astro + Decap CMS + Netlify. Zie het plan voor de volledige context en het
stappenplan tot livegang: `~/.claude/plans/mijn-vrouw-heeft-haar-zippy-barto.md`.

## Commands

| Command             | Action                                       |
| :------------------- | :------------------------------------------- |
| `npm install`         | Installeert dependencies                      |
| `npm run dev`         | Start lokale dev server op `localhost:4321`   |
| `npm run build`       | Bouwt de site naar `./dist/`                  |
| `npm run preview`     | Bekijk de build lokaal, zoals in productie    |
| `npx decap-server`    | Start de lokale CMS-backend (los terminalvenster, naast `npm run dev`) |

## CMS lokaal testen

1. `npx decap-server` in een apart terminalvenster.
2. `npm run dev` in een ander terminalvenster.
3. Ga naar `http://localhost:4321/admin/` — Decap detecteert de lokale server automatisch (`local_backend: true` in `public/admin/config.yml`) en vraagt niet om in te loggen.

## Nog te doen vóór livegang

- **Placeholder-content vervangen**: KVK-nummer, adres en teksten in `src/content/site/nl/site.md`, homepage-teksten, prijzen, en de 3 placeholder-portfoliofoto's in `src/content/gallery/`.
- **Logo & kleuren**: zodra deze binnen zijn, alleen `src/styles/global.css` (het `@theme`-blok) en `public/logo-placeholder.svg` / `public/favicon.svg` aanpassen.
- **`site` in `astro.config.mjs`**: staat nu op een placeholder-domein (`https://www.definedphotographics.nl`) — pas aan naar het definitieve domein zodra bekend (nodig voor de sitemap en canonical URLs).
- **Juridische teksten**: privacybeleid en algemene voorwaarden bevatten nu placeholder-tekst.
- Zie het stappenplan voor de Netlify/Identity/Git Gateway-koppeling en DNS-overdracht bij YourName.

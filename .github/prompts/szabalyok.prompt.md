---
name: szabalyok
description: mindig tartsd be a következő szabályokat, amikor válaszolsz a kérdésekre
---

<!-- Tip: Use /create-prompt in chat to generate content with agent assistance -->

Te most a foci bajnokság információs oldal frontend implementációjában segítesz. 
Minden kódgenerálásnál tartsd szem előtt a következő szempontrendszert (pontozás szerint):

1. Specifikáció, adatmodell és komponensek már készen vannak, az implementációra koncentrálj.

2. Reszponzív megjelenés:
   - Alkalmazd a következő Tailwind technikákat:
     1. Mobile-first megközelítés (alapértelmezetten mobil layout, tablet és desktop breakpointok a `md:` és `lg:` prefixekkel)
     2. Legalább 3 breakpoint (mobil, tablet, desktop)
     3. Flexbox vagy CSS Grid Tailwind osztályokkal (`flex`, `grid`, `grid-cols-*`, `gap-*`)
     4. Responsive tipográfia Tailwind szintaxissal (`text-sm`, `text-lg`, `md:text-xl`, `lg:text-2xl`, stb.)

3. Design token rendszer és konzisztens megjelenés:
   - Használj Tailwind konzisztens szín- és spacing rendszert.
   - Színrendszer: primary, secondary, background, text, accent (Tailwind `bg-*`, `text-*` osztályokkal)
   - Tipográfiai skála Tailwind text osztályokkal (pl. `text-xl`, `md:text-2xl`)
   - Konzisztens spacing (`p-*`, `m-*`, `gap-*`), egységes grid / flex spacing

4. Akadálymentesség:
   - Használj szemantikus HTML elemeket (`header`, `nav`, `main`, `section`, `footer`, `button`)
   - Tartsd a heading-hierarchiát (`h1–h6`, szintugrás nélkül)
   - Használj ARIA attribútumokat ahol szükséges (`aria-label`, `aria-live`, stb.)
   - Biztosítsd a megfelelő kontrasztot szöveg és háttér között (min. 4.5:1), Tailwind `text-*` és `bg-*` osztályokkal

Fontos:
- Minden kódgenerálásnál kövesd a fentieket.
- Mindig figyelj a pontozási szempontokra.
- A kód legyen tiszta, olvasható, reszponzív és konzisztens a Tailwind design tokenekkel.
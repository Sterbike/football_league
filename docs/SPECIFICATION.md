# SPECIFICATION.md

## Projekt leírás

Az alkalmazás egy foci bajnokság információs weboldal, amely lehetővé teszi a felhasználók számára,
hogy megtekintsék a csapatokat, játékosokat, mérkőzéseket, tabellát és statisztikákat.

Az oldal célja, hogy egy könnyen kezelhető felületen jelenítse meg egy labdarúgó bajnokság adatait.
Az alkalmazás elsősorban sportkedvelőknek, szurkolóknak és statisztikák iránt érdeklődőknek szól.

Az oldal reszponzív webalkalmazásként készül, amely böngészőből használható.


## Funkcionális követelmények

### Felhasználó modul

- Csapatok listázása
- Játékosok listázása
- Mérkőzések megtekintése
- Tabella megjelenítése
- Statisztikák megtekintése

### Admin modul

- Csapat hozzáadása
- Játékos hozzáadása
- Mérkőzés hozzáadása
- Eredmény módosítása
- Játékos statisztika módosítása

### Navigáció

- Főoldal
- Csapatok oldal
- Játékosok oldal
- Mérkőzések oldal
- Tabella oldal
- Bejelentkezés oldal


## Nem-funkcionális követelmények

- Frontend: React
- Backend: Node.js + Express
- Adatbázis: MongoDB
- Stílus: TailwindCSS
- Reszponzív design
- Gyors betöltés
- Egyszerű navigáció
- REST API használata


## Felhasználói szerepkörök

### Vendég (User)

- Megtekintheti az adatokat
- Böngészheti a csapatokat
- Megnézheti a tabellát
- Megnézheti a mérkőzéseket

### Admin

- Új csapat létrehozása
- Új játékos létrehozása
- Mérkőzés rögzítése
- Eredmény módosítása
- Statisztikák módosítása


## Képernyő lista / Sitemap

- /home — főoldal
- /teams — csapatok
- /players — játékosok
- /matches — mérkőzések
- /table — tabella
- /login — bejelentkezés
- /admin — admin panel

Navigáció:

Home → Teams → Players → Matches → Table → Login → Admin
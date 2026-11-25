# Mapa de components i ajudes

Els noms que comencen en majúscula són components. Es fan servir amb JSX, per exemple `<TargetaMaterial material={objecte} />`. React rep un objecte de props i executa el component per obtenir una descripció de la vista. Les props es llegeixen, no es modifiquen.

| Fitxer | Funció | Entrada | Sortida i responsabilitat | Estat |
| --- | --- | --- | --- | --- |
| src/targeta-material.jsx | TargetaMaterial({ material }) | Un material vàlid | JSX d’una targeta, amb disponibilitat calculada | H1 |
| src/llista-materials.jsx | LlistaMaterials({ materials }) | Array, pot ser buit | JSX d’una llista o missatge buit | H2 |
| src/resum-cataleg.jsx | ResumCataleg({ materials }) | Array, pot ser buit | JSX amb els quatre recomptes | H2 |
| src/dades.js | nouCataleg() | Cap argument | Array nou amb quatre objectes nous | Proporcionada |
| src/consultes.js | resumCataleg(cataleg) | Array vàlid | Objecte { materials, unitats, prestades, disponibles }, tots números | Proporcionada, fase C |
| src/app.jsx | App() | Cap prop utilitzada | Pàgina composta i distribució de les dades | Proporcionat |
| src/main.jsx | createRoot(...).render(...) | Contenidor root i App | Inicia la interfície | Cablejat proporcionat |

`materials` al retorn de `resumCataleg` és un recompte de tipus, mentre que la prop `materials` és un array. No confonguis `ResumCataleg` (component amb majúscula) amb `resumCataleg` (funció de càlcul amb minúscula).

H1 es prova al destacat, sense H2. La llista H2 reutilitza H1. El resum H2 només necessita l’ajuda proporcionada. No hi ha persistència, reserva d’estoc, peticions ni gestió d’esdeveniments.

`index.html`, `src/main.jsx`, `vite.config.js`, `package.json`, `package-lock.json` i `src/estils.css` estan preparats. Edita `src/app.jsx` i `src/dades.js` només per a les proves temporals indicades. `enunciat.md` i aquest mapa són documentació.

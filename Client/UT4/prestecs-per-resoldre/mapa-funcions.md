# Mapa de funcions - UT4

| Fase | Fitxer que edites | Funcions que completes | Què necessita |
| --- | --- | --- | --- |
| A | validacio.js | validaSollicitud | Cap ajuda pròpia |
| B | cataleg.js | cercaMaterial, afegeixMaterial | comprovaMaterial proporcionada; cercaMaterial pròpia |
| C | consultes.js | disponibles, etiquetes, resumCataleg | Cap fase prèvia |
| D | actualitzacio.js | actualitzaPrestades | cercaMaterial de B |
| E | prestec.js | constructor, pendent, retorna, estaTancat | Cap fase prèvia |
| F | politiques.js, servei.js | ordinari, aula, projecte, autoritza | A+B i registre politiques proporcionat |
| G | proves.js, proves.md | provesPropies | Les funcions de les fases que proves, a l’objecte t |

Les entrades, retorns, errors i efectes de cada funció són a enunciat.md i al comentari del fitxer. No confonguis un helper proporcionat amb una funció pendent.

## Proporcionat, no cal editar

- dades.js: nouCataleg() crea dades noves. A Console: taller.nouCataleg().
- suport.js: comprovaMaterial(material) valida un material sense modificar-lo; no comprova duplicats.
- app.js: entrada() llegeix els tres camps com a text; accions selecciona el cas de cada botó; els gestors mostren resultat o error i creen window.taller per a Console. No conté solucions de les fases.
- index.html i estils.css: interfície, sense lògica que hagis de reconstruir.
- package.json: declara mòduls per executar les comprovacions amb Node; no hi ha dependències per instal·lar. Al navegador, type="module" és el que activa els mòduls.

Els botons B-E usen casos fixos; A i F usen els inputs. Un botó és una demostració, no totes les proves necessàries.

# Taller UT4 - Préstecs de material

Un únic projecte per a les fases A-G, en parelles. No és la pràctica individual P2. Les dades són fictícies. Els botons són casos de prova: cada clic comença amb un catàleg nou i no desa préstecs.

## Posada en marxa

Descomprimeix el ZIP una vegada. Obre la carpeta prestecs amb l’editor i serveix-la per HTTP amb el servidor local habitual. No obris index.html des de file://. Alternativa amb Python: `python3 -m http.server 8000 --bind 127.0.0.1`, executada dins la carpeta. python3 inicia Python, -m executa el mòdul http.server, 8000 és el port i --bind limita l’accés a aquest ordinador. Obre http://127.0.0.1:8000/index.html. Ctrl+C atura el servidor.

index.html carrega app.js amb type="module". Les línies export/import estan preparades. `export` exposa un nom i `import { nom } from "./fitxer.js"` el recupera d’un altre fitxer. Mantén aquests noms i rutes. Al bloc 6 aprofundirem en els mòduls.

A Console, les funcions són a `taller`: per exemple, `taller.nouCataleg()` i `taller.validaSollicitud(dades)`. app.js proporciona aquest pont perquè les funcions dels mòduls no són globals automàticament. Si no existeix taller, revisa errors de càrrega i imports. Desa i recarrega després d’editar. Si repeteixes declaracions const a Console, recarrega abans.

Un missatge «Pendent A/B/…» és intencionat: substitueix el cos de la funció indicada. Importar una funció pendent no l’executa. Pots provar una fase sense haver acabat les posteriors. No canviïs dades.js, suport.js, app.js, HTML o CSS per superar una prova.

## Dades i regles comunes

| id | nom | categoria | total | prestades | disponibles |
| --- | --- | --- | ---: | ---: | ---: |
| MAT-001 | Portàtil | tecnologia | 8 | 3 | 5 |
| MAT-002 | Càmera | audiovisual | 4 | 4 | 0 |
| MAT-003 | Projector | audiovisual | 3 | 1 | 2 |
| MAT-004 | Micròfon | audiovisual | 6 | 0 | 6 |

Disponibles és un càlcul (total - prestades), no un camp desat. Total inicial: 4 materials, 21 unitats, 8 prestades i 13 disponibles. Només treballam les categories tecnologia i audiovisual.

Els camps del formulari són textos: `{ materialId: " mat-001 ", quantitat: "2", dies: "3" }`. `dades` és el nom del paràmetre que rep aquest objecte, no una variable que hagis de cercar a dades.js. app.js el construeix llegint els inputs. A Console també pots crear-lo directament.

## Ajudes proporcionades

Només hi ha dues ajudes de lògica. La resta són les funcions que completaràs o el cablejat visual.

- `nouCataleg()` a dades.js: no rep arguments; retorna un array nou i quatre objectes nous a cada crida; no modifica cap dada externa i no llança errors en l’ús previst.
- `comprovaMaterial(material)` a suport.js: retorna el mateix objecte si és vàlid, o llança Error; no modifica dades. Exigeix id, nom i categoria textuals no buits; id net i en majúscules; categoria coneguda; total enter ≥ 1 i prestades enter entre 0 i total. No comprova duplicats ni normalitza el material. Només cal a B.

Per exemple: `taller.comprovaMaterial({id:"MAT-005",nom:"Tauleta",categoria:"tecnologia",total:2,prestades:0})`. La funció valida, però no afegeix l’objecte al catàleg.

## Fase A - Validar una sol·licitud (65 min)

**Edita:** validacio.js, `validaSollicitud(dades, diesMax = 14)`. **Dependències:** cap funció pròpia ni ajuda del projecte.

Rebutja una entrada que no sigui objecte, els camps materialId/quantitat/dies absents, no textuals o buits, una quantitat no entera o menor d’1 i dies no enters o fora d’1 a diesMax. diesMax també ha de ser un enter positiu. Primer comprova tipus i buit; després converteix amb Number. No acceptis el buit com a zero.

Retorna `{materialId, quantitat, dies}`, amb id net en majúscules i quantitat/dies numèrics. No modifiquis l’entrada. No comprovis encara si existeix el material o si hi ha estoc.

**Prova:** botó A amb els camps de la pàgina. Resultat inicial MAT-001, 2, 3. A Console: `taller.validaSollicitud({materialId:"MAT-001",quantitat:"1",dies:"8"}, 7)` ha de llançar Error. Prova també null, nom buit, quantitat "", "0", "1.5", "abc" i dies "1", "14", "15". Distribució orientativa: 10 min de casos, 40 de codi, 15 de comprovació.

## Fase B - Catàleg (55 min)

**Edita:** cataleg.js. **Dependències:** comprovaMaterial proporcionada; cercaMaterial la fas tu i la reutilitzes a afegeixMaterial. No depèn d’A.

- `cercaMaterial(cataleg, id)` rep un catàleg vàlid i un identificador exacte. Retorna l’objecte original trobat o null, sense modificar res. No retornis null fins que hagis acabat de cercar.
- `afegeixMaterial(cataleg, material)` valida amb comprovaMaterial, rebutja un id repetit i afegeix l’objecte al mateix array. Retorna la nova longitud. Cap canvi si es produeix un error.

**Prova:** el botó B cerca MAT-003 i afegeix MAT-005 Tauleta, tecnologia, total 2, prestades 0. Esperat: Projector, longitud 5. A Console, crea un catàleg amb `const cat = taller.nouCataleg()` i prova primer/últim/absent/array buit, afegeix dues vegades el mateix id i introdueix prestades > total. Després d’un error, la longitud no canvia. 10 min de proves, 30 de codi, 15 de contrast.

## Fase C - Consultes i agregació (90 min)

**Edita:** consultes.js. **Dependències:** cap fase prèvia; nouCataleg només per a dades de prova. Reben un catàleg vàlid i no modifiquen l’array ni els objectes.

- `disponibles(cataleg, categoria = "totes")`: usa filter; retorna els materials amb alguna unitat lliure i, si s’indica categoria, només els d’aquella categoria. Les proves usen totes/tecnologia/audiovisual.
- `etiquetes(cataleg)`: usa map; retorna textos exactes com `MAT-001: Portàtil`, en ordre.
- `resumCataleg(cataleg)`: usa reduce amb valor inicial per als totals; retorna `{materials, unitats, prestades, disponibles}`. materials és la longitud, no la suma d’unitats.

**Prova:** botó C. Audiovisual disponible: MAT-003 i MAT-004; totes: MAT-001, MAT-003 i MAT-004. Resum 4, 21, 8, 13. Amb []: llistes buides i quatre zeros. Afegeix dues preguntes pròpies amb some i every i explica every sobre []. Si acabes, ordena una còpia per disponibilitat sense canviar el catàleg original. 15 min d’elecció, 50 de codi, 25 de proves.

## Fase D - Actualitzar sense mutar (65 min)

**Edita:** actualitzacio.js, `actualitzaPrestades(cataleg, id, n)`. **Dependència:** cercaMaterial de B, importada. n és un nombre, no text.

Rebutja un material inexistent i n no enter o fora de 0 a total. Retorna un array nou amb un objecte nou per al material actualitzat. Els materials sense canvis poden conservar les referències. No modifiquis mai les dades anteriors, tampoc quan hi ha error.

**Prova:** botó D actualitza MAT-001 a 4. Abans continua amb 3; després té 4. Els arrays i els objectes actualitzats són diferents amb !==. El segon material pot conservar identitat. Prova n 0, 8, 9, -1, 1.5 i id absent. 10 min de predicció, 35 de codi, 20 de proves.

## Fase E - Classe Prestec (80 min)

**Edita:** prestec.js. **Dependències:** cap fase prèvia. La classe representa un préstec concret; no consulta existències ni actualitza el catàleg.

- `constructor(materialId, quantitat)`: id string no buit, que es neteja i passa a majúscules; quantitat numèrica entera ≥ 1. Crea propietats materialId, quantitat i retornades (0).
- `pendent()`: retorna quantitat - retornades, sense modificar res.
- `retorna(quantitat = 1)`: exigeix enter positiu no superior al pendent; incrementa retornades i retorna el nou pendent. Un error no canvia l’estat.
- `estaTancat()`: retorna true quan pendent és zero i false en cas contrari.

**Prova:** botó E crea 3 unitats, retorna 1 i després 2; esperat inicial 3, parcial 2, final 0, tancat true. A Console: `const p = new taller.Prestec("MAT-001", 3)`. Prova dues instàncies, retorns 0, -1, 1.5 i massa grans, i un retorn després de tancar. Les propietats són públiques en aquest model: no les reassignis directament; la protecció amb camps privats és una ampliació, no un requisit ocult. 15 min de disseny, 45 de codi, 20 de proves.

## Fase F - Mòduls i Strategy (85 min)

**Edita:** politiques.js i servei.js. **Dependències:** validaSollicitud d’A, cercaMaterial de B i les tres polítiques que completes ara. Les importacions i el registre politiques estan proporcionats.

Cada política rep una sol·licitud ja normalitzada i retorna booleà, sense modificar dades:

| Política | Condició |
| --- | --- |
| ordinari | Fins a 7 dies |
| aula | Fins a 1 dia |
| projecte | Fins a 14 dies i com a màxim 2 unitats |

`autoritza(cataleg, dades, nomPolitica)` valida dades amb A, cerca amb B, comprova unitats lliures, verifica el nom propi del registre amb Object.hasOwn i executa la funció seleccionada. Si qualsevol condició falla, llança Error. Retorna `{materialId, quantitat, dies, politica}`. No reserva, no modifica el catàleg ni crea una instància de Prestec.

**Prova:** botó F amb MAT-001, 2, 3: ordinari accepta, aula rebutja, projecte accepta. MAT-002 amb quantitat 1 sempre es rebutja per manca d’estoc. Projecte amb 3 unitats i 8 dies es rebutja. Prova nom desconegut i `toString` a Console: error. Comprova que el catàleg no canvia. Si acabes, afegeix una política demostracio de 2 dies al registre i al selector sense canviar el servei. 15 min de dependències, 45 de codi, 25 de proves.

## Fase G - Provar i documentar (60 min)

**Edita:** proves.js i proves.md. provesPropies(t) rep el conjunt de funcions del taller i retorna un array de resultats. Hi ha un exemple mínim; completa almenys tres proves pròpies (límit, error i seqüència), amb cas, esperat, obtingut i correcte. El botó G les executa. No cal importar altres funcions: són propietats de t.

Intercanvia casos amb una altra parella. Registra entrada, resultat esperat, obtingut, causa i correcció. Mostra una pausa de depurador i explica una variable que justifiqui el diagnòstic. Si no trobes errors, provoca’n un de controlat en una còpia i repara’l. No calculis l’esperat amb la mateixa funció que proves. 15 min de casos, 25 de comprovació i 20 de justificació.

## Què no cal implementar

No cal crear una interfície nova, persistència, API de servidor, dates de calendari ni React en aquest projecte. Les fases validen i calculen sobre dades de prova. No és un sistema real de reserves i no comprova concurrència. React tindrà un projecte separat.

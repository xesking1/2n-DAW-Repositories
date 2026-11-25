# Registre de proves - UT4

Les proves següents s'han executat sobre les implementacions de les fases A-G.

| Fase i cas | Entrada | Esperat | Obtingut | Causa i correcció |
| --- | --- | --- | --- | --- |
| A - normalització | `(" mat-001 ", "2", "3")` | `{materialId:"MAT-001", quantitat:2, dies:3}` | Coincideix | Es neteja l'identificador i es converteixen els nombres després de validar els textos. |
| A - quantitat fraccionària | `quantitat:"1.5"` | Error | Error | `Number.isInteger` rebutja la fracció. |
| A - límit de dies | `dies:"15"` amb màxim 14 | Error | Error | Es comprova el rang inclusiu d'1 a `diesMax`. |
| B - cerca | `MAT-003` | Objecte Projector | Objecte Projector | La cerca recorre per identificador i retorna la mateixa referència. |
| B - duplicat | Afegir `MAT-005` dues vegades | Error i longitud sense canvis | Error i longitud sense canvis | La validació i la comprovació de duplicats es fan abans de `push`. |
| C - disponibilitat | Catàleg inicial, totes | MAT-001, MAT-003, MAT-004 | Coincideix | `filter` selecciona materials amb `total > prestades`. |
| C - resum | Catàleg inicial | 4, 21, 8, 13 | Coincideix | `reduce` acumula els quatre totals amb valors inicials a zero. |
| C - catàleg buit | `[]` | Llistes buides i quatre zeros | Coincideix | `filter`, `map` i `reduce` amb inicial gestionen l'array buit. |
| D - còpia | MAT-001, `n=4` | Array i material actualitzat nous; original intacte | Coincideix | `map` i spread creen una còpia només per a l'element seleccionat. |
| E - seqüència | Préstec de 3; retorns d'1 i 2 | Pendents 3, 2, 0; tancat | Coincideix | L'estat només s'incrementa després de validar el retorn. |
| F - política ordinari | MAT-001, 2 unitats, 3 dies | Autoritzat | Coincideix | Hi ha estoc i la política admet fins a 7 dies. |
| F - política aula | MAT-001, 2 unitats, 3 dies | Error | Error | La política d'aula només admet fins a 1 dia. |
| F - manca d'estoc | MAT-002, 1 unitat | Error | Error | No hi ha unitats disponibles. |
| G - límit, error i seqüència | Vegeu `provesPropies(t)` | 3 resultats correctes | 3 resultats correctes | Casos amb esperats definits independentment de les funcions provades. |

## Depuració

La implementació valida les dades abans de fer-les servir. A la fase A, inspecciona `dades`, `materialId`, `quantitat` i `dies`: així es pot distingir un text buit d'un zero i comprovar el valor després de `Number`.

A la fase B, si un afegiment falla, inspecciona el resultat de `cercaMaterial` abans de `push`; la longitud del catàleg ha de continuar igual. A la fase D, compara les referències amb `!==`: l'array i l'objecte actualitzat són nous, mentre que els materials no afectats poden conservar la referència.

A la fase E, inspecciona `retornades` i `pendent()` abans i després d'un retorn invàlid: l'estat no ha de canviar. A la fase F, comprova en aquest ordre la sol·licitud normalitzada, la política pròpia del registre, el material, l'estoc i el resultat de la política.

## Abast

Les proves cobreixen els contractes descrits a `enunciat.md`. No proven persistència, concurrència, API, calendari ni una aplicació real de reserves, perquè no formen part de l'activitat.

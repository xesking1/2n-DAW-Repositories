# Mapa de funcions

| Fase | Fitxer | Funció | Rep | Retorna / efecte |
| --- | --- | --- | --- | --- |
| A | src/esdeveniments.js | connectaControls | Res | Connecta ajuda i recompte |
| B | src/esdeveniments.js | connectaDelegacio | Res | Connecta un listener al contenidor |
| C | src/formulari.js | llegeixInscripcio | HTMLFormElement | Inscripcio sense normalitzar |
| C–D | src/formulari.js | connectaFormulari | Res | Connecta submit i input |
| D | src/validacio.js | normalitzaInscripcio | Inscripcio | Còpia normalitzada |
| D | src/validacio.js | esCodiValid | string | boolean |
| D | src/validacio.js | validaInscripcio | Inscripcio normalitzada | Objecte de missatges per camp |
| Proporcionada | src/formulari.js | mostraErrors | Formulari i objecte errors | Neteja i mostra errors al DOM |
| E | tests/validacio.test.js | test / expect | Casos i resultats | Comprovacions de Vitest |
| F | src/react/app.jsx | App | Res | JSX amb estat |

JSDoc descriu els camps d'Inscripcio a validacio.js. No cal recordar les signatures: consulta-les des del lloc de la crida amb Ctrl+Maj+Espai o F12.

app.js crida les tres funcions de connexió una sola vegada. React importa directament les regles; no rep un objecte genèric amb totes les funcions.

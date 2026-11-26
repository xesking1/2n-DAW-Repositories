# Inscripcions a tallers - UT5

Descomprimeix el paquet una vegada. Tot el treball A–F es fa aquí. No s'envien ni es guarden dades personals. Utilitza dades fictícies.

## Preparació

Node 20.19 o posterior compatible. A la terminal de VS Code, dins la carpeta que conté package.json:

```sh
npm ci
npm run dev
```

Obre l'adreça local indicada per Vite. La pàgina inicial és JavaScript; /react.html és React. Ctrl+C atura Vite. No obris els HTML amb file://. La configuració i src/app.js ja connecten els mòduls: no hi dupliquis crides. En començar, les funcions pendents no resolen els exercicis. El test inicial falla fins a implementar esCodiValid.

## Contracte de les dades

Inscripcio conté sis cadenes (nom, correu, codi, tallerId, modalitat, torn) i un booleà (accepta). Tots els camps existeixen; el torn pot ser una cadena buida. El JSDoc de src/validacio.js descriu aquest tipus. Consulta les funcions passant-hi el ratolí, amb F12 i amb Ctrl+Maj+Espai dins una crida.

Cas vàlid:

```javascript
const dades = {
    nom: "Aina",
    correu: "aina@example.test",
    codi: "AB1234",
    tallerId: "WEB",
    modalitat: "presencial",
    torn: "mati",
    accepta: true
};
```

Regles: nom de 2 a 60 caràcters després de trim; correu obligatori amb format comprovat per type="email"; codi exactament dues majúscules A–Z i quatre dígits; taller WEB o FOTO; modalitat presencial o en-linia; si és presencial, torn mati o tarda; acceptació obligatòria. En línia no s'exigeix torn. No es comprova l'existència real del correu, ni disponibilitat de places.

## A. Controls que responen - 35 minuts

Edita connectaControls() a src/esdeveniments.js. #ajuda mostra una instrucció a #missatge. L'input #cerca actualitza #comptador amb la longitud actual. No cal cercar tallers. Selecciona els esdeveniments adequats i justifica'ls. Prova teclat, clic, enganxat i esborrat. app.js ja crida aquesta funció una vegada.

## B. Delegació - 30 minuts

Edita connectaDelegacio() al mateix fitxer. Un únic listener a #opcions selecciona #tallerId a partir del data-taller del botó i anuncia la selecció a #missatge. Ha de funcionar clicant el span interior i ignorant espais sense botó. closest i contains permeten identificar i comprovar el botó. Afegeix temporalment un altre botó WEB: no ha de necessitar un nou listener.

## C. Formulari i lectura - 45 minuts

Revisa els name, label i restriccions d'index.html. Implementa llegeixInscripcio(formulari) a src/formulari.js amb FormData. Ha de retornar l'objecte del contracte, sense normalitzar ni validar. Implementa connectaFormulari(): escolta submit, evita navegar amb preventDefault i mostra les dades a Console. Encara no connectis la validació pendent.

Prova el cas vàlid, un correu incorrecte i Enter. HTML invàlid bloqueja submit. Per comprovar camps desmarcats, llegeix FormData a Console sense enviar: has("accepta") serà false. No afegeixis novalidate.

## D. Regles i missatges - 75 minuts

A src/validacio.js:

- normalitzaInscripcio(dades): còpia amb trim de nom, correu i codi. No muta l'original ni canvia majúscules.
- esCodiValid(codi): rep text normalitzat i retorna un booleà. Usa el patró complet.
- validaInscripcio(dades): rep una Inscripcio normalitzada i retorna un objecte de missatges per camp; {} sense errors propis. No accedeix al DOM ni modifica dades. El format del correu correspon a HTML, no a aquesta funció.

A src/formulari.js, completa submit amb lectura, normalització, validació i mostraErrors(formulari, errors). Aquesta darrera funció ja està implementada. Object.keys(errors).length permet decidir si hi ha errors. Mostra el resultat a #resultat i enfoca el primer control amb error propi. Conserva els valors.

Després del primer submit que supera HTML, revisa els errors propis amb input. Esborra el missatge d'èxit quan s'editen dades. Opcional: escolta invalid amb captura per anunciar que HTML ha bloquejat l'intent; no cal substituir els missatges natius.

Reserva 20 minuts per provar els límits del nom, dos errors alhora, correcció parcial i modalitat en línia sense torn. No es pressuposa que el text exacte dels missatges sigui idèntic, però han d'explicar com corregir el camp.

## E. Proves amb Vitest - 60 minuts

Edita tests/validacio.test.js. Des de l'arrel:

```sh
npm test
npm run test:watch
```

La primera ordre executa tots els tests i acaba. La segona els repeteix en desar; Ctrl+C per sortir. test descriu un cas, expect obté el resultat i l'asserció compara amb l'esperat. toBe per a valors simples, toEqual per al contingut d'objectes, toHaveProperty per a una clau d'error.

Conserva el test inicial i afegeix casos de codi invàlid, nom als límits, presencial sense torn, en línia sense torn i acceptació absent. Comprova també que normalitzar no modifica l'original. Crea dades noves a cada test. No calculis l'esperat amb la funció que estàs provant.

Provoca un error controlat a la validació, observa el test que falla, repara'l i executa tota la bateria. Cada parella treballa amb el seu projecte. Anota el resultat a proves.md. Els tests de regles no substitueixen les comprovacions manuals de la interfície.

## F. Formulari React - 80 minuts

Edita src/react/app.jsx i obre /react.html. Implementa nom, codi, torn i accepta amb useState. Text i select utilitzen value; checkbox utilitza checked. Els manejadors onChange actualitzen l'estat. Afegeix errors i missatge com a estat.

En onSubmit, evita navegar, forma la Inscripcio i reutilitza normalitzaInscripcio i validaInscripcio. Les dades fixes són correu aina@example.test, taller WEB i modalitat presencial: mostra-les a la pantalla. No necessites crear un camp de correu ni un selector de taller en aquesta fase.

Presenta els errors amb JSX, label/htmlFor, aria-describedby i aria-invalid. No utilitzis mostraErrors ni querySelector: són de la vista JavaScript. Elimina el missatge d'èxit quan la persona edita. No cal revalidar a cada tecla en aquesta fase; comprova de nou en enviar.

Prova Aina / AB1234 / mati / true: èxit. Prova ab1234 / torn buit / false: tres errors propis. Corregeix-ne un i envia: només desapareix aquell error. Executa npm test sense canviar les regles compartides.

## Què no cal editar

package.json, package-lock.json, vite.config.js, src/app.js, src/react/main.jsx i src/estils.css ja estan preparats. npm run build comprova i genera el paquet de distribució; no cal lliurar dist ni node_modules. Això és un taller d'aula, no una nova activitat avaluable amb termini propi.

---
estat: revisar
data: 2026-10-16
fonts:
  - Presentació UT3 - Objectes, navegador i persistència.
---

# Taller UT3 - Fitxa d’organització d’un esdeveniment

Exercici d’aula en parelles. Una sola fitxa que es completa en set fases. No és la P1 del planificador de viatge ni un nou lliurament avaluable.

## Preparació i fitxers

Descomprimeix el ZIP, obre la carpeta amb l’editor i serveix-la amb el servidor HTTP local habitual. Obre index.html des de l’adreça del servidor. No executis el projecte des de file://.

Si tens Python disponible, pots obrir un terminal dins la carpeta i executar `python3 -m http.server 8000 --bind 127.0.0.1`. `python3` inicia Python; `-m http.server` executa el seu servidor de fitxers; `8000` és el port; `--bind 127.0.0.1` limita l’accés al teu ordinador. Obre `http://127.0.0.1:8000/index.html`. Atura el servidor amb Ctrl+C. No cal instal·lar paquets.

- index.html i estils.css: camps, botons i aparença preparats.
- suport.js: lectura coherent de dates i comprovació de la forma de les dades. S’explica abans d’utilitzar-lo.
- logica.js: completa calculaBase (A) i calculaFitxa (B).
- app.js: completa la representació (C), l’avís (D), la persistència (E) i l’obertura del resum (F). Les connexions dels botons ja estan preparades.
- resum.html i resum.js: segon document, que llegirà i representarà la instantània actual.

Les funcions pendents llancen un missatge amb el seu nom; és intencionat. Substitueix el cos de la funció per la teva solució. avisTemporal queda inicialment sense efecte perquè la fase D no bloquegi la C. No necessites completar totes les funcions per començar.

## Dades i regles

Nom: `  Jornada oberta  `; aforament: `20`; assistents: `17`; inici: `2026-10-23`; final: `2026-10-26`. Les entrades són cadenes de text.

Nom no buit després de trim. Aforament enter d’1 a 200; assistents enters entre zero i l’aforament. Interval d’1 a 7 dies, inclosos els extrems. Dissabte i diumenge són cap de setmana. Cada assistent previst participa tots els dies i necessita una acreditació nova per jornada. Els paquets contenen 10 acreditacions; es preparen paquets complets per a cada dia, sense reaprofitar sobrants entre jornades.

## Fase A - Text, nombres i decisions (25 min)

Completa calculaBase(dades). Valida nom, aforament i assistents; calcula places lliures, percentatge d’ocupació i paquets per dia. L’estat és Complet si no hi ha places, Poques places amb ocupació igual o superior al 80 %, i Disponible en la resta.

Retorna un objecte amb aquests camps: nom, aforament, assistents, places, percentatge, paquetsDia i estat. Prem Comprovar fase A; consulta també Console. L’estat ha de ser un dels textos indicats perquè la representació pugui interpretar-lo.

Proves: cas inicial, zero assistents, aforament zero, assistents superiors a l’aforament, text buit, fraccions i 11 assistents. Resultat inicial: Jornada oberta, 3 places, 85 %, 2 paquets al dia i Poques places. Explica per què Math.round no serveix per a 11 persones.

## Fase B - Calendari (35 min)

Completa calculaFitxa(dades). Usa comprovaEstructura(dades), calculaBase(dades) i dataUTC(text) de suport.js. Valida l’ordre i la durada; recorre cada jornada amb una còpia de la data inicial i mètodes UTC coherents. Crea una llista jornades amb objectes que tenguin data (AAAA-MM-DD) i tipus (Laborable o Cap de setmana).

Retorna base (resultat d’A), inici i final (text), dies, capsSetmana, laborables, acreditacions, paquets i jornades. Usa `push` per afegir cada jornada a la llista. Els paquets totals són paquetsDia multiplicat pels dies, segons la regla de preparació diària.

Per provar sense haver fet C: desa, recarrega i executa `calculaFitxa(llegirCamps())` a Console. Desplega l’objecte. Encara no esperis una representació del botó Calcular calendari.

Cas inicial: quatre dies, dos laborables i dos de cap de setmana; 68 acreditacions i 8 paquets. Prova un únic dia, ordre invers, interval de vuit dies, data inexistent i canvi de mes. `2026-10-31` a `2026-11-02`: tres dies, dos de cap de setmana. La representació UTC ha d’evitar errors pel canvi d’hora.

## Fase C - Presentació i interacció (40 min)

Completa mostrarFitxa(fitxa). Comença buidant el resultat anterior amb buidarResultat(). Usa #titol, #estat, #resum i #calendari. Mostra el nom, capacitat, dates, resum del calendari i materials; crea un li diferent per jornada amb createElement i appendChild. Usa textContent per a dades introduïdes per l’usuari.

Estils disponibles: disponible, poques i complet. L’estat també ha de quedar escrit. La bastida gestiona errors i invalida la vista quan canvien els camps. avisTemporal encara no fa res; no cal tocar-la fins a D.

Prova el botó Calcular calendari: dos clics han de donar quatre files, no vuit. Amb 20 assistents: Complet, 80 acreditacions i 8 paquets. Un nom com `<strong>Jornada</strong>` s’ha de veure literalment; no ha de crear una etiqueta strong. Una entrada invàlida no pot deixar el resultat anterior com si fos vigent.

## Fase D - Avís temporal (15 min)

Completa avisTemporal(). Usa #avis i la variable temporitzador ja declarada. Mostra Fitxa actualitzada i buida el text després de tres segons. Cancel·la el temporitzador anterior abans de programar-ne un altre.

Prova un clic, espera dos segons i torna a calcular. L’avís s’ha de mantenir aproximadament tres segons des del darrer clic. Explica per què la variable identificadora es declara fora de la funció.

## Fase E - Persistència (40 min)

Completa guardar(), recuperar() i esborrar(). La constant CLAU val dwc.ut3.fitxa.

Guardar valida les dades actuals i desa les entrades amb JSON.stringify. Recuperar distingeix clau absent, interpreta el text, valida amb calculaFitxa, omple els camps amb omplirCamps i representa el resultat. No confiar en totals desats. Esborrar demana confirmació i elimina només CLAU; cancel·lar conserva les dades. Esborrar el desat no necessita buidar els camps actuals.

Les accions dels botons ja passen per try/catch a connectar(); els errors es mostren a la pàgina i a Console. Per a la teva implementació no ocultis errors amb un catch buit.

Proves: guardar, recarregar i recuperar; esborrar i recuperar; cancel·lar l’eliminació; modificar la clau des de DevTools amb text que no sigui JSON i amb JSON que contingui un aforament invàlid. Afegeix una clau diferent de prova i comprova que no s’ha eliminat: no usis clear().

## Fase F - Resum en una altra finestra (25 min)

Completa obrirResum() a app.js i la lectura de resum.js. La constant CLAU_RESUM val dwc.ut3.resum. Valida el càlcul actual, desa’n una instantània de les entrades a aquesta clau i obre resum.html des del clic. Usa un nom de context per reutilitzar la finestra. Una marca temporal a la consulta de l’URL permet navegar de nou al resum actualitzat.

A resum.js, gestiona clau absent, JSON invàlid i dades invàlides, recalcula i mostra la fitxa. Aquesta pàgina ja carrega les funcions necessàries. Informau si l’obertura falla. No s’exigeix que sigui una finestra en lloc d’una pestanya ni actualització en directe d’un resum ja obert.

Prova: guarda amb 17 assistents; canvia a 20 i obre el resum sense tornar a guardar. El resum ha de mostrar 20. Si després recuperes la fitxa desada, ha de tornar a 17. Són dades amb finalitats diferents. Prova també resum.html sense clau de resum i l’obertura bloquejada per la configuració del navegador.

## Fase G - Provar i explicar (20 min)

Una altra parella ha de preparar i executar tres proves: un límit, una dada invàlida i una seqüència d’accions. Registra entrada, esperat, obtingut, explicació i correcció si cal. Mostra una pausa del depurador o una inspecció de Storage que justifiqui el diagnòstic. Alternau qui programa i qui prova al llarg de les fases.

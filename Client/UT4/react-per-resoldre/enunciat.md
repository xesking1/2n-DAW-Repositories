# UT4 - Catàleg de material amb React

Aquest projecte continua el context de préstecs de la UT4. És autònom: inclou les dades i el resum, encara que no hagis acabat A-G. Tot H1 i H2 es fa sobre aquesta mateixa carpeta.

## Posada en marxa

Cal tenir Node.js compatible amb Vite (20.19 o posterior de la branca 20, o 22.12 o posterior) i npm. Recomanam una branca LTS vigent compatible. A VS Code, obre la carpeta que conté `package.json` i obre el terminal integrat. Comprova `node --version` i `npm --version`. No cal instal·lar React globalment.

Executa una ordre cada vegada:

```sh
npm ci
npm run dev
```

`npm ci` instal·la les versions de `package-lock.json` a `node_modules` i necessita xarxa la primera vegada. `npm run dev` executa l’script `dev` de `package.json`, que inicia Vite. Obre l’adreça que indiqui el terminal, habitualment `http://localhost:5173`. Deixa el procés obert mentre treballes. `Ctrl+C` l’atura. No obris `index.html` amb doble clic ni amb Live Server: Vite transforma el JSX per al navegador. Les dependències funcionen localment un cop instal·lades.

En acabar, `npm run build` comprova que el projecte es pot empaquetar i crea `dist`. No comprova, per si mateix, que els recomptes siguin correctes. No cal lliurar `node_modules` ni `dist`.

## H1 - Una targeta reutilitzable (20 minuts)

Edita només `src/targeta-material.jsx`. La funció `TargetaMaterial` rep una prop `material`, un objecte vàlid amb `id`, `nom`, `categoria`, `total` i `prestades`. Els dos darrers camps són enters no negatius i `prestades` no supera `total`. No es demana repetir la validació de les fases anteriors.

1. Calcula les unitats lliures amb `total - prestades`, sense modificar l’objecte rebut.
2. Retorna un `article` amb `className="targeta"`, el nom dins un `h3`, el codi i la categoria.
3. Mostra «Unitats disponibles: X de Y» amb dades de l’objecte.
4. Mostra «Disponible» quan quedi alguna unitat i «Sense estoc» quan no en quedi cap. Utilitza un paràgraf amb `className="estat"`.
5. Comprova el material destacat. A `src/app.jsx`, canvia temporalment `material={cataleg[0]}` per `material={cataleg[1]}`. Explica per què canvien el nom, el recompte i l’estat sense editar el component. Restaura `[0]`.

La llista i el resum encara mostren missatges pendents. Això no impedeix provar H1.

## H2 - Catàleg i resum (25 minuts)

Edita `src/llista-materials.jsx` i `src/resum-cataleg.jsx`.

1. `LlistaMaterials` rep la prop `materials`, un array. Si és buit, retorna «No hi ha materials.».
2. Si conté dades, crea un `ul` amb `className="llista"`. Utilitza `map` per retornar un `li` per material. El `li` du `key={material.id}` i conté `TargetaMaterial`, amb la prop `material` corresponent. No escriguis quatre targetes a mà.
3. `ResumCataleg` rep el mateix array. Crida l’ajuda proporcionada `resumCataleg(materials)` de `src/consultes.js`. Retorna un `div` amb `className="resum"` i quatre paràgrafs amb etiquetes: tipus de material, unitats totals, prestades i disponibles.
4. Prova la llista i el resum buits substituint temporalment només les seves props a `src/app.jsx` per `materials={[]}`. El material destacat es manté. No facis `cataleg = []`: el destacat necessita un objecte vàlid.
5. Restaura les props i fes les comprovacions finals. La llista necessita H1 per mostrar targetes, però pots implementar i provar el resum independentment.

## Dades inicials i resultats

Les dades són a `src/dades.js`. `nouCataleg()` les retorna en un array nou.

| Codi | Nom | Categoria | Total | Prestades | Lliures |
| --- | --- | --- | ---: | ---: | ---: |
| MAT-001 | Portàtil | tecnologia | 8 | 3 | 5 |
| MAT-002 | Càmera | audiovisual | 4 | 4 | 0 |
| MAT-003 | Projector | audiovisual | 3 | 1 | 2 |
| MAT-004 | Micròfon | audiovisual | 6 | 0 | 6 |

El destacat rep el primer material. El catàleg complet mostra els quatre, també el destacat: reutilitzam el mateix component en dos llocs. El resum es calcula sobre l’array de quatre materials, no sobre el nombre de targetes visibles a la pàgina: **4 tipus, 21 unitats, 8 prestades i 13 disponibles**.

## Comprovacions i explicació (10 minuts)

- Portàtil: 5 de 8 disponibles. Càmera: 0 de 4, «Sense estoc».
- Catàleg: quatre elements, amb noms i codis correctes, sense avisos de `key` a Console.
- Array buit a llista/resum: missatge buit i quatre zeros. El destacat continua visible.
- Canvia a `src/dades.js` les càmeres prestades de 4 a 3. Desa i observa 1 disponible, resum amb 7 prestades i 14 disponibles. Restaura el 4.
- Canvia temporalment el nom d’un material. Ha de sortir com a text. No utilitzis `innerHTML`.
- Explica on es reben props, on es fa `map` i quina funció calcula el resum. Per què `key` va al `li` i no només a la targeta?
- Executa `npm run build` i revisa qualsevol error.

En aquest taller, desar un canvi de codi fa que Vite actualitzi la vista. Encara no programam interacció ni estat de React: canviar una variable qualsevol no és un mecanisme d’actualització de la interfície.

Si acabes abans: crea un altre array amb `filter` per mostrar només materials amb estoc i justifica si el resum ha de correspondre al catàleg sencer o a la selecció. Passa l’array coherent als components. No cal afegir botons.

## Mapa del projecte

Consulta `mapa-components.md` per veure les signatures i dependències. Les importacions i l’estil ja estan preparats. No hi ha funcions amagades que s’hagin de descobrir.

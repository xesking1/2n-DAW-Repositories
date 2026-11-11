import { nouCataleg } from "./dades.js";
import { comprovaMaterial } from "./suport.js";
import { validaSollicitud } from "./validacio.js";
import { cercaMaterial, afegeixMaterial } from "./cataleg.js";
import { disponibles, etiquetes, resumCataleg } from "./consultes.js";
import { actualitzaPrestades } from "./actualitzacio.js";
import { Prestec } from "./prestec.js";
import { autoritza } from "./servei.js";
import { politiques } from "./politiques.js";
import { provesPropies } from "./proves.js";
// Pont proporcionat per provar a Console: taller.funcio(...).
// Els mòduls no creen funcions globals automàticament.
const taller = { nouCataleg, comprovaMaterial, validaSollicitud, cercaMaterial,
  afegeixMaterial, disponibles, etiquetes, resumCataleg, actualitzaPrestades,
  Prestec, autoritza, politiques };
window.taller = taller;
function entrada() {
  return { materialId: document.querySelector("#materialId").value,
    quantitat: document.querySelector("#quantitat").value,
    dies: document.querySelector("#dies").value };
}
const accions = {
  A: () => validaSollicitud(entrada()),
  B: () => { const cat = nouCataleg(); const trobat = cercaMaterial(cat, "MAT-003");
    const longitud = afegeixMaterial(cat, {id:"MAT-005",nom:"Tauleta",categoria:"tecnologia",total:2,prestades:0});
    return { trobat, longitud, cataleg: cat }; },
  C: () => ({ disponibles: disponibles(nouCataleg(), "audiovisual"),
    etiquetes: etiquetes(nouCataleg()), resum: resumCataleg(nouCataleg()) }),
  D: () => { const abans = nouCataleg(); const despres = actualitzaPrestades(abans, "MAT-001", 4);
    return { abans, despres, arrayNou: abans !== despres, objecteNou: abans[0] !== despres[0] }; },
  E: () => { const p = new Prestec("MAT-001", 3); const inicial = p.pendent();
    const parcial = p.retorna(); p.retorna(2); return { inicial, parcial, final:p.pendent(), tancat:p.estaTancat() }; },
  F: () => autoritza(nouCataleg(), entrada(), document.querySelector("#politica").value),
  G: () => provesPropies(taller)
};
for (const boto of document.querySelectorAll("[data-fase]")) {
  boto.addEventListener("click", () => {
    const sortida = document.querySelector("#sortida");
    sortida.textContent = "";
    try { const resultat = accions[boto.dataset.fase]();
      sortida.textContent = JSON.stringify(resultat, null, 2); console.log(resultat);
    } catch (error) { sortida.textContent = "Error: " + error.message; console.error(error); }
  });
}
document.querySelector("#dades").textContent = JSON.stringify(nouCataleg(), null, 2);

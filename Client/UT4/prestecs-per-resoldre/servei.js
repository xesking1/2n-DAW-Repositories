import { validaSollicitud } from "./validacio.js";
import { cercaMaterial } from "./cataleg.js";
import { politiques } from "./politiques.js";

// FASE F. Autoritza sense reservar ni modificar el catàleg.
export function autoritza(cataleg, dades, nomPolitica) {
  const sollicitud = validaSollicitud(dades);

  if (!Object.hasOwn(politiques, nomPolitica)) {
    throw new Error(`Política desconeguda: ${nomPolitica}.`);
  }

  const material = cercaMaterial(cataleg, sollicitud.materialId);
  if (material === null) {
    throw new Error(`No existeix el material ${sollicitud.materialId}.`);
  }

  const unitatsLliures = material.total - material.prestades;
  if (sollicitud.quantitat > unitatsLliures) {
    throw new Error("No hi ha prou unitats disponibles.");
  }

  if (!politiques[nomPolitica](sollicitud)) {
    throw new Error(`La sol·licitud no compleix la política ${nomPolitica}.`);
  }

  return { ...sollicitud, politica: nomPolitica };
}

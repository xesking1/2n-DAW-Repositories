import { cercaMaterial } from "./cataleg.js";

// FASE D. Retorna un array nou i només crea un objecte nou per al material actualitzat.
export function actualitzaPrestades(cataleg, id, n) {
  const material = cercaMaterial(cataleg, id);
  if (material === null) {
    throw new Error(`No existeix cap material amb l'identificador ${id}.`);
  }
  if (!Number.isInteger(n) || n < 0 || n > material.total) {
    throw new Error("Les unitats prestades han de ser un enter entre 0 i total.");
  }

  return cataleg.map(element =>
    element.id === id ? { ...element, prestades: n } : element
  );
}

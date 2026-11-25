import { comprovaMaterial } from "./suport.js";

// FASE B. Retorna l'objecte original o null, sense modificar el catàleg.
export function cercaMaterial(cataleg, id) {
  for (const material of cataleg) {
    if (material.id === id) return material;
  }
  return null;
}

// Valida i comprova duplicats abans de modificar l'array.
export function afegeixMaterial(cataleg, material) {
  comprovaMaterial(material);
  if (cercaMaterial(cataleg, material.id) !== null) {
    throw new Error(`Ja existeix un material amb l'identificador ${material.id}.`);
  }
  return cataleg.push(material);
}

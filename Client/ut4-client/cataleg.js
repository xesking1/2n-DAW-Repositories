import { comprovaMaterial } from "./suport.js";
// FASE B. cercaMaterial: objecte o null, sense modificar.
export function cercaMaterial(cataleg, id) {
  for (const item of cataleg) {
    if (item.id === id) {
      return item;
    }
  }
  return null;
}
// FASE B. afegeixMaterial: modifica l’array i retorna la nova longitud.
// Usa comprovaMaterial (proporcionada) i cercaMaterial (la teva funció).
export function afegeixMaterial(cataleg, material) {
  
}

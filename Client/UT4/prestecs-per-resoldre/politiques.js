// FASE F. Cada política rep dades normalitzades i retorna un booleà.
export function ordinari(sollicitud) {
  return sollicitud.dies <= 7;
}
export function aula(sollicitud) {
  return sollicitud.dies <= 1;
}
export function projecte(sollicitud) {
  return sollicitud.dies <= 14 && sollicitud.quantitat <= 2;
}

// Registre proporcionat: les claus vàlides són explícites.
export const politiques = { ordinari, aula, projecte };

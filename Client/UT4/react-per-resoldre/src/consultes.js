// PROPORCIONADA. La mateixa operació de resum de la fase C.
// Entrada: array de materials vàlids. Retorn: quatre recomptes numèrics.
// No modifica l’array ni els objectes. Amb [] retorna quatre zeros.
export function resumCataleg(cataleg) {
  const unitats = cataleg.reduce((suma, m) => suma + m.total, 0);
  const prestades = cataleg.reduce((suma, m) => suma + m.prestades, 0);
  return {
    materials: cataleg.length,
    unitats,
    prestades,
    disponibles: unitats - prestades
  };
}

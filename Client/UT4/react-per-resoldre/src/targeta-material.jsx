// H1. Prop material: { id, nom, categoria, total, prestades }.
// Retorna la targeta en JSX sense modificar material.
export function TargetaMaterial({ material }) {
  // Calcula les unitats disponibles abans del return
  // Substitueix el missatge per la targeta descrita a enunciat.md.

  //1
  const unitatsLliures = material.total - material.prestades;
  const esDisponible = (unitatsLliures < 0) ? "Disponible" : "Sense estoc";

  //2, 3, 4 i 5
  return <article className="targeta">
    <h3>{material.nom}</h3>
    <p>Codi: {material.id}</p>
    <p>Categoria: {material.categoria}</p>
    <p>Unitats disponibles: {unitatsLliures} de {material.total}</p>
    <p className="estat">{esDisponible}</p>
  </article>;
}

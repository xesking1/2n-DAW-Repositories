// FASE C. Les consultes no modifiquen el catàleg ni els seus objectes.
export function disponibles(cataleg, categoria = "totes") {
  return cataleg.filter(material =>
    material.total > material.prestades &&
    (categoria === "totes" || material.categoria === categoria)
  );
}

export function etiquetes(cataleg) {
  return cataleg.map(material => `${material.id}: ${material.nom}`);
}

export function resumCataleg(cataleg) {
  return cataleg.reduce((resum, material) => ({
    materials: resum.materials + 1,
    unitats: resum.unitats + material.total,
    prestades: resum.prestades + material.prestades,
    disponibles: resum.disponibles + (material.total - material.prestades)
  }), { materials: 0, unitats: 0, prestades: 0, disponibles: 0 });
}

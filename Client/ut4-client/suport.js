// PROPORCIONADA. Rep un material, retorna el mateix objecte si és vàlid.
// No modifica dades. Llança Error si falta un camp o un valor és invàlid.
// NO comprova duplicats: necessita el catàleg, i això correspon a la fase B.
export function comprovaMaterial(material) {
  if (material === null || typeof material !== "object" || Array.isArray(material)) {
    throw new Error("El material ha de ser un objecte.");
  }
  for (const camp of ["id", "nom", "categoria"]) {
    if (typeof material[camp] !== "string" || material[camp].trim() === "") {
      throw new Error("Falta un camp de text: " + camp);
    }
  }
  if (material.id !== material.id.trim() || material.id !== material.id.toUpperCase()) {
    throw new Error("L’identificador ha d’anar sense espais externs i en majúscules.");
  }
  if (!Number.isInteger(material.total) || material.total < 1 ||
      !Number.isInteger(material.prestades) || material.prestades < 0 ||
      material.prestades > material.total) {
    throw new Error("Total i prestades han de ser enters coherents.");
  }
  if (!["tecnologia", "audiovisual"].includes(material.categoria)) {
    throw new Error("Categoria desconeguda.");
  }
  return material;
}

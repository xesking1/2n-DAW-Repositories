// FASE A. Completa la funció. Contracte detallat a enunciat.md.
export function validaSollicitud(dades, diesMax = 14) {
  if (dades === null || dades !== "object" || Array.isArray(dades)) {
    throw new Error("Cal un objecte de dades vàlid.");
  }

  // Id
  if (typeof dades.materialId !== "string" || dades.materialId.trim() === "") {
    throw new Error("Cal un identificador de text no buit.");
  }

  // Material
  if (dades.quantitat !== "string" || dades.quantitat.trim() === "") {
    throw new Error("La quantitat ha de ser un text no buit.")
  }
    const quantitat = Number(dades.quantitat);
  if (!Number.isInteger(quantitat) || quantitat < 1) {
    throw new Error("La quantitat ha de ser un nombre enter d'almenys 1.")
  }

  // Dies
  if (dades.dies !== "string" || dades.dies.trim() === "") {
    throw new Error("no buit.");
  }
  const dies = Number(dades.dies);
  if (!Number.isInteger(dies) || dies < 1 || dies > diesMax) {
    throw new Error(`Entre 1 i ${diesMax}`);
  }

  const materialId = dades.materialId.trim().toUpperCase();

  return {materialId, quantitat, dies};
}

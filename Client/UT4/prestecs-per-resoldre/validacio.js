// FASE A. Validació i normalització de sol·licituds.
export function validaSollicitud(dades, diesMax = 14) {
  if (!Number.isInteger(diesMax) || diesMax < 1) {
    throw new Error("diesMax ha de ser un enter positiu.");
  }
  if (dades === null || typeof dades !== "object" || Array.isArray(dades)) {
    throw new Error("La sol·licitud ha de ser un objecte.");
  }

  for (const camp of ["materialId", "quantitat", "dies"]) {
    if (typeof dades[camp] !== "string" || dades[camp].trim() === "") {
      throw new Error(`El camp ${camp} ha de ser un text no buit.`);
    }
  }

  const materialId = dades.materialId.trim().toUpperCase();
  const quantitat = Number(dades.quantitat);
  const dies = Number(dades.dies);

  if (!Number.isInteger(quantitat) || quantitat < 1) {
    throw new Error("La quantitat ha de ser un enter com a mínim d'1.");
  }
  if (!Number.isInteger(dies) || dies < 1 || dies > diesMax) {
    throw new Error(`Els dies han de ser un enter entre 1 i ${diesMax}.`);
  }

  return { materialId, quantitat, dies };
}

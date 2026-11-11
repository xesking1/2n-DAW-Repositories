// FASE E. Un préstec independent del catàleg.
export class Prestec {
  constructor(materialId, quantitat) {
    throw new Error("Pendent E: constructor");
  }
  pendent() { throw new Error("Pendent E: pendent"); }
  retorna(quantitat = 1) { throw new Error("Pendent E: retorna"); }
  estaTancat() { throw new Error("Pendent E: estaTancat"); }
}

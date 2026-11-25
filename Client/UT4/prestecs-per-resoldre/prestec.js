// FASE E. Un préstec independent del catàleg.
export class Prestec {
  constructor(materialId, quantitat) {
    if (typeof materialId !== "string" || materialId.trim() === "") {
      throw new Error("L'identificador del material ha de ser un text no buit.");
    }
    if (!Number.isInteger(quantitat) || quantitat < 1) {
      throw new Error("La quantitat ha de ser un enter com a mínim d'1.");
    }
    this.materialId = materialId.trim().toUpperCase();
    this.quantitat = quantitat;
    this.retornades = 0;
  }

  pendent() {
    return this.quantitat - this.retornades;
  }

  retorna(quantitat = 1) {
    if (!Number.isInteger(quantitat) || quantitat < 1 || quantitat > this.pendent()) {
      throw new Error("La quantitat retornada ha de ser un enter positiu que no superi el pendent.");
    }
    this.retornades += quantitat;
    return this.pendent();
  }

  estaTancat() {
    return this.pendent() === 0;
  }
}

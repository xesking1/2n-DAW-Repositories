// FASE G. Completa tres proves amb entrada, esperat i obtingut.
// Rep les funcions a l’objecte t. Retorna un array de resultats.
export function provesPropies(t) {
  const resultat = t.validaSollicitud({ materialId:"MAT-001", quantitat:"1", dies:"1" });
  return [{cas:"Límit mínim", esperat:1, obtingut:resultat.quantitat, correcte:resultat.quantitat===1}];
}

// PROPORCIONADA. Cap argument. Retorna un catàleg nou a cada crida.
// No modifica res extern ni reutilitza els objectes d’una crida anterior.
export function nouCataleg() {
  return [
    { id: "MAT-001", nom: "Portàtil", categoria: "tecnologia", total: 8, prestades: 3 },
    { id: "MAT-002", nom: "Càmera", categoria: "audiovisual", total: 4, prestades: 4 },
    { id: "MAT-003", nom: "Projector", categoria: "audiovisual", total: 3, prestades: 1 },
    { id: "MAT-004", nom: "Micròfon", categoria: "audiovisual", total: 6, prestades: 0 }
  ];
}

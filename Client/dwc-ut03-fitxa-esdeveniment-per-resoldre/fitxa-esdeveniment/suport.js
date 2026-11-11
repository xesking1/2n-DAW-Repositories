// Suport proporcionat: s’explica al bloc de dates abans de la fase B.
function dataUTC(text) {
  if (typeof text !== "string" || !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(text)) {
    throw new Error("La data ha de tenir format AAAA-MM-DD.");
  }
  const data = new Date(text + "T00:00:00Z");
  // Comparar la data reconstruïda detecta normalitzacions com 30 de febrer.
  if (!Number.isFinite(data.getTime()) || data.toISOString().slice(0, 10) !== text) {
    throw new Error("La data no existeix.");
  }
  return data;
}
function dataText(data) { return data.toISOString().slice(0, 10); }
// Contracte de les dades guardades: cinc camps de text, igual que els inputs.
function comprovaEstructura(dades) {
  if (dades === null || typeof dades !== "object" || Array.isArray(dades)) {
    throw new Error("La fitxa no és un objecte vàlid.");
  }
  for (const camp of ["nom", "aforament", "assistents", "inici", "final"]) {
    if (typeof dades[camp] !== "string") throw new Error("Falta el camp de text: " + camp);
  }
}

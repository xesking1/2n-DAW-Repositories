const dades = {
    nom: " Jornada oberta ",
    aforament: "20",
    assistents: "17",
    inici: "2026-10-23",
    final: "2026-10-26"
  };

// FASE A: no depèn del DOM. Retorna dades calculades, no text HTML.
function calculaBase(dades) {
  // FASE A. Valida i retorna {nom, aforament, assistents, places, percentatge, paquetsDia, estat}.
  if (dades.nom.trim() === "" || typeof dades.nom !== "string" ) {
    throw new Error("");
  }
  const aforamentNum = Number(dades.aforament);
  const assistentsNum = Number(dades.assistents);
  if (aforamentNum < 1 || aforamentNum > 200 || !Number.isInteger(aforamentNum)) {
    throw new Error("");
  }
  if (assistentsNum < 0 || assistentsNum > aforamentNum || !Number.isInteger(assistentsNum)) {
    throw new Error("");
  }

  const nom = dades.nom.trim();
  const aforament = Number(dades.aforament);
  const assistents = Number(dades.assistents);
  const places = aforament - assistents;
  const percentatge = (dades.assistents / dades.aforament) * 100;
  const paquetsDia = Math.ceil(assistents / 10);
  let estat = "Disponible";
  if (assistents > aforament * 0.8 && assistents < aforament) { estat = "Poques places"; }
  else { estat = "Complet" }

  return { nom, aforament, assistents, places, percentatge, paquetsDia, estat };
}
// FASE B: una còpia de la data evita modificar l’inici.
function calculaFitxa(dades) {
  // FASE B. Usa calculaBase i dataUTC. Retorna {base, inici, final, dies, capsSetmana, laborables, acreditacions, paquets, jornades}. Cada jornada té data i tipus.
  throw new Error("Pendent: calculaFitxa");
}

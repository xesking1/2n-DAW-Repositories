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
  const base = calculaBase(dades);
  const inici = dataUTC(dades.inici);
  const final = dataUTC(dades.final);
  if (final < inici) {
    throw new Error("La data final no pot ser anterior a la data d'inici.");
  }

  const dies = Math.round((final - inici) / 86400000) + 1;
  if (dies < 1 || dies > 7) {
    throw new Error("La durada de l'esdeveniment ha de ser d'entre 1 i 7 dies.");
  }

  const jornades = [];
  let laborables = 0;
  let capsSetmana = 0;
  const cursor = new Date(inici.getTime());

  for (let i = 0; i < dies; i++) {
    const diaSetmana = cursor.getDay();
    const esCapSetmana = (diaSetmana === 0 || diaSetmana === 6);
    const tipus = esCapSetmana ? "Cap de setmana" : "Laborable";

    if (esCapSetmana) {
      capsSetmana++;
    } else {
      laborables++;
    }

    jornades.push({
      data: cursor.toISOString().slice(0, 10),
      tipus
    });

    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const acreditacions = base.assistents * dies;
  const paquets = base.paquetsDia * dies;

  return { base, inici, final, dies, capsSetmana, laborables, acreditacions, paquets, jornades }
}

// Connexions proporcionades. Completar les funcions de cada fase.
const CLAU = "dwc.ut3.fitxa";
const CLAU_RESUM = "dwc.ut3.resum";
let temporitzador = null;
function llegirCamps() {
  return { nom: document.querySelector("#nom").value,
    aforament: document.querySelector("#aforament").value,
    assistents: document.querySelector("#assistents").value,
    inici: document.querySelector("#inici").value,
    final: document.querySelector("#final").value };
}
function omplirCamps(dades) {
  for (const camp of ["nom", "aforament", "assistents", "inici", "final"]) {
    document.querySelector("#" + camp).value = dades[camp];
  }
}
function missatge(text, error = false) {
  const sortida = document.querySelector("#missatge");
  sortida.textContent = text;
  sortida.classList.toggle("error", error);
}
function buidarResultat() {
  clearTimeout(temporitzador);
  document.querySelector("#avis").textContent = "";
  document.querySelector("#titol").textContent = "Resultat pendent";
  document.querySelector("#resum").textContent = "";
  document.querySelector("#estat").textContent = "";
  document.querySelector("#estat").className = "";
  document.querySelector("#calendari").textContent = "";
}
function mostrarFitxa(fitxa) {
  // FASE C. Usa #titol, #estat, #resum i #calendari. Buida abans de generar files.
  throw new Error("Pendent: mostrarFitxa");
}
function avisTemporal() {
  // FASE D. Usa temporitzador i #avis. Cancel·la el temporitzador anterior.
  // Aquesta fase queda temporalment sense efecte per poder provar la fase C.
  return;
}
function calcular() {
  buidarResultat();
  const fitxa = calculaFitxa(llegirCamps());
  mostrarFitxa(fitxa);
  avisTemporal();
  missatge("Càlcul completat.");
}
function guardar() {
  // FASE E. Valida els camps actuals i desa només les entrades amb CLAU.
  throw new Error("Pendent: guardar");
}
function recuperar() {
  // FASE E. Comprova clau absent, JSON i dades; omple camps i recalcula.
  throw new Error("Pendent: recuperar");
}
function esborrar() {
  // FASE E. Confirmació i removeItem només de CLAU.
  throw new Error("Pendent: esborrar");
}
function obrirResum() {
  // FASE F. Valida, desa a CLAU_RESUM i obre resum.html amb nom resumDwc; gestiona null.
  throw new Error("Pendent: obrirResum");
}
// El wrapper permet mostrar errors de validació, JSON o Storage sense aturar la pàgina.
// Console conserva l’error original per depurar, també quan no és un error previst.
function connectar(id, accio) {
  document.querySelector(id).addEventListener("click", function () {
    try { accio(); }
    catch (error) { buidarResultat(); missatge(error.message, true); console.error(error); }
  });
}
if (document.querySelector("#camps")) {
  connectar("#base", function () {
    const base = calculaBase(llegirCamps());
    console.table(base);
    missatge(`${base.nom}: ${base.places} places, ${base.percentatge.toFixed(0)} %, ${base.paquetsDia} paquets/dia.`);
  });
  connectar("#calcular", calcular);
  connectar("#guardar", guardar);
  connectar("#recuperar", recuperar);
  connectar("#esborrar", esborrar);
  connectar("#obrir", obrirResum);
  document.querySelector("#camps").addEventListener("input", function () {
    buidarResultat(); missatge("Dades modificades. Torna a calcular.");
  });
}

const { createElement } = require("react");

const productes = [
    { nom: "Quadern", preu: 4, quantitat: 2 },
    { nom: "Motxilla", preu: 20, quantitat: 1 },
    { nom: "Bolígraf", preu: 2, quantitat: 3 }
];

const contingutCapcalera = ["Producte", "Preu", "Quantitat", "Import"];

const taula = document.createElement("table");

const capcaleraTaula = document.createElement("thead");

contingutCapcalera.forEach(e => {
    let th = document.createElement("th");
    th.textContent = e;
    capcaleraTaula.appendChild(th);
});

const cosTaula = document.createElement("tbody");

function calcularPreu(p, q) {
    return p*q;
};

productes.forEach(e => {
    let tr = document.createElement("tr");
    
    for (const d of Object.values(e)) {
        let td = document.createElement("td");
        td.textContent = d;
        tr.appendChild(td);
    };

    let importProducte = document.createElement("td");
    importProducte.textContent = calcularPreu(e.preu, e.quantitat);
    tr.appendChild(importProducte);
    cosTaula.appendChild(tr);
});

taula.append(capcaleraTaula, cosTaula);
taula.className = "taula";

const botoCalcul = createElement("button");


document.querySelector("body").append(taula, botoCalcul);
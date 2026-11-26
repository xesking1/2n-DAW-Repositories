import { normalitzaInscripcio, validaInscripcio } from "./validacio.js";

/**
 * Llegeix controls amb name; la casella es transforma en booleà.
 * @param {HTMLFormElement} formulari - Formulari #inscripcio.
 * @returns {import("./validacio.js").Inscripcio} Dades sense normalitzar.
 */
export function llegeixInscripcio(formulari) {
    // Fase C: llegeix els set camps amb FormData.
    formulari.addEventListener("submit", (event) => {
        event.preventDefault();

        const camps = new FormData(formulari);
        
    })
    return {
        nom: "",
        correu: "",
        codi: "",
        tallerId: "",
        modalitat: "",
        torn: "",
        accepta: false,
    };
}

/**
 * Neteja missatges anteriors abans de mostrar els errors nous.
 * @param {HTMLFormElement} formulari - Formulari amb errors associats per id.
 * @param {Object<string, string>} errors - Missatges per nom de camp.
 * @returns {void}
 */
export function mostraErrors(formulari, errors) {
    for (const nom of [
        "nom",
        "correu",
        "codi",
        "tallerId",
        "modalitat",
        "torn",
        "accepta",
    ]) {
        const camp = formulari.elements.namedItem(nom);
        document.querySelector(`#error-${nom}`).textContent = errors[nom] ?? "";
        camp.setAttribute("aria-invalid", String(Boolean(errors[nom])));
    }
}

/** Connecta submit i revisió després del primer intent. @returns {void} */
export function connectaFormulari() {
    // Fase C: connecta submit i evita la navegació.
    // Fase D: normalitza, valida i mostra els errors.
}

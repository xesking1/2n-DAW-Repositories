/**
 * Dades de la inscripció. Tots els camps són cadenes excepte accepta.
 * @typedef {Object} Inscripcio
 * @property {string} nom - Nom de la persona.
 * @property {string} correu - Correu introduït al formulari.
 * @property {string} codi - Dues lletres majúscules i quatre dígits.
 * @property {string} tallerId - WEB o FOTO.
 * @property {string} modalitat - presencial o en-linia.
 * @property {string} torn - mati, tarda o cadena buida.
 * @property {boolean} accepta - Acceptació de les condicions.
 */

/**
 * Retorna una còpia amb els espais exteriors eliminats.
 * Conserva les majúscules del codi per poder validar-ne el format.
 * No modifica l'objecte rebut.
 * @param {Inscripcio} dades - Objecte amb tots els camps del formulari.
 * @returns {Inscripcio} Còpia normalitzada.
 */
export function normalitzaInscripcio(dades) {
    // Fase D: retorna una còpia amb trim als tres textos.
    return { ...dades };
}

/**
 * Comprova el format complet; no cerca només un fragment coincident.
 * @param {string} codi - Text ja normalitzat.
 * @returns {boolean} Cert per a AB1234, fals per a ab1234 o AB12345.
 */
export function esCodiValid(codi) {
    // Fase D: comprova el format complet.
    return false;
}

/**
 * Aplica les regles pròpies. El navegador comprova el format del correu.
 * Els errors esperables de l'usuari es retornen, no es llancen.
 * No modifica dades ni accedeix al DOM.
 * @param {Inscripcio} dades - Inscripció normalitzada.
 * @returns {Object<string, string>} Missatges per camp; {} si no hi ha errors.
 */
export function validaInscripcio(dades) {
    // Fase D: implementa les regles de l’enunciat.
    return { nom: "Pendent de completar la fase D." };
}

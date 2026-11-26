/**
 * Connecta els controls d'ajuda i recompte. Cridar una sola vegada.
 * @returns {void}
 */
export function connectaControls() {
    // Fase A: connecta ajuda i recompte.
    // document.getElementById("ajuda").addEventListener("click", () => {
        
    // })

    const cerca = document.querySelector("#cerca");
    const comptador = document.querySelector("#comptador");
    cerca.addEventListener("input", (event) => {
        comptador.textContent = event.currentTarget.value.length;
    })
}

/**
 * Un únic listener selecciona el taller del botó, també en clicar un span.
 * @returns {void}
 */
export function connectaDelegacio() {
    // Fase B: delega els clics del contenidor.
    const opcions = document.querySelector("#opcions");
    opcions.addEventListener("click", (event) => {
        const boto = event.target.closest(
            "button[data-taller]"
        );
        if (!boto || !opcions.contains(boto)) {
            return;
        }
        const tallerId = document.querySelector("#tallerId");
        tallerId.value = boto.dataset.taller;

        const missatge = document.querySelector("#missatge");
        missatge.textContent = boto.dataset.taller;
    })
}

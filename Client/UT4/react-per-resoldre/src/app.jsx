// PROPORCIONAT. Compon la pàgina i passa les dades com a props.
import { nouCataleg } from "./dades.js";
import { TargetaMaterial } from "./targeta-material.jsx";
import { LlistaMaterials } from "./llista-materials.jsx";
import { ResumCataleg } from "./resum-cataleg.jsx";

const cataleg = nouCataleg();

export function App() {
  return (
    <main>
      <header><p className="etiqueta">DWC - UT4</p><h1>Préstecs de material</h1>
        <p>Consulta les unitats disponibles del centre.</p></header>
      <section aria-labelledby="destacat">
        <h2 id="destacat">Material destacat</h2>
        <TargetaMaterial material={cataleg[0]} />
      </section>
      <section aria-labelledby="cataleg">
        <h2 id="cataleg">Catàleg complet</h2>
        <LlistaMaterials materials={cataleg} />
      </section>
      <section aria-labelledby="resum">
        <h2 id="resum">Resum del catàleg</h2>
        <ResumCataleg materials={cataleg} />
      </section>
    </main>
  );
}

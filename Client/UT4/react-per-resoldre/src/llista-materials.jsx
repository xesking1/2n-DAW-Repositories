import { TargetaMaterial } from "./targeta-material.jsx";

// H2. Prop materials: array de materials vàlids, que pot ser buit.
export function LlistaMaterials({ materials }) {
  // Primer tracta el cas buit. Després transforma l’array amb map.
  // Cada li ha de tenir key i contenir una TargetaMaterial.

  //1
  if (materials.length === 0) { return "No hi ha materials" }

  //2
  return <ul className="llista">
    {materials.map(p => (
      <li key={p.id}>
        <TargetaMaterial material={p}/>
      </li>
    ))}
  </ul>;
}
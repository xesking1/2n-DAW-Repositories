// PROPORCIONAT. Connecta React amb el contenidor root d’index.html.
import { createRoot } from "react-dom/client";
import { App } from "./app.jsx";
import "./estils.css";

createRoot(document.getElementById("root")).render(<App />);

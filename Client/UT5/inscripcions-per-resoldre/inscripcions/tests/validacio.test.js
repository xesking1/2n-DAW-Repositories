import { expect, test } from "vitest";
import { esCodiValid } from "../src/validacio.js";

test("accepta dues majúscules i quatre dígits", () => {
    expect(esCodiValid("AB1234")).toBe(true);
});

// Fase E: afegeix els teus casos després de completar la fase D.
// Aquest test falla mentre esCodiValid retorna false: és intencionat.

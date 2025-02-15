import { obtenerDatos } from "./api.js";
import { mostrarDatos } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    let input_date = document.getElementById("date");
    input_date.max = new Date().toISOString().split("T")[0];

    input_date.addEventListener("change", async (ev) => {
        try {
            const data = await obtenerDatos(ev.target.value);
            mostrarDatos(data);
        } catch (error) {
            alert("Error al obtener datos. Inténtalo de nuevo.");
        }
    });
});
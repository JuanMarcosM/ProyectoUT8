import express from "express";
import { obtenerHoraActual } from "./hora.js";

const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, JS, CSS)
app.use(express.static("."));

// Ruta para obtener la hora actual
app.get("/hora", (req, res) => {
    res.json({ hora: obtenerHoraActual() });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
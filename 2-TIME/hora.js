export function obtenerHoraActual() {
    const ahora = new Date();
    return ahora.toLocaleTimeString(); // Devuelve la hora en formato HH:MM:SS
}
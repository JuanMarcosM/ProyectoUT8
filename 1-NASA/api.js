const NASA_API = "DEMO_KEY"
const RUTA = "https://api.nasa.gov/planetary/apod"

export async function obtenerDatos(date) {
    try {
        let url1 = new URL(RUTA);
        url1.searchParams.set("api_key", NASA_API);
        url1.searchParams.set("date", date);
        
        const response = await fetch(url1);
        if (!response.ok) {
            throw new Error(`Error en la API: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en lectura:", error);
        throw error;
    }
}
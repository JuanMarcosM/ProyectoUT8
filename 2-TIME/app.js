async function actualizarHora() {
    try {
        const respuesta = await fetch("/hora");
        const data = await respuesta.json();
        document.getElementById("hora").textContent = data.hora;
    } catch (error) {
        console.error("Error al obtener la hora:", error);
    }
}

// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);

// Llama a la función una vez al cargar la página
actualizarHora();
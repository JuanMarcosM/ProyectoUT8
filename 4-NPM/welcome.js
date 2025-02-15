import readline from 'readline';  // Importa la librería readline para interactuar con el usuario
import chalk from 'chalk';        // Importa la librería chalk para el color del texto

// Configuración de readline para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 1: Pedir el nombre al usuario
rl.question('¿Cuál es tu nombre? ', (nombre) => {

    // Paso 2: Pedir la edad al usuario
    rl.question('¿Cuántos años tienes? ', (edad) => {

        // Convertir la edad a un número
        let edadNumerica = parseInt(edad);

        // Paso 3: Determinar el color según la edad
        let mensajeColor;

        if (edadNumerica < 18) {
            mensajeColor = chalk.red;  // Si la edad es menor de 18 años, color rojo
        } else if (edadNumerica >= 18 && edadNumerica <= 65) {
            mensajeColor = chalk.green;  // Si la edad está entre 18 y 65 años, color verde
        } else {
            mensajeColor = chalk.blue;   // Si la edad es mayor a 65 años, color azul
        }

        // Mostrar el mensaje personalizado con el color correspondiente
        console.log(mensajeColor(`¡Hola, ${nombre}! Tienes ${edadNumerica} años.`));

        // Cerrar la interfaz readline
        rl.close();
    });
});

import os from 'os';  // Importa el módulo os
import fs from 'fs';  // Importa el módulo fs

// Paso 1: Obtener información del sistema
const NOMBRE_OS = os.platform();
const VERSION_OS = os.release(); 
const MEMORIA_D = (os.freemem() / 1024 / 1024).toFixed(2);  // Memoria libre (en MB)
const NUM_CPU = os.cpus().length; 

// Mostrar la información del sistema en la consola
console.log("Información del sistema:");
console.log(`Nombre del Sistema Operativo: ${NOMBRE_OS}`);
console.log(`Versión del Sistema Operativo: ${VERSION_OS}`);
console.log(`Memoria Disponible (en MB): ${MEMORIA_D} MB`);
console.log(`Número de CPUs Disponibles: ${NUM_CPU}`);

// Paso 2: Crear y escribir la información en un archivo 'info_sistema.txt'
const contenidoArchivo = `
Nombre del Sistema Operativo: ${NOMBRE_OS}
Versión del Sistema Operativo: ${VERSION_OS}
Memoria Disponible (en MB): ${MEMORIA_D} MB
Número de CPUs Disponibles: ${NUM_CPU}
`;

// Utilizando fs para escribir de manera síncrona
try {
    fs.writeFileSync('info_sistema.txt', contenidoArchivo);
    console.log("Archivo 'info_sistema.txt' creado con éxito.");
} catch (error) {
    console.error("Error al escribir en el archivo:", error);
}

// Paso 3: Leer y mostrar el contenido del archivo
try {
    const contenidoArchivoLeido = fs.readFileSync('info_sistema.txt', 'utf8');
    console.log("\nContenido del archivo 'info_sistema.txt':");
    console.log(contenidoArchivoLeido);
} catch (error) {
    console.error("Error al leer el archivo:", error);
}
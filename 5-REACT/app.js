// Nuestra versión de 'React' y 'ReactDOM' en puro JS
let state = {
    count: 0
  };
  
  // Función para renderizar la vista
function render() {
    let root = document.getElementById('root');
    
    // Limpiar el contenido actual
    root.innerHTML = '';
  
    // Crear los elementos HTML dinámicamente
    let title = document.createElement('h1');
    title.textContent = `Contador: ${state.count}`;
  
    let button1 = document.createElement('button');
    button1.textContent = 'Aumentar';
    button1.onclick = () => {
      state.count++;
      render();  // Re-renderizar después de actualizar el estado
    };
  
    let button2 = document.createElement('button');
    button2.textContent = 'Disminuir';
    button2.onclick = () => {
      state.count--;
      render();  // Re-renderizar después de actualizar el estado
    };
  
    let button3 = document.createElement('button');
    button3.textContent = 'Resetear';
    button3.onclick = () => {
      state.count = 0;
      render();  // Re-renderizar después de actualizar el estado
    };
  
    // Agregar los elementos creados al contenedor raíz
    root.appendChild(title);
    root.appendChild(button1);
    root.appendChild(button2);
    root.appendChild(button3);
  }
  
  // Inicializamos la primera renderización
render();  
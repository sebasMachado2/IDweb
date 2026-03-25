document.getElementById('btnGenerar').addEventListener('click', () => {
    // Referencia al input y el contenedor de resultados
    const inputElement = document.getElementById('numUsuario');
    const resultadoDiv = document.getElementById('resultado');
    
    // Convertimos el valor a un número entero
    const limite = parseInt(inputElement.value);

    // Validación: que el número sea positivo y entero
    if (isNaN(limite) || limite < 1) {
        alert("Por favor, introduce un número entero positivo (mayor que 0).");
        return;
    }

    // Limpiamos resultados previos
    resultadoDiv.innerHTML = '';

    // Ciclo exterior: Genera tablas desde el 1 hasta el número especificado por el usuario
    for (let i = 1; i <= limite; i++) {
        const tablaDiv = document.createElement('div');
        tablaDiv.classList.add('tabla');
        
        const titulo = document.createElement('h3');
        titulo.textContent = `Tabla del ${i}`;
        tablaDiv.appendChild(titulo);
        
        // Ciclo interior: Multiplica el número 'i' del 1 al 10
        for (let j = 1; j <= 10; j++) {
            const linea = document.createElement('div');
            linea.classList.add('linea');
            linea.textContent = `${i} x ${j} = ${i * j}`;
            tablaDiv.appendChild(linea);
        }
        
        resultadoDiv.appendChild(tablaDiv);
    }
});

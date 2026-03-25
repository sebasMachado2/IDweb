document.getElementById('btnGenerar').addEventListener('click', () => {
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const tablaDiv = document.createElement('div');
        tablaDiv.classList.add('tabla');

        const titulo = document.createElement('h3');
        titulo.textContent = `Tabla del ${i}`;
        tablaDiv.appendChild(titulo);


        for (let j = 1; j <= 10; j++) {
            const linea = document.createElement('div');
            linea.classList.add('linea');

            const producto = i * j;

            linea.textContent = `${i} x ${j} = ${producto}`;

            tablaDiv.appendChild(linea);
        }

        resultadoDiv.appendChild(tablaDiv);
    }
});

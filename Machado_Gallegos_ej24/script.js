document.addEventListener('DOMContentLoaded', () => {

    const hoy = new Date();

    const numeroDia = hoy.getDay();
    const diaMes = hoy.getDate();
    const numeroMes = hoy.getMonth();
    const anio = hoy.getFullYear();

    let nombreDia = "";
    let nombreMes = "";

    switch (numeroDia) {
        case 0: nombreDia = "domingo"; break;
        case 1: nombreDia = "lunes"; break;
        case 2: nombreDia = "martes"; break;
        case 3: nombreDia = "miercoles"; break;
        case 4: nombreDia = "jueves"; break;
        case 5: nombreDia = "viernes"; break;
        case 6: nombreDia = "sabado"; break;
    }

    switch (numeroMes) {
        case 0: nombreMes = "Enero"; break;
        case 1: nombreMes = "Febrero"; break;
        case 2: nombreMes = "Marzo"; break;
        case 3: nombreMes = "Abril"; break;
        case 4: nombreMes = "Mayo"; break;
        case 5: nombreMes = "Junio"; break;
        case 6: nombreMes = "Julio"; break;
        case 7: nombreMes = "Agosto"; break;
        case 8: nombreMes = "Septiembre"; break;
        case 9: nombreMes = "Octubre"; break;
        case 10: nombreMes = "Noviembre"; break;
        case 11: nombreMes = "Diciembre"; break;
    }

    const mensajeFinal = `Hoy es ${nombreDia} ${diaMes} de ${nombreMes} del año ${anio}`;
    document.getElementById("mensajeFinal").textContent = mensajeFinal;
});

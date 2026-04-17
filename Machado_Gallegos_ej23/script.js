function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = parseFloat(document.getElementById("estatura").value);

    if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
        document.getElementById("resultado").innerHTML = "Error: Ingresa valores válidos";
        document.getElementById("resultado").style.color = "red";
        return;
    }

    // Fórmula: peso / (estatura * estatura)
    var imc = peso / (estatura * estatura);
    var grado = "";
    var color = "";

    if (imc < 18.5) {
        grado = "Bajo peso";
        color = "orange";
    } else if (imc >= 18.5 && imc <= 24.9) {
        grado = "Normal";
        color = "green";
    } else if (imc >= 25 && imc <= 29.9) {
        grado = "Sobrepeso";
        color = "orange";
    } else if (imc >= 30 && imc <= 34.9) {
        grado = "Obesidad Grado I";
        color = "red";
    } else if (imc >= 35 && imc <= 39.9) {
        grado = "Obesidad Grado II";
        color = "red";
    } else {
        grado = "Obesidad Grado III";
        color = "purple";
    }

    document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.toFixed(2) + "<br>Situación: " + grado;
    document.getElementById("resultado").style.color = color;
}

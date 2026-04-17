function sumar() {
    var v1 = parseFloat(document.getElementById("num1").value);
    var v2 = parseFloat(document.getElementById("num2").value);
    var res = v1 + v2;
    document.getElementById("resultado").innerHTML = "La suma es: " + res;
}

function restar() {
    var v1 = parseFloat(document.getElementById("num1").value);
    var v2 = parseFloat(document.getElementById("num2").value);
    var res = v1 - v2;
    document.getElementById("resultado").innerHTML = "La resta es: " + res;
}

function multiplicar() {
    var v1 = parseFloat(document.getElementById("num1").value);
    var v2 = parseFloat(document.getElementById("num2").value);
    var res = v1 * v2;
    document.getElementById("resultado").innerHTML = "La multiplicacion es: " + res;
}

function dividir() {
    var v1 = parseFloat(document.getElementById("num1").value);
    var v2 = parseFloat(document.getElementById("num2").value);
    var res = v1 / v2;
    document.getElementById("resultado").innerHTML = "La division es: " + res;
}

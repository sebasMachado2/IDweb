function calcular() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    var discriminante = (b * b) - (4 * a * c);

    if (discriminante < 0) {
        document.getElementById("resultado").innerHTML = "Error";
        document.getElementById("resultado").style.color = "red";
    } else if (a == 0) {
        document.getElementById("resultado").innerHTML = "Error";
        document.getElementById("resultado").style.color = "red";
    } else {
        var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        document.getElementById("resultado").innerHTML = "El resultado es:<br>x1 = " + x1.toFixed(2) + "<br>x2 = " + x2.toFixed(2);
        document.getElementById("resultado").style.color = "green";
    }
}

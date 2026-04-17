<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Menu de Practicas PHP (21-26)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Panel de Prácticas PHP</h1>
    
    <div class="menu">
        <a href="?p=21">P21: Aritmética</a> |
        <a href="?p=22">P22: Fórmula General</a> |
        <a href="?p=23">P23: IMC</a> |
        <a href="?p=24">P24: Fecha</a> |
        <a href="?p=25">P25: Tablas 1-10</a> |
        <a href="?p=26">P26: Tabla a Medida</a>
    </div>

    <div class="formulario-container">
        <?php
        $p = isset($_GET['p']) ? $_GET['p'] : '21';

        // --- Lógica de la Práctica 21 ---
        if ($p == '21') {
            echo "<h2>Práctica 21: Operaciones Aritméticas</h2>";
            echo '<form method="POST">
                    <label>Variable 1:</label><input type="number" name="n1" step="any" required>
                    <label>Variable 2:</label><input type="number" name="n2" step="any" required>
                    <div class="botones">
                        <input type="submit" name="op" value="Sumar">
                        <input type="submit" name="op" value="Restar">
                        <input type="submit" name="op" value="Multiplicar">
                        <input type="submit" name="op" value="Dividir">
                    </div>
                  </form>';
            
            if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['op'])) {
                $n1 = $_POST['n1'];
                $n2 = $_POST['n2'];
                $op = $_POST['op'];
                $res = 0;
                switch ($op) {
                    case 'Sumar': $res = $n1 + $n2; break;
                    case 'Restar': $res = $n1 - $n2; break;
                    case 'Multiplicar': $res = $n1 * $n2; break;
                    case 'Dividir': $res = ($n2 != 0) ? ($n1 / $n2) : "Error (Div/0)"; break;
                }
                echo "<div id='resultado'>Resultado ($op): $res</div>";
            }
        }

        // --- Lógica de la Práctica 22 ---
        elseif ($p == '22') {
            echo "<h2>Práctica 22: Fórmula General</h2>";
            echo '<form method="POST">
                    <label>Valor de a:</label><input type="number" name="a" step="any" required>
                    <label>Valor de b:</label><input type="number" name="b" step="any" required>
                    <label>Valor de c:</label><input type="number" name="c" step="any" required>
                    <div class="botones"><input type="submit" value="Calcular x1 y x2"></div>
                  </form>';
            
            if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['a'])) {
                $a = $_POST['a']; $b = $_POST['b']; $c = $_POST['c'];
                $disc = ($b * $b) - (4 * $a * $c);
                if ($disc < 0) echo "<div id='resultado' style='color:red;'>Error: Discriminante negativo</div>";
                elseif ($a == 0) echo "<div id='resultado' style='color:red;'>Error: a = 0</div>";
                else {
                    $x1 = (-$b + sqrt($disc)) / (2 * $a);
                    $x2 = (-$b - sqrt($disc)) / (2 * $a);
                    echo "<div id='resultado'>x1 = ".round($x1,2)."<br>x2 = ".round($x2,2)."</div>";
                }
            }
        }

        // --- Lógica de la Práctica 23 ---
        elseif ($p == '23') {
            echo "<h2>Práctica 23: Cálculo de IMC</h2>";
            echo '<form method="POST">
                    <label>Peso (kg):</label><input type="number" name="peso" step="0.1" required>
                    <label>Estatura (m):</label><input type="number" name="est" step="0.01" required>
                    <div class="botones"><input type="submit" value="Calcular IMC"></div>
                  </form>';
            
            if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['peso'])) {
                $peso = $_POST['peso']; $est = $_POST['est'];
                $imc = $peso / ($est * $est);
                $grado = "";
                if ($imc < 18.5) $grado = "Bajo peso";
                elseif ($imc <= 24.9) $grado = "Normal";
                elseif ($imc <= 29.9) $grado = "Sobrepeso";
                else $grado = "Obesidad";
                echo "<div id='resultado'>IMC: ".round($imc,2)."<br>Situación: $grado</div>";
            }
        }

        // --- Lógica de la Práctica 24 ---
        elseif ($p == '24') {
            echo "<h2>Práctica 24: Fecha Actual (PHP)</h2>";
            $dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            $meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            
            $diaSem = $dias[date('w')];
            $diaNum = date('d');
            $mes = $meses[date('n')];
            $año = date('Y');
            
            echo "<div id='resultado'>Hoy es $diaSem $diaNum de $mes del año $año.</div>";
        }

        // --- Lógica de la Práctica 25 ---
        elseif ($p == '25') {
            echo "<h2>Práctica 25: Tablas del 1 al 10</h2>";
            echo '<form method="POST"><input type="submit" name="gen" value="Generar Tablas"></form>';
            
            if (isset($_POST['gen'])) {
                echo "<div class='grid-tablas'>";
                for ($i = 1; $i <= 10; $i++) {
                    echo "<div><strong>Tabla del $i</strong><table>";
                    for ($j = 1; $j <= 10; $j++) {
                        echo "<tr><td>$i x $j</td><td>".($i*$j)."</td></tr>";
                    }
                    echo "</table></div>";
                }
                echo "</div>";
            }
        }

        // --- Lógica de la Práctica 26 ---
        elseif ($p == '26') {
            echo "<h2>Práctica 26: Tabla a Medida</h2>";
            echo '<form method="POST">
                    <label>Tabla del número:</label><input type="number" name="num" required>
                    <div class="botones"><input type="submit" value="Generar Tabla"></div>
                  </form>';
            
            if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['num'])) {
                $num = $_POST['num'];
                echo "<div id='resultado'>Tabla del $num<table>";
                for ($i = 1; $i <= 10; $i++) {
                    echo "<tr><td>$num x $i</td><td>".($num*$i)."</td></tr>";
                }
                echo "</table></div>";
            }
        }
        ?>
    </div>

</body>
</html>

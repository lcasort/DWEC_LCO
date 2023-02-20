<?php
session_start();
if(!isset($_SESSION['usuariosBD'])){
    // Tabla "usuarios" de la "Base de datos"
    $_SESSION['usuariosBD'] = [
        (object) [
            "id" => "1",
            "email" => "a@a.com",
            "pass" => "a12345",
            "nombre" => "Antonio",
            "genero" => "hombre",
            "pais" => "es",
            "interes1" => "yes",
            "interes2" => "yes",
            "interes3" => "no"
        ],
        (object) [
            "id" => "2",
            "email" => "e@a.com",
            "pass" => "a12345",
            "nombre" => "Estrella",
            "genero" => "mujer",
            "pais" => "pt",
            "interes1" => "no",
            "interes2" => "yes",
            "interes3" => "yes"
        ],
    ];
}


// Recogemos los datos de la petición
$email = $_REQUEST["email"];
$pass = $_REQUEST["pass"];
$nombre = $_REQUEST["nombre"];
$edad = $_REQUEST["edad"];
$genero = $_REQUEST["genero"];
$pais = $_REQUEST["pais"];
$interes1 = isset($_REQUEST["interes1"]) ? "yes" : "no";
$interes2 = isset($_REQUEST["interes2"]) ? "yes" : "no";
$interes3 = isset($_REQUEST["interes3"]) ? "yes" : "no";

$usuarios = $_SESSION["usuariosBD"];
$usuarioBD = "";
// Recorremos todos los usuarios de la "tabla de la base de datos" para
// comprobar si el usuario ya está en el sistema (si el email ya existe
// en la "tabla de la BD")
for ($i = 0; $i < count($usuarios) and $usuarioBD === ""; $i++) {
    $usuario = $usuarios[$i];
    if($usuario->email === $email) {
        $usuarioBD = $usuario;
    }
}

$respuesta = "";
// El usuario con el email suministrado no existe en el sistema (no validamos nada más en este ejemplo)
if($usuarioBD === "") {
    // Construimos el nuevo usuario
    $nuevoUsuario = (object)[
        "id" => (count($usuarios) + 1),
        "email" => $email,
        "pass" => $pass,
        "nombre" => $nombre,
        "genero" => $genero,
        "pais" => $pais,
        "interes1" => $interes1,
        "interes2" => $interes2,
        "interes3" => $interes3,
    ];
    // "Metemos en la base de datos" al nuevo usuario
    array_push($usuarios, $nuevoUsuario);
    $_SESSION["usuariosBD"] = $usuarios;
    // Construimos la respuesta
    $respuesta = (object) [
        "validacion" => "ok",
        "campo" => "email",
        "valor" => $email
    ];
}else { // El usuario ya estaba en la base de datos
    // Construimos la respuesta
    $respuesta = (object) [
        "validacion" => "no",
        "campo" => "email",
        "valor" => $email
    ];
}
// Devolvemos la respuesta
echo json_encode($respuesta);
?>
<?php
// Productos
$productos = [
    (object) ["id" => "001", "nombre" => "Auriculares molones", "categoria" => "001", "imagen" => "img/art001.webp", "precio" => "40,12", "vendedor" => "Amazonia", "stock" => "15"],
    (object) ["id" => "002", "nombre" => "Auriculares no tan molones", "categoria" => "001", "imagen" => "img/art002.webp", "precio" => "28,46", "vendedor" => "AncaJuan", "stock" => "16"],
    (object) ["id" => "003", "nombre" => "Buena caja", "categoria" => "002", "imagen" => "img/art003.webp", "precio" => "75", "vendedor" => "Amazonia", "stock" => "18"],
    (object) ["id" => "004", "nombre" => "Vaya fuente!", "categoria" => "003", "imagen" => "img/art004.webp", "precio" => "102,34", "vendedor" => "Amazonia", "stock" => "8"],
    (object) ["id" => "005", "nombre" => "Monitor Asus", "categoria" => "004", "imagen" => "img/art005.webp", "precio" => "102,34", "vendedor" => "AncaJuan", "stock" => "12"],
    (object) ["id" => "006", "nombre" => "Monitor MSI", "categoria" => "004", "imagen" => "img/art006.webp", "precio" => "272,30", "vendedor" => "PC Ya!", "stock" => "21"],
    (object) ["id" => "007", "nombre" => "Placa base Asus", "categoria" => "005", "imagen" => "img/art007.webp", "precio" => "187,45", "vendedor" => "Amazonia", "stock" => "6"],
    (object) ["id" => "008", "nombre" => "Un portátil", "categoria" => "006", "imagen" => "img/art008.webp", "precio" => "714,18", "vendedor" => "Otra tienda", "stock" => "9"],
    (object) ["id" => "009", "nombre" => "Otro portátil", "categoria" => "006", "imagen" => "img/art009.webp", "precio" => "1056", "vendedor" => "PC Ya!", "stock" => "13"],
    (object) ["id" => "010", "nombre" => "Otro portátil más", "categoria" => "006", "imagen" => "img/art010.webp", "precio" => "1814,68", "vendedor" => "Otra tienda", "stock" => "3"],
    (object) ["id" => "011", "nombre" => "Ratón de jugar a juegos", "categoria" => "007", "imagen" => "img/art011.webp", "precio" => "46,85", "vendedor" => "Amazonia", "stock" => "49"],
    (object) ["id" => "012", "nombre" => "Silla de jugar", "categoria" => "008", "imagen" => "img/art012.webp", "precio" => "180", "vendedor" => "AncaJuan", "stock" => "24"],
    (object) ["id" => "013", "nombre" => "Tarjeta gráfica", "categoria" => "009", "imagen" => "img/art013.webp", "precio" => "543", "vendedor" => "AncaJuan", "stock" => "15"],
    (object) ["id" => "014", "nombre" => "Teclado de jugar", "categoria" => "010", "imagen" => "img/art014.webp", "precio" => "113,63", "vendedor" => "Amazonia", "stock" => "19"],
    (object) ["id" => "015", "nombre" => "Una torre", "categoria" => "011", "imagen" => "img/art015.webp", "precio" => "1250", "vendedor" => "Amazonia", "stock" => "6"],
    (object) ["id" => "016", "nombre" => "Una torre con luces", "categoria" => "011", "imagen" => "img/art016.webp", "precio" => "1930,37", "vendedor" => "Amazonia", "stock" => "42"],
];

// Categorías
$categorias = [
    (object) ["id" => "001", "nombre" => "Auriculares"],
    (object) ["id" => "002", "nombre" => "Carcasa"],
    (object) ["id" => "003", "nombre" => "Fuente de alimentación"],
    (object) ["id" => "004", "nombre" => "Monitor"],
    (object) ["id" => "005", "nombre" => "Placa base"],
    (object) ["id" => "006", "nombre" => "Portátil"],
    (object) ["id" => "007", "nombre" => "Ratón"],
    (object) ["id" => "008", "nombre" => "Silla"],
    (object) ["id" => "009", "nombre" => "Tarjeta gráfica"],
    (object) ["id" => "010", "nombre" => "Teclado"],
    (object) ["id" => "011", "nombre" => "PC completo"],
];

$idProducto = $_REQUEST["idProducto"];

$productoDevolver = "";

// Se busca el producto a devolver a partir del id
for ($i = 0; $i < count($productos) and $productoDevolver === ""; $i++) {
    $producto = $productos[$i];
    if($producto->id === $idProducto) {
        $productoDevolver = $producto;
    }
}

echo json_encode($productoDevolver);
?>
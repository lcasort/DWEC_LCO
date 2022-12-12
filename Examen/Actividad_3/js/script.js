///////////////////////////// CÓDIGO QUE DEBES UTILIZAR /////////////////////////
const factura = [
    {id: 1, descripcion: "Atún 3 latas 30gr", precio: 2.4, cantidad: 3},
    {id: 2, descripcion: "Tomate frito 3 briks 390gr", precio: 1.45, cantidad: 1},
    {id: 3, descripcion: "Café molido 250gr", precio: 3.99, cantidad: 2},
    {id: 4, descripcion: "Garbanzos cocidos 400gr", precio: 0.85, cantidad: 4},
    {id: 5, descripcion: "Azúcar blanco 1kg", precio: 1.47, cantidad: 2},
    {id: 6, descripcion: "Arroz 1kg", precio: 1.35, cantidad: 1},
    {id: 7, descripcion: "Leche semidesnatada 1l", precio: 1.06, cantidad: 6},
    {id: 8, descripcion: "Tomate triturado 390gr", precio: 0.72, cantidad: 2},
    {id: 9, descripcion: "Nata líquida 3 unidades de 200 ml", precio: 1.75, cantidad: 1},
    {id: 10, descripcion: "Aceite de oliva suave 1l", precio: 4.99, cantidad: 4}
];
///////////////////////////// FIN CÓDIGO QUE DEBES UTILIZAR /////////////////////////

///////////////////////////// AQUÍ COMIENZA TU CÓDIGO /////////////////////////

// ACTIVIDAD 3:
// Apartado 1:
/**
 * Función que recibe un array de objetos y devuelve los productos cuyo precio
 * sea superior a 2€ ordenados de manera ascendente.
 * @param {Array} factura 
 * @returns Array
 */
function obtenerCarosOrdenadosPorCantidad(factura)
{
    return factura.filter(prod => prod.precio>2.)
            .sort((a,b) => {
                return a.cantidad - b.cantidad;
            });
}
// Llamamos a la función y guardamos el array que devuelve en res.
const res = obtenerCarosOrdenadosPorCantidad(factura);
// Imprimimos el resultado por pantalla.
res.forEach(prod => {
    console.log(`id: ${prod.id}, descripcion: ${prod.descripcion}, precio: ${prod.precio}, cantidad: ${prod.cantidad}`);
});


// Apartado 2:
/**
 * Función que recibe un array de objetos y un número n, y ordena los productos
 * según su precio de manera descendente y devuelve los n primeros, es decir,
 * los n productos más caros.
 * @param {Array} factura 
 * @param {Number} num 
 * @returns Array
 */
function obtenerNMasCaros(factura, n)
{
    return factura.sort((a,b) => {
        return b.precio - a.precio;
    }).slice(0,n);
}
// Llamamos a la función y guardamos el array que devuelve en res2.
const res2 = obtenerNMasCaros(factura, 4);
// Imprimimos el resultado por pantalla.
res2.forEach(prod => {
    console.log(`id: ${prod.id}, descripcion: ${prod.descripcion}, precio: ${prod.precio}, cantidad: ${prod.cantidad}`);
});

///////////////////////////// AQUÍ TERMINA TU CÓDIGO /////////////////////////
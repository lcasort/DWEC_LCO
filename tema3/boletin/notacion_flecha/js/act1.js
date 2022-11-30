/*
Actividad 1. Transforma a funciones flecha.
Reescribe estas funciones anónimas utilizando la notación flecha:
a) const obtenerSaludo = function() {
return “¡Hola!”;
}
b) const obtenerSaludoConNombre = function(nombre) {
return `Hola ${nombre}`;
}
c) const sumar = function(a, b) {
return a + b;
}
*/

// a)
const obtenerSaludo = () => 'Hola!';

// b)
const obtenerSaludoConNombre = nombre => `Hola ${nombre}`;

// c)
const sumar = (a, b) => a + b;


// MAIN
console.log(obtenerSaludo());
console.log(obtenerSaludoConNombre('Laura'));
console.log(sumar(2, 3));
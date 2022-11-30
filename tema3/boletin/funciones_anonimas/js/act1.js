/*
Actividad 1. Transforma a funciones anónimas.
Reescribe estas funciones como funciones anónimas:
a) function obtenerSaludo() {
return “¡Hola!”;
}
b) function obtenerSaludoConNombre(nombre) {
return `Hola ${nombre}`;
}
c) function sumar(a, b) {
return a + b;
}
*/

// a)
let a = function () {return 'Hola';};

// b)
let b = function (nombre) {return `Hola ${nombre}`;};

// c)
let c = function (a, b) {return a + b;};


// MAIN
console.log(a());
console.log(b('Laura'));
console.log(c(2, 3));
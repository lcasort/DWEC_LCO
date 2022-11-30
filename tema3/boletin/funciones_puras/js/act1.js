/*
Actividad 1. Identificación de funciones puras.
Indica si las siguientes funciones son puras y por qué:
*/

// Función 1:
function esAnioBisiesto() {
    const oAnio = new Date().getFullYear();
    if(oAnio%4 !== 0) return false;
    else if(oAnio%100 != 0) return true;
    else if(oAnio%400 != 0) return false;
    else return true;
}

// Función 2:
const aColores = ['red', 'orange', 'yellow', 'green', 'blue'];
let iIndiceColor = -1;

function obtenerSiguienteColor() {
    if(++iIndiceColor >= aColores.length) iIndiceColor = 0;
    return aColores[iIndiceColor];
}


// MAIN
console.log(esAnioBisiesto());
console.log(obtenerSiguienteColor());
console.log(obtenerSiguienteColor());
console.log(obtenerSiguienteColor());
console.log(obtenerSiguienteColor());
console.log(obtenerSiguienteColor());
console.log(obtenerSiguienteColor());
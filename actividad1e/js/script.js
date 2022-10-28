/**
* Función que realiza la suma de dos números y devuelve el resultado
* @param {number} a Primer sumando
* @param {number} b Segundo sumando
* @returns {number} Suma de los dos sumandos que recibe como parámetro
*/
function suma(a, b) {
    return a + b;
}

/**
 * Función que realiza el cálculo de la media aritmética de los dos números que recibe como parámetros
 * @param {number} a Primer número al que calcular la media
 * @param {number} b Segundo número al que calcular la media
 * @returns {number} Media aritmética de los parámetros de entrada
 */
function media(num1, num2) {
    return suma(num1, num2) / 2;
}

// Números a los que se va a calcular la media aritmética
let num1 = 10;
let num2 = 20;
// Se calcula la media aritmética de dos números
let m = media(num1, num2);

// Se imprime la media por la consola
console.log("La media de los números " + num1 + ", " + num2 + " es: " + m);
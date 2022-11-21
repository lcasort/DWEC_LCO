/**
 * Función para carcular la circunferencia de un círculo a partir de su radio.
 * @param {number} r 
 * @returns 
 */
function circunferencia(r)
{
    return 2 * Math.PI * r;
}

/**
 * Función para carcular el área de un círculo a partir de su radio.
 * @param {number} r 
 * @returns 
 */
function area(r)
{
    return Math.PI * Math.pow(r,2);
}

console.log(circunferencia(5));
console.log(area(5));
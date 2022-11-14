/**
 * -----------------------------------------------------------------------------
 *                                  FUNCTIONS
 * -----------------------------------------------------------------------------
 */

/**
 * Función que comprueba si es un número.
 * @param {*} num 
 * @returns 
 */
function isNumber(num)
{
    return !Number.isNaN(num);
}

/**
 * Función que comprueba si un número es entero.
 * @param {*} num 
 * @returns 
 */
function isInt(num)
{
    return Number.isInteger(num);
}

/**
 * Función que convierte el número a una cadena.
 * @param {*} num 
 * @returns 
 */
function numToStr(num)
{
    return num.toString();
}

/**
 * Función que formatea el número para que solo tenga un número decimal.
 * @param {*} num 
 * @returns 
 */
function formatToOneDecimal(num)
{
    return num.toFixed(1);
}



/**
 * -----------------------------------------------------------------------------
 *                                    MAIN
 * -----------------------------------------------------------------------------
 */
console.log('isNumber(123.123): ' + isNumber(123.123));
console.log('isInt(123.123): ' + isInt(123.123));
console.log('numToStr(123.123): ' + numToStr(123.123));
console.log('formatToOneDecimal(123.123): ' + formatToOneDecimal(123.123));
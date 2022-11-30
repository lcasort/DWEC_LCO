////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS //
////////////////////////////////////////////////////////////////////////////////
/**
 * Función que devuelve 'par' si un número es par e 'impar' en caso contrario.
 * @param {number} num 
 * @returns string
 */
function oddOrEven(num)
{
    let res = 'par';
    if(num%2 !== 0) {
        res = 'impar';
    }

    return res;
}

/**
 * Función que genera un número aleatorio entre un mínimo y un máximo dado.
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
function getRandomBetween(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}


////////////////////////////////////////////////////////////////////////////////
// MAIN //
////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < 500; i++) {
    const num = getRandomBetween(1, 10000);
    console.log(`El número ${num} es ${oddOrEven(num)}`);
}
/**
 * Función para filtrar los elementos de un array por la condición dada.
 * @param {array} array 
 * @param {function} callback 
 */
function filter(array, callback)
{
    let filteredArray = [];

    array.forEach(x => {
        if(callback(x)) { filteredArray.push(x); }
    });

    return filteredArray;
}

/**
 * Función que devuelve true si el número pasado por parámetro es mayor o igual
 * que 10 y false en caso contrario.
 * @param {number} num 
 */
function isGreaterEqualThan10(num)
{
    return num >= 10;
}



// CONSTANTS
const a = [10,30,8,7,50,2];

// MAIN
console.log(filter(a,isGreaterEqualThan10));
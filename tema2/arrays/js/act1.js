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
 * Función para devolver el primer elemento que cumpla la condición dada.
 * @param {array} array 
 * @param {function} callback 
 * @returns 
 */
function find(array, callback)
{
    let res = null;

    for(let i=0; i<array.length && res===null; i++) {
        if(callback(array[i])) {
            res = array[i];
        }
    }

    return res;
}

/**
 * Función para devolver el primer elemento que cumpla la condición dada.
 * @param {function} callback
 * @param {array} array 
 * @returns 
 */
function find(array, callback)
{
    let res = null;

    for(let i=0; i<array.length && !res; i++) {
        if(callback(array[i], i, array)) {
            res = array[i];
        }
    }

    return res;
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

/**
 * Función que devuelve true si el número pasado por parámetro es par y false
 * en caso contrario.
 * @param {number} num 
 * @returns 
 */
function isEven(num)
{
    return num%2 === 0;
}

/**
 * Función que devuelve el primer número repetido del array.
 * @param {number} elem 
 * @param {number} index 
 * @param {array} array 
 * @returns 
 */
function firstRepeated(elem, index, array)
{
    let res = false;

    for(let i=index+1; i<array.length && !res; i++) {
        if(elem === array[i]) {
            res = true;
        }
    }

    return res;
}




// CONSTANTS
const a = [10,30,8,7,50,2];
const elems = [30,2,3,8,24];
const els = [3,6,9,7,7,4,9];

// MAIN
console.log(filter(a,isGreaterEqualThan10));
console.log(find(a,isGreaterEqualThan10));
console.log(filter(elems,isEven));
console.log(filter(elems, function (num) { return num%2 === 0; }));
console.log(filter(elems, num => num%2 === 0));
console.log(find(els,firstRepeated));
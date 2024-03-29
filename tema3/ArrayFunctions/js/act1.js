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
        res = elem === array[i];
    }

    return res;
}

/**
 * Función que crea un nuevo array con los resultados de la llamada a la función
 * callback indicada aplicados a cada uno de sus elementos.
 * @param {array} array 
 * @param {function} callback 
 * @returns 
 */
function map(array, callback)
{
    let res = [];

    for(let i=0; i<array.length; i++) {
        res.push(callback(array[i],i,array));
    }

    return res;
}

/**
 * Función que duplica el valor de un número.
 * @param {number} num 
 * @returns 
 */
function double(elem)
{
    return elem*2;
}

/**
 * Función que determina si todos los elementos en el array satisfacen una
 * condición.
 * @param {array} array 
 * @param {function} callback 
 * @returns 
 */
function every(array, callback)
{
    let res = true;

    for(let i=0; i<array.length && res; i++) {
        res = callback(array[i], i, array);
    }

    return res;
}

/**
 * Función que recibe un objeto de tipo persona y devuelve true si es mayor de
 * edad o false en caso contrario.
 * @param {*} elem 
 * @returns 
 */
function mayorEdad(elem)
{
    return elem.edad >= 18;
}




/*
--------------------------------------------------------------------------------
                                 CONSTANTS
--------------------------------------------------------------------------------
*/
const a = [10,30,8,7,50,2];
const elems = [30,2,3,8,24];
const els = [3,6,9,7,7,4,9];
const arr = [1,2,3,4,5,6,7,8,9,10];
const personas = [
    p1 = {
        nombre: 'Pepe',
        edad: 12
    },

    p2 = {
        nombre: 'Ana',
        edad: 23
    },

    p3 = {
        nombre: 'Lucía',
        edad: 22
    },

    p4 = {
        nombre: 'Jose',
        edad: 17
    },

    p5 = {
        nombre: 'Chiara',
        edad: 18
    }
];
const personas2 = [
    p1 = {
        nombre: 'Pepe',
        edad: 21
    },

    p2 = {
        nombre: 'Ana',
        edad: 23
    },

    p3 = {
        nombre: 'Lucía',
        edad: 22
    },

    p4 = {
        nombre: 'Jose',
        edad: 50
    },

    p5 = {
        nombre: 'Chiara',
        edad: 48
    }
];

/*
--------------------------------------------------------------------------------
                                    MAIN
--------------------------------------------------------------------------------
*/
console.log(filter(a,isGreaterEqualThan10));
console.log(find(a,isGreaterEqualThan10));
console.log(filter(elems,isEven));
console.log(filter(elems, function (num) { return num%2 === 0; }));
console.log(filter(elems, num => num%2 === 0));
console.log(find(els,firstRepeated));
console.log(map(arr,double));
console.log(map(arr,num => num/2));
console.log(every(personas,mayorEdad));
console.log(every(personas2,mayorEdad));
console.log(personas.filter(p => mayorEdad(p)));
console.log(personas.filter(p => mayorEdad(p)).find(p => p.nombre==='Ana'));
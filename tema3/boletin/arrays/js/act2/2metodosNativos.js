/************************************************************ */
/** 1. Añadir o eliminar un elemento al principio o al final **/
/************************************************************ */
const aLetras = ["b", "c", "d"];
//a. (push) Añade la letra "e" al final del array.
aLetras.push("e");
//b. (pop) Elimina el último elemento del array.
aLetras.pop();
//c. (unshift) Añade la letra "a" al principio del array.
aLetras.unshift("a");
//d. (shift) Elimina el primer elemento del array.
aLetras.shift();

/****************************************** */
/** 2. Añadir multiples elementos al final **/
/****************************************** */
const aNumeros = [1, 2, 3];
//a. (concat) Añade al final del array los elementos 4, 5, 6.
aNumeros.concat([4, 5, 6]);

/************************** */
/** 3. Obtener un subarray **/
/************************** */
const aNumeros2 = [1, 2, 3, 4, 5];
//a. (slice) Extrae el array [4, 5]
aNumeros2.slice(-2);
//b. (slice) Extrae el array [3, 4]
aNumeros2.slice(2,4);
//c. (slice) Extrae el array [2, 3]
aNumeros2.slice(1,3);

/******************************************************** */
/** 4. Añadir o eliminar elementos en cualquier posicion **/
/******************************************************** */
const aNumeros3 = [1, 5, 7];
//a. (splice) Añade los elementos 2, 3 y 4 después del 1.
aNumeros3.splice(1, 0, 2, 3, 4);
//b. (splice) Añade el elemento 6 entre el 5 y el 7.
aNumeros3.splice(5, 0, 6);
//c. (splice) Elimina los elementos 2 y 3.
aNumeros3.splice(1, 2);

/************************************* */
/** 5. Rellenar un array con un valor **/
/************************************* */
const arrayFill = new Array(5);
//a. (fill) Crea un nuevo array con 5 posiciones con el valor 1.
arrayFill.fill(1, 0, 5);
//b. (fill) Rellena todo el array con el valor "a".
arrayFill.fill('a');
//c. (fill) Rellena el array con el valor "b" a partir de la segunda posición.
arrayFill.fill('b', 1);

/**************************************** */
/** 6. Ordenar arrays y darles la vuelta **/
/**************************************** */
const aNumeros4 = [1, 2, 3, 4, 5];
//a. (reverse) Da la vuelta a los elementos del array.
aNumeros4.reverse();

const aNumeros5 = [5, 3, 2, 4, 1];
//b. (sort) Ordena de menor a mayor los elementos del array.
aNumeros5.sort();

const aPersonas = [
  {nombre: "Susana", edad: 30},
  {nombre: "Antonio", edad: 18},
  {nombre: "Manuel", edad: 45}
];
//c. (sort) Ordena el array por orden alfabético.
aPersonas.sort((x, y) => {
  let res = 0;
  if(x.nombre > y.nombre) {res = 1;}
  else if(x.nombre < y.nombre) {res = -1;}
  return res;
});

/************************************* */
/** 7. Búsqueda de elementos en array **/
/************************************* */
const oPersona = { nombre: "Javier" };
const aDatos = [1, 5, "a", oPersona, true, 5, [1, 2], "9"];
//a. (indexOf) Obtén la primera posición que ocupa el elemento 5.
aDatos.indexOf(5);
//b. (lastIndexOf) Obtén la última posición que ocupa el elemento 5.
aDatos.lastIndexOf(5);

const aDatos2 = [
  { id: 5, nombre: "Julia" }, 
  { id: 7, nombre: "Francisco" }
];
//c. (findIndex) Obtén la posición del elemento con id 5.
aDatos2.findIndex(x => x.id === 5);
//d. (findIndex) Obtén la posición del elemento con nombre "Francisco".
aDatos2.findIndex(x => x.nombre === "Francisco");
//e. (find) Obtén el elemento con id 5.
aDatos2.find(x => x.id === 5);

const iNumeros6 = [5, 7, 12, 15, 17];
//f. (some) Indica si el array contiene algún elemento par.
iNumeros6.some(x => x%2 === 0);

const iNumeros7 = [4, 6, 16, 36];
//g. (every) Indica si todos los elementos del array son pares.
iNumeros7.every(x => x%2 === 0);

/**************************** */
/** 8. map, filter y reduce. **/
/**************************** */
const aCarro = [ 
  { nombre: "Sandía", precio: 6.95 }, 
  { nombre: "Melón", precio: 3.25 },
  { nombre: "Chocolate", precio: 1.5 },
  { nombre: "Pan", precio: 0.75 }
];
//a. (map) Obtén un array con los nombres de los productos.
aCarro.map(x => x.nombre);
//b. (map) Obtén un array con los precios de los productos.
aCarro.map(x => x.precio);
//c. (map) Obtén un array con los precios con IVA de los productos.
aCarro.map(x => x.precio * 1.21);
//d. (filter) Obtén un array con los elementos que valgan más de 2 euros.
aCarro.filter(x => x.precio > 2.);
//e. (reduce) Obtén la cuenta total de todos los elementos.
const ini = 0;
const sum = aCarro.reduce((acc, curr) => acc + curr.precio, ini);
aCarro.map(x => x.precio).reduce((previousValue, currentValue) => {return previousValue+currentValue});

/**************************************** */
/** 9. Convertir un array en una cadena. **/
/**************************************** */
const aElementos = ['Viento', 'Lluvia', 'Fuego'];
//a. (join) Obtén una cadena como esta "Viento,Lluvia,Fuego"
aElementos.join(',');
//b. (join) Obtén una cadena como esta "Viento, Lluvia, Fuego"
aElementos.join(', ');
//c. (join) Obtén una cadena como esta "VientoLluviaFuego"
aElementos.join('');
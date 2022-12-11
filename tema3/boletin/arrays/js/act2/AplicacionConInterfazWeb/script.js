/** Obtiene un número de la entrada especificada: oEntrada1 o oEntrada2. */
function getNumero(oEntrada) {
  const sValorEntrada = oEntrada.value;
  if (!sValorEntrada) {
    alert(`Introduce un valor en el campo: ${oEntrada.id}`);
    throw new Error(`El campo de entrada: ${oEntrada.id} está vacío.`);
  }
  if (isNaN(sValorEntrada)) {
    alert(`Introduce un número en el campo: ${oEntrada.id}`);
    throw new Error(`El campo de entrada: ${oEntrada.id} no es un número.`);
  }
  return parseInt(sValorEntrada);
}

/** Obtiene un array de la entrada especificada: oEntrada1 o oEntrada2. 
 * Para obtener el array [1, 2, 3] se debe especificar 123 en la entrada. */
function getArray(oEntrada) {
  const sValorEntrada = oEntrada.value;
  return Array.from(sValorEntrada);
}

/** Array de datos para manipular*/
const aArray = [];

/** Muestra el contenido actual de aArray en la interfaz. */
function mostrarArrayInterfaz() {
  const pArrayActual = document.getElementById("arrayActual");
  pArrayActual.textContent = `[${aArray.toString()}]`;
}

/** Muestra una cadena de salida en la interfaz. */
function mostrarSalidaInterfaz(sCadena) {
  const oSalida = document.getElementById("salida");
  oSalida.textContent = sCadena;
}

/** Suscribe una función a cada botón. */
const oBotones = document.getElementsByTagName("li");
const aAcciones = [accionPush, accionPop, accionUnshift, accionShift, accionConcat, accionSlice1, accionSlice2, accionSplice1, accionSplice2, accionFill1, accionFill2, accionReverse, accionSort, accionIndexOf, accionLastindexof, accionFindIndex, accionFind, accionSome, accionEvery, accionMap, accionFilter, accionReduce, accionJoin];
const aBotones = Array.from(oBotones);
aBotones.forEach(asignaAccionesABotones);
function asignaAccionesABotones(oBoton, indice) {
  oBoton.addEventListener("click", aAcciones[indice]);
}

const oEntrada1 = document.getElementById("entrada1");
const oEntrada2 = document.getElementById("entrada2");

/******************************************************* */
/** Añadir o eliminar elementos al principio o al final **/
/******************************************************* */
//Añade la entrada 1 al final del array.
function accionPush() {
  const iNuevoNumero = getNumero(oEntrada1);
  //TODO
  mostrarArrayInterfaz();
}
//Quita el último elemento del array.
function accionPop() {
  //TODO
}
//Añade la entrada 1 al principio del array.
function accionUnshift() {
  //TODO
}
//Quita el primer elemento del array.
function accionShift() {
  //TODO
}
/*************************************** */
/** Añadir multiples elementos al final **/
/*************************************** */
//Añade el array [4, 5, 6] al final del array.
function accionConcat() {
  const iNuevoArray = getArray(oEntrada1);
  //TODO
  mostrarArrayInterfaz();
}

/*********************** */
/** Extraer un subarray **/
/*********************** */
/** Muestra un subarray partiendo del final del array con la cantidad de 
 * elementos indicada por la entrada 1.*/
function accionSlice1() {
  //TODO
}
/** Muestra un subarray desde el índice definido por la entrada 1 hasta 
 * el índice definido por la entrada 2.*/
function accionSlice2() {
  //TODO
}

/***************************************************** */
/** Añadir o eliminar elementos de cualquier posicion **/
/***************************************************** */
/** Añade los elementos 2, 3 y 4 a partir de la segunda posición del array. */
function accionSplice1() {
  //TODO
}
/** Quita los elementos del array que ocupen la tercera y la cuarta posición. */
function accionSplice2() {
  //TODO
}

/********************************** */
/** Rellenar un array con un valor **/
/********************************** */
// Inicializa un array de 5 datos al valor de la entrada 1.
function accionFill1() {
  //TODO
}
/** Inicializa un array de 7 datos al valor de la entrada 1 a partir de la segunda 
 * posición del array. */
function accionFill2() {
  //TODO
}

/********************************** */
/** Dar la vuelta y ordenar arrays **/
/********************************** */
//Coloca los datos del array en orden inverso.
function accionReverse() {
  //TODO
}
//Ordena los datos del array de menor a mayor.
function accionSort() {
  //TODO
}

/*********************************** */
/** Búsqueda de elementos en arrays **/
/*********************************** */
//Obtén el índice del array que coincida con la entrada 1.
function accionIndexOf() {
  //TODO
}
/** Obtén el índice del último elemento del array que coincida con la entrada 1.*/
function accionLastindexof() {
  //TODO
}
// Obtén el índice del elemento que sea mayor que la entrada 1.
function accionFindIndex() {
  //TODO
}
//Obtén el primer elemento que coincida con la entrada 1.
function accionFind() {
  //TODO
}
//Comprueba si hay algún elemento en el array mayor que la entrada 1.
function accionSome() {
  //TODO
}
//Comprueba si todos los elementos del array son mayores que la entrada 1.
function accionEvery() {
  //TODO
}

/**************************************************** */
/** Operaciones fundamentales: map, filter y reduce. **/
/**************************************************** */
/** Obtén un nuevo array cuyos elementos sean el doble de los elementos
 * actuales. */
function accionMap() {
  //TODO
}
/** Obtén un nuevo array con todos los elementos del array mayores de
 * la entrada 1.*/
function accionFilter() {
  //TODO
}
//Obtén el valor de sumar todos los elementos del array.
function accionReduce() {
  //TODO
}

/************************************* */
/** Convertir un array en una cadena. **/
/************************************* */
//Convierte el array actual a una cadena.
function accionJoin() {
  //TODO
}
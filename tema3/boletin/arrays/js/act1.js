/*
Realiza las siguientes actividades de introducción para la declaración, acceso y manipulación de
arrays:
*/
/*
    a) Arrays unidimensionales: Declara un array unidimensional e inicialízalo con los valores
    100, 200, 300, 400 y 500. A continuación imprímelo por consola con el siguiente formato:
    El array tiene en la posición 0 el valor 1.
    El array tiene en la posición 1 el valor 2.
    ...
    Realiza la operación anterior utilizando un bucle forEach (MDN) y un bucle for...of
    (MDN)
*/
const arrayUnid = [100, 200, 300, 400, 500];
let index = 0;
arrayUnid.forEach(x => {
    console.log(`El array tiene en la posición ${index} el valor ${x}.`);
    index++;
});
index = 0;
for (const i of arrayUnid) {
    console.log(`El array tiene en la posición ${index} el valor ${i}.`);
    index++;
}

/*
    b) Array bidimensionales: Genera un array bidimensional de 5 x 5 posiciones e
    inicialízalo con los siguientes valores:
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
*/
const arrayBid = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];
arrayBid.forEach(x => {
    console.log(x);
});

/*
    c) Arrays paralelos: El usar arrays para almacenar información, facilita una gran
    versatilidad en las aplicaciones, a la hora de realizar búsquedas de elementos dentro del array. Pero
    en algunos casos, podría ser muy útil hacer las búsquedas en varios arrays a la vez, de tal forma que
    podamos almacenar diferentes tipos de información, en arrays que estén sincronizados.
    Cuando tenemos dos o más arrays, que utilizan el mismo índice para referirse a términos
    homólogos, se denominan arrays paralelos.
    Por ejemplo consideremos los siguientes arrays:
    Usando estos tres arrays de forma sincronizada, y haciendo referencia a un mismo índice (por
    ejemplo índice=3), podríamos saber que Benjamín es profesor de Redes y tiene 26 alumnos en
    clase.
*/
let profesores = ['Cristina','Catalina','Vieites','Benjamin'];
let asignaturas = ['Seguridad','Bases de Datos','Sistemas Informáticos','Redes'];
let alumnos = [24,17,28,26];
/*
    Veamos un ejemplo de código que recorrería todos los profesores que tengamos en el array
    imprimiendo la información sobre la asignatura que imparten y cuantos alumnos tienen en clase:
*/
function imprimeDatos() {
    for (let i = 0; i < profesores.length; i++) {
        console.log(`${profesores[i]} del módulo de ${asignaturas[i]}, tiene ${alumnos[i]} alumnos en clase.`);
    }
}

imprimeDatos();
/*
    Para que los arrays paralelos sean homogéneos, éstos tendrán que tener la misma longitud, ya que
    de esta forma se mantendrá la consistencia de la estructura lógica creada.
    Entre las ventajas del uso de arrays paralelos tenemos:
    • Se pueden usar en lenguajes que soporten solamente arrays, como tipos primitivos y no
    objetos o registros (como puede ser JavaScript).
    • Son fáciles de entender y utilizar.
    • Pueden ahorrar una gran cantidad de espacio, en algunos casos evitando complicaciones de
    sincronización.
    • El recorrido secuencial de cada posición del array, es extremadamente rápido en las
    máquinas actuales.
    Implementa una aplicación que utilizando arrays paralelos permita al usuario introducir el número
    de un mes y le devuelva el nombre del mes y si se trata de un mes lectivo.
*/
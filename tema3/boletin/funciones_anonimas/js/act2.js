/*
Actividad 2. Funciones que reciben funciones.
En JavaScript hay numerosos ejemplos de funciones que necesitan otras funciones para llevar a
cabo su tarea. Las funciones anónimas permiten simplificar y mejorar la legibilidad del código.
    a) Utiliza la función setTimeOut para mostrar un saludo por consola una vez transcurridos 5
    segundos.
*/
setTimeout(function () {
    console.log('Holaa');
}, 5000);
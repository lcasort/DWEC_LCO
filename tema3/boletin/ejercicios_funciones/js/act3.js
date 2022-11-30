/*
Actividad 3. Saluda a la clase.
Crea una función que reciba todos los nombres de los alumnos de una clase y los salude por
consola.
*/
function welcome(elems)
{
    for (let i = 0; i < elems.length; i++) {
        console.log(`Hola ${elems[i]}`);
    }
}


console.log(welcome(['Laura', 'Ana', 'Cristina', 'Marta']));
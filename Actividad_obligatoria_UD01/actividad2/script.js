/*
DECLARACIÓN DE CONSTANTES
*/
const MENU = '¿Qué desea hacer hoy?\n\t'
+ '1. Número par o impar\n\t'
+ '2. Saludo\n\t'
+ '3. Salir';

const PREGUNTAR_OPCION = 'Introduzca la opción (1 - 3)';
const OPCION_POR_DEFECTO = '1';

const PREGUNTAR_OPCION_1 = 'Introduzca un número mayor o igual a cero';
const VALOR_POR_DEFECTO_OPCION_1 = '0';

const PREGUNTAR_OPCION_2 = 'Introduzca su nombre';
const VALOR_POR_DEFECTO_OPCION_2 = 'Manuela';

const MENSAJE_ERROR_NO_NUMERO = 'El valor introducido no es un número.';
const MENSAJE_ERROR_FUERA_RANGO = 'El valor introducido es un número pero no '
+ 'está en el rango indicado.';
const MENSAJE_ERROR_MENOR_IGUAL_CERO = 'El valor introducido no es igual o '
+ 'mayor a cero.';
const MENSAJE_ERROR_CADENA_VACIA = 'El valor introducido es una cadena vacía.';

const MENSAJE_NUMERO_PAR = 'El número es par.';
const MENSAJE_NUMERO_IMPAR = 'El número es impar.';

const MENSAJE_BIENVENIDA = 'Bienvenido/a';

const MENSAJE_DESPEDIDA = 'Vuelve cuando lo necesites.';


/**
 * Función para mostrar por consola el menú.
 */
function iniciarMenu()
{
    console.log(MENU);

    elegirOpcion();
}

/**
 * Función para elegir una opción del menú.
 */
function elegirOpcion()
{
    const OPCION_SELECCIONADA = preguntar(PREGUNTAR_OPCION, OPCION_POR_DEFECTO);
    let num = parseInt(OPCION_SELECCIONADA);

    // Si no se ha introducido un número:
    if (isNaN(num)) {
        console.log(MENSAJE_ERROR_NO_NUMERO);
    // Si el número está fuera del rango:
    } else if (num < 1 || num > 3) {
        console.log(MENSAJE_ERROR_FUERA_RANGO);
    // En cualquier otro caso:
    } else {
        loadOption(num);
    }
}

/**
 * Función para llevar a cabo las acciones necesarias para cada opción.
 * @param {*} num 
 */
function loadOption(num)
{
    switch (num) {
        // Se selecciona la opción 1:
        case 1:
            const INPUT_OPCION_1 = preguntar(PREGUNTAR_OPCION_1,
                VALOR_POR_DEFECTO_OPCION_1);
            let input1 = parseInt(INPUT_OPCION_1);

            // Si no se ha introducido un número:
            if (isNaN(input1)) {
                console.log(MENSAJE_ERROR_NO_NUMERO);
            // Si el número es menor que 0:
            } else if (input1 < 0) {
                console.log(MENSAJE_ERROR_MENOR_IGUAL_CERO);
            // En cualquier otro caso:
            } else {
                esPar(input1);
            }

            break;

        // Se selecciona la opción 2:
        case 2:
            const INPUT_OPCION_2 = preguntar(PREGUNTAR_OPCION_2,
                VALOR_POR_DEFECTO_OPCION_2);

            // Si se ha introducido una cadena vacía o solo espacios en blanco:
            if (INPUT_OPCION_2 === null ||
                INPUT_OPCION_2.match(/^ *$/) !== null) {
                console.log(MENSAJE_ERROR_CADENA_VACIA);
            // En cualquier otro caso:
            } else {
                console.log(MENSAJE_BIENVENIDA + ` ${INPUT_OPCION_2}`);
            }
            
            break;

        // Se selecciona la opción 3:
        case 3:
            console.log(MENSAJE_DESPEDIDA);
            break;
    }
}

/**
 * Función para preguntar por un prompt con valor por defecto.
 * @param {*} pregunta 
 * @param {*} valorPorDefecto 
 * @returns 
 */
function preguntar(pregunta, valorPorDefecto)
{
    return prompt(pregunta, valorPorDefecto);
}

/**
 * Función para comprobar si un número es par o impar.
 * @param {*} num 
 */
function esPar(num)
{
    if(num % 2 === 0) {
        console.log(MENSAJE_NUMERO_PAR);
    } else {
        console.log(MENSAJE_NUMERO_IMPAR);
    }
}
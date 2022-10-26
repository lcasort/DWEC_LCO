const MENU = '¿Qué desea hacer hoy?\n\t'
+ '1. Número par o impar\n\t'
+ '2. Saludo\n\t'
+ '3. Salir';

const PREGUNTAR_OPCION = 'Introduzca la opción (1 - 3)';
const OPCION_POR_DEFECTO = '1';

const MENSAJE_ERROR_NO_NUMERO = 'El valor introducido no es un número.';
const MENSAJE_ERROR_FUERA_RANGO = 'El valor introducido es un número pero no está en el rango indicado.';

function iniciarMenu()
{
    console.log(MENU);

}

function elegirOpcion()
{
    const OPCION_SELECCIONADA = prompt(PREGUNTAR_OPCION, OPCION_POR_DEFECTO);
    let num = parseInt(OPCION_SELECCIONADA);

    if (isNaN(num)) {
        console.log(MENSAJE_ERROR_NO_NUMERO);
    } else if (num < 1 || num > 3) {
        console.log(MENSAJE_ERROR_FUERA_RANGO);
    } else {
        
    }
}
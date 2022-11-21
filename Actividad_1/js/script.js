///////////////////////////// FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO (AQUÍ NO TOQUES EL CÓDIGO) /////////////////////////
/**
 * Función que devuelve el valor del ancho seleccionado mediante el "slider"
 * correspondiente
 * @returns ancho que se configurará en la ventana.
 */
function obtenerValorAncho() {
    return sliderAncho.value;
}

/**
 * Función que devuelve el valor del alto seleccionado mediante el "slider"
 * correspondiente
 * @returns alto que se configurará en la ventana.
 */
function obtenerValorAlto() {
    return sliderAlto.value;
}
///////////////////////////// FIN FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO /////////////////////////



///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////
const CLAVE_ALTO_SESS_STORAGE = 'alto';
const CLAVE_ANCHO_SESS_STORAGE = 'ancho';

let ventana = null;

/**
 * Fución que, si la ventana no está creada, la crea con los valores de ancho y
 * alto seleccionados y, en caso contrario, avisa de que la ventana ya está
 * abierta.
 */
function crearNuevaVentana() {
    // Si la ventana está abierta...
    if(ventana) {

        // Mostramos un mensaje por consola indicando que la ventana ya está abierta.
        console.log('La ventana ya está abierta.');

    // En cualquier otro caso...
    } else {
        // Obtenemos los valores de ancho y alto seleccionados.
        const ancho = obtenerValorAncho();
        const alto = obtenerValorAlto();
        // Guardamos dichos valores en sessionStorage.
        sessionStorage.setItem(CLAVE_ANCHO_SESS_STORAGE, ancho);
        sessionStorage.setItem(CLAVE_ALTO_SESS_STORAGE, alto);
        // Abrimos la ventana con los valores de ancho y alto seleccionados. 
        const configuracion_ventana = `width=${ancho},height=${alto}`;
        ventana = window.open('./ventana.html', '_blank', configuracion_ventana);
        // Escribimos en la ventana el siguiente mensaje.
        ventana.document.open();
        ventana.document.write(`<h2>Nueva ventana de ${ancho}x${alto}</h2>`);
        ventana.document.close();

    }
}

/**
 * Función que, si la ventana está creada, la redimensiona con los valores de
 * ancho y alto seleccionados y, en caso contrario, avisa de que la ventana no
 * está abierta.
 */
function redimensionarVentana() {
    // Si la ventana está abierta...
    if(ventana) {
        // Obtenemos los valores de ancho y alto guardados en sessionStorage.
        const anchoAnterior = sessionStorage.getItem(CLAVE_ANCHO_SESS_STORAGE);
        const altoAnterior = sessionStorage.getItem(CLAVE_ALTO_SESS_STORAGE);
        // Obtenemos los valores de ancho y alto seleccionados.
        const ancho = obtenerValorAncho();
        const alto = obtenerValorAlto();

        // Si mantenemos el mismo ancho y alto...
        ventana.document.open();
        if(anchoAnterior===ancho && altoAnterior===alto) {
            // Escribimos en la ventana el siguiente mensaje.
            ventana.document.write(`<h2>Ventana sigue a ${ancho}x${alto}</h2>`);
        // En caso de que se cambie el ancho y/u alto...
        } else {
            // Redimensionamos la ventana a los valores seleccionados.
            ventana.resizeTo(ancho, alto);
            // Actualizamos los valores de sessionStorage.
            sessionStorage.setItem(CLAVE_ANCHO_SESS_STORAGE, ancho);
            sessionStorage.setItem(CLAVE_ALTO_SESS_STORAGE, alto);
            // Escribimos en la ventana el siguiente mensaje.
            ventana.document.write(`<h2>Ventana redimensionada a ${ancho}x${alto}</h2>`);
        }
        // Cerramos la ventana.
        ventana.document.close();

    // En cualquier otro caso...
    } else {
        // Mostramos un mensaje por consola indicando que la ventana no está abierta.
        console.log('La ventana no está abierta.');
    }
}

/**
 * Función que, si la ventana está creada, la cierra y, en caso contrario,
 * avisa de que la ventana no está abierta.
 */
function cerrarVentana() {
    // Si la ventana está abierta...
    if(ventana) {

        // La cerramos.
        ventana.close();
        // Borramos de sessionStorage los valores de ancho y alto de la ventana.
        sessionStorage.removeItem(CLAVE_ANCHO_SESS_STORAGE);
        sessionStorage.removeItem(CLAVE_ALTO_SESS_STORAGE);
        // Ponemos a null la variable que referencia a la ventana abierta.
        ventana = null;

    // En cualquier otro caso...
    } else {

        // Mostramos un mensaje por consola indicando que la ventana no está abierta.
        console.log('La ventana no está abierta.');

    }
}
///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////
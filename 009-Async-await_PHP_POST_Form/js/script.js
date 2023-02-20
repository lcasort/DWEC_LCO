// Constantes que contienen las clases utilizadas para el tratamiento visual de los errores
const CLASE_ERROR_CAMPO = "error";
const CLASE_ERROR_MENSAJE = "campoAnadir";

crearListeners();

/**
 * Método que crea todos los listeners necesarios para el tratamiento de errores en el formulario
 */
function crearListeners() {
    // Establecemos el nonvalidate desde JavaScript para permitir que si no se carga nuestro código JavaScript
    // que podamos contar con la validación nativa de HTML5
    document.getElementById("formulario").setAttribute("novalidate", true);
    //////////////////// ACTIVIDAD 1 ////////////////////////////
    // Eventos al peder el foco (se comprueba si existe error en el campo)
    document.getElementById("email").addEventListener("blur", validarCampoEvento, false);
    document.getElementById("pass").addEventListener("blur", validarCampoEvento, false);
    document.getElementById("nombre").addEventListener("blur", validarCampoEvento, false);
    document.getElementById("edad").addEventListener("blur", validarCampoEvento, false);
    //////////////////// ACTIVIDAD 2 ////////////////////////////
    // Eventos lanzados al producirse una validación negativa de cada campo (se muestran los errores en la intefaz gráfica)
    document.getElementById("email").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("pass").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("nombre").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("edad").addEventListener("invalid", notificarErroresEvento, false);
    //////////////////// ACTIVIDAD 3 ////////////////////////////
    // Eventos lanzados al producirse una validación negativa de cada campo (se limpian los errores de la intefaz en caso de ser necesario)
    document.getElementById("email").addEventListener("input", revisarErroresEvento, false);
    document.getElementById("pass").addEventListener("input", revisarErroresEvento, false);
    document.getElementById("nombre").addEventListener("input", revisarErroresEvento, false);
    document.getElementById("edad").addEventListener("input", revisarErroresEvento, false);
    // Evento para el tratamiento de los errores al hacer "submit" en el formulario
    document.getElementById("formulario").addEventListener("submit", validarFormularioEvento, false);
}

/**
 * Método que se invoca cuando se hace "submit" del formulario y se encarga de validar todos los
 * campos del formulario a la vez para mostrar todos los errores que se dan.
 * @param {Event} e Objeto evento usado para detener la operación de envío del formulario en caso
 * de que exista un error
 */
function validarFormularioEvento(e) {
    let formValido = validarCampo(document.getElementById("email"));
    formValido = validarCampo(document.getElementById("pass")) && formValido;
    formValido = validarCampo(document.getElementById("nombre")) && formValido;
    formValido = validarCampo(document.getElementById("edad")) && formValido;
    // En cualquier caso, no dejamos que el formulario se envíe sólo, porque
    // lo queremos hacer mediante "async-await"
    e.preventDefault();
    if(formValido) {
        // Se envían los datos del formulario
        enviarFormulario(e.target);
    }
}

/**
 * Método que envía los datos del formulario a "pruebaFormulario.php"
 * @param {HTMLElement} formulario elemento HTML representando el formulario
 * en el que se ha hecho "submit" 
 */
async function enviarFormulario(formulario) {
    const respuesta = await fetch(`pruebaFormulario.php`, {
        method : "POST",
        // Especificamos que el tipo de contenido es "form-data"
        // headers : {
        //     "content-type" : "multipart/form-data"
        // },
        /* El cuerpo de la petición será un objeto "FormData",
            que es codificado y enviado como "multipart/form-data".
            Desde el punto de vista del servidor, será un envío de formulario
            normal
        */
        body : new FormData(formulario)
    });

    const objetoRespuesta = await respuesta.json();
    // Dependiendo de la respuesta se mostrará un error o se mostrará un
    // mensaje de que todo ha ido bien
    manejarRespuesta(objetoRespuesta);
}

/**
 * 
 * @param {Object} respuesta objeto que contiene la respuesta del servidor 
 */
function manejarRespuesta(respuesta) {
    // La respuesta es correcta
    if(respuesta.validacion === "ok") {
        // Obtenemos el contenedor del mensaje y escribimos el mensaje dentro
        const contenedorMensaje = document.getElementById("validacionOK");
        contenedorMensaje.textContent = `El usuario con email ${respuesta.valor} ha sido dado de alta correctamente`;
        // Lo hacemos visible ...
        contenedorMensaje.style.visibility = "visible";
        // ... y pasados 3 segundos volvemos a ocultarlo
        setTimeout(() => {
            contenedorMensaje.style.visibility = "hidden";
        }, 3000);
    }else {
        const mensajeError = [`El email aportado ya existe, seleccione otro`];
        const campoError = document.getElementById(respuesta.campo);
        mostrarMensajesErrorEn(mensajeError, campoError);
    }
}

/**
 * Método que realiza la validación de un campo de formulario cuando el campo pierde el foco.
 * Para acceder al campo se utiliza el parámetro de entrada "e", siendo un objeto asociado a
 * los eventos "Event"
 * @param {Event} e Objeto evento del que se obtiene el campo a validar
 */
function validarCampoEvento(e) {
    validarCampo(e.target);
}

/**
 * Método que realiza la validación del campo de formulario que se pasa por parámetro.
 * @param {Element} campo elemento del DOM perteneciente a un formulario que se va a validar
 * @returns true si el campo pasa la validación sin errores
 */
function validarCampo(campo) {
    // Eliminamos las evidencias visuales de error del campo (para evitar que se acumulen mensajes de error)
    eliminarErrores(campo);
    return campo.checkValidity();
}

/**
 * Método que comprueba si un campo tiene errores y si no los tiene, elimina los avisos
 * de error del campo (borde del campo pasa de rojo a negro y se eliminan los mensajes de error).
 * El campo se obtiene del objeto "Event" que se pasa como parámetro
 * @param {Event} e Objeto evento del que se obtiene el campo a validar
 */
function revisarErroresEvento(e) {
    const campo = e.target;
    if(campo.validity.valid) {
        eliminarErrores(campo);
    }
}

/**
 * Método que elimina las marcas visuales de error del campo de formulario que se pasa como parámetro.
 * 
 * @param {Element} campo elemento del DOM perteneciente a un formulario que se va a validar
 */
function eliminarErrores(campo) {
    campo.classList.remove(CLASE_ERROR_CAMPO);
    const mensajesError = document.getElementById(`${campo.name}_error`);
    if(mensajesError) {
        mensajesError.parentElement.removeChild(mensajesError);
    }
}

/**
 * Método que muestra visualmente los errores en un campo dado que se obtiene
 * del parámetro de entrada de tipo "Evento" (borde del campo pasa de negro a rojo y
 * se muestran los mensajes de error del campo)
 * @param {Event} e Objeto evento del que se obtiene el campo a validar
 */
function notificarErroresEvento(e) {
    const campo = e.target;
    campo.classList.add(CLASE_ERROR_CAMPO);
    // Contendrá los mensajes de error del campo del formulario
    let mensajes = [];
    // Campo requerido sin contenido
    if(campo.validity.valueMissing) {
        mensajes.push("Este campo no puede estar vacío");
    }
    // El contenido del campo no es el que especifica el tipo de campo
    if(campo.validity.typeMismatch) {
        mensajes.push("Los datos suministrados no tienen el formato correcto");
    }
    // El rango de valores no está entre los especificados
    if(campo.validity.rangeUnderflow || campo.validity.rangeOverflow) {
        mensajes.push(`Debe contener un valor entre ${campo.min} y ${campo.max}`);
    }
    // No se cumple el patrón definido en el campo
    if(campo.validity.patternMismatch) {
        mensajes.push("El campo debe contener al menos un número");
    }
    // Se aplican los cambios visuales en el campo si hay errores
    mostrarMensajesErrorEn(mensajes, campo);
}

/**
 * Método que incrusta los mensajes de error debajo del campo afectado
 * @param {Array} mensajes lista de los mensajes de error a mostrar en el campo 
 * @param {Element} campo elemento del DOM para el que hay que mostrar mensajes de error
 */
function mostrarMensajesErrorEn(mensajes, campo) {
    // Se crea un elemento "div" que servirá de contenedor para los mensajes
    let div = document.createElement("div");
    // Se establecen los atributos del "div" (id, aria-describedby para la accesibilidad y se añade una clase)
    div.setAttribute("id", `${campo.name}_error`);
    div.setAttribute("aria-describedby", campo.id);
    div.classList.add(CLASE_ERROR_MENSAJE);
    for(let i = 0; i < mensajes.length; i++) {
        // Cada mensaje será un párrafo "p" que se añadirá al "div"
        let parrafo = document.createElement("p");
        // Se añade el contenido del párrafo (el mensaje de error)
        parrafo.textContent = mensajes[i];
        // Se añade el párrafo al "div"
        div.appendChild(parrafo);
    }
    // Se inserta el "div" detrás del campo que ha provocado el error
    insertarDespues(campo, div);
}

/**
 * Método de utilidad que añade la funcionalidad al DOM de añadir un elemento (campoAnadir) HTML detrás
 * de otro elemento del DOM indicado (campoReferencia)
 * @param {Element} campoReferencia campo detrás del que hay que añadir el nuevo elemento
 * @param {Element} campoAnadir nuevo elemento que hay que añadir
 */
function insertarDespues(campoReferencia, campoAnadir){
    if(campoReferencia.nextSibling){
        // El elemento de referencia tiene un hermano detrás
        // El elemento a añadir se añade después del siguiente hermano de "campoReferencia"
        campoReferencia.parentNode.insertBefore(campoAnadir,campoReferencia.nextSibling); 
    } else { 
        // El elemento de referencia no tiene un hermano detrás
        // Se añade como último hijo de su padre
        campoReferencia.parentNode.appendChild(campoAnadir); 
    }
}
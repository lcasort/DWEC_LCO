const CLASE_ERROR_CAMPO = "error";
const CLASE_ERROR_MENSAJES = "campoError";

const MIN_INTERESES = 2;

crearListeners();

function crearListeners() {

    document.getElementById("nombre").addEventListener("blur", validarNombreEvento, false);

    document.getElementById("nombre").addEventListener("invalid", notificarErrorNombreEvento, false);

    document.getElementById("nombre").addEventListener("input", revisarErroresEvento, false);
    

    // Incluimos eventos para todos los checkboxes de los cursos
    const checkCursos = document.querySelectorAll("input[type='checkbox'");
    for(const checkCurso of checkCursos) {
        checkCurso.addEventListener("input", revisarErroresInteresesEvento, false);
        checkCurso.addEventListener("invalid", notificarErroresInteresesEvento, false);
    }

    // document.getElementById("formulario").addEventListener("submit", validarFormularioEvento, false);
}

/* function validarFormularioEvento(e) {
    let formValido = validarCampo(document.getElementById("nombre"));
    formValido = validarCampo(document.getElementById("pass")) && formValido;
    formValido = validarCampo(document.getElementById("email")) && formValido;
    formValido = validarCampo(document.getElementById("telefono")) && formValido;
    formValido = validarCampo(document.getElementById("telefonoAlt")) && formValido;
    formValido = validarInteresesSeleccionados() && formValido;
    
    if(!formValido) {
        e.preventDefault();
    }
} */

function validarNombreEvento(e) {
    const nombre = e.target;
    actualizarErroresNombre(nombre);
    validarCampo(nombre);
}

function actualizarErroresNombre(nombre) {
    const contenido = nombre.value;
    let mensaje = "";
    if(contenido === "") {
        mensaje = `El campo ${nombre.name} no puede estar vacío`;
    }else if(contenido.length < 8) {
        mensaje = `El campo ${nombre.name} debe tener al menos 8 caracteres`;
    }else if(contenido.length > 20) {
        mensaje = `El campo ${nombre.name} debe tener un máximo de 20 caracteres`;
    }
    nombre.setCustomValidity(mensaje);
}

function validarCampoEvento(e) {
    return validarCampo(e.target);
}

function validarCampo(campo) {
    eliminarErrores(campo);
    return campo.checkValidity();
}

function revisarErroresEvento(e) {
    const campo = e.target;
    actualizarErroresNombre(campo);
    if(campo.validity.valid) {
        eliminarErrores(campo);
    }
}

function notificarErrorNombreEvento(e) {
    const nombre = e.target;
    let mensajes = [];
    if(nombre.validity.customError) {
        mensajes.push(nombre.validationMessage);
    }
    mostrarMensajesErrorEn(mensajes, nombre);
}

function hayErrorEnCampo(campo) {
    return campo.classList.contains(CLASE_ERROR_CAMPO);
}

function eliminarErrores(campo) {
    // Eliminamos la clase de error del elemento
    campo.classList.remove(CLASE_ERROR_CAMPO);
    // Eliminamos los mensajes de error
    const contenedorErrores = document.getElementById(`${campo.name}-${CLASE_ERROR_CAMPO}`);
    if(contenedorErrores) {
        contenedorErrores.parentElement.removeChild(contenedorErrores);
    }
}

function mostrarMensajesErrorEn(mensajes, campo) {
    // añadimos la clase que cambia el borde del campo de negro a rojo
    campo.classList.add(CLASE_ERROR_CAMPO);
    let contenedorMensajes = document.createElement("div");
    // Añadimos la clase para el texto
    contenedorMensajes.classList.add(CLASE_ERROR_MENSAJES);
    // Añadimos el id del div para después poder eliminarlo con facilidad
    contenedorMensajes.id = `${campo.name}-${CLASE_ERROR_CAMPO}`;
    for(let mensaje of mensajes) {
        let parrafo = document.createElement("p");
        parrafo.textContent = mensaje;
        // Añadimos el párrafo al contenedor de mensajes
        contenedorMensajes.appendChild(parrafo);
    }
    insertarDespues(campo, contenedorMensajes);
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
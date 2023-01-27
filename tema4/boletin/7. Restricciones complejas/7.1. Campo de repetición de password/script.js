// Constantes que contienen las clases utilizadas para el tratamiento visual de los errores
const CLASE_ERROR_CAMPO = "error";
const CLASE_ERROR_MENSAJE = "campoAnadir";


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// ACTIVIDAD 1 /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Validamos cuando los elementos pierden el foco.
document.getElementById("email").addEventListener("blur", validarCampoEvento, false);
document.getElementById("pass").addEventListener("blur", validarCampoEvento, false);
document.getElementById("nombre").addEventListener("blur", validarCampoEvento, false);
document.getElementById("edad").addEventListener("blur", validarCampoEvento, false);

// Prohibimos que nos envíe el formulario a no ser que los campos sean válidos.
document.getElementById("formulario").addEventListener("submit", validarFormulario, false);



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// ACTIVIDAD 2 /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//
document.getElementById("email").addEventListener("invalid", notificarErroresEvento, false);
document.getElementById("pass").addEventListener("invalid", notificarErroresEvento, false);
document.getElementById("nombre").addEventListener("invalid", notificarErroresEvento, false);
document.getElementById("edad").addEventListener("invalid", notificarErroresEvento, false);


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// ACTIVIDAD 2 /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//
document.getElementById("email").addEventListener("input", revisarErroresEvento, false);
document.getElementById("pass").addEventListener("input", revisarErroresEvento, false);
document.getElementById("nombre").addEventListener("input", revisarErroresEvento, false);
document.getElementById("edad").addEventListener("input", revisarErroresEvento, false);



/**
 * Método que recoge el campo que desencadena el evento y lo valida.
 * @param {Event} e 
 */
function validarCampoEvento(e)
{
    return validarCampo(e.target);
}

/**
 * Método devuelve true si el campo es válido y false si no.
 * @param {Element} campo 
 * @returns 
 */
function validarCampo(campo)
{
    eliminarErrores(campo);
    return campo.checkValidity();
}

/**
 * Método que comprueba si los campos del formulario son válidos.
 * @param {Event} e 
 */
function validarFormulario(e)
{
    let formValido = validarCampo(document.getElementById('email'));
    formValido = document.getElementById('pass') && formValido;
    formValido = document.getElementById('nombre') && formValido;
    formValido = document.getElementById('edad') && formValido;
    if(!formValido) {
        e.preventDefault();
        console.log('Formulario no válido.');
    } else {
        console.log('Formulario válido.');
    }
}

function notificarErroresEvento(e)
{
    const campo = e.target;
    campo.classList.add(CLASE_ERROR_CAMPO);

    let messages = [];

    if(campo.validity.valueMissing) {
        messages.push('Este campo no puede estar vacío.');
    }
    if(campo.validity.typeMismatch) {
        messages.push('Los datos introducidos no siguen el formato correcto.');
    }
    if(campo.validity.rangeUnderflow || campo.validity.rangeOverflow) {
        messages.push(`El valor introducido debe estar entre ${campo.min} y ${campo.max}`);
    }
    if(campo.validity.patternMismatch) {
        messages.push('El campo debe contener al menos un número.');
    }
    if(campo.validity.customError) {
        messages.push(campo.validationMessage);
    }

    mostrarMensajesErrorEn(messages, campo);
}

function mostrarMensajesErrorEn(mensajes, campo)
{
    let div = document.createElement('div');

    div.setAttribute('id', `${campo.name}_error`);
    div.classList.add(CLASE_ERROR_MENSAJE);

    for (let i = 0; i < mensajes.length; i++) {
        let p = document.createElement('p');
        p.textContent = mensajes[i];

        div.appendChild(p);
    }

    insertarDespues(campo, div);
}

function insertarDespues(campo, div)
{
    if(campo.nextSibling){
        // El elemento de referencia tiene un hermano detrás.
        // El elemento a añadir se añade después del siguiente hermano de "campo".
        campo.parentNode.insertBefore(div,campo.nextSibling); 
    } else { 
        // El elemento de referencia no tiene un hermano detrás.
        // Se añade como último hijo de su padre.
        campo.parentNode.appendChild(div); 
    }
}

function revisarErroresEvento(e) {
    const campo = e.target;
    if(campo.validity.valid) {
        eliminarErrores(campo);
    }
}

function eliminarErrores(campo) {
    campo.classList.remove(CLASE_ERROR_CAMPO);
    const mensajesError = document.getElementById(`${campo.name}_error`);
    if(mensajesError) {
        mensajesError.parentElement.removeChild(mensajesError);
    }
    /*
    if(campo.classList.contains(CLASE_ERROR_CAMPO)) {
        campo.classList.remove(CLASE_ERROR_CAMPO);
        campo.parentNode.removeChild(document.getElementById(`${campo.name}_error`));
    }
    */
}



//******************************* EJERCICIO 7 ********************************//
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

document.getElementById("reppass").addEventListener("blur", comprobarCoincidenContrasenas, false);
document.getElementById("reppass").addEventListener("invalid", notificarErroresEvento, false);
document.getElementById("reppass").addEventListener("input", revisarErroresCustomEvento, false);

function comprobarCoincidenContrasenas(e) {
    let msg = "";
    const campo = e.target;

    if(document.getElementById("reppass").value != document.getElementById("pass").value) {
        msg = "Las contraseñas no coinciden.";
    }

    campo.setCustomValidity(msg);

    return validarCampo(campo);
}

function revisarErroresCustomEvento(e) {
    const campo = e.target;
    if(comprobarCoincidenContrasenas) {
        eliminarErrores(campo);
    }
}
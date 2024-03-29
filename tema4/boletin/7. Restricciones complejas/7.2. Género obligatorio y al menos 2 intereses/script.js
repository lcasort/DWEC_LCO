// Constantes que contienen las clases utilizadas para el tratamiento visual de los errores
const CLASE_ERROR_CAMPO = "error";
const CLASE_ERROR_MENSAJE = "campoAnadir";

/**
 * Método para inicializar los event listeners de todos los campos necesarios.
 */
function initializeListeners()
{
    // Prohibimos que nos envíe el formulario a no ser que los campos sean válidos.
    document.getElementById("formulario").addEventListener("submit", validarFormulario, false);

    
    //////////////////////////////// ACTIVIDAD 1 ///////////////////////////////
    // Validamos cuando los elementos pierden el foco.                        //
    ////////////////////////////////////////////////////////////////////////////
    document.getElementById("email").addEventListener("blur", validarCampoEvento, false);
    document.getElementById("pass").addEventListener("blur", validarCampoEvento, false);
    document.getElementById("nombre").addEventListener("blur", validarCampoEvento, false);
    document.getElementById("edad").addEventListener("blur", validarCampoEvento, false);

    
    //////////////////////////////// ACTIVIDAD 2 ///////////////////////////////
    // Cuando los elementos son inválidos, mostramos los errores              //
    // correspondientes.                                                      //
    ////////////////////////////////////////////////////////////////////////////
    document.getElementById("email").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("pass").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("nombre").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("edad").addEventListener("invalid", notificarErroresEvento, false);

    
    //////////////////////////////// ACTIVIDAD 3 ///////////////////////////////
    // Cuando modificamos los campos, revisamos si hay errores.               //
    ////////////////////////////////////////////////////////////////////////////
    document.getElementById("email").addEventListener("input", revisarErroresEvento, false);
    document.getElementById("pass").addEventListener("input", revisarErroresEvento, false);
    document.getElementById("nombre").addEventListener("input", revisarErroresEvento, false);
    document.getElementById("edad").addEventListener("input", revisarErroresEvento, false);


    ////////////////////////////// EJERCICIO 7.1 ///////////////////////////////
    // Añade un nuevo campo “Repite el password” justo debajo del campo       //
    // “Password” original. Implementa una restricción personalizada de       //
    // forma que el campo no quede validado hasta que ambos passwords         //
    // coincidan.                                                             //
    ////////////////////////////////////////////////////////////////////////////
    document.getElementById("reppass").addEventListener("blur", comprobarCoincidenContrasenas, false);
    document.getElementById("reppass").addEventListener("invalid", notificarErroresEvento, false);
    document.getElementById("reppass").addEventListener("input", revisarErroresCustomEvento, false);
    document.getElementById("pass").addEventListener("input", revisarErroresCustomEvento, false);


    ////////////////////////////// EJERCICIO 7.2 ///////////////////////////////
    // Añade las restricciones necesarias para que el campo “Género” sea      //
    // obligatorio y en el campo “Intereses” se deban marcar al menos 2       //
    // intereses.                                                             //
    ////////////////////////////////////////////////////////////////////////////
    const radios = document.querySelectorAll('.radio');
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("invalid", notificarErroresCustom, false);
        radios[i].addEventListener("input", checkRadio, false);
    }
    const intereses = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < intereses.length; i++) {
        intereses[i].addEventListener("invalid", notificarErroresCustom, false);
        intereses[i].addEventListener("input", checkIntereses, false);
    }
}

initializeListeners();



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// MÉTODOS AUXILIARES //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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
    formValido = validarCampo(document.getElementById('pass')) && formValido;
    formValido = validarCampo(document.getElementById('nombre')) && formValido;
    formValido = validarCampo(document.getElementById('edad')) && formValido;
    formValido = comprobarCoincidenContrasenas() && formValido;
    formValido = checkRadio() && formValido;
    formValido = checkIntereses() && formValido;
    if(!formValido) {
        e.preventDefault();
        console.log('Formulario no válido.');
    } else {
        console.log('Formulario válido.');
    }
}


/**
 * Método que almacena los errores del formulario en un array y llama al
 * método 'mostrarMensajesErrorEn' para mostrarlos en el formulario.
 * @param {Event} e 
 */
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


/**
 * Método que muestra por pantalla todos los errores encontrados en el
 * formulario.
 * @param {Array} mensajes 
 * @param {HTMLInputElement} campo 
 */
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


/**
 * Método que inserta los mensajes de error debajo del campo correspondiente.
 * @param {HTMLInputElement} campo 
 * @param {HTMLDivElement} div 
 */
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


/**
 * Método que revisa si el campo sigue teniendo errores y en caso de que no
 * sea así, borra los que tenía previamente en caso de que existieran.
 * @param {Event} e 
 */
function revisarErroresEvento(e)
{
    const campo = e.target;
    if(campo.validity.valid) {
        eliminarErrores(campo);
    }
}


/**
 * Método que elimina los errores de un campo.
 * @param {HTMLInputElement} campo 
 */
function eliminarErrores(campo)
{
    campo.classList.remove(CLASE_ERROR_CAMPO);
    const mensajesError = document.getElementById(`${campo.name}_error`);
    if(mensajesError) {
        mensajesError.parentElement.removeChild(mensajesError);
    }

    // Otra manera de hacerlo...
    /*
    if(campo.classList.contains(CLASE_ERROR_CAMPO)) {
        campo.classList.remove(CLASE_ERROR_CAMPO);
        campo.parentNode.removeChild(document.getElementById(`${campo.name}_error`));
    }
    */
}


/**
 * Método que comprueba si las dos contraseñas coinciden.
 * @param {Event} e 
 * @returns 
 */
function comprobarCoincidenContrasenas(e)
{
    let msg = "";
    if(document.getElementById("reppass").value != document.getElementById("pass").value) {
        msg = "Las contraseñas no coinciden.";
    }

    document.getElementById("reppass").setCustomValidity(msg);

    return validarCampo(document.getElementById("reppass"));
}


/**
 * Método que revisa si las contraseñas coinciden o no para eliminar los
 * errores.
 * @param {Event} e 
 */
function revisarErroresCustomEvento(e)
{
    if(comprobarCoincidenContrasenas()) {
        eliminarErrores(document.getElementById("reppass"));
        eliminarErrores(document.getElementById("pass"));
    }
}


function validarCampoCustom(campo) {
    eliminarErrores(campo.parentNode);
    return campo.checkValidity();
}

/**
 * Método que comprueba si al menos uno de los radio buttons ha sido
 * seleccionado. 
 * @returns 
 */
function checkRadio()
{
    let msg = "";

    const radios = document.querySelectorAll('.radio');
    for (let i = 0; i < radios.length; i++) {
        if(!radios[i].checked) {
            msg = "Tienes que seleccionar al menos un campo.";
        } else {
            msg = "";
            i = radios.length;
        }
    }

    radios[radios.length-1].setCustomValidity(msg);

    return validarCampoCustom(radios[radios.length-1]);
}


/**
 * Función que notifica los errores de los radio buttons.
 * @param {Event} e 
 */
function notificarErroresCustom(e)
{
    const campo = e.target;
    campo.parentNode.classList.add(CLASE_ERROR_CAMPO);

    let messages = [];

    if(campo.validity.customError) {
        messages.push(campo.validationMessage);
    }

    mostrarMensajesErrorEn(messages, campo.parentNode);
}


/**
 * Método que comprueba si al menos dos checkboxes han sido marcadas.
 * @param {Event} e 
 * @returns 
 */
function checkIntereses(e)
{
    let msg = "";

    let numCheckedBoxes = 0;
    const intereses = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < intereses.length; i++) {
        if(intereses[i].checked) {
            numCheckedBoxes++;
            if(numCheckedBoxes === 2) {
                msg = "";
                i = intereses.length;
            }
        } else {
            msg = "Tienes que seleccionar al menos dos campos.";
        }
    }

    intereses[intereses.length-1].setCustomValidity(msg);

    return validarCampoCustom(intereses[intereses.length-1]);
}
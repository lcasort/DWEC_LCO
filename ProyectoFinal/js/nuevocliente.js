import {ControladorPHP as Controlador} from "./controlador.js";

const ERROR_CLASS = 'border-red-600';

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN ///////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////

// Añadimos al submit del formulario el atributo formnovalidate.
document.querySelector("input[type=submit]").setAttribute('formnovalidate',
'formnovalidate');

// Ponemos el foco en el primer elemento del formulario.
document.querySelectorAll("input")[0].focus();

/**
 * Método que inicializa los listeners.
 */
function inicializarListeners()
{
    // Listener para validar el formulario cuando hacemos click en
    // "AGREGAR CLIENTE".
    document.querySelector("input[type=submit]").addEventListener("click",
    validarFormulario, false);

    // Listener para volver al listado de clientes cuando hacemos click en
    // "CANCELAR".
    document.querySelector("#cancelar").addEventListener("click",
    irListadoClientes, false);

    // Listeners para validar los inputs del formulario.
    const campos = document.querySelectorAll(".auto-validable");
    for (let i = 0; i < campos.length; i++) {
        document.querySelector(`#${campos[i].id}`).addEventListener("blur",
        validarCampoEvento, false);
        document.querySelector(`#${campos[i].id}`).addEventListener("invalid",
        mostrarError, false);
        document.querySelector(`#${campos[i].id}`).addEventListener("input",
        revisarErroresEvento, false);
    }
}

inicializarListeners();

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// AUX. METHODS /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Método que reenvía a la página principal (el listado de clientes).
 */
function irListadoClientes()
{
    window.location.href = './index.html';
}

/**
 * Método que valida el formulario.
 * @param {Event} e 
 */
function validarFormulario(e)
{
    let formIsValid = true;
    const campos = document.querySelectorAll(".auto-validable");
    for (let i = 0; i < campos.length; i++) {
        formIsValid = validarCampo(campos[i]) && formIsValid;
    }

    if(!formIsValid) {
        e.preventDefault();
        darFocoCampo();
    } else {
        e.preventDefault();
        enviarFormulario(document.querySelector('#formulario'));
    }
}

/**
 * Método que valida un campo.
 * @param {Event} e 
 * @returns 
 */
function validarCampoEvento(e)
{
    const campo = e.target;
    return validarCampo(campo);
}

/**
 * Método que comprueba la validez de un campo.
 * @param {HTMLElement} campo 
 * @returns 
 */
function validarCampo(campo)
{
    return campo.checkValidity();
}

/**
 * Método que muestra los errores del campo por pantalla.
 * @param {Event} e 
 */
function mostrarError(e)
{
    const campo = e.target;
    borrarErrores(campo);

    campo.classList.add(ERROR_CLASS);
    
    let messages = [];
    if(campo.validity.valueMissing) {
        messages.push(`Debe rellenar este campo.`);
    }
    if(campo.validity.typeMismatch) {
        messages.push(`${campo.title}`);
    }
    if(campo.validity.tooShort || campo.validity.tooLong) {
        messages.push(`El dato introducido debe tener más de ${campo.minLength}
        carácteres.`);
    }
    if(campo.validity.rangeUnderflow || campo.validity.rangeOverflow) {
        messages.push(`El dato introducido debe estar entre ${campo.min}
        y ${campo.max}.`);
    }
    if(campo.validity.patternMismatch) {
        messages.push(`${campo.title}`);
    }

    mostrarErroresEn(messages, document.querySelector(`#error-${campo.id}`));
}

/**
 * Método que imprime por pantalla los errores de un campo debajo de este. 
 * @param {Array} messages 
 * @param {HTMLElement} campo 
 */
function mostrarErroresEn(messages, campo)
{
    for (let i = 0; i < messages.length; i++) {
        campo.textContent += messages[i];
    }
}

/**
 * Método que borra los errores de un campo.
 * @param {HTMLElement} campo 
 */
function borrarErrores(campo)
{
    if(campo.classList.contains(ERROR_CLASS)) {
        campo.classList.remove(ERROR_CLASS);
        document.querySelector(`#error-${campo.id}`).textContent = "";
    }
}

/**
 * Método que revisa si un campo sigue siendo invalid o no.
 * @param {Event} e 
 */
function revisarErroresEvento(e)
{
    const campo = e.target;

    if(campo.validity.valid) {
        borrarErrores(campo);
    }
}

/**
 * Método que envía el formulario al servidor para guardar el cliente en la base
 * de datos y, en el caso de haber errores, los muestra por pantalla.
 * @param {HTMLElement} formulario 
 */
async function enviarFormulario(formulario)
{
    const formularioData = new FormData(formulario);

    // Creamos un objeto con los datos del cliente.
    const cliente = {};
    for (const pair of formularioData.entries()) {
        let key = pair[0];
        let val = pair[1];
        if(key === "telefono") {
            val = val.replaceAll(' ', '');
        } else if(key === "nif") {
            val = val.replaceAll('-', '');
        }
        cliente[key] = val;
    }

    // Llamamos al controlador para realizar la petición al servidor.
    const resp = await Controlador.setCliente(cliente);

    // Si el servidor nos devuelve un error, mostramos los errores
    // correspondientes a cada campo debajo de este, y le damos el foco al
    // primer campo con errores.
    if(resp.resultado === "no") {
        for (let i = 0; i < resp.camposError.length; i++) {
            let campo = document.querySelector(`#${resp.camposError[i]}`);
            borrarErrores(campo);
            campo.classList.add(ERROR_CLASS);
            mostrarErroresEn(resp.mensajesError[i], document.querySelector(`#error-${resp.camposError[i]}`));
        }
        darFocoCampo();
    }
}

/**
 * Método que da el foto al primer campo del formulario con errores.
 */
function darFocoCampo()
{
    const camposErrores = document.querySelectorAll(`.${ERROR_CLASS}`);
    camposErrores[0].focus();
}

////////////////////////////////////////////////////////////////////////////////
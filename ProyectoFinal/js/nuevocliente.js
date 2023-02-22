import {ControladorPHP as Controlador} from "./controlador.js";

const ERROR_CLASS = 'border-red-600';

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN ///////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////

// Añadimos al submit del formulario el atributo formnovalidate.
document.querySelector("input[type=submit]").setAttribute('formnovalidate',
'formnovalidate');

/**
 * Método que inicializa los listeners.
 */
function inicializarListeners()
{
    document.querySelector("input[type=submit]").addEventListener("click",
    validarFormulario, false);

    document.querySelector("#cancelar").addEventListener("click",
    irListadoClientes, false);

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
    } else {
        enviarFromulario(e.target);
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

function mostrarErroresEn(messages, campo)
{
    for (let i = 0; i < messages.length; i++) {
        campo.textContent += messages[i];
    }
}

function borrarErrores(campo)
{
    if(campo.classList.contains(ERROR_CLASS)) {
        campo.classList.remove(ERROR_CLASS);
        document.querySelector(`#error-${campo.id}`).textContent = "";
    }
}

function revisarErroresEvento(e)
{
    const campo = e.target;

    if(campo.validity.valid) {
        borrarErrores(campo);
    }
}

async function enviarFromulario(formulario)
{
    const formulario = new FormData(formulario);

    const res = {
        'method' : 'setCliente',
        'cliente' : formulario
    }
    await Controlador.setClientes(formulario);
}
////////////////////////////////////////////////////////////////////////////////
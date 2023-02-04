import { db } from "./db.js";


//////////////////////////////////// CONSTS ////////////////////////////////////
const ERROR_CLASS = 'error';
const ERROR_MESSAGE_CLASS = 'inputError'
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function addCCAA()
{
    let ccaa = document.querySelector('#comaut');

    for (let i = 0; i < db['ccaa'].length; i++) {
        const op = document.createElement('option');
        op.value = db['ccaa'][i]['code'];
        op.innerHTML = db['ccaa'][i]['label'];
        ccaa.appendChild(op);
    }

    ccaa.options[0].setAttribute('selected', 'selected');
}

addCCAA();

function addProvs()
{
    const ccaaCode = document.querySelector('#comaut').selectedOptions[0].value;

    let provs = document.querySelector('#prov');
    provs.innerHTML = '';
    console.log(provs);

    for (let i = 0; i < db['provincias'].length; i++) {
        if(db['provincias'][i]['ccaa_code'] === ccaaCode) {
            const op = document.createElement('option');
            op.value = db['provincias'][i]['code'];
            op.innerHTML = db['provincias'][i]['label'];
            provs.appendChild(op);
        }
    }

    provs.options[0].setAttribute('selected', 'selected');
}

addProvs();

/**
 * Método para inicializar los liteners.
 */
function initializeListeners()
{
    // Añadimos el listener para cuando enviamos el formulario.
    document.querySelector('.form').addEventListener('submit', validateForm,
    false);

    // Añadimos el listener para cuando cambiemos la CCAA seleccionada.
    document.querySelector('#comaut').addEventListener('change', addProvs, false);

    // Añadimos los listeners para cuando hacemos el blur de un campo.
    document.querySelector('.name').addEventListener('blur', validateInputEvent,
    false);
    document.querySelector('.surnames').addEventListener('blur',
    validateInputEvent, false);

    // Añadimos los listeners para cuando un campo es invalid.
    document.querySelector('.name').addEventListener('invalid', showErrors,
    false);
    document.querySelector('.surnames').addEventListener('invalid', showErrors,
    false);

    // Añadimos los listeners para cuando modificamos un campo.
    document.querySelector('.name').addEventListener('input', checkValidation,
    false);
    document.querySelector('.surnames').addEventListener('input',
    checkValidation, false);
}

initializeListeners();
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// AUX. METHODS /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Método que valida todos los inputs requeridos del formulario.
 * @param {Event} e 
 */
function validateForm(e)
{
    const requiredInputs = document.querySelectorAll('input[required]');
    let isFormValid = true;
    for (let i = 0; i < requiredInputs.length; i++) {
        if(requiredInputs[i].attributes['type'].nodeValue === "radio") {
            isFormValid = checkCustomValidation(requiredInputs[i]) && isFormValid;
        } else {
            isFormValid = validateInput(requiredInputs[i]) && isFormValid;
        }    
    }

    if(!isFormValid) {
        e.preventDefault();
        console.log('Formulario no válido.');
    } else {
        console.log('Formulario válido.');
    }
}


/**
 * Método que valida el campo del evento que lo llama.
 * @param {Event} e 
 * @returns 
 */
function validateInputEvent(e)
{
    const input = e.target;
    return validateInput(input);
}


function validateInput(input) {
    deleteErrors(input);
    return input.checkValidity();
}


function showErrors(e)
{
    const input = e.target;
    input.classList.add(ERROR_CLASS);

    let messages = [];
    if(input.validity.customError) {
        messages.push(input.validationMessage);
    } else if(input.validity.valueMissing) {
        messages.push('Este campo no puede estar vacío.');
    }
    if(input.validity.patternMismatch) {
        messages.push(`Los datos introducidos no siguen el patrón correcto (${input.placeholder}).`);
    }
    if(input.validity.tooShort || input.validity.tooLong) {
        messages.push(`El campo debe tener de ${input.attributes['minlength'].value} a ${input.attributes['maxlength'].value} carácteres.`);
    }
    if(input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        messages.push(`El campo debe estar entre ${input.min} y ${input.max}.`);
    }
    if(input.validity.typeMismatch) {
        messages.push('El tipo de dato introducido no es el correcto.');
    }

    showErrorMessagesAt(messages, input);
}


function showErrorMessagesAt(messages, input)
{
    let div = document.createElement('div');
    div.id = `${input.name}_error`;
    div.classList.add(ERROR_MESSAGE_CLASS);

    for (let i = 0; i < messages.length; i++) {
        let p = document.createElement('p');
        p.textContent = messages[i];
        div.appendChild(p);
    }

    input.parentNode.insertAdjacentElement('afterbegin', div);
}


function checkValidation(e)
{
    const input = e.target;
    if(input.validity.valid) {
        deleteErrors(input);
    }
}


function checkCustomValidationEvent(e) {
    return checkCustomValidation(e.target);
}


function checkCustomValidation(input)
{
    let customMsg = '';

    const query = 'input[type=' + input.attributes['type'].nodeValue + ']';
    const radios = document.querySelectorAll(query);
    for (let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            customMsg = '';
            i = radios.length;
        } else {
            customMsg = 'Al menos uno de los valores debe ser seleccionado.';
        }
    }

    radios[radios.length-1].setCustomValidity(customMsg);

    return validateInput(radios[radios.length-1]);
}


function recheckCustomValidation(e) {
    const input = e.target;

    if(checkCustomValidation(input)) {
        deleteErrors(input);
    }
}


function deleteErrors(input)
{
    input.classList.remove(ERROR_MESSAGE_CLASS);
    input.classList.remove(ERROR_CLASS);
    const errorMessages = document.getElementById(`${input.name}_error`);
    if(errorMessages) {
        input.parentNode.removeChild(errorMessages);
    }
}
////////////////////////////////////////////////////////////////////////////////
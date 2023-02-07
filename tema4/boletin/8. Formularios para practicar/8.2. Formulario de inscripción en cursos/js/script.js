import { db } from "./db.js";



//////////////////////////////////// CONSTS ////////////////////////////////////
const ERROR_CLASS = 'error';
const ERROR_MESSAGE_CLASS = 'inputError'
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Método que añade las comunidades autónomas.
 */
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


/**
 * Método que añade las provincias al select.
 */
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


/**
 * Método para inicializar los liteners.
 */
function initializeListeners()
{
    // Añadimos el listener para cuando enviamos el formulario.
    document.querySelector('.form').addEventListener('submit', validateForm,
    false);
    document.querySelector('.form').addEventListener('invalid', showErrors,
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

    // Hacemos lo mismo para cada campo de tipo radio.
    const formaPago = document.querySelectorAll('.payment');
    for (let i = 0; i < formaPago.length; i++) {
        formaPago[i].addEventListener('invalid', showErrors, false);   
    }

    // Hacemos lo mismo para cada campo de tipo checkbox.
    const ch = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < ch.length; i++) {
        ch[i].addEventListener('invalid', showErrors, false);
    }  
}


addCCAA();
addProvs();
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
    // Recogemos los inputs que son obligatorios.
    const requiredInputs = document.querySelectorAll('input[required]');
    // Asumimos que el formulario es correcto en un principio.
    let isFormValid = true;
    // Iteramos los inputs obligatorios y comprobamos si son o no válidos, de
    // manera que actualizamos la variable que indica la validez del formulario
    // en función a estos.
    for (let i = 0; i < requiredInputs.length; i++) {
        if(requiredInputs[i].attributes['type'].nodeValue === "radio") {
            isFormValid = checkCustomValidation(requiredInputs[i]) && isFormValid;
        } else {
            isFormValid = validateInput(requiredInputs[i]) && isFormValid;
        }    
    }

    // Comprobamos que al menos se ha seleccionado un curso y actualizamos la
    // variable que indica la validez del formulario en función a estos.
    const checkbox = document.querySelectorAll('input[type=checkbox]');
    isFormValid = checkCustomValidation(checkbox[0]) && isFormValid;

    // Si el formulario no es válido...
    if(!isFormValid) {
        // Paramos la redirección del formulario.
        e.preventDefault();
        // Ponemos el foco en el primer input erróneo.
        let inputs = document.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].classList.contains(ERROR_CLASS)) {
                inputs[i].focus();
                i = inputs.length;
            }
        }
        // Informamos por consola de que el formulario no es válido.
        console.log('Formulario no válido.');
    } else {
        // Informamos por consola de que el formulario es válido.
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


/**
 * Método que borra los errores previos de un campo y comprueba la validez de
 * este.
 * @param {HTMLInputElement} input 
 * @returns 
 */
function validateInput(input)
{
    deleteErrors(input);
    return input.checkValidity();
}


/**
 * Método que almacena los errores que tiene el campo del evento lo llama y los
 * muestra por pantalla.
 * @param {Event} e 
 */
function showErrors(e)
{
    const input = e.target;
    input.classList.add(ERROR_CLASS);

    let messages = [];
    if(input.validity.customError) {
        messages.push(input.validationMessage);
    } else if(input.validity.valueMissing) {
        messages.push(input.labels[0].attributes['for'].value.toUpperCase() +
        ': Este campo no puede estar vacío.');
    }
    if(input.validity.patternMismatch) {
        messages.push(input.labels[0].attributes['for'].value.toUpperCase() +
        `: Los datos introducidos no siguen el patrón correcto (${input.placeholder}).`);
    }
    if(input.validity.tooShort || input.validity.tooLong) {
        messages.push(input.labels[0].attributes['for'].value.toUpperCase() +
        `: El campo debe tener de ${input.attributes['minlength'].value} a ${input.attributes['maxlength'].value} carácteres.`);
    }
    if(input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        messages.push(input.labels[0].attributes['for'].value.toUpperCase() +
        `: El campo debe estar entre ${input.min} y ${input.max}.`);
    }
    if(input.validity.typeMismatch) {
        messages.push(input.labels[0].attributes['for'].value.toUpperCase() +
        ': El tipo de dato introducido no es el correcto.');
    }

    showErrorMessagesAt(messages, input);
}


/**
 * Método que muestra los errores por pantalla al principio del formulario.
 * @param {Array} messages 
 * @param {HTMLInputElement} input 
 */
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

    document.querySelector('.form').insertAdjacentElement('afterbegin', div);
}


/**
 * Método para revisar la validación del input del evento que lo llama. 
 * @param {Event} e 
 */
function checkValidation(e)
{
    const input = e.target;
    // Si el evento es válido, le borramos los errores que tenía.
    if(input.validity.valid) {
        deleteErrors(input);
    }
}

/**
 * Método que comprueba la validación customizada del input del evento que lo
 * llama.
 * @param {Evento} e 
 * @returns 
 */
function checkCustomValidationEvent(e) {
    return checkCustomValidation(e.target);
}


/**
 * Método que comprueba si el input cumple la validación customizada.
 * Utilizado para los inputs de tipo checkbox y radio.
 * @param {HTMLInputElement} input 
 * @returns 
 */
function checkCustomValidation(input)
{
    // Guardaremos el mensaje de error en customMsg en caso de que los haya.
    let customMsg = '';

    // Guardamos el tipo de input que estamos recibiendo.
    const type = input.attributes['type'].nodeValue;

    // Inicializamos las variables cont y tot para, en caso de que el input sea
    // de tipo checkbox, almacenar cuántos son marcados y el precio total a
    // pagar por esos cursos respectivamente.
    let cont = 0;
    let tot = 0;

    // Seleccionamos todos los inputs del tipo correspondiente.
    const query = 'input[type=' + type + ']';
    const radios = document.querySelectorAll(query);
    // Iteramos sobre los inputs de dicho tipo.
    for (let i = 0; i < radios.length; i++) {
        // Si esta marcado...
        if(radios[i].checked) {
            // Si es de tipo checkbox, incrementamos el contador y el número
            // total a pagar.
            if(type === 'checkbox') {
                cont++;
                tot = tot + Number.parseInt(radios[i].value);
            // Si no es de tipo checkbox salimos del bucle.
            } else {
                i = radios.length;
            }
            // Ponemos el mensaje de error vacío.
            customMsg = '';
        } else {
            // Almacenamos el mensaje de error correspondiente.
            customMsg = 'FORMA DE PAGO: Al menos uno de los valores debe ser seleccionado.';
        }
    }

    // Si el input recibido es de tipo checkbox...
    if(type === 'checkbox') {
        // Si se han seleccionado más de dos cursos aplicamos un 20% de
        // descuento.
        if(cont >= 2) {
            tot = tot * 0.8;
        }
        // Si se ha seleccionado algún curso, no hay errores. En caso contrario,
        // indicaremos al usuario que debe seleccionar al menos uno.
        if(cont > 0) {
            customMsg = '';
        } else {
            customMsg = 'CURSOS: Al menos uno de los valores debe ser seleccionado.';
        }

        // Mostramos el precio total a pagar por los cursos seleccionados.
        document.getElementById('label-precio').textContent = tot;
    }

    // Añadimos los errores al último campo en caso de que los haya.
    radios[0].setCustomValidity(customMsg);
    
    // Retornamos true si el campo es válido y false en caso contrario.
    return validateInput(radios[0]);
}


/**
 * Método para revisar la validación customizada del input del evento que lo
 * llama.
 * @param {Event} e 
 */
function recheckCustomValidation(e) {
    const input = e.target;

    if(checkCustomValidation(input)) {
        deleteErrors(input);
    }
}


/**
 * Método que borra los errores de un campo del formulario.
 * @param {HTMLInputElement} input 
 */
function deleteErrors(input)
{
    input.classList.remove(ERROR_MESSAGE_CLASS);
    input.classList.remove(ERROR_CLASS);
    const errorMessages = document.getElementById(`${input.name}_error`);
    if(errorMessages) {
        document.querySelector('.form').removeChild(errorMessages);
    }
}
////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// CONSTS ////////////////////////////////////
const ERROR_CLASS = 'error';
const ERROR_MESSAGE_CLASS = 'input_error_msg';
////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////// MAIN /////////////////////////////////////
function initialiceListeners()
{
    document.querySelector('.form').addEventListener('submit', validateForm,
    false);

    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].attributes['type'].value !== "checkbox") {
            inputs[i].addEventListener("blur", checkEventValidation, false);
            inputs[i].addEventListener("invalid", showErrors, false);
            inputs[i].addEventListener("input", recheckValidation, false);
        }
    }

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let j = 0; j < checkboxes.length; j++) {
        const element = checkboxes[j];
        element.addEventListener("invalid", showErrors, false);
        element.addEventListener("change", recheckValidation, false);
    }

    document.querySelector('.descripcion').addEventListener("input",
    showCharsLeft, false);
}

initialiceListeners();
showCharsLeft();
////////////////////////////////////////////////////////////////////////////////



///////////////////////////////// AUX. METHODS /////////////////////////////////
function validateForm(e)
{
    let formIsValid = true;

    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].attributes['type'].value !== "checkbox") {
            formIsValid = checkInputValidity(inputs[i]) && formIsValid;
        } else {
            formIsValid = checkInputCustomValidity() && formIsValid;
        }
    }

    const tlf = document.querySelector('.tlf');
    const tlfAlt = document.querySelector('.tlf_alt');
    formIsValid = checkEquals(tlf, tlfAlt) && formIsValid;

    if(!formIsValid) {
        e.preventDefault()
        console.log('ERROR: El formulario no es válido.');
    }
}


function checkEventValidation(e)
{
    return checkInputValidity(e.target);
}


function checkInputValidity(input)
{
    deleteErrors(input);
    return input.checkValidity();
}


function checkInputCustomValidity()
{
    let msg = '';
    let cont = 0;

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < checkboxes.length; i++) {
        const element = checkboxes[i];
        if(element.checked) {
            cont++;
            if(cont>=2) {
                msg = '';
                i = checkboxes.length;
            }
        } else {
            msg = 'Debe seleccionar al menos dos intereses.';
        }
    }

    checkboxes[0].setCustomValidity(msg);

    return checkInputValidity(checkboxes[0]);
}


function recheckValidation(e)
{
    if(checkInputCustomValidity()) {
        deleteErrors(document.querySelectorAll('input[type=checkbox]')[0]);
    }
}


function recheckCustomValidation(e) {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');

    if(checkboxes[0].validity.valid) {
        deleteErrors(checkboxes[0]);
    }
}


function deleteErrors(input)
{
    input.classList.remove(ERROR_CLASS);
    input.classList.remove(ERROR_MESSAGE_CLASS);
    const div = document.querySelector(`#${input.name}_error`);
    if(div) {
        input.parentNode.removeChild(div);
    }
}


function showErrors(e)
{
    const input = e.target;
    input.classList.add(ERROR_CLASS);
    
    let messages = [];
    if(input.validity.customError) {
        messages.push(input.validationMessage);
    } else if(input.validity.valueMissing) {
        messages.push(`Debe rellenar este campo.`);
    }
    if(input.validity.typeMismatch) {
        messages.push(`Los datos introducidos no son válidos.`);
    }
    if(input.validity.tooShort || input.validity.tooLong) {
        messages.push(`El dato introducido debe tener más de ${input.minLength}
        carácteres.`);
    }
    if(input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        messages.push(`El dato introducido debe estar entre ${input.min}
        y ${input.max}.`);
    }
    if(input.validity.patternMismatch) {
        messages.push(`El dato introducido no tiene el formato adecuado.`);
    }

    showErrorsAt(messages, input);
}


function showErrorsAt(messages, input)
{
    let div = document.createElement('div');
    div.id = `${input.name}_error`;
    div.classList.add(ERROR_MESSAGE_CLASS);

    for (let i = 0; i < messages.length; i++) {
        let p = document.createElement('p');
        p.textContent = messages[i];
        div.appendChild(p);
    }

    input.parentNode.insertAdjacentElement('beforeend', div);
}


function checkEquals(arg1, arg2)
{
    let msg = '';
    if(arg1.value != arg2.value) {
        msg = 'Los teléfonos deben coincidir.';
    }

    arg2.setCustomValidity(msg);

    return checkInputValidity(arg2);
}


function showCharsLeft(e)
{
    const input = e.target;
    let numCharsLeft = input.maxLength - input.value.length;

    if(numCharsLeft <= 0) {
        e.preventDefault();
        numCharsLeft = 0;
    }

    document.querySelector('.charCount').textContent = numCharsLeft;
}
////////////////////////////////////////////////////////////////////////////////
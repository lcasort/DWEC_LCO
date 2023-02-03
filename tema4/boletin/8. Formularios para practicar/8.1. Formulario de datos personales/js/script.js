function initializeListeners()
{
    // Añadimos el listener para cuando enviamos el formulario.
    document.querySelector('.form').addEventListener('submit', validateForm,
    false);

    // Añadimos los listeners para cuando hacemos el blur de un campo.
    document.querySelector('.name').addEventListener('blur', validateInputEvent,
    false);

    // Añadimos los listeners para cuando un campo es invalid.
    document.querySelector('.name').addEventListener('invalid', showErrors,
    false);

    // Añadimos los listeners para cuando modificamos un campo.
    document.querySelector('.name').addEventListener('input', checkValidation,
    false);
}

initializeListeners();

////////////////////////////////////////////////////////////////////////////////

/**
 * Método que valida todos los inputs requeridos del formulario.
 * @param {Event} e 
 */
function validateForm(e)
{
    const requiredInputs = document.querySelectorAll('input[required]');
    for (let i = 0; i < requiredInputs.length; i++) {
        // TODO        
    }
}


function validateInputEvent(e)
{
    // TODO 
}


function showErrors(e)
{
    // TODO 
}


function checkValidation(e)
{
    // TODO 
}
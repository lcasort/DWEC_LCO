// Validamos cuando los elementos pierden el foco.
document.getElementById('email').addEventListener('blur', validarCampoEvento, false);
document.getElementById('password').addEventListener('blur', validarCampoEvento, false);
document.getElementById('nombre').addEventListener('blur', validarCampoEvento, false);
document.getElementById('edad').addEventListener('blur', validarCampoEvento, false);

// Prohibimos que nos envíe el formulario a no ser que los campos sean válidos.
document.getElementById('formulario').addEventListener('submit', validarFormulario, false);

/**
 * Método que recoge el campo que desencadena el evento y lo valida.
 * @param {Event} e 
 */
function validarCampoEvento(e)
{
    validarCampo(e.target);
}

/**
 * Método devuelve true si el campo es válido y false si no.
 * @param {Element} campo 
 * @returns 
 */
function validarCampo(campo)
{
    return campo.checkValidity();
}

/**
 * Método que comprueba si los campos del formulario son válidos.
 * @param {Event} e 
 */
function validarFormulario(e) {
    let formValido = validarCampo(document.getElementById('email'));
    formValido = document.getElementById('password') && formValido;
    formValido = document.getElementById('nombre') && formValido;
    formValido = document.getElementById('edad') && formValido;
    if(!formValido) {
        e.preventDefault();
        console.log('Formulario no válido.');
    } else {
        console.log('Formulario válido.');
    }
}
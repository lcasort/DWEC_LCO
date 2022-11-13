// Implementa una aplicación que muestre al usuario este mensaje informativo:
// “A partir de ahora la navegación será privada” (método alert).
function alertUser()
{
    alert('A partir de ahora la navegación será privada.');
}

// Implementa una aplicación que pregunte al usuario si acepta los términos y condiciones de la
// página. Si lo acepta se mostrará por consola el mensaje “Términos y condiciones aceptados”,
// si no “No se han aceptado los términos y condiciones” (método confirm).
function confirmPolicy()
{
    let txt = null;
    if (confirm('¿Acepta los términos y condiciones?')) {
        txt = 'Términos y condiciones aceptados.';
    } else {
        txt = 'No se han aceptado los términos y condiciones.';
    } 
    console.log(txt);
}

// Implementa una aplicación que pida al usuario su nombre siendo “Harry Potter” el valor por
// defecto. Si el usuario no introduce nada o cancela la ventana se mostrará por consola
// “El usuario ha cancelado la ventana” en caso contrario le saludará con
// “¡Hola nombre introducido!” (método prompt)
function inputData()
{
    let person = prompt("Please enter your name", "Harry Potter");
    let text;
    if (person == null || person == "") {
    text = "User cancelled the prompt.";
    } else {
    text = "Hello " + person + "!";
    }
    console.log(text);
}


alertUser();
confirmPolicy();
inputData();
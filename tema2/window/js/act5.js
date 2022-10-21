/*
Actividad 5. Ejecución a intervalos.
El objeto Window, además de permitir la gestión de ventanas, incluye métodos para ejecutar código
JavaScript en intervalos de tiempo. Estos métodos son importantes para la programación de juegos,
animaciones y otras aplicaciones. Los dos métodos principales son:
 setTimeout que ejecuta una función después de un número de milisegundos.
 SetInterval que repite la ejecución de una función cada cierto número de milisegundos.
Implementa estas dos aplicaciones:
5.1. Implementa una aplicación que abra una nueva ventana y 5 segundos después de abrirla la
cierre (método setTimeout). Añade un botón a la aplicación que pare el cierre de la ventana si se
pulsa antes de los 5 segundos (método clearTimeout).
5.2. Implementa una aplicación que ponga en marcha una cuenta atrás de 10 segundos. Los
segundos deben ir mostrándose por consola. (método setInterval). Añade un botón a la
aplicación que pare la cuenta atrás cuando se pulse. (método clearInterval).
*/
let myWindow = null;
let tmp = null;

// Abre ventana nueva.
function openTab()
{
    if (myWindow === null) {
        myWindow = window.open("", "");
    } else {
        console.log('Window already opened.');
    }
}

// Cierra ventana.
function closeTab()
{
    if (myWindow === null) {
        console.log('The window is not opened.');
    } else {
        myWindow.close();
        myWindow = null;
    }
}

// Para el cierre de la ventana.
function stopCloseTab() {
    if (myWindow === null || tmp===null) {
        console.log('The window is not opened.');
    } else {
        clearTimeout(tmp);
        tmp = null;
    }
}


// Abre la ventana.
openTab();
// 5 segundos después de abrirla la cierra.
tmp = setTimeout(closeTab, 5000);
// 5.1. Implementa una aplicación que abra una nueva ventana y 5 segundos después de abrirla la
// cierre (método setTimeout). Añade un botón a la aplicación que pare el cierre de la ventana si se
// pulsa antes de los 5 segundos (método clearTimeout).
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



// 5.2. Implementa una aplicación que ponga en marcha una cuenta atrás de 10 segundos. Los
// segundos deben ir mostrándose por consola. (método setInterval). Añade un botón a la
// aplicación que pare la cuenta atrás cuando se pulse. (método clearInterval).
let idIntv = null;
let intvCreated = false;
let delay = 1000;
let i = null;

// Crea el intervalo.
function createInterval()
{
    if(!intvCreated) {
        i = 10;
        idIntv = setInterval(escribirMensaje, delay);
        intvCreated = true;
    } else {
        console.log('Intervalo ya creado.');
    }
}

// Escribe el mensaje.
function escribirMensaje()
{
    if (i !== 0) {
        console.log('Este mensaje se imprime cada ' + i + ' segundos');
        i--;
    } else {
        deleteInterval();
    }
    
}

// Borra el intervalo.
function deleteInterval()
{
    if(intvCreated) {
        clearTimeout(idIntv);
        idIntv = null;
        intvCreated = false;
        i = null;
    } else {
        console.log('Intervalo aún no creado.');
    }
}

// Para el intervalo.
function stopInterval()
{
    deleteInterval();
}


// Creamos el intervalo.
createInterval();
let myWindow = null;
const parameters = "width=100px, height=100px";

// Abrir una nueva ventana de 100 x 100 píxeles.
function openTab()
{
    if (myWindow === null) {
        myWindow = window.open("", "", parameters);
    } else {
        console.log('Window already opened.');
    }
}

// Aumentar el ancho y alto de la nueva ventana en 250px.
function resizeByTab()
{
    if (myWindow == null) {
        console.log('The window is not opened.');
    } else {
        myWindow.resizeBy(250, 250);
    }
}

// Fijar el ancho y alto de la nueva ventana a 250 x 250 píxeles.
function resizeToTab()
{
    if (myWindow == null) {
        console.log('The window is not opened.');
    } else {
        myWindow.resizeTo(250, 250);
    }
}

// Mover la nueva ventana 250 píxeles a la derecha y 250 píxeles abajo.
function moveByTab()
{
    if (myWindow == null) {
        console.log('The window is not opened.');
    } else {
        myWindow.moveBy(250, 250);
    }
}

// Mover la nueva ventana 500 píxeles a la derecha de la pantalla y 200 píxeles abajo.
function moveToTab()
{
    if (myWindow == null) {
        console.log('The window is not opened.');
    } else {
        myWindow.moveTo(500, 200);
    }
}
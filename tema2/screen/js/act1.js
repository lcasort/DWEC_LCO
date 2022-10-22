/*
Actividad 1. Propiedades de la pantalla.
Implementa una aplicación que muestre la siguiente información sobre la pantalla del usuario:
 El ancho y alto de la pantalla. Propiedades width y height.
 El ancho y alto de la pantalla disponibles teniendo en cuenta los elementos de la interfaz
como la barra de tareas del sistema operativo. Propiedades availWidth y
availHeight.
 La profundidad de color de la pantalla del usuario. Propiedad
colorDepth/pixelDepth.
*/
function printInfo()
{
    console.log('Ancho pantalla => ' + screen.width);
    console.log('Alto pantalla => ' + screen.height);
    console.log('Ancho pantalla teniendo en cuenta elementos de interfaz => ' + screen.availWidth);
    console.log('Alto pantalla teniendo en cuenta elementos de interfaz => ' + screen.availHeight);
    console.log('Profundidad de color de la pantalla => ' + screen.colorDepth);
}


printInfo();
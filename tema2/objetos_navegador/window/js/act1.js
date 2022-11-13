// Imprime las coordenadas superior e izquierda de la ventana
// del navegador con respecto a la pantalla del equipo.
function printCoordinates()
{
    console.log(`Coordenadas => ${window.screenX}/${window.screenLeft} - ${screenY}/${screenTop}`);
}

// Imprime la altura y anchura de la página.
function printHeightAndWidth()
{
    console.log(`Altura => ${innerHeight}`);
    console.log(`Anchura => ${innerWidth}`);
}

// Imprime la altura y anchura de la ventana del navegador.
function printHeightAndWidthNavigator()
{
    console.log(`Altura navegador => ${outerHeight}`);
    console.log(`Anchura navegador => ${outerWidth}`);
}


printCoordinates();
printHeightAndWidth();
printHeightAndWidthNavigator();
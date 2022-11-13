/**
 * -----------------------------------------------------------------------------
 *                                 FUNCTIONS
 * -----------------------------------------------------------------------------
 */

/**
 * Función que cambia el contenido de un párrafo por el contenido del título del
 * documento.
 */
function pContentToTitleContent()
{
    const title = document.title;
    document.querySelector('.act4p1').innerHTML = title;
}

/**
 * Función que añade una imagen a un documento y cámbiala desde JavaScript.
 */
function addAndChangeImage()
{
    let img = document.createElement("img");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
    img.style = "width: 50px; heigth: 50px;";
    let src = document.querySelector('.imgAct4');
    src.appendChild(img);
}

/**
 * Función que incluye un campo de texto de un formulario en un documento y
 * cambia su valor por “Modificado desde JavaScript”.
 */
function includeText()
{
    let input = document.createElement("input");
    input.type = "text";
    input.value = "Modificado desde JavaScript";
    let src = document.querySelector('.inputAct4');
    src.appendChild(input);
}

/**
 * Función que utiliza el método write para escribir el contenido
 * “Nuevo contenido escrito con write”.
 * 
 * ¿Qué ocurre con el contenido previo de la página?
 * ->
 */
function writeContent()
{
    document.open();
    document.write("<h3>Nuevo contenido escrito con write</h3>");
    document.close();
}

/**
 * Función que realiza las siguientes operaciones sobre un párrafo:
 *  ◦ Cambia a rojo el color del texto.
 *  ◦ Añádele un fondo amarillo.
 *  ◦ Cambia el tamaño del texto a 40 píxeles.
 *  ◦ Ocúltalo.
 */
function editText()
{
    let p = document.querySelector('.act4p1');
    p.style = "color: red; background-color: yellow; font-size: 40px;";
    p.style.visibility = "hidden";
}



/**
 * -----------------------------------------------------------------------------
 *                                     MAIN
 * -----------------------------------------------------------------------------
 */
pContentToTitleContent();
addAndChangeImage();
includeText();
writeContent();
editText();
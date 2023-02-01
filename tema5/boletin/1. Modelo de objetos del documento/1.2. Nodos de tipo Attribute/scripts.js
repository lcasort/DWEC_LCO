////////////////////////////////// APARTADO A //////////////////////////////////
// Muestra por consola el nombre y el valor de todos los atributos del        //
// elemento div identificado como callout2.                                   //
////////////////////////////////////////////////////////////////////////////////
const divCallout2 = document.getElementById("callout2").attributes;
for (let i = 0; i < divCallout2.length; i++) {
    const elem = divCallout2[i];
    console.log(`${elem.nodeName} = ${elem.nodeValue}`);
}

////////////////////////////////// APARTADO B //////////////////////////////////
// Añade el atributo title con el valor Información sobre identificadores al  //
// tercer párrafo del elemento identificado como content.                     //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('#content > p:nth-child(3)').setAttribute('title',
'Información sobre identificadores');

////////////////////////////////// APARTADO C //////////////////////////////////
// Añade el atributo title con el valor Información sobre clases al cuarto    //
// párrafo del elemento identificado como content.                            //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('#content > p:nth-child(4)').setAttribute('title',
'Información sobre clases');

////////////////////////////////// APARTADO D //////////////////////////////////
// Obtén el nombre de la hoja de estilo del documento HTML.                   //
////////////////////////////////////////////////////////////////////////////////
const cssName = document.querySelector("head > link:nth-child(3)").attributes['href'].nodeValue;
console.log(cssName);

////////////////////////////////// APARTADO E //////////////////////////////////
// Obtén la codificación de caracteres del documento HTML.                    //
////////////////////////////////////////////////////////////////////////////////
const codHTML = document.querySelector('head > meta:nth-child(1)').attributes['charset'].nodeValue;
console.log(codHTML);

////////////////////////////////// APARTADO F //////////////////////////////////
// Elimina los atributos title añadidos anteriormente a los párrafos.         //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('#content > p:nth-child(3)').removeAttribute('title');
document.querySelector('#content > p:nth-child(4)').removeAttribute('title');
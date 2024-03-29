////////////////////////////////// APARTADO A //////////////////////////////////
// Recupera el contenido del párrafo dentro del div identificado como         //
// callout2 usando:                                                           //
//  La propiedad innerHTML.                                                  //
//  La propiedad textContent.                                                //
//  La propiedad nodeValue.                                                  //
// Ten en cuenta que el primer hijo de un elemento es el texto que contiene   //
// pero comprueba que no haya espacios en blanco entre el elemento div y p.   //
// Puede tomar el primer hijo de div como un espacio en blanco.               //
////////////////////////////////////////////////////////////////////////////////
const divCallout2p = document.querySelector('#callout2 p');
console.log(divCallout2p.innerHTML);
console.log(divCallout2p.textContent);
console.log(divCallout2p.nodeValue);

////////////////////////////////// APARTADO B //////////////////////////////////
// Modifica el contenido del primer párrafo del div callout2 para añadir el   //
// texto “pero bien formado”.                                                 //
////////////////////////////////////////////////////////////////////////////////
divCallout2p.textContent += ' pero bien formado.';
console.log(divCallout2p.textContent);
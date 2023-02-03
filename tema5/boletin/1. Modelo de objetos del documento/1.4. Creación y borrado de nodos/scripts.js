////////////////////////////////// APARTADO A //////////////////////////////////
// Crea un nuevo párrafo con el texto Me cuelo en primera posición y añádelo  //
// antes del primer hijo del elemento identificado como content.              //
////////////////////////////////////////////////////////////////////////////////
let divContainer = document.querySelector('#content');
let p = document.createElement('p');
let text = document.createTextNode('Me cuelo en primera posición');
p.appendChild(text);
// divContainer.prepend(p);
divContainer.insertBefore(p, divContainer.firstChild);

////////////////////////////////// APARTADO B //////////////////////////////////
// Crea un nuevo párrafo con el texto Me coloco en última posición y añádelo  //
// como último hijo del elemento identificado como content.                   //
////////////////////////////////////////////////////////////////////////////////
let p2 = document.createElement('p');
let text2 = document.createTextNode('Me coloco en última posición');
p2.appendChild(text2);
divContainer.append(p2);

////////////////////////////////// APARTADO C //////////////////////////////////
// Realiza las actividades a) y b) usando la función insertAdjacentElement.   //
////////////////////////////////////////////////////////////////////////////////
let pA = document.createElement('p');
let textA = document.createTextNode('Me cuelo en primera posición');
pA.appendChild(textA);
divContainer.insertAdjacentElement('afterbegin', pA);
let pB = document.createElement('p');
let textB = document.createTextNode('Me coloco en última posición');
pB.appendChild(textB);
divContainer.insertAdjacentElement('beforeend', pB);

////////////////////////////////// APARTADO D //////////////////////////////////
// Crea la siguiente estructura y añádela a continuación del elemento h1:     //
// <p title="Página sencilla" id="descripcion">Esto es un ejemplo             //
// de <em>página HTML</em> sencilla.</p>                                      //
////////////////////////////////////////////////////////////////////////////////
let h1 = document.querySelector('h1');
let pD = document.createElement('p');
pD.id = "descripcion";
pD.title = "Página sencilla";
pD.innerHTML = "Esto es un ejemplo de <em>página HTML</em> sencilla.";
h1.insertAdjacentElement('afterend', pD);

////////////////////////////////// APARTADO E //////////////////////////////////
// Elimina la estructura anterior.                                            //
////////////////////////////////////////////////////////////////////////////////
document.getElementById("descripcion").remove();

////////////////////////////////// APARTADO F //////////////////////////////////
// Crea una estructura igual a la del elemento HTML con clase callout y       //
// añádela justo después de éste.                                             //
////////////////////////////////////////////////////////////////////////////////
let div = document.createElement("div");
div.classList.add("newCallout");
let pF = document.createElement("p");
pF.innerHTML = "Este trozo está usando una clase <span class=\"code\">.newCallout</span>";
div.appendChild(pF);
document.querySelector('.callout').insertAdjacentElement('afterend', div);
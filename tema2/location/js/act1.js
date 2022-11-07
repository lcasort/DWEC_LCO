/*
Actividad 1. Propiedades de la URL.
Implementa una aplicación que muestre la siguiente información sobre la URL de la página:
 La URL completa de la página. Propiedad href.
 El nombre de dominio. Propiedad hostname.
 La ruta y el nombre del fichero de la página. Propiedad pathname.
 El protocolo de comunicación utilizado. Propiedad protocol.
*/
function getURL() {
    const node = document.createElement('p');
    const url = location.href;
    const textNode = document.createTextNode('location.href: ' + url);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

function getHostName() {
    const node = document.createElement('p');
    const hostname = location.hostname;
    const textNode = document.createTextNode('location.hostname: ' + hostname);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

function getPathName() {
    const node = document.createElement('p');
    const pathname = location.pathname;
    const textNode = document.createTextNode('location.pathname: ' + pathname);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

function getProtocol() {
    const node = document.createElement('p');
    const protocol = location.protocol;
    const textNode = document.createTextNode('location.protocol: ' + protocol);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

getURL();
getHostName();
getPathName();
getProtocol();
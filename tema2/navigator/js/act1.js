/*
Actividad 1. Propiedades del navegador.
Implementa una aplicación que muestre la siguiente información sobre el navegador del usuario:
 El valor de la cabecera HTTP user-agent enviada por el navegador al servidor. Propiedad
userAgent.
 Si las cookies están habilitadas o no. Propiedad cookieEnabled.
 El sistema operativo sobre el que corre el navegador. Propiedad platform.
 El lenguaje del navegador. Propiedad language.
*/
function getHeader()
{
    const node = document.createElement('p');
    const userAgent = navigator.userAgent;
    const textNode = document.createTextNode('navigator.userAgent: ' + userAgent);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

function getCookiesEnabled()
{
    const node = document.createElement('p');
    const boolCookies = navigator.cookieEnabled;
    const textNode = document.createTextNode('navigator.cookieEnabled: ' + boolCookies);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

function getOperatingSystem()
{
    const node = document.createElement('p');
    const opSys = navigator.platform;
    const textNode = document.createTextNode('navigator.platform: ' + opSys);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

function getNavigatorLanguage()
{
    const node = document.createElement('p');
    const lan = navigator.language;
    const textNode = document.createTextNode('navigator.language: ' + lan);
    node.appendChild(textNode);
    document.querySelector('.act1').appendChild(node);
}

getHeader();
getCookiesEnabled();
getOperatingSystem();
getNavigatorLanguage();
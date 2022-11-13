/*
Actividad 1. Recuperar elementos HTML.
Los principales métodos para recuperar elementos de un documento HTML son:
getElementById, getElementsByTagName, getElementsByClassName,
querySelector y querySelectorAll.
Crea un nuevo documento HTML con 4 párrafos (elementos p). Recupera el segundo párrafo
utilizando los 5 métodos.
*/
console.log(`Por id: ${document.getElementById('p2').innerText}`);
console.log(document.getElementById('p2'));
console.log(`Por name: ${document.getElementsByTagName('p')['p2'].innerText}`);
console.log(document.getElementsByTagName('p')['p2']);
console.log(`Por class: ${document.getElementsByClassName('p2')[0].innerText}`);
console.log(document.getElementsByClassName('p2')[0]);
console.log(`Por querySelector: ${document.querySelector('.p2').innerText}`);
console.log(document.querySelector('.p2'));
console.log(`Por querySelector: ${document.querySelectorAll('body > #p2')[0].innerText}`);
console.log(document.querySelectorAll('body > #p2')[0]);
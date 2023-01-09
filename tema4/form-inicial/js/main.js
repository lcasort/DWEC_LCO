let formId = document.getElementById('formulario');
console.log(formId);

let formTag = document.getElementsByTagName('form');
console.log(formTag);

console.log(formId === formTag[0]); // True
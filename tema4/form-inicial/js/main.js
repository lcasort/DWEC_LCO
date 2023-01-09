let formId = document.getElementById('formulario');
console.log(formId);

let formTag = document.getElementsByTagName('form');
console.log(formTag);

console.log(formId === formTag[0]); // True

////////////////////////////////////////////////////////////////////////////////

let container = document.getElementById('container');
let form = container.getElementsByTagName('form');
console.log(form[0]);

////////////////////////////////////////////////////////////////////////////////

let formNameForms = document.forms['formulario'];
console.log(formNameForms);

////////////////////////////////////////////////////////////////////////////////

console.log(formNameForms.action);
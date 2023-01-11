////////////////////////////////////////////////////////////////////////////////
/////////////////////// MANERAS DE ACCEDER AL FORMULARIO ///////////////////////
////////////////////////////////////////////////////////////////////////////////

// Accede al formulario mediante su atributo id.
let formId = document.getElementById('formulario');
console.log(formId);

// Accede al formulario mediante la etiqueta form: devuelve una lista de forms.
let formTag = document.getElementsByTagName('form');
console.log(formTag[0]);

// Ambas maneras previas devuelven exactamente el mismo form.
console.log(formId === formTag[0]); // True


// Accede al formulario mediante la etiqueta form dentro del div 'container'.
let container = document.getElementById('container');
let form = container.getElementsByTagName('form')[0];
// El form que se encuantra en la posición 0.
console.log(form);
// El form llamado 'formulario' (name="formulario").
let formNameForms = document.forms['formulario'];
console.log(formNameForms);


// Accede al formulario por el atributo name.
console.log(document.formulario);


// Accede a action del formulario.
console.log(formNameForms.action);





////////////////////////////////////////////////////////////////////////////////
////////////////////// ACCEDER A LOS CAMPOS DEL FORMULARIO /////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////
// TIPO TEXT //
///////////////

// Accede mediante el atributo name del campo (name="email").
console.log(document.formulario.email);

// Accede mediante el selector.
console.log(document.querySelector('#email'));

// Accede mediante el atributo id o name.
console.log(document.forms['formulario'].elements['email']);


///////////////////
// TIPO CHECKBOX //
///////////////////

// TODO


////////////////
// TIPO RADIO //
////////////////

// TODO


/////////////////
// TIPO SELECT //
/////////////////

// TODO
//creo un array para guardar los campos que son requeridos y su checkValidity
let check = [];
//esta variable me permite hacer foco en el primer input requerido
let unaVez = 1;
//pillo el formulario
const elFrom = document.getElementById('formulario');
//recorro el formulario buscando los required
for (let index = 0; index < elFrom.elements.length; index++) {
    if (elFrom.elements[index].tagName === 'INPUT' && elFrom.elements[index].type != 'submit' && elFrom.elements[index].required == true) {
        //cuando lo encuentra, lo mete en check con su id como clave y valor checkValidity actual(false)
        check[elFrom.elements[index].id] = elFrom.elements[index].checkValidity();

        //meto el evento blur para cuando cambie el foco
        elFrom.elements[index].addEventListener('blur', function (e) {

            //y cuando ocurra eso, actualice el valor en el array
            check[elFrom.elements[index].id] = elFrom.elements[index].checkValidity();

        });
        //si exite un required y es el primero le hago foco para obligar a rellenar y
        //pueda hecre submit sin rellenar
        if (unaVez == 1) {

            document.getElementById(elFrom.elements[index].id).focus();

            unaVez--;
        }

        //asignamos el evento invalido, cuando ocurra, si hay un 'p_id del elemento'
        //suelta un cartel.
        elFrom.elements[index].addEventListener('invalid', function (e) {
            if (document.getElementById('p_' + elFrom.elements[index].name) !== null) {
                document.getElementById('p_' + elFrom.elements[index].name).innerHTML = 'Por favor, no la cages';
            }
        });
        //cuando se introduzca un dato en un input si existe un '<p>'con 'p_id del elemento'
        //y el atributo valid es correcto, quita el texto html haciendolo desaparecer
        elFrom.elements[index].addEventListener('input', function (e) {
            if (document.getElementById('p_' + elFrom.elements[index].name) !== null) {
                if (elFrom.elements[index].validity.valid) {
                    document.getElementById('p_' + elFrom.elements[index].name).innerHTML = '';

                }
            }
        });

    }
}
elFrom.elements['enviar'].addEventListener('click', function (e) {
    //si algun elemento del aary tiene false previene que envíe.
    //todos los required tienen que estar a true
    for (let x in check) {
        console.log(check[x]);
        if (check[x] == false) {
            e.preventDefault();
        }
    }

});
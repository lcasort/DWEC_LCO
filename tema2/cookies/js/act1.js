/**
 * Función que crea una nueva cookie, codificando su valor.
 * @param {*} name : nombre de la cookie.
 * @param {*} value : valor de la cookie.
 * @param {*} daysToLive : número de dias que va a tener de vida la cookie.
 */
function setAndEncodeCookie(name, value, daysToLive=null)
{
    if(daysToLive!=null) {
        const maxAge = daysToLive*24*60*60;
        document.cookie = `${name}=${encodeURIComponent(value)};max-age=${maxAge}`;
    } else {
        document.cookie = `${name}=${encodeURIComponent(value)}`;
    }
}

/**
 * Función que obtiene una cookie dada y la decodifica, devolviendo su valor.
 * Si la cookie no existe, devuelve null.
 * @param {*} name : nombre de la cookie.
 */
function getAndDecodeCookie(name)
{
    let array = document.cookie.split(';');
    let value = array.find(cookie => cookie.split('=')[0].trim()===name);

    return value ? decodeURIComponent(value.split('=')[1]) : null;
}

/**
 * Función que comprueba si una cookie existe, en cuyo caso devuelve true.
 * En caso contrario devuelve false.
 * @param {*} name 
 */
function checkCookie(name)
{
    let array = document.cookie.split(';');
    let value = array.find(cookie => cookie.split('=')[0].trim()===name);

    return value ? true : false;
}

/**
 * Función que devuelve un mapa con todas las cookies en su interior como pares
 * clave-valor.
 */
function getAndDecodeCookies()
{
    let array = document.cookie.split(';');
    let value = array.map(cookie => 
        ({[cookie.split('=')[0].trim()]: decodeURIComponent(cookie.split('=')[1])}));

    console.log(value);
}

/**
 * Función para recoger los valores de los inputs.
 */
function getValues()
{
    const name = document.querySelector('#name').value;
    const value = document.querySelector('#value').value;
    const daysToLive = document.querySelector('#daysToLive').value;

    if(name!='' && value!='') {
        if(daysToLive>0) {
            setAndEncodeCookie(name, value, daysToLive);
        } else {
            setAndEncodeCookie(name, value);
        }
    } else {
        alert('Debe rellenar los campos.');
    }
}

/**
 * Función para recoger el valor del input name.
 */
function getName()
{
    const name = document.querySelector('#name').value;

    let res = null;
    if(name!='') {
        res = getAndDecodeCookie(name);
    } else {
        alert('Debe rellenar los campos.');
    }

    console.log(res);
}

function getNameExists()
{
    const name = document.querySelector('#name').value;

    let res = checkCookie(name);

    console.log(res);
}
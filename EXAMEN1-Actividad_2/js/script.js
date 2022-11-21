///////////////////////////// FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO (AQUÍ NO TOQUES EL CÓDIGO) /////////////////////////
/**
 * Función que indica si la cookie cuyo nombre se indica con el parámetro existe en la página
 * @param {string} nombre nombre de la cookie
 * @returns true en caso de que la cookie exista en la página
 */
 function existeCookie(nombre) {
    // Se intenta recuperar la cookie y si está vacía, significa que no existe
    return obtenerCookie(nombre) !== "";
}

/**
 * Función que crea una cookie con el nombre y valor indicados en los parámetros.
 * El parámetro diasDeVida indica cuántos días queremos que tarde en expirar la cookie.
 * @param {string} nombre nombre de la cookie que se quiere establecer
 * @param {string} valor valor de la cookie que se quiere establecer
 * @param {number} diasDeVida número de días que va a tardar en expirar la cookie.
 * Si no se indica este parámetro, el tiempo de expiración lo establece el navegador
 */
function establecerCookie(nombre, valor, diasDeVida = null) {
    if(diasDeVida) {
        // Si se indican los días que tardará en expirar la cookie,
        // se crea un date para facilitar el cálculo de la fecha de expiración
        // y se establece la cookie
        const d = new Date();
        d.setTime(d.getTime() + (diasDeVida * 24 * 60 * 60 * 1000));
        document.cookie = `${nombre}=${valor};expires=${d.toUTCString()};path=/`;
    }else {
        // No se indican los días que tardará en expirar la cookie,
        // se establece la cookie sin fecha de expiración
        document.cookie = `${nombre}=${valor};path=/`;
    }
}

/**
 * Función que obtiene el valor de la cookie que tiene el nombre indicado en el parámetro
 * @param {string} name nombre de la cookie de que se quiere obtener el valor
 * @returns valor de la cookie cuyo nombre se pide en el parámetro de entrada
 */
function obtenerCookie(name) {
    let valorCookie = "";
    const strCookies = document.cookie;
    if(strCookies !== "") {
        // Si existe alguna cookie en la página, se trocea y se recorre en busca del nombre
        // que coincide con el parámetro de entrada
        const cookies = strCookies.split(";");
        for(let i = 0; i < cookies.length && valorCookie == ""; i++) {
            const claveValorCookie = cookies[i].split("=");
            if(claveValorCookie[0].trim() === name) {
                valorCookie = claveValorCookie[1];
            }
        }
    }

    return valorCookie;
}
///////////////////////////// FIN FUNCIONES QUE SE DEBEN USAR PARA EL EJERCICIO /////////////////////////




///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////
const CLAVE_COOKIE_FECHA_NACIMIENTO = 'fechaNacimiento';

/**
 * Función que pide la fecha de nacimiento y te muestra la edad que tienes. 
 */
function calcularEdad() {
    // Si NO existe la cookie 'fechaNacimiento'...
    if(!existeCookie(CLAVE_COOKIE_FECHA_NACIMIENTO)) {
        // Pedimos al usuario que introduzca su fecha de nacimiento.
        let fechaIntroducida = prompt('Introduzca su fecha de nacimiento (dd/mm/aaaa)');
        // Borramos los espacios que pueda tener por delante y por detrás.
        fechaIntroducida = fechaIntroducida.trim();

        // Si la fecha tiene el formato correcto...
        if(comprobarFormatoFecha(fechaIntroducida)) {
            // Pasamos el string de la fecha a tipo Date.
            const fecha = toDateFecha(fechaIntroducida);
            // Establecemos la cookie de nombre 'fechaNacimiento' con el valor de la fecha en milisegundos.
            establecerCookie(CLAVE_COOKIE_FECHA_NACIMIENTO, fecha.valueOf());
        // En cualquier otro caso...
        } else {
            // Mostramos por pantalla el siguiente mensage indicando el error encontrado.
            alert('Se debe suministrar una fecha con el formato: dd/mm/aaaa');

        }

        // Calculamos los años.
        const anos = milisegundosAAnos();
        // Mostramos por pantalla el siguiente mensage indicando el número de años.
        alert('Tienes ' + anos + ' años');

    // En cualquier otro caso...
    } else {
        // Calculamos los años.
        const anos = milisegundosAAnos();
        // Mostramos por pantalla el siguiente mensage indicando el número de años.
        alert('Tienes ' + anos + ' años');
    }
}

/**
 * Función que convierte una cadena con formato 'dd/mm/aaaa' a fecha (tipo Date).
 * @param {string} fecha 
 * @returns fecha (tipo Date).
 */
function toDateFecha(fecha) {
    // Separamos por '/'.
    const fechaSplit = fecha.split('/');
    // Creamos una fecha tipo Date(año,mes,día).
    const res = new Date(fechaSplit[2], fechaSplit[1]-1, fechaSplit[0]);

    return res;
}

/**
 * Función que devuelve el número de años transcurridos entre la fecha de
 * nacimiento guardada en la cookie 'fechaNacimiento' y hoy.
 * @returns edad (número de años transcurridos hasta el día de hoy).
 */
function milisegundosAAnos() {
    // Obtenemos la fecha de nacimiento guardada en la cookie (en milisegundos).
    const fechaCookie = obtenerCookie(CLAVE_COOKIE_FECHA_NACIMIENTO);
    // Obtenemos la fecha de hoy (en milisegundos).
    const hoy = Date.now().valueOf();
    // Calculamos la diferencia entre las fechas (en milisegundos).
    const dif = hoy - fechaCookie;
    // Pasamos los milisegundos a años.
    const anos = Math.floor(dif / 1000 / 60 / 60 / 24 / 30 / 12);

    return anos;
}

/**
 * Función que devuelve true si el parámetro introducido cumple el formato
 * 'dd/mm/aaaa' y false en caso contrario.
 * @param {string} fecha 
 * @returns true o false.
 */
function comprobarFormatoFecha(fecha) {
    return fecha.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/gm) ? true : false;
}

/**
 * Función que borra una cookie.
 */
function borraFechaNacimiento() {
    // Si existe la cookie con nombre 'fechaNacimiento'...
    if(existeCookie(CLAVE_COOKIE_FECHA_NACIMIENTO)) {
        // Borramos la cookie.
        borrarCookie(CLAVE_COOKIE_FECHA_NACIMIENTO);
        // Mostramos por pantalla el siguiente mensage indicando que la cookie ha sido borrada.
        alert('Fecha de nacimiento borrada');
    // En cualquier otro caso...
    } else {
        // Mostramos por pantalla el siguiente mensage indicando que la cookie no existe.
        alert('La fecha de nacimiento no se ha suministrado o ha expirado');
    }
}

/**
 * Función que recibe el nombre de una cookie y la borra.
 * @param {string} nombre 
 */
function borrarCookie(nombre) {
    // Buscamos la cookie que tenga el nombre pasado por parámetro y la guardamos.
    const cookieFecha = document.cookie.split(';').find((row) => row.startsWith(`${CLAVE_COOKIE_FECHA_NACIMIENTO}=`));
    // Obtenemos la clave de la cookie (el nombre).
    const clave = cookieFecha.trim().split('=')[0];
    // Obtenemos el valor de la cookie.
    const valor = cookieFecha.trim().split('=')[1];
    // Creamos un fecha tipo Date con un valor anterior al de hoy.
    const d = new Date(1,0,1999);
    // Modificamos la cookie para poner que su fecha de expiración ya ha pasado.
    document.cookie = `${clave}=${valor};expires=${d.toUTCString()};path=/`;
}
///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR ////////////////////////

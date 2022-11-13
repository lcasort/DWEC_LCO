/**
 * -----------------------------------------------------------------------------
 *                                  FUNCIONES
 * -----------------------------------------------------------------------------
 */

/**
 * Función que codifica un mensaje dada una clave.
 * @param {*} msg 
 * @param {*} psswd 
 * @returns 
 */
function encode(msg, psswd)
{
    let str = '';

    for(let i=0, j=0; i<msg.length; i++, j++) {
        let uc = msg.charCodeAt(i);
        let encodeUC = uc + Number.parseInt(psswd.charAt(j));
        if(j<psswd.length-1) {
            j = 0;
        }

        str += String.fromCharCode(encodeUC);
    }

    return str;
}



/**
 * -----------------------------------------------------------------------------
 *                                    MAIN
 * -----------------------------------------------------------------------------
 */
const msg = prompt('Introduce el mensaje');
const psswd = prompt('Introduce la clave numérica');

const res = encode(msg, psswd);
console.log(res);
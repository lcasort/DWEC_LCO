let str = '  I have become comfortably brilliant  ';

/**
 * -----------------------------------------------------------------------------
 *                                 FUNCTIONS
 * -----------------------------------------------------------------------------
 */

/**
 * Función que indica el número total de caracteres incluyendo los espacios en
 * blanco (length).
 */
function getLength()
{
    console.log('str.length: ' + str.length);
}

/**
 * Función que obtiene el carácter que ocupa la octava posición (charAt).
 */
function getChartAt8()
{
    console.log(str.charAt(7));
}

/**
 * Función que obtiene el código Unicode del primer carácter (charCodeAt).
 */
function getUnicode1stCharacter()
{
    console.log(str.charCodeAt(0));
}

/**
 * Función que concatena la cadena con la cadena “ and exciting”.
 * 
 * ¿Se modifica la primera cadena? (concat)
 * -> No, la cadena original se mantiene igual.
 */
function concatStrings(s)
{
    const res = str.concat(s);
    console.log(res);
}

/**
 * Función que comprueba si la cadena termina con los caracteres
 * “brillian” (endsWith).
 */
function doesEndWith(end)
{
    const b = str.endsWith(end);
    console.log(b);
}

/**
 * Función que convierte el valor Unicode 65 a su carácter
 * equivalente (fromCharCode).
 */
function unicodeToChar(uc)
{
    console.log(String.fromCharCode(uc));
}

/**
 * Función que comprueba si la cadena contiene los caracteres
 * “comfortably” (includes).
 */
function doesContain(s)
{
    console.log(str.includes(s));
}

/**
 * Función que indica la posición que ocupa el primer carácter “a” de la
 * cadena (indexOf).
 */
function getPositionOfChar(c)
{
    console.log(str.indexOf(c));
}

/**
 * Función que indica la posición que ocupa el último carácter “a” de la
 * cadena (lastIndexOf).
 */
function getLastPositionOfChar(c)
{
    console.log(str.lastIndexOf(c));
}

/**
 * Función que compara la cadena con la cadena:
 *  “You have become comfortably brilliant”.
 * 
 * ¿Cuál iría en primer lugar? (localeCompare)
 * -> Retorna un entero que indica si la cadena referenceStr va antes,
 *    despues o si es equivalente a la cadena compareString.
 */
function compareStrings(str2)
{
    console.log(str.localeCompare(str2));
}

/**
 * Función que obtiene todas las coincidencias de la cadena con la expresión
 * regular “/com/g” (match).
 */
function coincidencesStrWithRegExp(regExp)
{
    console.log(str.match(regExp));
}

/**
 * Función que obtiene una nueva cadena con 3 repeticiones de la cadena
 * actual (repeat).
 */
function getNewStrRepeated(num)
{
    const res = str.repeat(num);
    console.log(res);
}

/**
 * Función que reemplaza los caracteres “brilliant” por “exciting” (replace).
 */
function replaceWord(redW, compW)
{
    console.log(str.replace(redW, compW));
}

/**
 * Función que busca los caracteres “brit” en la cadena (search).
 */
function searchChars(chars)
{
    console.log(str.search(chars));
}

/**
 * Función que obtiene de la cadena los caracteres del primero al
 * quinto (slice).
 */
function getCharsFromTo(from, to)
{
    console.log(str.slice(from, to));
}

/**
 * Función que obtiene un array con todas las palabras de la cadena (split).
 */
function getArrayFromString()
{
    console.log(str.trim().split(' '));
}

/**
 * Función que comprueba si la cadena comienza con los caracteres
 * “I have” (startsWith).
 */
function doesItStartWith(start)
{
    console.log(str.trim().startsWith(start));
}

/**
 * Función que obtiene siete caracteres de la cadena a partir del segundo
 * carácter (substr).
 */
function getSubStr(from, l)
{
    console.log(str.substr(from, l));
}

/**
 * Función que obtiene todos los caracteres de la cadena a partir del cuarto
 * carácter (substring).
 */
function getSubStrFrom(from)
{
    console.log(str.substring(from));
}

/**
 * Función que convierte todos los caracteres de la cadena a
 * mayúsculas (toUpperCase).
 */
function strToUpperCase()
{
    console.log(str.toUpperCase());
}

/**
 * Función que convierte todos los caracteres de la cadena a
 * minúsculas (toLowerCase).
 */
function strToLowerCase()
{
    console.log(str.toLowerCase());
}

/**
 * Función que quita los espacios en blanco de la cadena por delante y
 * detrás (trim).
 */
function removeWhiteLeadingAndTrailingSpaces()
{
    console.log(str.trim());
}



/**
 * -----------------------------------------------------------------------------
 *                                    MAIN
 * -----------------------------------------------------------------------------
 */
getLength();
getChartAt8();
getUnicode1stCharacter();
concatStrings(' and exciting');
doesEndWith('brillian');
unicodeToChar(65);
doesContain('comfortably');
getPositionOfChar('a');
getLastPositionOfChar('a');
compareStrings('You have become comfortably brilliant');
coincidencesStrWithRegExp(/com/g);
getNewStrRepeated(3);
replaceWord('brilliant', 'exciting');
searchChars('brit');
getCharsFromTo(0, 5);
getArrayFromString();
doesItStartWith('I have');
getSubStr(1, 7);
getSubStrFrom(3);
strToUpperCase();
strToLowerCase();
removeWhiteLeadingAndTrailingSpaces();
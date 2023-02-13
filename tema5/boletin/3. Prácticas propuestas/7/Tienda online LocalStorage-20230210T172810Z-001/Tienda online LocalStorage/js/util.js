export class Util
{
    /**
     * Método que devuelve el array sin elementos repetidos.
     * @param {Array} array 
     * @returns 
     */
    static getArraySinRepeticion(array) {
        return [...new Set(array)];
    }
}
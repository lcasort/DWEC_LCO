///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////

// ACTIVIDAD 1:
// Clase Producto
class Producto
{
    #id;
    #descripcion;
    #precio;

    constructor(id, descripcion, precio) {
        // Comprobamos si el id y el precio introducido son válidos, en cuyo
        // caso guardamos los valores de los atributos.
        if(this.isIdValid(id) && this.isPrecioValid(precio)) {
            this.#id = Number.parseInt(id);
            this.#descripcion = descripcion;
            this.#precio = Number.parseFloat(precio).toFixed(2);
        } else {
            // Lanzamos un error que se muestra por consola.
            throw new Error('ERROR: El id debe ser un número entero positivo y ' +
            'el precio un número flotante positivo.');
        }
    }

    /**
     * Función que devulve true si el id es un número entero positivo.
     * @param {*} id 
     * @returns boolean
     */
    isIdValid(id) {
        return Number.parseInt(id) && Number.parseInt(id)>=0;
    }

    /**
     * Función que devuelve true si el precio es un número flotante positivo. 
     * @param {*} precio 
     * @returns boolean
     */
    isPrecioValid(precio) {
        return Number.parseFloat(precio) && Number.parseFloat(precio)>=0.;
    }

    // GETTERS
    get id() {
        return this.#id;
    }
    get descripcion() {
        return this.#descripcion;
    }
    get precio() {
        return this.#precio;
    }

    // SETTERS
    set id(id) {
        // Si el id introducido es válido lo modificamos.
        if(this.isIdValid(id)) {
            this.#id = id;
        } else {
            // Mostramos el error por la consola.
            console.log('ERROR: El id debe ser un número entero positivo.');
        }
    }
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    set precio(precio) {
        // Si el precio introducido es válido lo modificamos.
        if(this.isPrecioValid(precio)) {
            this.#precio = Number.parseFloat(precio).toFixed(2);
        } else {
            // Mostramos el error por la consola.
            console.log('ERROR: El precio debe ser un numero flotante.');
        }
    }

    toString() {
        return `(${this.#id}) ${this.#descripcion} - ${this.#precio}€`;
    }
}

//Clase ArticuloFactura
class ArticuloFactura extends Producto
{
    #cantidad;

    constructor(id, descripcion, precio, cantidad) {
        // Llamamos al constructor de la clase padre Producto.
        super(id, descripcion, precio);
        // Si la cantidad introducida es válida, guardamos su valor en el
        // atributo.
        if(this.isCantidadValid(cantidad)) {
            this.#cantidad = cantidad;
        } else {
            // Lanzamos un error que se muestra por consola.
            throw new Error('ERROR: La cantidad debe ser un número entero mayor de 0.');
        }        
    }

    /**
     * Función que devulve true si la cantidad es un número entero positivo.
     * @param {*} cantidad 
     * @returns 
     */
    isCantidadValid(cantidad) {
        return Number.isInteger(cantidad) && cantidad>0;
    }

    // GETTERS
    get cantidad() {
        return this.#cantidad;
    }

    // SETTERS
    set cantidad(cantidad) {
        // Si la cantidad introducido es válida la modificamos.
        if(this.isCantidadValid(cantidad)) {
            this.#cantidad = cantidad;
        } else {
            // Mostramos el error por la consola.
            console.log('ERROR: La cantidad debe ser un número entero mayor de 0.');
        }
    }

    /**
     * Función que calcula el precio total a pagar por un artículo
     * (cantidad * precio del artículo). 
     * @returns Number
     */
    getTotal() {
        return super.precio * this.#cantidad;
    }

    toString() {
        return `${super.toString()} x ${this.#cantidad}`;
    }
}

//ACTIVIDAD 2:
/**
 * Función que crea un array de artículos y los muestra por consola con el
 * formato de una factura, incluyendo los datos de cada artículo, el precio
 * total a pagar por cada uno y el precio total de la compra.
 */
function crearFactura() {
    const articulos = [
        new ArticuloFactura(8, 'Almendras bolsa 200gr', 3.12, 3),
        new ArticuloFactura(12, 'Harina bolsa 1Kg', 2.30, 1),
        new ArticuloFactura(4, 'Piña conserva lata 500gr', 2.10, 4)
    ];

    console.log('FACTURA:');
    // Muestra los datos de cada artículo (id, descripción, precio y cantidad)
    // acompañado del precio total a pagar por ese artículo.
    articulos.forEach(articulo => 
        console.log(`${articulo.toString()} - ${articulo.getTotal()}€`)
    );
    // Guardamos en totalCompra el precio total a pagar por la compra entera,
    // el cual se calcula sumando el precio total a pagar por cada artículo.
    const totalCompra = articulos.reduce(
        (acc, currValue) => acc + currValue.getTotal(),
        0
    );
    // Mostramos el precio total a pagar por la compra. 
    console.log(`TOTAL - ${totalCompra.toFixed(2)}€`);
}

crearFactura();

///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////
/*
Actividad 1. Objetos de tipo Coche.
Realiza los siguientes apartados tomando como referencia el artículo JavaScript Classes de
W3Schools.
*/


/*
    d) Herencia.
        d.1) Crea una clase padre Vehículo con un único atributo pasajeros. Añade un método get y set para
        el atributo.
*/
class Vehiculo {
    #pasajeros;

    constructor (pasajeros) {
        this.#pasajeros = pasajeros;
    }

    get pasajeros() {
        return this.#pasajeros;
    }

    set pasajeros(pasajeros) {
        this.#pasajeros = pasajeros;
    }
}
/*
a) Creación inicial de clase e instancias.
    a.1) Crea una clase Coche con los atributos fabricante, modelo, marchas y marchaActual y con el
    método cambiarMarcha para cambiar la marchaActual. Ten en cuenta:
    • Para instanciar un objecto Coche sólo es necesario indicar el fabricante y el modelo.
    • Las marchas pueden ser P (Parado), 1, 2, 3, 4, 5, 6 y R (marcha atrás).
    • Al inicializar el objeto la marcha actual será parado.
    • En el método cambiarMarcha, si la marcha a la que se pretende cambiar no existe se debe
    lanzar una excepción.
    
    d.2) Haz que Coche herede de Vehículo.
*/
class Coche extends Vehiculo {
    #fabricante;
    #modelo;
    #marchas = {P:'Parado', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', R:'R'};
    #marchaActual = this.#marchas.P;

    constructor (pasajeros, fabricante, modelo) {
        super(pasajeros);
        this.#fabricante = fabricante;
        this.#modelo = modelo;
    }

    cambiarMarcha(marcha) {
        this.marchaActual = marcha;
    }

    /*
    b) Métodos get y set.
    Añade métodos get y set a la clase para cada uno de sus atributos.
    */
    get fabricante() {
        return this.#fabricante;
    }

    set fabricante(fabricante) {
        this.#fabricante = fabricante;
    }

    get modelo() {
        return this.#modelo;
    }

    set modelo(modelo) {
        this.#modelo = modelo;
    }

    get marchas() {
        return this.#marchas;
    }

    get marchaActual() {
        return this.#marchaActual;
    }

    set marchaActual(marcha) {
        if(this.#marchas[marcha]) {
            this.#marchaActual = marcha;
        } else {
            throw new Error('La marcha introducida no existe.');
        }
    }

    /*
    c) Métodos estáticos.
    Añade un método estático a la clase Coche para determinar si dos coches son iguales. Dos coches se
    consideran iguales si tienen el mismo fabricante y modelo.
    */
    static equals(cocheA, cocheB) {
        let res = false;
        if(cocheA instanceof Coche && cocheB instanceof Coche) {
            if(cocheA.fabricante === cocheB.fabricante &&
            cocheA.modelo === cocheB.modelo) {
                res = true;
            }
        } else {
            throw new Error('La marcha introducida no existe.');
        }
        return res;
    }

    /*
    f) Representación textual de objetos.
    Redefine el método toString para obtener una cadena con el siguiente formato al imprimir un objeto
    Coche: fabricante :::: modelo :::: pasajeros
    */
   toString() {
    return `${this.#fabricante} :::: ${this.#modelo} :::: ${this.pasajeros}`;
   }
}

/*
    a.2) Crea dos instancias de la clase Coche: un Tesla ModelS y un Mazda 3i. Cambia la marcha del
    Tesla a primera y la del Mazda a marcha atrás.
*/
let tesla = new Coche(null, 'Tesla', 'Models');
let mazda = new Coche(null, 'Mazda', '3i');

tesla.cambiarMarcha('1');
mazda.cambiarMarcha(mazda.marchas.R);

/*
    a.3) Muestra por consola el fabricante, el modelo y la marcha en la que se encuentran ambos
    coches.
*/
console.log(`Coche: [fabricante = ${tesla.fabricante}, modelo = ${tesla.modelo}, marchaActual = ${tesla.marchaActual}]`);
console.log(`Coche: [fabricante = ${mazda.fabricante}, modelo = ${mazda.modelo}, marchaActual = ${mazda.marchaActual}]`);

/*
    d.3) Crea un nuevo Coche, añádele 3 pasajeros y muestra el número de pasajeros por consola.
*/
let c = new Coche(3, 'Tesla', 'Models');
console.log(`Número de pasajeros: ${c.pasajeros}`);
console.log(c.toString());
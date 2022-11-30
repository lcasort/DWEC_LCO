/*
Actividad 1. Objetos de tipo Coche.
Realiza los siguientes apartados tomando como referencia el artículo JavaScript Classes de
W3Schools.
    b) Métodos get y set.
    Añade métodos get y set a la clase para cada uno de sus atributos.
    c) Métodos estáticos.
    Añade un método estático a la clase Coche para determinar si dos coches son iguales. Dos coches se
    consideran iguales si tienen el mismo fabricante y modelo.
    d) Herencia.
        d.1) Crea una clase padre Vehículo con un único atributo pasajeros. Añade un método get y set para
        el atributo.
        d.2) Haz que Coche herede de Vehículo.
        d.3) Crea un nuevo Coche, añádele 3 pasajeros y muestra el número de pasajeros por consola.
    f) Representación textual de objetos.
    Redefine el método toString para obtener una cadena con el siguiente formato al imprimir un objeto
    Coche: fabricante :::: modelo :::: pasajeros
*/
/*
a) Creación inicial de clase e instancias.
    a.1) Crea una clase Coche con los atributos fabricante, modelo, marchas y marchaActual y con el
    método cambiarMarcha para cambiar la marchaActual. Ten en cuenta:
    • Para instanciar un objecto Coche sólo es necesario indicar el fabricante y el modelo.
    • Las marchas pueden ser P (Parado), 1, 2, 3, 4, 5, 6 y R (marcha atrás).
    • Al inicializar el objeto la marcha actual será parado.
    • En el método cambiarMarcha, si la marcha a la que se pretende cambiar no existe se debe
    lanzar una excepción.
    a.2) Crea dos instancias de la clase Coche: un Tesla ModelS y un Mazda 3i. Cambia la marcha del
    Tesla a primera y la del Mazda a marcha atrás.
    a.3) Muestra por consola el fabricante, el modelo y la marcha en la que se encuentran ambos
    coches.
*/ 
class Coche {
    #fabricante;
    #modelo;
    #marchas = {P:'Parado', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', R:'R'};
    #marchaActual = this.#marchas.P;

    constructor (fabricante, modelo) {
        this.#fabricante = fabricante;
        this.#modelo = modelo;
    }

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

    get marchaActual() {
        return this.#marchaActual;
    }

    get marchas() {
        return this.#marchas;
    }

    set marchaActual(marcha) {
        if(marcha instanceof this.#marchas) {
            this.#marchaActual = marcha;
        }
    }
}
/*
Queremos crear objetos que representen ordenadores, sus atributos son:
• Marca, un texto.
• Modelo, un texto.
• Memoria RAM, un número que indica los Gb de capacidad.
• Capacidad de disco duro, un número que indica los Gb de capacidad.
• Pulgadas de pantalla, un número que indica las pulgadas de la pantalla.
*/
class Ordenador
{
    #marca;
    #modelo;
    #ram;
    #discoDuro;
    #pulgadas;

    /*
    Se debe tener en cuenta que por defecto se tomarán los valores 17 pulgadas,
    512Gb de disco duro y 4Gb de RAM.
    */
    constructor(marca, modelo, ram=4, discoDuro=512, pulgadas=17) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ram = ram;
        this.#discoDuro = discoDuro;
        this.#pulgadas = pulgadas;
    }

    get marca() {
        return this.#marca;
    }
    get modelo() {
        return this.#modelo;
    }
    get ram() {
        return this.#ram;
    }
    get discoDuro() {
        return this.#discoDuro;
    }
    get pulgadas() {
        return this.#pulgadas;
    }

    set marca(marca) {
        this.#marca = marca;
    }
    set modelo(modelo) {
        this.#modelo = modelo;
    }
    set ram(ram) {
        this.#ram = ram;
    }
    set discoDuro(discoDuro) {
        this.#discoDuro = discoDuro;
    }
    set pulgadas(pulgadas) {
        this.#pulgadas = pulgadas;
    }

    /*
    Se necesitan los siguientes métodos:
    • toString, para obtener una representación textual de los ordenadores.
    */
    toString() {
        return `Ordenador: [marca = ${this.#marca}, modelo = ${this.#modelo}, 
        ram = ${this.#ram}, discoDuro = ${this.#discoDuro}, 
        pulgadas = ${this.#pulgadas}]`;
    }
}

/*
Crea otro tipo de objeto que represente ordenadores portátiles que tendrán todos
los atributos y métodos de los ordenadores y añaden un atributo autonomía,
un número que indica el número de horas.
Por defecto la autonomía será de 4 horas, 12 pulgadas y 256Gb de disco duro
*/
class OrdenadorPortatil extends Ordenador
{
    #autonomia;

    constructor(marca, modelo, ram=4, discoDuro=512, pulgadas=17, autonomia) {
        super(marca, modelo, ram, discoDuro, pulgadas);
        this.#autonomia = autonomia;
    }

    get autonomia() {
        return this.#autonomia;
    }

    set autonomia(autonomia) {
        this.#autonomia = autonomia;
    }

    toString() {
        return `${super.toString()}\n\t
        · Portátil: [autonomia = ${this.#autonomia}]`;
    }
}
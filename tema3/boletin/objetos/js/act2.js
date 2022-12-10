/*
Queremos crear objetos que representen puntos en un plano, se necesita:
*/
class Punto
{
    /*
    a) Que tenga dos propiedades x e y que servirán para representar las coordenadas del punto. Al
    instanciar un punto se le pasarán dos números, si lo que recibe en alguna coordenada no es un
    número la coordenada se colocará a 0.
    */
    #x;
    #y;

    constructor (x, y) {
        if(Number.isNaN(x)) {
            this.#x = 0;
        } else {
            this.#x = x;
        }
        
        if(Number.isNaN(y)) {
            this.#y = 0;
        } else {
            this.#y = y;
        }
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    /*
    b) Añade un método cambiar al que se le pasan dos números y permite modificar las coordenadas
    del punto.
    */
    /**
     * Método que modifica las coordinadas del punto.
     * @param {number} x 
     * @param {number} y 
     */
    modify(x, y) {
        if(Number.isNaN(x)) {
            this.#x = 0;
        } else {
            this.#x = x;
        }
        
        if(Number.isNaN(y)) {
            this.#y = 0;
        } else {
            this.#y = y;
        }
    }

    /*
    c) Añade un método copia que devuelva una copia del objeto.
    */
    /**
     * Método que devuelve una copia del objeto.
     * @returns Punto
     */
    copy() {
        return new Punto(this.#x, this.#y);
    }

    /*
    d) Añade un método iguales que recibe un segundo punto y nos dice si ambos puntos son iguales.
    */
    /**
     * Método qque recibe un punto y nos dice si son iguales.
     * @param {Punto} q 
     * @returns boolean : true si los puntos son iguales, false si no lo son.
     */
    equals(q) {
        return this.#x === q.x && this.#y === q.y;
    }

    /*
    e) Añade un método suma que reciba un segundo punto y devuelva un tercer punto resultado de
    sumar las coordenadas de los dos anteriores.
    */
    /**
     * Método que recibe un segundo punto y devuelva un tercer punto resultado de
     * sumar las coordenadas de los dos anteriores
     * @param {Punto} q 
     * @returns Punto : punto resultado de sumar las coordenadas de dos puntos.
     */
    add(q) {
        const x = this.#x + q.x;
        const y = this.#y + q.y;
        return new Punto(x, y);
    }

    /*
    f) Añade un método obtenerDistancia que reciba un segundo punto y devuelva la distancia entre
    ambos puntos. Para hacer esta operación ten en cuenta:
    Para calcular la distancia se aplicará el Teorema de Pitágoras, la distancia se obtiene con la fórmula:
    sqrt(distHor^2 + distVer^2) = sqrt( (abs(Xq-Xp))^2 + (abs(Yq-Yp))^2 )
    */
    /**
     * Método que recibe un segundo punto y calcula la distacia entre ellos.
     * @param {Punto} q 
     * @returns number : distancia entre los puntos.
     */
    obtenerDistancia(q) {
        const distHor = Math.abs(q.x - this.#x);
        const distVer = Math.abs(q.y - this.#y);
        return Math.sqrt(Math.pow(distHor, 2) + Math.pow(distVer, 2));
    }

    /*
    g) Redefine el método toString para que se imprima la cadena (-5, 2) cuando se necesite una
    representación textual del objeto.
    */
    /**
     * Método que imprime el punto con el formato (x, y).
     * @returns string
     */
    toString() {
        return `(${this.#x}, ${this.#y})`;
    }
}

/*
h) Crea dos objetos Punto que representen los puntos p y q mostrados en la imagen. Prueba que los
métodos funcionen correctamente.
*/
let p = new Punto(-5, 2);
let q = new Punto(6, -3);
console.log(p.toString());
console.log(q.toString());

console.log(p.equals(q));
let p2 = p.copy();
console.log(p2.toString());
p2.modify(2, 3);
console.log(`p = ${p.toString()} :::: p2 = ${p2.toString()}`);

let dist = p.obtenerDistancia(q);
console.log(`Distancia entre ${p.toString()} y ${q.toString()}: ${dist}`);
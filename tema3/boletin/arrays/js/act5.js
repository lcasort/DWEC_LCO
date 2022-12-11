////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// APARTADO A //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Implementa una clase Carta que represente las cartas de una baraja inglesa.
La clase tiene 3 atributos:
1. sSimbolo. Sus posibles valores son A, 2, 3, 4, 5, 6, 7, J, Q y K.
2. sPalo. Sus posibles valores son diamantes, picas, corazones y treboles.
3. aCarta. Array de 9 x 7 posiciones que representa una carta.
Ejemplo para el 3 de corazones:
Cada posición almacena el código Unicode asociado al
caracter. Por ejemplo, en las posiciones centrales se guarda el
código 0x2665 que representa el caracter <3.
*/
class Carta
{
    #simbolo = ['A', '1', '2', '3', '4', '5', '6', '7', 'J', 'Q', 'K'];
    #palo = {diamantes:'&diams;', picas:'&spades;',
                    corazones:'&hearts;', treboles:'&clubs;'};

    #sSimbolo;
    #sPalo;
    #aCarta;
    #columnas = 9;
    #filas = 7;

    constructor(sSimbolo, sPalo) {
        if(this.#simbolo.includes(sSimbolo) && this.#palo[sPalo]) {
            this.#sSimbolo = sSimbolo;
            this.#sPalo = sPalo;

            this.inicializarCarta();
            this.incluirLineas();
            this.incluirSimbolo();
            this.incluirPalo();
        } else {
            throw new Error('Error: Los parámetros deben ser del tipo'
            + 'Carta.simbolo y Carta.palo.');
        }
    }

    inicializarCarta() {
        this.#aCarta = [];
        for (let i = 0; i < this.#filas; i++) {
            let fila = [];
            for (let j = 0; j < this.#columnas; j++) {
                fila.push(' ');
            }
            this.#aCarta.push(fila);
        }
    }

    incluirLineas() {
        for (let i = 0; i < this.#filas; i++) {
            for (let j = 0; j < this.#columnas; j++) {
                if((j > 0 || j < this.#columnas-1) &&
                    (i === 0 || i === this.#filas-1)) {
                    this.#aCarta[i][j] = '&#x2500;';
                } else if((i > 0 || i < this.#filas-1) &&
                            (j === 0 || j === this.#columnas-1)) {
                    this.#aCarta[i][j] = '&#x2502;';
                }
                
            }
        }
        this.#aCarta[0][0] = '&#x250C;';
        this.#aCarta[0][this.#columnas-1] = '&#x2510;';
        this.#aCarta[this.#filas-1][0] = '&#x2514;';
        this.#aCarta[this.#filas-1][this.#columnas-1] = '&#x2518;';
    }

    incluirSimbolo() {
        this.#aCarta[1][1] = this.#sSimbolo;
        this.#aCarta[this.#filas-2][this.#columnas-2] = this.#sSimbolo;
    }

    incluirPalo() {
        switch(this.#sSimbolo) {
            case 'A': case 'J': case 'Q': case 'K':
                this.#aCarta[3][4] = this.#palo[this.#sPalo];
                break;
            case '2':
                this.#aCarta[3][2] = this.#palo[this.#sPalo];
                this.#aCarta[3][6] = this.#palo[this.#sPalo];
                break;
            case '3':
                this.#aCarta[3][2] = this.#palo[this.#sPalo];
                this.#aCarta[3][4] = this.#palo[this.#sPalo];
                this.#aCarta[3][6] = this.#palo[this.#sPalo];
                break;
            case '4':
                this.#aCarta[2][2] = this.#palo[this.#sPalo];
                this.#aCarta[2][6] = this.#palo[this.#sPalo];
                this.#aCarta[4][2] = this.#palo[this.#sPalo];
                this.#aCarta[4][6] = this.#palo[this.#sPalo];
                break;
            case '5':
                this.#aCarta[2][2] = this.#palo[this.#sPalo];
                this.#aCarta[2][6] = this.#palo[this.#sPalo];
                this.#aCarta[3][4] = this.#palo[this.#sPalo];
                this.#aCarta[4][2] = this.#palo[this.#sPalo];
                this.#aCarta[4][6] = this.#palo[this.#sPalo];
                break;
            case '6':
                this.#aCarta[2][2] = this.#palo[this.#sPalo];
                this.#aCarta[2][4] = this.#palo[this.#sPalo];
                this.#aCarta[2][6] = this.#palo[this.#sPalo];
                this.#aCarta[4][2] = this.#palo[this.#sPalo];
                this.#aCarta[4][4] = this.#palo[this.#sPalo];
                this.#aCarta[4][6] = this.#palo[this.#sPalo];
                break;
            case '7':
                this.#aCarta[2][2] = this.#palo[this.#sPalo];
                this.#aCarta[2][4] = this.#palo[this.#sPalo];
                this.#aCarta[2][6] = this.#palo[this.#sPalo];
                this.#aCarta[3][4] = this.#palo[this.#sPalo];
                this.#aCarta[4][2] = this.#palo[this.#sPalo];
                this.#aCarta[4][4] = this.#palo[this.#sPalo];
                this.#aCarta[4][6] = this.#palo[this.#sPalo];
                break;
        }
    }

    toString() {
        let div = document.createElement('div');
        for (const fila of this.#aCarta) {
            let pre = document.createElement('pre');
            pre.innerHTML = fila.join(' ');
            div.appendChild(pre);
        }
        document.querySelector('.carta').appendChild(div);
    }
}
// document.write('<pre>' + fila.join(' ') + '</pre>');
/*
Añade además:
a) Un constructor que reciba el símbolo y el palo de la carta.
b) Métodos get y set para los atributos. Si se reciben un símbolo o palo no
válido, se lanzará una excepción.
c) 4 métodos que inicializan y rellenan el array aCarta:
    1. inicializarCarta. Crea un nuevo array bidimensional de tamaño 9x7 e
    inicializa todas sus posiciones con un espacio en blanco.
    2. incluirLineas. Añade al array las esquinas y los bordes.
    3. incluirSimbolo. Añade al array el símbolo de la carta.
    4. incluirPalo. Añade al array el palo de la carta.
d) El método toString que devuelve una representación textual del array.
La siguiente tabla muestra donde colocar el palo en función del símbolo de la
carta.
Símbolo         Posición del palo
A, J, Q o K     [3, 4]
2               [3, 2] [3, 6]
3               [3, 2] [3, 4] [3, 6]
4               [2, 2] [2, 6] [4, 2] [4, 6]
5               [2, 2] [2, 6] [3, 4] [4, 2] [4, 6]
6               [2, 2] [2, 4] [2, 6] [4, 2] [4, 4] [4, 6]
7               [2, 2] [2, 4] [2, 6] [3, 4] [4, 2] [4, 4] [4, 6]
*/

/*
--------------------------------------------------------------------------------
---------------------------------- APARTADO B ----------------------------------
--------------------------------------------------------------------------------
a) Crea una baraja de cartas inglesa utilizando la clase Carta.
La baraja tiene 40 cartas, 10 de cada palo.
b) Baraja las cartas utilizando el algoritmo de Fisher-Yates.
*/
let cartas = [
    new Carta('A', 'corazones'),
    new Carta('2', 'corazones'),
    new Carta('3', 'corazones'),
    new Carta('4', 'corazones'),
    new Carta('5', 'corazones'),
    new Carta('6', 'corazones'),
    new Carta('7', 'corazones'),
    new Carta('J', 'corazones'),
    new Carta('Q', 'corazones'),
    new Carta('K', 'corazones'),
    new Carta('A', 'diamantes'),
    new Carta('2', 'diamantes'),
    new Carta('3', 'diamantes'),
    new Carta('4', 'diamantes'),
    new Carta('5', 'diamantes'),
    new Carta('6', 'diamantes'),
    new Carta('7', 'diamantes'),
    new Carta('J', 'diamantes'),
    new Carta('Q', 'diamantes'),
    new Carta('K', 'diamantes'),
    new Carta('A', 'picas'),
    new Carta('2', 'picas'),
    new Carta('3', 'picas'),
    new Carta('4', 'picas'),
    new Carta('5', 'picas'),
    new Carta('6', 'picas'),
    new Carta('7', 'picas'),
    new Carta('J', 'picas'),
    new Carta('Q', 'picas'),
    new Carta('K', 'picas'),
    new Carta('A', 'treboles'),
    new Carta('2', 'treboles'),
    new Carta('3', 'treboles'),
    new Carta('4', 'treboles'),
    new Carta('5', 'treboles'),
    new Carta('6', 'treboles'),
    new Carta('7', 'treboles'),
    new Carta('J', 'treboles'),
    new Carta('Q', 'treboles'),
    new Carta('K', 'treboles')
];

function shuffleDeck(cartas)
{
    for (let i = cartas.length-1; i >= 0; i--) {
        let iElem = getRandomBetween(0, i);
        let num = cartas[i];
        cartas[i] = cartas[iElem];
        cartas[iElem] = num;
    }

    return cartas;
}

function getRandomBetween(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}

const cartas2 = shuffleDeck(cartas);
for (const carta of cartas2) {
    carta.toString();
}
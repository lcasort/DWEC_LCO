/*
Implementa el tablero del juego El Caracol Preso. Este juego consiste en ayudar
a un caracol a escapar de la parcela electrificada en la que se encuentra
encerrado. En esta actividad no tienes que implementar el juego completo sino
generar el tablero que usará.
Este es un tablero de 10x10 posiciones:
O O O O O  O O O O O
O X X X X  X X X X O
O X X X X  X X X X O
O X X X X  X X X X O
O X X X X  o X X X O
O X X X X  X X X X O
O X X X X  X X X X O
O X X X X  X X X X O
O X X X X  X X X X O
O O O O II O O O O O
Ubica adecuadamente los elementos del juego en las posiciones que correspondan:
• Carácter “O”. Simboliza la valla electrificada, se sitúa en la periferia de
la parcela.
• Carácter “X”. Simboliza todas las posiciones a las que se puede mover el
caracol. Se ubica en todas las posiciones internas de la parcela.
• Carácter “o”. Simboliza el caracol. Debe situarse en una posición aleatoria
dentro de las posiciones internas de la parcela.
• Carácter “II”. Simboliza la salida. Debe colocarse en una posición aleatoria
de la fila inicial o final exceptuando las esquinas.
*/
class CaracolPreso
{
    #caracol = 'o';
    #puerta = 'II';
    #valla = 'O';
    #vacio = 'X';
    #l = 10;
    #posCaracol;
    #posPuerta;
    #tablero;

    constructor()
    {
        this.initializeGame();
        this.addValla();

        const xCaracol = this.getRandomBetween(1, this.#l-2);
        const yCaracol = this.getRandomBetween(1, this.#l-2);
        const xPuerta = this.getRandomBetween(0, 1);
        const yPuerta = this.getRandomBetween(1, this.#l-2);
        this.#posCaracol = [xCaracol, yCaracol];
        this.#posPuerta = [xPuerta, yPuerta];

        this.addCaracol();
        this.addPuerta();
    }

    initializeGame()
    {
        this.#tablero = [];

        for (let i = 0; i < this.#l; i++) {
            let aux = [];
            for (let j = 0; j < this.#l; j++) {
                aux.push(this.#vacio);              
            }
            this.#tablero.push(aux);
        }
    }

    addValla()
    {
        this.#tablero[0].fill(this.#valla, 0, this.#l-1);
        this.#tablero[this.#l-1].fill(this.#valla, 0, this.#l-1);

        for (let i = 0; i < this.#l; i++) {
            this.#tablero[i][0] = this.#valla;
            this.#tablero[i][this.#l-1] = this.#valla;
        }
    }

    addCaracol()
    {
        const x = this.#posCaracol[0];
        const y = this.#posCaracol[1];
        this.#tablero[x][y] = this.#caracol;
    }

    addPuerta()
    {
        let x = this.#posPuerta[0];
        const y = this.#posPuerta[1];

        if(x !== 0) {
            x = this.#l-1;
        }

        this.#tablero[x][y] = this.#puerta;
    }

    getRandomBetween(min, max)
    {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    toString() {
        this.#tablero.forEach(fila => {
            console.log(fila.join(' '));
        });
    }
}


const t = new CaracolPreso();
t.toString();
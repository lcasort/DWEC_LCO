/**
 * Obtén una referencia a los elementos en los que insertar
 * contenido:
 *  -El div "titulo".
 *  -El div "tiempo".
 *  -El div "tablero".
 *  -El div "mensajes".
 */


/**
 * Genera el título y el tablero inicial del juego.
 *  -El texto de título es "Ayuda al topo a salir del túnel.".
 *  -La tabla de una fila y quince columnas que actúa como tablero.
 */


/**
 * Añade las imágenes iniciales del topo, la salida y las rocas. Las 
 * rocas se deben colocar de forma aleatoria en las casillas intermedias.
 * Obtén una referencia al conjunto de todas las casillas.
 */


/**
 * Añade un manejador del evento clic a la casilla del topo y 
 * del evento doble clic a las casillas de las rocas para que 
 * llamen a las funciones "avanzar" y "picarRoca"
 * respectivamente.
 */


/**
 * Añade el texto del tiempo restante "Quedan X segundos restantes.".
 * Declara una variable que almacene los segundos restantes.
 */


/**
 * Implementa un temporizador que llame a la función "actualizarSegundos" cada segundo.
 */


/**
 * Implementa la función "actualizarSegundos" que se llamará cada segundo
 * para actualizar el tiempo restante. Si el tiempo se acaba, se debe
 * informar al usuario que ha perdido.
 */


/**
 * Implementa la función "avanzar" que se lanza cuando se hace 
 * clic en la casilla del topo y hace avanzar al topo una casilla 
 * en el tablero.
 * Ten en cuenta que:
 *  -Si la celda siguiente es una roca, el topo no avanzará y se 
 *   informará al usuario para que pique la roca.
 *  -Si la celda siguiente es la salida, el topo desaparecerá del 
 *   tablero.
 */


/**
 * Implementa la función "picarRoca" que se lanza cuando se hace
 * doble clic en la casilla de una roca, su tarea es quitar la roca 
 * del tablero.
 * Ten en cuenta que:
 *  -Si el topo no está en la celda anterior, se informará al usuario
 *   para que avance hasta la roca.
 */

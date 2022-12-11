/*
Implementa una aplicación que muestre 10 combinaciones para jugar a la lotería
primitiva. Una combinación tiene 6 números del 1 al 49. Los números no se pueden
repetir en una combinación.
Para ello:
• Genera un array de 49 elementos que contengan números del 1 al 49.
• Mezcla los elementos del array.
• Extrae un array de los 6 primeros elementos para obtener una combinación
*/
function shuffle_array(numbers)
{
    for(let i=numbers.length-1; i>=0; i--)
    {
        let pos = getRandomBetween(0, i-1);
        let num = numbers[pos];
        numbers[pos] = numbers[i];
        numbers[i] = num;
    }
    return numbers;
}

function getRandomBetween(min, max)
{
    return Math.floor(Math.random()*(max-min+1)) + min;
}

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
let numbers = [];
for (let i = 1; i < 50; i++) {
    numbers.push(i);
}
const aShuffled = shuffle_array(numbers);
console.log(`Combinación de lotería: ${aShuffled.slice(0,6).join(' ')}`);
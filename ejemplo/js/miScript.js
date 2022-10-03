// Ejemplo del uso del setTimeout
function funcionCallback() {
    console.log('Se ejecuta el callback del timer');
}
console.log('Antes de establecer el timer');
// Se establece el timer para 2 segundos como mínimo
setTimeout(funcionCallback, 2000);

console.log('Después de establecer el timer');
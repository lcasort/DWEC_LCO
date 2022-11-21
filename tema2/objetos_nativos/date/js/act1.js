/*
Actividad 1. Propiedades y métodos.
A partir del fichero proporcionado en esta carpeta compartida, realiza las
siguientes actividades sobre el objeto Date:
1. El día del mes (getDate)
2. El día de la semana (getDay)
3. El año (getFullYear)
4. La hora (getHours)
5. Los milisegundos (getMilliseconds)
6. Los minutos (getMinutes)
7. El mes del año (getMonth)
8. Los segundos (getSeconds)
9. Una cadena legible de la fecha (toDateString)
10. Una cadena legible de la fecha en formato local (toLocaleDateString)
11. Una cadena legible de la hora en formato local (toLocaleTimeString)
12. Una cadena legible de la fecha y la hora en formato local (toLocaleString)
*/
const date = new Date(1999,5,17,21,05,0,30);
console.log('Día del mes: ' + date.getDate());
console.log('Día de la semana: ' + date.getDay());
console.log('Año: ' + date.getFullYear());
console.log('Hora: ' + date.getHours());
console.log('Milisegundos: ' + date.getMilliseconds());
console.log('Minutos: ' + date.getMinutes());
console.log('Mes del año: ' + date.getMonth());
console.log('Minutos: ' + date.getSeconds());
console.log('Cadena legible de la fecha: ' + date.toDateString());
console.log('Cadena legible de la fecha en formato local: ' + date.toLocaleDateString());
console.log('Cadena legible de la hora en formato local: ' + date.toLocaleTimeString());
console.log('Cadena legible de la fecha y la hora en formato local: ' + date.toLocaleString());
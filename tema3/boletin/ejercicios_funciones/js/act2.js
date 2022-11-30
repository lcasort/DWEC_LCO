/*
Actividad 2. Dibuja una tabla HTML.
Crea una función que permita dibujar una tabla HTML. La función recibirá como parámetros el
número de filas y columnas de la tabla. Por defecto la función creará una tabla de 10 filas y 4
columnas.
*/
function createTable(rows=10, columns=4)
{
    const body = document.getElementsByTagName('body')[0];
    const tbl = document.createElement('table');
    tbl.style.width = '50%';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        tr.style.border = '1px solid black';

        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.style.border = '1px solid black';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }

    body.appendChild(tbl);
}

createTable(5,5);
createTable();
/*
Actividad 3. Añadir y eliminar elementos.
Los principales métodos para añadir y eliminar elementos HTML son: createElement y
remove.
Elimina el cuarto párrafo del documento. Crea un nuevo párrafo y añádelo en último lugar. Crea un
nuevo párrafo y añádelo en tercer lugar
*/
function remove()
{
    document.getElementsByTagName('p')[2].remove();
}

function addLast()
{
    let p = document.createElement('p');
    let textNode = document.createTextNode('Parrafo último.');
    p.appendChild(textNode);

    document.body.insertAdjacentElement('beforeend', p);
}

function add3rd()
{
    let p = document.createElement('p');
    let textNode = document.createTextNode('Parrafo 3o.');
    p.appendChild(textNode);

    document.getElementsByTagName('p')[1].append(p);
}

function main()
{
    remove();
    addLast();
    add3rd();
}
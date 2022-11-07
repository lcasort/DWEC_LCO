/*
Actividad 2. Cambiar contenido.
Las principales propiedades para cambiar el contenido de elementos HTML son: innerHTML y
textContent.
Cambia el contenido del segundo párrafo por “Éste es el nuevo contenido del segundo párrafo” y el
contenido del tercero por “Éste es el nuevo contenido del <strong>tercer párrafo</strong>.”
*/
function changeP2Content()
{
    const textP2 = 'Éste es el nuevo contenido del segundo párrafo';
    const textP3 = 'Éste es el nuevo contenido del <strong>tercer párrafo</strong>.';

    document.querySelector('.p2').innerHTML = textP2;
    document.querySelector('.p3').innerHTML = textP3;
}
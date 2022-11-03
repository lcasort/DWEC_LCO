function cambiarTitulo()
{
    parent.frames['marco1'].document.querySelector('.title > h1').remove();

    const node = parent.frames['marco1'].document.createElement("h1");
    const textnode = parent.frames['marco1'].document.createTextNode("MARCOOOOOO");
    node.appendChild(textnode);
    parent.frames['marco1'].document.querySelector('.title').appendChild(node);
}
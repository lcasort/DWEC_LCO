function cambiarParrafo()
{
    parent.frames['marco2'].document.querySelector('.text > p').remove();

    const node = parent.frames['marco2'].document.createElement("p");
    const textnode = parent.frames['marco2'].document.createTextNode("aaaa");
    node.appendChild(textnode);
    parent.frames['marco2'].document.querySelector('.text').appendChild(node);
}
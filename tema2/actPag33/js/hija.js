function enviarTexto()
{
    let prevWindow = window.opener;

    let p = prevWindow.document.querySelector('#parrafo');

    let writeInText = prevWindow.document.createTextNode(
        document.querySelector('#textocopiar').value
        );
        
    p.appendChild(writeInText);
}
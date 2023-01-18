function ini()
{
    document.getElementById('submit').addEventListener('click', printElementsName, false);
}

function printElementsName(e)
{
    e.preventDefault();
    
    for (const item of document.formulario.elements) {
        console.log(item.name + ' -> ' + item.value);
    }
}

ini();
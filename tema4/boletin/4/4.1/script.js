function ini()
{
    document.getElementById('submit').addEventListener('click', disableButton, false);
}

function disableButton(e)
{
    e.preventDefault();
    this.disabled = true;
}

ini();
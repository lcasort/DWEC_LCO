/*
Actividad 2. Redirección y recarga de la página.
2.1. Implementa una aplicación que redireccione la página actual a la página de Google guardando
la página actual en el historial de navegación (método assign). A continuación realiza la misma
tarea pero sin guardar la página actual en el historial de navegación (método replace).
2.2. Implementa una aplicación que incluya un botón que permita recargar la página actual
realizando la misma función que el botón del navegador. (método reload)
*/
function redirectAssign()
{
    location.assign('https://www.google.com/');
}

function redirectReplace()
{
    location.replace('https://www.google.com/');
}

function reload()
{
    location.reload();
}
let myWindow = null;
const parameters = "width=600px, height=450px, top=50px, left=50px, " +
"location=yes, resizable=yes, scrollbars=yes, status=yes, toolbar=yes";

function openTab() {
    if (myWindow === null) {
        myWindow = window.open("https://www.w3schools.com", "", parameters);
    } else {
        console.log('Window already opened.');
    }
}

function closeTab() {
    if (myWindow === null) {
        console.log('The window is not opened.');
    } else {
        myWindow.close();
        myWindow = null;
    }
}
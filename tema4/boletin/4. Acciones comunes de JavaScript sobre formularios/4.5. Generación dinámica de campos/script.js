const aOpcionesPais = [
    {text: "Portugal", value: "pt"},
    {text: "Francia", value: "fr"},
    {text: "Reino Unido", value: "uk"},
    {text: "Alemania", value: "de"},
    {text: "España", value: "es"}
];

let select = document.getElementById('pais');

for (let index = 0; index < aOpcionesPais.length; index++) {
    select.remove(0);
}

aOpcionesPais.forEach(element => {
    let option = document.createElement('option');
    option.text = element['text'];
    option.value = element['value'];
    select.add(option);
});
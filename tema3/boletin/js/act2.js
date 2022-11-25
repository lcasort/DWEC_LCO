function anadirPrefijo(prefijo, ...palabras) {
    const palabrasConPrefijo = [];

    for(let i=0; i<palabras.length; i++) {
        palabrasConPrefijo[i] = prefijo + palabras[i];
    }

    return palabrasConPrefijo;
}

console.log(anadirPrefijo("con", "verso", "vexo", "cavo"));
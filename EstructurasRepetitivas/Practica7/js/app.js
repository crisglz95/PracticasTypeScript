eventListener();

function eventListener() {
    const button = document.getElementById('btnSerie');
    button.addEventListener('click', generarSerie);
}

function generarSerie() {
    let cadena = '';

    for (let x = 0; x <= 100; x++) {
        if (x % 2 == 0) {
            cadena = cadena + `${x} `;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = cadena;
}
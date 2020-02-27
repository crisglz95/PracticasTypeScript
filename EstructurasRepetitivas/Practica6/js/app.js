EventListener();

function EventListener() {
    const button = document.getElementById('btnGenerar');
    button.addEventListener('click', generarSerie);
}

function generarSerie() {
    let cadena = '';

    for (let x = 100; x >= 0; x--) {
        cadena = cadena + `${x} `;
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = cadena;
}
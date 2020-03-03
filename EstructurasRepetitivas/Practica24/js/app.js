eventListener();

function eventListener() {
    const button = document.getElementById('btnSerie');
    button.addEventListener('click', generarSerie);
}

function generarSerie() {
    let numSerie = 5,
        contador = 1;
    let serie = '';

    serie = serie + `${numSerie} `;

    while (numSerie < 1800) {
        if (contador % 2 == 0) {
            numSerie = numSerie + 3;
        } else {
            numSerie = numSerie + 2;
        }
        contador++;
        serie = serie + `${numSerie} `;
    }

    const divPrint = document.getElementById('divAlert');
    divPrint.innerText = serie;
}
eventListener();

function eventListener() {
    const button = document.getElementById('btnComenzar');
    button.addEventListener('click', puntoEncuentro);
}

function puntoEncuentro() {
    let ags = 70,
        zac = 150;
    let mientras = true;
    while (mientras) {
        ags++;
        zac--;
        if (ags == zac) {
            mientras = false;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = `Se encontraron en el KM ${ags}`;
}
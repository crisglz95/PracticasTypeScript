EventListener();

function EventListener() {
    const button = document.getElementById('btnPromedio');
    button.addEventListener('click', promEstatura);
}

function promEstatura() {
    let continuar = true;
    let acumulador = 0,
        contador = 0,
        prom = 0;

    while (continuar) {
        let estatura = Number(prompt('Ingresa la estatura: '));
        if (estatura != 0) {
            acumulador += estatura;
            contador++;
        } else {
            continuar = false;
        }
    }

    prom = acumulador / contador;

    const zonaImprimir = document.getElementById('zonePrint');
    zonaImprimir.innerText = `La estatura promedio: ${prom}`;
}
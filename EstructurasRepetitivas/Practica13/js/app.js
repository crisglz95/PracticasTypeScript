eventListener();

function eventListener() {
    const button = document.getElementById('btnSerie');
    button.addEventListener('click', generaNumero);
}

function generaNumero() {
    let num1 = 0,
        num2 = 1,
        aux = 0,
        contador = 2;

    let serie = '';
    serie = `${num1}, ${num2},`;

    const posicionSerie = Number(prompt('Ingresa la Posicion'));

    while (posicionSerie != contador && posicionSerie > 2) {
        aux = num1 + num2;
        num1 = num2;
        num2 = aux;
        serie = serie + ` ${aux},`;
        contador++;
    }

    const zonaImprimir = document.getElementById('divAlert');

    if (posicionSerie == 1) {
        zonaImprimir.innerText = `El numero es ${num1}`;
    } else if (posicionSerie == 2) {
        zonaImprimir.innerText = `El numero es ${num2}`;
    } else {
        zonaImprimir.innerText = `El numero es ${aux}`;
    }
}
eventListener();

function eventListener() {
    const button = document.getElementById('btnMeses');
    button.addEventListener('click', calcularMeses);
}

function calcularMeses() {
    let pagoInicial = 10;
    let cadenaPagos = '';
    let pagoFinal = 0;
    for (let i = 1; i <= 20; i++) {
        cadenaPagos = cadenaPagos + `Mes ${i}: $${pagoInicial} `;
        pagoInicial *= 2;
        pagoFinal = pagoFinal + pagoInicial;
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = cadenaPagos;

    const zonaTotal = document.getElementById('divTotal');
    zonaTotal.innerText = `El total pagado es $${pagoFinal}`;
}
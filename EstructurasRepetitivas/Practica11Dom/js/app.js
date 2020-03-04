let button, alert;

function crearDom() {
    const output = document.getElementById('output');
    const button = document.createElement('button');
    button.setAttribute('id', 'btnInit');
    button.setAttribute('class', 'btn btn-outline-success btn-block');
    button.innerText = 'Iniciar Aplicacion';
    const alertSerie = document.createElement('div');
    alertSerie.setAttribute('class', 'alert alert-success mt-3');
    alertSerie.setAttribute('id', 'alert-serie');
    const alertTotal = document.createElement('div');
    alertTotal.setAttribute('class', 'alert alert-danger mt-3');
    alertTotal.setAttribute('id', 'alert-total');

    output.appendChild(button);
    output.appendChild(alertSerie);
    output.appendChild(alertTotal);

    initApp();

}

function initApp() {
    button = document.getElementById('btnInit');
    button.addEventListener('click', generaSerie);
}

function generaSerie() {
    let pagoInicial = 10,
        cadenaPagos = '',
        pagoFinal = 0;

    const alertSerie = document.getElementById('alert-serie');
    const alertTotal = document.getElementById('alert-total');

    for (let i = 1; i <= 20; i++) {
        cadenaPagos = cadenaPagos + `Mes ${i}: $${pagoInicial} \n`;
        pagoInicial *= 2;
        pagoFinal = pagoFinal + pagoInicial;
    }

    alertSerie.innerText = cadenaPagos;
    alertTotal.innerText = `El total pagado es $${pagoFinal}`;
}

crearDom();
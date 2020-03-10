let button;
const output = document.getElementById('output');

function crearDom() {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnSerie');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Ejecutar Serie';

    const alert = document.createElement('div');
    alert.setAttribute('id', 'divAlert');
    alert.setAttribute('class', 'alert alert-success mt-3');

    output.appendChild(div);
    div.appendChild(button);
    div.appendChild(alert);

    eventListener();
}

function eventListener() {
    button = document.getElementById('btnSerie');
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

    const divAlert = document.getElementById('divAlert');
    divAlert.innerText = serie;
}

crearDom();
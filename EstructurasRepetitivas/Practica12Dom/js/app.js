let button, alert;

function crearDom() {
    const output = document.getElementById('output');

    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = 'Ingresa un numero positivo';

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'inpNumero');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnSerie');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Ejecutar Serie';

    const alert = document.createElement('div');
    alert.setAttribute('id', 'divAlert');
    alert.setAttribute('class', 'alert alert-success mt-3');

    output.appendChild(div);
    output.appendChild(button);
    output.appendChild(alert);
    div.appendChild(label);
    div.appendChild(input);

    initApp();
}

function initApp() {
    button = document.getElementById('btnSerie');
    button.addEventListener('click', generarULAM);
}

function generarULAM() {
    const valor = Number(document.getElementById('inpNumero').value);
    let serie = '',
        auxNum = valor;

    serie = serie + `${auxNum} `;

    while (auxNum != 1) {
        if (auxNum % 2 == 0) {
            auxNum = auxNum / 2;
            serie = serie + `${auxNum} `;
        } else {
            auxNum = (auxNum * 3) + 1;
            serie = serie + `${auxNum} `;
        }
    }

    const divAlert = document.getElementById('divAlert');
    divAlert.innerText = serie;
}

crearDom();
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
    button.setAttribute('id', 'btnNumero');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Generar Serie';

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
    button = document.getElementById('btnNumero');
    button.addEventListener('click', calcularSerie);
}

function calcularSerie() {
    let numero = Number(document.getElementById('inpNumero').value);
    let serie = '';
    for (let a = 1; a <= numero; a++) {
        let bandera = true;
        for (let b = 2; b < a; b++) {
            if (a % b == 0) {
                bandera = false;
                break;
            }
        }
        if (bandera) {
            serie = serie + ` ${a}`;
        }
    }

    alert = document.getElementById('divAlert');
    alert.innerText = serie;
}

crearDom();
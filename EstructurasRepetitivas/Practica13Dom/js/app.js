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
    button.innerText = 'Buscar Numero';

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
    button.addEventListener('click', generaNumero);
}

function generaNumero() {
    let num1 = 0,
        num2 = 1,
        aux = 0,
        contador = 2;

    let serie = `${num1}, ${num2},`;

    const posicionSerie = Number(document.getElementById('inpNumero').value);

    while (posicionSerie != contador && posicionSerie > 2) {
        aux = num1 + num2;
        num1 = num2;
        num2 = aux;
        serie = serie + `${aux} `;
        contador++;
    }

    alert = document.getElementById('divAlert');

    if (posicionSerie == 1) {
        alert.innerText = `El numero es ${num1}`;
    } else if (posicionSerie == 2) {
        alert.innerText = `El numero es ${num2}`;
    } else {
        alert.innerText = `El numero es ${aux}`;
    }
}

crearDom();
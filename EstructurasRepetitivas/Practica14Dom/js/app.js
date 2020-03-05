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
    button = document.getElementById('btnNumero');
    button.addEventListener('click', calcularNumero);
}

function calcularNumero() {
    let num1 = 0,
        num2 = 1,
        aux = 0,
        contador = 2,
        validar = true;

    const numero = Number(document.getElementById('inpNumero').value);
    alert = document.getElementById('divAlert');

    if (numero == 0) {
        alert.innerText = `El numero correspondiente es ${num1}`;
    } else {
        while (validar) {
            aux = num1 + num2;
            num1 = num2;
            num2 = aux;

            if ((numero < aux && numero > num1)) {
                validar = false;
                alert.innerText = `El numero correspondiente es ${num1}`;
            } else if (numero == aux) {
                validar = false;
                alert.innerText = `El numero correspondiete es ${aux}`;
            }
        }
    }
}

crearDom();
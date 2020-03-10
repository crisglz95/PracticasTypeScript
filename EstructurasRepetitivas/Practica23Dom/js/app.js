let button;
const output = document.getElementById('output');

function crearDom() {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnSeries');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Generar Series';

    const alert1 = document.createElement('div');
    alert1.setAttribute('class', 'alert alert-success mt-3');
    alert1.setAttribute('id', 'divAlert1');

    const alert2 = document.createElement('div');
    alert2.setAttribute('class', 'alert alert-primary mt-3');
    alert2.setAttribute('id', 'divAlert2');

    const divInputs = document.createElement('div');
    divInputs.setAttribute('class', 'form-group');

    for (let i = 1; i <= 30; i++) {
        const label = document.createElement('label');
        label.innerText = `Numero ${i}`;

        const input = document.createElement('input');
        input.setAttribute('id', `inpNum${i}`);
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'number');

        divInputs.appendChild(label);
        divInputs.appendChild(input);
    }

    output.appendChild(divInputs);
    output.appendChild(div);
    div.appendChild(button);
    output.appendChild(alert1);
    output.appendChild(alert2);

    eventListener();
}

function eventListener() {
    button = document.getElementById('btnSeries');
    button.addEventListener('click', generaSeries);
}

function generaSeries() {
    let par = 0,
        impar = 0,
        contador = 0;
    for (let i = 1; i <= 30; i++) {
        let numero = Number(document.getElementById(`inpNum${i}`).value);
        if (numero % 2 == 0) {
            par += numero;
            contador++;
        } else {
            impar += numero;
        }
    }

    const zonePrint = document.getElementById('divAlert1');
    zonePrint.innerText = `Par: ${par / contador}`;
    const zonePrint2 = document.getElementById('divAlert2');
    zonePrint2.innerText = `Suma de Impar: ${impar}`;
}

crearDom();
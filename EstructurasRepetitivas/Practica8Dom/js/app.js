let button;

function crearDom() {
    const output = document.getElementById('output');

    const labelSalario = document.createElement('label');
    labelSalario.innerText = 'Ingresa tu salario';

    const inputSalario = document.createElement('input');
    inputSalario.setAttribute('type', 'number');
    inputSalario.setAttribute('class', 'form-control mb-2');
    inputSalario.setAttribute('id', 'inpSalario');

    output.appendChild(labelSalario);
    output.appendChild(inputSalario);

    for (let x = 1; x <= 6; x++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `Horas Trabajadas en Dia ${x}`;

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `inpNo${x}`);

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
    }

    const button = document.createElement('button');
    button.setAttribute('id', 'btnCalcularSueldo');
    button.setAttribute('class', 'btn btn-outline-success btn-block');
    button.innerText = 'Calcular Pago';
    output.appendChild(button);

    const alertResultado = document.createElement('div');
    alertResultado.setAttribute('id', 'divAlert');
    alertResultado.setAttribute('class', 'alert alert-success mt-3');
    output.appendChild(alertResultado);

    eventListener();

}


function eventListener() {
    button = document.getElementById('btnCalcularSueldo');
    button.addEventListener('click', calcular);
}

function calcular() {
    let total = 0,
        pago = 0;
    for (let x = 1; x <= 6; x++) {
        total = total + (Number(document.getElementById(`inpNo${x}`).value));
    }
    pago = total * Number(document.getElementById('inpSalario').value);
    const alerta = document.getElementById('divAlert');
    alerta.innerText = pago;
}

crearDom();
let button, alert;
const output = document.getElementById('output');

function crearDom() {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = 'Numero Limite';

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'inpNumero');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnGenerar');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Calcular numeros perfectos';

    const alert = document.createElement('div');
    alert.setAttribute('id', 'divAlert');
    alert.setAttribute('class', 'alert alert-success');

    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(button);
    output.appendChild(alert);

    eventListener();

}

function eventListener() {
    button = document.getElementById('btnGenerar');
    button.addEventListener('click', calcularNumero);
}

function calcularNumero() {
    const numeroLimite = Number(document.getElementById('inpNumero').value);
    let noPerfectos = '';

    for (let a = 2; a <= numeroLimite; a++) {
        let sumaAux = 0;
        for (b = 1; b < a; b++) {
            if (a % b == 0) {
                sumaAux = sumaAux + b;
            }
        }
        if (a == sumaAux) {
            noPerfectos = noPerfectos + `${sumaAux} `;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = noPerfectos;
}

crearDom();
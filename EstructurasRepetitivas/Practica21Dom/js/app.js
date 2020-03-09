let button;
const output = document.getElementById('output');

function crearDom() {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnIniciar');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Iniciar Aplicacion';

    output.appendChild(div);
    div.appendChild(button);
    eventListener();
}

function eventListener() {
    button = document.getElementById('btnIniciar');
    button.addEventListener('click', generarAhorro);
}

function generarAhorro() {
    let dias = 365;
    let centavos = .03;
    let acomulados = 0;
    let mensaje = '';

    const listGroup = document.getElementById('ListaAhorro');

    for (let a = 1; a <= dias; a++) {
        acomulados = acomulados + centavos;
        centavos = centavos * 3;
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El ahorro el dia ${a} es de $${acomulados} \n`;
        listGroup.appendChild(li);
    }
}

crearDom();
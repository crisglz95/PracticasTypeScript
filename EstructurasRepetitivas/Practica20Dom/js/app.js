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
    button.addEventListener('click', generarSueldo);
}

function generarSueldo() {
    let incremento = .10,
        sueldoNuevo = 1500,
        cadenaSueldos = '';

    const listGroup = document.getElementById('ListaAhorro');

    for (let a = 1; a <= 6; a++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        sueldoNuevo = sueldoNuevo + (sueldoNuevo * incremento);
        cadenaSueldos = `Sueldo en el año ${a} es de $${sueldoNuevo} \n`;
        li.innerText = cadenaSueldos;
        listGroup.appendChild(li);
    }

}

crearDom();
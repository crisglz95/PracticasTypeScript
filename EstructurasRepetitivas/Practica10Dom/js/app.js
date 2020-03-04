let button, alert;

function crearDom() {
    const output = document.getElementById('output');


    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = 'Ventas del Dia';

    const inpVentas = document.createElement('input');
    inpVentas.setAttribute('type', 'number');
    inpVentas.setAttribute('class', 'form-control');
    inpVentas.setAttribute('id', 'inpVentas');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnGenera');
    button.setAttribute('class', 'btn btn-outline-success btn-block mb-2');
    button.innerText = 'Generar Ventas';

    output.appendChild(div);
    output.appendChild(button);
    div.appendChild(label);
    div.appendChild(inpVentas);

    eventListener();
}

function eventListener() {
    button = document.getElementById('btnGenera');
    button.addEventListener('click', calcularVentas);
}

function calcularVentas() {
    const valor = Number(document.getElementById('inpVentas').value);
    const output = document.getElementById('output');

    for (let x = 1; x <= valor; x++) {
        const divVentas = document.createElement('div');
        divVentas.setAttribute('class', 'form-group');

        const labelVentas = document.createElement('label');
        labelVentas.innerText = `Ingresa la venta ${x}`;

        const inputVenta = document.createElement('input');
        inputVenta.setAttribute('type', 'number');
        inputVenta.setAttribute('class', 'form-control');
        inputVenta.setAttribute('id', `inpVenta${x}`);

        output.append(divVentas);
        divVentas.appendChild(labelVentas);
        divVentas.appendChild(inputVenta);
    }

    const buttonApp = document.createElement('button');
    buttonApp.setAttribute('id', 'btnIniciar');
    buttonApp.setAttribute('class', 'btn btn-outline-primary btn-block');
    buttonApp.innerText = 'Realizar Reporte';

    output.appendChild(buttonApp);

    initApp();


}

function initApp() {
    button = document.getElementById('btnIniciar');
    button.addEventListener('click', realizarCalculos);
}

function realizarCalculos() {
    let tVentas = 0,
        tCatA = 0,
        tCatB = 0,
        tCatC = 0,
        contA = 0,
        contB = 0,
        contC = 0;

    const valor = Number(document.getElementById('inpVentas').value);
    const output = document.getElementById('output');



    for (let i = 1; i <= valor; i++) {
        let valorIngresado = Number(document.getElementById(`inpVenta${i}`).value);
        if (valorIngresado > 1000) {
            tCatA = tCatA + valorIngresado;
            contA++;
        } else if (valorIngresado < 1000 && valorIngresado > 500) {
            tCatB = tCatB + valorIngresado;
            contB++;
        } else {
            tCatC = tCatC + valorIngresado;
            contC++;
        }
        tVentas = tVentas + valorIngresado;
    }

    const divResultado = document.createElement('div');
    divResultado.setAttribute('class', 'alert alert-success mt-3');
    divResultado.innerText = `Total Ventas: $${tVentas} \n # de Ventas > 1000: ${contA} - Total: $${tCatA} \n # de Ventas > 500 y < 1000: ${contB} - Total $${tCatB} \n # de Ventas <= 500: ${contC} - Total $${tCatC}`;

    output.appendChild(divResultado);

}



crearDom();
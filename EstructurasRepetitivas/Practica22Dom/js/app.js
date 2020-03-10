let button;
const output = document.getElementById('output');

function crearDom() {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = 'Ingresa el numero de autos';

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'inpAutos');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnAutos');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Generar inputs';

    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(button);

    eventListener();
}

function eventListener() {
    button = document.getElementById('btnAutos');
    button.addEventListener('click', calcularImpuestos);
}

function calcularImpuestos() {
    let noAutos = Number(document.getElementById('inpAutos').value);

    for (let a = 1; a <= 3; a++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'form-group');
        let label;
        if (a == 1) {
            label = document.createElement('label');
            label.innerText = 'Costo Tipo A';
        } else if (a == 2) {
            label = document.createElement('label');
            label.innerText = 'Costo Tipo B';
        } else {
            label = document.createElement('label');
            label.innerText = 'Costo Tipo C';
        }

        const input = document.createElement('input');
        input.setAttribute('id', `inpTipo${a}`);
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'number');

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);

    }

    for (let x = 1; x <= noAutos; x++) {
        const div = document.createElement('div');
        div.innerText = 'Tipo de Auto';

        const select = document.createElement('select');
        select.setAttribute('id', `select${x}`);
        select.setAttribute('class', 'form-control');

        const tipoA = document.createElement('option');
        tipoA.setAttribute('value', 'A');

        const tipoB = document.createElement('option');
        tipoB.setAttribute('value', 'B');

        const tipoC = document.createElement('option');
        tipoC.setAttribute('value', 'C');

        const txtA = document.createTextNode('Tipo A');
        const txtB = document.createTextNode('Tipo B');
        const txtC = document.createTextNode('Tipo C');
        output.appendChild(div);
        div.appendChild(select);
        select.appendChild(tipoA);
        select.appendChild(tipoB);
        select.appendChild(tipoC);
        tipoA.appendChild(txtA);
        tipoB.appendChild(txtB);
        tipoC.appendChild(txtC);
    }

    const button = document.createElement('button');
    button.setAttribute('id', 'btnGenerar');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Calcular Impuestos';

    const alert1 = document.createElement('div');
    alert1.setAttribute('class', 'alert alert-success mt-3');
    alert1.setAttribute('id', 'divAlert1');

    const alert2 = document.createElement('div');
    alert2.setAttribute('class', 'alert alert-success');
    alert2.setAttribute('id', 'divAlert2');

    const alert3 = document.createElement('div');
    alert3.setAttribute('class', 'alert alert-success');
    alert3.setAttribute('id', 'divAlert3');

    output.appendChild(button);
    output.appendChild(alert1);
    output.appendChild(alert2);
    output.appendChild(alert3);

    lanzarFuncionalidad();
}

function lanzarFuncionalidad() {
    button = document.getElementById('btnGenerar');
    button.addEventListener('click', generaResultados);
}

function generaResultados() {
    let noAutos = Number(document.getElementById('inpAutos').value);
    let costoClaseA = Number(document.getElementById('inpTipo1').value);
    let costoClaseB = Number(document.getElementById('inpTipo2').value);
    let costoClaseC = Number(document.getElementById('inpTipo3').value);
    let acomuladorA = 0,
        acomuladorB = 0,
        acomuladorC = 0;

    for (let a = 1; a <= noAutos; a++) {
        let claseAuto = document.getElementById(`select${a}`).value;
        if (claseAuto == 'A') {
            acomuladorA++;
        } else if (claseAuto == 'B') {
            acomuladorB++;
        } else {
            acomuladorC++;
        }
    }

    let impuestoA = costoClaseA * .1,
        impuestoB = costoClaseB * .07,
        impuestoC = costoClaseC * .05;

    let totalA = impuestoA * acomuladorA,
        totalB = impuestoB * acomuladorB,
        totalC = impuestoC * acomuladorC;

    let alert1 = document.getElementById('divAlert1');
    alert1.innerText = `Clase A --- $${ impuestoA } \n Clase B --- $${ impuestoB } \n Clase C --- $${ impuestoC }`;

    let alert2 = document.getElementById('divAlert2');
    alert2.innerText = `Total Clase A --- $${totalA} \n Total Clase B --- $${totalB} \n Total Clase C --- $${totalC}`;

    let alert3 = document.getElementById('divAlert3');
    alert3.innerText = `Total de inpuestos $${totalA + totalB + totalC}`;
}

crearDom();
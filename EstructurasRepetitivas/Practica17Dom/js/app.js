let button, alertAnual, alertJulio, alertProd;
const output = document.getElementById('output');

function crearDom() {

    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = 'Numero de Fabricas';

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'inpFabricas');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnFabricas');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Generar Ventas';

    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(button);

    eventListener();

}

function eventListener() {
    button = document.getElementById('btnFabricas');
    button.addEventListener('click', calcularVentas);
}

function calcularVentas() {
    const noFabricas = Number(document.getElementById('inpFabricas').value);
    let fabrica;
    for (let x = 1; x <= noFabricas; x++) {
        fabrica = document.createElement('h3');
        fabrica.innerText = `Fabrica ${x}`;
        output.appendChild(fabrica);
        for (y = 1; y <= 12; y++) {
            const divMes = document.createElement('div');
            divMes.setAttribute('class', 'form-group');

            const labelMes = document.createElement('label');
            labelMes.innerText = `Ingreso Mes ${y}`;

            const inputIngreso = document.createElement('input');
            inputIngreso.setAttribute('type', 'number');
            inputIngreso.setAttribute('class', 'form-control');
            inputIngreso.setAttribute('id', `inpIngreso${x}${y}`);

            output.appendChild(divMes);
            divMes.appendChild(labelMes);
            divMes.appendChild(inputIngreso);
        }
    }

    const buttonCalcular = document.createElement('button');
    buttonCalcular.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    buttonCalcular.setAttribute('id', 'btnCalcular');
    buttonCalcular.innerText = 'Generar Estadisticas';
    output.appendChild(buttonCalcular);

    evntListener();
}

function evntListener() {
    button = document.getElementById('btnCalcular');
    button.addEventListener('click', realizarCalculos);
}

function realizarCalculos() {
    let gananciaFabricas = '',
        gananciaJul = 0;
    let gananciaMayor = 0,
        codigoGanancia;
    const noFab = Number(document.getElementById('inpFabricas').value);

    for (let a = 1; a <= noFab; a++) {
        let gananciaEmpresa = 0,
            gananciaJulio = 0;
        for (let b = 1; b <= 12; b++) {
            let inpGanancia = Number(document.getElementById(`inpIngreso${a}${b}`).value);
            gananciaEmpresa = inpGanancia + gananciaEmpresa;
            if (b == 7) {
                gananciaJulio = inpGanancia;
            }
        }

        if (gananciaJulio > 3000000) {
            gananciaJul = gananciaJulio;
        }

        if (gananciaEmpresa > gananciaMayor) {
            gananciaMayor = gananciaEmpresa;
        }

        gananciaFabricas = gananciaFabricas + `Ganancia $${gananciaEmpresa} \n`;

    }

    alertAnual = document.createElement('div');
    alertAnual.setAttribute('class', 'alert alert-success');
    alertAnual.innerText = gananciaFabricas;

    alertProd = document.createElement('div');
    alertProd.setAttribute('class', 'alert alert-success');
    alertProd.innerText = `Total: ${gananciaMayor}`;

    alertJulio = document.createElement('div');
    alertJulio.setAttribute('class', 'alert alert-success');
    alertJulio.innerText = gananciaJul;

    output.appendChild(alertAnual);
    output.appendChild(alertProd);
    output.appendChild(alertJulio);
}

crearDom();
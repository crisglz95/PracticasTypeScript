//Forma no correcta para usar el for

// let resultado = 0;

// for (let valorInicial = 0; valorInicial < 5; valorInicial++) {
//     let NumeroIngresado = Number(prompt('Ingresa el numero'));
//     resultado = resultado + NumeroIngresado;
// }

// console.log(resultado);

// const ZonaImprimir = document.getElementById('output');
// ZonaImprimir.innerText = resultado;

let button; //Variable Global

function crearDom() {
    const output = document.getElementById('output');
    for (let x = 1; x <= 5; x++) {
        const div = document.createElement('div');
        div.classList.add('form-group');

        const label = document.createElement('label');
        label.innerText = `Ingresa el numero: ${x}`;

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `inpNo${x}`);

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
    }
    const button = document.createElement('button');
    button.setAttribute('id', 'btnCalcularSuma');
    button.setAttribute('class', 'btn btn-outline-success btn-block');
    button.innerText = 'Calcular Suma';
    output.appendChild(button);

    addEventListener();
}

function addEventListener() {
    button = document.getElementById('btnCalcularSuma');
    button.addEventListener('click', suma);
}

function suma() {
    let suma = 0;
    for (let x = 1; x <= 5; x++) {
        suma = suma + Number(document.getElementById(`inpNo${x}`).value);
    }
    console.log(suma);
}

crearDom();
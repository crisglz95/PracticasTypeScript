let ancho;
let altura;
// const costo = 25.50;
let costo;

let m2, costoTotal;

let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', calcular);

function calcular() {
    ancho = Number(document.getElementById('inAncho').value);
    altura = Number(document.getElementById('inAltura').value);

    m2 = ancho * altura;

    costo = Number(document.getElementById('inCosto').value);

    costoTotal = m2 * costo;

    let imprimirCosto = document.getElementById('imprimirCosto');
    imprimirCosto.innerText = 'm2: ' + m2 + ' Costo: $' + costoTotal;
}
const button = document.getElementById('btnVerificar');
button.addEventListener('click', calcularMultiplos);

function calcularMultiplos() {
    const num1 = Number(document.getElementById('inpNum1').value);
    const num2 = Number(document.getElementById('inpNum2').value);

    const divImprimir = document.getElementById('divImprimir');

    let zonePrint, residuo;

    if (num1 > num2) {
        residuo = num1 % num2;
        if (residuo == 0) {
            zonePrint = `<div class="alert alert-success mt-3">El ${num2} es multimplo de ${num1}</div>`;
        } else {
            zonePrint = `<div class="alert alert-danger mt-3">El ${num2} no es multimplo de ${num1}</div>`;
        }
    } else {
        residuo = num2 % num1;
        if (residuo == 0) {
            zonePrint = `<div class="alert alert-success mt-3">El ${num1} es multimplo de ${num2}</div>`;
        } else {
            zonePrint = `<div class="alert alert-danger mt-3">El ${num1} no es multimplo de ${num2}</div>`;
        }
    }

    divImprimir.innerHTML = zonePrint;
}
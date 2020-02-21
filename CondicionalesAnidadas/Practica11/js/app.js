const button = document.getElementById('btnVerificar');
button.addEventListener('click', verificaNumero);

function verificaNumero() {
    const largo = document.getElementById('inpNumber').value.length;
    const numero = Number(document.getElementById('inpNumber').value);
    const divImprimir = document.getElementById('divImprimir');
    let reverse = 0,
        zonePrint, falta,
        resto = 0;

    falta = numero;

    while (falta != 0) {
        resto = Math.floor(falta % 10);
        reverse = Math.floor(reverse * 10 + resto);
        falta = Math.floor(falta / 10);
    }

    if (largo == 3) {
        if (numero == reverse) {
            zonePrint = `<div class="alert alert-success mt-3">Son iguales</div>`;
        } else {
            zonePrint = `<div class="alert alert-success mt-3">Son diferentes</div>`;
        }
    } else {
        zonePrint = `<div class="alert alert-danger mt-3">No son 3 digitos</div>`;
    }

    divImprimir.innerHTML = zonePrint;
}
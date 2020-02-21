const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularNumero);

function calcularNumero() {
    const num1 = Number(document.getElementById('inpNum').value);
    const divImprimir = document.getElementById('divImprimir');

    let reverse = 0,
        falta,
        resto = 0,
        zonePrint;
    falta = num1;

    if (num1 >= 0 && num1 <= 9999) {
        while (falta != 0) {
            resto = Math.floor(falta % 10);
            reverse = Math.floor(reverse * 10 + resto);
            falta = Math.floor(falta / 10);
        }

        if (num1 == reverse) {
            zonePrint = `<div class="alert alert-succes mt-3">Numeros iguales</div>`;
        } else {
            zonePrint = `<div class="alert alert-danger mt-3">Numeros diferentes</div>`;
        }
    } else {
        zonePrint = `<div class="alert alert-danger mt-3">Numero fuera de rango</div>`;
    }

    divImprimir.innerHTML = zonePrint;
}
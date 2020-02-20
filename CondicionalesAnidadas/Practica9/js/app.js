const button = document.getElementById('btnOrdenar');
button.addEventListener('click', ordenarNumeros);

function ordenarNumeros() {
    const num1 = Number(document.getElementById('inpNum1').value);
    const num2 = Number(document.getElementById('inpNum2').value);
    const num3 = Number(document.getElementById('inpNum3').value);

    const divImprimir = document.getElementById('divAlert');

    if (num1 > num2) {
        if (num1 > num3) {
            if (num2 > num3) {
                let zonePrint = `<div class="alert alert-success mt-3">Orden: ${num1}, ${num2}, ${num3}</div>`;
                divImprimir.innerHTML = zonePrint;
            } else {
                let zonePrint = `<div class="alert alert-success mt-3">Orden: ${num1}, ${num3}, ${num2}</div>`;
                divImprimir.innerHTML = zonePrint;
            }
        } else {
            let zonePrint = `<div class="alert alert-success mt-3">Orden:  ${num3}, ${num1}, ${num2}</div>`;
            divImprimir.innerHTML = zonePrint;
        }
    } else {
        if (num2 > num3) {
            if (num1 > num3) {
                let zonePrint = `<div class="alert alert-success mt-3">Orden: ${num2}, ${num1}, ${num3}</div>`;
                divImprimir.innerHTML = zonePrint;
            } else {
                let zonePrint = `<div class="alert alert-success mt-3">Orden: ${num2}, ${num3}, ${num1}</div>`;
                divImprimir.innerHTML = zonePrint;
            }
        } else {
            let zonePrint = `<div class="alert alert-success mt-3">Orden: ${num3}, ${num2}, ${num1}</div>`;
            divImprimir.innerHTML = zonePrint;
        }
    }
}
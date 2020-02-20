const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularHoras);

function calcularHoras() {
    const horas = Number(document.getElementById('inpHoras').value);
    const printAlert = document.getElementById('imprimirAlerta');

    let restante, totalPagar, horasAux;

    if (horas < 3) {
        totalPagar = horas * 5;
        let divImprimir = `<div class="alert alert-success mt-3">Total a pagar: ${totalPagar}</div>`;
        printAlert.innerHTML = divImprimir;
    } else if (horas > 2 && horas < 6) {
        restante = horas - 2;
        totalPagar = ((horas - restante) * 5);
        totalPagar = (restante * 4) + totalPagar;
        let divImprimir = `<div class="alert alert-success mt-3">Total a pagar: ${totalPagar}</div>`;
        printAlert.innerHTML = divImprimir;
    } else if (horas > 5 && horas < 11) {
        restante = horas - 2;
        totalPagar = ((horas - restante) * 5);
        horasAux = restante;
        restante = restante - 3;
        totalPagar = ((horasAux - restante) * 4) + totalPagar;
        totalPagar = (restante * 3) + totalPagar;
        let divImprimir = `<div class="alert alert-success mt-3">Total a pagar: ${totalPagar}</div>`;
        printAlert.innerHTML = divImprimir;
    } else {
        restante = horas - 2;
        totalPagar = ((horas - restante) * 5);
        horasAux = restante;
        restante = restante - 3;
        totalPagar = ((horasAux - restante) * 4) + totalPagar;
        horasAux = restante;
        restante = restante - 5;
        totalPagar = ((horasAux - restante) * 3) + totalPagar;
        totalPagar = totalPagar + (restante * 2);
        let divImprimir = `<div class="alert alert-success mt-3">Total a pagar: ${totalPagar}</div>`;
        printAlert.innerHTML = divImprimir;
    }
}
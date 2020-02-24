const button = document.getElementById('btnBono');
button.addEventListener('click', calcularBono);

function calcularBono() {
    const tipoBono = document.getElementById('idBono').value;
    const divAlert = document.getElementById('divBono');
    const antiguedad = Number(document.getElementById('inpAntiguedad').value);
    const sueldo = Number(document.getElementById('inpSueldo').value);

    let zonePrint, bono;

    if (tipoBono == 'sueldo') {
        if (sueldo <= 1000) {
            bono = sueldo * .25;
        } else if (sueldo > 1000 && sueldo < 3500) {
            bono = sueldo * .15;
        } else {
            bono = sueldo * .10;
        }
    } else {
        if (antiguedad <= 5) {
            bono = sueldo * .20;
        } else {
            bono = sueldo * .30;
        }
    }

    zonePrint = `<div class="alert alert-success mt-3">El bono recibido es $${bono}</div>`;
    divAlert.innerHTML = zonePrint;
}
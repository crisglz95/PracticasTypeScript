const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularProm);

function calcularProm() {
    const cal1 = Number(document.getElementById('inpCal1').value);
    const cal2 = Number(document.getElementById('inpCal2').value);
    const cal3 = Number(document.getElementById('inpCal3').value);

    let prom = (cal1 + cal2 + cal3) / 3;;

    const ZonePrint = document.getElementById('ZonePrint');

    if (prom >= 9) {
        let divImprimir = `<div class="alert alert-success mt-3"><p>El alumno a aprobado.</p></div>`;
        ZonePrint.innerHTML = divImprimir;
    } else if (prom >= 6 && prom < 9) {
        let divImprimir = `<div class="alert alert-warning mt-3"><p> El alumno es regular.</p></div>`;
        ZonePrint.innerHTML = divImprimir;
    } else {
        let divImprimir = `<div class="alert alert-danger mt-3"><p> El alumno a reprobado.</p></div>`;
        ZonePrint.innerHTML = divImprimir;
    }
}
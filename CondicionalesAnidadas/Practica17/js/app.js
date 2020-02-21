const button = document.getElementById('btnCalcular');
button.addEventListener('click', calculaCalificacion);

function calculaCalificacion() {
    const num = Number(document.getElementById('inpCalificacion').value);

    const divAlert = document.getElementById('divAlert');

    let zonePrint;

    if (num >= 0 && num <= 10) {
        if (num <= 5) {
            zonePrint = `<div class="alert alert-danger mt-3">F</div>`;
        } else if (num <= 7) {
            zonePrint = `<div class="alert alert-success mt-3">D</div>`;
        } else if (num == 8) {
            zonePrint = `<div class="alert alert-success mt-3">C</div>`;
        } else if (num == 9) {
            zonePrint = `<div class="alert alert-success mt-3">B</div>`;
        } else {
            zonePrint = `<div class="alert alert-success mt-3">A</div>`;
        }
    } else {
        zonePrint = `<div class="alert alert-danger mt-3">Calificacion Erronea</div>`;
    }

    divAlert.innerHTML = zonePrint;
}
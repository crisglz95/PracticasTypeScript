const button = document.getElementById('btnRegalo');
button.addEventListener('click', calcularRegalo);

function calcularRegalo() {
    const presupuesto = Number(document.getElementById('inpPresupuesto').value);
    const divAlert = document.getElementById('divAlert');

    let zonePrint;

    if (presupuesto <= 10) {
        zonePrint = `<div class="alert alert-success mt-3">Tarjeta</div>`;
    } else if (presupuesto >= 11 && presupuesto <= 100) {
        zonePrint = `<div class="alert alert-success mt-3">Chocolates</div>`;
    } else if (presupuesto >= 101 && presupuesto <= 250) {
        zonePrint = `<div class="alert alert-success mt-3">Flores</div>`;
    } else {
        zonePrint = `<div class="alert alert-success mt-3">Anillo</div>`;
    }

    divAlert.innerHTML = zonePrint;
}
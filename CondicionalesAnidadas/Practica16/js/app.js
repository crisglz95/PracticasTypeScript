const button = document.getElementById('btnDia');
button.addEventListener('click', obtenerDia);

function obtenerDia() {
    const valor = Number(document.getElementById('idNumero').value);
    const divAlert = document.getElementById('divAlert');

    let zonePrint;

    if (valor == 1) {
        zonePrint = `<div class="alert alert-success mt-3">Lunes</div>`;
    } else if (valor == 2) {
        zonePrint = `<div class="alert alert-success mt-3">Martes</div>`;
    } else if (valor == 3) {
        zonePrint = `<div class="alert alert-success mt-3">Miercoles</div>`;
    } else if (valor == 4) {
        zonePrint = `<div class="alert alert-success mt-3">Jueves</div>`;
    } else if (valor == 5) {
        zonePrint = `<div class="alert alert-success mt-3">Viernes</div>`;
    } else if (valor == 6) {
        zonePrint = `<div class="alert alert-success mt-3">Sabado</div>`;
    } else {
        zonePrint = `<div class="alert alert-success mt-3">Domingo</div>`;
    }

    divAlert.innerHTML = zonePrint;
}
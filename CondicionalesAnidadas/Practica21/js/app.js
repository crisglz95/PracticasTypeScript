const button = document.getElementById('btnCosto');
button.addEventListener('click', calcularEnvio);

function calcularEnvio() {
    const costoUbicacion = Number(document.getElementById('idUbicacion').value);
    const peso = Number(document.getElementById('inpPeso').value);
    const divAlert = document.getElementById('divAlert');

    let zonePrint, gramos, costoTotal;

    if (peso <= 5) {
        gramos = peso * 1000;
        costoTotal = gramos * costoUbicacion;
        zonePrint = `<div class="alert alert-success mt-3">El total seria de $${costoTotal}.</div>`;
    } else {
        zonePrint = `<div class="alert alert-danger mt-3">Tu paquete no puede ser enviado.</div>`;
    }

    divAlert.innerHTML = zonePrint;
}
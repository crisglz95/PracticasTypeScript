const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularCosto);

function calcularCosto() {
    const costoKM = Number(document.getElementById('idClaves').value);
    const kmRecorridos = Number(document.getElementById('kmRecorridos').value);
    const noPersonas = Number(document.getElementById('inpPersonas').value);

    const ZonePrint = document.getElementById('zonePrint');
    let costoTotal, costoPersona;

    if (noPersonas > 20) {
        costoTotal = costoKM * kmRecorridos * noPersonas;
        costoPersona = costoTotal / noPersonas;
        let divImprimir = `<div class="alert alert-success mt-3">El costo total es de $${costoTotal}. El costo por persona es $${costoPersona}</div>`;
        ZonePrint.innerHTML = divImprimir;
    } else {
        costoTotal = costoKM * kmRecorridos * 20;
        costoPersona = costoTotal / noPersonas;
        let divImprimir = `<div class="alert alert-success mt-3">El costo total es de $${costoTotal}. El costo por persona es $${costoPersona}</div>`;
        ZonePrint.innerHTML = divImprimir;
    }
}
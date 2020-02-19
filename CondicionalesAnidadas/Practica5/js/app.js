const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    const costo = Number(document.getElementById('inpCosto').value);
    const ZonePrint = document.getElementById('ZonePrint');
    let descuento;

    if (costo > 3600) {
        descuento = costo * .16;
        let divImprimir = `<div class="alert alert-success mt-3">El costo es de $${costo - descuento}. El descuento es $${descuento}</div>`;
        ZonePrint.innerHTML = divImprimir;
    } else {
        descuento = costo * .07;
        let divImprimir = `<div class="alert alert-success mt-3">El costo es de $${costo - descuento}. El descuento es $${descuento}</div>`;
        ZonePrint.innerHTML = divImprimir;
    }
}
const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularPresupuesto);

function calcularPresupuesto() {
    const noPersonas = Number(document.getElementById('inpPersonas').value);
    let costo;
    const ZonePrint = document.getElementById('ZonePrint');

    if (noPersonas > 200 && noPersonas <= 300) {
        costo = 85;
        let divImprimir = `<div class="alert alert-success mt-3">El presupuesto es $${costo * noPersonas}.</div>`;
        ZonePrint.innerHTML = divImprimir;
    } else if (noPersonas > 300) {
        costo = 75;
        let divImprimir = `<div class="alert alert-success mt-3">El presupuesto es $${costo * noPersonas}.</div>`;
        ZonePrint.innerHTML = divImprimir;
    } else {
        costo = 95;
        let divImprimir = `<div class="alert alert-success mt-3">El presupuesto es $${costo * noPersonas}.</div>`;
        ZonePrint.innerHTML = divImprimir;
    }
}
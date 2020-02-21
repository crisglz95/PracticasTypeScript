const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularUvas);

function calcularUvas() {
    const tipo = document.getElementById('idTipo').value;
    const tamano = Number(document.getElementById('idTamano').value);
    const costo = Number(document.getElementById('inpCosto').value);
    const vendidos = Number(document.getElementById('inpVendidos').value);

    const divImprimir = document.getElementById('divAlert');

    let zonePrint, costoFinal;

    if (tipo == 'A') {
        if (tamano == 1) {
            costoFinal = costo + .20;
            zonePrint = `<div class="alert alert-success mt-3">Costo Final por KG: $${costoFinal}. Venta Total ${costoFinal * vendidos}</div>`;
        } else {
            costoFinal = costo + .30;
            zonePrint = `<div class="alert alert-success mt-3">Costo Final por KG: $${costoFinal}. Venta Total ${costoFinal * vendidos}</div>`;
        }
    } else {
        if (tamano == 1) {
            costoFinal = costo + .30;
            zonePrint = `<div class="alert alert-success mt-3">Costo Final por KG: $${costoFinal}. Venta Total ${costoFinal * vendidos}</div>`;
        } else {
            costoFinal = costo + .50;
            zonePrint = `<div class="alert alert-success mt-3">Costo Final por KG: $${costoFinal}. Venta Total ${costoFinal * vendidos}</div>`;
        }
    }


    divImprimir.innerHTML = zonePrint;
}
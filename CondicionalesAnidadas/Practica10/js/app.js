const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularPresupuesto);

function calcularPresupuesto() {
    const presupuesto = Number(document.getElementById('inpPresupuesto').value);
    const articulo1 = Number(document.getElementById('inpArt1').value);
    const articulo2 = Number(document.getElementById('inpArt2').value);
    const articulo3 = Number(document.getElementById('inpArt3').value);
    const articulo4 = Number(document.getElementById('inpArt4').value);

    const divImprimir = document.getElementById('alertDiv');

    let sumaArticulos = articulo1 + articulo2 + articulo3 + articulo4;
    let zonePrint;

    if (sumaArticulos > presupuesto) {
        zonePrint = `<div class="alert alert-danger mt-3">Precio Fuera del Presupuesto</div>`;
    } else {
        zonePrint = `<div class="alert alert-success mt-3">Precio dentro del presupuesto</div>`;
    }

    divImprimir.innerHTML = zonePrint;

}
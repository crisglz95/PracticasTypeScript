const button = document.getElementById('btnCalcular');
button.addEventListener('click', calculaPromedio);

function calculaPromedio() {
    const practica1 = Number(document.getElementById('inpPractica1').value);
    const practica2 = Number(document.getElementById('inpPractica2').value);
    const practica3 = Number(document.getElementById('inpPractica3').value);
    const practica4 = Number(document.getElementById('inpPractica4').value);

    const divImprimir = document.getElementById('imprimePromedio');

    let zonePrint, promedio;

    if (practica1 < practica2) {
        if (practica1 < practica3) {
            if (practica1 < practica4) {
                promedio = (practica2 + practica3 + practica4) / 3;
                zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 1. Promedio ${promedio}</div>`;
            } else {
                promedio = (practica2 + practica3 + practica1) / 3;
                zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 4. Promedio ${promedio}</div>`;
            }
        } else if (practica3 < practica4) {
            promedio = (practica2 + practica4 + practica1) / 3;
            zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 3. Promedio ${promedio}</div>`;
        } else {
            promedio = (practica2 + practica3 + practica1) / 3;
            zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 4. Promedio ${promedio}</div>`;
        }
    } else if (practica2 < practica3) {
        if (practica2 < practica4) {
            promedio = (practica4 + practica3 + practica1) / 3;
            zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 2. Promedio ${promedio}</div>`;
        } else {
            promedio = (practica2 + practica3 + practica1) / 3;
            zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 4. Promedio ${promedio}</div>`;
        }
    } else {
        if (practica3 < practica4) {
            promedio = (practica2 + practica4 + practica1) / 3;
            zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 3. Promedio ${promedio}</div>`;
        } else {
            promedio = (practica2 + practica3 + practica1) / 3;
            zonePrint = `<div class="alert alert-success mt-3">Nota Eliminada 4. Promedio ${promedio}</div>`;
        }
    }

    divImprimir.innerHTML = zonePrint;
}
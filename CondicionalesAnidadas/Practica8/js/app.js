const button = document.getElementById('btnCalcula');
button.addEventListener('click', calculaCosto);

function calculaCosto() {
    const costoKm = Number(document.getElementById('inpCosto').value);
    const claveKm = Number(document.getElementById('selDestino').value);
    const divAlert = document.getElementById('divImprimir');

    let costoVacaciones;

    costoVacaciones = (costoKm * claveKm) * 2;

    console.log(costoVacaciones);

    let divImprimir = `<div class="alert alert-success mt-3">Total a pagar: ${costoVacaciones}</div>`;
    divAlert.innerHTML = divImprimir;

}
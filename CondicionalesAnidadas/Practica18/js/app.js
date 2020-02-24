const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularSeguro);

function calcularSeguro() {
    const costoSeguro = Number(document.getElementById('idPoliza').value);
    const edad = Number(document.getElementById('inpEdad').value);
    const alcohol = document.getElementById('cbxAlcohol');
    const lentes = document.getElementById('cbxLentes');
    const enfermedad = document.getElementById('cbxEnfermedad');
    const divPrint = document.getElementById('divAlert');

    let costoTotal = costoSeguro,
        zonePrint;

    if (edad > 40) {
        costoTotal = costoTotal + (costoSeguro * .2);
    } else {
        costoTotal = costoTotal + (costoSeguro * .1);
    }
    if (alcohol.checked) {
        costoTotal = costoTotal + (costoSeguro * Number(alcohol.value));
    }
    if (lentes.checked) {
        costoTotal = costoTotal + (costoSeguro * Number(lentes.value));
    }
    if (enfermedad.checked) {
        costoTotal = costoTotal + (costoSeguro * Number(enfermedad.value));
    }

    zonePrint = `<div class="alert alert-success mt-3">El costo total es $${costoTotal}</div>`;
    divPrint.innerHTML = zonePrint;
}
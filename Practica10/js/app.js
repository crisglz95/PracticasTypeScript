let usados, costo, gasto;

let btnCalcular = document.getElementById('calcularCosto');
btnCalcular.addEventListener('click', generarGasto);

function generarGasto() {
    usados = Number(document.getElementById('inUsados').value);
    costo = Number(document.getElementById('inCosto').value);

    gasto = costo * usados;

    let mostrarCosto = document.getElementById('mostrarCosto');
    mostrarCosto.innerText = 'Costo total: ' + gasto;
}
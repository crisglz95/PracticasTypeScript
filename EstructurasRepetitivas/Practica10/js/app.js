eventListener();

function eventListener() {
    const button = document.getElementById('btnComenzar');
    button.addEventListener('click', calcularVentas);
}

function calcularVentas() {
    const ventasDiarias = Number(prompt('Numero de Ventas del Dia'));
    let totalVentas = 0,
        totalCatA = 0,
        totalCatB = 0,
        totalCatC = 0,
        contA = 0,
        contB = 0,
        contC = 0;

    for (let x = 0; x < ventasDiarias; x++) {
        let venta = Number(prompt(`Cantidad Venta ${x+1}`));
        if (venta > 1000) {
            totalCatA = totalCatA + venta;
            contA++;
        } else if (venta < 1000 && venta > 500) {
            totalCatB = totalCatB + venta;
            contB++;
        } else {
            totalCatC = totalCatC + venta;
            contC++;
        }
        totalVentas = totalVentas + venta;
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = `Total Ventas: $${totalVentas}, # de Ventas > 1000: ${contA} - Total: $${totalCatA}, # de Ventas > 500 y < 1000: ${contB} - Total: $${totalCatB}, # de Ventas < = 500: ${contC} - Total: $${totalCatC},`;
}
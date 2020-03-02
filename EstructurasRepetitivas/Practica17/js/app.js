eventListener();

function eventListener() {
    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', calcularGanancia);
}

function calcularGanancia() {
    let fabricas = Number(prompt('Ingresa numero de fabricas evaluadas: '));
    let gananciaFabricas = '',
        gananciaJul = '';
    let gananciaMayor = 0,
        codigoGanancia;
    for (let a = 1; a <= fabricas; a++) {
        let codigoEmpresa = prompt(`Codigo empresa #${a}`);
        let gananciaEmpresa = 0,
            gananciaJulio = 0;
        for (let b = 1; b <= 12; b++) {
            let gananciaMensual = Number(prompt(`Ganancia empresa ${a} en el mes #${b}`));
            gananciaEmpresa = gananciaEmpresa + gananciaMensual;
            if (b == 7) {
                gananciaJulio = gananciaMensual;
            }
        }

        if (gananciaJulio > 3000000) {
            gananciaJul = gananciaJul + `Codigo ${codigoEmpresa} \n`;
        }

        if (gananciaEmpresa > gananciaMayor) {
            gananciaMayor = gananciaEmpresa;
            codigoGanancia = codigoEmpresa;
        }

        gananciaFabricas = gananciaFabricas + `Codigo ${codigoEmpresa} --- Ganancia $${gananciaEmpresa} \n`;

    }

    const imprimirTotal = document.getElementById('totalAnual');
    imprimirTotal.innerText = gananciaFabricas;

    const imprimirMayor = document.getElementById('mayorProduccion');
    imprimirMayor.innerText = `Empresa Mayor Ganancia ${codigoGanancia} --- Total: ${gananciaMayor}`;

    const imprimirJulio = document.getElementById('mayorJulio');
    imprimirJulio.innerText = gananciaJul;

}
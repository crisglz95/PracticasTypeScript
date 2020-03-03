eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', calcularAhorro);
}

function calcularAhorro() {
    let dias = 365;
    let centavos = .03;
    let acomulados = 0;
    const zonaImprimir = document.getElementById('divAlert');
    let mensaje = '';

    for (let i = 1; i < dias; i++) {
        acomulados = acomulados + centavos;
        console.log(centavos);
        centavos = centavos * 3;
        mensaje = mensaje + `El ahorro el dia ${i} es de $${acomulados} \n`;
    }

    zonaImprimir.innerText = mensaje;
}
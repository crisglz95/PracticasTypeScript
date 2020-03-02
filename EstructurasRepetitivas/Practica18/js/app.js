eventListener();

function eventListener() {
    const button = document.getElementById('btnPerfectos');
    button.addEventListener('click', generarPerfectos);
}

function generarPerfectos() {
    const numeroLimite = Number(prompt('Numero limite: '));
    let noPerfectos = '';

    for (let a = 2; a <= numeroLimite; a++) {
        let sumaAux = 0;
        for (b = 1; b < a; b++) {
            if (a % b == 0) {
                sumaAux = sumaAux + b;
            }
        }
        if (a == sumaAux) {
            noPerfectos = noPerfectos + `${sumaAux} `;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = noPerfectos;
}
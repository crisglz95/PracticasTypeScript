eventListener();

function eventListener() {
    const button = document.getElementById('btnULAM');
    button.addEventListener('click', generarULAM);
}

function generarULAM() {
    const numero = Number(prompt('Ingresa un numero positivo'));
    let serie = '';
    let auxNum = numero;

    serie = serie + `${auxNum} `;

    while (auxNum != 1) {
        if (auxNum % 2 == 0) {
            auxNum = auxNum / 2;
            serie = serie + `${auxNum} `;
        } else {
            auxNum = (auxNum * 3) + 1;
            serie = serie + `${auxNum} `;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = serie;
}
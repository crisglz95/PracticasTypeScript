eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', generarSerie);
}

function generarSerie() {
    let serie = '',
        impares = 0,
        pares = 0;

    for (let i = 200; i <= 400; i++) {
        if (i % 2 == 0) {
            pares = pares + i;
        } else {
            impares = impares + i;
        }
    }

    const divAlert = document.getElementById('divAlert');
    divAlert.innerText = `Suma Pares: ${pares} \n Suma Impares: ${impares}`;
}
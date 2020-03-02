eventListener();

function eventListener() {
    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', generaSerie);
}

function generaSerie() {
    const numero = Number(prompt('Ingresa un numero'));
    let serie = '';

    for (let a = 1; a <= numero; a++) {
        let aux = 0;
        for (let b = 1; b <= numero; b++) {
            if (a % b == 0) {
                aux++;
            }
        }
        if (aux == 2) {
            serie = serie + ` ${a},`;
        }
    }

    const imprimirZona = document.getElementById('divAlert');
    imprimirZona.innerText = serie;
}
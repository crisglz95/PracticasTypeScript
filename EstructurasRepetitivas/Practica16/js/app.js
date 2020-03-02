eventListener();

function eventListener() {
    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', generaSerie);
}

function generaSerie() {
    const numero = Number(prompt('Ingresa un numero'));
    let serie = '';
    console.time('Inicio');
    for (let a = 1; a <= numero; a++) {
        let bandera = true;
        for (let b = 2; b < a; b++) {
            if (a % b == 0) {
                bandera = false;
                break;
            }
        }
        if (bandera) {
            serie = serie + ` ${a},`;
        }
    }
    console.timeEnd('Inicio');

    const imprimirZona = document.getElementById('divAlert');
    imprimirZona.innerText = serie;
}
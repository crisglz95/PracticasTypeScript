eventListener();

function eventListener() {
    const button = document.getElementById('btnNumeros');
    button.addEventListener('click', pedirNumeros);
}

function pedirNumeros() {
    let par = 0,
        impar = 0,
        contador = 0;
    for (let i = 0; i < 30; i++) {
        let numero = Number(prompt('Ingresa un numero'));
        if (numero % 2 == 0) {
            par = par + numero;
            contador++;
        } else {
            impar = impar + numero;
        }

        const zonePrint = document.getElementById('divTotales');
        zonePrint.innerText = `Par: ${par / contador} \n Suma de Impar: ${impar}`;

    }
}
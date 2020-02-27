eventListener();

function eventListener() {
    const button = document.getElementById('btnNumeros');
    button.addEventListener('click', contarNumeros);
}

function contarNumeros() {
    const cantidades = Number(prompt('Cantidad de numeros a evaluar'));
    let mayores = 0,
        menorIgual = 0;

    for (let x = 0; x < cantidades; x++) {
        let numeroIngresado = Number(prompt('Ingresa numero: '));
        if (numeroIngresado <= 0) {
            menorIgual++;
        } else {
            mayores++;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = `Existen ${menorIgual} numeros menores o iguales a 0 y ${mayores} numeros mayores a 0`;
}
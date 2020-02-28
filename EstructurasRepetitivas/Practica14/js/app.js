eventListener();

function eventListener() {
    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', calcularNumero);
}

function calcularNumero() {
    let num1 = 0,
        num2 = 1,
        aux = 0,
        contador = 2,
        validar = true;
    const numeroSerie = Number(prompt('Ingresa Numero'));
    const zonaImprimir = document.getElementById('divAlert');

    if (numeroSerie == 0) {
        zonaImprimir.innerText = `El numero correspondiente es ${num1}`;
    } else {
        while (validar) {
            aux = num1 + num2;
            num1 = num2;
            num2 = aux;

            if ((numeroSerie < aux && numeroSerie > num1)) {
                validar = false;
                zonaImprimir.innerText = `El numero correspondiente es ${num1}`;
            } else if (numeroSerie == aux) {
                validar = false;
                zonaImprimir.innerText = `El numero correspondiente es ${aux}`;
            }
        }
    }

}
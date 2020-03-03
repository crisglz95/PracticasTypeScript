eventListener();

function eventListener() {
    const button = document.getElementById('btnNumero');
    button.addEventListener('click', generarCalculos);
}

function generarCalculos() {
    const numeros = Number(prompt('Cuantos numeros a evaluar'));
    let mayorCero = 0,
        positivos = 0,
        todos = 0;

    for (let i = 1; i <= numeros; i++) {
        let numero = Number(prompt('Ingresa numero'));
        if (numero > 1) {
            mayorCero++;
            positivos = positivos + numero;
        }
        todos = todos + numero;
    }

    const zonePrint = document.getElementById('divAlert');
    zonePrint.innerText = `Numeros mayores de 0: ${mayorCero} \n Promedio positivo: ${positivos / mayorCero} \n Promedio todos los numeros: ${todos / numeros}`

}
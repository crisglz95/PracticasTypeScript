const button = document.getElementById('btnVerifica');
button.addEventListener('click', verificaNumero);

function verificaNumero() {
    const numero = Number(document.getElementById('inpNumber').value);
    const divAlert = document.getElementById('alertVerifica');

    if (numero > 0 && numero < 10) {
        divAlert.innerText = 'El numero tiene un digito';
    } else if (numero > 9 && numero < 100) {
        divAlert.innerText = 'El numero tiene dos digitos';
    } else if (numero > 99 && numero < 1000) {
        divAlert.innerText = 'El numero tiene tres digitos';
    } else {
        divAlert.innerText = 'Error';
    }
}
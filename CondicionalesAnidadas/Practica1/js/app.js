const button = document.getElementById('btnMayor');
button.addEventListener('click', compararNumero);

function compararNumero() {
    const numero1 = Number(document.getElementById('inpNum1').value);
    const numero2 = Number(document.getElementById('inpNum2').value);
    const numero3 = Number(document.getElementById('inpNum3').value);

    const DivAlert = document.getElementById('divMayor');

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            DivAlert.innerText = `El numero mayor es ${numero1}`;
        } else {
            DivAlert.innerText = `El numero mayor es ${numero3}`;
        }
    } else if (numero2 > numero3) {
        DivAlert.innerText = `El numero mayor es ${numero2}`;
    } else {
        DivAlert.innerText = `El numero mayor es ${numero3}`;
    }
}
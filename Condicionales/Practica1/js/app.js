const button = document.getElementById('btnComparar');
button.addEventListener('click', compararNumeros);

function compararNumeros() {
    let Numero1 = Number(document.getElementById('inpNumero1').value);
    let Numero2 = Number(document.getElementById('inpNumero2').value);

    const DivAlert = document.getElementById('alertResultado');

    if (Numero1 > Numero2) {
        DivAlert.innerHTML = 'Numero A es mayor';
    } else {
        DivAlert.innerHTML = 'Numero B es mayor';
    }
}
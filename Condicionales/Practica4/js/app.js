const button = document.getElementById('btnDescuento');
button.addEventListener('click', calculaDescuento);

function calculaDescuento() {
    const compra = Number(document.getElementById('inpCantidad').value);
    const DivAlert = document.getElementById('alertDescuento');

    if (compra > 1000) {
        let descuento = compra * .2;
        DivAlert.innerText = 'Total: ' + (compra - descuento);
    } else {
        DivAlert.innerText = 'Total: ' + compra;
    }


}
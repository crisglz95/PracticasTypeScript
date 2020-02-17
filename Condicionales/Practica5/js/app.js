const button = document.getElementById('btnDescuento');
button.addEventListener('click', calculaDescuento);

function calculaDescuento() {
    const articulo = document.getElementById('inpArticulo').value;
    const clave = document.getElementById('idClaves').value;
    const precio = Number(document.getElementById('inpPrecio').value);

    const DivAlert = document.getElementById('alertArticulo');

    let precioDescuento;

    if (clave == '01') {
        precioDescuento = precio * .9;
        DivAlert.innerText = 'Codigo: ' + clave + ' Articulo: ' + articulo + ' Precio normal: $' + precio + ' Precio Descuento: $' + precioDescuento;
    } else {
        precioDescuento = precio * .8;
        DivAlert.innerText = 'Codigo: ' + clave + ' Articulo: ' + articulo + ' Precio normal: $' + precio + ' Precio Descuento: $' + precioDescuento;
    }
}
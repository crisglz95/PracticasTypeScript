let dias, hotel, comida, cheque;
const efectivo = 100;

let btnViaticos = document.getElementById('calcularViaticos');
btnViaticos.addEventListener('click', calcularViaticos);

function calcularViaticos() {
    dias = parseInt(document.getElementById('inDias').value);
    hotel = Number(document.getElementById('inHotel').value);
    comida = Number(document.getElementById('inComida').value);

    //cheque = (hotel * dias) + (comida * dias) + (dias * efectivo);
    cheque = dias * (hotel + comida + efectivo);

    let mostrarCheque = document.getElementById('mostrarCheque');
    mostrarCheque.innerText = 'La cantidad del cheque es: $' + cheque;
}
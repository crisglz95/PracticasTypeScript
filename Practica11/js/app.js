let metros, pulgadas;

const pulEnMet = 39.37;

let btnCalcular = document.getElementById('calcularPulgadas');
btnCalcular.addEventListener('click', calPulgadas);

function calPulgadas() {
    metros = Number(document.getElementById('inMetros').value);
    pulgadas = metros * pulEnMet;

    let mostrarResultado = document.getElementById('mostrarPulgadas');
    mostrarResultado.innerText = 'Pulgadas: ' + pulgadas;
}
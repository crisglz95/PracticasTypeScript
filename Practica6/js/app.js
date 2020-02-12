let velocidad, tiempo, distancia;

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);

function calcular() {
    velocidad = Number(document.getElementById('inVelocidad').value);
    tiempo = Number(document.getElementById('inTiempo').value);

    distancia = velocidad * tiempo;

    let imprimeDistancia = document.getElementById('imprimeDistancia');
    imprimeDistancia.innerText = 'Distancia ' + distancia + ' m';
}
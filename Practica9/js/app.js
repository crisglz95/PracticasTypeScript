let x1, x2, y1, y2, distancia;

let btnCalcular = document.getElementById('calcularDistancia');
btnCalcular.addEventListener('click', generarDistancia);

function generarDistancia() {
    x1 = Number(document.getElementById('inX1').value);
    x2 = Number(document.getElementById('inX2').value);
    y1 = Number(document.getElementById('inY1').value);
    y2 = Number(document.getElementById('inY2').value);

    console.log(x1, y1, x2, y2);

    distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    let mostrarDistancia = document.getElementById('mostrarDistancia');
    mostrarDistancia.innerText = 'Distancia: ' + distancia;
}
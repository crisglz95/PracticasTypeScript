let ladoA, ladoB, ladoC, semiperimetro, area;

let btnCalcular = document.getElementById('calcularArea');
btnCalcular.addEventListener('click', generaArea);

function generaArea() {
    ladoA = Number(document.getElementById('inLadoA').value);
    ladoB = Number(document.getElementById('inLadoB').value);
    ladoC = Number(document.getElementById('inLadoC').value);

    semiperimetro = (ladoA + ladoB + ladoC) / 2;

    area = Math.sqrt((semiperimetro * (semiperimetro - ladoA)) * (semiperimetro - ladoB) * (semiperimetro - ladoC));

    let mostarResultado = document.getElementById('mostrarResultado');
    mostarResultado.innerText = 'Semiperimetro ' + semiperimetro + ' Area: ' + area + ' u2';
}
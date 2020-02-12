let base, altura, area;

let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', calculaArea);

function calculaArea() {
    base = Number(document.getElementById('inBase').value);
    altura = Number(document.getElementById('inAltura').value);
    area = (base * altura) / 2;
    console.log(area);

    let imprimirArea = document.getElementById('imprimirArea');
    imprimirArea.innerText = 'Area: ' + area + ' u2';
}
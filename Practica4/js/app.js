let radio, area;
// const constantePi = 3.1416;

let btnArea = document.getElementById('btnCalcular');
btnArea.addEventListener('click', calArea);

function calArea() {
    radio = Number(document.getElementById('inRadio').value);
    //area = constantePi * (radio * radio);
    area = (Math.PI * Math.pow(radio, 2));
    let imprimeArea = document.getElementById('imprimeArea');
    imprimeArea.innerText = area + ' u2';
}
let mat1, mat2, mat3, mat4, mat5, promedio, matricula;

let btnCalcular = document.getElementById('btnCalcula');
btnCalcular.addEventListener('click', calcProm);

function calcProm() {
    matricula = document.getElementById('inMatricula').value;
    console.log(matricula);

    mat1 = Number(document.getElementById('inMat1').value);
    mat2 = Number(document.getElementById('inMat2').value);
    mat3 = Number(document.getElementById('inMat3').value);
    mat4 = Number(document.getElementById('inMat4').value);
    mat5 = Number(document.getElementById('inMat5').value);

    promedio = (mat1 + mat2 + mat3 + mat4 + mat5) / 5;

    let imprimir = document.getElementById('imprimeProm');
    imprimir.innerText = 'Matricula: ' + matricula + ' Prom: ' + promedio;

}
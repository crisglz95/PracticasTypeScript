const button = document.getElementById('btnAnalizar');
button.addEventListener('click', analizarTriangulo);

function analizarTriangulo() {
    const ladoMayor = Number(document.getElementById('inpLadoMayor').value);
    const ladoA = Number(document.getElementById('inpCatetoA').value);
    const ladoB = Number(document.getElementById('inpCatetoB').value);

    const DivAlert = document.getElementById('alertAnalisis');

    let sumaLados = ladoA + ladoB;

    if (ladoMayor >= sumaLados) {
        DivAlert.innerText = 'No se puede formar un triangulo';
    } else {
        if (ladoMayor == ladoA && ladoA == ladoB && ladoMayor == ladoB) {
            DivAlert.innerText = 'Triangulo Equilatero';
        } else if (ladoMayor != ladoA && ladoA != ladoB && ladoMayor != ladoB) {
            DivAlert.innerText = 'Triengulo Escaleno';
        } else {
            DivAlert.innerText = 'Triangulo Isoseles';
        }
    }
}
let cat1, cat2, hip;

let btnCalcular = document.getElementById('calcularHipotenusa');
btnCalcular.addEventListener('click', calHipotenusa);

function calHipotenusa() {
    cat1 = Number(document.getElementById('inCatetoA').value);
    cat2 = Number(document.getElementById('inCatetoB').value);
    hip = Math.sqrt(Math.pow(cat2, 2) + Math.pow(cat1, 2));

    let mostrarHipotenusa = document.getElementById('mostrarHipotenusa');
    mostrarHipotenusa.innerText = 'Hipotenusa: ' + hip;
}
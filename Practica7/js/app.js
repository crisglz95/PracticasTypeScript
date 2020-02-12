let correctas, incorrectas, resultado;

let btnCalcular = document.getElementById('generaResultado');
btnCalcular.addEventListener('click', resultados);

function resultados() {
    correctas = Number(document.getElementById('inCorrectas').value);
    incorrectas = Number(document.getElementById('inIncorrectas').value);

    correctas = correctas * 4;
    incorrectas = incorrectas * -1;

    resultado = correctas + incorrectas;

    let mostrarResultado = document.getElementById('mostrarResultado');
    mostrarResultado.innerText = 'Resultado: ' + resultado;

}
const button = document.getElementById('btnComparar');
button.addEventListener('click', calculaDiferencia);

function calculaDiferencia() {
    const edad1 = Number(document.getElementById('inpEdad1').value);
    const edad2 = Number(document.getElementById('inpEdad2').value);

    const DivAlert = document.getElementById('alertDiferencia');

    let diferencia;

    if (edad1 > edad2) {
        diferencia = edad1 - edad2;
        DivAlert.innerText = 'La edad mayor es: ' + edad1 + ' La diferencia es: ' + diferencia;
    } else {
        diferencia = edad2 - edad1;
        DivAlert.innerText = 'La edad mayor es: ' + edad2 + ' La diferencia es: ' + diferencia;
    }
}
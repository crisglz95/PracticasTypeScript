const button = document.getElementById('btnCalcular');
button.addEventListener('click', calculaIncentivos);

function calculaIncentivos() {
    const lunes = Number(document.getElementById('inpLunes').value);
    const martes = Number(document.getElementById('inpMartes').value);
    const miercoles = Number(document.getElementById('inpMiercoles').value);
    const jueves = Number(document.getElementById('inpJueves').value);
    const viernes = Number(document.getElementById('inpViernes').value);
    const sabado = Number(document.getElementById('inpSabado').value);

    const DivAlert = document.getElementById('alertIncentivos');

    let promedio = (lunes + martes + miercoles + jueves + viernes + sabado) / 6;

    if (promedio > 100) {
        DivAlert.innerText = 'Operario Recibira Incentivos. Promedio: ' + promedio;
    } else {
        DivAlert.innerText = 'Operario No Recibira Incentivos. Promedio: ' + promedio;
    }
}
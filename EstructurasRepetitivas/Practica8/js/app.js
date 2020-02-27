eventListener();

function eventListener() {
    const button = document.getElementById('btnSueldo');
    button.addEventListener('click', calcularSueldo);
}

function calcularSueldo() {
    const sueldo = Number(prompt('Sueldo por hora: '));
    let horasTrabajadas = 0;

    for (let x = 1; x <= 6; x++) {
        let horaDiaria = Number(prompt(`Horas trabajadas en el dia ${x}`));
        horasTrabajadas = horasTrabajadas + horaDiaria;
    }

    let pagoSemanal = horasTrabajadas * sueldo;

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = `Se trabajaron ${horasTrabajadas} horas, su pago de la semana es de $${pagoSemanal}`;
}
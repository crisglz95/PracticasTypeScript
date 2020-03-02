eventListener();

function eventListener() {
    const button = document.getElementById('btnIniciar');
    button.addEventListener('click', generarSueldo);
}

function generarSueldo() {
    let incremento = .10,
        sueldoNuevo = 1500,
        cadenaSueldos = '';

    for (let a = 1; a <= 6; a++) {
        sueldoNuevo = sueldoNuevo + (sueldoNuevo * incremento);
        cadenaSueldos = cadenaSueldos + `Sueldo en el año ${a} es de $${sueldoNuevo} \n`;
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = cadenaSueldos;

}
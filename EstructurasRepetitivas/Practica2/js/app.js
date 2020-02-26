eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarAplicacion);
}

function iniciarAplicacion() {
    let numeroAlumnos = Number(prompt('Ingresa el numero de alumnos: '));
    let sumaEdades = 0;
    let promedio = 0;
    for (let i = 1; i <= numeroAlumnos; i++) {
        let NumeroIngresado = Number(prompt(`Ingresa la edad del alumno ${i}: `));
        sumaEdades += NumeroIngresado;
    }
    promedio = sumaEdades / numeroAlumnos;

    const zonaImprimir = document.getElementById('ZonePrint');
    zonaImprimir.innerText = promedio;
}
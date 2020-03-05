eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', calcularPromedio);
}

function calcularPromedio() {
    let hombres = 0;
    let mujeres = 0;
    let promM = 0,
        promH = 0,
        promG = 0,
        mayor = '';

    for (let i = 1; i <= 20; i++) {
        let genero = prompt('Ingresa tu genero (M/F)');
        if (genero == 'F' || genero == 'f') {
            let cal = Number(prompt('Ingresa tu calificacion'));
            promM = promM + cal;
            mujeres++;
        } else {
            let cal = Number(prompt('Ingresa tu calificacion'));
            promH = promH + cal;
            hombres++;
        }
    }

    promM = promM / mujeres;
    promH = promH / hombres;
    promG = (promH + promM) / 20;

    if (promM > promH) {
        mayor = 'El promedio mayor fue de las mujeres';
    } else {
        mayor = 'El promedio mayor fue de los hombres';
    }

    const divAlert = document.getElementById('divAlert');
    divAlert.innerText = `El promedio general es ${promG} \n El promedio de las mujeres es ${promM} \n El promedio de los hombres es de ${promH} \n ${mayor}`;
}
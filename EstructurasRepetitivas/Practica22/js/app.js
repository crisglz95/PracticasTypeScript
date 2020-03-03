eventListener();

function eventListener() {
    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', calcularImpuestos);
}

function calcularImpuestos() {
    let noAutos = Number(prompt('Cuantos Automoviles tienes: '));
    let costoClaseA = Number(prompt('Costo clase A: '));
    let costoClaseB = Number(prompt('Costo clase B: '));
    let costoClaseC = Number(prompt('Costo clase C: '));
    let acomuladorA = 0,
        acomuladorB = 0,
        acomuladorC = 0;

    for (let a = 1; a <= noAutos; a++) {
        let claseAuto = prompt('Ingresa la clase del auto: A/B/C');
        if (claseAuto == 'a' || claseAuto == 'A') {
            acomuladorA++;
        } else if (claseAuto == 'b' || claseAuto == 'B') {
            acomuladorB++;
        } else if (claseAuto == 'c' || claseAuto == 'C') {
            acomuladorC++
        } else {
            a--;
        }
    }

    let inpuestoA = costoClaseA * .1,
        inpuestoB = costoClaseB * .07,
        inpuestoC = costoClaseC * .05;

    let totalA = inpuestoA * acomuladorA;
    let totalB = inpuestoB * acomuladorB;
    let totalC = inpuestoC * acomuladorC;

    const autoDiv = document.getElementById('divAuto');
    autoDiv.innerText = `Clase A --- $${ inpuestoA } \n Clase B --- $${ inpuestoB } \n Clase C --- $${ inpuestoC }`;

    const divCategoria = document.getElementById('divCategoria');
    divCategoria.innerText = `Total Clase A --- $${totalA} \n Total Clase B --- $${totalB} \n Total Clase C --- $${totalC}`;

    const divTotal = document.getElementById('divTotal');
    divTotal.innerText = `Total de inpuestos $${totalA + totalB + totalC}`;


}
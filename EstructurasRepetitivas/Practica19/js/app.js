eventListener();

function eventListener() {
    const button = document.getElementById('btnIniciar');
    button.addEventListener('click', iniciarAplicacion);
}

function iniciarAplicacion() {
    const noCiudades = Number(prompt('Cuantas ciudades de la republica:'));
    let totalCadena = 0,
        cadenaTienda = '',
        cadenaCiudad = '',
        cadenaCadena = '';
    const divTienda = document.getElementById('divTienda');
    const divCiudad = document.getElementById('divCiudad');
    const divCadena = document.getElementById('divCadena');
    for (let i = 1; i <= noCiudades; i++) {
        let totalCiudad = 0,
            totalTienda = 0;
        let noTiendas = Number(prompt(`Cuantas tiendas hay en la ciudad ${i}`));
        for (let j = 1; j <= noTiendas; j++) {
            let noEmpleados = Number(prompt(`Cuantos empleados hay en la Tienda ${j}`));
            for (let k = 1; k <= noEmpleados; k++) {
                let cantidadEmpleado = Number(prompt(`Cantidad registrada del Empleado ${k}`));
                totalTienda = totalTienda + cantidadEmpleado;
            }
            cadenaTienda = cadenaTienda + `Total de Tienda ${j} en ciudad ${i} --- $${totalTienda} \n`;
            totalCiudad = totalCiudad + totalTienda;
        }
        cadenaCiudad = cadenaCiudad + `Total de Ciudad ${i} --- $${totalCiudad} \n`;
        totalCadena = totalCadena + totalCiudad;
    }

    cadenaCadena = `Total de la cadena es $${totalCadena}`;

    divTienda.innerText = cadenaTienda;
    divCiudad.innerText = cadenaCiudad;
    divCadena.innerText = cadenaCadena;
}
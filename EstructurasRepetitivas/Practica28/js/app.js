eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', generarTabla);
}

function generarTabla() {
    let base = Number(prompt('Ingresa un numero entre 1 y 10'));
    const divAlert = document.getElementById('divAlert');
    let tabla = '';

    if (base > 0 && base < 11) {
        for (let i = 1; i <= 10; i++) {
            tabla = tabla + `${base} x ${i} = ${base * i} \n`;
        }
        divAlert.innerText = tabla;
    } else {
        divAlert.innerText = 'Numero no valido';
    }
}
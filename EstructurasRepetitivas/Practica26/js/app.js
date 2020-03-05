eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApp);
}

function initApp() {
    let suma = 0;

    while (suma < 100) {
        let num = Number(prompt('Ingresa un numero a sumar'));
        suma = suma + num;
    }

    const divAlert = document.getElementById('divAlert');
    divAlert.innerText = `El resultado de la suma es ${suma}`;
}
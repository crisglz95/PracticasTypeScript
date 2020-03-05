eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', factorial);
}

function factorial() {
    let numero = prompt('Ingresa un numero');
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    const alert = document.getElementById('divAlert');
    alert.innerText = `El factorial del numero ${numero} es ${factorial}`;
}
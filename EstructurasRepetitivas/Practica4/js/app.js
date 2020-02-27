EventListener();

function EventListener() {
    const button = document.getElementById('btnAhorros');
    button.addEventListener('click', initApplication);
}

function initApplication() {
    let acumulador = 0;
    const listGroup = document.getElementById('ListaAhorro');

    for (let x = 1; x <= 12; x++) {
        let saving = Number(prompt('Cual es tu ahorro del mes?'));
        acumulador += saving;
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El dinero ahorrado en el mes ${x} es: $${acumulador}`;
        listGroup.appendChild(li);
    }

    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item bg-danger');
    li.innerText = `El dinero ahorrado en el año es: $${acumulador}`;
    listGroup.appendChild(li);
}
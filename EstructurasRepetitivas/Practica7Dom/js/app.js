eventListener();

function eventListener() {
    const button = document.getElementById('btnSerie');
    button.addEventListener('click', generarSerie);
}

function generarSerie() {
    const output = document.getElementById('output');
    const alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success mt-3');
    for (let x = 0; x <= 100; x++) {
        if (x % 2 == 0) {
            alert.innerText = alert.innerText + `${x} `;
        }
    }

    output.appendChild(alert);
}
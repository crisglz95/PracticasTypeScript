EventListener();

function EventListener() {
    const button = document.getElementById('btnSerie');
    button.addEventListener('click', initApplication);
}

function initApplication() {
    const output = document.getElementById('output');
    const alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success mt-3');
    for (let x = 100; x >= 0; x--) {
        alert.innerText = alert.innerText + `${x} `
    }

    output.appendChild(alert);
}
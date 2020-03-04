let button, alert;

function crearDom() {
    const output = document.getElementById('output');

    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const divAlert = document.createElement('div');
    divAlert.setAttribute('class', 'alert alert-success mt-3');
    divAlert.setAttribute('id', 'divResultado');

    const button = document.createElement('button');
    button.setAttribute('id', 'btnComenzar');
    button.innerText = 'Comenzar Programa';
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3')

    output.appendChild(div);
    div.appendChild(button);
    div.appendChild(divAlert);

    eventListener();

}

function eventListener() {
    button = document.getElementById('btnComenzar');
    button.addEventListener('click', puntoEncuentro);
}

function puntoEncuentro() {
    let ags = 70,
        zac = 150;
    let mientras = true;
    while (mientras) {
        ags++;
        zac--;
        if (ags == zac) {
            mientras = false;
        }
    }

    alert = document.getElementById('divResultado');
    alert.innerText = `Se encontraron en el KM ${ags}`;
}

crearDom();
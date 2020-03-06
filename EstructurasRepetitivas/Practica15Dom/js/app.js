eventListener();

let contador = 0;
const output = document.getElementById('output');
let alert;

function eventListener() {
    const button = document.getElementById('btnAddInput');
    button.addEventListener('click', agregarElemento);
}

function agregarElemento() {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = 'Por quien es tu voto';

    const input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('type', 'number');
    input.setAttribute('id', `inpVoto${contador}`);

    const alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success');
    alert.setAttribute('id', 'divAlert');

    contador++;

    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);

}

listenerFinish();

function listenerFinish() {
    const button = document.getElementById('btnFinalizar');
    button.addEventListener('click', obtenerVotos);
}

function obtenerVotos() {
    let can1 = 0,
        can2 = 0,
        can3 = 0,
        can4 = 0,
        nulos = 0,
        numeroVotantes = 0;

    for (let a = 0; a < contador; a++) {
        let voto = Number(document.getElementById(`inpVoto${a}`).value);
        if (voto == 1) {
            can1++;
        } else if (voto == 2) {
            can2++;
        } else if (voto == 3) {
            can3++;
        } else if (voto == 4) {
            can4++;
        } else {
            nulos++;
        }
        numeroVotantes++;
    }

    alert = document.getElementById('divAlert');
    alert.innerText = `Candidato 1 - ${can1} votos - ${(can1 / numeroVotantes)*100}%; \nCandidato 2 - ${can2} votos - ${(can2 / numeroVotantes)*100}%; \nCandidato 3 - ${can3} votos - ${(can3 / numeroVotantes)*100}%; \nCandidato 4 - ${can4} votos - ${(can4 / numeroVotantes)*100}%;`

}
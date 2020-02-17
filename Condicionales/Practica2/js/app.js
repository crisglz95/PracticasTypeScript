const button = document.getElementById('btnVerificar');
button.addEventListener('click', verificarCalificacion);

function verificarCalificacion() {
    const calificacion = Number(document.getElementById('inpCalificacion').value);

    const DivAlert = document.getElementById('alertVerificacion');

    if (calificacion > 8) {
        DivAlert.innerText = 'Aprobado';
    } else {
        DivAlert.innerText = 'Reprobado';
        const AudioDonRamon = document.getElementById('audioReprobado');
        AudioDonRamon.play();
    }
}
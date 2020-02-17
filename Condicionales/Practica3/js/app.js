const btnVerifica = document.getElementById('btnVerifica');
btnVerifica.addEventListener('click', verificaEdad);

function verificaEdad() {
    const Nombre1 = document.getElementById('inpNombre1').value;
    const Nombre2 = document.getElementById('inpNombre2').value;
    const Edad1 = Number(document.getElementById('inpEdad1').value);
    const Edad2 = Number(document.getElementById('inpEdad2').value);

    const DivAlert = document.getElementById('PrintEdad');

    if (Edad1 > Edad2) {
        DivAlert.innerText = Nombre1;
    } else {
        DivAlert.innerText = Nombre2;
    }

}
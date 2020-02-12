/* 
    Se declaran las variables que se utilizaran en el codigo
*/
let numero1;
let numero2;
let resultado;

/*
 * Se declara variable button y se le asigna el boton de calcular
 */
let button = document.getElementById('btnCalcular');

button.addEventListener('click', suma);

function suma() {

    numero1 = Number(document.getElementById('num1').value);
    numero2 = Number(document.getElementById('num2').value);
    resultado = numero1 + numero2;
    let imprimirResultado = document.getElementById('imprimirResultado');
    imprimirResultado.innerText = resultado;

}
const form = document.getElementById('form-numeros');


function validaNumero() { 
var campoA = document.getElementById('campo-a').value;
var campoB = document.getElementById('campo-b').value;  
const mensagemSucesso = `Os números digitados: <b>${campoA}</b> e <b>${campoB}</b> são válidos`; 
const errorMessage = `Os números digitados: <b>${campoA}</b> e <b>${campoB} </b> não são válidos`;


if (campoB < campoA) {
const containerErrorMessage = document.querySelector('.error-message');
containerErrorMessage.innerHTML = errorMessage
containerErrorMessage.style.display = 'block';
} else {
    const containerErrorMessage = document.querySelector('.sucess-message');
    containerErrorMessage.innerHTML = mensagemSucesso
    containerErrorMessage.style.display = 'block';
}
}

// Declaração de Contantes
const form = document.querySelector('form');
const imc =  document.querySelector('button');

// Anula submissao de dados do Formulário
form.onsubmit = () => false;

imc.addEventListener('click', () => {
    // declaração de variaveis
    let peso = document.querySelector('#peso').value.replace(',','.');
    let altura = document.querySelector('#altura').value.replace(',','.');
    let result = document.querySelector('#result');
    let diag = document.querySelector('#diag');
    let imc = peso/Math.pow(altura,2);
    // Exibe o resultado na tela
    result.innerHTML = imc.toFixed(2);
    diag.innerHTML   = (
        imc < 18.5 
    ? 'Você está Abaixo do peso. '
    : imc < 25 
    ? 'Você está No seu Peso ideal'
    : imc < 30 
    ? 'Você está acima do Peso'
    :imc < 35 
    ? 'Você está Obeso'
    : imc < 40 
    ? 'Você está com Obesidade Severa'
    :'Você esta com Obsidade Mórbida. Procure um Médico.'
    );
});


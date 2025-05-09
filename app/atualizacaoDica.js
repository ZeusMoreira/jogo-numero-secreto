import {maiorValor, menorValor, numeroSecreto} from './sortearNumero.js'

const elementoDica = document.querySelector('.dica')
const elementoSetaDica = document.getElementById('seta-dica')

export default function atualizarDica(numero, ehChuteValido) {
    if(!ehChuteValido) {
        atualizarTextoDicaInvalida(numero)
        return
    }

    const ehMaior = numero < numeroSecreto;
    elementoDica.innerHTML = `O número é ${ehMaior ? 'maior' : 'menor'}`;
    mostrarSetaDica(ehMaior);
}

function removerSetaDica() {
    elementoSetaDica.classList.remove('fa-up-long')
    elementoSetaDica.classList.remove('fa-down-long')
}

function mostrarSetaDica(ehNumeroMaior) {
    if(!ehNumeroMaior) {
        elementoSetaDica.classList.remove('fa-up-long')
        elementoSetaDica.classList.add('fa-down-long')
        return
    }

    elementoSetaDica.classList.remove('fa-down-long')
    elementoSetaDica.classList.add('fa-up-long')
}

function atualizarTextoDicaInvalida(numero) {
    const ehMaiorOuMenor = numero < menorValor || numero > maiorValor
    
    ehMaiorOuMenor 
    ? elementoDica.innerHTML = `Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}`
    : elementoDica.innerHTML = `Diga um número válido`
    
    removerSetaDica()
}
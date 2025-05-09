import {maiorValor, menorValor, numeroSecreto} from './sortearNumero.js'
import atualizarDica from './atualizacaoDica.js'

const elementoNumeroDito = document.querySelector('.box')

export default function mostrarNumeroDito(chute) {
    elementoNumeroDito.innerHTML = chute

    const numero = Number(chute.trim())

    const ehChuteValido = validarChute(numero)

    if (numero === numeroSecreto) {
        finalizarJogo()
        return
    }

    atualizarDica(numero, ehChuteValido)
}

function validarChute(numero) {
    return Number.isInteger(numero) && numero >= menorValor && numero <= maiorValor;
}

function finalizarJogo() {
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    pararJogo()
}

document.body.addEventListener('click', (e) => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})
import {maiorValor, menorValor, numeroSecreto} from './sortearNumero.js'
import atualizarDica from './atualizacaoDica.js'

const elementoNumeroDito = document.querySelector('.box')

export default function mostrarNumeroDito(chute) {
    elementoNumeroDito.innerHTML = chute

    if(chute.toLowerCase() === 'game over') {
        document.body.style.backgroundColor = '#FF2C2C'
        document.body.innerHTML = `
            <h2>Game Over!</h2>
            <h3>O jogo foi finalizado, deseja jogar novamente ?</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        pararJogo()
    }

    chute = chute.replace('.', '')

    const numero = Number(chute.trim())

    const ehChuteValido = validarChute(numero)

    console.log(ehChuteValido)

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

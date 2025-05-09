const elementoMenorValor = document.getElementById('menor-valor')
const maiorValorTexto = document.getElementById('maior-valor')
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto()

elementoMenorValor.innerHTML = `${menorValor}`
maiorValorTexto.innerHTML = `${maiorValor}`

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

export {menorValor, maiorValor, numeroSecreto}

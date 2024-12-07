let listaNumerosSorteados = []
let ate = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1

mensagemDeInicio()

function exibirTextoNaTela(tag, texto ){
    let campoTela = document.querySelector(tag)
    campoTela.innerHTML = texto
}

function mensagemDeInicio(){
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', `Escolha um número de 1 a ${ate}`)
}

function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagem = (`Você acertou o número secreto com apenas 
            ${tentativa} ${palavraTentativa}`)
        exibirTextoNaTela('p', mensagem)
        document.getElementById('reiniciar').removeAttribute('disabled')
        
        
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
    }
    tentativa++
    limparCampo()
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * ate + 1)
    let quantidadeDeElementosDaLista = listaNumerosSorteados.length

    if(quantidadeDeElementosDaLista == ate){
        listaNumerosSorteados = []
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }

    else{
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativa = 1
    mensagemDeInicio()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
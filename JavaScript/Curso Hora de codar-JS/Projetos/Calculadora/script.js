//selecao dos elementos

const display = document.querySelector('#displayInput')
const botaoigual = document.querySelector('.igual')
const botaoponto = document.querySelector('.ponto')
const botoesnumeros = document.querySelectorAll('.num')
const botoesoperadores = document.querySelectorAll('.operador')

// Variaves globais
let operacaoAtual = ''
let operador = null
let valorAnterior = ''
let calculando = false

// Funcoes
function atualizaDisplay(){
   display.value = operacaoAtual
}

function insereNumero(evento){
    if (calculando) {
        operacaoAtual = evento.target.textContent
        calculando = false
    } else {
        operacaoAtual += evento.target.textContent
    }

    atualizaDisplay()
}

function inserePonto() {
    if (operacaoAtual.indexOf('.') === -1) {
        operacaoAtual += '.'
        atualizaDisplay()
    }
}

function insereOperador(evento) {
    if (operacaoAtual !== ''){
        if (!calculando){
            if (operador !== null){
                calcula()
            }
            valorAnterior = operacaoAtual
            operacaoAtual = ''
        }
        operador = evento.target.textContent
    }
}

function calcula() {
    let resultado = null
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual = parseFloat(operacaoAtual)

    switch (operador) {
        case '+':
            resultado = operandoAnterior + operandoAtual
            break
        case '-':
            resultado = operandoAnterior - operandoAtual
            break
        case '*':
        resultado = operandoAnterior * operandoAtual
        break
            case '/':
        resultado = operandoAnterior / operandoAtual
        break
    }

    operacaoAtual = String(resultado)
    valorAnterior = operacaoAtual
    calculando = true
    atualizaDisplay()
}


// Eventos 
botaoponto.addEventListener('click', inserePonto)
botoesnumeros.forEach((botao) => botao.addEventListener('click', insereNumero))
botoesoperadores.forEach((botao) =>
    botao.addEventListener('click', insereOperador)
)
botaoigual.addEventListener('click', calcula)
// Aqui os exercícios estão todos juntos, pois se trata de um mesmo assunto
// Usando o formato de data e hora

const agora = Date()
console.log(agora)

const natal = new Date(2025, 11, 25) // Os meses começam a contar a partir do 0
console.log(natal)



// Math

console.log(Math.PI)
console.log(Math.round(3.6))
console.log(Math.sqrt(16))
console.log(Math.pow(4, 3))

// Algumas coisas eu já tinha aprendido no curso do NET NINJA, por isso não coloquei as etapas básicas aqui.


// Avançando em JS

// Manipulação de arrays

const frutas = ["maca", "banana"]

frutas.unshift("Acerola", "laranja") // Isso faz com que algo seja adicionado no começo do array
console.log(frutas)

frutas.shift() // Remove o primeiro elemento
console.log(frutas)


// map, filter, reduce -> arrow function

const numeros = [1, 2, 3, 4, 5, 6]

// find -> retorna apenas o primeiro elemento que atende ao critério
const numeroPar = numeros.find((num) => num % 2 === 0)
console.log(numeroPar)

// filter -> retorna todos os elementos que atendem ao critério
const numerosPares = numeros.filter((num) => num % 2 === 0)
console.log(numerosPares)


// Manipulação de string

const frase = ' Ola, mundo! '

const palavras = frase.trim().split(" ") // Remove os espaços desnecessários

console.log(frase)
console.log(palavras)

const frase2 = 'JavaScript é incrível!'

console.log(frase2.startsWith("Java"))
console.log(frase2.startsWith("java")) // Isso vai retornar falso porque o "j" não é maiúsculo
console.log(frase2.endsWith("!"))


// Exceções e tratamento de erros

const idade = 15

if (idade < 18) {
    throw new Error("Você precisa ter 18 anos") // O throw é usado para lançar o erro
}
// Caso ocorra um erro, o programa para de ser executado e não continua


// O jeito "mais correto" de usar seria assim, porque ele lança o erro e ainda permite continuar o programa:

try {
    const idade = 15
    if (idade < 18) {
        throw new Error("Você precisa ter mais de 18 anos")
    }
} catch (Error) {
    console.log(Error)
}

console.log('Continuando o programa...')


// Callback => função

function cumprimentar(nome, Callback) {
    console.log('Olá, ' + nome)
    Callback()
}

function mostrarSaudacao() {
    console.log('Como você está?')
}

cumprimentar('Matheus', mostrarSaudacao)


// setTimeout -> depois de um tempo, executa algo (uma vez)

function MostrarMensagem() {
    console.log("Essa mensagem irá aparecer depois de 3 segundos")
}

// 1000ms = 1 segundo
setTimeout(MostrarMensagem, 3000)

setTimeout(function () {
    console.log('Oi')
}, 1000)


// Promises

const promessa = new Promise((resolve, reject) => {
    const condicao = false
    if (condicao) {
        resolve("A condição é verdadeira!")
    } else {
        reject("A condição é falsa!")
    }
})

promessa
    .then((mensagem) => {
        console.log(mensagem) // O then é chamado quando a condição for verdadeira
    })
    .catch((erro) => {
        console.log(erro) // O catch é chamado quando a condição for falsa
    })


// Bibliotecas que são "baseadas em promessas"

const promise1 = Promise.resolve(3)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, 'Testando')
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores))


// Async / Await

async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Valor obtido'), 2000)
    })

    const valor = await promessa
    console.log(valor)
}

obterValor()


async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject('Valor com erro'), 2000)
        })

        const valor = await promessa
        console.log(valor)
    } catch (error) {
        console.log(error)
    }
}

obterValorComErro()


// JSON (JavaScript Object Notation)
// {nome: "teste"} => {"nome": "teste"}
// Padroniza a comunicação
// Front-end e back-end na mesma linguagem

const objeto = { nome: "joao", idade: 30 }

const jsonString = JSON.stringify(objeto)

console.log(jsonString)
console.log(typeof jsonString)

const json = '{nome: "joao", idade: 30}' // Formato incorreto, aspas duplas são necessárias

const objeto2 = JSON.parse(json)

console.log(objeto2)

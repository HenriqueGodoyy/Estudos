// Primeiro exercício
let lista = []
lista.push('ovo', 'maca', 'feijao', 'arroz', 'manteiga')
lista.shift()
console.log(lista)



// Segundo exercício
let array = [3, 7, 14, 21, 29, 36, 42]

const numero = array.find((num) => num > 10 && num % 7 === 0)
console.log(numero)



// Terceiro exercício
const array1 = [5, 10, 15, 20, 25, 30, 35, 40]

const numerosFiltrados = array1.filter((num) => num > 20)
console.log(numerosFiltrados)



// Quarto exercício
const frase1 = " ola, mundo "

const palavras1 = frase1.trim().split(" ")
console.log(palavras1)



// Quinto exercício
const frase2 = "O rato roeu a roupa do rei de roma"

console.log(frase2.startsWith("O"))
console.log(frase2.endsWith("roma"))



// Exercícios do chat para praticar

// Crie um array de frutas. Remova a última fruta e adicione uma nova no começo.
const array2 = ["maca", "banana", "uva", "laranja"]

array2.pop()
array2.unshift("acerola")
console.log(array2)

// Obs: 
// shift -> remove o primeiro elemento do array
// unshift -> adiciona um ou mais elementos no começo do array
// pop -> remove o último elemento
// push -> adiciona um ou mais elementos no final



// Filtrar todos os números pares de um array.
const numeros = [2, 4, 5, 7, 9, 6, 7, 8]

const numerosPares = numeros.filter((num) => num % 2 === 0)
console.log(numerosPares)



// Achar o primeiro número maior que 100 em um array.
const numeros1 = [2, 50, 204, 78, 140, 272, 92, 472]

const numeroMaiorQue100 = numeros1.find((num) => num > 100)
console.log(numeroMaiorQue100)



// Transformar um array de nomes em um array de nomes em maiúsculas.
const nomes = ['ola', 'oi', 'ufc']

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase())
console.log(nomesMaiusculos)



// Contar quantas palavras existem em uma frase.
const frase = 'ola, tudo bem?, como voce esta'

console.log(frase.split(' ').length)



// Verificar se todos os números de um array são positivos.
const numeros2 = [3, -4, 5, 5, -4]

const saoPositivos = numeros2.every((num) => num > 0)
console.log(saoPositivos)



// Criar uma função que receba uma string e retorne true se ela for um palíndromo.
function ehPalindromo(texto) {
    const formatado = texto.toLowerCase().replace(/\s+/g, '')
    const invertido = formatado.split('').reverse().join('')
    return formatado === invertido
}

console.log(ehPalindromo('casa'))
console.log(ehPalindromo('arara'))
console.log(ehPalindromo('ovo'))



// Criar um array de números e retornar a soma de todos os elementos.
const array3 = [2, 5, 4, 9, 3, 3]

const soma = array3.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
console.log(soma)

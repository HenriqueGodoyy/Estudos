// DOM - Document Object Model

// Selecionar elementos
// Modelo antigo
const elementoPorId = document.getElementById('meuId')
console.log(elementoPorId)

// Modelo novo
const elementoPorId1 = document.querySelector('#meuId')
console.log(elementoPorId1)

// Selecionando por classe
const elementoPorClasse = document.getElementsByClassName('minhaClasse')
console.log(elementoPorClasse)

const elementoPorClasse1 = document.querySelector('.minhaClasse')
console.log(elementoPorClasse1)



// Manipular texto

const elemento = document.querySelector('#meuId')
console.log(elemento.textContent)
elemento.textContent = "Meu texto"



/// Trabalhar com atributos

const link = document.querySelector('a')
console.log(link)

link.setAttribute("href", "https://youtube.com")

console.log(link.getAttribute('href'))
console.log(link.hasAttribute('target'))
link.removeAttribute('target')



// Manipulação de classes do CSS

const element = document.querySelector('#meuId')
element.classList.add('novaClasse') 
element.classList.remove('minhaClasse') 
element.classList.toggle('outraClasse') // Esse toggle funciona assim: se não houver uma classe com esse nome, ele adiciona
element.classList.toggle('outraClasse') // Se já houver uma classe com esse nome, ele remove



// Manipular o CSS diretamente

const elemento2 = document.querySelector('#meuId')
elemento2.style.color = 'blue'
elemento2.style.backgroundColor = 'red'
// background-color => backgroundColor



// Navegação entre nós

const element2 = document.querySelector('#meuInput')
const pai = element2.parentNode
console.log(pai)


// Obter filhos

const primeiroFilho = pai.firstChild
console.log(primeiroFilho)

const ultimoFilho = pai.lastChild
console.log(ultimoFilho)



// Manipulação do DOM

const novoElemento = document.createElement('div')
novoElemento.textContent = 'Minha div de JS'
console.log(novoElemento)

document.body.appendChild(novoElemento)
document.body.insertBefore(novoElemento, pai)
document.body.removeChild(elementoPorId)



// Eventos

// Clique

const botao = document.querySelector('button')
botao.addEventListener('click', function() {
    console.log('Botão clicado!')
})


// Mouse

const elemento5 = document.querySelector('#meuFormulario')
elemento5.addEventListener('mouseover', function() {
    console.log('O mouse passou aqui!')
})


// Teclado

const elemento6 = document.querySelector('#meuInput')
elemento6.addEventListener('keydown', function() {
    console.log('Tecla pressionada!')
})



// Formulário

const form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('Formulário enviado')
})



// Propagação de eventos

document.querySelector('#elementoPai').addEventListener('click', function() {
    console.log('Clicou no pai')
})

document
    .querySelector('#elementoFilho')
    .addEventListener('click', function(event) {
        // event.stopPropagation()
        console.log("Elemento filho")
    })

document.querySelector('#meuLink').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Clicou no link!')
})



// Delegação de eventos

document
    .querySelector('#elementoPai')
    .addEventListener('click', function(event){
        if (event.target.matches('.classeDosFilhos')){
            console.log('Evento delegado ao filho')
        }
    })

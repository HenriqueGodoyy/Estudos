const para = document.querySelector('p')

console.log(para.outerHTML) 
// Use outerHTML to see the exact HTML as written in the document
// Newer versions of Chrome sometimes don't show the whole HTML without outerHTML

const para1 = document.querySelector('.error') 
// Select the first paragraph with class 'error'

console.log(para1)

const para2 = document.querySelector('div.error')
console.log(para2)

const para3 = document.querySelectorAll('p') 
// Select all paragraph elements

para3.forEach(paras => {
    console.log(paras.outerHTML)
})

console.log(para3[2])

const error1 = document.querySelectorAll('.error')

error1.forEach(errors => {
    console.log(errors.outerHTML)
})

console.log(error1[2])

// Get an element by id

const title = document.getElementById('page-title')
console.log(title.outerHTML)

// Get elements by their class name

const errors = document.getElementsByClassName('error')
console.log(errors)
console.log(errors[0].outerHTML)

// Get elements by their tag name

const para4 = document.getElementsByTagName('p')
console.log(para4)
console.log(para4[1].outerHTML)

const para5 = document.querySelector('p')

console.log(para5.innerText)
para5.innerText = 'Henrique is awesome' 

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += ' new text'  // Add new text to each paragraph
})

const content = document.querySelector('.content')

console.log(content.innerHTML)
content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

const people = ['Henrique', 'Godoy', 'Santos']

people.forEach(person  => {
    content.innerHTML += `<p>${person}</p>`
})

const link = document.querySelector('a')
console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://www.youtube.com/')
link.innerText = 'Youtube website'

const msg = document.querySelector('p')
console.log(msg.getAttribute('class'))
msg.setAttribute('class', 'success')
msg.setAttribute('style', 'color: green;')

const title2 = document.querySelector('h1')
// title2.setAttribute('style', 'margin: 50px;')  // Alternative way to set style

console.log(title2.style)
console.log(title2.style.color)

title2.style.margin = '50px'
title2.style.color = 'crimson'
title2.style.display = 'flex'
title2.style.fontSize = '60px'
title2.style.margin = ''  // Remove the margin style

const content2 = document.querySelector('p')
console.log(content2.classList)

content2.classList.add('error')    // Add class 'error'
content2.classList.remove('error') // Remove class 'error'
content2.classList.add('success')  // Add class 'success'

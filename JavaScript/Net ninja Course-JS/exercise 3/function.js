// Function declaration
function charles() {
    console.log('hello there')
}

// Function expression
const speak = function() {
    console.log('good day!')
}

charles()
charles()
charles()

speak()
speak()
speak1() // ERROR: speak1 is not defined yet

// Function declaration — can be called anywhere (hoisted)
function charles() {
    console.log('hello there')
}

// Function expression — cannot be called on the botton definition
const speak1 = function() {
    console.log('good day!')
}

// Arguments & parameters with default values
const speak2 = function(name = 'Henrique', time = 'morning') {
    console.log(`good ${time} ${name}`)
}

speak2()
speak2('Godoy', 'night')



// Returning values
const calcArea = function(radius) {
    return 3.14 * radius ** 2
}

const area = calcArea(5)
console.log(area) 
// We return the value to use it later; if we just logged inside the function, we couldn’t reuse it



// Arrow function (shorter syntax)
const calcArea1 = (radius) => {
    return 3.14 * radius ** 2
}

const area1 = calcArea1(5) // You had calcArea(5), fixed to calcArea1(5)
console.log('area is', area1)



// Practice arrow function returning directly
const greet = function() {
    return 'hello, world'
}

const result = greet()
console.log(result)

const greet2 = () => 'Hello world'

const result2 = greet2()
console.log(result2)



// Arrow function with loop example (fixing bugs)
const bill = (products, tax) => { 
    let total = 0
    for(let i = 0; i < products.length; i++) {  // fixed condition from 'products.length' to 'i < products.length'
        total += products[i] + products[i] * tax  // use tax parameter, instead of fixed 0.2
    }
    return total
}

console.log(bill([10, 15, 30], 0.2))




// Callbacks & forEach
const myFunc = (callbackFunc) => {
    // do something
    let value = 50
    callbackFunc(value)
}

myFunc(value => {
    // do something with value
    console.log(value)
})

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

people.forEach((person, index) => {
    console.log(index, person)
})




// Get a reference to the 'ul'
const ul = document.querySelector('.people')

const people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

let html = ``

people2.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`  // fixed: was using people2 instead of person
})

console.log(html)
ul.innerHTML = html

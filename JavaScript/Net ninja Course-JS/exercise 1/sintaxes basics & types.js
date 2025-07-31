// Variables and primitive types
let age = 25
let year = 2023

console.log(age + year)
console.log(`I am ${age} and this summer ${year} I'll be ${age + 1}`)

// We can use the variable const for some things (numbers, etc.) that we don't want to change anymore in the program
// Example:
const points = 1000
console.log(`I have ${points} points`)

// points = 100 // Is gonna be an error, cause we changed the value of points

console.log('_______________________') // just for separate in the console

// Now we're gonna use string in the variable

// Strings
let email = 'icogodoy123@gmail.com'
let senha = 123456
console.log(email)
console.log(`My email is ${email} and my password is ${senha}`)

// Strings concatenation
let firstname = 'Henrique'
let lastname = 'dos Santos'
let middlename = 'Godoy'
let fullname = firstname + ' ' + middlename + ' ' + lastname
console.log(fullname)

// Getting characters
console.log(fullname[0] + fullname[1] + fullname[2]) // Hen, this is used to get the letters of a string 

// String length 
console.log('The name has', fullname.length, 'characters') // this is used to get the length of a string

// String methods
console.log(fullname.toUpperCase())
let result = fullname.toLowerCase()
console.log(result, fullname)

let index = email.indexOf('@')
console.log(index)

let result2 = email.slice(0, 10)
console.log(result2)

console.log('__________________') // just for separate in the console

// Math operations
let radius = 10
const pi = 3.14

// math operators = +, -, *, /, ** (exponent), %
console.log(10 / 2)

let result3 = radius % 3
let result4 = pi * radius ** 2
console.log(result3)
console.log(result4)

// Order of operations = B I D M A S
// Brackets -> (), Indices -> **, Division, Multiplication, Addition, Subtraction
let result5 = 5 * (10 - 3) ** 2
console.log(result5)

let likes = 10
// likes = likes + 1 is the same as:
likes++
// or likes--
// we can also use likes = likes + 10 which is the same as:
likes += 10
console.log(likes)
likes /= 2
console.log(likes)
// we can also use -=, +=, /=, *=

// Concatenation of numbers and strings
let blog = 'My blog has ' + likes + ' likes'
console.log(blog)

// Now it's an example of strings
// Template strings
let title = 'Best reads of 2019'
let author = 'Henrique Godoy'
let likes2 = 30

// Concatenation way
// let result6 = 'The blog title is ' + title + ' by ' + author + ' and has ' + likes2 + ' likes'
// console.log(result6)

// Template strings way
let result6 = `The blog title is ${title} by ${author} and has ${likes2} likes`
console.log(result6)

// Creating HTML templates
let html = ` 
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes2} likes</span>
`
console.log(html)

// Start to work with arrays 
let ninjas = ['Henrique', 'Godoy', 'Santos']
ninjas[1] = 'Ken' // we can change the value of the array
console.log(ninjas[1])

let ages = [20, 30, 40, 50]
console.log(ages[2])

let random = ['Henrique', 'Godoy', 25, 30]
console.log(random)

console.log(ninjas.length)

// Array methods
let result7 = ninjas.join(',')
console.log(result7)

let result8 = ninjas.indexOf('Santos')
console.log(result8)

let result9 = ninjas.concat(['Lebron', 'James'])
console.log(result9)

let result10 = ninjas.push('Kobe') // adds to the end of array
result10 = ninjas.pop() // removes from the end of array
console.log(result10)

// Working with booleans and comparisons
console.log(true, false, 'true', 'false')

// Methods can return booleans
let email2 = 'henriquegd@gmail.com'
let result11 = email2.includes('@')
console.log(result11)

let nba = ['Lebron', 'Shaq', 'Kobe']
let result12 = nba.includes('Lebron')
console.log(result12)

// Comparison operators
let age2 = 25
console.log(age2 == 25)
console.log(age2 == 30)
console.log(age2 != 30)
console.log(age2 != 25)
console.log(age2 > 25)

let nome = 'Henrique'
console.log(nome == 'Henrique')
console.log(nome == 'henrique')
console.log(nome > 'Ana')    // this works cause the letter A comes before H in the alphabet
console.log(nome < 'Marcos')

// Strict comparisons
let age3 = 25
console.log(age3 === 25)
console.log(age3 === '25')  // false because types are different
console.log(age3 !== 25)
console.log(age3 !== '25')

// Type conversion
let score = '100'

console.log(score + 1) // this will return '1001' because score is a string
console.log(typeof score)

score = Number(score) // this will convert the score to a number
console.log(score + 1)
console.log(typeof score)

// We can also convert number to strings
let score2 = 50
score2 = String(score2)
console.log(score2, typeof score2)

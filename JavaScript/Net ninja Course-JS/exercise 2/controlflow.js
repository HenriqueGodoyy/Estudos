
for (let i=1;i<=5;i++) {
    console.log("in loop: ", i)
}
console.log("loop finished")

const names = ['Henrique', 'Godoy', 'Santos']

for (let i=0; i<names.length; i++){
    console.log(names[i])
    let html = `<div>${names[i]}</div>`
    console.log(html)
}


// While loop

names = ['Henrique', 'Godoy', 'Santos']
let i = 0
while (i < 5){
    console.log("in loop: ", i)
    i++
} 
i = 0
while(i < names.length){
    console.log(names[i])
    i++
}

// do while loops

i = 5

do {
    console.log('val of i is: ',i)
    i++
}while(i < 5)

// if statments 

age = 25

if(age > 20 ){
    console.log('you are over 20 years old' )
}

names = ['Henrique', 'Godoy' , 'Santos']

if(names.length >= 3){
    console.log("that's a lot of names")
}   

const password = 'passworddddd'

if(password.length >= 12){
    console.log('This password mighty be strong')
}else if(password.length >= 8){
    console.log('this password it is long enough')
}else{ 
    console.log('this password it is not long enough')
} 

// logical operators

const password1 = 'passworddddd@'

if(password1.length >= 12 && password1.includes('@')){
    console.log('This password mighty be strong')
}else if(password1.length >= 8 || password1.includes('@') && password1.length > 5){
    console.log('this password it is strong enough')
}else{ 
    console.log('this password it is not strong enough')
} 


// logical NOT (!)

let user = false

if(!user){
    console.log('You must be logged in to continue')
}
console.log(!true)
console.log(!false)


// Break and continue

const score = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < score.length; i++){

    if(score[i] === 0){
        continue;
    }
    
    console.log('your score: ', score[i])

    if(score[i] === 100){
        console.log('Congrats, you got the top score!')
        break
    }
}  

// Switch statements

const grade = 'D'

switch(grade){
    case 'A':
        console.log('you got an A!')
        break
    case 'B':
        console.log('you got an B!')   
        break 
    case 'C':
        console.log('you got an C!')
        break
    case 'D':
        console.log('you got an D!')
        break
    case 'E':
        console.log('you got an E!') 
        break   
    default :
        console.log('Not a valid grade')
}

// Same exmaple but using else if

if(grade === 'A'){
    
}else if(grade === 'B'){

}else if(grade === 'C'){

}else if(grade === 'D'){

}else if(grade === 'E'){
    
}else{

}
    


// Variables & block scope

const age = 30


if(true){
    const age = 40
    const names = 'Henrique'
    console.log('outside  1st code block: ', age, names)

    if(true){
        const age = 50
        console.log('inside 2nd code block', age)
    }
}

console.log('outside code block: ', age  )

// The variables let and const it's only use for a specific block scope, but the variable var doesn't respect this 
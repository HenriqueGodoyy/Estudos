// object literals

let user = {
    names: 'Henrique',
    age: 18,
    email: 'henriquegodoyds@gmail.com',
    location: 'Brazil',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
}    

console.log(user)
console.log(user.names)

user.age = 35
console.log(user.age) 

console.log(user['email'])
user['names'] = 'chun-li'
console.log(user['names'])

console.log(typeof user)

let user = {
    names: 'Henrique',
    age: 18,
    email: 'henriquegodoyds@gmail.com',
    location: 'Brazil',
    blogs: [
        {tittle: 'why mac & cheese rules', likes: 30}, 
        {tittle: '10 things to make with marmite', likes: 50}],
    login: function() {
        console.log('the user is logged in')
    },
    logout: function() {
        console.log('the user is logged out')
    },
    logBlogs: function() {
        console.log('This user has written the following blogs')
        this.blogs.forEach( blog => {
            console.log(blog.tittle, blog.likes)
        })
    }
}    

user.logBlogs()
console.log(this)

user.login() 
user.logout()






// math objects

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))




//random numbers

const random = Math.random()

console.log(random)
console.log(Math.round(random*100))




// primitive values

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne : ${scoreOne}, scoretwo: ${scoreTwo}`)

scoreOne = 100
console.log(`scoreOne : ${scoreOne}, scoretwo: ${scoreTwo}`)




//refrence values 

const userOne = {name : 'Henrique', age: 18}
const userTwo = userOne

console.log(userOne,userTwo)

userOne.name = 'Chun-li'
console.log(userOne,userTwo)
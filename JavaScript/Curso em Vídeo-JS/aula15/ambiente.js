let num = [8, 4, 5, 2, 3]


num.push(1) // adicionar numeros no final do vetor
console.log(`Nosso vetor e o ${num}`)//Mostrar o vetor
console.log(`O vetor tem ${num.length} posicoes`)//Quantas posicoes ele tem
console.log(`O primeiro valor do vetor e ${num[0]}`)

//Aqui vai mostrar os numeros antes de fazer a inumeracao
console.log(num[4])
console.log(num[0])

console.log('---------------------------------------------') // uma linha no console so para diferenciar o conteúdo

/* Forma mais trabalhosa de fazer para mostrar todos os numeros do vetor
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/

//Forma mais simplificada 

for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}

console.log('---------------------------------------------') // uma linha no console so para diferenciar o conteúdo


num.sort()// Colocar todos em ordem crescente
console.log(`Nosso vetor em ordem crescente ${num}`)

//Aqui vai mostrar os numeros depois de inumerados corretamente
console.log(num[4])
console.log(num[0])

console.log('---------------------------------------------') // uma linha no console so para diferenciar o conteúdo
 
// forma mais simplificada de for
for(let pos in num){
    console.log(num[pos])
}

                
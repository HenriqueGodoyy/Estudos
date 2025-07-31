// Exercícios que uso para treinar 

let n = [2, 18, 35, 5, 22]
let maioresQueDez = []

// Usando for para percorrer o array
for (let i = 0; i < n.length; i++) {
    if (n[i] > 10) {
        maioresQueDez.push(n[i]) // Adiciona o número maior que 10 ao novo array
    }
}

// Exibe os números que são maiores que 10
console.log(`Os números que são maiores que 10 são: ${maioresQueDez}`)

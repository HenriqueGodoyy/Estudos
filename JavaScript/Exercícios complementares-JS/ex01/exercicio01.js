// // Exercícios que uso para treinar 

let nota = Number(prompt("Digite sua nota:"));

if (nota >= 9 && nota <= 10) {
    console.log(`Parabéns! Sua nota foi de ${nota}, e você alcançou a grade A`);
} else if (nota >= 7 && nota < 9) {
    console.log(`Sua nota foi de ${nota}, e você alcançou a grade B`);
} else if (nota >= 5 && nota < 7) {
    console.log(`Sua nota foi de ${nota}, e você alcançou a grade C`);
} else if (nota >= 0 && nota < 5) {
    console.log(`Sua nota foi de ${nota}, e você alcançou a grade D`);
} else {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
}

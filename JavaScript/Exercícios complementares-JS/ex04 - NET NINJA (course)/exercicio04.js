// Aqui estão alguns exercícios que fiz do curso NET NINJA (os exercícios estão misturados, porém separados por comentários)

// Peça o nome e a idade do usuário, e mostre uma mensagem. Obs: quis dar uma implementada

const nome = prompt('Qual é o seu nome?');
const idade1 = prompt('Qual é a sua idade?');

const para1 = document.querySelector('#primeiro');

const age = Number(idade1);

const idadeValida = !isNaN(age) && age >= 0 && age <= 130;
const nomeValido = nome !== '' && /[a-zA-Z]/.test(nome);

if (nomeValido && idadeValida) {
  para1.innerText = `Olá, ${nome}, você tem ${idade1} anos.`;
} else {
  para1.innerText = 'Insira apenas conteúdos válidos.';
}

// Peça um número e mostre o dobro dele

const numero1 = prompt('Digite um número para saber o dobro dele!');
const para2 = document.getElementById('segundo');
const resultado = numero1 * 2;
para2.innerText = `O dobro do número é ${resultado}.`;

// Peça dois ou três números e calcule a média

const opcao = prompt('Você deseja calcular a média de 2 ou 3 números?');
const para3 = document.getElementById('terceiro');

if (opcao == 3) {
  const valor1 = prompt('Digite o primeiro valor:');
  const valor2 = prompt('Digite o segundo valor:');
  const valor3 = prompt('Digite o terceiro valor:');
  const num1 = Number(valor1);
  const num2 = Number(valor2);
  const num3 = Number(valor3);
  const resultado = (num1 + num2 + num3) / 3;
  para3.innerText = `A média final é ${resultado}.`;
} else {
  const valor1 = prompt('Digite o primeiro valor:');
  const valor2 = prompt('Digite o segundo valor:');
  const num1 = Number(valor1);
  const num2 = Number(valor2);
  const resultado = (num1 + num2) / 2;
  para3.innerText = `A média final é ${resultado}.`;
}

// Converter Celsius para Fahrenheit

const ce = prompt('Quantos graus Celsius está aí?');
const para4 = document.getElementById('quarto');
const c = Number(ce);
const f = (c * 9 / 5) + 32;
para4.innerText = `${ce}°C equivalem a ${f}°F.`;

// Verificar se o número é par ou ímpar

const numero = prompt('Digite um número para saber se ele é par ou ímpar:');
const para5 = document.getElementById('quinto');

if (numero % 2 == 0) {
  para5.innerText = `O número ${numero} é par.`;
} else {
  para5.innerText = `O número ${numero} é ímpar.`;
}

// Classificar a idade da criança

const idade = prompt('Digite a sua idade:');
const para6 = document.getElementById('sexto');

if (idade <= 12) {
  para6.innerText = `Você tem ${idade} anos e é uma criança.`;
} else if (idade >= 13 && idade <= 17) {
  para6.innerText = `Você tem ${idade} anos e é um adolescente.`;
} else {
  para6.innerText = `Você tem ${idade} anos e é um adulto.`;
}

// Perguntar quantas horas a pessoa dormiu

const horas = prompt('Quantas horas você dormiu?');
const para7 = document.getElementById('setimo');

if (horas >= 8) {
  para7.innerText = `Parabéns! Você dormiu ${horas} horas.`;
} else {
  para7.innerText = `Você dormiu apenas ${horas} horas. Precisa descansar mais.`;
}

// Imprimir números de 1 a 10 no console

console.log('Usando for:');
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log('Usando while:');
let i1 = 0;
while (i1 <= 10) {
  console.log(i1);
  i1++;
}

console.log('Usando do...while:');
let i2 = 0;
do {
  console.log(i2);
  i2++;
} while (i2 <= 10);

// Pedir número até digitar "valido"

const para9 = document.getElementById('nono');
let num1;

do {
  num1 = prompt('Digite números. Quando quiser parar, digite "valido".');

  if (num1 !== 'valido') {
    para9.innerText += `\nVocê digitou o número ${num1}`;
  }

} while (num1 !== 'valido');

// Mostrar a tabuada de 1 a 10 de um número

const num2 = prompt('Digite um número para ver a tabuada dele:');
const para10 = document.getElementById('decimo');

for (let i = 0; i <= 10; i++) {
  para10.innerText += `\n${num2} x ${i} = ${num2 * i}`;
}

// Trocar a cor de fundo com botão

let cores = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'white'];
let index = 0;

function mudarcor() {
  document.body.style.backgroundColor = cores[index];
  index = (index + 1) % cores.length; // Volta ao início quando chega ao final
}

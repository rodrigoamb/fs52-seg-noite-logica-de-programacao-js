// **Exercício 1 - Apresentação Pessoal**
// Crie três variáveis usando `const` para armazenar seu nome, sua idade e sua cidade. Em seguida, exiba no console uma mensagem de apresentação usando essas variáveis.

console.log("==== Resolução exercício 01 ====");

const nome = "Maria";
const idade = 25;
const cidade = "São Paulo";

console.log(
  `Olá! Meu nome é ${nome} tenho ${idade} anos de idade e moro em ${cidade}`
);

// **Exercício 2 - Calculadora Básica**
// Crie duas variáveis `let` chamadas `numero1` e `numero2` com valores numéricos de sua escolha. Realize e exiba no console os resultados das 4 operações matemáticas básicas (soma, subtração, multiplicação e divisão) entre esses números.

console.log("==== Resolução exercício 02 ====");

let numero1 = 20;
let numero2 = 5;

console.log(`SOMA: ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`SUBTRAÇÃO: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`MULTIPLICAÇÃO: ${numero1} x ${numero2} = ${numero1 * numero2}`);
console.log(`DIVISÃO: ${numero1} / ${numero2} = ${numero1 / numero2}`);

// **Exercício 3 - Comparando Valores**
// Crie duas variáveis com idades diferentes. Usando operadores de comparação, exiba no console:
// - Se a primeira idade é maior que a segunda
// - Se as idades são iguais
// - Se a primeira idade é menor ou igual a 18

console.log("==== Resolução exercício 03 ====");

let idade1 = 22;
let idade2 = 18;

console.log(
  `A idade 1 (${idade1}) é maior que a idade 2 (${idade2})? ${idade1 > idade2} `
);
console.log(
  `A idade 1 (${idade1}) é igual que a idade 2 (${idade2})? ${
    idade1 === idade2
  } `
);
console.log(
  `A idade 1 (${idade1}) é menor ou igual idade 2 (${idade2})? ${
    idade1 <= idade2
  } `
);

// **Exercício 4 - Função de Saudação**
// Crie uma função nomeada chamada `saudar` que receba um nome como parâmetro e retorne a string "Olá, [nome]! Seja bem-vindo(a)!". Chame a função com diferentes nomes e exiba os resultados.

console.log("==== Resolução exercício 04 ====");

function saudar(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

console.log(saudar("Rodrigo"));
console.log(saudar("Ana"));
console.log(saudar("João"));

// **Exercício 5 - Calculadora com Funções**
// Crie quatro arrow functions: `somar`, `subtrair`, `multiplicar` e `dividir`. Cada uma deve receber dois parâmetros e retornar o resultado da operação correspondente. Teste todas as funções.

console.log("==== Resolução exercício 05 ====");

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log(`somar 10 + 5 : ${somar(10, 5)}`);
console.log(`subtrair 10 - 5: ${subtrair(10, 5)}`);
console.log(`multiplicar 10 * 5: ${multiplicar(10, 5)}`);
console.log(`dividir 10 / 5: ${dividir(10, 5)}`);

// **Exercício 6 - Verificador de Maioridade**
// Crie uma função que receba uma idade como parâmetro e retorne `true` se a pessoa for maior de idade (18 anos ou mais) ou `false` caso contrário. Use operadores de comparação.

console.log("==== Resolução exercício 06 ====");

const verificaMaiorIdade = (idade) => idade >= 18;

console.log(`Idade 14: ${verificaMaiorIdade(14)}`);
console.log(`Idade 18: ${verificaMaiorIdade(18)}`);
console.log(`Idade 40: ${verificaMaiorIdade(40)}`);

// **Exercício 7 - Identificador de Tipos**
// Crie variáveis com os seguintes tipos: string, number, boolean, undefined e null. Use o operador `typeof` para exibir o tipo de cada variável no console.

console.log("==== Resolução exercício 07 ====");

const minhaString = "Olá mundo";
const meuNumber = 30;
const meuBool = true;
const meuUnde = undefined;
const meuNull = null;

console.log(typeof minhaString);
console.log(typeof meuNumber);
console.log(typeof meuBool);
console.log(typeof meuUnde);
console.log(typeof meuNull); //bug historico do JS

// **Exercício 8 - Classificador de Notas**
// Crie uma função que receba uma nota (0 a 10) e retorne:
// - "Reprovado" se a nota for menor que 5
// - "Recuperação" se a nota for maior ou igual a 5 e menor que 7
// - "Aprovado" se a nota for maior ou igual a 7

// Use `if/else if/else`.

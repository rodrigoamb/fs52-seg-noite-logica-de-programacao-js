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

console.log("==== Resolução exercício 08 ====");

function classicaNota(nota) {
  if (nota < 5) {
    return "reprovado";
  } else if (nota >= 5 && nota < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}

console.log(classicaNota(3)); // reprovado
console.log(classicaNota(5)); // recuperação
console.log(classicaNota(7)); // aprovado
console.log(classicaNota(9)); // aprovado

// **Exercício 9 - Calculadora de Desconto**
// Crie uma função que receba o valor de uma compra e retorne o valor com desconto:
// - Compras acima de R$ 500: 15% de desconto
// - Compras entre R$ 200 e R$ 500: 10% de desconto
// - Compras abaixo de R$ 200: sem desconto

// A função deve retornar o valor final.

console.log("==== Resolução exercício 09 ====");

function calculaDesconto(valorCompra) {
  let desconto = 0;

  if (valorCompra > 500) {
    desconto = 0.15;
  } else if (valorCompra >= 200) {
    desconto = 0.1;
  }

  const valorDesconto = valorCompra * desconto;

  const valorFinal = valorCompra - valorDesconto;

  return valorFinal;
}

console.log(`R$ ${calculaDesconto(700).toFixed(2)}`);
console.log(calculaDesconto(400).toFixed(2));
console.log(calculaDesconto(250).toFixed(2));
console.log(calculaDesconto(100).toFixed(2));

// **Exercício 10 - Manipulação Básica de Arrays**
// Crie um array com 5 frutas. Em seguida:
// - Adicione uma fruta no final
// - Adicione uma fruta no início
// - Remova a última fruta
// - Exiba o tamanho do array
// - Exiba a fruta na posição 2

console.log("==== Resolução exercício 10 ====");

let frutas = ["maçã", "banana", "laranja", "uva", "manga"];

//adicionar no final
frutas.push("abacaxi");
//adicionar no inicio
frutas.unshift("morango");
//remove o ultimo
frutas.pop();
//tamanho do array
console.log(frutas.length);
// acessando o indice 2
console.log(frutas[2]);

// **Exercício 11 - Buscando no Array**
// Crie um array com os números de 1 a 10. Crie uma função que receba um número e verifique se ele existe no array, retornando `true` ou `false`. Use o método `includes()`.

console.log("==== Resolução exercício 11 ====");

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificaNumero(numero) {
  return listaNumeros.includes(numero);
}

console.log(`numero 5 existe? ${verificaNumero(5)}`);
console.log(`numero 10 existe? ${verificaNumero(10)}`);
console.log(`numero 15 existe? ${verificaNumero(15)}`);

// **Exercício 12 - Somador de Array**
// Crie uma função que receba um array de números e use um loop `for` para calcular e retornar a soma de todos os elementos.

console.log("==== Resolução exercício 12 ====");

function somaItensArray(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma = soma + array[i];
  }

  return soma;
}

let arrNumeros = [10, 20, 30, 40, 50];

//pesquisem sobre o metodo reduce()

console.log(somaItensArray(arrNumeros));

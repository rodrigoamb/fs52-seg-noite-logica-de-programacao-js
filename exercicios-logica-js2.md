# 📚 20 Exercícios de Lógica de Programação em JavaScript

## Revisão Completa para Sala de Aula

---

### 🟢 Nível 1 - Variáveis e Operadores Básicos

**Exercício 1 - Apresentação Pessoal**
Crie três variáveis usando `const` para armazenar seu nome, sua idade e sua cidade. Em seguida, exiba no console uma mensagem de apresentação usando essas variáveis.

---

**Exercício 2 - Calculadora Básica**
Crie duas variáveis `let` chamadas `numero1` e `numero2` com valores numéricos de sua escolha. Realize e exiba no console os resultados das 4 operações matemáticas básicas (soma, subtração, multiplicação e divisão) entre esses números.

---

**Exercício 3 - Comparando Valores**
Crie duas variáveis com idades diferentes. Usando operadores de comparação, exiba no console:
- Se a primeira idade é maior que a segunda
- Se as idades são iguais
- Se a primeira idade é menor ou igual a 18

---

### 🟡 Nível 2 - Funções Básicas

**Exercício 4 - Função de Saudação**
Crie uma função nomeada chamada `saudar` que receba um nome como parâmetro e retorne a string "Olá, [nome]! Seja bem-vindo(a)!". Chame a função com diferentes nomes e exiba os resultados.

---

**Exercício 5 - Calculadora com Funções**
Crie quatro arrow functions: `somar`, `subtrair`, `multiplicar` e `dividir`. Cada uma deve receber dois parâmetros e retornar o resultado da operação correspondente. Teste todas as funções.

---

**Exercício 6 - Verificador de Maioridade**
Crie uma função que receba uma idade como parâmetro e retorne `true` se a pessoa for maior de idade (18 anos ou mais) ou `false` caso contrário. Use operadores de comparação.

---

### 🟠 Nível 3 - Tipos de Dados e Condicionais

**Exercício 7 - Identificador de Tipos**
Crie variáveis com os seguintes tipos: string, number, boolean, undefined e null. Use o operador `typeof` para exibir o tipo de cada variável no console.

---

**Exercício 8 - Classificador de Notas**
Crie uma função que receba uma nota (0 a 10) e retorne:
- "Reprovado" se a nota for menor que 5
- "Recuperação" se a nota for maior ou igual a 5 e menor que 7
- "Aprovado" se a nota for maior ou igual a 7

Use `if/else if/else`.

---

**Exercício 9 - Calculadora de Desconto**
Crie uma função que receba o valor de uma compra e retorne o valor com desconto:
- Compras acima de R$ 500: 15% de desconto
- Compras entre R$ 200 e R$ 500: 10% de desconto
- Compras abaixo de R$ 200: sem desconto

A função deve retornar o valor final.

---

### 🔴 Nível 4 - Arrays

**Exercício 10 - Manipulação Básica de Arrays**
Crie um array com 5 frutas. Em seguida:
- Adicione uma fruta no final
- Adicione uma fruta no início
- Remova a última fruta
- Exiba o tamanho do array
- Exiba a fruta na posição 2

---

**Exercício 11 - Buscando no Array**
Crie um array com os números de 1 a 10. Crie uma função que receba um número e verifique se ele existe no array, retornando `true` ou `false`. Use o método `includes()`.

---

**Exercício 12 - Somador de Array**
Crie uma função que receba um array de números e use um loop `for` para calcular e retornar a soma de todos os elementos.

---

### 🟣 Nível 5 - Objetos

**Exercício 13 - Criando um Objeto Pessoa**
Crie um objeto chamado `pessoa` com as propriedades: nome, idade, cidade e profissão. Exiba cada propriedade no console acessando-as de duas formas diferentes (notação de ponto e colchetes).

---

**Exercício 14 - Modificando Objetos**
Usando o objeto `pessoa` do exercício anterior:
- Altere a idade para um novo valor
- Adicione uma nova propriedade chamada `email`
- Remova a propriedade `cidade`
- Exiba o objeto atualizado

---

**Exercício 15 - Função com Objeto**
Crie uma função chamada `apresentarPessoa` que receba um objeto pessoa (com nome, idade e profissão) e retorne uma string formatada: "[nome] tem [idade] anos e trabalha como [profissão]."

---

### ⚫ Nível 6 - Combinando Conceitos

**Exercício 16 - Array de Objetos**
Crie um array chamado `alunos` contendo 3 objetos. Cada objeto deve ter: nome, nota1 e nota2. Use um loop `for` para exibir o nome de cada aluno e sua média.

---

**Exercício 17 - Filtro de Aprovados**
Usando o array do exercício anterior, crie uma função que receba o array de alunos e retorne um novo array contendo apenas os nomes dos alunos com média maior ou igual a 7.

---

**Exercício 18 - Sistema de Cadastro**
Crie um array vazio chamado `cadastros`. Crie uma função `adicionarCadastro` que receba nome, email e idade como parâmetros, crie um objeto com esses dados e adicione ao array `cadastros`. Adicione 3 pessoas e exiba o array final.

---

**Exercício 19 - Localizador de Produto**
Crie um array de objetos representando produtos (cada um com: id, nome e preco). Crie uma função que receba um id e retorne o objeto do produto correspondente. Se não encontrar, retorne `null`.

---

**Exercício 20 - Sistema de Carrinho de Compras**
Crie um sistema com:
1. Um array de objetos `produtos` (id, nome, preco) com pelo menos 4 produtos
2. Um array vazio `carrinho`
3. Uma função `adicionarAoCarrinho` que receba um id e adicione o produto correspondente ao carrinho
4. Uma função `calcularTotal` que percorra o carrinho e retorne o valor total
5. Uma função `exibirCarrinho` que mostre todos os itens do carrinho e o total

Teste adicionando produtos e exibindo o carrinho final.

---

## 🎯 Dicas para Resolver

1. Sempre teste seu código passo a passo
2. Use `console.log()` para verificar valores intermediários
3. Leia atentamente o enunciado antes de começar
4. Não tenha medo de errar - os erros ensinam!

**Boa sorte! 🚀**

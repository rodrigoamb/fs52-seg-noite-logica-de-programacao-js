// métodos de arrays

// O que são métodos?
// métodos são funções que existem dentro de um tipo objeto.

// pessoa.nome -> nome é propriedade do objeto pessoa
// console.log() -> log() é um método que existe dentro do objeto console

const numeros = [34, 56, 78, 54];

console.log(typeof numeros);

const frutas = new Array("banana", "uva", "abacaxi", "goiaba");

console.log(frutas);

//adicionando o item no final do array - push()

numeros.push(11);

frutas.push("morango");

console.log(numeros);
console.log(frutas);

//unshift() - adiciona um item no inicio do array

frutas.unshift("maçã");

console.log(frutas);

// pop() - Remove o ultimo item do array

frutas.pop(); //tirou o morango
frutas.pop(); //tirar a goiaba

console.log(frutas);

// shift() - Remove o primeiro item do array

frutas.shift();

console.log(frutas);

//splice() - adiciona, remove ou substitui elementos em uma posição específica

const letras = ["A", "B", "C", "D"];

letras.splice(2, 1, "X");

console.log(letras);

letras.splice(1, 1);

console.log(letras);

//slice() - Retorna uma cópia de parte de um array

const carros = ["Hr-v", "corolla", "civic", "Fusca", "Gol", "Polo", "City"];

const novosCarros = carros.slice(3, 6);
console.log(novosCarros);
console.log(carros);

// -------- métodos avançados de arrays -------------

//map() - itera sobre os itens array e cria um novo array aplicando uma função para cada elemento.

// quando uma função é passada por parâmetro por outra função, chamamos de função de callback

const estoqueCarros = carros.map((item, idx) => {
  return {
    modelo: item,
    estoque: 10,
  };
});

// Desafio :

//crie uma função chamada vendaDeCarro que recebe dois parâmetros, nome do modelo e numero de quantos carros foram vendidos, execute algumas vendas

function vendaDeCarro(modelo, qntVenda) {
  const novaVenda = estoqueCarros.map((item) => {
    if (item.modelo === modelo) {
      item.estoque = item.estoque - qntVenda;
    }

    return item;
  });

  return novaVenda;
}

const venda1 = vendaDeCarro("civic", 3);

console.log(venda1);

const venda2 = vendaDeCarro("Fusca", 5);

//filter() - Retorna um novo array apenas com os elementos que atendem a uma condição

const pessoas = [
  { firstName: "Rodrigo", lastName: "Medeiros", age: 35 },
  { firstName: "Rodrigo", lastName: "Sampaio", age: 25 },
  { firstName: "Ana", lastName: "Moura", age: 40 },
];

const arrayFiltrado = pessoas.filter((item) => {
  return item.firstName === "Rodrigo";
});

console.log(arrayFiltrado);

//forEach() - itero sobre cada elemento do array

const lista = ["arroz", "feijão", "macarrão"];

lista.forEach((item) => {
  console.log(item);
});

//find() - retorna o primeiro elemento que satisfaz uma condição

const numeros2 = [10, 20, 30, 40, 50, 60];

const encontrados = numeros2.find((item) => {
  return item > 40;
});

const encontrados2 = numeros2.filter((item) => {
  return item >= 40;
});

console.log(encontrados);
console.log(encontrados2);

// some() = verifica se algum algum elemento do array atende a uma condição (true or false)

const maiorQue100 = numeros2.some((item) => {
  return item > 100;
});

console.log(maiorQue100);

const maiorQue30 = numeros2.some((item) => {
  return item > 30;
});

console.log(maiorQue30);

//every() - Verifica se TODOS os elementos atendem a uma condição (true or false)

const positivos = numeros2.every((item) => {
  return item > 0;
});
console.log(positivos);

numeros2.push(-5);

const positivos2 = numeros2.every((item) => {
  return item > 0;
});

console.log(positivos2);

// exercicios:

//1) Criar um array com alguns nomes e adicionar um novo nome no meio do array
const nomes = ["João", "Maria", "Pedro"];
nomes.splice(1, 0, "Ana");
console.log(nomes);
//2) Remover o primeiro nome do array
nomes.shift();
console.log(nomes);
//3) Criar um array de números e triplicar os valores dele
const numerosLista = [1, 2, 3, 4, 5];
const numerosTriplicados = numerosLista.map((item) => {
  return item * 3;
});
console.log(numerosTriplicados);
//4) Criar um array de notas e retornar apenas as notas acima de 7
const notas = [5, 8, 6, 9, 7];
const notasAltas = notas.filter((item) => item > 7);
console.log(notasAltas);

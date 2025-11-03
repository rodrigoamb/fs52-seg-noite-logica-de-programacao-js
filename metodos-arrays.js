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

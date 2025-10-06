//funções com JS:

//assuntos:
// Funçoes nomeadas
// função anônimas
// arrow functions
// execução da função (chamando a função)
// parametros de função e argumentos
// escopo global e escopo de bloco

//funcao que soma dois numeros

//parametro da funcao

function somaDoisNumeros(n1, n2) {
  const resultado = n1 + n2;

  console.log(resultado);
}

somaDoisNumeros(30, 20);
somaDoisNumeros(100, 200);
somaDoisNumeros(5, 3);
somaDoisNumeros(2, 2);

console.log("--------------------------");

function multiplicaDoisNumero(n1, n2) {
  const resultado = n1 * n2;

  console.log(resultado);
}

multiplicaDoisNumero(3, 2);
multiplicaDoisNumero(10, 2);
multiplicaDoisNumero(33, 3);
multiplicaDoisNumero(29, 7);

console.log("--------------------------");

//funçoes nao nomeadas

const subtraiDoisNumero = function (n1, n2) {
  const resultado = n1 - n2;
  console.log(resultado);
};

subtraiDoisNumero(10, 3);
subtraiDoisNumero(20, 17);
subtraiDoisNumero(7, 2);

console.log("--------------------------");

const divideDoisNumeros = function (n1, n2) {
  const resultado = n1 / n2;

  console.log(resultado);
};

divideDoisNumeros(10, 2);
divideDoisNumeros(30, 2);
divideDoisNumeros(25, 2);

console.log("--------------------------");

//arrow functions

const restoDaDivisaoDoisNumeros = (n1, n2) => {
  let resultado = 355;

  console.log(resultado);
};

// restoDaDivisaoDoisNumeros(10, 2);

// console.log(resultado);

// restoDaDivisaoDoisNumeros(20, 2);
// restoDaDivisaoDoisNumeros(30, 3.5);
// restoDaDivisaoDoisNumeros(300, 45);

// Crie uma função nomeada que recebe como argumento um objeto pessoa e a função mostra no console uma apresentação dessa pessoa. Exemplo "Olá eu sou Tiago, tenho 20 anos e sou programador fullstack"

const individuo = {
  nome: "Alessandro",
  idade: 25,
  profissao: "Programador Backend",
};

function apresentacao(pessoa) {
  console.log(
    `Olá eu sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`
  );
}

apresentacao(individuo);

apresentacao({
  nome: "Mariana",
  idade: 33,
  profissao: "Dentista",
});

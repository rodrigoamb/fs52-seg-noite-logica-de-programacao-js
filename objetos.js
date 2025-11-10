// ============================================
// AULA COMPLETA: OBJETOS EM JAVASCRIPT
// ============================================

// ============================================
// 1) OBJETOS EM JAVASCRIPT
// ============================================

/*
TEORIA:
- Objetos sao estruturas de dados que armazenam coleção de pares chave-valor
- S�o um dos tipos de dados mais importantes em JavaScript
- Permitem organizar dados relacionados de forma estruturada
- Podem conter propriedades (dados) e m�todos (fun��es)
- Sintaxe: { chave: valor, chave2: valor2 }
*/

// Exemplo básico de objeto
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
};

console.log("=== Exemplo de Objeto ===");
console.log(pessoa);

// ============================================
// 2) ACESSANDO PROPRIEDADES
// ============================================

/*
TEORIA:
Existem duas formas principais de acessar propriedades:
1. Nota��o de ponto: objeto.propriedade
2. Nota��o de colchetes: objeto["propriedade"]

A nota��o de colchetes � �til quando:
- O nome da propriedade cont�m espa�os ou caracteres especiais
- O nome da propriedade est� em uma vari�vel
*/

console.log("\n=== Acessando Propriedades ===");

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
console.log(pessoa["cidade"]);

// Notação de ponto
console.log("Nome (ponto):", pessoa.nome);
console.log("Idade (ponto):", pessoa.idade);

// Nota��o de colchetes
console.log("Nome (colchetes):", pessoa["nome"]);
console.log("Cidade (colchetes):", pessoa["cidade"]);

// Usando variàvel para acessar propriedade
const propriedade = "idade";
console.log("Idade (via vari�vel):", pessoa[propriedade]);

const meuArray = ["nome", "idade", "cidade"];

console.log("O que vai sair?", pessoa[meuArray[1]] + 30);

const nomeQualquer = pessoa[meuArray[0]];

console.log(`Olá meu nome é ${nomeQualquer}`);

// ============================================
// 3) CRIANDO OBJETOS
// ============================================

/*
TEORIA:
Existem v�rias formas de criar objetos:
1. Literal de objeto: { }
2. Constructor Function
3. Object.create()
4. Classes (ES6+)
*/

console.log("\n=== Criando Objetos ===");

// 1. Literal de objeto
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
};
console.log("Carro (literal):", carro);

// 2. Constructor Function
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

function Carros(nome, ano, valor, direcaoEletrica, novo) {
  (this.nome = nome),
    (this.ano = ano),
    (this.valor = valor),
    (this.direcaoEletrica = direcaoEletrica),
    (this.novo = novo);
}

const civic = new Carros("civic", 2019, 100000, true, false);
const corolla = new Carros("corolla", 2026, 200000, true, true);

const myCar = {
  modelo: "Corolla",
  marca: "Toyota",
  hodometro: 0,

  dirigir: function (km) {
    myCar.hodometro = myCar.hodometro + km;
  },
};
console.log("antes da viagem:", myCar);

myCar.dirigir(200);

console.log("depois da viagem:", myCar);

myCar.dirigir(500);

console.log("depois da viagem 2:", myCar);

console.log(civic);
console.log(corolla);

const produto1 = new Produto("Notebook", 3500);
console.log("Produto (constructor):", produto1);

// 3. Object.create()
const animal = {
  tipo: "Mamífero",
  respirar: function () {
    return "Respirando...";
  },
};
const cachorro = Object.create(animal);
cachorro.nome = "Rex";
console.log("Cachorro (Object.create):", cachorro);

// ============================================
// 4) TROCANDO VALORES E ADICIONANDO PROPRIEDADES
// ============================================

/*
TEORIA:
- Podemos modificar valores de propriedades existentes
- Podemos adicionar novas propriedades a qualquer momento
- JavaScript permite modifica��o din�mica de objetos
*/

console.log("\n=== Modificando e Adicionando Propriedades ===");

const livro = {
  titulo: "JavaScript Básico",
  autor: "Maria Silva",
};

console.log("Livro original:", livro);

// Modificando propriedade existente
livro.titulo = "JavaScript Avançado";
console.log("Título modificado:", livro.titulo);

// Adicionando nova propriedade
livro.ano = 2024;
livro.paginas = 450;
livro.disponivel = true;
console.log("Livro com novas propriedades:", livro);

// Adicionando propriedade usando colchetes
livro["editora"] = "TechBooks";
console.log("Livro completo:", livro);

const capa = "CapaFina";

livro[capa] = false;

console.log("Livro completo com capa:", livro);

// ============================================
// 5) DELETANDO PROPRIEDADES
// ============================================

/*
TEORIA:
- Usamos o operador 'delete' para remover propriedades
- Sintaxe: delete objeto.propriedade
- Retorna true se a propriedade foi deletada com sucesso
*/

console.log("\n=== Deletando Propriedades ===");

const usuario = {
  nome: "Carlos",
  email: "carlos@email.com",
  senha: "123456",
  telefone: "11999999999",
};

console.log("Usu�rio antes:", usuario);

// Deletando propriedade
delete usuario.senha;
console.log("Usu�rio ap�s deletar senha:", usuario);

// Deletando m�ltiplas propriedades
delete usuario.telefone;
console.log("Usu�rio ap�s deletar telefone:", usuario);

// ============================================
// 6) CRIANDO CLASSES
// ============================================

/*
TEORIA:
- Classes s�o templates (moldes) para criar objetos
- Introduzidas no ES6 (ECMAScript 2015)
- Facilitam a cria��o de objetos com a mesma estrutura
- Usam a palavra-chave 'class'
- M�todo constructor() � chamado automaticamente ao criar inst�ncia
*/

console.log("\n=== Criando Classes ===");

class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

const pessoa1 = new Pessoa("Ana", 30, "Desenvolvedora");
const pessoa2 = new Pessoa("Pedro", 25, "Designer");

console.log("Pessoa 1:", pessoa1);
console.log("Pessoa 2:", pessoa2);

// Classe mais complexa
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.ativa = true;
  }
}

const conta1 = new ContaBancaria("Maria", 1000);
console.log("Conta banc�ria:", conta1);

// ============================================
// 7) THIS NA CLASSE
// ============================================

/*
TEORIA:
- 'this' refere-se � inst�ncia atual do objeto
- Dentro de uma classe, 'this' aponta para o objeto criado
- Permite acessar e modificar propriedades da pr�pria inst�ncia
- Cada inst�ncia tem seu pr�prio 'this'
*/

console.log("\n=== This na Classe ===");

class Carro {
  constructor(marca, modelo) {
    this.marca = marca; // this refere-se ao objeto sendo criado
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar(valor) {
    this.velocidade += valor; // this acessa a propriedade do objeto atual
    console.log(
      `${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h`
    );
  }

  frear(valor) {
    this.velocidade -= valor;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log(
      `${this.marca} ${this.modelo} reduziu para ${this.velocidade} km/h`
    );
  }
}

const meuCarro = new Carro("Honda", "Civic");
meuCarro.acelerar(50);
meuCarro.acelerar(30);
meuCarro.frear(20);

// ============================================
// 8) M�TODOS EM OBJETOS
// ============================================

/*
TEORIA:
- M�todos s�o fun��es que pertencem a objetos
- Podem ser definidos em objetos literais ou classes
- Acessam propriedades do objeto usando 'this'
- Podem receber par�metros e retornar valores
*/

console.log("\n=== M�todos em Objetos ===");

// M�todos em objeto literal
const calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  // Sintaxe moderna (ES6)
  multiplicar(a, b) {
    return a * b;
  },
  dividir(a, b) {
    if (b === 0) return "N�o � poss�vel dividir por zero";
    return a / b;
  },
};

console.log("Soma:", calculadora.somar(10, 5));
console.log("Multiplica��o:", calculadora.multiplicar(4, 3));

// M�todos em classe
class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calcularMedia() {
    return (this.nota1 + this.nota2) / 2;
  }

  verificarAprovacao() {
    const media = this.calcularMedia();
    if (media >= 7) {
      return `${this.nome} foi APROVADO com m�dia ${media}`;
    } else {
      return `${this.nome} foi REPROVADO com m�dia ${media}`;
    }
  }

  mostrarInfo() {
    return `Aluno: ${this.nome} | Nota 1: ${this.nota1} | Nota 2: ${this.nota2}`;
  }
}

const aluno1 = new Aluno("Julia", 8, 9);
console.log(aluno1.mostrarInfo());
console.log("M�dia:", aluno1.calcularMedia());
console.log(aluno1.verificarAprovacao());

const aluno2 = new Aluno("Roberto", 5, 6);
console.log(aluno2.verificarAprovacao());

// ============================================
// EXERC�CIOS PR�TICOS
// ============================================

console.log("\n\n" + "=".repeat(50));
console.log("EXERC�CIOS PR�TICOS");
console.log("=".repeat(50));

/*
EXERC�CIO 1: Criando um Objeto Simples
Crie um objeto chamado 'filme' com as propriedades:
- titulo
- diretor
- ano
- genero
Depois, exiba todas as propriedades no console.
*/

console.log("\n--- EXERC�CIO 1 ---");
// Sua resposta aqui:
const filme = {
  titulo: "Matrix",
  diretor: "Wachowski",
  ano: 1999,
  genero: "Fic��o Cient�fica",
};
console.log("Filme:", filme);

/*
EXERC�CIO 2: Acessando Propriedades
Usando o objeto 'filme' do exerc�cio anterior:
- Acesse o t�tulo usando nota��o de ponto
- Acesse o ano usando nota��o de colchetes
- Crie uma vari�vel com o nome de uma propriedade e use-a para acessar o valor
*/

console.log("\n--- EXERC�CIO 2 ---");
// Sua resposta aqui:
console.log("T�tulo:", filme.titulo);
console.log("Ano:", filme["ano"]);
const prop = "genero";
console.log("G�nero:", filme[prop]);

/*
EXERC�CIO 3: Modificando e Adicionando Propriedades
Crie um objeto 'celular' com marca e modelo.
Depois:
- Modifique o modelo
- Adicione as propriedades: preco, cor, armazenamento
- Exiba o objeto completo
*/

console.log("\n--- EXERC�CIO 3 ---");
// Sua resposta aqui:
const celular = {
  marca: "Samsung",
  modelo: "Galaxy S20",
};
celular.modelo = "Galaxy S23";
celular.preco = 2500;
celular.cor = "Preto";
celular.armazenamento = "128GB";
console.log("Celular:", celular);

/*
EXERC�CIO 4: Deletando Propriedades
Crie um objeto 'produto' com: nome, preco, desconto, categoria, estoque
Delete as propriedades 'desconto' e 'estoque'
Exiba o objeto final
*/

console.log("\n--- EXERC�CIO 4 ---");
// Sua resposta aqui:
const produto = {
  nome: "Teclado Mec�nico",
  preco: 450,
  desconto: 10,
  categoria: "Perif�ricos",
  estoque: 50,
};
delete produto.desconto;
delete produto.estoque;
console.log("Produto final:", produto);

/*
EXERC�CIO 5: Criando uma Classe Simples
Crie uma classe 'Livro' com:
- Constructor que recebe: titulo, autor, paginas
- Crie 2 inst�ncias de livros diferentes
- Exiba as inst�ncias no console
*/

console.log("\n--- EXERC�CIO 5 ---");
// Sua resposta aqui:
class Livro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
}

const livro1 = new Livro("Clean Code", "Robert Martin", 464);
const livro2 = new Livro(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  176
);
console.log("Livro 1:", livro1);
console.log("Livro 2:", livro2);

/*
EXERC�CIO 6: Classe com M�todos
Crie uma classe 'Retangulo' com:
- Constructor que recebe largura e altura
- M�todo calcularArea() que retorna largura * altura
- M�todo calcularPerimetro() que retorna 2 * (largura + altura)
- M�todo descrever() que retorna uma string descritiva
Crie uma inst�ncia e teste todos os m�todos
*/

console.log("\n--- EXERC�CIO 6 ---");
// Sua resposta aqui:
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }

  descrever() {
    return `Ret�ngulo de ${this.largura}x${
      this.altura
    } - �rea: ${this.calcularArea()} - Per�metro: ${this.calcularPerimetro()}`;
  }
}

const retangulo = new Retangulo(10, 5);
console.log("�rea:", retangulo.calcularArea());
console.log("Per�metro:", retangulo.calcularPerimetro());
console.log(retangulo.descrever());

/*
EXERC�CIO 7: Classe ContaBancaria Completa
Crie uma classe 'ContaBancaria' com:
- Constructor: titular, saldo inicial
- Propriedade: numeroConta (gere um n�mero aleat�rio)
- M�todo depositar(valor): adiciona valor ao saldo
- M�todo sacar(valor): remove valor do saldo (verificar se h� saldo suficiente)
- M�todo consultarSaldo(): retorna o saldo atual
- M�todo transferir(valor, contaDestino): transfere valor para outra conta
*/

console.log("\n--- EXERC�CIO 7 ---");
// Sua resposta aqui:
class ContaBancaria2 {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.numeroConta = Math.floor(Math.random() * 1000000);
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(
      `Dep�sito de R$${valor} realizado. Saldo atual: R$${this.saldo}`
    );
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
      return false;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    return true;
  }

  consultarSaldo() {
    console.log(`Saldo de ${this.titular}: R$${this.saldo}`);
    return this.saldo;
  }

  transferir(valor, contaDestino) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para transfer�ncia!");
      return false;
    }
    this.saldo -= valor;
    contaDestino.saldo += valor;
    console.log(
      `Transfer�ncia de R$${valor} realizada de ${this.titular} para ${contaDestino.titular}`
    );
    return true;
  }
}

const conta01 = new ContaBancaria2("Jo�o Silva", 1000);
const conta02 = new ContaBancaria2("Maria Santos", 500);

conta01.consultarSaldo();
conta01.depositar(200);
conta01.sacar(150);
conta01.transferir(300, conta02);
conta01.consultarSaldo();
conta02.consultarSaldo();

/*
EXERC�CIO 8: Sistema de Produtos (Desafio)
Crie uma classe 'Produto' com:
- Constructor: nome, preco, quantidadeEstoque
- M�todo vender(quantidade): reduz o estoque (verificar disponibilidade)
- M�todo repor(quantidade): aumenta o estoque
- M�todo aplicarDesconto(porcentagem): reduz o pre�o
- M�todo calcularValorEstoque(): retorna preco * quantidade
- M�todo estaDisponivel(): retorna true se quantidade > 0
*/

console.log("\n--- EXERC�CIO 8 (DESAFIO) ---");
// Sua resposta aqui:
class ProdutoCompleto {
  constructor(nome, preco, quantidadeEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
  }

  vender(quantidade) {
    if (quantidade > this.quantidadeEstoque) {
      console.log(
        `Estoque insuficiente! Dispon�vel: ${this.quantidadeEstoque}`
      );
      return false;
    }
    this.quantidadeEstoque -= quantidade;
    console.log(`Venda realizada: ${quantidade} unidades de ${this.nome}`);
    console.log(`Estoque restante: ${this.quantidadeEstoque}`);
    return true;
  }

  repor(quantidade) {
    this.quantidadeEstoque += quantidade;
    console.log(`Reposi��o realizada: ${quantidade} unidades de ${this.nome}`);
    console.log(`Estoque atual: ${this.quantidadeEstoque}`);
  }

  aplicarDesconto(porcentagem) {
    const desconto = this.preco * (porcentagem / 100);
    this.preco -= desconto;
    console.log(`Desconto de ${porcentagem}% aplicado em ${this.nome}`);
    console.log(`Novo pre�o: R$${this.preco.toFixed(2)}`);
  }

  calcularValorEstoque() {
    const valorTotal = this.preco * this.quantidadeEstoque;
    console.log(
      `Valor total em estoque de ${this.nome}: R$${valorTotal.toFixed(2)}`
    );
    return valorTotal;
  }

  estaDisponivel() {
    return this.quantidadeEstoque > 0;
  }
}

const produtoLoja = new ProdutoCompleto("Notebook", 3000, 10);
console.log("Dispon�vel?", produtoLoja.estaDisponivel());
produtoLoja.vender(3);
produtoLoja.repor(5);
produtoLoja.aplicarDesconto(10);
produtoLoja.calcularValorEstoque();

// ============================================
// EXERC�CIOS PARA PRATICAR (SEM RESPOSTA)
// ============================================

console.log("\n\n" + "=".repeat(50));
console.log("EXERC�CIOS ADICIONAIS PARA PR�TICA");
console.log("=".repeat(50));

/*
EXERC�CIO 9: Sistema de Biblioteca
Crie uma classe 'LivroBiblioteca' que contenha:
- Constructor: titulo, autor, isbn, disponivel (true por default)
- M�todo emprestar(): marca o livro como n�o dispon�vel
- M�todo devolver(): marca o livro como dispon�vel
- M�todo getInfo(): retorna informa��es completas do livro
Teste com pelo menos 2 livros
*/

console.log("\n--- EXERC�CIO 9 (PARA PRATICAR) ---");
// Fa�a sua implementa��o aqui:

/*
EXERC�CIO 10: Carrinho de Compras
Crie uma classe 'CarrinhoCompras' que contenha:
- Constructor: vazio, inicia com array de produtos vazio
- M�todo adicionarProduto(produto): adiciona produto ao carrinho
- M�todo removerProduto(nomeProduto): remove produto pelo nome
- M�todo calcularTotal(): soma os pre�os de todos os produtos
- M�todo listarProdutos(): exibe todos os produtos
- M�todo limparCarrinho(): remove todos os produtos
*/

console.log("\n--- EXERC�CIO 10 (PARA PRATICAR) ---");
// Fa�a sua implementa��o aqui:

/*
EXERC�CIO 11: Sistema de Funcion�rios
Crie uma classe 'Funcionario' com:
- Constructor: nome, cargo, salario, dataAdmissao
- M�todo aumentarSalario(porcentagem): aumenta o sal�rio
- M�todo promover(novoCargo, aumentoSalario): muda cargo e sal�rio
- M�todo calcularTempoEmpresa(): retorna tempo de empresa em anos
- M�todo exibirFichaTecnica(): mostra todas as informa��es
*/

console.log("\n--- EXERC�CIO 11 (PARA PRATICAR) ---");
// Fa�a sua implementa��o aqui:

/*
EXERC�CIO 12: Jogo de RPG (Desafio Avan�ado)
Crie uma classe 'Personagem' com:
- Constructor: nome, classe (guerreiro, mago, arqueiro), vida, mana
- Propriedades: nivel (come�a em 1), experiencia (come�a em 0)
- M�todo atacar(): retorna dano baseado na classe
- M�todo receberDano(dano): reduz vida
- M�todo usarMagia(custoMana): usa mana se dispon�vel
- M�todo ganharExperiencia(xp): adiciona xp e sobe n�vel a cada 100xp
- M�todo curar(quantidade): recupera vida (max: 100)
- M�todo estaVivo(): retorna true se vida > 0
*/

console.log("\n--- EXERC�CIO 12 (DESAFIO AVAN�ADO) ---");
// Fa�a sua implementa��o aqui:

// ============================================
// RESUMO DA AULA
// ============================================

console.log("\n\n" + "=".repeat(50));
console.log("RESUMO DA AULA");
console.log("=".repeat(50));

console.log(`
1. OBJETOS EM JAVASCRIPT
   - Estruturas de dados com pares chave-valor
   - Sintaxe: { chave: valor }

2. ACESSANDO PROPRIEDADES
   - Nota��o de ponto: objeto.propriedade
   - Nota��o de colchetes: objeto["propriedade"]

3. CRIANDO OBJETOS
   - Literal: { }
   - Constructor Function
   - Object.create()
   - Classes

4. MODIFICANDO OBJETOS
   - Trocar valores: objeto.propriedade = novoValor
   - Adicionar: objeto.novaPropriedade = valor

5. DELETANDO PROPRIEDADES
   - Operador delete: delete objeto.propriedade

6. CLASSES
   - Template para criar objetos
   - Constructor para inicializar propriedades

7. THIS
   - Refer�ncia ao objeto atual
   - Acessa propriedades da inst�ncia

8. M�TODOS
   - Fun��es dentro de objetos/classes
   - Usam this para acessar propriedades
`);

console.log("=".repeat(50));
console.log("FIM DA AULA - BOM ESTUDO! =�");
console.log("=".repeat(50));

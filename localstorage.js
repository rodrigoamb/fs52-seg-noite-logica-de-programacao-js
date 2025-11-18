// LOCALSTORAGE

// o que é localStorage?
// O localStorage é uma API de armazenamento web que permite que os navegadores armazenem dados localmente no dispositivo do usuário. Ele é usado para salvar informações que precisam ser persistentes entre sessões de navegação, como preferências do usuário, dados de formulários, ou qualquer outro tipo de informação que você queira manter mesmo após o navegador ser fechado.

const meuNome = "Rodrigo";

//enviando dado para o localstorage
localStorage.setItem("nome", meuNome);

//trazendo o dado do localstorage
const resgatandoDado = localStorage.getItem("nome");

console.log(resgatandoDado);

//trabalhando com objetos (JSON)

const pessoa = {
  nome: "Rafael",
  idade: 35,
  profissao: "programador",
};

//O que é JSON?
// JSON (JavaScript Object Notation) é um formato leve de troca de dados que é fácil para os humanos lerem e escreverem, e fácil para as máquinas analisarem e gerarem. Ele é amplamente utilizado para transmitir dados entre um servidor e uma aplicação web como texto simples.

localStorage.setItem("pessoa", JSON.stringify(pessoa));

//criem uma lista de tarefas (um array de objetos)

const tasks = [
  {
    id: 1,
    task: "Estudar programacão",
  },
  {
    id: 2,
    task: "Pagar conta do cartão",
  },
  {
    id: 3,
    task: "Fazer o mercantil da semana",
  },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

const dadoJSON = localStorage.getItem("tasks");

const minhasTarefas = JSON.parse(dadoJSON);

console.log(minhasTarefas);

//removendo o dado do localstorage

localStorage.removeItem("nome");
localStorage.removeItem("pessoa");

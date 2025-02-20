// Comentário em uma linha

/*
Comentário em várias linhas
*/

// Variáveis
const nome = "Fulano";
let idade = 20;
const maiorDeIdade = true;

// maiorDeIdade = false; // Erro
idade = 22; // Ok

// Operadores
var soma = 2 + 2;
var subtracao = 5 - 3;
var multiplicacao = 3 * 3;
var divisao = 10 / 2;
var resto = 10 % 3;

// Operadores de comparação
var igual = 2 == 2;
var diferente = 2 != 3;
var maior = 3 > 2;
var menor = 2 < 3;
var maiorOuIgual = 3 >= 2;
var menorOuIgual = 2 <= 3;

// Operadores lógicos
var e = true && true;
var ou = true || false;
var negacao = !true;

// Estruturas condicionais
if (idade >= 18) {
  console.log("Maior de idade");
}
else {
  console.log("Menor de idade");
}

if (idade >= 18) {
  console.log("Maior de idade");
}
else if (idade >= 16) {
  console.log("Quase maior de idade");
}
else {
  console.log("Menor de idade");
}

// Operador ternário
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";


// Switch
const diaDaSemana = 3;
switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}

// Estruturas de repetição
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Arrays
const frutas = ["Banana", "Maçã", "Uva"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas.length);

frutas.forEach((fruta) => {
  console.log(fruta);
});

frutas.push("Pera");
console.log(frutas);

frutas.pop();
console.log(frutas);

// Funções
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

const imc = calcularIMC(80, 1.80);
console.log(imc);

// Arrow functions
const calcularIMC2 = (peso, altura) => peso / (altura * altura);
const imc2 = calcularIMC2(80, 1.80);
console.log(imc2);

// Funções anônimas
const calcularIMC3 = function (peso, altura) {
  return peso / (altura * altura);
}
const imc3 = calcularIMC3(80, 1.80);
console.log(imc3);

// Funções sem retorno
function imprimirNome(nome) {
  console.log(nome);
}

imprimirNome("Fulano");

// Objetos

const pessoa = {
  nome: "Fulano",
  idade: 20,
  altura: 1.80,
  peso: 80
};

console.log(pessoa.nome);

pessoa.nome = "Ciclano";

console.log(pessoa.nome);

console.log(pessoa);

console.log(pessoa.genero)

// Desestruturação de objetos

const { altura, peso } = pessoa;

console.log(altura);
console.log(peso);

// Propagação de objetos

const pessoa2 = {
  ...pessoa,
  cidade: "São Paulo"
};

console.log(pessoa2);

const pessoa3 = {
  nome: "Beltrano",
  idade: 30
};

const endereco3 = {
  cidade: "Rio de Janeiro",
  estado: "RJ"
}

const pessoa4 = {
  ...pessoa3,
  ...endereco3
}

console.log(pessoa4);

// Modulos -> Importando

import { tabelaIMC, calculaIMC } from './calculadoraIMC.js';

console.log(tabelaIMC);

const resultadoIMC = calculaIMC(80, 1.80);
console.log(resultadoIMC);

import * as calculadoraIMC from './calculadoraIMC.js';

console.log(calculadoraIMC.tabelaIMC)
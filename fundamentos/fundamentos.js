// #AULA01

//var x = 2;
//let y = 3; // int
let nome = "gabriel"; // string
const xx = 2; // constante
let boolean = true; // Boolean

let meuObjeto = {}; // Object
let meuArray = []; // Array
let minhaNull = null; // null
let meuUndefined = undefined; //undefined


// consoles
//console.log(nome);
//console.log(xx);
//console.log(typeof meuUndefined)

let teste = 1;
const PI = 3.14;

console.log(teste, PI);

// Operadores aritiméticos
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// Operadores de comparação
//console.log(x === y);
//console.log(x != y);

const x = 10;
const y = 5;

// Operadores lógicos
console.log(x > y && y < 10);
console.log(x > y || y > 10);

// Conversão de tipos
const meuNumero = "123";
const meuNumeroConvertido = Number(meuNumero);

console.log(typeof meuNumero);
console.log(typeof meuNumeroConvertido);

// Condições if, else if, else

// Aprovado se media for maior
// ou igual a 6
//const media = 7;

// if (idade <= 13) {
//     console.log("Criança");
// } else if (idade < 20) {
//     console.log("Adolescente");
// } else {
//     console.log("Adulto");
// }

// #AULA02

let nota1 = 5;
let nota2 = 4;
let nota3 = 8;

let media = (nota1 + nota2 + nota3)/3;

if (media>=6){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Switch case
const fruta = "safsa";

switch (fruta) {
    case "Banana":
        console.log("Banana é a fruta");
        break;
    case "Maçã":
        console.log("Maçã é a fruta");
        break;
    default:
        console.log("Fruta não encontrada");
        
}

// Estruturas de repetição
// 1,2,3,4,5... => dependendo de uma condição

// contador, condição de limite, incremento
for(let i = 10; i >= 5; i--){
    console.log("O valor de i é: " + i);
}

// while
let k = 0;

while(k < 5){
    console.log("O valor de k é: " + k);
    k++;
}

// do while
let j = 0;

do {
    console.log("O valor de j é: " + j);
    j++;
} while(j < 5);

// funções
// function nome(arg1, arg2) {corpo}

function comprimentar(nome1, nome2){
    console.log("Olá " +nome1 + " e " +nome2);
}

comprimentar("Gabriel", "James");

// arrow fuction = >

const testeArrow = () => console.log("Isso também é um função");

testeArrow(); 

// array, listas

const numeros = [1,2,3,4,5];

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[4]);
console.log(numeros[5]);

numeros.push(6);

console.log(numeros);
console.log(numeros[5]);

numeros.pop();
numeros.pop();
console.log(numeros);

// strings
const minhaStringNova = "Olá mundo";

// concatenação = +
const minhaString2 = minhaStringNova + " como vc está?";

console.log(minhaString2);

// interpolção
const minhaString3 = `${minhaStringNova} como vc está?`;
console.log(minhaString3);

console.log(minhaString3.length);
console.log(minhaString3[2]);

// MAIUSCULO
console.log(minhaString3.toUpperCase());
// minusculo
console.log(minhaString3.toLowerCase());

// Data e Hora
const agora = new Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

// Objeto Math

// Número PI
console.log(Math.PI);

// Arredondamento
console.log(Math.round(3.6));

// Raiz quadrada
console.log(Math.sqrt(25));

// Potência
console.log(Math.pow(2, 3));
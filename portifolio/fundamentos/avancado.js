// Avançando em JavaScript

// Manipulação de arrays

const frutas = ["Maçã", "Banana"];
frutas.unshift("Laranja"); // Adicionar "Laranja" no começo do array
console.log(frutas);

frutas.shift(); // Remove o primeiro elemento do array
console.log(frutas);

const numeros = [1, 2, 3, 4, 5, 6];
// Encontra o primeiro numero par do array
const numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar); // 2

const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares); // 2, 4, 6

// Manipulação de strings avançada
const frase = " Olá, mundo! ";
console.log(frase);
//Remove espaços extras
const stringSemEspacos = frase.trim()
console.log(stringSemEspacos);
//Remove espaços extra e divide a string em palavras
const palavras = frase.trim().split(" ");
console.log(palavras); 

const frase2 = "Javascript é massa!";
console.log(frase2.startsWith("Java")) // true
console.log(frase2.endsWith("!")) // true

// Exceções e tratamento de erros
// const idade = 15;
// if (idade < 18) {
//     throw new Error("Você deve ter pelo menos 18 anos.");
// }

// try {
//     const idade = 15;
//     if (idade < 18) {
//             throw new Error("Você deve ter pelo menos 18 anos.");
//         }
// } catch (erro) {
//     console.log(erro.message);
// }

// Callbacks

function cumprimentar(nome, callback) {
    console.log("Olá, " + nome);
    callback();
}

function mostrarSaudacao() {
    console.log("Como você está?");
}

cumprimentar("Maria", mostrarSaudacao);

// setTimeout
// function mostrarMensagem() {
//     console.log("Esta é uma mensagem após 3 segundos.");
// }

// setTimeout(mostrarMensagem, 3000);

// Promises
const promessa = new Promise((resolve, reject) => {
    const condicao = true;
    if (condicao){
        resolve("A condição é verdadeira!")
    } else {
        reject("A condição é falsa!")
    }
});

promessa
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));

const promessa1 = Promise.resolve(3);
const promessa2 = new Promise((resolve, reject) => 
    setTimeout(resolve, 100, "foo")
);

Promise.all([promessa1, promessa2]).then((valores) => console.log(valores));

// Async/Await
async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Valor obtido!"), 2000);
    });

    const valor = await promessa;
    console.log(valor);
}

obterValor();

async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject("Erro ao obter valor!"), 2000);
        });

        const valor = await promessa;
        console.log(valor);
    } catch (erro) {
        console.log(erro); // "Erro ao obter valor!"
    }
}
obterValorComErro();

// Json (JavaScript Object Notation)

const objeto = {nome: "João", idade: 30};
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // "{"nome":"João","idade":30}"

const jsonString2 = '{"nome":"João", "idade":30}';
const objeto2 = JSON.parse(jsonString2);
console.log(objeto2.nome);


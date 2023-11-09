//Exercício 1: Olá, Mundo!
// Ex1: Crie um script JS que imprima "Olá, mundo!" no console
console.log("Olá, Mundo!");

// Exercicio 2: Conversão de tipo
// Dado o valor de uma string "1234", converta em numero
// e exiba o tipo da variavel no console.
const meuNumero = "1234";
const meuNumeroConvertido = Number(meuNumero);

console.log(typeof meuNumero);
console.log(typeof meuNumeroConvertido);

// Exercício 3: Manipulação de Strings
// Dado uma string "Javascript é massa", escreva um código que
// conte quantos caracteres a string possui 
// e quantas palavras existem na frase

const minhaString = "Javascript é massa";
const numeroDeString = minhaString.length;
const numeroDePalavras = minhaString.split(" ").length;

console.log(numeroDeString);
console.log(numeroDePalavras);

// Exercício 4: If, else if, else
// Declare uma variável chamada numero e atribua um valor. 
// Verifique se o número é positivo, negativo ou zero. 
// Imprima no console o resultado correspondente.
const num = -5;
if (num > 0){
    console.log("Positivo");
} else if (num < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

//Exercício 5: FOR
// Crie um array com números de 1 a 10. Utilize um loop for 
// para imprimir cada número multiplicado por 2 no console.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]*2);
}

// Exercício 6: FOR
// Crie um array com três frutas diferentes. Use um loop for 
// para imprimir cada fruta no console, precedida pela frase 
// "Eu gosto de ".

const frutas = ["Maçã", "Uva", "Murango"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Eu gosto de " + frutas[i]);
}

// Exercício 7: FOR
// Declare um array com cinco números. Utilize um loop for 
// para calcular a soma, multiplicação, 
// raiz quadrada e potencia da soma
// de todos os elementos do array e imprima o resultado no console.

const number = [1, 2, 3, 4 ,5];
let soma = 0;
let multiplicacao = 1;
for (let i = 0; i < number.length; i++) {
    soma = soma + number[i];
    multiplicacao = multiplicacao * number[i];
}
console.log(soma);
console.log(multiplicacao);
console.log(Math.sqrt(soma));
console.log(Math.pow(soma, 2));

// Exercício 8: FOR
// Crie um array com palavras de uma frase. 
// Use um loop for para imprimir cada palavra, 
// mas apenas se a palavra tiver mais de 3 letras.
const frase = ["Esta", "é", "uma", "frase", "de", "exemplo"];
for (let i = 0; i < frase.length; i++) {
    if(frase[i].length > 3){
        console.log(frase[i]);
    }
}
// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens a lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const listaDeCompras = [];
listaDeCompras.push("Pão", "Bolo", "Queijo", "Manteiga", "Suquinho");
listaDeCompras.shift();
console.log(listaDeCompras);

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número que é
// divisível por 7 e maior que 10.

const numeros = [3, 7, 14, 21, 29, 36, 42];
const resultado = numeros.find((num) => num % 7 === 0 && num > 10);
console.log(resultado);

// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha
// apenas os numeros que são maiores que 20.

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40];
const filtrados = numeros2.filter((num) => num > 20);
console.log(filtrados);

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no inicio e no final da string.
// Divida a string em palavras.

const frase = " Bom dia, mundo! ";
const palavras = frase.trim().split(" ");
console.log(palavras); // ["Bom", "dia,", "mundo!"]

// Exercício de Manipulação de String - startsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" 
// e termina com a palavra "Roma".

const frase2 = "O rato roeu a roupa do rei de Roma";
const comeca = frase2.startsWith("O");
const termina = frase2.endsWith("Roma");
console.log(`Começa com 'O'? ${comeca}`); // true
console.log(`Termina com 'Roma'? ${termina}`); // true

// AULA05 - DOM (Document Object Model)

// Selecionando elementos no DOM

// Selecionando um elemento pelo id
const elementoPorId = document.querySelector("#meuId");
console.log(elementoPorId);

// Selecionando todos os elemento com a classe 'minhaClasse'
const elementoPorClasse = document.querySelectorAll(".minhaClasse");
console.log(elementoPorClasse);

// Manipulando conteúdo de texto
const elemento = document.querySelector("#meuId");

// Obtendo o conteúdo de texto
console.log(elemento.textContent);

// Alterando o conteúdo de texto
elemento.textContent = "Novo conteúdo";
console.log(elemento.textContent);

// Trabalhando com atributos
const link = document.querySelector("a");

// Obtendo um atributo
console.log(link.getAttribute("href"));


// Questões
const question = [
    {
        question: "Qual estrutura de programação é utilizada para tratamento de erros?",
        choices: ["for", "do while", "try catch", "switch case"],
        answer: "try catch",
    },
    {
        question: "Qual é a forma correta de declarar uma variável em JavaScript?",
        choices: ["variable x", "var x", "let x", "const x"],
        answer: "let x",
    },
    {
        question: "O que é DOM em JavaScript?",
        choices: ["DocumentObjectModel", "DocumentOrderModel", "DynamicObjectMarkup", "DataObjectMethod"],
        answer: "DocumentObjectModel",
    },
    {
        question: "O que é DOM em JavaScript?",
        choices: ["DocumentObjectModel", "DocumentOrderModel", "DynamicObjectMarkup", "DataObjectMethod"],
        answer: "DocumentObjectModel",
    },
    {
        question: "Qual método é utilizado para adicionar um ouvinte de eventos a um elemento HTML em JavaScript?",
        choices: ["addEvent", "attachEvent", "addEventListener", "eventListener"],
        answer: "addEventListener",
    },
    {
        question: "Como se chama a estrutura de controle de fluxo que executa um bloco de código se uma condição for verdadeira e outro se for falsa?",
        choices: ["if else", "for", "switch case", "while"],
        answer: "if else",
    },
];

// Seleção dos elementos
const questionElement = document.getElementById("question");
const choiceElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const errorElement = document.getElementById("error");

// Variáveis globais
let currentQuestion = 0;
let score = 0;
let error = 0;
let answerChosen = false;

// Funções
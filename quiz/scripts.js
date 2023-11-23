// Questões
const questions = [
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
function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
    
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerText = choices[i];
    }

    answerChosen = false;
}

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function checkAnswer(e) {
    if (answerChosen) return;
    answerChosen = true;

    if (e.target.innerText === questions[currentQuestion].answer) {
        score++;
        scoreElement.innerText = "Pontuação: " + score;
        alert("Correto!");
    } else {
        error++;
        errorElement.innerText = "Erros: " + error;
        alert(
            "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
        );
    }
}

choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
});

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    error = 0;
    scoreElement.innerText = "Pontuação: 0";
    errorElement.innerText = "Erros: 0";
    loadQuestion();
}

nextButton.addEventListener("click", () => {
    if (!answerChosen) {
        alert("Por favor, escolha uma resposta antes de prosseguir.");
        return;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(
            "Fim do Quiz! Você acertou " +
            score +
            " de " +
            questions.length +
            " perguntas."
        );
        restartQuiz();
    }
});

loadQuestion();
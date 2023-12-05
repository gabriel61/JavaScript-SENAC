import { divisao } from "./math/divisao.js";
import { fatorial } from "./math/fatorial.js";
import { media } from "./math/media.js";
import { multiplicacao } from "./math/multiplicacao.js";
import { porcentagem } from "./math/porcentagem.js";
import { potencia } from "./math/potencia.js";
import { raizQuadrada } from "./math/raiz-quadrada.js";
import { soma } from "./math/soma.js";
import { subtracao } from "./math/subtracao.js";       

export class App {
    static initialize(document) {

        const btnCalcular = document.getElementById("btn-calcular");
        const num1 = document.getElementById("num1");
        const num2 = document.getElementById("num2");

        const resultadoSoma = document.getElementById("resultado-soma");
        const resultadoSomaInstead = document.getElementById(
            "resultado-soma-instead"
        );

        const resultadoSubtracao = document.getElementById("resultado-subtracao");
        const resultadoSubtracaoInstead = document.getElementById(
            "resultado-subtracao-instead"
        );

        const resultadoMultiplicacao = document.getElementById("resultado-multiplicacao");
        const resultadoMultiplicacaoInstead = document.getElementById(
            "resultado-multiplicacao-instead"
        );

        const resultadoDivisao = document.getElementById("resultado-divisao");
        const resultadoDivisaoInstead = document.getElementById(
            "resultado-divisao-instead"
        );

        const resultadoPorcentagem = document.getElementById("resultado-porcentagem");
        const resultadoPorcentagemInstead = document.getElementById(
            "resultado-porcentagem-instead"
        );

        const resultadoFatorial = document.getElementById("resultado-fatorial");
        const resultadoFatorialInstead = document.getElementById(
            "resultado-fatorial-instead"
        );

        const resultadoRaizQuadrada = document.getElementById("resultado-raiz-quadrada");
        const resultadoRaizQuadradaInstead = document.getElementById(
            "resultado-raiz-quadrada-instead"
        );

        const resultadoPotencia = document.getElementById("resultado-potencia");
        const resultadoPotenciaInstead = document.getElementById(
            "resultado-potencia-instead"
        );

        const resultadoMedia = document.getElementById("resultado-media");
        const resultadoMediaInstead = document.getElementById(
            "resultado-media-instead"
        );

        btnCalcular.addEventListener("click", () => {

            resultadoDivisao.innerHTML = divisao(num1.value, num2.value);
            resultadoDivisaoInstead.innerHTML = divisao(num2.value, num1.value);

            resultadoFatorial.innerHTML = fatorial(num1.value);
            resultadoFatorialInstead.innerHTML = fatorial(num2.value);

            resultadoMedia.innerHTML = media(num1.value, num2.value);
            resultadoMediaInstead.innerHTML = media(num2.value, num1.value);

            resultadoMultiplicacao.innerHTML = multiplicacao(num1.value, num2.value);
            resultadoMultiplicacaoInstead.innerHTML = multiplicacao(num2.value, num1.value);

            resultadoPorcentagem.innerHTML = porcentagem(num1.value, num2.value) + "%";
            resultadoPorcentagemInstead.innerHTML = porcentagem(num2.value, num1.value) + "%";

            resultadoPotencia.innerHTML = potencia(num1.value, num2.value);
            resultadoPotenciaInstead.innerHTML = potencia(num2.value, num1.value);

            resultadoRaizQuadrada.innerHTML = raizQuadrada(num1.value);
            resultadoRaizQuadradaInstead.innerHTML = raizQuadrada(num2.value);

            resultadoSoma.innerHTML = soma(num1.value, num2.value);
            resultadoSomaInstead.innerHTML = soma(num2.value, num1.value);

            resultadoSubtracao.innerHTML = subtracao(num1.value, num2.value);
            resultadoSubtracaoInstead.innerHTML = subtracao(num2.value, num1.value);
            
        });
    }
}
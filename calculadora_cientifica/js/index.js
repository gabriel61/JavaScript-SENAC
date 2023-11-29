import { soma } from "../math/soma.js";
import { subtracao } from "../math/subtracao.js";
import { multiplicacao } from "../math/multiplicacao.js";
import { divisao } from "../math/divisao.js";
import { pocentagem } from "../math/pocentagem.js";
import { potencia } from "../math/potencia.js";
import { fatorial } from "../math/fatorial.js";
import { raizQuadrada } from "../math/raiz-quadrada.js";
import { media } from "../math/media.js";

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
    }
}
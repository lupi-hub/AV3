// =====================================================
// V3
// SIMULAÇÃO DA PROGRESSÃO DO GLAUCOMA
// =====================================================

const v3Slider = document.querySelector(".v3-slider");
const v3Escuro = document.querySelector(".v3-escuro");
const v3Porcentagem = document.querySelector(".v3-porcentagem");

if (v3Slider && v3Escuro && v3Porcentagem) {

    // Estado inicial
    v3Escuro.style.background = "transparent";

    v3Slider.addEventListener("input", function () {

        const valor = Number(this.value);

        // Atualiza texto
        v3Porcentagem.textContent =
            "Perda visual: " + valor + "%";


        // =================================================
        // 0%
        // =================================================

        if (valor === 0) {

            v3Escuro.style.background =
                "transparent";

            return;
        }


const tamanhoVisao = 80 - valor;

v3Escuro.style.background =
    `radial-gradient(
        circle at center,
        transparent 0%,
        transparent ${tamanhoVisao}%,
        rgba(0, 0, 0, 0.2) ${tamanhoVisao + 5}%,
        rgba(0, 0, 0, 0.6) ${tamanhoVisao + 12}%,
        #000 ${tamanhoVisao + 20}%
    )`;

    });

}
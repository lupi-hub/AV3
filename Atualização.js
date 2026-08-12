// =====================================================
// ATUALIZAÇÃO V2
// ENTRADA CIRCULAR
// =====================================================


// =====================================================
// ELEMENTOS
// =====================================================

const botaoV2 = document.querySelector("#botao-iniciar");
const introV2 = document.querySelector("#intro-screen");
const textoV2 = document.querySelector("#intro-text");
const porcentagemV2 = document.querySelector("#porcentagem");

// =====================================================
// DESATIVA O SISTEMA ANTIGO DA INTRO
// =====================================================

const introOverlayV2 =
    document.querySelector(".intro-overlay");

if (introOverlayV2) {

    introOverlayV2.style.display = "none";

}

// =====================================================
// CRIA O CÍRCULO AUTOMATICAMENTE
// =====================================================

let circuloV2 = document.querySelector("#circulo-visao");

if (!circuloV2 && introV2) {

    circuloV2 = document.createElement("div");

    circuloV2.id = "circulo-visao";

    introV2.insertBefore(
        circuloV2,
        introV2.firstChild
    );

}


// =====================================================
// PROGRESSO
// =====================================================

window.progressoV2 = 0;


// =====================================================
// SISTEMA DA V2
// =====================================================

if (
    introV2 &&
    textoV2 &&
    porcentagemV2 &&
    botaoV2 &&
    circuloV2
) {


    // =================================================
    // IMPEDE O COMPORTAMENTO ANTIGO DO BOTÃO
    // =================================================

    const novoBotao = botaoV2.cloneNode(true);

    botaoV2.parentNode.replaceChild(
        novoBotao,
        botaoV2
    );


    // =================================================
    // CLIQUE
    // =================================================

    novoBotao.addEventListener("click", function () {


        // =================================================
        // SE CHEGOU EM 100%
        // O PRÓXIMO CLIQUE ENTRA NO SITE
        // =================================================

        if (window.progressoV2 >= 100) {

            introV2.classList.add("saindo");


            setTimeout(function () {

                introV2.style.display = "none";

            }, 1000);


            return;
        }


        // =================================================
        // AUMENTA 10%
        // =================================================

        window.progressoV2 += 10;


        // =================================================
        // ATUALIZA PORCENTAGEM
        // =================================================

        porcentagemV2.innerHTML =
            window.progressoV2 + "%";


        // =================================================
        // REVELAÇÃO CIRCULAR
        // =================================================

       const maiorDimensao =
    Math.max(
        window.innerWidth,
        window.innerHeight
    );

const raioMaximo =
    maiorDimensao * 0.6;

const raioAtual =
    raioMaximo *
    (window.progressoV2 / 100);

introV2.style.setProperty(
    "--raio-visao",
    raioAtual + "px"
);

        // =================================================
        // MENSAGENS
        // =================================================

        if (window.window.progressoV2 === 10) {

            textoV2.innerHTML =
                "Iniciando análise...";

        }

        else if (window.window.progressoV2 === 20) {

            textoV2.innerHTML =
                "Analisando o sistema visual...";

        }

        else if (window.progressoV2 === 30) {

            textoV2.innerHTML =
                "Examinando a retina...";

        }

        else if (window.progressoV2 === 40) {

            textoV2.innerHTML =
                "Analisando o nervo óptico...";

        }

        else if (window.progressoV2 === 50) {

            textoV2.innerHTML =
                "Verificando o campo visual...";

        }

        else if (window.progressoV2 === 60) {

            textoV2.innerHTML =
                "Processando informações...";

        }

        else if (window.progressoV2 === 70) {

            textoV2.innerHTML =
                "Preparando o conteúdo...";

        }

        else if (window.progressoV2 === 80) {

            textoV2.innerHTML =
                "Quase pronto...";

        }

        else if (window.progressoV2 === 90) {

            textoV2.innerHTML =
                "Recuperando visão...";

        }

        else if (window.progressoV2 === 100) {

            textoV2.innerHTML =
                "Visão recuperada!";


            // =================================================
            // MUDA O BOTÃO
            // =================================================

            novoBotao.innerHTML =
                "Entrar no site";


            if (progressoV2 === 100) {

    textoV2.innerHTML = "Visão recuperada!";

    botaoV2.innerHTML = "Entrar no site";


    setTimeout(function () {

        // Ativa a saída da V2
        introV2.classList.add("saindo");


        setTimeout(function () {

            // Remove completamente a tela
            introV2.style.display = "none";

        }, 1000);

    }, 700);

}
}
});
}
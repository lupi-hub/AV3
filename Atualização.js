// =====================================================
// ATUALIZAÇÃO V2
// ENTRADA CIRCULAR
// =====================================================

const introV2 = document.querySelector("#intro-screen");
const textoV2 = document.querySelector("#intro-text");
const porcentagemV2 = document.querySelector("#porcentagem");
const botaoV2 = document.querySelector("#botao-iniciar");

// Criamos o círculo automaticamente
let circuloV2 = document.querySelector("#circulo-visao");

if (!circuloV2 && introV2) {

    circuloV2 = document.createElement("div");

    circuloV2.id = "circulo-visao";

    introV2.insertBefore(
        circuloV2,
        introV2.firstChild
    );

}


// Progresso da V2

let progressoV2 = 0;


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

    // Impede o comportamento antigo do botão

    const novoBotao = botaoV2.cloneNode(true);

    botaoV2.parentNode.replaceChild(
        novoBotao,
        botaoV2
    );


    // =================================================
    // CLIQUE
    // =================================================

    novoBotao.addEventListener("click", function () {

        // Não passa de 100%

        if (progressoV2 >= 100) {

            return;

        }


        // Aumenta 10%

        progressoV2 += 10;


        // Atualiza porcentagem

        porcentagemV2.innerHTML =
            progressoV2 + "%";


        // =================================================
        // TAMANHO DO CÍRCULO
        // =================================================

        // Calcula o tamanho necessário
        // para cobrir toda a tela

        const maiorDimensao =
            Math.max(
                window.innerWidth,
                window.innerHeight
            );


        const tamanhoMaximo =
            maiorDimensao * 2.5;


        // Converte 0-100% para tamanho do círculo

        const tamanho =
            tamanhoMaximo *
            (progressoV2 / 100);


        circuloV2.style.width =
            tamanho + "px";

        circuloV2.style.height =
            tamanho + "px";


        // =================================================
        // MENSAGENS
        // =================================================

        if (progressoV2 === 10) {

            textoV2.innerHTML =
                "Iniciando análise...";

        }

        else if (progressoV2 === 20) {

            textoV2.innerHTML =
                "Analisando o sistema visual...";

        }

        else if (progressoV2 === 30) {

            textoV2.innerHTML =
                "Examinando a retina...";

        }

        else if (progressoV2 === 40) {

            textoV2.innerHTML =
                "Analisando o nervo óptico...";

        }

        else if (progressoV2 === 50) {

            textoV2.innerHTML =
                "Verificando o campo visual...";

        }

        else if (progressoV2 === 60) {

            textoV2.innerHTML =
                "Processando informações...";

        }

        else if (progressoV2 === 70) {

            textoV2.innerHTML =
                "Preparando o conteúdo...";

        }

        else if (progressoV2 === 80) {

            textoV2.innerHTML =
                "Quase pronto...";

        }

        else if (progressoV2 === 90) {

            textoV2.innerHTML =
                "Recuperando visão...";

        }

        else if (progressoV2 === 100) {

            textoV2.innerHTML =
                "Visão recuperada!";

            novoBotao.innerHTML =
                "Entrar no site";


            // Pequena pausa antes de sair

            setTimeout(function () {

                introV2.classList.add("saindo");


                setTimeout(function () {

                    introV2.style.display =
                        "none";

                }, 1000);


            }, 700);

        }

    });

}
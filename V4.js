/* =====================================================
   V4 BOTÃO PULAR ANIMAÇÃO
   ===================================================== */

const botaoPularV4 =
    document.querySelector("#botao-pular");

if (botaoPularV4) {

    botaoPularV4.addEventListener("click", function () {

        const introPular =
            document.querySelector("#intro-screen");

        if (introPular) {

            introPular.classList.add("saindo");

            setTimeout(() => {

                introPular.remove();

            }, 1000);

        }

        /* =================================================
           PEGA OS ELEMENTOS DA V2
           ================================================= */

        const intro =
            document.querySelector("#intro-screen");

        const porcentagem =
            document.querySelector("#porcentagem");

        const texto =
            document.querySelector("#intro-text");

        const circulo =
            document.querySelector("#circulo-visao");


        /* =================================================
           100%
           ================================================= */

        if (porcentagem) {

            porcentagem.textContent = "100%";

        }


        if (texto) {

            texto.textContent =
                "Visão recuperada!";

        }


        /* =================================================
           COMPLETA O CÍRCULO
           ================================================= */

        if (intro && circulo) {

            const maiorDimensao =
                Math.max(
                    window.innerWidth,
                    window.innerHeight
                );

            const raioMaximo =
                maiorDimensao * 1.5;


            intro.style.setProperty(
                "--raio-visao",
                raioMaximo + "px"
            );

        }


        /* =================================================
           MUDA O BOTÃO PRINCIPAL
           ================================================= */

        const botao =
            document.querySelector("#botao-iniciar");

        if (botao) {

            botao.textContent =
                "Entrar no site";

                botao.addEventListener("click", function () {

                    setTimeout(() => {

                    botao.remove()
                    intro.remove();
                    
                 }, 1000);

     });
    }

    /* =================================================
       ESCONDE O BOTÃO PULAR
       ================================================= */

botaoPularV4.remove();

});
}
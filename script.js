// ===============================
// INTRO DO SITE
// ===============================

const intro = document.querySelector("#intro-screen");
const texto = document.querySelector("#intro-text");
const porcentagemIntro = document.querySelector("#porcentagem");
const botaoIniciar = document.querySelector("#botao-iniciar");

let progressoIntro = 0;


if (intro && texto && porcentagemIntro && botaoIniciar) {

    botaoIniciar.addEventListener("click", function () {

        progressoIntro += 10;

        porcentagemIntro.innerHTML = progressoIntro + "%";


        if (progressoIntro === 10) {

            texto.innerHTML = "Iniciando análise...";

        } else if (progressoIntro === 20) {

            texto.innerHTML = "Analisando o sistema visual...";

        } else if (progressoIntro === 30) {

            texto.innerHTML = "Examinando a retina...";

        } else if (progressoIntro === 40) {

            texto.innerHTML = "Analisando o nervo óptico...";

        } else if (progressoIntro === 50) {

            texto.innerHTML = "Verificando o campo visual...";

        } else if (progressoIntro === 60) {

            texto.innerHTML = "Processando informações...";

        } else if (progressoIntro === 70) {

            texto.innerHTML = "Preparando o conteúdo...";

        } else if (progressoIntro === 80) {

            texto.innerHTML = "Quase pronto...";

        } else if (progressoIntro === 90) {

            texto.innerHTML = "Recuperando visão...";

        } else if (progressoIntro === 100) {

            texto.innerHTML = "Visão recuperada!";

            botaoIniciar.innerHTML = "Entrar no site";


            setTimeout(function () {

                intro.style.opacity = "0";


                setTimeout(function () {

                    intro.style.display = "none";

                }, 2000);

            }, 700);

        }

    });

}
// ===============================
// BOTÃO EXPLORAR
// ===============================

const botao = document.querySelector(".hero button");

if (botao) {

    botao.addEventListener("click", () => {

        const cards = document.querySelector("#cards");

        if (cards) {

            cards.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}



// ===============================
// FLASHCARDS
// ===============================

const cards = document.querySelectorAll(".card");


cards.forEach(card => {

    card.addEventListener("click", () => {


        // Fecha os outros cards

        cards.forEach(outro => {

            if (outro !== card) {

                const outroInner = outro.querySelector(".card-inner");

                if (outroInner) {

                    outroInner.classList.remove("virado");

                }

            }

        });


        // Vira o card clicado

        const cardInner = card.querySelector(".card-inner");

        if (cardInner) {

            cardInner.classList.toggle("virado");

        }

    });

});



// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================

const elementos = document.querySelectorAll("section");


const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";

            entrada.target.style.transform = "translateY(0)";

        }

    });

});


elementos.forEach(secao => {

    secao.style.opacity = "0";

    secao.style.transform = "translateY(40px)";

    secao.style.transition = "0.8s ease";

    observador.observe(secao);

});



// ===============================
// BARRA DE PROGRESSO
// ===============================

const progresso = document.createElement("div");

progresso.id = "progresso";

document.body.appendChild(progresso);


window.addEventListener("scroll", () => {

    const altura =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    if (altura <= 0) {

        return;

    }


    const porcentagemScroll =
        (window.scrollY / altura) * 100;


    progresso.style.width =
        porcentagemScroll + "%";

});
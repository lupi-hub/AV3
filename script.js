// ===============================
// FLASHCARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        // Fecha todos os outros cards
        cards.forEach(outro => {

            if (outro !== card) {
                outro.querySelector(".card-inner").classList.remove("virado");
            }

        });

        // Abre ou fecha o card clicado
        card.querySelector(".card-inner").classList.toggle("virado");

    });

});



// ===============================
// ANIMAÇÃO AO CARREGAR
// ===============================

window.addEventListener("load", () => {

    document.querySelectorAll("section").forEach((secao, indice) => {

        secao.animate(

            [
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0)"
                }

            ],

            {
                duration: 700,
                delay: indice * 180,
                fill: "forwards",
                easing: "ease"
            }

        );

    });

});

// ===============================
// BOTÃO EXPLORAR
// ===============================

const botao = document.querySelector(".hero button");

botao.addEventListener("click", () => {

    document.querySelector("#cards").scrollIntoView({
        behavior: "smooth"
    });

});




// ===============================
// FLASHCARDS
// ===============================

const cards = document.querySelectorAll(".card");


cards.forEach(card => {


    card.addEventListener("click", () => {


        // fecha os outros cards

        cards.forEach(outro => {

            if(outro !== card){

                outro
                .querySelector(".card-inner")
                .classList.remove("virado");

            }

        });



        // vira o card clicado

        card
        .querySelector(".card-inner")
        .classList.toggle("virado");


    });


});





// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================


const elementos = document.querySelectorAll("section");


const observador = new IntersectionObserver((entradas)=>{


    entradas.forEach(entrada=>{


        if(entrada.isIntersecting){


            entrada.target.style.opacity = "1";

            entrada.target.style.transform =
            "translateY(0)";


        }


    });



});



elementos.forEach(secao=>{


    secao.style.opacity = "0";

    secao.style.transform =
    "translateY(40px)";


    secao.style.transition =
    "0.8s ease";


    observador.observe(secao);


});







// ===============================
// BARRA DE PROGRESSO
// ===============================



const progresso = document.createElement("div");


progresso.id = "progresso";


document.body.appendChild(progresso);



window.addEventListener("scroll",()=>{


    let altura =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;



    let porcentagem =
    (window.scrollY / altura) * 100;



    progresso.style.width =
    porcentagem + "%";



});
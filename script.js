alert("JS carregou");
window.addEventListener("load", ()=>{


const intro = document.querySelector("#intro-screen");
const texto = document.querySelector("#intro-text");
const porcentagem = document.querySelector("#porcentagem");

console.log(intro);
console.log(texto);
console.log(porcentagem);

texto.addEventListener("click", ()=>{

    alert("cliquei");

});


let iniciado = false;


texto.addEventListener("click",()=>{


    if(iniciado) return;

    iniciado=true;


    texto.innerHTML="Analisando visão...";


    let valor=0;


    let carregamento=setInterval(()=>{


        valor++;


        porcentagem.innerHTML=valor+"%";



        if(valor>=100){


            clearInterval(carregamento);


            intro.style.opacity="0";


            setTimeout(()=>{

                intro.style.display = "none";

            },2000);


        }



    },25);



});


});

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

const intro = document.getElementById("intro-screen");

const textoIntro = document.getElementById("intro-text");

const porcentagem = document.getElementById("porcentagem");


let iniciado = false;


textoIntro.onclick = function(){


    if(iniciado) return;


    iniciado = true;


    let valor = 0;


    textoIntro.innerHTML = "Carregando...";



    let intervalo = setInterval(()=>{


        valor++;


        porcentagem.innerHTML = valor + "%";


        if(valor >= 100){


            clearInterval(intervalo);


            intro.style.transition = "2s";

            intro.style.opacity = "0";



            setTimeout(()=>{

                intro.style.display="none";

            },2000);



        }



    },30);



};
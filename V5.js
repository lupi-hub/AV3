// =====================================================
// V5
// SISTEMA DE SETAS
// NÃO ALTERA A V3
// =====================================================


// =====================================================
// ELEMENTOS
// =====================================================

const v5Visao =
    document.querySelector(".v3-visao");

const v5Esquerda =
    document.querySelector(".v5-esquerda");

const v5Direita =
    document.querySelector(".v5-direita");

const v5Contador =
    document.querySelector(".v5-contador");


// =====================================================
// MÍDIAS
// =====================================================

const v5Midias = [

    {
        tipo: "imagem",
        arquivo: "Outros/img/paisagem.png"
    },
    {
        tipo: "imagem",
        arquivo: "Outros/img/paisagem2.png"
    },
    {
        tipo: "imagem",
        arquivo: "Outros/img/paisagem3.png"
    },


    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/Imagem 1.jpeg"
    },

    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/Imagem 2.jpeg"
    },

    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/Imagem 3.jpeg"
    },

    {
        tipo: "video",
        arquivo: "Outros/Robótica/Fade-in.mp4"
    },
    
    {
        tipo: "video",
        arquivo: "Outros/Robótica/Fade-out.mp4"
    },
/*--------------------------------------------------------------------------*/
    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/21082026/IMG.jpeg",
        objectFit: "contain",
        objectPosition: "50% 50%"
    },
    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/21082026/IMG1.jpeg",
        objectFit: "contain",
        objectPosition: "50% 50%"
    },
    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/21082026/IMG2.jpeg"
    },
    {
        tipo: "imagem",
        arquivo: "Outros/Robótica/21082026/IMG4.jpeg"
    },

    {
        tipo: "video",
        arquivo: "Outros/Robótica/21082026/VIDEO.mp4",
        zoom: 3.0,
        objectPosition: "50% 50%"
    },


];


let v5Atual = 0;


// =====================================================
// MOSTRAR MÍDIA
// =====================================================

function mostrarV5() {

    const midia =
        v5Midias[v5Atual];


    // Procura a mídia atual
    const imagem =
        v5Visao.querySelector(".v5-imagem");

    const video =
        v5Visao.querySelector(".v5-video");


    // Remove SOMENTE imagem/vídeo
    if (imagem) {

        imagem.remove();

    }

    if (video) {

        video.remove();

    }


    // =================================================
    // IMAGEM
    // =================================================

    if (midia.tipo === "imagem") {

        const novaImagem =
            document.createElement("img");

        novaImagem.src =
            midia.arquivo;

        novaImagem.alt =
            "Imagem da paisagem";

        novaImagem.className =
            "v5-imagem";

        novaImagem.style.objectFit =
            midia.objectFit || "cover";

        novaImagem.style.objectPosition =
            midia.objectPosition || "50% 50%";


        // Coloca antes da camada escura da V3
        const escuro =
            v5Visao.querySelector(".v3-escuro");

        v5Visao.insertBefore(
            novaImagem,
            escuro
        );

    }


    // =================================================
    // VÍDEO
    // =================================================

    if (midia.tipo === "video") {

        const novoVideo =
            document.createElement("video");

        novoVideo.src =
            midia.arquivo;

        novoVideo.className =
            "v5-video";


novoVideo.style.width =
    "auto";

novoVideo.style.height =
    "auto";

novoVideo.style.maxWidth =
    "100%";

novoVideo.style.maxHeight =
    "100%";

novoVideo.style.objectFit =
    "contain";

novoVideo.style.objectPosition =
    "50% 50%";

        novoVideo.controls =
            true;


        // Coloca antes da camada escura da V3
        const escuro =
            v5Visao.querySelector(".v3-escuro");

        v5Visao.insertBefore(
            novoVideo,
            escuro
        );

    }


    // =================================================
    // CONTADOR
    // =================================================

    v5Contador.textContent =
        (v5Atual + 1) +
        " / " +
        v5Midias.length;

}


// =====================================================
// SETA DIREITA
// =====================================================

if (v5Direita) {

    v5Direita.addEventListener("click", function () {

        v5Atual++;

        if (
            v5Atual >=
            v5Midias.length
        ) {

            v5Atual = 0;

        }

        mostrarV5();

    });

}


// =====================================================
// SETA ESQUERDA
// =====================================================

if (v5Esquerda) {

    v5Esquerda.addEventListener("click", function () {

        v5Atual--;

        if (v5Atual < 0) {

            v5Atual =
                v5Midias.length - 1;

        }

        mostrarV5();

    });

}


// =====================================================
// INICIALIZA
// =====================================================

if (
    v5Visao &&
    v5Contador
) {

    mostrarV5();

}

// =====================================================
// V5
// AMPLIAR MÍDIA
// =====================================================

const v5Ampliar =
    document.querySelector("#v5-ampliar");

if (v5Ampliar) {

    v5Ampliar.addEventListener("click", function () {

        console.log("BOTÃO AMPLIAR CLICADO");

        criarTelaAmpliada();

    });

} else {

    console.log("BOTÃO #v5-ampliar NÃO ENCONTRADO");

}

// =====================================================
// CRIAR TELA AMPLIADA
// =====================================================

function criarTelaAmpliada() {

    // =================================================
    // EVITA DUAS TELAS
    // =================================================

    if (
        document.querySelector(".v5-tela-ampliada")
    ) {

        return;

    }


    // =================================================
    // TELA
    // =================================================

    const tela =
        document.createElement("div");

    tela.className =
        "v5-tela-ampliada";


    // =================================================
    // TÍTULO
    // =================================================

    const titulo =
        document.createElement("div");

    titulo.className =
        "v5-titulo-ampliado";

    titulo.textContent =
        "O sistema de ver como uma pessoa com glaucoma NÃO FUNCIONA com a imagem ampliada; O ampliar é apenas para ver as imagens e vídeos mais nitidamente. 👍";

        const ocultarTitulo =
    document.createElement("button");

ocultarTitulo.className =
    "v5-ocultar-titulo";

ocultarTitulo.textContent =
    "👁 Ocultar título";


    // =================================================
    // BOTÃO FECHAR
    // =================================================

    const fechar =
        document.createElement("button");

    fechar.className =
        "v5-fechar";

    fechar.textContent =
        "✕";


    // =================================================
    // SETA ESQUERDA
    // =================================================

    const esquerda =
        document.createElement("button");

    esquerda.className =
        "v5-seta v5-esquerda";

    esquerda.textContent =
        "❮";


    // =================================================
    // SETA DIREITA
    // =================================================

    const direita =
        document.createElement("button");

    direita.className =
        "v5-seta v5-direita";

    direita.textContent =
        "❯";


    // =================================================
    // ÁREA DA MÍDIA
    // =================================================

    const area =
        document.createElement("div");

    area.className =
        "v5-ampliada-midia";


    // =================================================
    // MONTA A TELA
    // =================================================

    tela.appendChild(titulo);

    tela.appendChild(fechar);

    tela.appendChild(esquerda);

    tela.appendChild(area);

    tela.appendChild(direita);

    document.body.appendChild(tela);

    tela.appendChild(ocultarTitulo);
// -----------------------------------------------------------------------
    ocultarTitulo.addEventListener("click", function () {

    if (titulo.style.display === "none") {

        titulo.style.display = "block";

        ocultarTitulo.textContent =
            "👁 Ocultar título";

            ocultarTitulo.style.background =
            "#c21c1c";

    } else {

        titulo.style.display = "none";

        ocultarTitulo.textContent =
            "👁 Mostrar título";

            ocultarTitulo.style.background =
            "#43c21c";

    }

});

    // =================================================
    // MOSTRAR MÍDIA
    // =================================================

    function mostrarAmpliada() {

        area.innerHTML = "";

        const midia =
            v5Midias[v5Atual];


        // =================================================
        // IMAGEM
        // =================================================

        if (midia.tipo === "imagem") {

            const imagem =
                document.createElement("img");

            imagem.src =
                midia.arquivo;

            imagem.alt =
                "Imagem ampliada";

            area.appendChild(imagem);

        }


        // =================================================
        // VÍDEO
        // =================================================

        if (midia.tipo === "video") {

            const video =
                document.createElement("video");

            video.src =
                midia.arquivo;

            video.controls =
                true;

            area.appendChild(video);

        }

    }


    mostrarAmpliada();


    // =================================================
    // SETA DIREITA
    // =================================================

    direita.addEventListener("click", function (evento) {

        evento.stopPropagation();

        v5Atual++;

        if (
            v5Atual >=
            v5Midias.length
        ) {

            v5Atual = 0;

        }

        mostrarV5();

        mostrarAmpliada();

    });


    // =================================================
    // SETA ESQUERDA
    // =================================================

    esquerda.addEventListener("click", function (evento) {

        evento.stopPropagation();

        v5Atual--;

        if (v5Atual < 0) {

            v5Atual =
                v5Midias.length - 1;

        }

        mostrarV5();

        mostrarAmpliada();

    });


    // =================================================
    // FECHAR
    // =================================================

    fechar.addEventListener("click", function () {

        tela.remove();

    });


    // =================================================
    // CLICAR FORA
    // =================================================

    tela.addEventListener("click", function (evento) {

        if (
            evento.target === tela
        ) {

            tela.remove();

        }

    });

}

// =====================================================
// GALERIA
// AMPLIAR IMAGENS
// =====================================================

const galeriaImagens =
    document.querySelectorAll(".galeria-item img");


galeriaImagens.forEach(function (imagem) {

    imagem.addEventListener("click", function () {

        const tela =
            document.createElement("div");

        tela.className =
            "galeria-ampliada";


        const imagemAmpliada =
            document.createElement("img");

        imagemAmpliada.src =
            imagem.src;

        imagemAmpliada.alt =
            imagem.alt;


        const fechar =
            document.createElement("button");

        fechar.className =
            "galeria-fechar";

        fechar.textContent =
            "✕";


        tela.appendChild(imagemAmpliada);

        tela.appendChild(fechar);

        document.body.appendChild(tela);


        fechar.addEventListener("click", function () {

            tela.remove();

        });


        tela.addEventListener("click", function (evento) {

            if (evento.target === tela) {

                tela.remove();

            }

        });

    });

});

// =====================================================
// GALERIA 2
// AMPLIAR IMAGENS
// =====================================================

const galeria2Imagens =
    document.querySelectorAll(".galeria2-item img");


galeria2Imagens.forEach(function (imagem) {

    imagem.addEventListener("click", function () {

        const tela =
            document.createElement("div");

        tela.className =
            "galeria2-ampliada";


        const imagemAmpliada =
            document.createElement("img");

        imagemAmpliada.src =
            imagem.src;

        imagemAmpliada.alt =
            imagem.alt;


        const fechar =
            document.createElement("button");

        fechar.className =
            "galeria2-fechar";

        fechar.textContent =
            "✕";


        tela.appendChild(imagemAmpliada);

        tela.appendChild(fechar);

        document.body.appendChild(tela);


        fechar.addEventListener("click", function () {

            tela.remove();

        });


        tela.addEventListener("click", function (evento) {

            if (evento.target === tela) {

                tela.remove();

            }

        });

    });

});
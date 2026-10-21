
/*
========================================================
PROJETO: SIMPLIFY INDUSTRIAL
DISCIPLINA: PROGRAMAÇÃO WEB I
ARQUIVO: script.js
========================================================

OBJETIVO:
Controlar as interações e os comportamentos dinâmicos
das páginas do Simplify Industrial.

FUNCIONALIDADES IMPLEMENTADAS:

1. Exibição de mensagem ao clicar no botão inicial.
2. Validação demonstrativa do formulário de contato.
3. Busca dinâmica para filtrar as soluções.
4. Mostrar e ocultar os benefícios utilizando jQuery.
5. Animações dos cards utilizando a biblioteca AOS.

As condições if verificam a existência dos elementos
antes de registrar os eventos, permitindo compartilhar
este arquivo entre páginas com conteúdos diferentes.

========================================================
*/

// Confirma no Console que o arquivo JavaScript foi carregado.
console.log("JavaScript conectado!");

/*
========================================================
INTERAÇÃO 1 — BOTÃO DA PÁGINA INICIAL
========================================================

querySelector() localiza o primeiro elemento que
corresponde ao seletor CSS informado.

O botão é o link da seção inicial, e a mensagem é
o parágrafo localizado na seção de soluções.

addEventListener() registra o evento de clique.
textContent altera o texto exibido no HTML.
*/

// Localiza o link "Conheça o Simplify".
const botao = document.querySelector("#inicio a");

// Localiza o espaço destinado à mensagem.
const mensagem = document.querySelector("#mensagem");

// Verifica se os dois elementos existem nesta página.
if (botao && mensagem) {

    // Executa a função quando o visitante clica no link.
    botao.addEventListener("click", function() {

        console.log("Clicou no botão!");

        // Altera o texto do parágrafo de mensagem.
        mensagem.textContent =
            "Conheça nossas soluções para sua empresa!";

    });

}

/*
========================================================
INTERAÇÃO 2 — FORMULÁRIO DE CONTATO
========================================================

O evento submit detecta a tentativa de envio do formulário.

preventDefault() impede o comportamento padrão de envio,
permitindo mostrar uma confirmação sem recarregar a página.

classList.remove() remove a classe d-none do Bootstrap,
tornando o alerta de confirmação visível.

Os campos obrigatórios e o formato básico do e-mail
são verificados pelo próprio navegador.

IMPORTANTE:
A confirmação é demonstrativa. Os dados não são enviados
para um servidor nem armazenados em banco de dados.
*/

// Localiza o formulário e o parágrafo de confirmação.
const formulario = document.querySelector("#formulario-contato");
const retornoFormulario = document.querySelector("#retorno-formulario");

// Executa esta interação somente se os dois elementos existirem.
if (formulario && retornoFormulario) {

    // Detecta uma tentativa válida de envio do formulário.
    formulario.addEventListener("submit", function(event) {

        // Impede o envio tradicional e o recarregamento da página.
        event.preventDefault();

        // Define o texto que será exibido no alerta.
        retornoFormulario.textContent =
            "Formulário preenchido corretamente!";

        // Remove a classe que mantém o alerta escondido.
        retornoFormulario.classList.remove("d-none");

    });

}

/*
========================================================
INTERAÇÃO 3 — BUSCA DINÂMICA DE SOLUÇÕES
========================================================

querySelectorAll() localiza todos os cards da seção.

O evento input detecta alterações no campo de busca.

toLowerCase() converte o texto para letras minúsculas.
trim() remove espaços no início e no final do termo.
forEach() percorre os cards encontrados.
includes() verifica se o conteúdo contém o termo buscado.

Os cards correspondentes permanecem visíveis, enquanto
os demais são ocultados pela propriedade display.
*/

// Localiza o campo de busca.
const buscaSolucoes = document.querySelector("#busca-solucoes");

// Localiza todos os cards de soluções.
const cardsSolucoes = document.querySelectorAll("#solucoes article");

// Só registra o evento se o campo existir nesta página.
if (buscaSolucoes) {

    // Detecta cada alteração feita pelo visitante na busca.
    buscaSolucoes.addEventListener("input", function() {

        // Obtém o texto digitado e normaliza a comparação.
        const termo = buscaSolucoes.value.toLowerCase().trim();

        // Analisa individualmente cada card de solução.
        cardsSolucoes.forEach(function(card) {

            // Obtém o conteúdo textual do card.
            const textoCard = card.textContent.toLowerCase();

            // Verifica se o card corresponde ao termo pesquisado.
            if (textoCard.includes(termo)) {

                // Exibe o card correspondente.
                card.style.display = "";

            } else {

                // Oculta o card que não corresponde à busca.
                card.style.display = "none";

            }

        });

    });

}

/*
========================================================
INTERAÇÃO COM JQUERY — BENEFÍCIOS
========================================================

O jQuery facilita a seleção dos elementos e a associação
de eventos.

$(document).ready() executa o código quando o DOM estiver
pronto para ser manipulado.

on("click", ...) detecta o clique no botão.

slideToggle(400) alterna a exibição dos cards com uma
animação de abertura e fechamento de 400 milissegundos.
*/

// Aguarda o DOM ficar pronto antes de configurar o evento.
$(document).ready(function() {

    // Registra o evento de clique no botão de benefícios.
    $("#alternar-beneficios").on("click", function() {

        // Mostra ou oculta todos os cards de benefícios.
        $("#beneficios article").slideToggle(400);

    });

});

/*
========================================================
BIBLIOTECA AOS — ANIMAÇÕES DURANTE A ROLAGEM
========================================================

AOS (Animate On Scroll) aplica animações aos elementos
que possuem atributos data-aos no HTML.

duration: 700 define a duração das animações em milissegundos.

once: false permite que as animações sejam repetidas
quando os elementos voltam a entrar na área visível.

A verificação typeof evita tentar inicializar a biblioteca
caso ela não esteja carregada na página atual.
*/

// Inicializa o AOS apenas quando a biblioteca estiver disponível.
if (typeof AOS !== "undefined") {

    AOS.init({

        // Duração da animação: 700 milissegundos.
        duration: 700,

        // Permite repetir as animações durante a rolagem.
        once: false

    });

}

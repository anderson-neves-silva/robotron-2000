const controle = document.querySelectorAll("[data-controle]"); //agora ao invés de buscamos o a classe ".controle-ajuste", buscamos pelo "data attribute"

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //o parentNode busca o elemento pai, aqui enviamos dois blocos de informação para a função manipula dados
    });
});

function manipulaDados(operacao, controle) { //função que controla dinamicamente e busca os elementos que estão sendo clicados acima, o controle é o elemento pai que está sendo clicado
    const peca = controle.querySelector("[data-contador]"); //procurando a peça do data-contador apenas no controle

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;    
    } else {
        peca.value = parseInt(peca.value) + 1;    
    }
}
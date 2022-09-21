const controle = document.querySelectorAll("[data-controle]"); //agora ao invés de buscamos o a classe ".controle-ajuste", buscamos pelo "data attribute"

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
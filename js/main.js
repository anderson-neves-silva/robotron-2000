
const controle = document.querySelectorAll(".controle-ajuste"); //variável que guarda uma lista de todos os botões

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        //console.log(evento.target.parentNode) //para ir no elemento que é o pai dele
    });
});

function manipulaDados(operacao, controle) { //função que reaproveita o código
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;    
    } else {
        peca.value = parseInt(peca.value) + 1;    
    }
}
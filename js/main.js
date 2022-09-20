const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste"); //variável que guarda uma lista de todos os botões

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
    });
});

function manipulaDados(operacao) { //função que reaproveita o código
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;    
    } else {
        braco.value = parseInt(braco.value) + 1;    
    }
}
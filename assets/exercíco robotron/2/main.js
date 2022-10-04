const elemento = document.querySelector("#calcular"); //acessa o elemento de id calcular
const resultado = document.querySelector(".resultado") //acessa o elemento de classe resultado

elemento.addEventListener("click", (evento) => { //funçao anônima que espera o evento de click em elemento e mostra a mensagem em resultador
     resultado.innerHTML = "Fui clicado!";
})
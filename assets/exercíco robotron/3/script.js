var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; //array lista com cores

const resuldato = document.querySelector(".resultado"); //acessando elemento da index
const mostrarResultado = document.querySelector("#mostrar");
const removeItem = document.querySelector("#remover")

mostrarResultado.addEventListener("click", (evento) => { //função que mostra a lista na index
    resuldato.innerHTML = lista;
});

removeItem.addEventListener("click", (evento) => { //função que remove a cor vermelha
    lista.splice(1, 1); //começando na posição 1 remova 1 item
    resuldato.innerHTML = lista;
});
const robotron = document.querySelector("#robotron"); //criando uma variável

//robotron.addEventListener("click", dizOi); //o addEventListener é um escutador de eventos do tipo click, essa função sempre espera duas coisas, 1 um click, 2 o que ela irá fazer

//function dizOi() {  //função é uma forma de armazenar códigos que será executado várias vezes, ou seja, ala pode ser chamada mais de uma vez 
//    console.log("oi!");
//    console.log("Bem-vindo ao Robotron 2000");
//}

//dizOi(); //chamando a função, ou executando ela, uma função nós ajuda a repetir bloco de códigos

//robotron.addEventListener("click", function() { //outra forma de criar uma função, também conhecida como "função anônima", ela só pode ser executada quando esse gatilho for desparado, ou seja, o evento do click, nunca em outro momento
//    console.log("Cliquei no robô")
//})

//robotron.addEventListener("click", () => { //nas verções nova do javascript podemos escrever função anônima como arrow function, ou função de seta
//    console.log("Cliquei no robô")
//})

function dizOi(nome) {  //função com parâmetro que recebe um nome
    console.log("Oi " + nome); //imprime o nome
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi("Anderson"); //chamando a função e passando o nome

robotron.addEventListener("click", (evento) => { //olha o evento na arrow function, ou função de seta, manipular o evento é muito importante
    console.log(evento)
})
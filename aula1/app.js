//Comentário em linha

/*
comentário em bloco
*/

//Permite escrever uma mensagem no terminal
console.log('jjjjjjTestando o node.JS');

//import da biblioteca que faz entrada de dados pelo usuário
var readline = require ('readline');


//Criamos um objeto que é o entradaDados com as referências do readLine
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*
O que é uma função callback - é uma função do tipo que qdo chamada ela
retorna o seu conteúdo em uma única instrução, ou seja, em apenas
um passo na programação
*/

 
//Criamos uma funçâo de call back para receber os dados digitados pelo usuário


/*
O objeto entradaDados aguarda
*/
entradaDados.question("Digite seu nome: \n", function (dados){

    console.log('Bem-vindo, ' + dados + ' ao servidor node.JS.');

});
/******************************************************************* *
 * Objetivo: Realizar média escolar de 4 notas dos alunos
 * Data: 27/01/20023
 * Autor: Dumel
 * Versão: 1.0
 * *******************************************************************/

console.log('sistema de calculo de médias escolares');

const { stdin, stdout } = require('process');
//Import da biblioteca pra entrada de dados

//var, quando for usar várias vezes
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*

*var - toda variável var, tem como objetivo ser um escopo global,
ou seja, ela poderá ser usado em diversos pontos da programação.

**************************************************************

*let - toda variável criada como let, tem por objetivo ser um escopo local,
ou seja, será utilizada somente naquela função.

**************************************************************

*const - tem por objetivo criar um espaço em memória para armazenar dados
que não sofrem mudanças

*/




//Função de call back para retornar o nome do aluno
entradaDados.question('Qual é o nome do aluno? \n', function(nome){
    //Variável local para receber o nome do aluno, que vai ser retornado pela função
    //vai ser retornada pela função
    let nomeAluno = nome;

    //função de call back para entrada de nota1
    entradaDados.question('Digite a nota1: \n', function(nota1){
        
        let primeiraNota = nota1;
    
    entradaDados.question('Digite a nota2: \n', function(nota2){
        let segundaNota = nota2;

    entradaDados.question('digite a nota3: \n', function(nota3){
        let terceiraNota = nota3; 

    entradaDados.question('Digite a nota4: \n', function(nota4){
        let quartaNota = nota4;
        let media = 0;

       /*
       * conversão de dados string para numero
            paseInt() - converte para inteiro
            parseFloat() - converte para real
            number.parseFloat ou parseFloat() - converte para real
            number() - converte para int ou float, conforma a entrada do dado
       */

            /*
            *operadores de comperação
                == (verificar a igualdade de conteudo)
                != (verificar a diferença de conteudo)
                <  (verificar o menor valor)
                >  (verificar o maior valor)
                <= (verificar o menor ou igual valor)
                >= (verificar o maior ou igual valor)
                === (verificar a igualdade de conteudo e validar a tipagem de dados)

                ex: 0 == 0 V
                    0 == '0' V
                    0 === '0' F
                    0 ==! '0.0' F
            
            
            *operadores lógicos
            * OU       || (pipe)  OR
            * E        &&         AND
            * Negação  !          NOT      
                    */     
                   
            /*Ordem de execução dos operadores lógicos
            *0°()
            *1º Negação
            *2º E
            *3º OU

            */


            if(nomeAluno.indexOf('0') != -1 || nomeAluno.indexOf('1') != -1 || nomeAluno.indexOf('2') != -1 
            || nomeAluno.indexOf('2') != -1 || nomeAluno.indexOf('3') || nomeAluno.indexOf('4') 
            || nomeAluno.indexOf('5') || nomeAluno.indexOf('6') || nomeAluno.indexOf('7') || nomeAluno.indexOf('8')
            || nomeAluno.indexOf('9') ){
                console.log('Erro, apenas letras');
            }
            
       if(primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '' ){
       
            console.log('Erro: é necessário digitar algum valor na entrada.');
       }else if(isNaN (primeiraNota) ||isNaN (segundaNota) || isNaN (terceiraNota) || isNaN (quartaNota))
       {
            console.log('Erro: é necessario que sejam digitados números');
        //validação de entrada de valores entre 0 e 10
       }else if(primeiraNota < 0 || primeiraNota > 10 || segundaNota < 0 || segundaNota > 10 
        || terceiraNota < 0 || terceiraNota > 10 || quartaNota < 0 || quartaNota > 10)
       {
            console.log('Erro, o número é menor que zero, ou passa de 10')
       }else{
            media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4; 
            
            if(media >=7){
                console.log('Status do aluno: aprovado!');
            }else{
                console.log('Status do aluno reprovado')
            }
            console.log('Média final:' + media.toFixed(1));

            
        }

        


        
        
       // console.log(media);

        //console.log(nome + '; \n' + nota1 + '; \n' + nota2 + '; \n' + nota3 + '; \n' + nota4 + ';')


                })        
            })    
        })
    });
});




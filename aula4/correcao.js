/*
* OBJETIVO: Realizar calculos matemáticos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
* DATA: 03/02/2023
* AUTOR: MELQUI
* VERSÃo: 1.1
*/

//toUpperCase - Converte uma String para maiusculo
                //tolowerrCase - converte um string para minusculo

var matematica = require('./modulo/calculadora.js')

//Import da biblioteca para entrada de dados
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valo1: \n', function(numero1){
    //replace - permite trocar um conteudo da string por outro
    let valor1 = numero1.replace(',','.');

    entradaDados.question('Valor2: \n', function(numero2){
        let valor2 = numero2.replace(',','.');

        //entrada de dados tipo de calculo
        entradaDados.question('Escolha uma operação: [SOMAR | SUBTRAIR | DIVIDIR | MULTIPLICAR] : \n ', function(tipoCalc){
            let operacao = tipoCalc.toUpperCase();
            let resultado;

           

            //validação de entrada de dados vazio
            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possivel calcular sem preencher os dados.');
            
            //validação para verificar se os dados digitados são números
            //podemos utilizar (isNaN ou typeOf)
            // se usar o typeof, precisa garantir que o tipo de dados não é generico (String)    

            }else if(isNaN(valor1)  || isNaN(valor2)){
                console.log('ERRO: Não é possivel calcular sem a entrada de valores numéricos')
                entradaDados.close();
            
            }else{
                
                resultado = matematica.calcular(valor1, valor2, operacao);
               
               
                //valida se o retorno da funçao é verdadeira ou falso(se for falso encerra o programa)
                //if(resultado == false && typeof(resultado) == 'boolean')
               
                if(resultado === false)
                    entradaDados.close();
                else    
                    console.log(resultado);


                
            }
        });
    });
    
});

//enradaDados.close(); fecha o objeto entrada de dados(encerra o programa)
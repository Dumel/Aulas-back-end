/******************************************************************* *
 * Objetivo: Criar um app que tenha como entrada 2 valores e realize as quatro operações matematicas
 * somar, subtrair, multiplicar, dividir
 * Data: 27/01/20023
 * Autor: Dumel
 * Versão: 1.0
 * *******************************************************************/

const {stdin, stdout} = require ('process');

var readLine = require ('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número: ', function(numero1){
    let numero = numero1;

    entradaDados.question('Digite a operação: ', function(operacao1){
        let operacao = operacao1;

        entradaDados.question('Digite o segundo valor', function(numero2){
            let segundoValor = numero2;
        })

        if(numero == '' || operacao == '' || segundoValor == ''){
            console.log('O espaço deve ser preenchido!!');
        
        }else if(isNaN (numero) || isNaN (segundoValor))
        {
            console.log('Por favor, digite apenas números na primeira aba')
        } 
    })
})
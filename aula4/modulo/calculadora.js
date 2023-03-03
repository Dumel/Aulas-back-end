/*
*Objetivo: arquivo de funções para realizar calculos matemáticos
*Data: 03/2/2023
*Autor: Melqui
*Versão: 1.0
*/

const pi = 3.14;
//Realizar calculo matemático das 4 operações (SOMAR, SUBTRAIR, MULTIPLIACAR e DIVIDIR)
// function calcular(numero1, numero2, tipoCalc) {

    
    
// }

const calcular = function(numero1, numero2, tipoCalc) {
    let valor1 = Number (numero1);
    let valor2 = Number (numero2);
    let operacao = tipoCalc.toUpperCase();

    let resultado;
    let status = true; //variavel nooleana para identificar o status do calculo


    // if (operacao == 'SOMAR')
    //     resultado = Number(valor1) + Number(valor2);
    // else if (operacao == 'SUBTRAIR')
    //     resultado = Number(valor1) - Number(valor2);
    // else if (operacao == 'MULTIPLICAR')
    //     resultado = Number(valor1) * Number(valor2);
    // else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('Erro: Não é possivel fazr uma divisão por 0.');
    //         entradaDados.close();
    //         status = false;
    //     }

    //     else
    //         resultado = Number(valor1) / Number(valor2);
    // }
    // else {
    //     console.log('ERRO: A operação informada não é valida. Confira a sua entrada.')
    //     status = false;
    // }

    switch (operacao)
    {
        case 'SOMAR':
             resultado = somar (valor1, valor2);
             break

        case 'SUBTRAIR':
              resultado = subtrair (valor1, valor2);
              break

        case 'MULTIPLICAR':
              resultado = multiplicar (valor1, valor2);
              break

        case 'DIVIDIR': 
        if (valor2 == 0) {
            console.log('Erro: Não é possivel fazr uma divisão por 0.');
            entradaDados.close();
             status = false;
             }else
                resultado = dividir (valor1 , valor2)

             break;

        default: //similar ao else final de uma estrutura baseada em if / else (se nenhuma das opções for verdadeira
        //sempre passara pelo default)

            console.log('ERRO: A operação informada não é valida. Confira a sua entrada.')
                 status = false;
    }

    //validação para tratar a variável resultado quando nenhum cálculo é realizado 
    if (resultado != undefined) 
        return resultado;
    else
        return status;    
}

//forma 3 de se criar uma função em JS. (Modelo arrow function)

const somar       = (valor1, valor2)    => Number (valor1) + Number(valor2);
const subtrair    = (valor1, valor2)    => Number (valor1) - Number(valor2);
const multiplicar = (valor1, valor2)    => Number (valor1) * Number(valor2);
const dividir     = (valor1, valor2)    => Number (valor1) / Number(valor2);




module.exports = {
    calcular
}
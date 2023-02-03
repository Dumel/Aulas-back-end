/*
*Objetivo: arquivo de funções para realizar calculos matemáticos
*Data: 03/2/2023
*Autor: Melqui
*Versão: 1.0
*/

const pi = 3.14;
//Realizar calculo matemático das 4 operações (SOMAR, SUBTRAIR, MULTIPLIACAR e DIVIDIR)
function calcular(numero1, numero2, tipoCalc) {

    let valor1 = Number (numero1);
    let valor2 = Number (numero2);
    let operacao = tipoCalc.toUpperCase();

    let resultado;


    if (operacao == 'SOMAR')
        resultado = Number(valor1) + Number(valor2);
    else if (operacao == 'SUBTRAIR')
        resultado = Number(valor1) - Number(valor2);
    else if (operacao == 'MULTIPLICAR')
        resultado = Number(valor1) * Number(valor2);
    else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('Erro: Não é possivel fazr uma divisão por 0.');
            entradaDados.close();
        }

        else
            resultado = Number(valor1) / Number(valor2);
    }
    else {
        console.log('ERRO: A operação informada não é valida. Confira a sua entrada.')
        entradaDados.close();
    }

    //validação para tratar a variável resultado quando nenhum cálculo é realizado 
    if (resultado != undefined) 
        return resultado
    else
        return false;    
    
}
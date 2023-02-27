/*********************************************
 * Objetivo: trabalhando com array
 * Data: 24/02/2023
 * Autor: Marcel
 * Versão: 1.0
 ********************************************/

//[] - significa que estamos manipulando um array de dados
//{} - significa que estamos manipulando um formato JSON de dados

const listaNomes = ['José', 'Maria', 'Luiz', 'Carlos', 'Léo']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'scanner', 'WebCam']
// const listProdutos = ['Teclado', 'Mouse', 'Monitor']
const listaProdutosJSON = {};
/*
exemplo de jason com array

    produtos = {
        [
            {nome: "teclado", cor: "vermelho", quantidade: 70}
            {nome: "teclado", cor: "preto", quantidade: 50}
            {nome: "teclado", cor: "rosa", quantidade: 80}
        ]
    }


*/

const manipulandoElementos = function(){

//Verifica o tipo de dados de um indice (item) do array
console.log(typeof (listaNomes[1]))

//Exibe todos os elementos do arry
console.log(listaNomes);

//Exibe apenas um elemento conforme seu indice
console.log(listaNomes[0]);

console.log('O nome do usuario é' + listaNomes[0])
console.log(`O nome do usuario é  ${listaNomes[1]}`)

//length - permite contar quantos elementos tem um array
console.log(`A quantidade de itens do meu array é: ${listaNomes.length}`)

//Percorrendo um array usando while
let cont = 0;//Start

let qtdeItens = listaNomes.length; //Stop

console.log('Exibindo dados do array com while')  /******************************************************************** */
while (cont < qtdeItens) {
    console.log(`Nome: ${listaNomes[cont]}`)
    cont += 1;
}

//Percorrendo um arra usando FOR
console.log('Exibindo dados do array com FOR')
let qtdeNomes = listaNomes.length //Stop
for (let cont = 0; cont < qtdeNomes; cont++)
    console.log(`Nome: ${listaNomes[cont]}`)

//Percorrendo um array usando FOREACH
console.log('Exibindo dados do array com FOREACH')

//forEach é um método de um objeto array, que retorna uma função de call back
listaNomes.forEach(function (nomes) {
    console.log(`Nome: ${nomes}`)
})

//Adicionando elementos novos no array
//push - adiciona elementos no final do array
listaNomes.push('Alexandre')
listaNomes.push('Melqui', 'Lucas', 'Gê')
console.log(listaNomes)

//unshift - adiciona elementos no inicio do array (ele alterar todos
// posição de todos od próximos elementos)
listaNomes.unshift('Ana Maria')
console.log(listaNomes)

//Renovando elementos do array
//pop remove o ultimo elemento do array
listaNomes.pop();
console.log(listaNomes)

    //shift - remove o primeiro elemento do array (reorganiza todos os
    // próximos elementos)
    listaNomes.shift();
    console.log(listaNomes)

    //Forma errada de manipular um conjunto de dados
    // const nome1 = Melqui
    // const nome2 = Maria
    // const nome3 = Milena
    // const nome4 = Mirela

}

const filtrandoElementos = function(){
//indexOf - Permite vbuscar elementos dentro de um array
    // Se retorno for -1 (não encontrou o item)
    // se o retorno for maior ou igual a 0 (item encontrado)
console.log(listaProdutos)
// console.log(listaProdutos.indexOf('Fone de Ouvido'))

if(listaProdutos.indexOf('Fone de Ouvido') >=0)
    console.log('O item pesquisado foi encontrado')
else
    console.log('O item pesquisado não foi encontrado')

//slice - permite criar uma réplica do array
// const novosProdutos = listaProdutos.slice();
const novosProdutos = listaProdutos.slice(0, 3);

console.log(listaProdutos)
console.log(novosProdutos)
}

const removerElementos = function(array, nomeProduto){
    //Cria uma cópia do array
    let novaLista = array.slice();

    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status;

    //splice - permite remover um elemento do array, pelo indice
    if(indice >= 0){
        novaLista.splice(indice, 3)
        status = true
    }else{
        status = false;
    }

    if(status)
        return novaLista
    else
        return status
}


const listagemProdutos = function(){
    let listaProdutosJSON = {}
    
    let listProdutos = [
                        {nome: 'Teclado DELL', valor: 200, quantidade: 50},
                        {nome: 'Monitor DELL', valor: 1200, quantidade: 70},
                        {nome: 'Mouse DELL', valor: 100, quantidade: 350}
                        ]

    let listCores = ['Branco', 'Preto', 'Cinza'];
    let listTipoTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana']
    let listTipoMonitor = ['LCD', 'Full-HD', '4K', 'OLED']

    // Adiciona chaves (opções) no teclado
    listProdutos[0].cores = listCores;
    listProdutos[0].tipo = listTipoTeclado

    //Adiciona chaves (opções) no monitor
    listProdutos[1].cores = listCores;
    listProdutos[1].tipo = listTipoMonitor;

    //Adiciona chaves (opcões) no Mouse
    listProdutos[2].cores = listCores
                    
    //Adiciona uma chave produtos e coloca toda a estrutura dos produtos dentro dela
    listaProdutosJSON.produtos = listProdutos;

    //retorna todos os dados de produto(1)
    listaProdutosJSON.produtos.forEach(function(dadosProduto){
        console.log('Nome:' + dadosProduto.nome)
        console.log('Valor:' + dadosProduto.valor)
        //Retorna todas as cores existentes para cada produto
        
        if(dadosProduto.cores != undefined){
        console.log('Cores:')
        dadosProduto.cores.forEach(function(dadosCores){
            console.log('**' + dadosCores);
        })
    }
        // validacao para tratar quando nao existe tipos do produto

        if(dadosProduto.tipo != undefined){
        console.log('Tipo:')
        //Retorna os tipos existentes para cada produto
        dadosProduto.tipo.forEach(function(dadosTipo){
            console.log('***' + dadosTipo);
            })
        }
    })

    // let cont = 0;
    // let tantosProdutos = listProdutos.length

    // console.log('Produtos disponíveis')
    // while (cont < tantosProdutos){
    //     console.log(`Produtos: ${listProdutos[cont]}\n`)
    //     cont+=1
    // }

    // console.log(listaProdutosJSON)

    // console.log('Nome:' + listaProdutosJSON.produtos[1].nome);
    // console.log('\n Valor:' + listaProdutosJSON.produtos[1].valor);
    // console.log('\n Cor:' + listaProdutosJSON.produtos[1].cores[1]);


    
    // listaProdutosJSON.produtos = listaProdutos;
    // listaProdutosJSON.clientes = listaNomes;


    //console.log(listaProdutosJSON)
    // console.log(listaProdutosJSON.clientes[1])
}

listagemProdutos();

// console.log(removerElementos(listaNomes, 'Maria'))
// console.log(listaNomes)

 
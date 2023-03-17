/********************** 
 * Objetivo: Criar uma API para manipulação de dados de estados e cidades
 * Autor: Melqui
 * Data: 10/03/2023
 * Versão: 1.0
 * 
*/

/**
 * Express - Dependencia Node, que permite a integração entre o protocolo http com o código
 *        npm install express --saves
 * 
 * Cors - Gerenciador de permissões para o protocolo http
 *       npm install cors --save
 * 
 * Body-parser - É uma dependencia que permite manipular dados enviados pelo body da requisição
 *       npm install body-parser --save
 */

//Import da dependencias para criar a API


//responsável pelas resições
const express = require('express')
//Responsavel pelas permissões das requisições
const cors = require('cors')
//Responsavel pela manipulação do body da requisição
const bodyParser = require('body-parser')

//Import do arquivo de funções
const estadosCidades = require('./modulo/estados_cidades.js')

const { request, response } = require('express')


//Cria um objetivo com as informações da classa express
const app = express()


//Define as permissões no header da API
app.use((request, response, next) => {

    //permite gerencia a origem das requisições da API
    // * - Significa que a API será publica
    //IP - se colocar o IP, a API somente responderá para aquela máquina
    response.header('Access-Control-Allow-Origin', '*')

    //permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //ativa os cors das quesições as permissões estabelecidas
    app.use(cors())

    next()
})


//endPoint para listar os estados
app.get('/v1/senai/estados', cors(), async function (request, response, next) {



    let listaDeEstados = estadosCidades.getListaDeEstados()

    //tratamento pra validar se a função realizou o processamento
    if (listaDeEstados) {

        //Retorna o Json e o Status code
        response.json(listaDeEstados)
        response.status(200)

    } else {
        response.status(500)
    }



})

//endPoint: Lista as caracteristicas do estado pela sigla
app.get('/v1/senai/estado/sigla/:uf', cors(), async function (request, response, next) {
    //:uf - é uma variável que será utilizado para passagens de valores, na URL da equisição


    //recebe o valor da variável uf que será encaminhada na
    // url da requisição
    let siglaEstado = request.params.uf
    let statusCode
    let dadosEstado = {}

    //tratamento para validar os valores encaminhados no parametro
    if (siglaEstado == "" || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = 'Não é possivel processar a requisição pois a sigla do estado não foi informada'
    } 
    else {
        let estado = estadosCidades.getDadosEstado(siglaEstado)
       
        if (estado){
            statusCode = 200
            dadosEstado = estado
        }
        else{
            statusCode = 404 //estado não encontrado

        }
    }

    response.status(statusCode)
    response.json(dadosEstado)
   
})

app.get('/v1/senai/estado/capital/sigla/:uf', cors(), async function (request, response, next){
    let capitalEstado = request.params.uf
    let statusCode
    let dadosCapital = {}

    if (capitalEstado == "" || capitalEstado == undefined || capitalEstado.length != 2 || !isNaN(capitalEstado)){
        statusCode = 400
        dadosCapital.message = 'Não é possivel processar a requisição pois a sigla do estado não foi informada'
    }
    else{
        let capital = estadosCidades.getCapitalEstado(capitalEstado)

        if (capital){
            statusCode = 200
            dadosCapital = capital
        }

        else{
            statusCode = 404 //etado não encontrado
        }
        
    }

    response.status(statusCode)
    response.json(dadosCapital)
})

app.get('/v1/senai/estado/regiao/:regiao', cors(), async function (request, response, next){
    let regiaoAll = request.params.regiao
    let statusCode
    let dadosRegiao = {}
    

    if (regiaoAll == '' || regiaoAll == undefined || !isNaN(regiaoAll)){
        statusCode = 400
        dadosRegiao.message = 'Não é possivel processar a requisição pois a sigla do estado não foi informada'
    }
    else{
        let regiao = estadosCidades.getEstadosRegiao(regiaoAll)

        if (regiao){
            statusCode = 200
            dadosRegiao = regiao
        }
        else{
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosRegiao)
    
})

app.get('/v1/senai/estado/capital/pais', cors(), async function (request, response, next){
    let listaCapitalPais = estadosCidades.getCapitalPais()

    //tratamento pra validar se a função realizou o processamento
    if (listaCapitalPais) {

        //Retorna o Json e o Status code
        response.json(listaCapitalPais)
        response.status(200)

    } else {
        response.status(500)
    }
})

//EndPoint: Lista de cidades filtrada pela sigla do estado
app.get('/cidades', cors(), async function(request, response, next){
    let siglaEstado = request.query.uf

    //Recebe o valor de variavel que sera enviada por QueryString
        //Ex: www.uol.com.br?uf=sp&cep=8695&nome=pedro
    
        /*
            usamos a query para receber diversas variaveis para realizar filtros
            usamos o params para receber ID (PK), geralmente
                para fazer put, delete e get
        */
   

    
    let statusCode
    let dadosCidades = {}

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400
        dadosCidades.message = 'Não é possivel processar a requisição pois a sigla do estado não foi informada'
    }
    else{
        let cidade = estadosCidades.getCidades(siglaEstado)

        if (cidade){
            statusCode = 200
            dadosCidades = cidade
        }
        else{
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCidades)


})

    //EndPoint versão 2: lista de cidades filtrada pela sigla do estado
    //com mais detalhes 
app.get('v2/senai/cidades', cors(), async function(request, response, next){

})

// app.get('/estado/cidade/sigla/:uf', cors(), async function(request, response, next){
//     let cidadesAll = request.params.uf
//     let statusCode
//     let dadosCidades = {}

//     if (cidadesAll == '' || cidadesAll == undefined || !isNaN(cidadesAll)){
//         statusCode = 400
//         dadosCidades.message = 'Não é possivel processar a requisição pois a sigla do estado não foi informada'
//     }
//     else{
//         let cidade = estadosCidades.getCidades(cidadesAll)

//         if (cidade){
//             statusCode = 200
//             dadosCidades = cidade
//         }
//         else{
//             statusCode = 404
//         }
//     }

//     response.status(statusCode)
//     response.json(dadosCidades)
// })


//Permite carregar os endPoints criados e aguardar as requisições
//pelo protocolo http na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})


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
const { request, response } = require('express')


    //Cria um objetivo com as informações da classa express
    const app = express()

    app.use((request, response, next)=>{

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

    //endPoints

    //endPoint para listar os estados
    app.get('/estados', cors(), async function(request, response, next){

        const estadosCidades = require('./modulo/estados_cidades.js')
        let listaDeEstados = estadosCidades.getListaDeEstados()
        
        response.json(listaDeEstados)
        response.status(200)

    })

    //Permite carregar os endPoints criados e aguardar as requisições
    //pelo protocolo http na porta 8080
    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080.')
    })


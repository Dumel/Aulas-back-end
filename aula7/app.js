/********************** 
 * Objetivo: Criar uma API para manipulação de dados do zap zap
 * Autor: Melqui
 * Data: 24/03/2023
 * Versão: 1.0
 * 
*/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const contatos = require('./modulo/contatos.js')
const { request, response } = require('express')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

app.get('/v1/whatsapp/numero', cors(), async function(request, response, next){

    let numberContato = request.query.number
    let statusCode
    let dadosDoUsuario = {}

    if(numberContato == '' || numberContato == undefined || isNaN(numberContato)) {
        statusCode
        dadosDoUsuario.message = "Não é possivel processar a requisição pois não atende a quantidade de caracteres"
    
    }else{

        let contato = contatos.getNumero(numberContato)

        if (contato) {
            statusCode = 200
            dadosDoUsuario = contato
        }else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosDoUsuario)
})

app.get('/v1/whatsapp/id', cors(), async function(request, response, next){
    let idContato = request.query.id
    let statusCode
    let idUsuario = {}

    if(idContato == '' || idContato == undefined || isNaN(idContato)) {
        statusCode
        idUsuario.message = "Não é possivel processar a requisição pois não atende a quantidade de caracteres"
    
    }else{

        let id = contatos.getIdContacts(idContato)

        if (id) {
            statusCode = 200
            idUsuario = id
        }else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(idUsuario)
})

app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})

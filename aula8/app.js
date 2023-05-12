/********************************************************************************************************************************************************** 
 * Objetivo: API para interagir com o banco de dados (GET, POST, DELETE, PUT)
 * Autor: Melqui
 * Data: 14/04/2023
 * Versão: 1.0
 
**********************************************************************************************************************************************************/
/******
    Para realizar a conexão com o Banco de dados iremos utilizar o PRISMA   
        npm install prisma --save
        npx prisma
        npx prisma init
        npm install @prisma/client
 */

//Import das bibliotecas

const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

//Criar objeto app utilizando a classe do express
const app = express()

//Configura as permissões do cors
app.use((request, response, next) => {
    //Permissões de origem da requisição
    response.header('Access-Control-Allow-Origin', '*')

    //permissões de metodos que serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Define as permissões para o cors
    app.use(cors())

    //continua para a leitura dos EndPoints
    next()
})

//CRUD (Create, Read, Update, e Delete)

//Criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição
const bodyJSON = bodyParser.json()

let controllerAluno = require('./controller/controller_aluno.js')
const controller_aluno = require('./controller/controller_aluno.js')
const message = require('./controller/modulo/config.js')

//EndPoints retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function(request, response){

    

    //Solicita a controller que retorne todos os alunos do BD
    let dados = await controllerAluno.selecionarTodosAluno()

    //Valida se existem registros para retornar na requisição
    response.status(dados.status)
    response.json(dados)
})

//EndPoints retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    let idAluno = request.params.id;

     //Solicita a controller que retorne todos os alunos do BD
     let dados = await controllerAluno.buscarIdAluno(idAluno)

     //Valida se existem registros para retornar na requisição
     response.status(dados.status)
     response.json(dados)
})

//EndPoints inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response){
    
    let contentType = request.headers['content-type']
    
    if (String (contentType).toLowerCase() == 'application/json') {
    

    //Recebe os dados encaminhados no body da requisição
    let dadosBody = request.body

   

    let resultInsertDados = await controllerAluno.inserirAluno(dadosBody)

    console.log(resultInsertDados);

    //Retorna o status code e a message
    response.status(resultInsertDados.status)
    response.json(resultInsertDados)

    }else{
        response.status(message.ERROR_CONTENT_TYPE.status)
        response.json(message.ERROR_CONTENT_TYPE)
    }
    
})

//EndPoints que atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function(request, response){
    //Recebe os dados do body
    let dadosBody = request.body

    //Recebe o id do aluno
    let idAluno = request.params.id

    let resultUpdateDados = await controller_aluno.AtualizarAluno(dadosBody, idAluno)

    response.status(resultUpdateDados.status)
    response.json(resultUpdateDados)



    
})

//EndPoints que exclui um aluno pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){
    
    let idAluno = request.params.id

    let resultDeleteDados = await controller_aluno.deletarAluno(idAluno)

    response.status(resultDeleteDados.status)
    response.json(resultDeleteDados)
})


app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080');
})


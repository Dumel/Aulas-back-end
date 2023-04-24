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



//EndPoints retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function(request, response){

    let controllerAluno = require('./controller/controller_aluno.js')

    //Solicita a controller que retorne todos os alunos do BD
    let dados = await controllerAluno.selecionarTodosAluno()

    //Valida se existem registros para retornar na requisição
    if(dados){
        response.json(dados)
        response.status(200)
    }else{
        response.json()
        response.status(404)
    }
})

//EndPoints retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){
})

//EndPoints inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), async function(request, response){
})

//EndPoints que atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno', cors(), async function(request, response){  
})

//EndPoints que exclui um aluno pelo ID
app.delete('/v1/lion-school/aluno', cors(), async function(request, response){
    
})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080');
})


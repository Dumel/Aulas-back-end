/********************************************************************************************************************************************************** 
 * Objetivo: API para interagir com o banco de dados (GET, POST, DELETE, PUT)
 * Autor: Melqui
 * Data: 14/04/2023
 * Versão: 1.0
 
**********************************************************************************************************************************************************/

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


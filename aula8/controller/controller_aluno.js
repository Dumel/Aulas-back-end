/********************************************************************************************************************************************************** 
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Melqui
 * Data: 24/04/2023
 * Versão: 1.0
 
**********************************************************************************************************************************************************/


let alunoDAO = require('../model/DAO/alunoDAO.js')
//Função para receber os dados do APP e enviar para a model 
const inserirAluno = async function(dadosAluno){

    let message = require('./modulo/config.js')
    let erro = {}

    if( dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf.length      > 18  ||  
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg.length       > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined || dadosAluno.email.length    > 250  
       
        ){
            message.ERROR_REQUIRED_DATA
        
        }else{
            //Envia os dados para a model a serem inseridos no BD
            let status = await alunoDAO.insertAluno(dadosAluno)
            console.log(status);
            if(status)
                return message.CREATED_ITEM
            else
               return message.ERROR_INTERNAL_SERVER
        }
        
    
}

//Função para receber os dados do APP e enviar para a model para atualizara um item existente
const AtualizarAluno = function(dadosAluno){
}

//Função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = function(id){
}

//Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAluno = async function(){
    //Import do arquivo do acessso ao BD
    

    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno()

    //Cria um objeto do tipo JSON
    let dadosJSON = {}

    //Valida se o bd teve registros
    if(dadosAluno){
        //Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    }else
        return false
}

//Função para buscar um item filtrado pelo id, que será encaminhado para a model
const buscarIdAluno = function(id){

}

module.exports = {
    selecionarTodosAluno,
    inserirAluno
}
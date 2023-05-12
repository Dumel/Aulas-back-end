/********************************************************************************************************************************************************** 
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Melqui
 * Data: 24/04/2023
 * Versão: 1.0
 
**********************************************************************************************************************************************************/


const alunoDAO = require('../model/DAO/alunoDAO.js')
//Função para receber os dados do APP e enviar para a model 

const message = require('./modulo/config.js')


const inserirAluno = async function (dadosAluno) {

    let erro = {}

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 250

    ) {
        message.ERROR_REQUIRED_DATA

    } else {

        //Envia os dados para a model a serem inseridos no BD
        let status = await alunoDAO.insertAluno(dadosAluno)

        console.log(status);

        if (status) {

            let dadosJSON = {}

            let alunoNovoId = await alunoDAO.selectLastId();
            dadosAluno.id = alunoNovoId;

            dadosJSON.status = message.CREATED_ITEM.status
            dadosJSON.aluno = dadosAluno

            return dadosJSON

        }else

            return message.ERROR_INTERNAL_SERVER

    }


}

//Função para receber os dados do APP e enviar para a model para atualizara um item existente
const AtualizarAluno = async function (dadosAluno, idAluno) {

    if (dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf.length      > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg.length       > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined || dadosAluno.email.length    > 250

    ) {
        return message.ERROR_REQUIRED_DATA

        //Validação para o ID
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {

        return message.ERROR_REQUIRED_ID
    
    } else {
        //Add o id no json com todos os dados
        dadosAluno.id = idAluno

        let status = await alunoDAO.UpdateAluno(dadosAluno)

        if (status) {
            
            let dadosJSON = {}

            dadosJSON.status = message.UPDATE_ITEM.status
            dadosJSON.aluno = dadosAluno

            return dadosJSON
        
        }else

            return message.ERROR_INTERNAL_SERVER

    }
}

//Função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = async function (idAluno) {
    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {

        return message.ERROR_REQUIRED_ID

    } else {


        let status = await alunoDAO.deleteAluno(idAluno)

        if (status)
            return message.DELETE_ITEM
        else
            return message.ERROR_INTERNAL_SERVER
    }
}

//Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAluno = async function () {
    //Import do arquivo do acessso ao BD


    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno()

    //Cria um objeto do tipo JSON
    let dadosJSON = {}

    //Valida se o bd teve registros
    if (dadosAluno) {
        //Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.status = 200
        dadosJSON.count = dadosAluno.length
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    } else {

        return message.ERROR_NOT_FOUND
    }

}
//Função para buscar um item filtrado pelo id, que será encaminhado para a model
const buscarIdAluno = async function (id) {

    //Validação para id
    if (id == '' || id == undefined || isNaN(id))
        return message.ERROR_REQUIRED_ID
    else {


        //Solicita ao DAO todos os alunos do BD
        let dadosAluno = await alunoDAO.selectByIdAluno(id)

        //Cria um objeto do tipo JSON
        let dadosJSON = {}

        //Valida se o bd teve registros
        if (dadosAluno) {
            //Adiciona o array de alunos e um JSON para retornar ao app
            dadosJSON.status = 200
            dadosJSON.alunos = dadosAluno
            return dadosJSON

        } else {

            return message.ERROR_NOT_FOUND
        }

    }

}

module.exports = {
    selecionarTodosAluno,
    inserirAluno,
    AtualizarAluno,
    deletarAluno,
    buscarIdAluno
}


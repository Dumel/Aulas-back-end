/********************************************************************************************************************************************************** 
 * Objetivo: API para interagir com o banco de dados (GET, POST, DELETE, PUT)
 * Autor: Melqui
 * Data: 14/04/2023
 * Versão: 1.0
 
**********************************************************************************************************************************************************/


//Import da biblioteca do prisma client (responsável por manipular dados no BD)
const { PrismaClient } = require('@prisma/client')
//const { Sql } = require('@prisma/client/runtime')

//Instancia da classe do PrismaClient
const prisma = new PrismaClient()


//Inserir um novo Registro no Banco de Dados
const insertAluno = async function (dadosAluno) {

    //Script SQL para inserir os dados no BD
    let sql = `insert into tbl_aluno (

            nome, 
            cpf, 
            rg, 
            data_nascimento, 
            email
            
            )

            values(

           ' ${dadosAluno.nome}',
            '${dadosAluno.cpf}',
            '${dadosAluno.rg}',
            '${dadosAluno.data_nascimento}',
            '${dadosAluno.email}'
            
            )`;

            console.log(sql);
    //Executa o script SQL no BD e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql)
console.log(result);
    if(result)
        return true

    else
        return false
    
}

//Atualizar um registro existente no banco de dados
const UpdateAluno = async function (dadosAluno) {
    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                        where id = ${dadosAluno.id}`

    let result = await prisma.$executeRawUnsafe(sql)

    if (result)
        return true
    else
        return false
    
}

//Excluir um registro no Banco de dados
const deleteAluno = async function (id) {
    let sql = `delete from tbl_aluno 
                        where id = ${id}`

    let result = await prisma.$executeRawUnsafe(sql)

    if (result)
        return true
    else
        return false
}

//Retorna todos os registros do banco de dados
const selectAllAluno = async function (dadosAluno) {


    //Variável com scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno'

    //Executa bo banxo de dados o scriptSQL
    //$queryRawUnsafe() é utilizado quando o scriptSQL estar em uma variável
    //$queryRaw() é utilizado quansonpassar o scipt direto no metodo(Ex>$queryRaw('select * from tbl_aluno'))
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0)
        return rsAluno
    else
        return false


}

//retorna um Registro do banco de dados
const selectByIdAluno = async function (id) {
    //Variável com scriptSQL para executar no BD
    let sql = `select * from tbl_aluno where id = ${id}`

    //Executa bo banxo de dados o scriptSQL
    //$queryRawUnsafe() é utilizado quando o scriptSQL estar em uma variável
    //$queryRaw() é utilizado quansonpassar o scipt direto no metodo(Ex>$queryRaw('select * from tbl_aluno'))
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0)
        return rsAluno
    else
        return false
}

const selectLastId = async function(){

    //Script 
    let sql = `select id from tbl_aluno order by id desc limit 1`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0)
        return rsAluno[0].id
    else
        return false
}

module.exports = {
    selectAllAluno,
    insertAluno,
    UpdateAluno,
    deleteAluno,
    selectByIdAluno,
    selectLastId
}

/********************************************************************************************************************************************************** 
 * Objetivo: Arquivo responsável pelas variaveis, constantes e funções globais do projeto
 * Autor: Melqui
 * Data: 28/04/2023
 * Versão: 1.0
 
**********************************************************************************************************************************************************/

/********************************************CONSTANTES DE ERROS *********************************************** */

 const ERROR_REQUIRED_DATA = {status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'}
 const ERROR_INTERNAL_SERVER = {status: 500, message: 'Erro interno no servidor do bda.'}

/********************************************CONSTANTES DE ERROS *********************************************** */
 const CREATED_ITEM = {status:  201, message: 'Registro criado com sucesso.'}

module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM
}
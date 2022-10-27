/*1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
2. Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;
3. Buscar um produto pelo nome e retornar o id dele;
E.: Entrada = Mouse Médio
Retorno = 2*/

let ids = []
let nomes = []
let precos = []
let avaliacao = []
let index = 0

function Cadastro() {
    ids[index] = prompt("ID do produto: ")
    nomes[index] = prompt("Nome do produto: ")
    precos[index] = prompt("Preço do produto: ")
    avaliacao[index] = prompt("Avaliação do produto: ")
    index++
}

function BuscaID(id) {
    for(var i = 0;i <= ids.length; i++){
        if(id == ids[i]){
            console.log(ids[i])
            console.log(nomes[i])
            console.log(precos[i])
            console.log(avaliacao[i])
        }
    }
}

function BuscaNome(nome) {
    for(var i = 0; i <= ids.length; i++){
        if(nome == nomes[i]){
            console.log("ID do produto = " + ids[i])
        }
    }
}


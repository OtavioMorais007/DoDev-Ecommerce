/*1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
2. Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;
3. Buscar um produto pelo nome e retornar o id dele;
E.: Entrada = Mouse Médio
Retorno = 2
4. Exibir todos os produtos ordenados pelo id;
5. Exibir os produtos ordenados pelo preço;
6. Exibir os produtos pela ordem de avaliação;
7. Atualizar o preço de um produto, para isso deve receber o id do produto como
parâmetro e o novo valor para atualizar
8.Deletar um produto, não esqueça de organizar as informações para que não fique
espaços vazios*/

let ids = [3, 2, 5, 1, 4]
let nomes = ["Mouse Bom", "Mouse Médio", "Monitor Bom", "Mouse Ruim", "Teclado Médio"]
let precos = [70, 150, 200, 700, 20]
let avaliacao = [5, 2, 3, 5, 1]
let index = 0
let numeroID = 0
let id
let idsSup = []
let nomeSup = []
let precosSup = []
let avaliacaoSup = []
let ids3 = []
let nome3 = []
let preco3 = []
let avaliacao3 = []
let maiorID = 0
let maiorPreco = 0
let maiorAvaliacao = 0
let indexSup
let continuar = true
let nome
let opcao
let nomesProdutos = []
let quantidadesProdutos = []
let nomeProduto
let quantidadeProduto
let nomesProSup = []
let quantidadeProSup = []
let indexCarrinho = 0



function Cadastro() {
    ids[index] = numeroID
    nomes[index] = prompt("Nome do produto: ")
    precos[index] = parseInt(prompt("Preço do produto: "))
    avaliacao[index] = prompt("Avaliação do produto: ")
    index++
    numeroID++
}

function BuscarID() {
    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < ids.length; j++) {
            if (ids[i] > ids[j]) {
                precosSup[j] = precos[j]
                nomeSup[j] = nomes[j]
                idsSup[j] = ids[j]
                avaliacaoSup[j] = avaliacao[j]

                precos[j] = precos[i]
                nomes[j] = nomes[i]
                ids[j] = ids[i]
                avaliacao[j] = avaliacao[i]

                precos[i] = precosSup[j]
                nomes[i] = nomeSup[j]
                ids[i] = idsSup[j]
                avaliacao[i] = avaliacaoSup[j]
            }
        }
    }

    id = prompt("Qual o id que a ser buscado ?")
    console.log("ID: " + id[buscarid - 1] + "\t" + "Nome: " + nome[buscarid - 1] + "\t" + "Preço: " + preco[buscarid - 1] + "\t" + "Avaliação: " + avaliacao[buscarid - 1])
}

function BuscaNome() {
    nome = prompt("Qual o nome desejado para realizar a busca?")
    for (let i = 0; i < ids.length; i++) {
        if (nome == nomes[i]) {
            console.log("Nome do produto: " + nomes[i])
            console.log("ID do produto: " + ids[i])
            console.log("-----------------------------------------")
        }
    }
}

function ExibirID() {

    idsSup = []
    nomeSup = []
    precosSup = []
    avaliacaoSup = []

    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < ids.length; j++) {
            if (ids[i] > ids[j]) {
                precosSup[j] = precos[j]
                nomeSup[j] = nomes[j]
                idsSup[j] = ids[j]
                avaliacaoSup[j] = avaliacao[j]

                precos[j] = precos[i]
                nomes[j] = nomes[i]
                ids[j] = ids[i]
                avaliacao[j] = avaliacao[i]

                precos[i] = precosSup[j]
                nomes[i] = nomeSup[j]
                ids[i] = idsSup[j]
                avaliacao[i] = avaliacaoSup[j]
            }
        }
    }

    for (let j = 0; j < ids.length; j++) {
        console.log("Ordenado por ID..." + "\t" + "ID do produto: " + ids[j] + "\t" + "Nome do produto: " + nomes[j] + "\t" + "Preço do produto: " + precos[j] + "\t" + "Avaliação do produto: " + avaliacao[j])
        console.log("-----------------------------------------")
    }
}

function ExibirPreco() {

    idsSup = []
    nomeSup = []
    precosSup = []
    avaliacaoSup = []

    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < ids.length; j++) {
            if (precos[i] > precos[j]) {
                precosSup[j] = precos[j]
                nomeSup[j] = nomes[j]
                idsSup[j] = ids[j]
                avaliacaoSup[j] = avaliacao[j]

                precos[j] = precos[i]
                nomes[j] = nomes[i]
                ids[j] = ids[i]
                avaliacao[j] = avaliacao[i]

                precos[i] = precosSup[j]
                nomes[i] = nomeSup[j]
                ids[i] = idsSup[j]
                avaliacao[i] = avaliacaoSup[j]
            }
        }
    }

    for (let j = 0; j < ids.length; j++) {
        console.log("Ordenado por preço..." + "\t" + "ID do produto: " + ids[j] + "\t" + "Nome do produto: " + nomes[j] + "\t" + "Preço do produto: " + precos[j] + "\t" + "Avaliação do produto: " + avaliacao[j])
        console.log("-----------------------------------------")
    }
}

function ExibirAvaliacao() {

    idsSup = []
    nomeSup = []
    precosSup = []
    avaliacaoSup = []

    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < ids.length; j++) {
            if (avaliacao[i] > avaliacao[j]) {
                precosSup[j] = precos[j]
                nomeSup[j] = nomes[j]
                idsSup[j] = ids[j]
                avaliacaoSup[j] = avaliacao[j]

                precos[j] = precos[i]
                nomes[j] = nomes[i]
                ids[j] = ids[i]
                avaliacao[j] = avaliacao[i]

                precos[i] = precosSup[j]
                nomes[i] = nomeSup[j]
                ids[i] = idsSup[j]
                avaliacao[i] = avaliacaoSup[j]
            }
        }
    }

    for (let j = 0; j < ids.length; j++) {
        console.log("Ordenado por avaliação..." + "\t" + "ID do produto: " + ids[j] + "\t" + "Nome do produto: " + nomes[j] + "\t" + "Preço do produto: " + precos[j] + "\t" + "Avaliação do produto: " + avaliacao[j])
        console.log("-----------------------------------------")
    }
}

function AtualizarPreco() {
    let id = parseInt(prompt("Insira o ID que o preço vai ser alterado: "))
    let novoPreco = parseInt(prompt("Insira o novo preço: "))
    precos[id - 1] = novoPreco
}

function DeletarProduto() {
    indexSup = 0
    id = parseInt(prompt("Insira o id a ser excluído: "))
    for (let i = 0; i < ids.length; i++) {
        if (id == ids[i]) {
            ids[i] = 0
        }
    }


    for (let j = 0; j < ids.length; j++) {
        if (ids[j] != 0) {
            ids3[indexSup] = ids[j]
            nome3[indexSup] = nomes[j]
            preco3[indexSup] = precos[j]
            avaliacao3[indexSup] = avaliacao[j]
            indexSup++
        }
    }

    ids = ids3
    nomes = nome3
    precos = preco3
    avaliacao = avaliacao3
    index = index - 1
}

function CadastroGeral() {
    while (continuar == true) {
        opcao = parseInt(prompt("Insira a opção: 1- Cadastro; 2- Buscar por ID; 3- Buscar por nome; 4- Ordenar por ID; 5- Ordenar por Preço; 6- Ordenar por Avaliação; 7- Atualizar Preço; 8- Deletar produto; 9- Encerrar programa"))
        if (opcao == 1) {
            Cadastro()
            console.log("Produto cadastrado com sucesso!")
        }
        if (opcao == 2) {
            BuscarID()
        }
        if (opcao == 3) {
            BuscaNome()
        }
        if (opcao == 4) {
            ExibirID()
        }
        if (opcao == 5) {
            ExibirPreco()
        }
        if (opcao == 6) {
            ExibirAvaliacao()
        }
        if (opcao == 7) {
            AtualizarPreco()
        }
        if (opcao == 8) {
            DeletarProduto()
        }
        if (opcao == 9) {
            continuar = false
        }
    }
}

function AdicionarProduto() {
    nomeProduto = prompt("Qual produto deseja adicionar no carrinho?")
    quantidadeProduto = parseInt(prompt("Qual a quantidade de produtos a ser adicionado?"))

    let contador = 0
    let contador2 = 0

    for (let i = 0; i < nomesProduto.length; i++) {
        if (nomeProduto == nomesProdutos[i]) {
            quantidadesProdutos[i] = quantidadesProdutos[i] + quantidadeProduto
            contador++
        }
    }

    while (contador == 0) {
        for (let j = 0; j < nomes.length; j++) {
            if (nomeProduto == nomes[j]) {
                nomesProdutos[indexCarrinho] = nomeProduto
                quantidadesProdutos[indexCarrinho] = quantidadeProduto
                indexCarrinho++
                cont++
            }
        }
        if (cont == 0) {
            alert("Não existe nenhum produto com esse nome, confira o nome digitado.")
        }
    }
}

function ExcluirProduto() {
    nomeProduto = prompt("Informe o produto à ser excluído: ")
    quantidadeProduto = parseInt(prompt("Informe a quantidade à ser excluída: "))

    indexSup = 0
    nomesProSup = []
    quantidadeProSup = []

    for (let i = 0; i < nomesProdutos.length; i++) {
        if (nomeProduto == nomesProdutos[i] && quantidadesProdutos[i] == quantidadeProduto) {
            nomes[i] = 0
            quantidadesProdutos[i] = 0
            alert("Produto excluído")
        }
    }

    for (let j = 0; j < nomesProdutos.length; j++) {
        if (nomesProdutos[j] != 0 && quantidadesProdutos[j] != 0) {
            nomesProSup[indexSup] = nomesProdutos[j]
            quantidadeProSup[indexSup] = quantidadesProdutos[j]
            indexSup++
        }
    }

    nomesProdutos = nomesProSup
    quantidadesProdutos = quantidadeProSup
}

function ValorTotal() {
    let valorTotal = 0

    for (let i = 0; i < nomesProdutos.length; i++) {
        for (let j = 0; j < nomes.length; j++) {
            if (nomesProdutos[i] == nome[j]) {
                valorTotal = valorTotal + (precos[j] * quantidadesProdutos[i])
            }
        }
    }

    alert("O valor total do carrinho até o momento é de: R$" + valorTotal.toFixed)
}

function ListarProdutosValorCarrinho() {
    let valorTotal = 0
    let precosCarrinho = []
    let indexSupCarrinho = 0
    for (let i = 0; i < nomesProdutos.length; i++) {
        for(let j = 0; j < nomesProdutos.length; j++){
            if(nomesProdutos[i] == nome[j]){
                valorTotal = valorTotal + (precos[j] * quantidadesProdutos[i])
                precosCarrinho[indexSupCarrinho] = preco[j]
                indexSupCarrinho++
            }
        }
    }

    for(let i = 0; i <nomesProdutos.length; i++){
        console.log("Produto" + nomesProdutos[i] + "; Quantidade: " + quantidadesProdutos[i])
    }
    console.log("O valor total até o momento é de: " + valorTotal)
}

function CarrinhoDeVendas() {
    while (continuar == true) {
        opcao = parseInt(prompt("Insira a opção: 1- Adicionar produto no carrinho; 2- Excluir produto no carrinho; 3- Valor total dos produtos; 4- Listar produtos do carrinho e o valor total; 5- Sair do carrinho de compras"))

        if (opcao == 1) {
            AdicionarProduto()
        }
        if (opcao == 2) {
            ExcluirProduto()
        }
        if (opcao == 3) {
            ValorTotal()
        }
        if (opcao == 4) {
            ListarProdutosValorCarrinho()
        }
        if (opcao == 5) {
            condicao = false
        }

    }
}

while(continuarGeral == true){
    opcao = parseInt(prompt("Insira a opção: 1- Cadastro de produtos; 2- Carrinho de compras; 3- Finalizar programa"))

    if(opcao == 1){
        continuar = true
        CadastroGeral()
    }
    if(opcao == 2){
        continuar = true
        CarrinhoDeVendas()
    }
    if(opcao == 3){
        continuarGeral = false
    }
}




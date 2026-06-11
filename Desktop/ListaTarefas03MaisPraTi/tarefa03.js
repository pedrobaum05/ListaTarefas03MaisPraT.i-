// ------------------------------------- EXERCISES01 ------------------------------------------ //
/*
*Crie um objeto representando um produto com as propriedades: nome, preço,
*categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
*propriedades e seus valores. Em seguida, adicione uma nova propriedade
*desconto ao objeto e exiba o preço final calculado.
*/

const promptSync = require('prompt-sync')
const prompt = promptSync()

/*


//Objeto dos produtos
let objeto = { nome: 'Feijao', preco: 30, categoria: 'Leguminosa', quantidadeEstoque: 30 }
let precoFinal = 0
let desconto = 0

//Vai percorrer todas as propriedades dos objetos
for (let propriedade in objeto) {

    console.log(`${propriedade}: ${objeto[propriedade]}`)
}

//Vai adicionar e aplicar o desconto de 10%, no produto
objeto.desconto = 10 

//Calcula o preço final. Junto com o desconto aplicado no preço original do produto
precoFinal = objeto.preco - (objeto.preco * objeto.desconto / 100)

//Vai mostrar na saída o resumo do preço  original com o desconto aplicado e o preço final
console.log(`Preço original: R$ ${objeto.preco} | Desconto: ${objeto.desconto}% | Preço final: R$${precoFinal}`)
*/

// ------------------------------------- EXERCISES02 ------------------------------------------ //
/*
*Crie dois objetos representando personagens de um jogo, cada um com as
*propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
*cada personagem lado a lado e determine qual deles tem maior poder total
*(soma de vida + ataque + defesa).
*/

/*
//Os objetos são os dois personagens
let personagem01 = {nome:'Homem-Aranha', vida: 100, ataque: 90, defesa:70}
let personagem02 = {nome:'Mario-Bros',   vida: 100, ataque: 90, defesa:80}
let somaDeVida = 0
let ataque = 0
let defesa = 0

//Vai exibir os atributos/dados do personagem01
console.log(`\n------ Personagem 01 ------`)
for (let maiorPoder in personagem01){
    console.log(`${maiorPoder}: ${personagem01[maiorPoder]}`)
}

//Vai exibir os atributos/dados do personagem02
console.log(`\n------ Personagem 02 ------`)
for (let maiorPoder in personagem02){
    console.log(`${maiorPoder}: ${personagem02[maiorPoder]}`)
}

//Compara os dados/Poder total, de cada personagem
let somaPersonagem01 = personagem01.vida + personagem01.ataque + personagem01.defesa
let somaPersonagem02 = personagem02.vida + personagem02.ataque + personagem02.defesa

//Compara o poder total de cada personagem. E vai exibir qual é o mais forte
if (somaPersonagem01 > somaPersonagem02){
    console.log(`O melhor personagem é o ${personagem01.nome}`)

}else{
    console.log(`O melhor personagem é o ${personagem02.nome}`)
}

*/

// ------------------------------------- EXERCISES03 ------------------------------------------ //
/*Crie um objeto representando um funcionário com nome, cargo, salário e anos de experiência. Use for...in para listar *todos os dados. Com base nos anos de experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
*anos = 10%, acima de 5 anos = 15%.
*/

/*
//O objeto é o funcionário
let anos = Number(prompt('Quantos anos de experiência? '))
let funcionario = {nome:'Peter Parker', cargo:'Entregador de Pizza', salario: 750, anosExperiencia: anos }
let bonus = 0

// Vai percorrer e exibir todos os dados do funcionário
for (bonusAnual in funcionario){
    console.log(`${bonusAnual}: ${funcionario[bonusAnual]}`)
}

// Até 2 anos de experiência - Bônus 5%
if (funcionario.anosExperiencia <= 2){
    bonus = funcionario.salario * 5 / 100
    console.log(`O seu bônus anual é de (5%): R$${bonus}`)

// Entre 3 a 5 anos de experiência - Bônus 10%
}else if (funcionario.anosExperiencia >= 3 && funcionario.anosExperiencia <= 5){
    bonus = funcionario.salario * 10 / 100
    console.log(`O seu bônus anual é de (10%): R$${bonus}`)

// Acima de 5 anos de experiência - Bônus 15%
}else{
    bonus = funcionario.salario * 15 / 100
    console.log(`O seu bônus anual é de (15%): R$${bonus}`)
}
*/

// ------------------------------------- EXERCISES04 ------------------------------------------ //
/*Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
*no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
*listar o inventário completo. Permita que o usuário informe um item para usar:
*reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
*/

/*
//O objeto é o inventário
let inventario = {espada: 1, pocao: 5, escudo: 2}

//Vai percorrer todos os itens do inventário
for (let listar in inventario ){
    console.log(`${listar} ${inventario[listar]}`)

}
//Pergunta ao jogador, qual item ele quer usar
let quantidadeItem = prompt('Informe o item que você quer usar: ')

//Verifica se o item tem a quantidade disponível
if (inventario[quantidadeItem] !== undefined && inventario[quantidadeItem] > 0){
    inventario[quantidadeItem] = inventario[quantidadeItem] - 1

    console.log (`Você usou ${quantidadeItem}: Restam ${inventario[quantidadeItem]}`)

//Verifica se o item está esgotado ou não
}else if (inventario[quantidadeItem] === 0){
    inventario[quantidadeItem] =  0 
    console.log(`Item esgotado: ${quantidadeItem}`)

//Caso digite outro nome de item, vai aparecer 'Item não encontrado'
}else{
    console.log(`Item não encontrado: ${quantidadeItem}`)
}
*/

// ------------------------------------- EXERCISES05 ------------------------------------------ //
/*Crie um objeto representando o orçamento mensal de uma pessoa, com
*categorias como alimentação, transporte, lazer e saúde, cada uma com valor
*planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
*uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
*/

/*
//O orçamento é o objeto principal
let saldoGeral = 0
let orcamento = {
    alimentacao: {planejado: 500 , gasto: 450  },
    transporte:  {planejado: 200 , gasto: 250  },
    lazer:       {planejado: 300, gasto:  100  },
    saude:       {planejado: 150, gasto:  150  }
 }

//Percorre cada categoria do orcamento e planeja os gastos
for (let planejamento in orcamento){
    console.log(`${planejamento}:  planejado: ${orcamento[planejamento].planejado} | gasto: ${orcamento[planejamento].gasto}`)

//Verifica se o orcamento ficou dentro ou acima do planejado
if (orcamento[planejamento].planejado >= orcamento[planejamento].gasto) {
    console.log(`${planejamento}: dentro do orçamento`)

}else{
    console.log(`${planejamento}: acima do orçamento`)
}

//Acumula o saldo, subtraindo o gasto planejado de cada categoria
    saldoGeral += orcamento[planejamento].planejado - orcamento[planejamento].gasto
}

//Vai exibir o saldo geral do mês, depois de ter percorrido todos os objetos
console.log(`\nSaldo geral do mês: R$${saldoGeral}`)
*/

// ------------------------------------- EXERCISES06 ------------------------------------------ //
/*
*Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for...of para *exibir cada música no formato "Artista — Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
*mesmo formato.
*/

/*
//Arrays de objetos
let totalSegundos = 0
let musicas = [

    {titulo:'Dont Cry',              artista:'Guns N Roses',    duracaoEmSegundos: 285},
    {titulo:'Tempo Perdido',         artista:'Legiao Urbana',   duracaoEmSegundos: 301},
    {titulo:'Nothing Else Matters',  artista:'Metallica',       duracaoEmSegundos: 388}

]

//Percorre cada múscia e vai exibir: Titulo - Artista - duração da múscia
for(let formato of musicas){
    let minutos = Math.floor(formato.duracaoEmSegundos / 60)
    let segundos = formato.duracaoEmSegundos % 60
    
//padStart completa o número, caso ele não tenha 2 dígitos. Coloca um zero á esquerda "5" - "05" 
    console.log(`${formato.artista} - ${formato.titulo} (${minutos}:${String(segundos).padStart(2, '0')}) `)
    
}

//Soma a duração de todas as músicas em segundos
musicas.forEach((musicas) => {
    totalSegundos += musicas.duracaoEmSegundos
})

//Converte os segundos para minutos
    let totalMinutos = Math.floor(totalSegundos / 60)
    let totalSegundo = totalSegundos % 60

    console.log(`Duração total: ${totalMinutos}:${String(totalSegundo).padStart(2, '0')}`)
*/

// ------------------------------------- EXERCISES07 ------------------------------------------ //
/*
*Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
*cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
*forEach para calcular e exibir separadamente a média dos aprovados e a média
*dos reprovados.
*/

/*
//O array de objetos é os alunos
let mediaReprovados = 0
let mediaAprovados = 0
let somaAprovados = 0
let somaReprovados = 0
let aprovados = []
let recuperacao = []
let reprovados = []
let alunos = [
    {nome:'Jardel',             nota:4},
    {nome:'Neymar Junior',      nota:9},
    {nome:'Renato Portaluppi',  nota:10},
    {nome:'Romario',            nota:5},
    {nome:'Paulo Nunes',        nota:6},
    {nome:'Roberto Carlos',     nota:3}
]

//Percorre cada aluno por nome e classifica conforme a nota
for (let lista of alunos){

//Nota >= 7: Aluno aprovado
    if (lista.nota >= 7){
    aprovados.push(lista)
    console.log(`Parabéns ${lista.nome}, você foi APROVADO`)

console.log(`================================\n`)

//Nota entre  5 e 6. Aluno está em recuperação
}else if (lista.nota >= 5){
    recuperacao.push(lista)
    console.log(`Em recuperação ${lista.nome}, está quase. Não desista`)

console.log(`================================\n`)

// Nota < 5 - Aluno reprovado
} else{
    reprovados.push(lista)
    console.log(`REPROVADO! ${lista.nome}, Estude mais na próxima `)
console.log(`================================\n`)
} 

}

//Soma a nota de todos os Aprovados
aprovados.forEach((alunos) =>{
    somaAprovados += alunos.nota
})

//Soma a nota de todos os Reprovados
reprovados.forEach((alunos) =>{
    somaReprovados += alunos.nota
})

//Calcula a média divindo a soma pelo total de cada grupo
mediaAprovados  =  somaAprovados  / aprovados.length
mediaReprovados =  somaReprovados / reprovados.length

//Vai exibir a média final dos Aprovados/Reprovados
console.log(`\n======= MÉDIAS =======`)
console.log(`A média dos APROVADOS:  ${mediaAprovados}  `)  
console.log(`A média dos REPROVADOS: ${mediaReprovados} `)
*/

// ------------------------------------- EXERCISES08 ------------------------------------------ //
/*Crie um array de objetos representando produtos com nome, preço e quantidade. Use forEach para calcular o valor total em *estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
*estoque.
*/

/*
//Array dos objetos - produtos
let valorTotal = 0
let totalGeral = 0
let produtos = [
    {nome:'Salsichao', preco: 16, quantidade: 8  },
    {nome:'Batata',    preco: 8 , quantidade: 6  },
    {nome:'Macarrao',  preco: 6,  quantidade: 14 }
]   

//Array dos produtos / Calcula o valor total dos produtos
produtos.forEach(produtos => {
    let valorTotal = produtos.preco * produtos.quantidade

//Acumula o total geral
    totalGeral += valorTotal

//Mostra o valor total / relatório de cada produto
    console.log(`${produtos.nome}: R$${valorTotal}`)
})

//Exibe o totalGeral depois do foreach
console.log(`Total geral: R$${totalGeral}`)
*/

// ------------------------------------- EXERCISES09 ------------------------------------------ //
/*Crie um array de objetos onde cada objeto representa um contato com nome,
*telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
*buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
*uma mensagem de "não encontrado".
*/

/*
//Objeto/Array contatos
let contatos = [
    { nome: 'Scorpion',   telefone: 5512401587, email: 'scorpion@gmail.com' },
    { nome: 'Subzero',    telefone: 5509080706, email: 'subzerogelado@gmail.com' },
    { nome: 'Lara Croft', telefone: 5560707070, email: 'laracroftDoTombRaider@gmail.com' },
    { nome: 'James Bond', telefone: 5513467842, email: 'jamesbondDaBahia@gmail.com' },
    { nome: 'Tony Stark', telefone: 5521691034, email: 'tonyStarkdoGremio@gmail.com' }
]

//Lista todos os contatos
contatos.forEach(contatos => {
    console.log(`Nome: ${contatos.nome} | Telefone: ${contatos.telefone} | Email: ${contatos.email}`)

})

let buscarContatos = prompt('Digite o nome do contato: ')
let encontrado = false

//Percorre os contatos buscando pelo nome digitado
for (let contato of contatos) {

//Se encontrar o contato, exibe os dados
    if (contato.nome.toLocaleLowerCase() === buscarContatos.toLocaleLowerCase()) {
        console.log(`Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email}`)
        encontrado = true
        console.log('Contato encontrado')
    }

}
//Se não encontrou nenhum contato com o nome digitado para nesse if 
if (!encontrado) {
    console.log('Contato não encontrado ')
}
*/

// ------------------------------------- EXERCISES10 ------------------------------------------ //
/*Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções visitar(pagina) (push), *voltar() (pop) e paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
*cada operação.
*/

/*
let historico = []

//Adiciona a página no histório - push
function visitar(pagina) {
    historico.push(pagina)
    console.log(`Visitando: ${pagina}`)

}

//Exibe a página atual sem remover
function voltar() {
    historico.pop()
    console.log('Voltando')
}

//Lê sem remover 
function paginaAtual() {
    console.log(`Página atual: ${historico[historico.length - 1]}`)
}

//Visita ás 4 páginas
    visitar('google.com')
    visitar('youtube.com')
    visitar('steam.com')
    visitar('gremiomania.com')
    paginaAtual() //Exibe a página atual - depois de ter visitado as 4 páginas
    voltar() // Volta 2 vezes exibindo a página atual
    paginaAtual()
    voltar()
    paginaAtual()
*/

// ------------------------------------- EXERCISES11 ------------------------------------------ //
/*Implemente uma fila usando um array para simular o atendimento de uma clínica. Crie as funções chegarPaciente(nome) *enqueue), chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
*exibindo o estado da fila a cada operação.
*/

/*
let estadoDaFila = []

//Adicona o paciente no final da fila 
function chegarPaciente(nome) {
    estadoDaFila.push(nome)
    console.log(`Em espera: ${nome}`)
}

//Remove o primeiro paciente da fila e chama para o atendimento
function chamarProximo() {
    let proximo = estadoDaFila.shift()
    console.log(`Chamando: ${proximo}`)
}

//Exibe como está o estado atual da fila 
function exibirFila() {
    console.log(`Fila atual: ${estadoDaFila}`)
}

//Vai mostrar a chegada dos clientes e o atendimento de 3 pessoas 
chegarPaciente('Zelda')
chegarPaciente('Trevor')
chegarPaciente('Steve')
chegarPaciente('Joel')
chegarPaciente('Ellie')
chamarProximo()
exibirFila()
chamarProximo()
exibirFila()
chamarProximo()
exibirFila()
*/

// ------------------------------------- EXERCISES12 ------------------------------------------ //
/*Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as funções adicionar(tarefa), remover(tarefa) e *exibir() que percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e exiba a *lista antes e depois.
*/

/*
let cabeca = null

//Adiciona uma nova tarefa no final da lista ligada
function adicionar(tarefa) {
    let novoNo = { valor: tarefa, proximo: null }

    //Caso a lista esteja vazia o novo nó se torna a cabeça
    if (cabeca === null) {
        cabeca = novoNo
    } else {
    //Percorre todo nó e conecta ao novo nó
        let atual = cabeca
        while (atual.proximo !== null) {
            atual = atual.proximo
        }
        atual.proximo = novoNo
    }

}

//Remove uma tarefa da lista ligada pelo nome
function remover(tarefa) {
    if (cabeca.valor === tarefa) {
        cabeca = cabeca.proximo
    } else {
        //Percorre toda a lista até encontrar o nó que será removido 
        let atual = cabeca
        while (atual.proximo !== null) {
            if (atual.proximo.valor === tarefa) {
                atual.proximo = atual.proximo.proximo
            }
            atual = atual.proximo
        }
    }
}

//Exibe todos os nós da lista ligada 
function exibir() {
    let atual = cabeca
    while (atual !== null) {
        console.log(atual.valor)
        atual = atual.proximo
    }
}

adicionar ('Limpar a Casa')
adicionar ('Lavar o Carro')
adicionar ('Lavar a Louça')
adicionar ('Cortar Grama')
exibir() //Antes de remover
remover('Lavar a Louça')
console.log('\n---- Lista depois de remover ----')
exibir() //Depois de remover

*/
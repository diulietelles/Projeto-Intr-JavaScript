
// Definições básicas
let continuar = true
let doadores = []

// Função para cadastrar doadores
function cadastrar() {
    let nome = prompt("Digite o nome do doador:")
    let idade = parseInt(prompt("Digite a idade do doador:"))
    let peso = parseFloat(prompt("Digite o peso do doador (em kg):"))
    let tipoSanguineo = prompt("Digite o tipo sanguíneo do doador:")
    let dataUltimaDoacao = prompt("Digite a data da última doação (dd/mm/aaaa):")

    let doador = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        dataUltimaDoacao: dataUltimaDoacao
    }

    doadores.push(doador)

    console.log("Doador cadastrado com sucesso!")
    console.log(doadores[doadores.length - 1])
}

// Função para listar doadores
function listar() {
    console.log("LISTAGEM DE DOADORES:")
    console.log("--------------------")
    console.log("NOME             | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")

    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];
        console.log(`${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
    }
}

// Função para buscar doadores por tipo sanguíneo
function buscarPorTipoSanguineo() {
    let tipoSanguineoDesejado = prompt("Digite o tipo sanguíneo desejado:")
    console.log("------------------------")
    console.log("RESULTADO DA BUSCA:")
    console.log("------------------------")
    console.log("NOME             | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
    
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i]

        if (doador.tipoSanguineo === tipoSanguineoDesejado) {
            console.log(`${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
        }
    }
}

// Função para buscar doadores por data da última doação
function buscarPorDataUltimaDoacao() {
    let dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa):")
    console.log("------------------------")
    console.log("RESULTADO DA BUSCA:")
    console.log("------------------------")
    console.log("NOME             | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
    
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];
        if (doador.dataUltimaDoacao < dataDesejada) {
            console.log(`${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
        }
    }
}

// Função para sair
function sair() {
    continuar = false;
    console.log("O programa foi encerrado.");
}

// Loop para perguntar ao usuário
while (continuar) {
    let pergunta = "\n";
    pergunta += "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n";
    pergunta += "1. Cadastrar doador\n";
    pergunta += "2. Listar doadores\n";
    pergunta += "3. Buscar doador por tipo sanguíneo\n";
    pergunta += "4. Buscar doador por data da última doação\n";
    pergunta += "5. Sair\n";
    pergunta += "Escolha uma opção:";

    let resposta = Number(prompt(pergunta));
    

    switch (resposta) {
        case 1:
            cadastrar();
            break;
        case 2:
            listar();
            break;
        case 3:
            buscarPorTipoSanguineo();
            break;
        case 4:
            buscarPorDataUltimaDoacao();
            break;
        case 5:
            sair();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}

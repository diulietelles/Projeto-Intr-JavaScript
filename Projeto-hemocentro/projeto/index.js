let continuar = true;
let doadores = [];
let indiceDoador = 1; // Inicia o índice de cadastro

// 1- Função para cadastrar doadores
function cadastrar() {
    let nome = prompt("Digite o nome do doador:");
    let idade = Number(prompt("Digite a idade do doador:"));
    let peso = Number(prompt("Digite o peso do doador (em kg):"));
    let tipoSanguineo = prompt("Digite o tipo sanguíneo do doador:");
    let dataUltimaDoacao = prompt("Digite a data da última doação (dd/mm/aaaa):");

    let doador = {
        indice: indiceDoador, // Atribui um índice ao doador
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        dataUltimaDoacao: dataUltimaDoacao
    }

    doadores.push(doador);
    indiceDoador++; // Incrementa o índice

    console.log("Doador cadastrado com sucesso!");
    console.log(doador);
}

// 2- Função para listar doadores
function listar() {
    console.log("LISTAGEM DE DOADORES:");
    console.log("-------------------------------------");
    console.log("ÍNDICE | NOME | IDADE | PESO  | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("---------------------------------------------------------------");

    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];
        console.log(`${doador.indice} | ${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
    }
}

// 3- Função para excluir doador por índice
function excluirDoador(indice) {
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].indice === indice) {
            doadores.splice(i, 1); // Remove o doador da lista
            console.log(`Doador de índice ${indice} excluído com sucesso.`);
            return;
        }
    }
    console.log(`Nenhum doador encontrado com o índice ${indice}.`);
}

// 4- Função para editar doador por índice
function editarDoador(indice) {
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].indice === indice) {
            // Solicitei as novas informações e atualizei o doador
            let nome = prompt("Digite o novo nome do doador:");
            let idade = Number(prompt("Digite a nova idade do doador:"));
            let peso = Number(prompt("Digite o novo peso do doador (em kg):"));
            let tipoSanguineo = prompt("Digite o novo tipo sanguíneo do doador:");
            let dataUltimaDoacao = prompt("Digite a nova data da última doação (dd/mm/aaaa):");

            doadores[i].nome = nome;
            doadores[i].idade = idade;
            doadores[i].peso = peso;
            doadores[i].tipoSanguineo = tipoSanguineo;
            doadores[i].dataUltimaDoacao = dataUltimaDoacao;

            console.log(`Doador de índice ${indice} editado com sucesso.`);
            return;
        }
    }
    console.log(`Nenhum doador encontrado com o índice ${indice}.`);
}

// 5- Função para buscar doadores por tipo sanguíneo
function buscarPorTipoSanguineo() {
    let tipoSanguineoDesejado = prompt("Digite o tipo sanguíneo desejado:");
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("ÍNDICE | NOME | IDADE | PESO  | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("---------------------------------------------------------------");
    
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i]

        if (doador.tipoSanguineo === tipoSanguineoDesejado) {
            console.log(`${doador.indice} | ${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
        }
    }
}

// 6- Função para buscar doadores por data da última doação
function buscarPorDataUltimaDoacao() {
    let dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa):");
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("ÍNDICE | NOME | IDADE | PESO  | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("---------------------------------------------------------------");

    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];

        if (doador.dataUltimaDoacao === dataDesejada) {
            console.log(`${doador.indice} | ${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
        }
    }
}
// 7- Função para sair
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
    pergunta += "3. Excluir doador por índice\n";
    pergunta += "4. Editar doador por índice\n";
    pergunta += "5. Buscar doador por tipo sanguíneo\n";
    pergunta += "6. Buscar doador por data da última doação\n";
    pergunta += "7. Sair\n";
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
            excluirDoador();
            break;
        case 4:
            editarDoador();
            break;
        case 5:
            buscarPorTipoSanguineo();
            break;
        case 6:
            buscarPorDataUltimaDoacao();
            break;
        case 7:
            sair();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}

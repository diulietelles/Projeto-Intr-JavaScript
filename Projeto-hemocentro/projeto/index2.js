// Inicializa a variável 'continuar' como verdadeira para manter o loop principal do programa em execução
let continuar = true;

// Inicializa a variável 'doadores' como uma matriz vazia para armazenar os dados dos doadores
let doadores = [];

// Inicializa a variável 'indiceDoador' como 1 para ser usado como índice no cadastro de doadores
let indiceDoador = 1; 

// 1 Função para cadastrar doadores
function cadastrar() {
    // Solicita informações do doador ao usuário
    let nome = prompt("Digite o nome do doador:");
    let idade = Number(prompt("Digite a idade do doador:"));
    let peso = Number(prompt("Digite o peso do doador (em kg):"));
    let tipoSanguineo = prompt("Digite o tipo sanguíneo do doador:");
    let dataUltimaDoacao = prompt("Digite a data da última doação (dd/mm/aaaa):");

    // Cria um objeto 'doador' com as informações fornecidas e um índice
    let doador = {
        indice: indiceDoador, // Atribui um índice ao doador
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        dataUltimaDoacao: dataUltimaDoacao
    }

    // Adiciona o doador à variavel de doadores
    doadores.push(doador);

    // Incrementa o índiceDoador para o próximo cadastro
    indiceDoador++;

    // Exibe mensagens de sucesso e detalhes do doador cadastrado
    console.log("Doador cadastrado com sucesso!");
    console.log(doador);
}

// 2 Função para listar doadores
function listar() {
    // Exibe um cabeçalho para a listagem de doadores
    console.log("LISTAGEM DE DOADORES:");
    console.log("-------------------------------------");
    console.log("ÍNDICE | NOME | IDADE | PESO  | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("---------------------------------------------------------------");

    // Itera sobre a variavel de doadores e exibe informações de cada doador
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];
        console.log(`${doador.indice} | ${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
    }
}

// 3 Função para excluir doador por índice
function excluirDoador(indice) {
    let indiceDoador = -1; // Inicializa o índiceDoador como -1

    // Itera sobre a variavel de doadores para encontrar o índice do doador a ser excluído
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].indice === indice) {
            indiceDoador = i; // Atribui o índice encontrado
            break; // Sai do loop quando encontra o índice
        }
    }

    // Verifica se o índiceDoador foi atualizado
    if (indiceDoador !== -1) {
        // Remove o doador da variavel de doadores
        doadores.splice(indiceDoador, 1);
        console.log(`Doador de índice ${indice} excluído com sucesso.`);
    } else {
        console.log(`Nenhum doador encontrado com o índice ${indice}.`);
    }
}

// 4 Função para editar doador por índice
function editarDoador(indice) {
    let indiceDoador = -1; // Inicializa o índiceDoador como -1

    // Itera sobre a variavel de doadores para encontrar o índice do doador a ser editado
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].indice === indice) {
            indiceDoador = i; // Atribui o índice encontrado
            break; // Sai do loop quando encontra o índice
        }
    }

    // Verifica se o índiceDoador foi atualizado
    if (indiceDoador !== -1) {
        // Solicita ao usuário as novas informações do doador
        let nome = prompt("Digite o novo nome do doador:");
        let idade = Number(prompt("Digite a nova idade do doador:"));
        let peso = Number(prompt("Digite o novo peso do doador (em kg):"));
        let tipoSanguineo = prompt("Digite o novo tipo sanguíneo do doador:");
        let dataUltimaDoacao = prompt("Digite a nova data da última doação (dd/mm/aaaa):");

        // Atualiza as informações do doador com os novos valores
        doadores[indiceDoador].nome = nome;
        doadores[indiceDoador].idade = idade;
        doadores[indiceDoador].peso = peso;
        doadores[indiceDoador].tipoSanguineo = tipoSanguineo;
        doadores[indiceDoador].dataUltimaDoacao = dataUltimaDoacao;

        console.log(`Doador de índice ${indice} editado com sucesso.`);
    } else {
        console.log(`Nenhum doador encontrado com o índice ${indice}.`);
    }
}

// 5 Função para buscar doadores por tipo sanguíneo
function buscarPorTipoSanguineo() {
    // Solicita ao usuário o tipo sanguíneo desejado
    let tipoSanguineoDesejado = prompt("Digite o tipo sanguíneo desejado:");

    // Exibe um cabeçalho para o resultado da busca
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("ÍNDICE | NOME | IDADE | PESO  | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("---------------------------------------------------------------");

    // Itera sobre a variavel de doadores e exibe os doadores com o tipo sanguíneo desejado
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i]

        if (doador.tipoSanguineo === tipoSanguineoDesejado) {
            console.log(`${doador.indice} | ${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
       
        }
    }
}        

// 6 Função para buscar doadores por data da última doação
function buscarPorDataUltimaDoacao() {
    // Solicita ao usuário a data desejada
    let dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa):");

    // Exibe um cabeçalho para o resultado da busca
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("ÍNDICE | NOME | IDADE | PESO  | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("---------------------------------------------------------------");

    // Itera sobre a matriz de doadores e exibe os doadores com a data de última doação desejada
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];

        if (doador.dataUltimaDoacao === dataDesejada) {
            console.log(`${doador.indice} | ${doador.nome} | ${doador.idade} | ${doador.peso} | ${doador.tipoSanguineo} | ${doador.dataUltimaDoacao}`);
        }
    }
}

// 7 Função para encerrar o programa
function sair() {
    continuar = false;
    console.log("O programa foi encerrado.");
}

// Loop principal que mantém o programa em execução enquanto a variável 'continuar' for verdadeira
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

    // Solicita ao usuário que escolha uma opção do menu
    let resposta = Number(prompt(pergunta));

    // Usa uma instrução 'switch' para direcionar para a função correspondente com base na opção escolhida
    switch (resposta) {
        case 1:
            cadastrar();
            break;
        case 2:
            listar();
            break;
        case 3:
            let indiceExcluir = Number(prompt("Digite o índice do doador que deseja excluir:"));
            excluirDoador(indiceExcluir);
            break;
        case 4:
            let indiceEditar = Number(prompt("Digite o índice do doador que deseja editar:"));
            editarDoador(indiceEditar);
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

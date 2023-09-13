// Definições básicas
let continuar = true
let abrigoss = []

// Função para cadastrar doadores
function cadastrar() {
    let nome = prompt("Digite o nome do Abrigo PET:")
    let telefone = Number(prompt("Digite o telefone do Abrigo:"))
    let capacidade = Number(prompt("Digite a capacidade de lotacao do Abrigo:"))
    let endereco = prompt("Digite o endereco do Abrigo")

    let abrigo = {
        nome: nome,
        telefone: telefone,
        capacidade: capacidade,
        endereco: endereco,
    }

    abrigoss.push(abrigo)

    console.log("Abrigo Pet cadastrado com sucesso!")
    console.log(abrigoss[abrigoss.length - 1])
}

// Função para listar doadores
function listar() {
    console.log("LISTAGEM DE ABRIGOS PET:")
    console.log("--------------------")
    console.log("NOME | TELEFONE | CAPACIDADE | ENDERECO")
    console.log("---------------------------------------------------------------")

    for (let i = 0; i < abrigoss.length; i++) {
        let abrigo =  abrigoss[i];
        console.log(`${abrigo.nome} | ${abrigo.telefone} | ${abrigo.capacidade} | ${abrigo.endereco}`);
    }
}

// Função para procurar abrigos pet
function buscarAbrigoPet() {
    let buscarPet = prompt("Digite o abrigo pet desejado:");
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("NOME | TELEFONE | CAPACIDADE | ENDERECO");
    console.log("---------------------------------------------------------------");
    
    for (let i = 0; i < abrigoss.length; i++) {
        let abrigo = abrigoss[i];

        // Verifique se o nome do abrigo corresponde ao que está sendo buscado
        if (abrigo.nome === buscarPet) {
            console.log(`${abrigo.nome} | ${abrigo.telefone} | ${abrigo.capacidade} | ${abrigo.endereco}`);
        }
    }
}

// Função para sair
function sair() {
    continuar = false;
    console.log("O programa foi encerrado.")
}

// Loop para perguntar ao usuário
while (continuar) {
    let pergunta = "\n";
    pergunta += "===== SISTEMA DE CADASTRO DE ABRIGOS PET=====\n";
    pergunta += "1. Cadastrar Abrigo Pet\n";
    pergunta += "2. Listar abrigos\n";
    pergunta += "3. Buscar  Abrigos \n";
    pergunta += "4. Sair\n";
    pergunta += "Escolha uma opcao:";

    let resposta = Number(prompt(pergunta));
    

    switch (resposta) {
        case 1:
            cadastrar();
            break;
        case 2:
            listar();
            break;
        case 3:
            buscarAbrigoPet();
            break;
        case 4:
            sair();
            break;
        default:
            console.log("Opcao invalida. Tente novamente.");
    }
}
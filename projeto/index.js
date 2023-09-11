//definiçoes basicas//
let continuar = true
let doadores = []


// criar função para cadastrar dados do doador//
function cadastrar() {
    let nome = prompt("Digite o nome do doador:")
    let idade = Number(prompt("Digite a idade do doador:"))
    let peso = Number(prompt("Digite o peso do doador (em kg):"))
    let tipoSanguineo = prompt("Digite o tipo sanguíneo do doador:")
    let dataUltimaDoacao = Number(prompt("Digite a data da última doação (dd/mm/aaaa):"))
    


    let doador = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        dataUltimaDoacao: dataUltimaDoacao
    }

    doadores.push(doador)
    console.log("Doador cadastrado com sucesso!")
}
// criar função para listar dados do doador//
function listar() {
    console.log("--------------------")
    console.log("LISTAGEM DE DOADORES:")
    console.log("--------------------")
    console.log("NOME             | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")

}
// criar função para tipos sanguineos //
function TipoSanguineo() {
    let tipoSanguineoDesejado = prompt("Digite o tipo sanguíneo desejado:")
    console.log("------------------------")
    console.log("RESULTADO DA BUSCA:")
    console.log("------------------------")
    console.log("NOME             | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
}
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i]
        if (doador.tipoSanguineo === tipoSanguineoDesejado) {
        
    console.log("---------------------------------------------------------------")
}
    }

    // criar função para data da ultima doação do usuario//
function DataUltimaDoacao() {
    let dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa):")
    console.log("------------------------")
    console.log("RESULTADO DA BUSCA:")
    console.log("------------------------")
    console.log("NOME             | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
}
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i]
        if (doador.dataUltimaDoacao < dataDesejada) {
           
        }
    console.log("---------------------------------------------------------------")
}
// criar função sair//
function sair() {
    continuar = false
    console.log("O programa foi encerrado.")
}

while (continuar) {
    let pergunta = "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n"
    pergunta += "1. Cadastrar doador\n"
    pergunta += "2. Listar doadores\n"
    pergunta += "3. Buscar doador por tipo sanguíneo\n"
    pergunta += "4. Buscar doador por data da última doação\n"
    pergunta += "5. Sair\n"

}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar\n"
		pergunta += "2. Listar \n"
		pergunta += "3. Procurar \n"
		pergunta += "4. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			sair()
			break
	}
}
    





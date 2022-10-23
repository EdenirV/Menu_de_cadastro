const vagas = []

function listar() {
    const vagasTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "(" + vaga.candidatos.length + "candidatos\n"
        return textoFinal
    }, "")

    alert(vagasTexto)
}

function criarVaga() {
    const nome = prompt("Qual o nome da vaga ?")
    const descricao = prompt("Qual a descrição da vaga ?")
    const dataLimite = prompt("Qual a data limite da vaga ? DD/MM/AAAA")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const criarVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(criarVaga)
        alert("Vaga criada.")
    }
}

function exibir() {
    const indice = prompt("Qual o índice da vaga ?")
    const vaga = vagas[indice]

    const candidatosTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal)
    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Qual o nome do(a) candidato(a) ?")
    const indice = prompt("Qual o indice da vaga ?")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição feita com sucesso.")
    }
}

function excluir() {
    const indice = prompt("Qual o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm("Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}
function menu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = menu()
        switch (opcao) {
            case "1":
                listar()
                break;
            case "2":
                criarVaga()
                break;
            case "3":
                exibir()
                break;
            case "4":
                inscreverCandidato()
                break;
            case "5":
                excluir()
                break;
            case "6":
                alert("Encerrando a sessão")
                break;

            default:
                alert("Informe uma opão valida")
                break;
        }

    } while (opcao !== "6");
}
executar()
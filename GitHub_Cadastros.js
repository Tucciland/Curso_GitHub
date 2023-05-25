const entrada = require('prompt-sync')({sigint: true})

class Funcionario {
    constructor(nome, funcao, piso = 0, id) {
        this.id=id
        this.nome = nome
        this.salario = 1000
        this.funcao = funcao
        this.piso = piso

        if (funcao === 1) {
            this.funcao = 'Certificado'
        }
        else if (funcao == 2) {
            this.funcao = 'Suporte Tecnico'
        }
        else if (funcao == 3) {
            this.funcao = 'Gerente'
        }
        if (piso > 0) {
            this.salario += piso
        }
    }
}

class Certificado extends Funcionario {
    constructor(nome) {
        let piso_certificado=300
        super(nome, 1, piso_certificado,id)
    }
}

class Suporte_tecnico extends Funcionario {
    constructor(nome) {
        let piso_suporte=600
        super(nome, 2, piso_suporte,id)
    }
}

class Gerente extends Funcionario {
    constructor(nome) {
        let piso_gerente=1000
        super(nome, 3, piso_gerente,id)
    }
}

let opc = 1, id = 1, cadastros = []

while (opc != 0) {

    console.log("-----OPCOES-----")
    console.log("*0 - Sair")
    console.log("*1 - Cadastrar Certificado")
    console.log("*2 - Cadastrar Suporte")
    console.log("*3 - Cadastrar Gerente")
    console.log("*4 - Exibir Cadastros")

    opc = entrada("Digite o número relativo ao cadastro: ")

    switch (opc) {
        case '1':
            let nome_f = entrada("Digite o nome do Funcionário: ")
            let f1 = new Certificado(nome_f)
            cadastros.push(f1)
            console.log(`Funcionário ${nome_f} cadastrado com sucesso como Certificado.`)
            break;

        case '2':
            let nome_f2 = entrada("Digite o nome do Funcionário: ")
            let f2 = new Suporte_tecnico(nome_f2)
            cadastros.push(f2)
            console.log(`Funcionário ${nome_f2} cadastrado com sucesso como Suporte Técnico.`)
            break;

        case '3':
            let nome_f3 = entrada("Digite o nome do Funcionário: ")
            let f3 = new Gerente(nome_f3)
            cadastros.push(f3)
            console.log(`Funcionário ${nome_f3} cadastrado com sucesso como Gerente.`)
            break;

        case '4':
            console.log("-----CADASTROS-----")
            for (let i = 0; i < cadastros.length; i++) {
                console.log(`ID: ${cadastros[i].id}, Funcionário ${cadastros[i].nome}, função: ${cadastros[i].funcao}, salário: R$ ${cadastros[i].salario.toFixed(2)}`)
            }
            break;

        case '0':
            console.log("Saindo...")
            break;

        default:
            console.log("Opção inválida.")
            break
    }
id++
}
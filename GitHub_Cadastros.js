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
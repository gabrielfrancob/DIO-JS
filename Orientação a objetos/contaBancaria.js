class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }
    get saldo(){
        return `Seu saldo é de ${this._saldo} reais`
    }

    set saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        if(valor > this._saldo){
            console.log("Você não tem esse valor na conta!")
        } 
        else{
            this._saldo -= valor
            console.log(`Foi sacado: ${valor} reais`)
        }
    }

    depositar(valor = 0){
        this._saldo += valor
        console.log(`Valor depositado: ${valor}`)
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'Conta corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Conta poupança'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Conta universitária'
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação negada'
        }

        this._saldo -= valor
        return `Foi sacado: ${valor} reais`

    }
}






function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa = {
    nome: "Pedro",
    idade: 13
}

console.log(calculaIdade.call(pessoa, 5))
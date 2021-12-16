// Tipos primitivos

// Booleano

var bool = false
console.log(bool)
console.log(typeof(bool))
console.log('----------')

// Number
var numero = 1
console.log(numero)
console.log(typeof(numero))
console.log('----------')

// String
var nome = 'Gabriel'
console.log(nome)
console.log(typeof(nome))
console.log('----------')

/*
    var - Possui escopo global e local, podendo ter o
    valor alterado. Se não for iniciada, será tratada como null.

    let - Escopo local de bloco, podendo ter o valor alterado. Se não for iniciada com algum valor, será tratada como null.

    const - Escopo local de bloco, somente para leitura. Deve ter ser iniciada com algum valor obrigatoriamente e não pode ser alterado.
*/

let variavel = 'Gabriel'
console.log(variavel)

/* ERRADO
const constante;
console.log(constante)
*/

const constante = 5
console.log(constante)
console.log('----------')


var escopoGlobal = 'global'
console.log(escopoGlobal)
console.log('----------')

function escopoLocal(){
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}

escopoGlobal()

// NÃO USAR NOMES DE VARIÁVEIS COM NOMES RESERVADOS PELA LINGUAGEM DE PROGRAMAÇÃO. ex: function, var, const, etc.

// Atribuição
var atribuição = 'Gabriel'
console.log('----------')

// Comparação
var comparacao = '0' == 0
console.log(comparacao)

// Comparação idêntica
var comparacaoIdentica = '0' === 0
console.log(comparacaoIdentica)
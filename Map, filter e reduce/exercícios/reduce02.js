function calculaSaldo(itens, saldo){
    if(!validaParametro(itens, saldo)){

        const somaLista = itens.reduce((valorAnt, item) => valorAnt - item.preco, saldo)
        
        return `Saldo final ${somaLista}R$`
    }
}

function validaParametro(itens, saldo){
    if(!saldo || !itens || !itens.length) return 'Envie todos os parâmetros'
}

lista = [
    {preco: 2, nome: 'maçã'},
    {preco: 30, nome: 'roupa'},
    {preco: 25, nome: 'carne'}
]

saldo = 100

console.log(calculaSaldo(lista, saldo))


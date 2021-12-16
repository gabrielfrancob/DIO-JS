/* Arrays/Vetores */

// Arrays são um tipo de lista que armazenam uma quantidade dinâmica de elementos

// Como declarar um array
let array = ['string', 1, true]
console.log(array)
console.log('----------')

// Pode guardar vários tipos de dados, inclusive outros arrays
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array2)
console.log('----------')

// Para acessar um determinado valor dentro de um array, você utiliza o número do índice desse elemento (Um array sempre começa do índice 0 e não do 1)
console.log(array2[0])
console.log('----------')
/*
    O array traz uma série  de métodos para manipulá-lo

    forEach() - Passa pelos elementos do array
    push() - Adiciona um item no final do array
    pop() - Remove o item no final do array
    shift() - Remove o item no início do array
    unshift() - Adiciona o item no início do array
    indexOf() - Retorna o índice de um valor do array
    splice() - Remove ou substitui um item pelo índice
    slice() - Retorna uma parte de um array existente

*/

// forEach()
array2.forEach(function(item, index){
    console.log(`${item} índice ${index}`)
})
console.log('----------')

// push()
array2.push('Novo Item')
console.log(array2)
console.log('----------')

// pop()
array2.pop()
console.log(array2)
console.log('----------')

// shift()
array.shift()
console.log(array2)
console.log('----------')

// unshift()
array2.unshift('Novo item inicio')
console.log(array2)
console.log('----------')

// indexOf()
console.log(array2.indexOf(true))
console.log('----------')

// splice()
// Neste, o número final não será considerado, só serão apagados os índices array2[0], array2[1], array2[2].
array2.splice(0, 3)
console.log(array2)
console.log('----------')

// slice()
let novoArray = array2.slice(0, 3)
console.log(novoArray)
console.log('----------')

/* Objetos */

// Objetos são dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}"

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objetoInterno: {
        objeto: 'Objeto interno'
    }
}

console.log(object)
console.log(object.boolean)
console.log(object.objetoInterno)

var string = object.string
console.log(string)
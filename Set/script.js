// Set

// Um set serve para armazenar apenas valores únicos e tem propriedades e métodos diferentes de um array

const mySet = new Set()

// Adiciona valores ao set
mySet.add(1)
mySet.add(5)

//Verifica se o set tem o elemento
mySet.has(1)
// true

mySet.has(3)
// false

mySet.delete(5)

/*
    Set
    - Possui valores únicos
    - Para verificar número de registros de um set usa-se a propriedade size ao invés de length
    - Não possui os métodos map, filter, reduce etc.

*/
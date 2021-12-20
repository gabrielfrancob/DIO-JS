// Map 

// É uma coleção de arrays no formato [chave, valor] e pode ser iterado usando for...of

const myMap = new Map()
// Constrói um map

myMap.set('apple', 'fruit')
// Map(1) {"apple" => "fruit"}

console.log(myMap.get("apple"))
// "fruit"

myMap.delete("apple")
// 

console.log(myMap.get("apple"))
// undefined


/*
    Qual a diferença entre map e objeto?
    - Maps podem ter chaves de qualquer tipo: string, number, etc.
    - Maps possum a propriedade length.
    - Maps são mais fáceis de iterar.
    - Utilizado quando o valor das chaves é desconhecido
    - Os valores tem o mesmo tipo

*/
/* 
    Map
    Um map contém pares de chave-valor, lembrando a ordem original de 
    inserção das chaves.

    Quando usado com arrays, ele cria um novo array, evitando que o original
    seja modificado
*/

// Sintaxe

const vetor = [1, 2, 3, 4]

vetor.map(callback, thisArg)
/* 
    Callback
    O callback é uma função a ser executada em cada elemento do vetor
    dentro do callback, também é possível obter o item, index e o array
    original (não é necessário passar todos o parâmetros).
    Ex.: callback(item, index, array)

    Parâmetro thisArg(opcional)
    É o valor de this dentro da função callback, caso você queira mudar a 
    propriedade de um objeto
*/

// Map vs forEach

// Usando map

const vetor2  = [1, 2, 3, 4, 5]

vetor2.map((item) => item * 2) // retorno: [2, 4, 6, 8, 10]
// Esta arrow function é equivalente ao callback


// Usando forEach

const vetor3 = [1, 2, 3, 4, 5]

vetor3.forEach((item) => item*2) // retorno: undefined


 
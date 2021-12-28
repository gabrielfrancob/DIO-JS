/*
    Filter
    Retorna os elementos que cumprem com as condições do "filtro", em um novo
    array, não modificando o original.
*/

// Sintaxe

const vetor = [1, 2, 3, 4]

vetor.filter(callback, thisArg)
/* 
    Callback
    O callback é uma função a ser executada em cada elemento do vetor, sendo normalmente uma comparação,
    dentro do callback, também é possível obter o item, index e o array
    original (não é necessário passar todos o parâmetros).
    Ex.: callback(item, index, array)

    Parâmetro thisArg(opcional)
    É o valor de this dentro da função callback, caso você queira mudar a 
    propriedade de um objeto
*/

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']

frutas.filter((fruta) => fruta.includes('maçã'))
// fruta.include('maçã') pode ser entendido como: A fruta no vetor frutas é uma maçã? 
// retorno: ['maçã fuji', 'maçã verde']
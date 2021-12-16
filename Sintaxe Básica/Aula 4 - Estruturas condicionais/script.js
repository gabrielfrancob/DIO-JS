/* Estruturas condicionais */

// As estruturas condicionais dão um caminho a se seguir no código, caso a conição seja cumprida.
var jogador1 = 1
var jogador2 = 0
var placar

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos')

// Usando if
if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2

} // Usando else if
else if (jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1

} // Usando else
else {
    console.log('Ninguém marcou ponto')
}

// Usando switch case

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!')
        break
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!')
        break
    default:
        console.log('Ninguém ganhou')
}
console.log('--------')

/*
    Estruturas de repetição

    for
    for/in
    for/of
    while
    do/while

*/

let array = ['valor 1', 'valor2', 'valor3', 'valor4','valor5']

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

/*
// for - Executa uma instrução até ela ser falsa
for(let c = 0; c < array.length; c++){
    console.log(c)
}

// for/in - Executa repetição a partir de uma propriedade
// Em array
for(let i in array){
    console.log(i)
}

// Em objetos
for(i in object){
    console.log(i)
}
*/

/*
// for/of - Executa a repetição a partir de valor
for(i of array){
    console.log(i)
}

// Com objeto (Não muito usado)
for (i of object.propriedade1){
    console.log(i)
}
*/

var a = 0

while (a < 10){
    console.log(a)
    a++
}

do{
    console.log(a)
    a++
}while(a < 10)
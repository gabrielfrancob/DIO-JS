/* Funções */

// Funções são um conjunto de comandos para a execução de uma determinada tarefa
function funcao(){
    console.log('Essa mensagem veio de uma função!')
}

funcao()

// Funções com parâmetros
function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}

mensagem('Tudo', 'certo!')

// Expressões de funções - são funções atribuídas a expressões (bem autoexplicativo) e não precisam ter o nome após o function
var funcaoExpressao = function(){
    console.log('Sou uma mensagem de função de expressão!')
}

funcaoExpressao()

// Arrow function - são funções anônimas, nunca terão nomes
var funcao = () =>{
    console.log('Sou uma arrow function!')
}
funcao()
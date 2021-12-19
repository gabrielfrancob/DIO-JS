/* Funções this, o que é e como usar */

/* 
    this dentro de objetos se referenciam ao próprio objeto
*/

/*
const pessoa = {
    firstName: "Gabriel",
    lastName: "Franco",

    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}


console.log(`Nome: ${pessoa.firstName}\nSobrenome: ${pessoa.lastName}\nNome completo: ${pessoa.fullName()}`)
*/

// Método call - possibilita chamar os atributos de um objeto sem precisar chamá-la especificamente

const pessoa = {
    nome: "Gabriel"
}

const animal = {
    nome: "Moreno"
}

function getName(){
    console.log(this.nome) // this se refere ao objeto que você irá chamar
}

getName.call(animal) // call chama o objeto que você quer que seja o parâmetro da função

// O  mesmo vale para funções com parâmetros
const myObj = {
    num1: 2,
    num2: 4,
}

function soma(n1, n2){
    console.log(this.num1 + this.num2 + n1 + n2)
}

soma.call(myObj, 1, 5)
// nome da função / método call / objeto a ser passado no this / parâmetros da própria função

// Também é possível usar o método apply

getName.apply(pessoa)

// A diferença é a possibilidade de passar os números como arrys

soma.apply(myObj, [1,5])

//  bind clona a estrutura  da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function (){
    return this.nome
}

let bruno = retornaNomes.bind({nome: 'Bruno'})

console.log(bruno())

// Arrow functions

// const helloWorld = function (){
//     return "Hello World"
// }

// const helloWorld = () => {
//     return "Hello World"
// }

// const helloWorld = () => "Hello World"

//As três formas acima são equivalentes

// Quando a função é muito curta, é melhor usar este arrow function
const somaArrow = (a, b) => a+b
console.log(somaArrow(1,2))

// Arrow function não faz hoisting (não pode chamar a função antes da inicialização dela)

// o objeto arguments não funciona nela

// O construtor (new MeuObjeto()) também não pode ser utilizado


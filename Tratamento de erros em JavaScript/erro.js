/* 
    ECMAScript Error
    Normalmente acontece quando o programador esquece, por exemplo, de colchetes, chaves, de declarar uma variável...

    É composto por:
    - Mensageem
    - Nome
    - Linha
    - Call stack
*/    

/* 
    DOMException
    São erros que acontece com manipulação errada do DOM
*/

/* 
    Throw e return
    return - retorna o elementdo do valor por si só

    throw - retorna o valor que você colocar como um erro
*/

/*
    Try...catch e finally
    try - Verifica o trecho de um código, ou uma função
    catch - Trata o  erro da forma ue você preferir
    finally - Executa o  trecho de código independente se deu erro ou não
*/

function verificaPalindromo(string){
    if (!string) throw "String inválida"

    return string === string.split('').reverse().join('')
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    } 
    catch(e){
        console.log(e) 
        /* 
        Também é possível usar throw e, que retornará 
        com as características de um erro
        */
    }
    finally{
        console.log(`A string enviada foi: ${string}`)
    }
}

tryCatchExemplo('')

// O objeto Error

new Error(message, fileName, lineNumber) // Construção do objeto
// Todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida')

throw MeuErro

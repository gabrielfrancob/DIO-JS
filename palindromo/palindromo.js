function verificaPalindromo(string){
    if(!string) return; // verifica se a string não é null
    
    return string.replace.split("").reverse().join("") === string
}

function verificaPalindromo2(string){
    if(!string) return;

    for(let cont = 0; cont < string.length / 2; cont++){
        if(string[cont] !== string[string.length - 1 - cont]){
            return false
        }
    }

    return true
}

console.log(verificaPalindromo('amor a roma'))
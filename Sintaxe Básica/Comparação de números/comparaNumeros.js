function comparaNumeros(num1, num2){
    let frase
    let soma = num1 + num2
    if (num1 == num2) {
        frase = `Os números ${num1} e ${num2} são iguais. `
    } else {
        frase = `Os números ${num1} e ${num2} não são iguais. `
    }
    frase += `Sua soma é ${soma}, que é `
    if (soma < 10){
        frase += 'menor que 10 e menor que 20.'
    } else if (soma == 10){
        frase += 'igual a 10 e menor que 20.'
    } else if (soma > 10 && soma < 20){
        frase += 'maior que 10 e menor que 20.'
    } else if (soma == 20){
        frase += 'maior que 10 e igual a 20.'
    } else {
        frase += 'maior que 10 e maior que 20.'
    }
    return frase
}

console.log(comparaNumeros(5, 5))
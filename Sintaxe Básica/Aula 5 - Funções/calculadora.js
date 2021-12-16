function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (x)\n 4 - Divisão (/)\n 5 - Divisão inteira (%)\n 6 - Potência (**)'))

    if(!operacao || 0 > operacao >= 7){
        alert('Operação inválida!')
        calculadora()
    } else {

        let num1 = Number(prompt('Primeiro valor: '))
        let num2 = Number(prompt('Segundo valor: '))
        let resultado

        if(!num1 || !num2){
            alert('[ERRO] - Parâmetros inválidos!')
            calculadora()
        }else{

            function soma() {
                resultado = num1 + num2
                alert(`${num1} + ${num2} = ${resultado}`)
                novaOperacao()        
            }

            function subtracao() {
                resultado = num1 - num2
                alert(`${num1} - ${num2} = ${resultado}`)
                novaOperacao()        
            }

            function multiplica() {
                resultado = num1 * num2
                alert(`${num1} * ${num2} = ${resultado}`)
                novaOperacao()        
            }

            function divisao() {
                resultado = num1 / num2
                alert(`${num1} / ${num2} = ${resultado}`)
                novaOperacao()        
            }

            function divisaoInteira() {
                resultado = num1 % num2
                alert(`O resto da divisão inteira de ${num1} por ${num2} é ${resultado}`)
                novaOperacao()        
            }

            function potencia() {
                resultado = num1 ** num2
                alert(`${num1} ^ ${num2} = ${resultado}`)
                novaOperacao()        
            }

            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não')

                if(opcao == 1){
                    calculadora()
                }else if(opcao == 2){
                    alert('Até mais')
                }else{
                    alert('Digite uma opção válida')
                    novaOperacao()
                }
            }

            if(operacao == 1){
                soma()
            }else if(operacao == 2){
                subtracao()
            }else if(operacao == 3){
                multiplica()
            }else if(operacao == 4){
                divisao()
            }else if(operacao == 5){
                divisaoInteira()
            }else if(operacao == 6){
                potencia()
            }
        }    
    }
}

calculadora()




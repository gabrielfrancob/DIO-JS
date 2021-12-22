function validaArray(array, num){
    try{
        if(!array && !num) throw new ReferenceError('Envie os parâmetros!')

        if(typeof array !== 'object') throw new TypeError('Envie um array!')

        if(typeof num !== 'number') throw new TypeError('Envie um número')
        
        if(array.length !== num) throw new RangeError('Tamanho do array inválido')
    }
    catch (e){
        if (e instanceof RangeError){
            console.log('RangeError!')
            console.log(e.stack)
        } 
        else if (e instanceof ReferenceError){
            console.log('ReferenceError!')
            console.log(e.stack)
        }
        else{
            console.log('Outro tipo de erro!')
            console.log(e.stack)
        }
    }
}

console.log(validaArray([1, 2, 3], 0))
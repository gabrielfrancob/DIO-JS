function substitui(array){
    if(!array) return;

    if(array.length == 0){
        return -1
    }

    for(let i in array){
        if(array[i] % 2 == 0 && array[i] != 0){
            console.log(`Trocando ${array[i]} por 0...`)
            array[i] = 0
        } 
    }
}

let vetor = [1, 3, 4, 6, 80, 33, 23, 90]

console.log(vetor)

substitui(vetor)

console.log(vetor)
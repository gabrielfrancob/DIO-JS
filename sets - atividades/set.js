function elementosUnicos(array){
    let unicos = new Set(array)
    return [...unicos]
}

const vetor = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(elementosUnicos(vetor))
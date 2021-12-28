function filtraPar(arr){
    if(!arr || !arr.length) return

    const arrayFitrado = arr.filter((item) => item % 2 === 0)

    return arrayFitrado
}

console.log(filtraPar([1, 2, 3, 4, 5, 6]))
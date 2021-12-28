const laranja = {
    preco: 2
}

const maçã = {
    preco: 1.5
}

function mapArray(array , obj){
    return array.map(function (item){
        return item * this.preco
    }, obj) 
}

const array = [1, 2, 3, 4, 5]

console.log(mapArray(array, maçã))
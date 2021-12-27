// Async - Blocos executados simultâneamente a outros
// Promises - São literalmente promessas que podem ser cumpridas, rejeitadas ou estarem a serem feitas

// Estrutura de uma promise

/*
const myPromise = new Promise((resolve, reject) =>{
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'))
    }, 2000)
})

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message))

*/
// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"

// Async/await funções assíncronasa PRECISAM dessas duas palavras

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida')
        }, 3000)
    })

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message))

    return resolved
}

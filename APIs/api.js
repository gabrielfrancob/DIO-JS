// As APIs servem para intermediar os resultados do back-end no front-end

// fetch

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',

})
    .then(response => response.json())
    .then(json => console.log(json))
// Retorna uma promise
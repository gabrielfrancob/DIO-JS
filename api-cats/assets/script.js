const CAT_API ='https://thatcopy.pw/catapi/rest/'
const CHANGE_BUTTON = document.getElementById('change-cat')

// Função para pegar as imagens dos gatos na api
const getCats = async () =>{
    try{
        const data = await fetch(CAT_API) // retorna a string da api
        const cat_json = await data.json() // transforma a string em json

        return cat_json.webpurl // retorna uma versão mais compacta das imgs
    }
    catch (e){
        console.log(e.message)
    }
}

// Função para enviar as imagens para o site
const loadImg = async () =>{
    const CAT_IMG = document.getElementById('cat')
    CAT_IMG.src = await getCats()
}

// Adiciona a função de trocar a imagem no botão, no HTML
CHANGE_BUTTON.addEventListener('click', loadImg)

// Carrega a imagem assim que o site carregar
loadImg()
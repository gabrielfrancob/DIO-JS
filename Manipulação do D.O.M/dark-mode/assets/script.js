const body = document.getElementsByTagName('body')[0]
const changeText = document.getElementById('text')
const changeBtn = document.getElementById('change')
const darkMode = 'dark-mode'

function trocaClasses(){
    body.classList.toggle(darkMode)
    changeText.classList.toggle(darkMode)
    changeBtn.classList.toggle(darkMode)
}

function trocaTexto(){
    const light = 'Light mode'
    const dark = 'Dark mode'

    if(body.classList.contains(darkMode)){
        changeText.innerHTML = light
        changeBtn.innerHTML = dark + ' ON'
        return
    }
    
    changeText = light + ' ON'
    changeBtn = dark
}

function trocaModo(){
    trocaClasses()
    trocaTexto()
}

changeBtn.addEventListener('click', trocaModo)
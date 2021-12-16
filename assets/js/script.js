var tag_numeroAtual = document.getElementById('numeroAtual')
var numeroAtual = 0

function increment(){
    numeroAtual += 1
    tag_numeroAtual.innerText = numeroAtual
}

function decrement(){
    numeroAtual -= 1
    tag_numeroAtual.innerText = numeroAtual
}
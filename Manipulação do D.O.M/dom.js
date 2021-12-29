/* ----------------------------------------------------------------------*/

// Métodos

// Selecionando os elementos de uma página

document.getElementById('nome-id')
// Nesse método, você seleciona um elemento pelo id dele, passando o nome do id como parâmetro.

document.getElementsByClassName('nome-class')
/* 
    Praticamente idêntico ao getElementById, neste você seleciona pela classe, passando o nome da classe no parâmetro, e ele retorna um array com os elementos que contem essa classe específica.
*/

document.getElementsByTagName('li')
// Aqui você seleciona o elemento pela tag, nesse caso, eu estaria selecionando  a tag li.

document.querySelectorAll('.primeira-classe .segunda-classe')
// Neste, faz uma busca personalizada para encontrar o elemento que contém essas duas classes. Também retorna um array.

document.querySelectorAll('li .opcao')
// Também pode ser usado com tags.

/* ----------------------------------------------------------------------*/

// Adicionar e deletar elementos.

document.createElement('nome-tag')
// Cria um elemento, passando a tag a ser criada como parâmetro.

document.removeChild('nome-tag')
// Remove o(s) elemento(s) filho(s) de um elemento pai.

document.appendChild('nome-tag')
// Adiciona um  elemento filho a um elemento pai.

document.replaceChild('nova-tag', 'antiga-tag')
// Substitui um elemento.

/* ----------------------------------------------------------------------*/

// Trabalhando com estilos

const meuElemento = document.getElementById('meu-elemento') // Supondo que há um elemento com o id='meu-elemento'.

meuElemento.classList.add('novo-estilo')
// Adiciona a classe 'novo-estilo'.

meuElemento.classList.remove('class')
// Remove a classe 'class'.

meuElemento.classList.toggle('dark-mode')
// Adiciona a classe 'dark-mode' caso ela não faça parte da lista, e remove ela caso faça.

/* ----------------------------------------------------------------------*/

// Adicionando CSS diretamente

document.getElementsByTagName('p').style.color = "blue"
// Acessa o(s) elemento(s) de tag 'p', e troca a cor da fonte para azul

/* ----------------------------------------------------------------------*/

// Eventos

/*
    Tipos de eventos
    
    mouseover - quando o cursor entra na área do elemento
    mouseout - quando o cursor sai da área do elemento
    click - quando você clica com o mouse
    dbclick - quando você da um clique duplo
    Change - muda um elemento em tempo real
    load - quando o a página carrega

*/

// Event listener

const botao = document.getElementById("meuBotao")
 
botao.addEventListener("click", funcao)
// Cria um evento, que vai reagir em torno da funcao, quando o evento de clique for feito
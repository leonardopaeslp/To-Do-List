// Pegar os elementos do site 
const btnAdicionar = document.querySelector('#btnAdicionar')
const campoNovaTarefa = document.querySelector('#escreverTarefa')
const section = document.querySelector('section')

// Eventos dos botões
btnAdicionar.addEventListener('click', adicionar)

campoNovaTarefa.addEventListener('keydown', (e) => {
  if (campoNovaTarefa.value.length > 0) {
    if (e.key === "Enter") {
      criarElementos()
      campoNovaTarefa.value = ""
    }
  } 
})


function adicionar(evento) {
  evento.preventDefault()
  //criaçao de elemento
  if (campoNovaTarefa.value.length == "") {
    alert('Insira uma tarefa!')
  } else{
    criarElementos()
    campoNovaTarefa.value = ""
  }

}

function criarElementos() {
  // Criar elementos
  const criarDiv = document.createElement('div')
  const criarP = document.createElement('p')
  // Atribuir id e classe ao parágrafo
  criarP.setAttribute('id', 'item')
  criarDiv.classList.add('tarefas')
  // Adicionar os elementos na Div
  section.appendChild(criarDiv)
  criarDiv.appendChild(criarDone())
  criarDiv.appendChild(criarP)
  criarDiv.appendChild(deletar())

  manipulacaoDados(criarP)
}

function criarDone() {
  const criarinput = document.createElement('input')
  criarinput.setAttribute('type', 'checkbox')
  criarinput.setAttribute('id', 'checkbox')
  criarinput.addEventListener('click', riscar)
  return criarinput
}
function riscar(e) {
  e.target.nextElementSibling.classList.toggle('done')
  e.currentTarget.parentElement.classList.toggle('divDone') 
}

function deletar() {
  const criarinputBtn = document.createElement('input')
  criarinputBtn.setAttribute('type', 'button')
  criarinputBtn.setAttribute('value', 'X')
  criarinputBtn.setAttribute('id', 'btnRemover')
  criarinputBtn.addEventListener('click', deletarTarefa)
  return criarinputBtn
}

function deletarTarefa(e) {
  e.target.parentElement.remove()
}

function manipulacaoDados(criarp) {
  const valorCampo = campoNovaTarefa.value
  criarp.innerText = valorCampo
}


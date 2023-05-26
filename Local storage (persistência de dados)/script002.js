//Exemplo de uso do local storage

//Criando programa onde, que através do valor digitado no input seja alterado o titulo(h1) e que a alteração feita persista no navegador mesmo que o usuário atualize a página
onload = function (){
    let nome = localStorage.getItem("nome")
    let h1 = document.getElementById('nome')
    h1.innerHTML = nome
}
function atualizar(element){
    let valor = element.value
    console.log(valor)
    let h1 = document.getElementById('nome')
    h1.innerHTML = valor
    localStorage.setItem("nome", valor)
}
//Usando função e evento para alterar o titulo 

//evento só é acionado quando a página carregar
function loaded(){
    let titulo = document.getElementById("titulo") //capturando o titulo pelo o id
    // titulo.onclick = mudarTexto //titulo com o evento click recebendo o novo texto que está dentro de uma função
    // titulo.onmouseout = mouseFora

    //outra forma de fazer isso
    titulo.addEventListener("mouseover", mudarTexto)
    titulo.addEventListener("mouseout", mouseout)
}
function mudarTexto(){
    this.innerHTML = "Clicado"
}

function mouseout(){
    this.innerHTML = "Mouse fora"
}
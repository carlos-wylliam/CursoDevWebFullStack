function changeH1(input){
    //capturando o titulo
    let titulo = document.getElementsByTagName("h1")[0] //especificando o indice
    titulo.innerText = input.value //titulo vai receber o valor do input
}
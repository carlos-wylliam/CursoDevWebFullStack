var numero = 0
var interval;

function atualizarTexto(){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerHTML += " " + numero
    numero++
}
function iniciar(){
    interval = setInterval(atualizarTexto,1000)
}
function parar(){
    clearInterval(interval)
}
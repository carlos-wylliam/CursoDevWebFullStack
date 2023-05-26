let pessoas = ["Carlos", "Wylliam", "jose", "Ecio", "Gabriel"]

function sortear(){
    let np = pessoas.length
    let ns = Math.floor(Math.random() * np)
    document.getElementById("nome").innerHTML = pessoas[ns]
}
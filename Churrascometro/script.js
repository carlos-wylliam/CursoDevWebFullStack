//capturar os inputs
let inputAdultos = document.getElementById('adultos')
let inputCrianças = document.getElementById('crianças')
let inputDuração = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

//ação de clique
function calcular(){
    //capturando os valores dos inputs
    let adulto = inputAdultos.value
    let crianças = inputCrianças.value
    let duracao = inputDuração.value

    let qtdTotalCarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianças)
    let qtdTotalCerveja = cervejaPP(duracao * adulto)
    let qtdTotalBebidas = bebidaPP(duracao) * adulto + ( bebidaPP(duracao) /2* crianças)

    //inserindo o resultado na tela
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de carne`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)}Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's 2l bebidas`
}

//funções para saber se o churrasco vai ter mais de seis horas de duração
function carnePP(duracao){
    if(duracao >=6){
        return 600
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >=6){
        return 2000
    }else{
        return 1200
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}
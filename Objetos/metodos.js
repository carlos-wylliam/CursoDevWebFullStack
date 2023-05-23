//metodos em objetos é o uso de função dentro dos objetos 

//funcão da operacao aritmetica
function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2
    //O this é usado nessa situação para diferenciar o objeto aluno1 do objeto aluno2 quando a função calcMedia() é chamada.
}

//objeto do aluno 1 e suas propriedades
let aluno1 = {
    nome: "Carlos",
    notas:[8,10],
    media:calcMedia
}

//objeto do aluno2 e suas propriedades
let aluno2 = {
    nome: "Ecio",
    notas:[7,7],
    media:calcMedia
}
//imprimindo o resultado
console.log(aluno1.nome)
console.log(aluno1.media())

//imprimindo o resultado
console.log(aluno2.nome)
console.log(aluno2.media())
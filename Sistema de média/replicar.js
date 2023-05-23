//entrada de dados
let nomes = ["Carlos", "Ecio", "Gabriel"]
let notaA = [7.0, 8.0, 9.0]
let notaB = [3.0, 8.0, 7.0]

//operação aritmética
function media(n1,n2){
    return (n1+n2)/2
}

//teste lógico para saber se o aluno foi aprovado ou reprovado
function passou(media){
    if(media >=7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

//iterar os vetores
for(let index in nomes){
    //analisando o vetor notaA
    nota1 = notaA[index]
    //analisando o vetor notaB
    nota2 = notaB[index]
    //passando como argumento o valor armazenado em nota1, nota2 para a função média
    var m = media(nota1,nota2)

    console.log(nomes[index] + "-" + nota1 + "-" + nota2 + "-" + m + "-" + passou(m))
}
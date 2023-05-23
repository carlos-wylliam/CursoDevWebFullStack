//entrada de dados
let nomes = ["João", "Ecio", "Gabriel"]
let notaA = [7.0, 6.5, 9]
let notaB = [8.0, 7.0, 8.5]

//funcao de calculo da media
//quem está passando os valores para os parametros n1 e n2 é os vetores notaA e notaB
function media(n1,n2){
    return (n1+n2) / 2
}

//teste lógico para saber se um aluno foi aprovado ou reprovado
function passou(media){
    if(media >= 7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

//iterando o vetor, percorrendo e analisando o vetor

for(let index in nomes){ //estrutura de loop, o index percorre o vetor nomes e armazena cada item do vetor na variavel index, o for-in serve justamente para isso, para analisar o vetor e armanzenar na variavel index
    let nota1 = notaA[index] //notaA é o vetor com as notas, aqui é a nota com a posição do index e no final o valor achado é armazenado na variavel nota1
    let nota2 = notaB[index]//notaB é o vetor com as notas, aqui é a nota com a posição do index e no final o valor achado é armazenado na variavel nota2, por exemplo: notaA[index], posição inicial é 0, então é a nota 7.0
    
    var m = media(nota1,nota2) //chamando a função média, e passando os parametros nota1, nota2 esses parametros vão ser passados para a função média e retornar o valor da equação na variavel m
    
    console.log(nomes[index] + "-" + nota1 + "-" + nota2 + "-" + m + "-" + passou(m) )
}



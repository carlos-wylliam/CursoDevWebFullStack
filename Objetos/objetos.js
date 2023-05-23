//Objeto é semelhante mas não igual a um array
//Dentro de um objeto posso criar propriedades que se assemelha a variaveis, onde posso armazenar todos os tipos de dados

//Exemplo de um objeto
let aluno = {
    nome : "Carlos",
    idade : [19],
    curso :"Analise e desenvolvimento de sistemas"
}

//Uma das varias formas de imprimir as propriedades de um objeto
console.log(aluno.nome)
console.log(aluno.idade[0])

//Uma forma de inserir propriedades dentro de um objeto
aluno.matricula = 12345
aluno.sobrenome = "Wylliam"

//imprimindo o objeto todo
console.log(aluno)
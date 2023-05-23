//função construtora, criando objetos representado alunos
function aluno (nome, n1,n2){
    //propriedades
    this.nome = nome, //propriedade nome recebe o valor passado como argumento nome
    this.nota1 = n1,  //propriedade nota1 recebe o valor passado como argumento n1
    this.nota2 = n2,  //propriedade nota2 recebe o valor passado como argumento n2
    //o this nessa situação está se referindo aos argumentos da minha instância
    //o this dentro da função construtora se refere a essa instância específica. Isso significa que o this.nome será atribuído ao nome fornecido como argumento "Carlos", e this.nota1 e this.nota2 serão atribuídos às notas fornecidas 8 e 7, respectivamente.
    this.media = function (){
        return (this.nota1 + this.nota2) / 2
    }
}

//instâncias (objetos)
var a = new aluno ("Carlos", 8, 7) //cria um objeto a representando o aluno carlos, com notas 8 e 7
var b = new aluno ("Ecio", 6, 10)  //cria um objeto b representando o aluno ecio, com notas 6 e 10

console.log(a.media())
console.log(b.media())

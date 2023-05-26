//JSON tem duas propriedades JSON.stringfy e JSON.parse
//JSON.stringify - transforma um objeto em string
//JSON.parse - trasnforma uma string em um objeto

let a = {
    nome:"Carlos",
    nota: 10
}

let a1 = JSON.stringify(a)

console.log(`Objeto normal ${a}`)
console.log(`Objeto a transformado em string ${a1}`)

let b = '{"nome":"Carlos","nota":10}'
let b1 = JSON.parse(b)

console.log(`Trasnformando uma string em um objeto ${b1}`)
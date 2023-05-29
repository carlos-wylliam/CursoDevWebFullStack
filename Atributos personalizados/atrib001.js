//1º forma de fazer isso
let image = document.getElementById('img')
image.addEventListener("click", function (){
    image.src = ""
})

//2º forma de fazer a mesma coisa
// let image = document.getElementById('img')
// image.addEventListener("click", function(){
//     image.setAttribute("src", "./icone-css.png")
// })
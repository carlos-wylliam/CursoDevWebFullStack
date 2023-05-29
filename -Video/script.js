let video = document.getElementById("video")

function retornar(){
    video.currentTime -= 15
}

function avancar(){
    video.currentTime += 15
}

function aumentarVel(){
    video.playbackRate += 0.1
}

function diminuirVel(){
    video.playbackRate -= 0.1
}

function play(){
    video.play()
}

function parar(){
    video.pause()
}
function passarMouse(){
    let controles = document.getElementById("controles")
    controles.style.opacity = 1;
}
function tirarMouse(){
    let controles = document.getElementById("controles")
    controles.style.opacity = 0;
}
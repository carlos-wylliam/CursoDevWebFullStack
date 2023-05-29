let tela = document.getElementById("tela")
let contexto = tela.getContext("2d")

contexto.moveTo(0,0) //movimento inicial
contexto.lineTo(250,250)//movimentação, do topo até o centro em diagonal
contexto.lineTo(500,0)//movimentação do centro até o topo do lado direito diagonal 
contexto.lineWidth = 5
contexto.strokeStyle = "#FF0000"
contexto.stroke()
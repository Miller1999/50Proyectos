const lleno = document.querySelector(".fill")
const vacios = document.querySelectorAll(".vacio")

lleno.addEventListener("dragstart",dragStart)
lleno.addEventListener("dragend",dragEnd)

for (const vacio of vacios){
    vacio.addEventListener("dragover",dragOver)
    vacio.addEventListener("dragenter",dragEnter)
    vacio.addEventListener("dragleave",dragLeave)
    vacio.addEventListener("drop",dragDrop)
}

function dragStart(){
    this.className += " seleccionado"
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(){
    this.className = "fill"
}

function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault()
    this.className += " sobre"
}
function dragLeave(){
    this.className = "vacio"
}
function dragDrop(){
    this.className = "vacio"
    this.append(lleno)
}
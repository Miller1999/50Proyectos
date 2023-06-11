const boton = document.getElementById("buscar")
const input = document.getElementById("busqueda")
const contenedor = document.getElementById("contenedor")

boton.addEventListener("click",(e)=>{
    if(e.target.id == "buscar"){
        input.classList.toggle("hidden")
        contenedor.classList.toggle("contenedorC")
    }
})
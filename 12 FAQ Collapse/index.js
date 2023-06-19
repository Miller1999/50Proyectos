
const botones = document.querySelectorAll("button")


console.log(botones)

botones.forEach(boton =>{
    boton.addEventListener("click",(e)=>{
        const botonPadre = e.target.parentNode
        const tarjeta = botonPadre.parentNode
        if(tarjeta.classList.contains("mitad")){
            tarjeta.classList.toggle("mitad")
            tarjeta.classList.toggle("activa")
        }
        else{
            tarjeta.classList.toggle("mitad")
            tarjeta.classList.toggle("activa")
        }
    })
})
const botones = document.querySelectorAll("button")
const circulo = document.getElementById("circulo")
const superior = document.getElementById("superior")

botones.forEach(boton => {
    boton.addEventListener("click",(e) => {
        console.log(e.target.id)
        if(e.target.id == "nav"){
            circulo.classList.add("girarCirculo")
            superior.classList.add("mostrarNav")
        }
        else if(e.target.id == "cerrar"){
            circulo.classList.remove("girarCirculo")
            superior.classList.remove("mostrarNav")
        }
    })
})
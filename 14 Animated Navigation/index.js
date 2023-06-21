const boton = document.querySelector("button")
const navegacion = document.querySelector("nav")
const textos = document.querySelectorAll("a")
const lista = document.getElementById("lista")
const barras = document.querySelectorAll("div")

console.log(lista)

boton.addEventListener("click",()=>{
    navegacion.classList.toggle("p")
    textos.forEach(texto =>{
        texto.classList.toggle("hidden")
    })
    boton.classList.toggle("mover")
    barras.forEach(barra =>{
        barra.classList.toggle("girar")
    })
})
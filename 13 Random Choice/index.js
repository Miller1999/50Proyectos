const textarea = document.getElementById("info")
const contenedor = document.getElementById("contenedorCreadas")

console.log(textarea)

textarea.addEventListener("keyup",(e)=>{
    crearNuevo(e.target.value)
})



const crearNuevo = (input) =>{
    const palabras = input.split(",").filter(palabra => palabra.trim() !== "").map(palabra => palabra.trim())
    console.log(palabras)
    contenedor.innerHTML = ""
    palabras.forEach(palabra => {
        const nuevoP = document.createElement("p")
        nuevoP.classList.add("nuevas")
        const contenido = `${palabra}`
        nuevoP.innerText = contenido
        contenedor.appendChild(nuevoP)
    })

}
const textarea = document.getElementById("info")
const contenedor = document.getElementById("contenedorCreadas")

console.log(textarea)

textarea.addEventListener("keyup",(e)=>{
    crearNuevo(e.target.value)
    if(e.key == "Enter"){
        randomSelect()
    }
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

function palabraRandom (){
    const palabras = document.querySelectorAll("p")
    return palabras[Math.floor(Math.random()*palabras.length)]
}
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = palabraRandom()

        resaltada(randomTag)

        setTimeout(() => {
            noresaltada(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = palabraRandom()

            resaltada(randomTag)
        }, 100)

    }, times * 100)
}

function resaltada(word){
    word.classList.add("highlight")
}
function noresaltada(word){
    word.classList.remove("highlight")
}
const tarritos = document.querySelectorAll(".tarrito")
const lleno = document.getElementById("lleno")
const litros = document.getElementById("litros")
const cantidad = document.getElementById("cantidad")

console.log(lleno)

llenandoJarra()

tarritos.forEach((tarrito, indice) => {
    tarrito.addEventListener('click', () => tarritosLLenos(indice))
})

function tarritosLLenos(indice) {
    if(tarritos[indice].classList.contains('activo') && !tarritos[indice].nextElementSibling.classList.contains('activo')) {
        indice--
    }

    tarritos.forEach((tarrito, indice2) => {
        if(indice2 <= indice) {
            tarrito.classList.add('activo')
        } else {
            tarrito.classList.remove('activo')
        }
    })

    llenandoJarra()
}


function llenandoJarra(){
    const tarritosLlenos = document.querySelectorAll(".tarrito.activo").length
    const totalTarritos = tarritos.length

    if(tarritosLlenos == 0){
        lleno.style.visibility = "hidden"
        lleno.style.height = "0px"
    }
    else{
        lleno.style.visibility = "visible"
        lleno.style.height = `${tarritosLlenos / totalTarritos *350}px`
        lleno.innerText = `${tarritosLlenos / totalTarritos * 100}%`
    }
    if(tarritosLlenos === totalTarritos) {
        litros.style.visibility = 'hidden'
        litros.style.height = 0
    } else {
        litros.style.visibility = 'visible'
        cantidad.innerText = `${2 - (250 * tarritosLlenos / 1000)}L`
    }
}
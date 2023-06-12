const texto = document.getElementById("texto")
const imagen = document.getElementById("imagen")

let carga  = 0

let int = setInterval(loading,30)

function loading(){
    carga++
    if(carga > 99){
        clearInterval(int)
    }
    texto.innerHTML = `${carga}%`
    texto.style.opacity = scale(carga,0,100,1,0)
    imagen.style.filter = `blur(${scale(carga,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

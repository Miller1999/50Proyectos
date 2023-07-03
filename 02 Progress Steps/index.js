//Declaraciones
const paso1 = document.getElementById("1")
const paso2 = document.getElementById("2")
const paso3 = document.getElementById("3")
const paso4 = document.getElementById("4")
const barra1 = document.getElementById("1a2")
const barra2 = document.getElementById("2a3")
const barra3 = document.getElementById("3a4")
const botones = document.querySelectorAll("button")
let pasos = 1

botones.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(e.target.id == "anterior"){
            pasos--
            step(pasos)
        }
        if(e.target.id == "siguiente"){
            step()
            pasos++
            step(pasos)
        }
    })
});
if(paso1.classList.contains("circuloGrandeActivo") && paso2.classList.contains("circuloGrandeInactivo") && paso3.classList.contains("circuloGrandeInactivo") && paso4.classList.contains("circuloGrandeInactivo")){
    botones[0].disabled = true
}

const step = (pasos) => {
    if(pasos === 1){
        paso2.classList.add("circuloGrandeInactivo")
        paso3.classList.add("circuloGrandeInactivo")
        paso4.classList.add("circuloGrandeInactivo")
        barra1.classList.remove("barraSuperiorActiva")
        botones[0].disabled = true
    }
    if(pasos === 2){
        paso2.classList.add("circuloGrandeActivo")
        paso2.classList.remove("circuloGrandeInactivo")
        paso3.classList.add("circuloGrandeInactivo")
        paso3.classList.remove("circuloGrandeActivo")
        barra1.classList.add("barraSuperiorActiva")
        barra2.classList.remove("barraSuperiorActiva")
        botones[0].disabled = false
    }
    if(pasos === 3){
        paso3.classList.add("circuloGrandeActivo")
        paso3.classList.remove("circuloGrandeInactivo")
        paso4.classList.add("circuloGrandeInactivo")
        paso4.classList.remove("circuloGrandeActivo")
        barra2.classList.add("barraSuperiorActiva")
        barra3.classList.remove("barraSuperiorActiva")
        botones[1].disabled = false
    }
    if(pasos === 4){
        paso4.classList.add("circuloGrandeActivo")
        paso4.classList.toggle("circuloGrandeInactivo")
        barra3.classList.add("barraSuperiorActiva")
        botones[1].disabled = true
    }
}


